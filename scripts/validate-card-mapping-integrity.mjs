import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { S3Client, HeadObjectCommand } from '@aws-sdk/client-s3';
import { GENERATED_CARDS } from '../shared/cardsData.generated.ts';
import { CARD_CROSSCHECK_RECORDS } from '../shared/cardsCrosscheck.generated.ts';
import { CARD_WIKI_TEXT_BY_SLUG } from '../shared/cardsWikiFallback.generated.ts';

const DEFAULT_BUNDLE_ROOT =
  '/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v2/named_assets';
const BUNDLE_ROOT = process.env.STS2_BUNDLE_ROOT ?? DEFAULT_BUNDLE_ROOT;
const CARD_DATA_CSV = path.join(BUNDLE_ROOT, 'card_data_full.csv');
const ASSET_BASE_URL = (process.env.STS2_ASSET_BASE_URL ?? 'https://assets.sts2guide.com').replace(/\/+$/, '');
const IMAGE_KEY_PREFIX = (process.env.STS2_IMAGE_KEY_PREFIX ?? 'assets/sts2/cards').replace(/^\/+|\/+$/g, '');
const R2_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET = process.env.R2_BUCKET ?? 'sts2-assets';
const R2_ENDPOINT = process.env.R2_ENDPOINT ?? (R2_ACCOUNT_ID ? `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com` : '');
const OUTPUT_REPORT = new URL('../ops-logs/card-mapping-integrity-2026-03-10.md', import.meta.url);

function parseCsvLine(line) {
  const values = [];
  let value = '';
  let inQuote = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuote && line[i + 1] === '"') {
        value += '"';
        i += 1;
      } else {
        inQuote = !inQuote;
      }
      continue;
    }
    if (char === ',' && !inQuote) {
      values.push(value);
      value = '';
      continue;
    }
    value += char;
  }
  values.push(value);
  return values;
}

function parseCsv(text) {
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = parseCsvLine(lines[0]);
  return lines.slice(1).map((line) => {
    const cols = parseCsvLine(line);
    return headers.reduce((row, header, index) => {
      row[header] = cols[index] ?? '';
      return row;
    }, {});
  });
}

function safeJsonParse(value) {
  if (!value) return {};
  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function renderOfficialDescription(rawDescription, baseDynamicVars) {
  const vars = safeJsonParse(baseDynamicVars);
  return (rawDescription || '')
    .replace(/\{([A-Za-z0-9_]+)(?::[^}]*)?\}/g, (_, key) => {
      const resolved = vars[key];
      if (resolved === undefined || resolved === null || resolved === '') return key;
      return String(resolved);
    })
    .replace(/\[\/?[a-z]+\]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeText(value) {
  return String(value || '')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[^\w\s%+.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function hasTemplateArtifacts(text) {
  return (
    /\b[A-Za-z]+Power\b/.test(text) ||
    /\b[A-Za-z]+If\w+\b/.test(text) ||
    /\{[^}]*$/.test(text) ||
    /\{[^}]*\}/.test(text) ||
    /\bCards cards\b/.test(text) ||
    /\bHpLoss\b/.test(text)
  );
}

function md5(buffer) {
  return createHash('md5').update(buffer).digest('hex');
}

async function fetchBuffer(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  const response = await fetch(url, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; Codex/1.0)' },
    signal: controller.signal,
  }).finally(() => clearTimeout(timer));
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const ab = await response.arrayBuffer();
  return Buffer.from(ab);
}

const r2Client =
  R2_ACCOUNT_ID && R2_ACCESS_KEY_ID && R2_SECRET_ACCESS_KEY && R2_ENDPOINT
    ? new S3Client({
        region: 'auto',
        endpoint: R2_ENDPOINT,
        credentials: {
          accessKeyId: R2_ACCESS_KEY_ID,
          secretAccessKey: R2_SECRET_ACCESS_KEY,
        },
      })
    : null;

async function fetchRemoteImageEtag(slug) {
  const key = `${IMAGE_KEY_PREFIX}/${slug}.webp`;

  if (r2Client) {
    const result = await Promise.race([
      r2Client.send(
        new HeadObjectCommand({
          Bucket: R2_BUCKET,
          Key: key,
        }),
      ),
      new Promise((_, reject) => setTimeout(() => reject(new Error(`R2 get timeout for key ${key}`)), 15000)),
    ]);
    const etag = String(result.ETag || '').replace(/"/g, '').trim();
    if (!etag) throw new Error(`R2 missing ETag for key ${key}`);
    return etag;
  }

  // Fallback path when R2 API credentials are not provided.
  const remoteUrl = `${ASSET_BASE_URL}/${key}`;
  const remoteBuffer = await fetchBuffer(remoteUrl);
  return md5(remoteBuffer);
}

async function runWithConcurrency(items, concurrency, worker) {
  let index = 0;
  const threads = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (true) {
      const current = index;
      index += 1;
      if (current >= items.length) return;
      await worker(items[current]);
    }
  });
  await Promise.all(threads);
}

