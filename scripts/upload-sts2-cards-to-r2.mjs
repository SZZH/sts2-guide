import { readdir } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET = process.env.R2_BUCKET ?? 'sts2-assets';
const LOCAL_DIR = process.env.STS2_LOCAL_CARD_DIR ?? 'public/assets/sts2/cards';
const KEY_PREFIX = (process.env.STS2_R2_KEY_PREFIX ?? 'assets/sts2/cards').replace(/^\/+|\/+$/g, '');
const CONCURRENCY = Number(process.env.R2_UPLOAD_CONCURRENCY ?? 16);
const ENDPOINT = process.env.R2_ENDPOINT ?? (ACCOUNT_ID ? `https://${ACCOUNT_ID}.r2.cloudflarestorage.com` : '');

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY || !ENDPOINT) {
  console.error('Missing required env vars. Required: CLOUDFLARE_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY.');
  process.exit(1);
}

const client = new S3Client({
  region: 'auto',
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

function contentTypeFromName(name) {
  if (name.endsWith('.webp')) return 'image/webp';
  if (name.endsWith('.png')) return 'image/png';
  if (name.endsWith('.jpg') || name.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}

async function listFiles(dir) {
  const names = await readdir(dir, { withFileTypes: true });
  return names.filter((entry) => entry.isFile()).map((entry) => entry.name).sort();
}

async function uploadOne(fileName) {
  const absolute = path.join(process.cwd(), LOCAL_DIR, fileName);
  const key = `${KEY_PREFIX}/${fileName}`;
  const body = await readFile(absolute);

  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: contentTypeFromName(fileName),
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  );

  return key;
}

async function runWithConcurrency(items, worker, concurrency) {
  let i = 0;
  let success = 0;
  let failed = 0;

  const threads = Array.from({ length: Math.max(1, concurrency) }, async () => {
    while (true) {
      const current = i++;
      if (current >= items.length) return;
      const item = items[current];
      try {
        const key = await worker(item);
        success += 1;
        if (success % 50 === 0 || success === items.length) {
          console.log(`Uploaded ${success}/${items.length} (${key})`);
        }
      } catch (error) {
        failed += 1;
        console.error(`Upload failed for ${item}:`, error?.message ?? error);
      }
    }
  });

  await Promise.all(threads);
  return { success, failed };
}

async function main() {
  const files = await listFiles(path.join(process.cwd(), LOCAL_DIR));
  if (files.length === 0) {
    console.log(`No files found in ${LOCAL_DIR}`);
    return;
  }

  console.log(`Uploading ${files.length} files to r2://${BUCKET}/${KEY_PREFIX}/`);
  const result = await runWithConcurrency(files, uploadOne, CONCURRENCY);
  console.log(`Done. success=${result.success}, failed=${result.failed}`);

  if (result.failed > 0) {
    process.exit(2);
  }
}

await main();
