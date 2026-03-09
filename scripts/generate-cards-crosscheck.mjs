import fs from 'node:fs';
import { writeFile } from 'node:fs/promises';
import https from 'node:https';

const CHECKED_AT = '2026-03-09';
const WIKI_URL = 'https://sts2.wiki/cards/';

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
      .trim()
  );
}

function normalizeSimple(value) {
  return decodeHtml(value).toLowerCase().replace(/\s+/g, ' ').trim();
}

function normalizeText(value) {
  return decodeHtml(value)
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/\s*([.,!?;:])/g, '$1')
    .trim();
}

function escapeText(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(
        url,
        {
          headers: {
            'user-agent': 'Mozilla/5.0 (compatible; Codex/1.0; +https://openai.com)',
            accept: 'text/html,application/xhtml+xml',
          },
        },
        (response) => {
          let html = '';
          response.on('data', (chunk) => {
            html += chunk;
          });
          response.on('end', () => resolve(html));
          response.on('error', reject);
        }
      )
      .on('error', reject);
  });
}

function loadUntappedCards() {
  const filePath = new URL('../shared/cardsData.generated.ts', import.meta.url);
  let source = fs.readFileSync(filePath, 'utf8');
  source = source.replace(/^import type .*$/m, '');
  source = source.replace('export const GENERATED_CARDS: GeneratedCardRecord[] =', 'const GENERATED_CARDS =');
  return Function(`${source}; return GENERATED_CARDS;`)();
}

function parseAttribute(source, name) {
  const match = source.match(new RegExp(`${name}="([^"]*)"`, 'u'));
  return match ? match[1] : '';
}

function parseWikiCards(html) {
  const chunks = html.split('<article class="card-tile"').slice(1);
  const cards = [];

  for (const chunk of chunks) {
    const headEnd = chunk.indexOf('>');
    if (headEnd === -1) continue;

    const attrs = chunk.slice(0, headEnd);
    const imageMatch = chunk.match(/\/media\/card-portraits\/([^"']+)/u);
    if (!imageMatch) continue;

    const textMatch = chunk.match(
      /card-builder__text card-builder__text--base"[^>]*>([\s\S]*?)<\/div>\s*<div class="card-builder__text card-builder__text--upgraded"/u
    );

    if (!textMatch) continue;

    const [color, fileName] = imageMatch[1].split('/');
    const slug = fileName.replace(/\.webp$/u, '');

    cards.push({
      slug,
      color,
      name: parseAttribute(attrs, 'data-title'),
      type: parseAttribute(attrs, 'data-type'),
      rarity: parseAttribute(attrs, 'data-rarity'),
      cost: parseAttribute(attrs, 'data-cost'),
      text: stripTags(textMatch[1]),
    });
  }

  return cards;
}

function buildReason(card, wikiCard, exactTextMatch) {
  if (exactTextMatch) {
    return 'All core fields and the base card text matched between sts2.wiki and sts2.untapped.gg during the March 9, 2026 cross-check.';
  }

  return `Core fields matched, but the base text differed between the two public sources. The displayed text on this site now prefers the sts2.wiki version for ${card.slug} until local game assets are available. Untapped text: "${card.text}" | Wiki text: "${wikiCard.text}"`;
}

const untappedCards = loadUntappedCards();
const wikiHtml = await fetchText(WIKI_URL);
const wikiCards = parseWikiCards(wikiHtml);
const wikiMap = new Map(wikiCards.map((card) => [card.slug, card]));

const records = [];
const summary = {
  totalUntappedCards: untappedCards.length,
  wikiCardsParsed: wikiCards.length,
  crossChecked: 0,
  reconciledText: 0,
  sourceConflict: 0,
  missingOnWiki: 0,
};

for (const card of untappedCards) {
  const wikiCard = wikiMap.get(card.slug);

  if (!wikiCard) {
    summary.missingOnWiki += 1;
    records.push({
      slug: card.slug,
      status: 'source-conflict',
      label: 'Missing on wiki',
      reason:
        'This card exists in the temporary Untapped dataset but was not found in the current sts2.wiki cards page snapshot, so it remains unresolved until local game assets are available.',
      checkedAt: CHECKED_AT,
      checkedSources: ['sts2.untapped.gg', 'sts2.wiki'],
      preferredText: null,
    });
    continue;
  }

  const coreMismatch =
    normalizeSimple(card.name) !== normalizeSimple(wikiCard.name) ||
    normalizeSimple(card.color) !== normalizeSimple(wikiCard.color) ||
    normalizeSimple(card.type) !== normalizeSimple(wikiCard.type) ||
    (normalizeSimple(card.rarity) !== 'special' &&
      normalizeSimple(card.rarity) !== normalizeSimple(wikiCard.rarity)) ||
    normalizeSimple(card.costText) !== normalizeSimple(wikiCard.cost === 'N/A' ? '' : wikiCard.cost);

  const exactTextMatch = normalizeText(card.text) === normalizeText(wikiCard.text);

  if (coreMismatch) {
    summary.sourceConflict += 1;
    records.push({
      slug: card.slug,
      status: 'source-conflict',
      label: 'Source conflict',
      reason:
        'At least one core field differs between sts2.wiki and sts2.untapped.gg, so this card should not be treated as final until local game assets are available.',
      checkedAt: CHECKED_AT,
      checkedSources: ['sts2.untapped.gg', 'sts2.wiki'],
      preferredText: null,
    });
    continue;
  }

  if (exactTextMatch) {
    summary.crossChecked += 1;
    records.push({
      slug: card.slug,
      status: 'cross-checked',
      label: 'Cross-checked',
      reason: buildReason(card, wikiCard, true),
      checkedAt: CHECKED_AT,
      checkedSources: ['sts2.untapped.gg', 'sts2.wiki'],
      preferredText: null,
    });
    continue;
  }

  summary.reconciledText += 1;
  records.push({
    slug: card.slug,
    status: 'reconciled-text',
    label: 'Reconciled text',
    reason: buildReason(card, wikiCard, false),
    checkedAt: CHECKED_AT,
    checkedSources: ['sts2.untapped.gg', 'sts2.wiki'],
    preferredText: wikiCard.text,
  });
}

const output = `export const CARD_CROSSCHECK_SUMMARY = ${JSON.stringify(summary, null, 2)} as const;\n\nexport const CARD_CROSSCHECK_RECORDS = {\n${records
  .sort((left, right) => left.slug.localeCompare(right.slug))
  .map(
    (record) =>
      `  '${escapeText(record.slug)}': {\n    status: '${record.status}',\n    label: '${escapeText(record.label)}',\n    reason: '${escapeText(record.reason)}',\n    checkedAt: '${record.checkedAt}',\n    checkedSources: [${record.checkedSources.map((source) => `'${source}'`).join(', ')}],\n    preferredText: ${record.preferredText ? `'${escapeText(record.preferredText)}'` : 'null'},\n  }`
  )
  .join(',\n')}\n} as const;\n`;

await writeFile(new URL('../shared/cardsCrosscheck.generated.ts', import.meta.url), output);
console.log(`Generated cross-check records for ${records.length} cards`);
