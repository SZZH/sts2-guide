import { GENERATED_CARDS } from './cardsData.generated';
import { getCardVerification, type CardVerificationRecord } from './cardsVerification';

export type CardCharacter = 'ironclad' | 'silent' | 'defect' | 'necrobinder' | 'regent' | 'colorless';
export type CardType = 'attack' | 'skill' | 'power';
export type CardRarity = 'starter' | 'common' | 'uncommon' | 'rare' | 'special';
export type CardSort = 'name' | 'cost' | 'character' | 'rarity';

export interface GeneratedCardRecord {
  id: string;
  slug: string;
  name: string;
  color: CardCharacter;
  type: CardType;
  rarity: CardRarity;
  costText: string;
  text: string;
  image?: {
    localPath?: string;
    width?: number;
    height?: number;
  };
  source: {
    kind: 'public-card-page';
    note: string;
    verifiedAt: string;
    sourceUrl: string;
  };
  updatedAt: string;
}

export interface Sts2Card {
  id: string;
  slug: string;
  name: string;
  character: CardCharacter;
  type: CardType;
  rarity: CardRarity;
  cost: number | null;
  costText: string;
  text: string;
  keywords: string[];
  image?: {
    localPath?: string;
    width?: number;
    height?: number;
  };
  source: {
    kind: 'public-card-page';
    note: string;
    verifiedAt: string;
    sourceUrl: string;
  };
  updatedAt: string;
  verification: CardVerificationRecord;
}

export const CARD_CHARACTERS: { value: CardCharacter; label: string; accent: string }[] = [
  { value: 'ironclad', label: 'Ironclad', accent: 'from-red-500/20 to-orange-500/10 border-red-500/30' },
  { value: 'silent', label: 'Silent', accent: 'from-emerald-500/20 to-green-500/10 border-emerald-500/30' },
  { value: 'defect', label: 'Defect', accent: 'from-sky-500/20 to-cyan-500/10 border-sky-500/30' },
  { value: 'necrobinder', label: 'Necrobinder', accent: 'from-violet-500/20 to-fuchsia-500/10 border-violet-500/30' },
  { value: 'regent', label: 'Regent', accent: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30' },
  { value: 'colorless', label: 'Colorless', accent: 'from-slate-400/20 to-zinc-500/10 border-slate-400/30' },
];

export const CARD_TYPES: { value: CardType; label: string }[] = [
  { value: 'attack', label: 'Attack' },
  { value: 'skill', label: 'Skill' },
  { value: 'power', label: 'Power' },
];

export const CARD_RARITIES: { value: CardRarity; label: string; rank: number }[] = [
  { value: 'starter', label: 'Starter', rank: 0 },
  { value: 'common', label: 'Common', rank: 1 },
  { value: 'uncommon', label: 'Uncommon', rank: 2 },
  { value: 'rare', label: 'Rare', rank: 3 },
  { value: 'special', label: 'Special', rank: 4 },
];

export const CARD_SORTS: { value: CardSort; label: string }[] = [
  { value: 'name', label: 'Name' },
  { value: 'cost', label: 'Cost' },
  { value: 'character', label: 'Character' },
  { value: 'rarity', label: 'Rarity' },
];

export const CARD_COST_FILTERS = ['0', '1', '2', '3+', 'X'] as const;

export const PUBLIC_CARD_LIBRARY_SUMMARY = {
  totalCards: 504,
  verifiedAt: '2026-03-06',
  sourceLabel: 'Untapped public card index',
  sourceUrl: 'https://sts2.untapped.gg/en/cards',
} as const;

function parseCost(costText: string): number | null {
  if (costText === 'X') return null;
  const parsed = Number.parseInt(costText, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function buildKeywords(card: GeneratedCardRecord) {
  const normalizedText = card.text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((token) => token.length >= 4);

  return [...new Set([card.name.toLowerCase(), card.color, card.type, card.rarity, ...normalizedText])];
}

export const CARDS: Sts2Card[] = (GENERATED_CARDS as GeneratedCardRecord[]).map((card) => ({
  ...card,
  character: card.color,
  cost: parseCost(card.costText),
  verification: getCardVerification(card.slug),
}))
  .map((card) => ({
    ...card,
    text: card.verification.preferredText ?? card.text,
    keywords: buildKeywords({
      ...card,
      color: card.character,
      text: card.verification.preferredText ?? card.text,
    }),
  }));

export function getCardCharacterLabel(character: CardCharacter) {
  return CARD_CHARACTERS.find((entry) => entry.value === character)?.label ?? character;
}

export function getCardTypeLabel(type: CardType) {
  return CARD_TYPES.find((entry) => entry.value === type)?.label ?? type;
}

export function getCardRarityLabel(rarity: CardRarity) {
  return CARD_RARITIES.find((entry) => entry.value === rarity)?.label ?? rarity;
}

export function getCardCostBucket(costText: string) {
  if (costText === 'X') return 'x';
  if (costText === '0') return '0';
  if (costText === '1') return '1';
  if (costText === '2') return '2';
  return '3+';
}

export function getCardsByCharacter(character: CardCharacter) {
  return CARDS.filter((card) => card.character === character);
}

export function sortCards(cards: Sts2Card[], sort: CardSort) {
  const rarityRankMap = new Map(CARD_RARITIES.map((entry) => [entry.value, entry.rank]));

  return [...cards].sort((left, right) => {
    if (sort === 'cost') {
      const leftCost = left.cost ?? Number.MAX_SAFE_INTEGER;
      const rightCost = right.cost ?? Number.MAX_SAFE_INTEGER;
      if (leftCost !== rightCost) return leftCost - rightCost;
    }

    if (sort === 'character') {
      if (left.character !== right.character) return left.character.localeCompare(right.character);
    }

    if (sort === 'rarity') {
      const leftRank = rarityRankMap.get(left.rarity) ?? Number.MAX_SAFE_INTEGER;
      const rightRank = rarityRankMap.get(right.rarity) ?? Number.MAX_SAFE_INTEGER;
      if (leftRank !== rightRank) return leftRank - rightRank;
    }

    return left.name.localeCompare(right.name);
  });
}
