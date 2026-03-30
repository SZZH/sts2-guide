import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CHARACTERS } from '@/shared/gameData';
import { ArrowLeft } from 'lucide-react';
import { getCharacterIndexEntry } from '@/shared/characterIndexData';
import { ArticleSchema, BreadcrumbSchema } from '@/app/schema';

export async function generateStaticParams() {
  return CHARACTERS.map((character) => ({
    slug: character.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const character = CHARACTERS.find((c) => c.slug === slug);

  if (!character) {
    return {
      title: 'Character Not Found',
    };
  }

  return {
    title: `${character.name} in Slay the Spire 2: Unlock, Mechanics, and Card Pool`,
    description: `Check ${character.name} in Slay the Spire 2 with current unlock status, core mechanics, starting deck, and the direct path into the ${character.name} card pool.`,
    keywords: [
      `${character.name} Slay the Spire 2`,
      `${character.name} guide Slay the Spire 2`,
      `${character.name} unlock Slay the Spire 2`,
      `${character.name} cards Slay the Spire 2`,
    ],
    openGraph: {
      title: `${character.name} in Slay the Spire 2`,
      description: `Unlock status, mechanics, starting deck, and card pool entry for ${character.name} in Slay the Spire 2.`,
      images: [{ url: character.image }],
    },
    alternates: {
      canonical: `/characters/${character.slug}`,
    },
  };
}

export default async function CharacterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const character = CHARACTERS.find((c) => c.slug === slug);
  const characterIndex = getCharacterIndexEntry(slug);
  const deepGuides =
    slug === 'regent'
      ? [
          { href: '/guides/regent-card-pool-priority', label: 'Regent card pool priority (all cards by role)' },
          { href: '/guides/regent-stars-vs-forge-build-path', label: 'Regent Stars vs Forge build path' },
          { href: '/guides/celestial-might-regent-guide', label: 'Celestial Might draft and upgrade guide' },
        ]
      : [];

  if (!character) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Characters', url: 'https://sts2guide.com/characters' },
          { name: character.name, url: `https://sts2guide.com/characters/${character.slug}` },
        ]}
      />
      <ArticleSchema
        title={`${character.name} in Slay the Spire 2`}
        description={`Unlock status, core mechanics, starting deck, and card pool entry for ${character.name} in Slay the Spire 2.`}
        datePublished="2026-02-12"
        dateModified={new Date().toISOString()}
        url={`https://sts2guide.com/characters/${character.slug}`}
        imageUrl={character.image}
      />
      <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/characters"
          className="inline-flex items-center gap-2 text-steel-blue hover:text-molten-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Characters
        </Link>

        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:items-start">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-shadow-gray/60">
            <Image
              src={character.image}
              alt={character.name}
              width={825}
              height={464}
              sizes="(max-width: 1024px) 100vw, 640px"
              className="aspect-[825/464] w-full object-contain bg-forge-black/35 p-3"
            />
            <div className="absolute left-4 top-4">
              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  character.difficulty === 'Intermediate'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-purple-500/80 text-white'
                }`}
              >
                {character.difficulty}
              </span>
            </div>
          </div>

          <div className="self-start">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
              Character Lookup
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3">
              {character.name}
            </h1>
            <p className="text-steel-blue text-lg mb-5">{character.title}</p>
            <p className="text-muted-foreground text-base leading-8 mb-6">{characterIndex?.shortSummary ?? character.description}</p>

            <div className="grid gap-4 xl:grid-cols-3">
              <div className="bg-shadow-gray border border-border rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange mb-2">
                  Unlock Status
                </div>
                <div className="text-2xl font-bold text-foreground">{characterIndex?.availabilityLabel ?? 'Confirmed'}</div>
              </div>
              <div className="bg-shadow-gray border border-border rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange mb-2">
                  Card Pool
                </div>
                <div className="text-2xl font-bold text-foreground">{characterIndex?.cardCount ?? character.startingDeck.length}</div>
                <div className="text-xs text-muted-foreground mt-1">Current indexed cards</div>
              </div>
              <div className="bg-shadow-gray border border-border rounded-lg p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange mb-2">
                  Best Next Query
                </div>
                <div className="flex flex-col gap-2">
                  <Link
                    href={`/cards/character/${character.slug}`}
                    className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    Browse all {character.name} cards
                  </Link>
                  {deepGuides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="text-xs text-steel-blue transition-colors hover:text-molten-orange"
                    >
                      {guide.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Quick Read</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-shadow-gray p-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">
                What This Page Solves
              </div>
              <p className="text-muted-foreground leading-7">
                Use this page to confirm where {character.name} sits in the roster, what mechanics define its runs, and where to jump next if you need the actual card pool instead of guide text.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-shadow-gray p-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">
                Mechanic Focus
              </div>
              <p className="text-muted-foreground leading-7">
                {characterIndex?.mechanicFocus ?? character.mechanics.map((ability) => ability.name).join(', ')}
              </p>
            </div>
          </div>
        </section>

        {/* Mechanics */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Core Mechanics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {character.mechanics.map((ability, index) => (
              <div key={index} className="bg-shadow-gray border border-border rounded-lg p-6">
                <h3 className="font-heading text-xl font-bold text-molten-orange mb-2">
                  {ability.name}
                </h3>
                <p className="text-muted-foreground">{ability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Starting Deck */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Starting Deck</h2>
          <div className="bg-shadow-gray border border-border rounded-lg p-6">
            <p className="mb-4 text-sm leading-7 text-muted-foreground">
              Starter cards are listed here as the fastest roster-level reference. If you need every card this character can roll into, use the dedicated card pool page below.
            </p>
            <ul className="space-y-2">
              {character.startingDeck.map((card, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-molten-orange mt-1">▸</span>
                  <span className="text-muted-foreground">{card}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Browse This Character&apos;s Cards</h2>
          <div className="rounded-2xl border border-border bg-shadow-gray p-6 md:p-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              This guide explains how {character.name} plays. If you want the actual card pool, starter cards, and direct links into every {character.name} card, use the dedicated character card index instead of scanning the full all-cards database by hand.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={`/cards/character/${character.slug}`}
                className="rounded-lg bg-molten-orange px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-glow"
              >
                Browse all {character.name} cards
              </Link>
              <Link
                href={`/cards?character=${character.slug}&sort=name`}
                className="rounded-lg border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Open the filtered card list
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
