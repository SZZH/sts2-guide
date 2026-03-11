const SITE_ASSET_BASE_URL = (process.env.NEXT_PUBLIC_SITE_ASSET_BASE_URL?.trim() || 'https://assets.sts2guide.com').replace(/\/+$/u, '');
const SITE_ASSET_PREFIX = (process.env.NEXT_PUBLIC_SITE_ASSET_PREFIX?.trim() || '/assets/site-static-v20260311-r1').replace(/\/+$/u, '');

export function siteAssetUrl(filePath: string): string {
  const normalizedPath = filePath.startsWith('/') ? filePath : `/${filePath}`;
  return `${SITE_ASSET_BASE_URL}${SITE_ASSET_PREFIX}${normalizedPath}`;
}

