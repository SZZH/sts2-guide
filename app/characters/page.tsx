import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CHARACTER_INDEX } from '@/shared/characterIndexData';
import { CHARACTERS } from '@/shared/gameData';
import { BreadcrumbSchema, CollectionPageSchema, FAQSchema, ItemListSchema } from '@/app/schema';
import { siteAssetUrl } from '@/shared/siteAssets';
import MobileFiltersPanel from '@/components/MobileFiltersPanel';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Characters Guide: Roster, Unlock Order, and Card Pools',
  description:
    'Compare Slay the Spire 2 characters, unlock order, mechanics focus, and card pools. Use this roster guide to pick your best starter and jump into each character build path.',
  keywords: [
    'Slay the Spire 2 characters',
    'Slay the Spire 2 roster',
    'Slay the Spire 2 unlock order',
    'Slay the Spire 2 character cards',
  ],
  alternates: {
    canonical: '/characters',
  },
  openGraph: {
    title: 'Slay the Spire 2 Characters Guide: Roster and Unlock Paths',
    description:
      'Browse all StS2 characters with unlock order, role summaries, mechanics focus, and direct links to each card pool.',
  },
};

type CharactersPageProps = {
  searchParams: Promise<{
    q?: string;
    availability?: string;
  }>;
};

const AVAILABILITY_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'starter', label: 'Starter' },
  { value: 'unlocking', label: 'Unlocking' },
] as const;
const CHARACTERS_FAQ_ITEMS = [
  {
    question: 'Which page should I use to compare Slay the Spire 2 characters fast?',
    answer: 'Use this character roster page to compare availability, mechanic focus, and direct links into each character detail and card pool.',
  },
  {
    question: 'Can I filter between starter and unlockable characters?',
    answer: 'Yes. Use the Availability filter to switch between starter-only, unlocking-only, or full roster views.',
  },
  {
    question: 'Where do I go after picking a character?',
    answer: 'Open the character detail page first, then jump to that character card pool or the full cards database for draft-level decisions.',
  },
];

function buildHref(filters: { q?: string; availability?: string }) {
  const params = new URLSearchParams();

  if (filters.q) params.set('q', filters.q);
  if (filters.availability && filters.availability !== 'all') params.set('availability', filters.availability);

  const query = params.toString();
  return query ? `/characters?${query}` : '/characters';
}

