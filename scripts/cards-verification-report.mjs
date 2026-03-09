import fs from 'node:fs';
import path from 'node:path';

function loadConst(filePath, exportName, exportSignature, extraReplacements = []) {
  let source = fs.readFileSync(filePath, 'utf8');
  source = source.replace(/^import type .*$/gm, '');
  source = source.replace(exportSignature, `const ${exportName} =`);
  for (const [from, to] of extraReplacements) {
    source = source.replace(from, to);
  }
  source = source.replace(/ as const;/g, ';');
  return Function(`${source}; return ${exportName};`)();
}

const cards = loadConst(
  new URL('../shared/cardsData.generated.ts', import.meta.url),
  'GENERATED_CARDS',
  'export const GENERATED_CARDS: GeneratedCardRecord[] ='
);
const summary = loadConst(
  new URL('../shared/cardsCrosscheck.generated.ts', import.meta.url),
  'CARD_CROSSCHECK_SUMMARY',
  'export const CARD_CROSSCHECK_SUMMARY =',
  [['export const CARD_CROSSCHECK_RECORDS =', 'const CARD_CROSSCHECK_RECORDS =']]
);
const records = loadConst(
  new URL('../shared/cardsCrosscheck.generated.ts', import.meta.url),
  'CARD_CROSSCHECK_RECORDS',
  'export const CARD_CROSSCHECK_RECORDS =',
  [['export const CARD_CROSSCHECK_SUMMARY =', 'const CARD_CROSSCHECK_SUMMARY =']]
);

function formatCards(slugs) {
  return slugs
    .map((slug) => cards.find((card) => card.slug === slug))
    .filter(Boolean)
    .map((card) => {
      const record = records[card.slug];
      return `- ${card.name} (\`${card.slug}\`) - ${card.color} / ${card.type} / ${card.rarity} / ${card.costText}${record ? ` / ${record.label}` : ''}`;
    })
    .join('\n');
}

const reconciledSlugs = Object.entries(records)
  .filter(([, record]) => record.status === 'reconciled-text')
  .map(([slug]) => slug);

const conflictSlugs = Object.entries(records)
  .filter(([, record]) => record.status === 'source-conflict')
  .map(([slug]) => slug);

const exactSlugs = Object.entries(records)
  .filter(([, record]) => record.status === 'cross-checked')
  .map(([slug]) => slug);

const firstPage = [...cards]
  .sort((a, b) => a.name.localeCompare(b.name))
  .slice(0, 24)
  .map((card) => card.slug);

const report = `# Cards Verification Report

Generated: 2026-03-09

## Summary
- Total cards in local dataset: ${summary.totalUntappedCards}
- Wiki cards parsed: ${summary.wikiCardsParsed}
- Exact cross-check matches: ${summary.crossChecked}
- Reconciled text entries: ${summary.reconciledText}
- Source conflicts: ${summary.sourceConflict}
- Missing on wiki: ${summary.missingOnWiki}

## Exact cross-check matches
${formatCards(exactSlugs.slice(0, 80))}

## Reconciled text entries
${formatCards(reconciledSlugs)}

## Source conflicts
${conflictSlugs.length ? formatCards(conflictSlugs) : '- None'}

## First-page cards
${formatCards(firstPage)}
`;

const outputPath = path.join(process.cwd(), 'cards-verification-report.md');
fs.writeFileSync(outputPath, report);
console.log(`Wrote ${outputPath}`);
