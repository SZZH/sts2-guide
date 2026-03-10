import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const MANIFEST_FILE = process.env.STS2_WIKI_IMAGE_MANIFEST ?? 'ops-logs/wiki-card-image-manifest-2026-03-10.csv';
const OUTPUT_DIR = process.env.STS2_WIKI_IMAGE_OUTPUT_DIR ?? '.cache/wiki-card-images';
const CONCURRENCY = Number(process.env.STS2_WIKI_IMAGE_CONCURRENCY ?? 16);

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length <= 1) return [];
  return lines.slice(1).map((line) => {
    const [slug, wikiImageUrl, r2Key] = line.split(',');
    return { slug, wikiImageUrl, r2Key };
  });
}

async function runWithConcurrency(items, worker, concurrency) {
  let i = 0;
  let success = 0;
  let failed = 0;
  const failedItems = [];

  const threads = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      const item = items[idx];
      try {
        await worker(item);
        success += 1;
        if (success % 50 === 0 || success === items.length) {
          console.log(`Downloaded ${success}/${items.length}`);
        }
      } catch (error) {
        failed += 1;
        failedItems.push(`${item.slug}: ${error.message}`);
      }
    }
  });

  await Promise.all(threads);
  return { success, failed, failedItems };
}

async function downloadOne(item) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  const response = await fetch(item.wikiImageUrl, {
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; Codex/1.0; +https://openai.com)' },
    signal: controller.signal,
  }).finally(() => clearTimeout(timer));
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const buffer = Buffer.from(await response.arrayBuffer());
  const outputPath = path.join(process.cwd(), OUTPUT_DIR, `${item.slug}.webp`);
  await writeFile(outputPath, buffer);
}

async function main() {
  const csv = await readFile(path.join(process.cwd(), MANIFEST_FILE), 'utf8');
  const rows = parseCsv(csv);
  await mkdir(path.join(process.cwd(), OUTPUT_DIR), { recursive: true });

  if (!rows.length) {
    console.log('No rows in manifest');
    return;
  }

  console.log(`Downloading ${rows.length} card images to ${OUTPUT_DIR}`);
  const result = await runWithConcurrency(rows, downloadOne, CONCURRENCY);
  console.log(JSON.stringify({ success: result.success, failed: result.failed }, null, 2));

  if (result.failedItems.length) {
    const failurePath = path.join(process.cwd(), 'ops-logs/wiki-card-image-download-failures-2026-03-10.txt');
    await writeFile(failurePath, `${result.failedItems.join('\n')}\n`, 'utf8');
    console.log(`Failure list: ${failurePath}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
