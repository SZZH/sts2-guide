#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const BUNDLE_DIR =
  process.env.STS2_BUNDLE_DIR ??
  '/Users/jiaojian/Desktop/sts2/sts2整理过的文件/sts2_site_asset_bundle_v3/named_assets';
const REPORT_PATH = path.resolve(process.cwd(), 'ops-logs/relic-potion-official-consistency-2026-03-10.md');

function mustReadJson(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizeText(value = '') {
  return String(value).replace(/\s+/g, ' ').trim();
}

function validateRows(kind, rows) {
  const dir = path.join(BUNDLE_DIR, kind);
  const bySlug = new Map();
  const issues = {
    duplicateSlug: [],
    missingTitle: [],
    missingDescription: [],
    hasImageButMissingPath: [],
    hasImageButFileNotExists: [],
    filenameStemMismatch: [],
    noImageMarked: [],
  };

  for (const row of rows) {
    const slug = String(row.slug || '').trim();
    if (!slug) continue;

    if (bySlug.has(slug)) {
      issues.duplicateSlug.push(slug);
    } else {
      bySlug.set(slug, row);
    }

    if (!normalizeText(row.title_en)) {
      issues.missingTitle.push(slug);
    }
    if (!normalizeText(row.description_en)) {
      issues.missingDescription.push(slug);
    }

    const hasImage = String(row.has_image) === '1';
    if (!hasImage) {
      issues.noImageMarked.push(slug);
      continue;
    }

    const relative = String(row.relative_image_path || '').trim();
    if (!relative) {
      issues.hasImageButMissingPath.push(slug);
      continue;
    }

    const fileName = path.basename(relative);
    const stem = fileName.replace(/\.[^.]+$/u, '');
    if (stem !== slug) {
      issues.filenameStemMismatch.push(`${slug} -> ${fileName}`);
    }

    const absPath = path.join(BUNDLE_DIR, relative);
    if (!fs.existsSync(absPath)) {
      issues.hasImageButFileNotExists.push(`${slug} -> ${relative}`);
    }
  }

  return {
    total: rows.length,
    uniqueSlug: bySlug.size,
    issues,
  };
}

function renderSection(title, result) {
  const { issues } = result;
  return [
    `## ${title}`,
    `- total_rows: ${result.total}`,
    `- unique_slug: ${result.uniqueSlug}`,
    `- duplicate_slug: ${issues.duplicateSlug.length}`,
    `- missing_title_en: ${issues.missingTitle.length}`,
    `- missing_description_en: ${issues.missingDescription.length}`,
    `- has_image_but_missing_relative_path: ${issues.hasImageButMissingPath.length}`,
    `- has_image_but_file_not_exists: ${issues.hasImageButFileNotExists.length}`,
    `- filename_stem_mismatch_with_slug: ${issues.filenameStemMismatch.length}`,
    `- has_image_marked_0: ${issues.noImageMarked.length}`,
    '',
    '### filename_stem_mismatch sample',
    ...issues.filenameStemMismatch.slice(0, 30).map((line) => `- ${line}`),
    '',
    '### has_image_but_file_not_exists sample',
    ...issues.hasImageButFileNotExists.slice(0, 30).map((line) => `- ${line}`),
    '',
  ].join('\n');
}

function main() {
  const relicRows = mustReadJson(path.join(BUNDLE_DIR, 'relic_data_full.json'));
  const potionRows = mustReadJson(path.join(BUNDLE_DIR, 'potion_data_full.json'));

  const relicResult = validateRows('relics', relicRows);
  const potionResult = validateRows('potions', potionRows);

  const report = [
    '# Relic / Potion Official Consistency Report',
    '',
    `- generated_at: ${new Date().toISOString()}`,
    `- source_bundle: ${BUNDLE_DIR}`,
    '- rule:',
    '  - 仅以官方导出的 slug/title_en/description_en/relative_image_path/has_image 为准',
    '  - 检查 slug 与图片文件名 stem 是否一致',
    '  - 检查 has_image=1 的图片文件是否真实存在',
    '',
    renderSection('Relics', relicResult),
    renderSection('Potions', potionResult),
  ].join('\n');

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, report, 'utf8');

  const hardErrors =
    relicResult.issues.duplicateSlug.length +
    relicResult.issues.hasImageButMissingPath.length +
    relicResult.issues.hasImageButFileNotExists.length +
    potionResult.issues.duplicateSlug.length +
    potionResult.issues.hasImageButMissingPath.length +
    potionResult.issues.hasImageButFileNotExists.length;

  console.log(`Saved report: ${REPORT_PATH}`);
  console.log(
    JSON.stringify(
      {
        relics: {
          total: relicResult.total,
          filenameStemMismatch: relicResult.issues.filenameStemMismatch.length,
          hasImageButFileNotExists: relicResult.issues.hasImageButFileNotExists.length,
        },
        potions: {
          total: potionResult.total,
          filenameStemMismatch: potionResult.issues.filenameStemMismatch.length,
          hasImageButFileNotExists: potionResult.issues.hasImageButFileNotExists.length,
        },
      },
      null,
      2,
    ),
  );

  if (hardErrors > 0) {
    process.exitCode = 2;
  }
}

main();
