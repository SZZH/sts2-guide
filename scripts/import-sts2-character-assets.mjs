import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DEFAULT_BUNDLE_ROOT =
  '/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v2/named_assets';
const BUNDLE_ROOT = process.env.STS2_BUNDLE_ROOT ?? DEFAULT_BUNDLE_ROOT;
const CHARACTERS_CSV = path.join(BUNDLE_ROOT, 'characters_index.csv');
const OUTPUT_DIR = new URL('../public/assets/sts2/characters/', import.meta.url);
const MANIFEST_FILE = new URL('../ops-logs/sts2-r2-character-upload-manifest.csv', import.meta.url);

const TARGET_GROUPS = ['ironclad', 'silent', 'defect', 'necrobinder', 'regent'];

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

function pickPreferred(rows, group) {
  const inGroup = rows.filter((row) => row.group === group);
  if (inGroup.length === 0) return null;

  const exact = inGroup.find((row) => row.slug === `characterselect_${group}`);
  if (exact) return exact;

  const nonBg = inGroup.find((row) => !row.slug.endsWith('_bg'));
  if (nonBg) return nonBg;

  return inGroup[0];
}

async function main() {
  const csvRaw = await readFile(CHARACTERS_CSV, 'utf8');
  const rows = parseCsv(csvRaw).filter((row) => row.category === 'character_select_texture');

  await mkdir(OUTPUT_DIR, { recursive: true });
  await mkdir(new URL('../ops-logs/', import.meta.url), { recursive: true });

  const manifestRows = ['group,local_file,r2_key,public_url'];
  const copied = [];

  for (const group of TARGET_GROUPS) {
    const selected = pickPreferred(rows, group);
    if (!selected) continue;

    const source = path.join(BUNDLE_ROOT, selected.relative_path);
    const target = new URL(`../public/assets/sts2/characters/${group}.webp`, import.meta.url);
    await cp(source, target);

    manifestRows.push(
      `${group},public/assets/sts2/characters/${group}.webp,assets/sts2/characters/${group}.webp,https://assets.sts2guide.com/assets/sts2/characters/${group}.webp`,
    );

    copied.push(`${group}: ${selected.relative_path}`);
  }

  await writeFile(MANIFEST_FILE, `${manifestRows.join('\n')}\n`, 'utf8');

  console.log(`Imported ${copied.length} character images`);
  for (const item of copied) console.log(`- ${item}`);
  console.log(`Generated R2 upload manifest: ${MANIFEST_FILE.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
