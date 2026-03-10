#!/usr/bin/env node

import { S3Client, DeleteObjectsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3';

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const BUCKET = process.env.R2_BUCKET ?? 'sts2-assets';
const PREFIX = (process.env.STS2_R2_DELETE_PREFIX ?? '').replace(/^\/+|\/+$/g, '');
const ENDPOINT = process.env.R2_ENDPOINT ?? (ACCOUNT_ID ? `https://${ACCOUNT_ID}.r2.cloudflarestorage.com` : '');

if (!ACCOUNT_ID || !ACCESS_KEY_ID || !SECRET_ACCESS_KEY || !ENDPOINT || !PREFIX) {
  console.error('Missing env. Required: CLOUDFLARE_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, STS2_R2_DELETE_PREFIX');
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

async function listAllKeys(prefix) {
  const keys = [];
  let continuationToken = undefined;
  while (true) {
    const response = await client.send(
      new ListObjectsV2Command({
        Bucket: BUCKET,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      }),
    );
    for (const item of response.Contents ?? []) {
      if (item.Key) keys.push(item.Key);
    }
    if (!response.IsTruncated) break;
    continuationToken = response.NextContinuationToken;
  }
  return keys;
}

async function deleteBatches(keys) {
  let deleted = 0;
  for (let i = 0; i < keys.length; i += 1000) {
    const batch = keys.slice(i, i + 1000);
    const response = await client.send(
      new DeleteObjectsCommand({
        Bucket: BUCKET,
        Delete: {
          Objects: batch.map((Key) => ({ Key })),
          Quiet: true,
        },
      }),
    );
    deleted += response.Deleted?.length ?? 0;
    console.log(`Deleted ${deleted}/${keys.length}`);
  }
}

const prefix = `${PREFIX}/`;
const keys = await listAllKeys(prefix);
if (keys.length === 0) {
  console.log(`No objects found for r2://${BUCKET}/${prefix}`);
  process.exit(0);
}

console.log(`Deleting ${keys.length} objects under r2://${BUCKET}/${prefix}`);
await deleteBatches(keys);
console.log('Done');
