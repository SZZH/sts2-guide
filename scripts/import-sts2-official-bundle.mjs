import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const REPO_ROOT = new URL('../', import.meta.url);
const DEFAULT_BUNDLE_ROOT =
  '/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v2/named_assets';
const BUNDLE_ROOT = process.env.STS2_BUNDLE_ROOT ?? DEFAULT_BUNDLE_ROOT;
const CARD_DATA_CSV = path.join(BUNDLE_ROOT, 'card_data_full.csv');
const CARDS_OUTPUT_FILE = new URL('../shared/cardsData.generated.ts', import.meta.url);
const IMAGE_OUTPUT_DIR = new URL('../public/assets/sts2/cards/', import.meta.url);
const R2_MANIFEST_FILE = new URL('../ops-logs/sts2-r2-upload-manifest.csv', import.meta.url);
const R2_KEY_PREFIX = (process.env.STS2_R2_KEY_PREFIX ?? 'assets/sts2/cards').replace(/\/+$/, '');
const R2_PUBLIC_BASE = (process.env.STS2_R2_PUBLIC_BASE ?? '').replace(/\/+$/, '');

const TARGET_CHARACTERS = new Set(['ironclad', 'silent', 'defect', 'necrobinder', 'regent', 'colorless']);
const CARD_TYPES = new Set(['attack', 'skill', 'power']);

function escapeText(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

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
  const lines = text
    .replace(/^\uFEFF/, '')
    .split(/\r?\n/)
    .filter((line) => line.length > 0);

  if (lines.length === 0) return [];
  const headers = parseCsvLine(lines[0]);

  return lines.slice(1).map((line) => {
    const columns = parseCsvLine(line);
    return headers.reduce((row, header, index) => {
      row[header] = columns[index] ?? '';
      return row;
    }, {});
  });
}

function parseExistingSlugs(source) {
  return new Set([...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]));
}

function normalizeCharacter(group) {
  const normalized = group.trim().toLowerCase();
  if (TARGET_CHARACTERS.has(normalized)) return normalized;
  return 'colorless';
}

function normalizeType(value) {
  const normalized = value.trim().toLowerCase();
  if (CARD_TYPES.has(normalized)) return normalized;
  return 'skill';
}

function normalizeRarity(value) {
  const normalized = value.trim().toLowerCase();
  if (normalized === 'basic' || normalized === 'starter') return 'starter';
  if (normalized === 'common') return 'common';
  if (normalized === 'uncommon') return 'uncommon';
  if (normalized === 'rare') return 'rare';
  return 'special';
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

function renderDescription(rawDescription, baseDynamicVars) {
  const vars = safeJsonParse(baseDynamicVars);

  return rawDescription
    .replace(/\{([A-Za-z0-9_]+)(?::[^}]*)?\}/g, (_, key) => {
      const resolved = vars[key];
      if (resolved === undefined || resolved === null || resolved === '') return key;
      return String(resolved);
    })
    .replace(/\[\/?[a-z]+\]/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeCost(cost) {
  const normalized = String(cost ?? '').trim();
  if (normalized === '-1') return 'X';
  if (normalized.length === 0) return '0';
  return normalized;
}

async function main() {
  const [csvRaw, existingGenerated] = await Promise.all([
    readFile(CARD_DATA_CSV, 'utf8'),
    readFile(CARDS_OUTPUT_FILE, 'utf8'),
  ]);

  const rows = parseCsv(csvRaw);
  const existingSlugs = parseExistingSlugs(existingGenerated);

  const selected = rows.filter((row) => existingSlugs.has(row.slug));
  selected.sort((left, right) => left.slug.localeCompare(right.slug));

  await mkdir(IMAGE_OUTPUT_DIR, { recursive: true });
  await mkdir(new URL('../ops-logs/', import.meta.url), { recursive: true });

  const outputRows = [];
  const r2ManifestRows = ['slug,local_file,r2_key,public_url'];
  let copiedImages = 0;

  for (const row of selected) {
    const slug = row.slug;
    const character = normalizeCharacter(row.group);
    const type = normalizeType(row.card_type);
    const rarity = normalizeRarity(row.card_rarity);
    const costText = normalizeCost(row.canonical_energy_cost);
    const text = renderDescription(row.description_en || row.smart_description_en || '', row.base_dynamic_vars_json);
    const name = (row.title_en || slug).trim();

    const hasImage = row.has_image === '1' && row.relative_image_path;
    let imageBlock = '';

    if (hasImage) {
      const sourceImage = path.join(BUNDLE_ROOT, row.relative_image_path);
      const targetImage = new URL(`./public/assets/sts2/cards/${slug}.webp`, REPO_ROOT);
      await cp(sourceImage, targetImage);
      copiedImages += 1;
      const r2Key = `${R2_KEY_PREFIX}/${slug}.webp`;
      const publicUrl = R2_PUBLIC_BASE ? `${R2_PUBLIC_BASE}/${slug}.webp` : '';
      r2ManifestRows.push(`${slug},public/assets/sts2/cards/${slug}.webp,${r2Key},${publicUrl}`);
      const width = Number.parseInt(row.image_width, 10);
      const height = Number.parseInt(row.image_height, 10);
      imageBlock = `,\n    image: {\n      localPath: '/assets/sts2/cards/${escapeText(slug)}.webp',\n      width: ${Number.isFinite(width) ? width : 244},\n      height: ${Number.isFinite(height) ? height : 184},\n    }`;
    }

    outputRows.push(`  {\n    id: '${escapeText(character)}-${escapeText(slug)}',\n    slug: '${escapeText(slug)}',\n    name: '${escapeText(name)}',\n    color: '${escapeText(character)}',\n    type: '${escapeText(type)}',\n    rarity: '${escapeText(rarity)}',\n    costText: '${escapeText(costText)}',\n    text: '${escapeText(text)}'${imageBlock},\n    source: {\n      kind: 'public-card-page',\n      note: 'Merged from local STS2 game extract bundle (official assets + localized card metadata)',\n      verifiedAt: '2026-03-10',\n      sourceUrl: 'https://store.steampowered.com/app/2868840/Slay_the_Spire_2/',\n    },\n    updatedAt: '2026-03-10',\n  }`);
  }

  const output = `import type { GeneratedCardRecord } from './cardsData';\n\nexport const GENERATED_CARDS: GeneratedCardRecord[] = [\n${outputRows.join(',\n')}\n];\n`;
  await writeFile(CARDS_OUTPUT_FILE, output);
  await writeFile(R2_MANIFEST_FILE, `${r2ManifestRows.join('\n')}\n`, 'utf8');

  console.log(`Imported ${outputRows.length} cards from local bundle`);
  console.log(`Copied ${copiedImages} card images into public/assets/sts2/cards`);
  console.log(`Generated R2 upload manifest: ${R2_MANIFEST_FILE.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
