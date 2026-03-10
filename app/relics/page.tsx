import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RELICS } from '@/shared/gameData';
import { BreadcrumbSchema, CollectionPageSchema, ItemListSchema } from '@/app/schema';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Relics - Search by Rarity and Character',
  description:
    'Search the Slay the Spire 2 relic index by rarity and character tag. Use this page for fast lookup instead of long guide text.',
  keywords: [
    'Slay the Spire 2 relics',
    'StS2 relic database',
    'Slay the Spire 2 relic list',
    'StS2 relic search',
  ],
  alternates: {
    canonical: '/relics',
  },
  openGraph: {
    title: 'Slay the Spire 2 Relics - Search Index',
    description: 'Browse relics by rarity, character tag, and keyword in a clean lookup view.',
  },
};

type RelicsPageProps = {
  searchParams: Promise<{
    q?: string;
    rarity?: string;
    character?: string;
  }>;
};

const RARITY_FILTERS = ['all', 'Starter', 'Common', 'Uncommon', 'Rare', 'Shop', 'Ancient'] as const;
const CHARACTER_FILTERS = ['all', 'Ironclad', 'Silent', 'Regent', 'Necrobinder', 'Defect', 'Neutral'] as const;

function toCharacterTag(character?: string) {
  return character ?? 'Neutral';
}

function buildHref(filters: { q?: string; rarity?: string; character?: string }) {
  const params = new URLSearchParams();
  if (filters.q) params.set('q', filters.q);
  if (filters.rarity && filters.rarity !== 'all') params.set('rarity', filters.rarity);
  if (filters.character && filters.character !== 'all') params.set('character', filters.character);
  const query = params.toString();
  return query ? `/relics?${query}` : '/relics';
}

export default async function RelicsPage({ searchParams }: RelicsPageProps) {
  const params = await searchParams;
  const query = params.q?.trim().toLowerCase() ?? '';
  const rarity = RARITY_FILTERS.includes((params.rarity as (typeof RARITY_FILTERS)[number]) ?? 'all')
    ? ((params.rarity as (typeof RARITY_FILTERS)[number]) ?? 'all')
    : 'all';
  const character = CHARACTER_FILTERS.includes((params.character as (typeof CHARACTER_FILTERS)[number]) ?? 'all')
    ? ((params.character as (typeof CHARACTER_FILTERS)[number]) ?? 'all')
    : 'all';

  const filteredRelics = RELICS.filter((relic) => {
    const characterTag = toCharacterTag(relic.character);
    if (rarity !== 'all' && relic.rarity !== rarity) return false;
    if (character !== 'all' && characterTag !== character) return false;

    if (!query) return true;
    const haystack = `${relic.name} ${relic.description} ${relic.rarity} ${characterTag}`.toLowerCase();
    return haystack.includes(query);
  });

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Relics', url: 'https://sts2guide.com/relics' },
        ]}
      />
      <CollectionPageSchema
        name="Slay the Spire 2 Relic Index"
        description="Search Slay the Spire 2 relics by rarity, character tag, and keyword."
        url="https://sts2guide.com/relics"
      />
      <ItemListSchema
        name="Slay the Spire 2 Relics"
        url="https://sts2guide.com/relics"
        items={RELICS.map((relic) => ({
          name: relic.name,
          url: 'https://sts2guide.com/relics',
        }))}
      />

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-forge-black/70 p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
              <aside className="space-y-6">
                <div>
                  <h2 className="mb-3 text-xl font-bold">Search</h2>
                  <form action="/relics" className="space-y-3">
                    <input type="hidden" name="rarity" value={rarity === 'all' ? '' : rarity} />
                    <input type="hidden" name="character" value={character === 'all' ? '' : character} />
                    <input
                      type="search"
                      name="q"
                      defaultValue={query}
                      placeholder="Search relic name or effect"
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
                  <h2 className="mb-3 text-xl font-bold">Rarity</h2>
                  <div className="flex flex-wrap gap-2">
                    {RARITY_FILTERS.map((entry) => (
                      <Link
                        key={entry}
                        href={buildHref({ q: query || undefined, rarity: entry, character })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${rarity === entry ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="mb-3 text-xl font-bold">Character</h2>
                  <div className="flex flex-wrap gap-2">
                    {CHARACTER_FILTERS.map((entry) => (
                      <Link
                        key={entry}
                        href={buildHref({ q: query || undefined, rarity, character: entry })}
                        className={`rounded-full border px-3 py-2 text-sm transition-colors ${character === entry ? 'border-molten-orange text-molten-orange' : 'border-border text-muted-foreground hover:border-molten-orange'}`}
                      >
                        {entry}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <h2 className="mb-2 text-lg font-bold">Reset</h2>
                  <Link href="/relics" className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow">
                    Clear all filters
                  </Link>
                </div>
              </aside>

              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h1 className="font-heading text-3xl font-bold md:text-4xl">Relic Database</h1>
                    <p className="mt-2 text-sm leading-7 text-steel-blue">
                      Showing {filteredRelics.length} relics in the current index. Use filters to narrow by rarity and class context.
                    </p>
                  </div>
                  <Link href="/potions" className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow">
                    Open potions database
                  </Link>
                </div>

                {filteredRelics.length === 0 ? (
                  <div className="rounded-xl border border-border bg-background/40 p-10 text-center">
                    <h2 className="font-heading text-2xl font-bold">No relics match this query</h2>
                    <p className="mt-3 text-muted-foreground">Broaden keyword filters or reset all conditions.</p>
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2">
                    {filteredRelics.map((relic) => (
                      <article
                        key={relic.slug ?? `${relic.rarity}-${relic.name}`}
                        className="rounded-2xl border border-border bg-background/55 p-5 transition-colors hover:border-molten-orange"
                      >
                        <div className="mb-4 flex items-start gap-4">
                          <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border border-border bg-forge-black/70">
                            {relic.image ? (
                              <Image src={relic.image} alt={relic.name} fill className="object-contain p-2" sizes="72px" />
                            ) : (
                              <div className="h-full w-full" />
                            )}
                          </div>
                          <div className="min-w-0">
                            <h2 className="font-heading text-2xl font-bold">{relic.name}</h2>
                            <div className="mt-3 flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-molten-orange">
                                {relic.rarity}
                              </span>
                              <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-steel-blue">
                                {toCharacterTag(relic.character)}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm leading-7 text-muted-foreground">{relic.description}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
