const DEFAULT_SITE_ORIGIN = "https://sts2guide.com";
const DEFAULT_INDEXNOW_KEY = "9b140331fdfef9def5d086169aa7aac2";
const DEFAULT_INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

function normalizeSiteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_ORIGIN).replace(/\/+$/u, "");
}

export function getIndexNowConfig() {
  const siteOrigin = normalizeSiteOrigin();
  const key = process.env.INDEXNOW_KEY || DEFAULT_INDEXNOW_KEY;
  const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `${siteOrigin}/${key}.txt`;
  const endpoint = process.env.INDEXNOW_ENDPOINT || DEFAULT_INDEXNOW_ENDPOINT;

  return { siteOrigin, key, keyLocation, endpoint };
}

export function normalizeIndexNowUrls(rawUrls: string[]) {
  const { siteOrigin } = getIndexNowConfig();
  const normalized = rawUrls
    .map((value) => value.trim())
    .filter(Boolean)
    .map((value) => (value.startsWith("http://") || value.startsWith("https://") ? value : `${siteOrigin}${value.startsWith("/") ? value : `/${value}`}`));

  return Array.from(new Set(normalized));
}

export async function submitIndexNowUrls(rawUrls: string[]) {
  const { key, keyLocation, endpoint, siteOrigin } = getIndexNowConfig();
  const urlList = normalizeIndexNowUrls(rawUrls);

  if (urlList.length === 0) {
    return { ok: false, status: 400, message: "No valid URLs provided.", submitted: [] as string[] };
  }

  const payload = {
    host: new URL(siteOrigin).host,
    key,
    keyLocation,
    urlList,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  return {
    ok: response.ok,
    status: response.status,
    message: response.ok ? "Submitted to IndexNow." : await response.text(),
    submitted: urlList,
  };
}
