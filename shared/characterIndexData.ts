import { CARDS, type CardCharacter } from './cardsData';
import { CHARACTERS } from './gameData';

export interface CharacterIndexEntry {
  slug: Exclude<CardCharacter, 'colorless'>;
  name: string;
  availability: 'starter' | 'step-2' | 'step-3' | 'step-4' | 'step-5';
  availabilityLabel: string;
  shortSummary: string;
  mechanicFocus: string;
  cardCount: number;
  guideHref?: string;
  cardsHref: string;
  updatedAt: string;
}

const OFFICIAL_UPDATED_AT = '2026-03-09';

function countCardsForCharacter(slug: Exclude<CardCharacter, 'colorless'>) {
  return CARDS.filter((card) => card.character === slug).length;
}

export const CHARACTER_INDEX: CharacterIndexEntry[] = [
  {
    slug: 'ironclad',
    name: 'Ironclad',
    availability: 'starter',
    availabilityLabel: 'Starter',
    shortSummary: 'An officially confirmed starter character. More direct and forgiving, making it the cleanest entry point for learning Slay the Spire 2 combat tempo.',
    mechanicFocus: 'Strength, Exhaust, self-damage pressure',
    cardCount: countCardsForCharacter('ironclad'),
    guideHref: '/characters/ironclad',
    cardsHref: '/cards/character/ironclad',
    updatedAt: OFFICIAL_UPDATED_AT,
  },
  {
    slug: 'silent',
    name: 'Silent',
    availability: 'step-2',
    availabilityLabel: 'Unlock Step 2',
    shortSummary: 'The second character in the current unlock chain. Leans harder on draw, discard, Sly timing, and cleaner turn sequencing.',
    mechanicFocus: 'Discard tempo, Sly triggers, Poison finishers',
    cardCount: countCardsForCharacter('silent'),
    guideHref: '/characters/silent',
    cardsHref: '/cards/character/silent',
    updatedAt: OFFICIAL_UPDATED_AT,
  },
  {
    slug: 'regent',
    name: 'Regent',
    availability: 'step-3',
    availabilityLabel: 'Unlock Step 3',
    shortSummary: 'One of the new characters. More focused on resource planning and delayed payoff through Stars, Forge, and minion pressure.',
    mechanicFocus: 'Stars, Forge, delayed payoff turns',
    cardCount: countCardsForCharacter('regent'),
    guideHref: '/characters/regent',
    cardsHref: '/cards/character/regent',
    updatedAt: OFFICIAL_UPDATED_AT,
  },
  {
    slug: 'necrobinder',
    name: 'Necrobinder',
    availability: 'step-4',
    availabilityLabel: 'Unlock Step 4',
    shortSummary: 'One of the new characters. More demanding in the current roster, with Doom, Osty, Souls, and layered resource management all mattering at once.',
    mechanicFocus: 'Doom execution, summons, Souls and Osty',
    cardCount: countCardsForCharacter('necrobinder'),
    guideHref: '/characters/necrobinder',
    cardsHref: '/cards/character/necrobinder',
    updatedAt: OFFICIAL_UPDATED_AT,
  },
  {
    slug: 'defect',
    name: 'Defect',
    availability: 'step-5',
    availabilityLabel: 'Unlock Step 5',
    shortSummary: 'The fifth character in the official roster. Public references currently agree it is the final unlock, and its identity still centers on Orbs and passive scaling.',
    mechanicFocus: 'Orbs, Focus scaling, passive setup turns',
    cardCount: countCardsForCharacter('defect'),
    cardsHref: '/cards/character/defect',
    updatedAt: OFFICIAL_UPDATED_AT,
  },
];

export function getCharacterIndexEntry(slug: string) {
  return CHARACTER_INDEX.find((entry) => entry.slug === slug);
}

export function getCharacterIndexGuideTitle(slug: string) {
  return CHARACTERS.find((entry) => entry.slug === slug)?.name ?? getCharacterIndexEntry(slug)?.name ?? slug;
}
