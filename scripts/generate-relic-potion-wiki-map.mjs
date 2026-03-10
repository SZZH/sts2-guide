#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const repoRoot = path.resolve(new URL('..', import.meta.url).pathname);
const cacheRoot = path.join(repoRoot, '.cache', 'wiki-relic-potion-images');
const outputFile = path.join(repoRoot, 'shared', 'relicPotionWikiMap.generated.json');
const WIKI_BASE = 'https://sts2.wiki';

function decodeHtml(value = '') {
  return String(value)
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'");
}

function attrValue(attrs, name) {
  const m = attrs.match(new RegExp(`${name}="([^"]*)"`, 'u'));
  return m ? decodeHtml(m[1]) : '';
}

function listSlugsFromCache(kind) {
  const dir = path.join(cacheRoot, kind);
  if (!fs.existsSync(dir)) return new Set();
  const files = fs.readdirSync(dir).filter((name) => /\.(png|webp|avif|jpe?g)$/iu.test(name));
  return new Set(files.map((name) => name.replace(/\.[^.]+$/u, '')));
}

function parseWikiMap(html, kind) {
  const className = kind === 'relics' ? 'relic-card' : 'potion-card';
  const reg = new RegExp(`<article class="${className}"([^>]*)>([\\s\\S]*?)<\\/article>`, 'gu');
  const result = new Map();

  let matched = reg.exec(html);
  while (matched) {
    const attrs = matched[1] ?? '';
    const body = matched[2] ?? '';
    const text = attrValue(attrs, 'data-text');
    const nameMatch = body.match(new RegExp(`<h2 class="${kind === 'relics' ? 'relic' : 'potion'}-card__title"[^>]*>([^<]+)<\\/h2>`, 'u'));
    const imageMatch = body.match(/<img[^>]+src="([^"]+)"/u);
    if (!imageMatch) {
      matched = reg.exec(html);
      continue;
    }
    const imageUrl = new URL(imageMatch[1], WIKI_BASE).toString();
    const fileName = path.basename(new URL(imageUrl).pathname);
    const slug = fileName.replace(/\.[^.]+$/u, '');
    result.set(slug, {
      name: decodeHtml(nameMatch?.[1] ?? ''),
      description: decodeHtml(text),
      imageFileName: fileName,
    });
    matched = reg.exec(html);
  }
  return result;
}

async function fetchText(url) {
  const proc = spawnSync(
    'curl',
    ['-L', '--fail', '--max-time', '45', '--retry', '2', '--retry-delay', '1', '-A', 'sts2-guide-bot/1.0', url],
    { encoding: 'utf8', maxBuffer: 20 * 1024 * 1024 },
  );
  if (proc.status !== 0) {
    throw new Error(`curl failed for ${url}: ${proc.stderr || proc.stdout || 'unknown'}`);
  }
  return proc.stdout;
}

async function main() {
  const [relicHtml, potionHtml] = await Promise.all([
    fetchText(`${WIKI_BASE}/relics/`),
    fetchText(`${WIKI_BASE}/potions/`),
  ]);
  const relicMap = parseWikiMap(relicHtml, 'relics');
  const potionMap = parseWikiMap(potionHtml, 'potions');

  const relicCacheSlugs = listSlugsFromCache('relics');
  const potionCacheSlugs = listSlugsFromCache('potions');

  const relicOut = {};
  for (const slug of relicCacheSlugs) {
    const row = relicMap.get(slug);
    if (row) relicOut[slug] = row;
  }
  const potionOut = {};
  for (const slug of potionCacheSlugs) {
    const row = potionMap.get(slug);
    if (row) potionOut[slug] = row;
  }

  const payload = {
    relics: relicOut,
    potions: potionOut,
  };

  fs.writeFileSync(outputFile, JSON.stringify(payload, null, 2), 'utf8');
  console.log(`Generated ${outputFile}`);
  console.log(
    JSON.stringify(
      {
        relics: { cache: relicCacheSlugs.size, mapped: Object.keys(relicOut).length },
        potions: { cache: potionCacheSlugs.size, mapped: Object.keys(potionOut).length },
      },
      null,
      2,
    ),
  );
}

await main();
