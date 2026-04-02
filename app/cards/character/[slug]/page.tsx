import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import {
  CARD_CHARACTERS,
  CARD_RARITIES,
  CARD_TYPES,
  getCardCharacterLabel,
  getCardRarityLabel,
  getCardTypeLabel,
  getCardsByCharacter,
  sortCards,
  type CardCharacter,
} from '@/shared/cardsData';
import { CHARACTERS } from '@/shared/gameData';
import { BreadcrumbSchema, CollectionPageSchema, ItemListSchema } from '@/app/schema';

export async function generateStaticParams() {
  return CARD_CHARACTERS.map((character) => ({
    slug: character.value,
  }));
}

function isCardCharacter(value: string): value is CardCharacter {
  return CARD_CHARACTERS.some((entry) => entry.value === value);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  if (!isCardCharacter(slug)) {
    return { title: 'Character Cards Not Found' };
  }

  const label = getCardCharacterLabel(slug);
  const cards = getCardsByCharacter(slug);

  return {
    title: `All ${label} Cards in Slay the Spire 2`,
    description: `Browse all ${label} cards in Slay the Spire 2 Early Access, including starter cards, rarity spread, type split, and the full ${label} card list.`,
    keywords: [
      `${label} cards Slay the Spire 2`,
      `${label} card pool Slay the Spire 2`,
      `${label} starter cards StS2`,
      'Slay the Spire 2 cards by character',
    ],
    alternates: {
      canonical: `/cards/character/${slug}`,
    },
    openGraph: {
      title: `All ${label} Cards in Slay the Spire 2`,
      description: `Browse ${cards.length} ${label} cards with starter cards, rarity spread, and direct links into the card database.`,
    },
  };
}

function getCharacterGuideHref(slug: CardCharacter) {
  return CHARACTERS.some((character) => character.slug === slug) ? `/characters/${slug}` : null;
}

function getCharacterSummary(slug: CardCharacter) {
  const guide = CHARACTERS.find((character) => character.slug === slug);

  if (guide) {
    return {
      title: guide.title,
      description: guide.description,
      playstyle: guide.playstyle,
      updatedAt: guide.updatedAt,
    };
  }

  if (slug === 'defect') {
    return {
      title: 'The Orb Engineer',
      description: 'Defect cards focus on Orbs, Focus scaling, and engine-style turns that reward careful sequencing.',
      playstyle:
        'Use the Defect card pool when you want to inspect channel effects, scaling powers, and cards that snowball once your orb engine is online.',
      updatedAt: '2026-03-06',
    };
  }

  return {
    title: 'Neutral Utility Pool',
    description: 'Colorless cards are shared utility options that can appear across runs and patch-specific card discovery paths.',
    playstyle:
      'Use the Colorless pool when you want to inspect shared utility, support pieces, and off-plan cards that can rescue weak early runs.',
    updatedAt: '2026-03-06',
  };
}

function getCharacterDeepGuideLinks(slug: CardCharacter) {
  if (slug === 'regent') {
    return [
      { href: '/guides/regent-card-pool-priority', label: 'Regent card pool priority (all cards by role)' },
      { href: '/guides/regent-stars-vs-forge-build-path', label: 'Regent Stars vs Forge build path' },
      { href: '/guides/celestial-might-regent-guide', label: 'Celestial Might draft and upgrade guide' },
    ];
  }

  if (slug === 'necrobinder') {
    return [
      { href: '/guides/necrobinder-common-cards', label: 'Necrobinder common cards guide (role-first, not tier list)' },
    ];
  }

  return [];
}