async function main() {
  const csvRaw = await readFile(CARD_DATA_CSV, 'utf8');
  const rows = parseCsv(csvRaw);
  const bySlug = new Map(rows.map((row) => [row.slug, row]));

  const missingOfficial = [];
  const mismatchedName = [];
  const mismatchedDescription = [];
  const fallbackDescription = [];
  const imageFetchFailed = [];
  const imageHashMismatch = [];
  const duplicateImagePaths = [];

  const imagePathToSlug = new Map();
  const targetCards = GENERATED_CARDS;

  const imageChecks = [];

  for (const card of targetCards) {
    const row = bySlug.get(card.slug);
    if (!row) {
      missingOfficial.push(card.slug);
      continue;
    }

    const expectedName = (row.title_en || '').trim();
    if (expectedName && expectedName !== card.name) {
      mismatchedName.push(`${card.slug}: local="${card.name}" official="${expectedName}"`);
    }

    const officialRendered = renderOfficialDescription(row.description_en || row.smart_description_en || '', row.base_dynamic_vars_json);
    const preferred = CARD_CROSSCHECK_RECORDS[card.slug]?.preferredText ?? card.text;
    const displayed =
      hasTemplateArtifacts(preferred) && CARD_WIKI_TEXT_BY_SLUG[card.slug]
        ? CARD_WIKI_TEXT_BY_SLUG[card.slug]
        : preferred;

    const normalizedDisplayed = normalizeText(displayed);
    const normalizedOfficial = normalizeText(officialRendered);
    const normalizedPreferred = normalizeText(preferred);

    if (normalizedDisplayed !== normalizedOfficial) {
      const fallbackUsed = displayed !== preferred;
      if (fallbackUsed) {
        fallbackDescription.push(
          `${card.slug}: fallback="${displayed}" | official_rendered="${officialRendered || '(empty)'}"`,
        );
      } else {
        mismatchedDescription.push(
          `${card.slug}: local="${displayed}" | official_rendered="${officialRendered || '(empty)'}"`,
        );
      }
    }

    if (card.image?.localPath) {
      const normalizedPath = card.image.localPath.replace(/^\/+/, '');
      const currentOwner = imagePathToSlug.get(normalizedPath);
      if (currentOwner && currentOwner !== card.slug) {
        duplicateImagePaths.push(`${normalizedPath}: ${currentOwner}, ${card.slug}`);
      } else {
        imagePathToSlug.set(normalizedPath, card.slug);
      }

      const localRelativePath = row.relative_image_path;
      imageChecks.push({ slug: card.slug, localRelativePath });
    }
  }

  await runWithConcurrency(imageChecks, 20, async ({ slug, localRelativePath }) => {
    if (!localRelativePath) {
      imageFetchFailed.push(`${slug}: official row missing relative_image_path`);
      return;
    }
    const officialFile = path.join(BUNDLE_ROOT, localRelativePath);
    const remoteUrl = `${ASSET_BASE_URL}/${IMAGE_KEY_PREFIX}/${slug}.webp`;
    try {
      const [officialBuffer, remoteEtag] = await Promise.all([
        readFile(officialFile),
        fetchRemoteImageEtag(slug),
      ]);
      const officialMd5 = md5(officialBuffer);
      if (officialMd5 !== remoteEtag) {
        imageHashMismatch.push(`${slug}: ${remoteUrl}`);
      }
    } catch (error) {
      imageFetchFailed.push(`${slug}: ${remoteUrl} (${error.message})`);
    }
  });

  const report = [
    '# Card Mapping Integrity Report',
    '',
    '- date: 2026-03-10',
    `- cards_checked: ${targetCards.length}`,
    `- official_rows_missing: ${missingOfficial.length}`,
    `- name_mismatch: ${mismatchedName.length}`,
    `- description_mismatch_without_fallback: ${mismatchedDescription.length}`,
    `- description_using_fallback_diff_from_official_rendered: ${fallbackDescription.length}`,
    `- duplicate_image_path: ${duplicateImagePaths.length}`,
    `- image_hash_mismatch_vs_official: ${imageHashMismatch.length}`,
    `- image_fetch_failed: ${imageFetchFailed.length}`,
    '',
    '## Name mismatch sample',
    ...mismatchedName.slice(0, 30).map((line) => `- ${line}`),
    '',
    '## Description mismatch sample',
    ...mismatchedDescription.slice(0, 30).map((line) => `- ${line}`),
    '',
    '## Fallback description sample',
    ...fallbackDescription.slice(0, 30).map((line) => `- ${line}`),
    '',
    '## Image hash mismatch sample',
    ...imageHashMismatch.slice(0, 30).map((line) => `- ${line}`),
    '',
    '## Image fetch failed sample',
    ...imageFetchFailed.slice(0, 30).map((line) => `- ${line}`),
    '',
  ].join('\n');

  await mkdir(new URL('../ops-logs/', import.meta.url), { recursive: true });
  await writeFile(OUTPUT_REPORT, report, 'utf8');

  const hasBlockingIssues =
    missingOfficial.length > 0 ||
    mismatchedName.length > 0 ||
    mismatchedDescription.length > 0 ||
    duplicateImagePaths.length > 0 ||
    imageHashMismatch.length > 0 ||
    imageFetchFailed.length > 0;

  console.log(
    JSON.stringify(
      {
        cardsChecked: targetCards.length,
        missingOfficial: missingOfficial.length,
        nameMismatch: mismatchedName.length,
        descriptionMismatch: mismatchedDescription.length,
        fallbackDescription: fallbackDescription.length,
        duplicateImagePath: duplicateImagePaths.length,
        imageHashMismatch: imageHashMismatch.length,
        imageFetchFailed: imageFetchFailed.length,
      },
      null,
      2,
    ),
  );
  console.log(`Report: ${OUTPUT_REPORT.pathname}`);

  if (hasBlockingIssues) {
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
