import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET = process.env.R2_BUCKET ?? 'sts2-assets';
const PUBLIC_DIR = process.env.STS2_PUBLIC_DIR || 'public';
const KEY_PREFIX = (process.env.STS2_SITE_R2_KEY_PREFIX ?? 'assets/site-static-v20260311-r1').replace(/^\/+|\/+$/g, '');
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
  const file = name.toLowerCase();
  if (file.endsWith('.webp')) return 'image/webp';
  if (file.endsWith('.avif')) return 'image/avif';
  if (file.endsWith('.png')) return 'image/png';
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 'image/jpeg';
  if (file.endsWith('.svg')) return 'image/svg+xml';
  if (file.endsWith('.ico')) return 'image/x-icon';
  if (file.endsWith('.gif')) return 'image/gif';
  if (file.endsWith('.json')) return 'application/json; charset=utf-8';
  return 'application/octet-stream';
}

async function listFilesRecursively(dir, baseDir = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursively(absolute, baseDir)));
      continue;
    }
    const relative = path.relative(baseDir, absolute).replace(/\\/g, '/');
    files.push(relative);
  }
  return files;
}

function shouldUpload(relativePath) {
  if (relativePath === 'manifest.json') return true;
  if (relativePath === 'favicon.ico') return true;
  if (/^hero\/.+\.(png|jpe?g|webp|avif)$/i.test(relativePath)) return true;
  if (/^logo(-\d+)?\.(png|webp|svg)$/i.test(relativePath)) return true;
  if (/^(globe|next|vercel|window|file)\.svg$/i.test(relativePath)) return true;
  return false;
}

async function uploadOne(baseDir, relativePath) {
  const absolute = path.join(baseDir, relativePath);
  const key = `${KEY_PREFIX}/${relativePath}`;
  const body = await readFile(absolute);
  await client.send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: contentTypeFromName(relativePath),
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  );
  return key;
}

async function main() {
  const baseDir = path.isAbsolute(PUBLIC_DIR) ? PUBLIC_DIR : path.join(process.cwd(), PUBLIC_DIR);
  const allFiles = await listFilesRecursively(baseDir);
  const files = allFiles.filter(shouldUpload).sort();
  if (files.length === 0) {
    console.log('No site static files selected for upload.');
    return;
  }

  console.log(`Uploading ${files.length} files to r2://${BUCKET}/${KEY_PREFIX}/`);
  for (let i = 0; i < files.length; i += 1) {
    const file = files[i];
    const key = await uploadOne(baseDir, file);
    console.log(`[${i + 1}/${files.length}] ${file} -> ${key}`);
  }
}

await main();

