import { writeFile } from 'node:fs/promises';

const WIKI_BASE_URL = 'https://sts2.wiki';
const WIKI_START_URL = `${WIKI_BASE_URL}/cards/`;

function decodeHtml(value) {
  return value
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(value) {
  return decodeHtml(
    value
      .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, ' $1 ')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<\/p>\s*<p[^>]*>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\s+([.,!?;:)\]])/g, '$1')
      .replace(/([(])\s+/g, '$1')
      .trim(),
  );
}

function escapeText(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function parseWikiCards(html) {
  const chunks = html.split('<article class="card-tile"').slice(1);
  const cardTextBySlug = {};

  for (const chunk of chunks) {
    const imageMatch = chunk.match(/\/media\/card-portraits\/([^"']+)/u);
    if (!imageMatch) continue;
    const [, fileName] = imageMatch[1].split('/');
    const slug = fileName.replace(/\.webp$/u, '');

    const textMatch = chunk.match(
      /card-builder__text card-builder__text--base"[^>]*>([\s\S]*?)<\/div>\s*<div class="card-builder__text card-builder__text--upgraded"/u,
    );
    if (!textMatch) continue;

    const text = stripTags(textMatch[1]);
    if (!text) continue;
    cardTextBySlug[slug] = text;
  }

  return cardTextBySlug;
}

function extractPaginationUrls(html) {
  const urls = new Set([WIKI_START_URL]);
  const matches = [...html.matchAll(/href="(\/cards(?:\/page\/\d+)?\/)"/g)];
  for (const match of matches) {
    const href = match[1];
    urls.add(new URL(href, WIKI_BASE_URL).toString());
  }
  return [...urls].sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; Codex/1.0; +https://openai.com)',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return response.text();
}

async function main() {
  const firstPageHtml = await fetchHtml(WIKI_START_URL);
  const pageUrls = extractPaginationUrls(firstPageHtml);
  const parsed = {};

  for (const pageUrl of pageUrls) {
    const html = pageUrl === WIKI_START_URL ? firstPageHtml : await fetchHtml(pageUrl);
    Object.assign(parsed, parseWikiCards(html));
  }

  const fallbackEntries = Object.entries(parsed)
    .filter(([, text]) => text && text.length > 0)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([slug, text]) => `  '${escapeText(slug)}': '${escapeText(text)}'`);

  const output = `export const CARD_WIKI_TEXT_BY_SLUG: Record<string, string> = {\n${fallbackEntries.join(',\n')}\n};\n`;
  await writeFile(new URL('../shared/cardsWikiFallback.generated.ts', import.meta.url), output);

  console.log(`Fetched ${pageUrls.length} wiki pages`);
  console.log(`Generated wiki fallback text for ${fallbackEntries.length} cards`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
