#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';

const BUNDLE_DIR =
  process.env.STS2_BUNDLE_DIR ??
  '/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v3/named_assets';
const CACHE_DIR = path.resolve(process.cwd(), '.cache/wiki-relic-potion-images');
const OUTPUT_MD = path.resolve(process.cwd(), 'ops-logs/relic-potion-wiki-compare-2026-03-10.md');
const OUTPUT_JSON = path.resolve(process.cwd(), 'ops-logs/relic-potion-wiki-compare-2026-03-10.json');
const WIKI_BASE = 'https://sts2.wiki';

function mustReadJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function decodeHtml(value = '') {
  return String(value)
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function normalizeText(raw = '') {
  return decodeHtml(String(raw))
    .toLowerCase()
    .replace(/\[[^\]]+\]/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function attrValue(attrs, name) {
  const matched = attrs.match(new RegExp(`${name}="([^"]*)"`, 'u'));
  return matched ? decodeHtml(matched[1]) : '';
}

function slugify(value = '') {
  return decodeHtml(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function parseWikiCards(html, kind) {
  const className = kind === 'relics' ? 'relic-card' : 'potion-card';
  const reg = new RegExp(`<article class="${className}"([^>]*)>([\\s\\S]*?)<\\/article>`, 'gu');
  const rows = new Map();

  let matched = reg.exec(html);
  while (matched) {
    const attrs = matched[1] ?? '';
    const body = matched[2] ?? '';
    const dataName = attrValue(attrs, 'data-name');
    const text = attrValue(attrs, 'data-text');
    const character = attrValue(attrs, 'data-character');
    const rarity = kind === 'relics' ? attrValue(attrs, 'data-rarity') : attrValue(attrs, 'data-type');
    const imageMatch = body.match(/<img[^>]+src="([^"]+)"/u);
    const nameMatch = body.match(new RegExp(`<h2 class="${kind === 'relics' ? 'relic' : 'potion'}-card__title"[^>]*>([^<]+)<\\/h2>`, 'u'));

    const imageUrl = imageMatch ? new URL(imageMatch[1], WIKI_BASE).toString() : '';
    const imageSlug = imageUrl ? path.basename(new URL(imageUrl).pathname).replace(/\.[^.]+$/u, '') : '';
    const slug = imageSlug || slugify(dataName);

    if (slug) {
      rows.set(slug, {
        slug,
        name: decodeHtml(nameMatch?.[1] ?? ''),
        text,
        character,
        rarity,
        imageUrl,
      });
    }
    matched = reg.exec(html);
  }
  return rows;
}

async function fetchWithRetry(url, type) {
  let lastError;
  for (let i = 0; i < 3; i += 1) {
    try {
      const response = await fetch(url, {
        headers: { 'user-agent': 'sts2-guide-bot/1.0' },
        signal: AbortSignal.timeout(type === 'text' ? 30000 : 20000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (type === 'text') return response.text();
      return Buffer.from(await response.arrayBuffer());
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(`Fetch failed for ${url}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

async function fetchText(url) {
  return fetchWithRetry(url, 'text');
}

async function downloadFile(url, targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  if (fs.existsSync(targetPath)) return targetPath;
  const buf = await fetchWithRetry(url, 'binary');
  fs.writeFileSync(targetPath, buf);
  return targetPath;
}

async function runWithConcurrency(items, concurrency, worker) {
  let cursor = 0;
  const threads = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      await worker(items[index], index);
    }
  });
  await Promise.all(threads);
}

function imageDHash(filePath) {
  const proc = spawnSync(
    'ffmpeg',
    ['-v', 'error', '-i', filePath, '-vf', 'scale=9:8:flags=lanczos,format=gray', '-f', 'rawvideo', '-pix_fmt', 'gray', '-'],
    { encoding: 'buffer', maxBuffer: 5 * 1024 * 1024 },
  );
  if (proc.status !== 0) {
    throw new Error(`ffmpeg failed: ${proc.stderr?.toString('utf8') || 'unknown error'}`);
  }
  const data = proc.stdout;
  if (!data || data.length < 72) {
    throw new Error(`Invalid grayscale frame length: ${data?.length ?? 0}`);
  }

  let bits = '';
  for (let y = 0; y < 8; y += 1) {
    for (let x = 0; x < 8; x += 1) {
      const left = data[y * 9 + x];
      const right = data[y * 9 + x + 1];
      bits += left > right ? '1' : '0';
    }
  }
  return bits;
}

function hamming(left, right) {
  const size = Math.min(left.length, right.length);
  let diff = 0;
  for (let i = 0; i < size; i += 1) {
    if (left[i] !== right[i]) diff += 1;
  }
  return diff + Math.abs(left.length - right.length);
}

function scoreLabel(distance) {
  if (distance <= 2) return 'exact-or-near-identical';
  if (distance <= 8) return 'highly-similar';
  if (distance <= 16) return 'possible-match-check-manually';
  return 'likely-mismatch';
}

async function compareKind(kind, localRows, wikiMap) {
  const stats = {
    totalLocal: localRows.length,
    totalWiki: wikiMap.size,
    shared: 0,
    missingOnWiki: [],
    missingLocalImage: [],
    missingWikiImage: [],
    nameMismatch: [],
    textMismatch: [],
    imageCompare: [],
    imageCompareFailed: [],
  };

  const imageTasks = [];

  for (const row of localRows) {
    const slug = row.slug;
    const wiki = wikiMap.get(slug);
    if (!wiki) {
      stats.missingOnWiki.push(slug);
      continue;
    }
    stats.shared += 1;

    if (normalizeText(row.title_en) !== normalizeText(wiki.name)) {
      stats.nameMismatch.push({
        slug,
        local: row.title_en || '',
        wiki: wiki.name || '',
      });
    }

    if (normalizeText(row.description_en) !== normalizeText(wiki.text)) {
      stats.textMismatch.push({
        slug,
        local: row.description_en || '',
        wiki: wiki.text || '',
      });
    }

    if (row.has_image !== '1' || !row.relative_image_path) {
      stats.missingLocalImage.push(slug);
      continue;
    }
    if (!wiki.imageUrl) {
      stats.missingWikiImage.push(slug);
      continue;
    }

    imageTasks.push({
      slug,
      localImagePath: path.join(BUNDLE_DIR, row.relative_image_path),
      wikiImageUrl: wiki.imageUrl,
      wikiImagePath: path.join(CACHE_DIR, kind, `${slug}${path.extname(new URL(wiki.imageUrl).pathname) || '.img'}`),
    });
  }

  await runWithConcurrency(imageTasks, 8, async (task) => {
    try {
      await downloadFile(task.wikiImageUrl, task.wikiImagePath);
      const localHash = imageDHash(task.localImagePath);
      const wikiHash = imageDHash(task.wikiImagePath);
      const distance = hamming(localHash, wikiHash);
      stats.imageCompare.push({
        slug: task.slug,
        distance,
        label: scoreLabel(distance),
        localSha1: createHash('sha1').update(fs.readFileSync(task.localImagePath)).digest('hex'),
        wikiSha1: createHash('sha1').update(fs.readFileSync(task.wikiImagePath)).digest('hex'),
        wikiImageUrl: task.wikiImageUrl,
      });
    } catch (error) {
      stats.imageCompareFailed.push({
        slug: task.slug,
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  });

  stats.imageCompare.sort((a, b) => b.distance - a.distance);
  return stats;
}

function topByLabel(rows, label, limit = 20) {
  return rows.filter((row) => row.label === label).slice(0, limit);
}

function renderSection(title, stats) {
  const imageMismatchAll = stats.imageCompare.filter((row) => row.label === 'likely-mismatch');
  const imageNeedCheckAll = stats.imageCompare.filter((row) => row.label === 'possible-match-check-manually');
  const imageMismatch = imageMismatchAll.slice(0, 20);
  const imageNeedCheck = imageNeedCheckAll.slice(0, 20);
  const imageGood = stats.imageCompare.filter((row) => row.label !== 'likely-mismatch' && row.label !== 'possible-match-check-manually').length;

  return [
    `## ${title}`,
    `- local_rows: ${stats.totalLocal}`,
    `- wiki_rows: ${stats.totalWiki}`,
    `- shared_slug: ${stats.shared}`,
    `- missing_on_wiki: ${stats.missingOnWiki.length}`,
    `- name_mismatch(normalized): ${stats.nameMismatch.length}`,
    `- text_mismatch(normalized): ${stats.textMismatch.length}`,
    `- image_compared: ${stats.imageCompare.length}`,
    `- image_failed: ${stats.imageCompareFailed.length}`,
    `- image_good_or_similar(dHash<=8): ${imageGood}`,
    `- image_need_manual_check(9~16): ${imageNeedCheckAll.length}`,
    `- image_likely_mismatch(>16): ${imageMismatchAll.length}`,
    '',
    '### Image likely mismatch sample',
    ...imageMismatch.slice(0, 30).map((row) => `- ${row.slug}: distance=${row.distance}, wiki=${row.wikiImageUrl}`),
    '',
    '### Image manual-check sample',
    ...imageNeedCheck.slice(0, 30).map((row) => `- ${row.slug}: distance=${row.distance}, wiki=${row.wikiImageUrl}`),
    '',
    '### Name mismatch sample',
    ...stats.nameMismatch.slice(0, 20).map((row) => `- ${row.slug}: local="${row.local}" | wiki="${row.wiki}"`),
    '',
    '### Text mismatch sample',
    ...stats.textMismatch.slice(0, 20).map((row) => `- ${row.slug}`),
    '',
  ].join('\n');
}

async function main() {
  const relicRows = mustReadJson(path.join(BUNDLE_DIR, 'relic_data_full.json'));
  const potionRows = mustReadJson(path.join(BUNDLE_DIR, 'potion_data_full.json'));

  const [relicHtml, potionHtml] = await Promise.all([
    fetchText(`${WIKI_BASE}/relics/`),
    fetchText(`${WIKI_BASE}/potions/`),
  ]);
  const relicWiki = parseWikiCards(relicHtml, 'relics');
  const potionWiki = parseWikiCards(potionHtml, 'potions');

  const relicStats = await compareKind('relics', relicRows, relicWiki);
  const potionStats = await compareKind('potions', potionRows, potionWiki);

  const md = [
    '# Relics / Potions vs sts2.wiki Comparison',
    '',
    `- generated_at: ${new Date().toISOString()}`,
    `- local_source: ${BUNDLE_DIR}`,
    '- method:',
    '  - text: normalized compare (lowercase, strip template tokens and punctuation)',
    '  - image: ffmpeg dHash(64-bit), hamming distance',
    '',
    renderSection('Relics', relicStats),
    renderSection('Potions', potionStats),
  ].join('\n');

  const payload = {
    generatedAt: new Date().toISOString(),
    bundleDir: BUNDLE_DIR,
    relics: relicStats,
    potions: potionStats,
  };

  fs.mkdirSync(path.dirname(OUTPUT_MD), { recursive: true });
  fs.writeFileSync(OUTPUT_MD, md, 'utf8');
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(payload, null, 2), 'utf8');

  console.log(`Saved report: ${OUTPUT_MD}`);
  console.log(`Saved report: ${OUTPUT_JSON}`);
  console.log(
    JSON.stringify(
      {
        relics: {
          compared: relicStats.imageCompare.length,
          likelyMismatch: relicStats.imageCompare.filter((row) => row.label === 'likely-mismatch').length,
        },
        potions: {
          compared: potionStats.imageCompare.length,
          likelyMismatch: potionStats.imageCompare.filter((row) => row.label === 'likely-mismatch').length,
        },
      },
      null,
      2,
    ),
  );
}

await main();
