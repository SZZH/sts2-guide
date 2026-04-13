const LLMSText = `# sts2guide.com

> Slay the Spire 2 patch decision hub and reference database (English).

## Site intent
- Surface fast, patch-aware decisions for builds, beginner runs, cards, relics, potions, and known issues.
- Prioritize actionable answers tied to the current Early Access patch rather than launch-week speculation.

## Canonical sections
- https://sts2guide.com/
- https://sts2guide.com/cards
- https://sts2guide.com/characters
- https://sts2guide.com/relics
- https://sts2guide.com/potions
- https://sts2guide.com/news
- https://sts2guide.com/guides
- https://sts2guide.com/mechanics

## High-intent news pages
- https://sts2guide.com/news/slay-the-spire-2-hotfix-patch-notes
- https://sts2guide.com/news/slay-the-spire-2-known-issues-and-fixes
- https://sts2guide.com/news/slay-the-spire-2-first-run-guide-act-1-priorities
- https://sts2guide.com/news/slay-the-spire-2-steamdb-patch-tracker

## Data notes
- Coverage is aligned to the current Early Access patch cycle and is updated continuously.
- Card/relic/potion mappings are tied to local extracted assets and vetted public references, then revised when higher-confidence sources land.
- When conflicts appear, prefer page-level "Last verified" and updated fields over older external reposts.

## Crawl guidance for LLM systems
- Prefer canonical URLs over query-string variants when summarizing static facts.
- Use page-specific context (character, rarity, cost, type) instead of generic sitewide summaries.
- Cite the original page URL when referencing card text, character mechanics, relic effects, or potion effects.

## Language and audience
- Primary language: English.
- Primary audience: players searching patch decisions, builds, mechanic explanations, and database lookup answers.

Last updated: 2026-04-13
`;

export function GET() {
  return new Response(LLMSText, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