export default async function CharacterCardsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!isCardCharacter(slug)) {
    notFound();
  }

  const label = getCardCharacterLabel(slug);
  const cards = sortCards(getCardsByCharacter(slug), 'name');
  const guideHref = getCharacterGuideHref(slug);
  const summary = getCharacterSummary(slug);
  const starterCards = cards.filter((card) => card.rarity === 'starter');
  const rarityCounts = CARD_RARITIES.map((entry) => ({
    ...entry,
    count: cards.filter((card) => card.rarity === entry.value).length,
  })).filter((entry) => entry.count > 0);
  const typeCounts = CARD_TYPES.map((entry) => ({
    ...entry,
    count: cards.filter((card) => card.type === entry.value).length,
  })).filter((entry) => entry.count > 0);
  const featuredCards = cards.slice(0, 18);
  const deepGuideLinks = getCharacterDeepGuideLinks(slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Cards', url: 'https://sts2guide.com/cards' },
          { name: `${label} Cards`, url: `https://sts2guide.com/cards/character/${slug}` },
        ]}
      />
      <CollectionPageSchema
        name={`${label} Cards - Slay the Spire 2`}
        description={`Browse all ${label} cards in Slay the Spire 2, including starter cards, rarity spread, and type split.`}
        url={`https://sts2guide.com/cards/character/${slug}`}
      />
      <ItemListSchema
        name={`${label} Cards`}
        url={`https://sts2guide.com/cards/character/${slug}`}
        items={featuredCards.map((card) => ({
          name: card.name,
          url: `https://sts2guide.com/cards/${card.slug}`,
        }))}
      />
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap items-center gap-4">
          <Link
            href="/cards"
            className="inline-flex items-center gap-2 text-steel-blue transition-colors hover:text-molten-orange"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Cards
          </Link>
          {guideHref ? (
            <Link
              href={guideHref}
              className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow"
            >
              Open the {label} guide
            </Link>
          ) : null}
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-2xl border border-border bg-background/55 p-6 md:p-8">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
              Character Card Pool
            </div>
            <h1 className="font-heading text-4xl font-bold md:text-5xl">{label} Cards</h1>
            <p className="mt-3 text-steel-blue">{summary.title}</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">{summary.description}</p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{summary.playstyle}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/cards?character=${slug}&sort=name`}
                className="rounded-lg bg-molten-orange px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-glow"
              >
                Browse the full {label} card list
              </Link>
              <Link
                href={`/cards?character=${slug}&rarity=starter&sort=name`}
                className="rounded-lg border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                See every {label} starter card
              </Link>
            </div>

            {deepGuideLinks.length > 0 ? (
              <div className="mt-5 rounded-xl border border-border bg-forge-black/35 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">High-Intent Guide Routes</div>
                <div className="mt-3 flex flex-col gap-2">
                  {deepGuideLinks.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="text-sm text-steel-blue transition-colors hover:text-molten-orange"
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </section>

          <aside className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-border bg-background/55 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">Total Cards</div>
              <div className="mt-3 font-heading text-4xl font-bold">{cards.length}</div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Search intent here is different from the character guide. This page answers what cards belong to {label} and how that pool is distributed.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/55 p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">Updated</div>
              <div className="mt-3 font-heading text-3xl font-bold">{summary.updatedAt}</div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Card text remains an Early Access reference and will be re-checked against local game assets after import.
              </p>
            </div>
          </aside>
        </div>

        <div className="mb-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-2xl border border-border bg-background/55 p-6">
            <h2 className="font-heading text-2xl font-bold">Pool Snapshot</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-forge-black/40 p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">Rarity Spread</div>
                <div className="space-y-3">
                  {rarityCounts.map((entry) => (
                    <div key={entry.value} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{getCardRarityLabel(entry.value)}</span>
                      <span className="font-semibold">{entry.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border bg-forge-black/40 p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">Type Split</div>
                <div className="space-y-3">
                  {typeCounts.map((entry) => (
                    <div key={entry.value} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{getCardTypeLabel(entry.value)}</span>
                      <span className="font-semibold">{entry.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-background/55 p-6">
            <h2 className="font-heading text-2xl font-bold">Starter Cards First</h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              If you are new to this character, starter cards are the fastest way to understand what the run is asking you to do before rewards and shops start changing your deck.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {starterCards.map((card) => (
                <Link
                  key={card.id}
                  href={`/cards/${card.slug}?from=${encodeURIComponent(`character=${slug}&rarity=starter&sort=name`)}`}
                  className="rounded-xl border border-border px-4 py-4 transition-colors hover:border-molten-orange"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="font-semibold">{card.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {getCardTypeLabel(card.type)} · {getCardRarityLabel(card.rarity)}
                      </div>
                    </div>
                    <div className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs text-molten-orange">
                      {card.costText}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-2xl border border-border bg-background/55 p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-heading text-3xl font-bold">Browse {label} Cards</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                This index exists so users do not have to open the full all-cards page and manually refilter every time they want one character pool.
              </p>
            </div>
            <Link
              href={`/cards?character=${slug}&sort=name`}
              className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow"
            >
              Open the full {label} card list
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredCards.map((card) => (
              <Link
                key={card.id}
                href={`/cards/${card.slug}?from=${encodeURIComponent(`character=${slug}&sort=name`)}`}
                className="group rounded-2xl border border-border bg-forge-black/30 p-5 transition-colors hover:border-molten-orange"
              >
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-steel-blue">
                    {getCardTypeLabel(card.type)}
                  </span>
                  <span className="rounded-full border border-border px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {getCardRarityLabel(card.rarity)}
                  </span>
                  <span className="rounded-full border border-molten-orange/30 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-molten-orange">
                    {card.costText}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold transition-colors group-hover:text-molten-orange">{card.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {card.text.length > 140 ? `${card.text.slice(0, 140)}...` : card.text}
                </p>
              </Link>
            ))}
          </div>
        </section>
        </div>
      </div>
    </>
  );
}
