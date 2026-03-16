#!/usr/bin/env node

const DEFAULT_SITE_ORIGIN = "https://sts2guide.com";
const DEFAULT_INDEXNOW_KEY = "9b140331fdfef9def5d086169aa7aac2";
const DEFAULT_ENDPOINT = "https://api.indexnow.org/indexnow";

const siteOrigin = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_ORIGIN).replace(/\/+$/g, "");
const key = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `${siteOrigin}/${key}.txt`;
const endpoint = process.env.INDEXNOW_ENDPOINT || DEFAULT_ENDPOINT;

function normalizeUrls(input) {
  const normalized = input
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => (value.startsWith("http://") || value.startsWith("https://") ? value : `${siteOrigin}${value.startsWith("/") ? value : `/${value}`}`));

  return [...new Set(normalized)];
}

async function main() {
  const raw = process.argv.slice(2);
  const urls = normalizeUrls(raw);

  if (urls.length === 0) {
    console.error("Usage: pnpm indexnow:submit /news/foo https://sts2guide.com/cards/bar");
    process.exit(1);
  }

  const payload = {
    host: new URL(siteOrigin).host,
    key,
    keyLocation,
    urlList: urls,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`IndexNow submit failed: ${response.status} ${text}`);
    process.exit(1);
  }

  console.log(`IndexNow submitted ${urls.length} URL(s).`);
  console.log(JSON.stringify({ endpoint, keyLocation, urls }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
