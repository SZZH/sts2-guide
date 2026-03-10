import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_BUNDLE_ROOT =
  '/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v2/named_assets';
const BUNDLE_ROOT = process.env.STS2_BUNDLE_ROOT ?? DEFAULT_BUNDLE_ROOT;
const CARD_DATA_CSV = path.join(BUNDLE_ROOT, 'card_data_full.csv');
const EXISTING_CARDS_FILE = new URL('../shared/cardsData.generated.ts', import.meta.url);
const REPORT_DIR = new URL('../ops-logs/', import.meta.url);

const VALID_TYPES = new Set(['attack', 'skill', 'power', 'status', 'curse', 'quest']);
const VALID_RARITIES = new Set(['basic', 'starter', 'common', 'uncommon', 'rare', 'special', 'status', 'event', 'ancient', 'curse', 'token', 'quest']);

function parseCsvLine(line) {
  const values = [];
  let value = '';
  let inQuote = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    if (char === '"') {
      if (inQuote && line[index + 1] === '"') {
        value += '"';
        index += 1;
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

function parseExistingSlugs(source) {
  return new Set([...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]));
}

async function main() {
  const [csvRaw, existingRaw] = await Promise.all([
    readFile(CARD_DATA_CSV, 'utf8'),
    readFile(EXISTING_CARDS_FILE, 'utf8'),
  ]);

  const rows = parseCsv(csvRaw);
  const existingSlugs = parseExistingSlugs(existingRaw);
  const bySlug = new Map(rows.map((row) => [row.slug, row]));

  const missingRows = [];
  const missingTitle = [];
  const missingDescription = [];
  const invalidType = [];
  const invalidRarity = [];
  const missingImage = [];

  for (const slug of existingSlugs) {
    const row = bySlug.get(slug);
    if (!row) {
      missingRows.push(slug);
      continue;
    }

    if (!row.title_en?.trim()) missingTitle.push(slug);
    if (!row.description_en?.trim() && !row.smart_description_en?.trim()) missingDescription.push(slug);
    if (!VALID_TYPES.has(row.card_type?.trim().toLowerCase())) invalidType.push(`${slug}:${row.card_type}`);
    if (!VALID_RARITIES.has(row.card_rarity?.trim().toLowerCase())) invalidRarity.push(`${slug}:${row.card_rarity}`);
    if (row.has_image !== '1' || !row.relative_image_path) missingImage.push(slug);
  }

  const passed =
    missingRows.length === 0 &&
    missingTitle.length === 0 &&
    missingDescription.length === 0 &&
    invalidType.length === 0 &&
    invalidRarity.length === 0;

  const today = new Date().toISOString().slice(0, 10);
  const report = [
    '# STS2 Bundle Validation Report',
    '',
    `- date: ${today}`,
    `- bundle_root: ${BUNDLE_ROOT}`,
    `- target_slugs: ${existingSlugs.size}`,
    `- csv_rows: ${rows.length}`,
    `- status: ${passed ? 'PASS' : 'FAIL'}`,
    '',
    '## Checks',
    `- missing_rows: ${missingRows.length}`,
    `- missing_title_en: ${missingTitle.length}`,
    `- missing_description_en: ${missingDescription.length}`,
    `- invalid_card_type: ${invalidType.length}`,
    `- invalid_card_rarity: ${invalidRarity.length}`,
    `- missing_image (warning): ${missingImage.length}`,
    '',
    '## Samples',
    `- missing_rows_sample: ${missingRows.slice(0, 12).join(', ') || 'none'}`,
    `- missing_title_sample: ${missingTitle.slice(0, 12).join(', ') || 'none'}`,
    `- missing_description_sample: ${missingDescription.slice(0, 12).join(', ') || 'none'}`,
    `- invalid_type_sample: ${invalidType.slice(0, 12).join(', ') || 'none'}`,
    `- invalid_rarity_sample: ${invalidRarity.slice(0, 12).join(', ') || 'none'}`,
    `- missing_image_sample: ${missingImage.slice(0, 12).join(', ') || 'none'}`,
    '',
  ].join('\n');

  await mkdir(REPORT_DIR, { recursive: true });
  const reportPath = new URL(`../ops-logs/sts2-bundle-validation-${today}.md`, import.meta.url);
  await writeFile(reportPath, report, 'utf8');

  console.log(`Validation ${passed ? 'PASS' : 'FAIL'}`);
  console.log(`Report: ${reportPath.pathname}`);
  if (!passed) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
