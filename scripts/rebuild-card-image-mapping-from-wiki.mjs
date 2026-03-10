import { mkdir, writeFile } from 'node:fs/promises';
import { GENERATED_CARDS } from '../shared/cardsData.generated.ts';
import { CARD_CROSSCHECK_RECORDS } from '../shared/cardsCrosscheck.generated.ts';

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

function normalizeText(value) {
  return String(value || '')
    .replace(/[^\w\s%+.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function extractPaginationUrls(html) {
  const urls = new Set([WIKI_START_URL]);
  const matches = [...html.matchAll(/href="(\/cards(?:\/page\/\d+)?\/)"/g)];
  for (const match of matches) {
    urls.add(new URL(match[1], WIKI_BASE_URL).toString());
  }
  return [...urls].sort((left, right) => left.localeCompare(right, undefined, { numeric: true }));
}

function parseWikiCards(html) {
  const chunks = html.split('<article class="card-tile"').slice(1);
  const bySlug = {};

  for (const chunk of chunks) {
    const imageMatch = chunk.match(/\/media\/card-portraits\/([^"']+\.webp)/u);
    if (!imageMatch) continue;
    const relativeImagePath = imageMatch[1];
    const slug = relativeImagePath.split('/').pop().replace(/\.webp$/u, '');

    const nameMatch = chunk.match(/card-builder__name card-builder__name--base"[^>]*>([\s\S]*?)<\/span>/u);
    const textMatch = chunk.match(
      /card-builder__text card-builder__text--base"[^>]*>([\s\S]*?)<\/div>\s*<div class="card-builder__text card-builder__text--upgraded"/u,
    );

    const name = nameMatch ? stripTags(nameMatch[1]) : '';
    const text = textMatch ? stripTags(textMatch[1]) : '';

    bySlug[slug] = {
      slug,
      name,
      text,
      imageRelativePath: `/media/card-portraits/${relativeImagePath}`,
      imageUrl: `${WIKI_BASE_URL}/media/card-portraits/${relativeImagePath}`,
    };
  }

  return bySlug;
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      'user-agent': 'Mozilla/5.0 (compatible; Codex/1.0; +https://openai.com)',
      accept: 'text/html,application/xhtml+xml',
    },
  });
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
}

async function main() {
  const firstPageHtml = await fetchHtml(WIKI_START_URL);
  const pageUrls = extractPaginationUrls(firstPageHtml);
  const wikiBySlug = {};

  for (const pageUrl of pageUrls) {
    const html = pageUrl === WIKI_START_URL ? firstPageHtml : await fetchHtml(pageUrl);
    Object.assign(wikiBySlug, parseWikiCards(html));
  }

  const missingOnWiki = [];
  const nameDiff = [];
  const textDiff = [];
  const imageManifest = ['slug,wiki_image_url,r2_key'];

  for (const card of GENERATED_CARDS) {
    const wiki = wikiBySlug[card.slug];
    if (!wiki) {
      missingOnWiki.push(card.slug);
      continue;
    }

    imageManifest.push(`${card.slug},${wiki.imageUrl},assets/sts2/cards/${card.slug}.webp`);

    if (normalizeText(card.name) !== normalizeText(wiki.name)) {
      nameDiff.push(`${card.slug}: local="${card.name}" | wiki="${wiki.name}"`);
    }

    const preferredText = CARD_CROSSCHECK_RECORDS[card.slug]?.preferredText ?? card.text;
    if (normalizeText(preferredText) !== normalizeText(wiki.text)) {
      textDiff.push(`${card.slug}: local="${preferredText}" | wiki="${wiki.text}"`);
    }
  }

  await mkdir(new URL('../ops-logs/', import.meta.url), { recursive: true });
  await writeFile(
    new URL('../ops-logs/wiki-card-image-manifest-2026-03-10.csv', import.meta.url),
    `${imageManifest.join('\n')}\n`,
    'utf8',
  );

  const report = [
    '# Wiki Mapping Rebuild Report',
    '',
    '- date: 2026-03-10',
    `- wiki_cards_parsed: ${Object.keys(wikiBySlug).length}`,
    `- local_cards: ${GENERATED_CARDS.length}`,
    `- missing_on_wiki: ${missingOnWiki.length}`,
    `- name_diff_vs_wiki: ${nameDiff.length}`,
    `- text_diff_vs_wiki (preferredText compared): ${textDiff.length}`,
    '',
    '## Missing on wiki sample',
    ...missingOnWiki.slice(0, 30).map((line) => `- ${line}`),
    '',
    '## Name diff sample',
    ...nameDiff.slice(0, 30).map((line) => `- ${line}`),
    '',
    '## Text diff sample',
    ...textDiff.slice(0, 30).map((line) => `- ${line}`),
    '',
  ].join('\n');

  await writeFile(new URL('../ops-logs/wiki-mapping-rebuild-2026-03-10.md', import.meta.url), report, 'utf8');

  console.log(
    JSON.stringify(
      {
        wikiCardsParsed: Object.keys(wikiBySlug).length,
        localCards: GENERATED_CARDS.length,
        missingOnWiki: missingOnWiki.length,
        nameDiff: nameDiff.length,
        textDiff: textDiff.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
