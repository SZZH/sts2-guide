import { writeFile } from 'node:fs/promises';

const BASE_URL = 'https://sts2.untapped.gg';
const VERIFIED_AT = '2026-03-06';
const COLORS = ['ironclad', 'silent', 'defect', 'necrobinder', 'regent', 'colorless'];

function escapeText(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function stripTags(value) {
  return decodeHtml(
    value
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<img[^>]*alt="([^"]+)"[^>]*>/gi, ' $1 ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+([.,!?;:)\]])/g, '$1')
      .replace(/([(])\s+/g, '$1')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

function normalizeRarity(value) {
  const lower = value.toLowerCase();
  if (lower === 'basic') return 'starter';
  if (lower === 'starter') return 'starter';
  if (lower === 'common') return 'common';
  if (lower === 'uncommon') return 'uncommon';
  if (lower === 'rare') return 'rare';
  return 'special';
}

function normalizeType(value) {
  return value.toLowerCase();
}

async function fetchText(url) {
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

async function getSlugsByColor(color) {
  const html = await fetchText(`${BASE_URL}/en/tier-list/cards/${color}`);
  const slugs = [...html.matchAll(/href="\/en\/cards\/([^"]+)"/g)].map((match) => match[1]);
  return [...new Set(slugs)];
}

function parseCardDetail(html, color, slug) {
  const titleMatch = html.match(/<title>(.*?) - .*? - Slay the Spire 2/u);
  const descriptionMatch = html.match(/<label[^>]*>DESCRIPTION<\/label><span>([\s\S]*?)<\/span><label[^>]*>CARD DETAILS<\/label>/u);
  const detailsBlockMatch = html.match(/<div class="page-module-scss-module__kK2N2a__cardDetails">([\s\S]*?)<\/div><\/div><\/div>/u);
  const costSvgMatch = html.match(/<svg class="CardBuilder-module-scss-module__SMpxnq__cost"[\s\S]*?<text[^>]*>(.*?)<\/text><\/svg>/u);

  if (!titleMatch || !descriptionMatch || !detailsBlockMatch || !costSvgMatch) {
    throw new Error(`Unable to parse card detail for ${slug}`);
  }

  const details = {};
  for (const match of detailsBlockMatch[1].matchAll(/<label>([^<]+)<\/label><span>([^<]+)<\/span>/g)) {
    details[match[1].trim().toLowerCase()] = match[2].trim();
  }

  const name = stripTags(titleMatch[1]);
  const text = stripTags(descriptionMatch[1]);
  const type = normalizeType(details.type ?? '');
  const rarity = normalizeRarity(details.rarity ?? '');
  const costText = stripTags(costSvgMatch[1]);

  return {
    id: `${color}-${slug}`,
    slug,
    name,
    color,
    type,
    rarity,
    costText,
    text,
    source: {
      kind: 'public-card-page',
      note: 'Parsed from public Untapped Slay the Spire 2 card page',
      verifiedAt: VERIFIED_AT,
      sourceUrl: `${BASE_URL}/en/cards/${slug}`,
    },
    updatedAt: VERIFIED_AT,
  };
}

async function buildCards() {
  const slugPairs = [];
  for (const color of COLORS) {
    const slugs = await getSlugsByColor(color);
    for (const slug of slugs) {
      slugPairs.push({ color, slug });
    }
  }

  const cards = [];
  const concurrency = 12;

  for (let index = 0; index < slugPairs.length; index += concurrency) {
    const batch = slugPairs.slice(index, index + concurrency);
    const resolved = await Promise.all(
      batch.map(async ({ color, slug }) => {
        const html = await fetchText(`${BASE_URL}/en/cards/${slug}`);
        return parseCardDetail(html, color, slug);
      })
    );
    cards.push(...resolved);
  }

  cards.sort((a, b) => {
    if (a.color !== b.color) return a.color.localeCompare(b.color);
    return a.name.localeCompare(b.name);
  });

  return cards;
}

const cards = await buildCards();

if (cards.length !== 504) {
  throw new Error(`Expected 504 cards, received ${cards.length}`);
}

const output = `import type { Sts2Card } from './cardsData';\n\nexport const GENERATED_CARDS: Sts2Card[] = [\n${cards
  .map(
    (card) => `  {\n    id: '${escapeText(card.id)}',\n    slug: '${escapeText(card.slug)}',\n    name: '${escapeText(card.name)}',\n    color: '${escapeText(card.color)}',\n    type: '${escapeText(card.type)}',\n    rarity: '${escapeText(card.rarity)}',\n    costText: '${escapeText(card.costText)}',\n    text: '${escapeText(card.text)}',\n    source: {\n      kind: 'public-card-page',\n      note: '${escapeText(card.source.note)}',\n      verifiedAt: '${card.source.verifiedAt}',\n      sourceUrl: '${card.source.sourceUrl}',\n    },\n    updatedAt: '${card.updatedAt}',\n  }`
  )
  .join(',\n')}\n];\n`;

await writeFile(new URL('../shared/cardsData.generated.ts', import.meta.url), output);
console.log(`Generated ${cards.length} cards`);
