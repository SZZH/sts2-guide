import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import {
  CARDS,
  CARD_CHARACTERS,
  CARD_COST_FILTERS,
  CARD_RARITIES,
  CARD_SORTS,
  CARD_TYPES,
  getCardCharacterLabel,
  getCardCostBucket,
  getCardImageSrc,
  getCardRarityLabel,
  getCardTypeLabel,
  sortCards,
  type CardSort,
} from '@/shared/cardsData';
import { BreadcrumbSchema, CollectionPageSchema, FAQSchema, ItemListSchema } from '@/app/schema';
import MobileFiltersPanel from '@/components/MobileFiltersPanel';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Cards Database: Search All Cards by Character, Type, Rarity, and Cost',
  description:
    'Search all Slay the Spire 2 cards by character, type, rarity, cost, and keyword, including confirmed v0.101.0 updates like Arsenal, Guiding Star, Tremble, Sword Sage, and Voltaic.',
  keywords: [
    'Slay the Spire 2 cards',
    'Slay the Spire 2 all cards',
    'Slay the Spire 2 cards by character',
    'StS2 card database',
    'Slay the Spire 2 card list',
  ],
  alternates: {
    canonical: '/cards',
  },
  openGraph: {
    title: 'Slay the Spire 2 Cards Database and Search Index',
    description:
      'Filter and browse all StS2 cards by character, rarity, type, and cost with direct detail pages and confirmed v0.101.0 card changes.',
  },
};

type CardsPageProps = {
  searchParams: Promise<{
    character?: string;
    type?: string;
    rarity?: string;
    cost?: string;
    sort?: string;
    q?: string;
    page?: string;
  }>;
};

const PAGE_SIZE = 24;
const CARDS_FAQ_ITEMS = [
  {
    question: 'How do I find a specific Slay the Spire 2 card quickly?',
    answer: 'Use character, type, rarity, cost, and keyword filters together, then open the card detail page from the filtered results.',
  },
  {
    question: 'Can I browse cards by character in this database?',
    answer: 'Yes. The character filter and character card-pool pages let you isolate cards for Ironclad, Silent, Regent, Necrobinder, and Defect.',
  },
  {
    question: 'Is this card list based on the current Early Access build?',
    answer: 'Yes. This index is maintained for the active Early Access cycle and is updated when higher-confidence data checks are completed.',
  },
];

function buildHref(filters: {
  character?: string;
  type?: string;
  rarity?: string;
  cost?: string;
  sort?: string;
  q?: string;
  page?: string;
}) {
  const params = new URLSearchParams();

  if (filters.character) params.set('character', filters.character);
  if (filters.type) params.set('type', filters.type);
  if (filters.rarity) params.set('rarity', filters.rarity);
  if (filters.cost) params.set('cost', filters.cost);
  if (filters.sort) params.set('sort', filters.sort);
  if (filters.q) params.set('q', filters.q);
  if (filters.page) params.set('page', filters.page);

  const query = params.toString();
  return query ? `/cards?${query}` : '/cards';
}

function buildListingQuery(filters: {
  character?: string;
  type?: string;
  rarity?: string;
  cost?: string;
  sort?: string;
  q?: string;
  page?: string;
}) {
  const href = buildHref(filters);
  return href.startsWith('/cards?') ? href.slice('/cards?'.length) : '';
}

function isCardSort(value: string | undefined): value is CardSort {
  return CARD_SORTS.some((entry) => entry.value === value);
}