export default async function CharactersPage({ searchParams }: CharactersPageProps) {
  const params = await searchParams;
  const query = params.q?.trim().toLowerCase() ?? '';
  const availability = params.availability === 'starter' || params.availability === 'unlocking' ? params.availability : 'all';

  const filteredCharacters = CHARACTER_INDEX.filter((character) => {
    if (availability === 'starter' && character.availability !== 'starter') return false;
    if (availability === 'unlocking' && character.availability === 'starter') return false;

    if (!query) return true;

    const haystack = `${character.name} ${character.shortSummary} ${character.mechanicFocus}`.toLowerCase();
    return haystack.includes(query);
  });
  const mobileActiveFilters = [
    availability !== 'all'
      ? `Availability: ${AVAILABILITY_FILTERS.find((entry) => entry.value === availability)?.label ?? availability}`
      : null,
    query ? `Search: "${query}"` : null,
  ].filter(Boolean) as string[];
  const mobileFilterSummary =
    mobileActiveFilters.length > 0 ? mobileActiveFilters.join(' · ') : 'No filters applied';

  const characterImageMap = new Map(CHARACTERS.map((entry) => [entry.slug, entry.image]));
  const intentShortcuts = [
    {
      href: '/characters/necrobinder',
      query: 'how to play necrobinder',
      label: 'Necrobinder Starter Guide',
    },
    {
      href: '/cards/character/necrobinder',
      query: 'necrobinder cards sts2',
      label: 'Necrobinder Card Pool',
    },
    {
      href: '/news/best-starter-character-slay-the-spire-2-early-access',
      query: 'best starter character slay the spire 2',
      label: 'Best Starter Character',
    },
    {
      href: '/guides/exhaust-mechanic-explained',
      query: 'slay the spire 2 exhaust mechanic',
      label: 'Exhaust Mechanic Guide',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Characters', url: 'https://sts2guide.com/characters' },
        ]}
      />
      <CollectionPageSchema
        name="Slay the Spire 2 Character Roster"
        description="Browse the current Slay the Spire 2 character roster, unlock order, and direct links to each character guide and card pool."
        url="https://sts2guide.com/characters"
      />
      <ItemListSchema
        name="Slay the Spire 2 Characters"
        url="https://sts2guide.com/characters"
        items={CHARACTER_INDEX.map((character) => ({
          name: character.name,
          url: `https://sts2guide.com${character.guideHref ?? character.cardsHref}`,
        }))}
      />
      <FAQSchema questions={CHARACTERS_FAQ_ITEMS} />
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-forge-black/70 p-6 md:p-8">
          <MobileFiltersPanel
            title="Filters"
            activeCount={mobileActiveFilters.length}
            summaryText={mobileFilterSummary}
            clearHref="/characters"
          >
              <div>
                <h2 className="mb-3 text-xl font-bold">Search</h2>
                <form action="/characters" className="space-y-3">
                  <input type="hidden" name="availability" value={availability === 'all' ? '' : availability} />
                  <input
                    type="search"
                    name="q"
                    defaultValue={query}
                    placeholder="Search role or mechanic"
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
                <h2 className="mb-3 text-xl font-bold">Availability</h2>
                <div className="flex flex-wrap gap-2">
                  {AVAILABILITY_FILTERS.map((entry) => (
                    <Link
                      key={entry.value}
                      href={buildHref({ q: query || undefined, availability: entry.value })}
                      scroll={false}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${availability === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      {entry.label}
                    </Link>
                  ))}
                </div>
              </div>
          </MobileFiltersPanel>
          <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="hidden space-y-6 lg:block">
              <div>
                <h2 className="mb-3 text-xl font-bold">Search</h2>
                <form action="/characters" className="space-y-3">
                  <input type="hidden" name="availability" value={availability === 'all' ? '' : availability} />
                  <input
                    type="search"
                    name="q"
                    defaultValue={query}
                    placeholder="Search role or mechanic"
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
                <h2 className="mb-3 text-xl font-bold">Availability</h2>
                <div className="flex flex-wrap gap-2">
                  {AVAILABILITY_FILTERS.map((entry) => (
                    <Link
                      key={entry.value}
                      href={buildHref({ q: query || undefined, availability: entry.value })}
                      className={`rounded-full border px-3 py-2 text-sm transition-colors ${availability === entry.value ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                    >
                      {entry.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-background/40 p-4">
                <h2 className="mb-2 text-lg font-bold">Reset</h2>
                <Link
                  href="/characters"
                  className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow"
                >
                  Clear all filters
                </Link>
              </div>

              <div className="hidden rounded-xl border border-border bg-background/40 p-4 lg:block">
                <h3 className="font-heading text-lg font-bold">Related Queries</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <Link href="/cards" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Which cards belong to each character?
                  </Link>
                  <Link href="/relics" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Which relics fit each character?
                  </Link>
                  <Link href="/potions" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Which potions are best per character?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-top-10-beginner-mistakes"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    What beginner mistakes should I avoid?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-what-to-upgrade-first"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    What should I upgrade first?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-multiplayer-coop-guide"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    How does co-op work in Slay the Spire 2?
                  </Link>
                </div>
              </div>
            </aside>

            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h1 className="font-heading text-3xl font-bold md:text-4xl">Character Roster</h1>
                  <p className="mt-2 text-sm leading-7 text-steel-blue">
                    Showing {filteredCharacters.length} characters from the current five-character roster. Use this page to query unlock order and jump straight into each character&apos;s card pool.
                  </p>
                </div>
                <Link
                  href="/cards"
                  className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow"
                >
                  Open full cards database
                </Link>
              </div>

              <div className="mb-6 rounded-xl border border-border bg-background/40 p-4">
                <h2 className="font-heading text-lg font-bold">Search Intent Shortcuts</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Open the exact page that matches common character-selection and starter questions.
                </p>
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  {intentShortcuts.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg border border-border bg-background/60 px-3 py-2 transition-colors hover:border-molten-orange"
                    >
                      <div className="text-[11px] uppercase tracking-[0.16em] text-steel-blue">Query: {item.query}</div>
                      <div className="mt-1 text-sm font-semibold">{item.label}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {filteredCharacters.length === 0 ? (
                <div className="rounded-xl border border-border bg-background/40 p-10 text-center">
                  <h2 className="font-heading text-2xl font-bold">No characters match this query</h2>
                  <p className="mt-3 text-muted-foreground">
                    Broaden the keyword or reset filters to reopen the full roster.
                  </p>
                </div>
              ) : (
                <div className="grid gap-5 md:grid-cols-2">
                  {filteredCharacters.map((character) => {
                    const detailHref = character.guideHref ?? `/characters/${character.slug}`;
                    return (
                      <Link
                        key={character.slug}
                        href={detailHref}
                        aria-label={`Open ${character.name} guide`}
                        className="group block cursor-pointer overflow-hidden rounded-2xl border border-border bg-background/55 transition-colors hover:border-molten-orange"
                      >
                        <div className="relative aspect-[825/464] border-b border-border bg-forge-black/35">
                          <Image
                            src={characterImageMap.get(character.slug) ?? siteAssetUrl('/hero/home-hero.png')}
                            alt={character.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain p-2"
                          />
                        </div>

                        <div className="p-6">
                          <div className="mb-4 flex flex-wrap items-center gap-2">
                            <span className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-molten-orange">
                              {character.availabilityLabel}
                            </span>
                            <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-steel-blue">
                              {character.cardCount} cards
                            </span>
                            <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                              Updated {character.updatedAt}
                            </span>
                          </div>

                          <h2 className="font-heading text-3xl font-bold transition-colors group-hover:text-molten-orange">
                            {character.name}
                          </h2>
                          <p className="mt-4 text-sm leading-7 text-muted-foreground">{character.shortSummary}</p>

                          <div className="mt-5 rounded-xl border border-border bg-forge-black/35 p-4">
                            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">
                              Mechanic Focus
                            </div>
                            <p className="text-sm leading-7 text-steel-blue">{character.mechanicFocus}</p>
                          </div>

                          <p className="mt-6 text-sm font-semibold text-molten-orange transition-colors group-hover:text-ember-glow">
                            Open detail page
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}

              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4 lg:hidden">
                <h3 className="font-heading text-lg font-bold">Related Queries</h3>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <Link href="/cards" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Which cards belong to each character?
                  </Link>
                  <Link href="/relics" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Which relics fit each character?
                  </Link>
                  <Link href="/potions" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Which potions are best per character?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-top-10-beginner-mistakes"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    What beginner mistakes should I avoid?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-what-to-upgrade-first"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    What should I upgrade first?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-multiplayer-coop-guide"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    How does co-op work in Slay the Spire 2?
                  </Link>
                  <Link
                    href="/news/slay-the-spire-2-release-date"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    Is Slay the Spire 2 already released?
                  </Link>
                  <Link
                    href="/characters/necrobinder"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    How should I play Necrobinder?
                  </Link>
                  <Link
                    href="/cards/character/necrobinder"
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    What cards does Necrobinder use?
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