export default async function CardsPage({ searchParams }: CardsPageProps) {
  const params = await searchParams;
  const character = params.character?.toLowerCase();
  const type = params.type?.toLowerCase();
  const rarity = params.rarity?.toLowerCase();
  const cost = params.cost?.toUpperCase();
  const query = params.q?.trim().toLowerCase();
  const sort = isCardSort(params.sort) ? params.sort : 'name';
  const currentPage = Math.max(1, Number.parseInt(params.page ?? '1', 10) || 1);

  const filteredCards = sortCards(
    CARDS.filter((card) => {
      if (character && card.character !== character) return false;
      if (type && card.type !== type) return false;
      if (rarity && card.rarity !== rarity) return false;
      if (cost && getCardCostBucket(card.costText) !== cost.toLowerCase()) return false;
      if (query) {
        const haystack = `${card.name} ${card.text} ${card.keywords.join(' ')}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    }),
    sort
  );

  const totalPages = Math.max(1, Math.ceil(filteredCards.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const paginatedCards = filteredCards.slice(start, start + PAGE_SIZE);
  const listingQuery = buildListingQuery({
    character,
    type,
    rarity,
    cost,
    sort,
    q: query,
    page: String(safePage),
  });
  const selectedCharacterLabel = CARD_CHARACTERS.find((entry) => entry.value === character)?.label ?? character;
  const selectedTypeLabel = CARD_TYPES.find((entry) => entry.value === type)?.label ?? type;
  const selectedRarityLabel = CARD_RARITIES.find((entry) => entry.value === rarity)?.label ?? rarity;
  const mobileActiveFilters = [
    character ? `Character: ${selectedCharacterLabel}` : null,
    type ? `Type: ${selectedTypeLabel}` : null,
    rarity ? `Rarity: ${selectedRarityLabel}` : null,
    cost ? `Cost: ${cost}` : null,
    sort !== 'name' ? `Sort: ${CARD_SORTS.find((entry) => entry.value === sort)?.label ?? sort}` : null,
    query ? `Search: "${query}"` : null,
  ].filter(Boolean) as string[];
  const mobileFilterSummary =
    mobileActiveFilters.length > 0 ? mobileActiveFilters.join(' · ') : 'No filters applied';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Cards', url: 'https://sts2guide.com/cards' },
        ]}
      />
      <CollectionPageSchema
        name="Slay the Spire 2 Cards Database"
        description="Search, filter, and browse all Slay the Spire 2 cards by character, type, rarity, and cost."
        url="https://sts2guide.com/cards"
      />
      <ItemListSchema
        name="Slay the Spire 2 Card Results"
        url={`https://sts2guide.com${buildHref({ character, type, rarity, cost, sort, q: query, page: String(safePage) })}`}
        items={paginatedCards.map((card) => ({
          name: card.name,
          url: `https://sts2guide.com/cards/${card.slug}`,
        }))}
      />
      <FAQSchema questions={CARDS_FAQ_ITEMS} />
      <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <section className="px-4 pt-4 pb-16 lg:pb-6">
        <div className="container">
          <div className="rounded-2xl border border-border bg-forge-black/70 p-6 md:p-8 lg:h-[calc(100vh-8rem)] lg:overflow-hidden">
            <MobileFiltersPanel
              title="Filters"
              activeCount={mobileActiveFilters.length}
              summaryText={mobileFilterSummary}
              clearHref="/cards"
            >
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Search</h2>
                  <form action="/cards" className="space-y-3">
                    <input type="hidden" name="character" value={character ?? ''} />
                    <input type="hidden" name="type" value={type ?? ''} />
                    <input type="hidden" name="rarity" value={rarity ?? ''} />
                    <input type="hidden" name="cost" value={cost ?? ''} />
                    <input type="hidden" name="sort" value={sort} />
                    <input
                      type="search"
                      name="q"
                      defaultValue={query ?? ''}
                      placeholder="Search name or keyword"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-molten-orange"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-molten-orange px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-glow"
                    >
                      Apply Search
                    </button>
                  </form>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Character</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ type, rarity, cost, sort, q: query })}
                      scroll={false}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!character ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_CHARACTERS.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character: entry.value, type, rarity, cost, sort, q: query })}
                        scroll={false}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${character === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Type</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ character, rarity, cost, sort, q: query })}
                      scroll={false}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!type ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_TYPES.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character, type: entry.value, rarity, cost, sort, q: query })}
                        scroll={false}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${type === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Rarity</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ character, type, cost, sort, q: query })}
                      scroll={false}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!rarity ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_RARITIES.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character, type, rarity: entry.value, cost, sort, q: query })}
                        scroll={false}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${rarity === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Cost</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ character, type, rarity, sort, q: query })}
                      scroll={false}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!cost ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_COST_FILTERS.map((entry) => (
                      <Link
                        key={entry}
                        href={buildHref({ character, type, rarity, cost: entry, sort, q: query })}
                        scroll={false}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${cost === entry ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Sort</h2>
                  <div className="flex flex-wrap gap-2">
                    {CARD_SORTS.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character, type, rarity, cost, sort: entry.value, q: query })}
                        scroll={false}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${sort === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>
            </MobileFiltersPanel>
            <div className="grid gap-6 lg:h-full lg:grid-cols-[300px_minmax(0,1fr)]">
              <aside className={`${styles.cardsScroll} hidden space-y-6 lg:block lg:h-full lg:overflow-y-auto lg:pr-2`}>
                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Search</h2>
                  <form action="/cards" className="space-y-3">
                    <input type="hidden" name="character" value={character ?? ''} />
                    <input type="hidden" name="type" value={type ?? ''} />
                    <input type="hidden" name="rarity" value={rarity ?? ''} />
                    <input type="hidden" name="cost" value={cost ?? ''} />
                    <input type="hidden" name="sort" value={sort} />
                    <input
                      type="search"
                      name="q"
                      defaultValue={query ?? ''}
                      placeholder="Search name or keyword"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-molten-orange"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-molten-orange px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-glow"
                    >
                      Apply Search
                    </button>
                  </form>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Character</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ type, rarity, cost, sort, q: query })}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!character ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_CHARACTERS.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character: entry.value, type, rarity, cost, sort, q: query })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${character === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Type</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ character, rarity, cost, sort, q: query })}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!type ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_TYPES.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character, type: entry.value, rarity, cost, sort, q: query })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${type === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Rarity</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ character, type, cost, sort, q: query })}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!rarity ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_RARITIES.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character, type, rarity: entry.value, cost, sort, q: query })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${rarity === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Cost</h2>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={buildHref({ character, type, rarity, sort, q: query })}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${!cost ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      All
                    </Link>
                    {CARD_COST_FILTERS.map((entry) => (
                      <Link
                        key={entry}
                        href={buildHref({ character, type, rarity, cost: entry, sort, q: query })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${cost === entry ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-heading text-xl font-bold mb-3">Sort</h2>
                  <div className="flex flex-wrap gap-2">
                    {CARD_SORTS.map((entry) => (
                      <Link
                        key={entry.value}
                        href={buildHref({ character, type, rarity, cost, sort: entry.value, q: query })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${sort === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <h2 className="font-heading text-lg font-bold mb-2">Reset Filters</h2>
                  <p className="text-sm text-muted-foreground leading-6 mb-3">
                    Clear the current query and reopen the full launch-week card index.
                  </p>
                  <Link href="/cards" className="text-sm font-semibold text-molten-orange hover:text-ember-glow transition-colors">
                    Reset all filters
                  </Link>
                </div>

                <div className="hidden rounded-xl border border-border bg-background/40 p-4 lg:block">
                  <h3 className="font-heading text-lg font-bold">Related Queries</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <Link
                      href="/news/slay-the-spire-2-hotfix-patch-notes"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      What changed in the latest patch?
                    </Link>
                    <Link
                      href="/news/slay-the-spire-2-known-issues-and-fixes"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Which known issues are still active?
                    </Link>
                    <Link
                      href="/news/slay-the-spire-2-first-run-guide-act-1-priorities"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      What should I do in my first runs?
                    </Link>
                    <Link
                      href="/guides"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Need builds & strategy guidance?
                    </Link>
                    <Link
                      href="/relics"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Which relics support those builds?
                    </Link>
                    <Link
                      href="/characters"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Which character fits my current plan?
                    </Link>
                    <Link
                      href="/cards/hammer_time"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      How does Hammer Time scale Forge turns?
                    </Link>
                    <Link
                      href="/cards/danse_macabre"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Is Danse Macabre worth in Necrobinder decks?
                    </Link>
                    <Link
                      href="/guides/exhaust-mechanic-explained"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      How does Exhaust work in Slay the Spire 2?
                    </Link>
                    <Link
                      href="/news/slay-the-spire-2-steamdb-patch-tracker"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Track the patch timeline for this change
                    </Link>
                  </div>
                </div>

                <div className="hidden rounded-xl border border-border bg-background/40 p-4 lg:block">
                  <h3 className="font-heading text-lg font-bold">High-Intent Card Routes</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <Link href="/cards/accelerant" className="text-molten-orange transition-colors hover:text-ember-glow">
                      When is Accelerant worth taking?
                    </Link>
                    <Link href="/cards/bullet_time" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Is Bullet Time still a strong Silent pick?
                    </Link>
                    <Link href="/cards/biased_cognition" className="text-molten-orange transition-colors hover:text-ember-glow">
                      How do I use Biased Cognition safely?
                    </Link>
                    <Link href="/cards/ball_lightning" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Why pick Ball Lightning early on Defect?
                    </Link>
                    <Link href="/cards/twin_strike" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Is Twin Strike enough for Act 1 damage checks?
                    </Link>
                    <Link href="/cards/machine_learning" className="text-molten-orange transition-colors hover:text-ember-glow">
                      When does Machine Learning stop being too slow?
                    </Link>
                    <Link href="/cards/tools_of_the_trade" className="text-molten-orange transition-colors hover:text-ember-glow">
                      How good is Tools of the Trade in early Silent runs?
                    </Link>
                    <Link href="/cards/hidden_gem" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Is Hidden Gem a trap or a real payoff?
                    </Link>
                    <Link href="/cards/dagger_throw" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Should I keep Dagger Throw after early game?
                    </Link>
                  </div>
                </div>
              </aside>

              <div className="lg:flex lg:h-full lg:min-h-0 lg:flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div>
                    <h1 className="font-heading text-2xl font-bold">All Cards Database</h1>
                    <p className="text-sm text-steel-blue mt-1">
                      Showing {filteredCards.length} results from {CARDS.length} cards. Page {safePage} of {totalPages}.
                    </p>
                  </div>
                  <Link href="/mechanics" className="text-sm font-semibold text-molten-orange hover:text-ember-glow transition-colors">
                    Read mechanics first
                  </Link>
                </div>

                {paginatedCards.length === 0 ? (
                  <div className="rounded-xl border border-border bg-background/40 p-10 text-center lg:flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3">No cards match this filter</h3>
                    <p className="text-muted-foreground mb-5">
                      Clear one filter or search a broader keyword to reopen the launch-week card preview.
                    </p>
                    <Link href="/cards" className="text-sm font-semibold text-molten-orange hover:text-ember-glow transition-colors">
                      Reset all filters
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="lg:flex lg:min-h-0 lg:flex-1 lg:flex-col">
                      <div className={`${styles.cardsScroll} lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-2`}>
                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          {paginatedCards.map((card) => (
                            <Link
                              key={card.id}
                              href={listingQuery ? `/cards/${card.slug}?from=${encodeURIComponent(listingQuery)}` : `/cards/${card.slug}`}
                              className="group rounded-2xl border border-border bg-background/55 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-molten-orange"
                            >
                              <div className="mb-4 aspect-[4/3] overflow-hidden rounded-xl border border-dashed border-border bg-gradient-to-br from-shadow-gray to-forge-black p-2">
                                <div className="relative h-full rounded-lg border border-border/60 bg-black/20 p-2">
                                  {getCardImageSrc(card.image) ? (
                                    <Image
                                      src={getCardImageSrc(card.image)!}
                                      alt={card.name}
                                      fill
                                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                      className="object-contain"
                                    />
                                  ) : null}
                                  <div className="absolute bottom-3 right-3 rounded-full border border-molten-orange/30 bg-black/40 px-3 py-1 text-xs text-molten-orange backdrop-blur">
                                    {card.costText}
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="rounded-full border border-molten-orange/30 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-molten-orange">
                                  {getCardCharacterLabel(card.character)}
                                </span>
                                <span className="rounded-full border border-border px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-steel-blue">
                                  {getCardTypeLabel(card.type)}
                                </span>
                                <span className="rounded-full border border-border px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                                  {getCardRarityLabel(card.rarity)}
                                </span>
                              </div>

                              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-molten-orange transition-colors">
                                {card.name}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-7">
                                {card.text.length > 170 ? `${card.text.slice(0, 170)}...` : card.text}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-background/40 p-4 lg:mt-6">
                        <div className="text-sm text-muted-foreground">
                          Showing {start + 1}-{Math.min(start + PAGE_SIZE, filteredCards.length)} of {filteredCards.length} cards
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={buildHref({ character, type, rarity, cost, sort, q: query, page: safePage > 1 ? String(safePage - 1) : '1' })}
                            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${safePage === 1 ? 'pointer-events-none border-border text-muted-foreground/50' : 'border-border text-foreground hover:border-molten-orange hover:text-molten-orange'}`}
                          >
                            Previous
                          </Link>
                          <span className="px-3 text-sm text-steel-blue">
                            {safePage} / {totalPages}
                          </span>
                          <Link
                            href={buildHref({ character, type, rarity, cost, sort, q: query, page: safePage < totalPages ? String(safePage + 1) : String(totalPages) })}
                            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition-colors ${safePage === totalPages ? 'pointer-events-none border-border text-muted-foreground/50' : 'border-border text-foreground hover:border-molten-orange hover:text-molten-orange'}`}
                          >
                            Next
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 lg:hidden">
                  <h3 className="font-heading text-lg font-bold">Related Queries</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <Link
                      href="/news/slay-the-spire-2-hotfix-patch-notes"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      What changed in the latest patch?
                    </Link>
                    <Link
                      href="/news/slay-the-spire-2-known-issues-and-fixes"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Which known issues remain?
                    </Link>
                    <Link
                      href="/news/slay-the-spire-2-first-run-guide-act-1-priorities"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      First-run priorities
                    </Link>
                    <Link
                      href="/guides"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Need builds & strategy assistance?
                    </Link>
                    <Link
                      href="/cards/hammer_time"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      How does Hammer Time scale Forge turns?
                    </Link>
                    <Link
                      href="/cards/danse_macabre"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Is Danse Macabre worth in Necrobinder decks?
                    </Link>
                    <Link
                      href="/guides/exhaust-mechanic-explained"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      How does Exhaust work in StS2?
                    </Link>
                    <Link
                      href="/news/slay-the-spire-2-steamdb-patch-tracker"
                      className="text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      Track the latest patch timeline
                    </Link>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 lg:hidden">
                  <h3 className="font-heading text-lg font-bold">High-Intent Card Routes</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    <Link href="/cards/accelerant" className="text-molten-orange transition-colors hover:text-ember-glow">
                      When is Accelerant worth taking?
                    </Link>
                    <Link href="/cards/bullet_time" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Is Bullet Time still a strong Silent pick?
                    </Link>
                    <Link href="/cards/biased_cognition" className="text-molten-orange transition-colors hover:text-ember-glow">
                      How do I use Biased Cognition safely?
                    </Link>
                    <Link href="/cards/ball_lightning" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Why pick Ball Lightning early on Defect?
                    </Link>
                    <Link href="/cards/twin_strike" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Is Twin Strike enough for Act 1 damage checks?
                    </Link>
                    <Link href="/cards/machine_learning" className="text-molten-orange transition-colors hover:text-ember-glow">
                      When does Machine Learning stop being too slow?
                    </Link>
                    <Link href="/cards/tools_of_the_trade" className="text-molten-orange transition-colors hover:text-ember-glow">
                      How good is Tools of the Trade in early Silent runs?
                    </Link>
                    <Link href="/cards/hidden_gem" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Is Hidden Gem a trap or a real payoff?
                    </Link>
                    <Link href="/cards/dagger_throw" className="text-molten-orange transition-colors hover:text-ember-glow">
                      Should I keep Dagger Throw after early game?
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
