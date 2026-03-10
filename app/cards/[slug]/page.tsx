import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import {
  CARDS,
  getCardCharacterLabel,
  getCardImageSrc,
  getCardRarityLabel,
  getCardTypeLabel,
} from '@/shared/cardsData';
import { BreadcrumbSchema, CollectionPageSchema } from '@/app/schema';

export async function generateStaticParams() {
  return CARDS.map((card) => ({
    slug: card.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const card = CARDS.find((entry) => entry.slug === slug);

  if (!card) {
    return { title: 'Card Not Found' };
  }

  return {
    title: `${card.name} - Slay the Spire 2 ${getCardCharacterLabel(card.character)} Card`,
    description: `${card.name} is a ${getCardCharacterLabel(card.character)} ${getCardTypeLabel(card.type)} card in Slay the Spire 2 Early Access. Review its cost, rarity, card text, and related cards.`,
    keywords: [
      `${card.name} Slay the Spire 2`,
      `${card.name} card Slay the Spire 2`,
      `${card.name} ${getCardCharacterLabel(card.character)} card`,
      'Slay the Spire 2 cards',
    ],
    alternates: {
      canonical: `/cards/${card.slug}`,
    },
    openGraph: {
      title: `${card.name} - Slay the Spire 2 ${getCardCharacterLabel(card.character)} Card`,
      description: `${card.text} Current Early Access card details remain under ongoing verification.`,
    },
  };
}

function buildBackHref(from: string | undefined) {
  if (!from) return '/cards';
  const normalized = from.startsWith('?') ? from.slice(1) : from;
  return normalized ? `/cards?${normalized}` : '/cards';
}

export default async function CardDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ from?: string }>;
}) {
  const { slug } = await params;
  const search = await searchParams;
  const card = CARDS.find((entry) => entry.slug === slug);

  if (!card) {
    notFound();
  }

  const backHref = buildBackHref(search.from);

  const relatedCards = CARDS.filter((entry) => {
    if (entry.slug === card.slug) return false;
    return entry.character === card.character || entry.type === card.type;
  }).slice(0, 4);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Cards', url: 'https://sts2guide.com/cards' },
          { name: getCardCharacterLabel(card.character), url: `https://sts2guide.com/cards/character/${card.character}` },
          { name: card.name, url: `https://sts2guide.com/cards/${card.slug}` },
        ]}
      />
      <CollectionPageSchema
        name={`${card.name} Card - Slay the Spire 2`}
        description={`${card.name} card details with cost, rarity, card text, and related cards.`}
        url={`https://sts2guide.com/cards/${card.slug}`}
      />
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-steel-blue hover:text-molten-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cards
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-2xl border border-border bg-background/55 p-6 md:p-8">
            <div className="mb-6 aspect-[4/3] overflow-hidden rounded-2xl border border-dashed border-border bg-gradient-to-br from-shadow-gray to-forge-black p-3">
              <div className="relative h-full rounded-2xl border border-border/60 bg-black/25 p-4">
                {getCardImageSrc(card.image) ? (
                  <Image
                    src={getCardImageSrc(card.image)!}
                    alt={card.name}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-contain"
                  />
                ) : null}
                <div className="absolute left-4 top-4 rounded-full border border-molten-orange/30 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.16em] text-molten-orange backdrop-blur">
                  {getCardCharacterLabel(card.character)}
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-molten-orange/30 bg-black/40 px-3 py-1 font-heading text-base font-bold text-white backdrop-blur">
                  {card.costText}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-molten-orange">
                {getCardTypeLabel(card.type)}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-steel-blue">
                {getCardRarityLabel(card.rarity)}
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-steel-blue">
                Updated {card.updatedAt}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{card.name}</h1>
            <p className="text-lg text-muted-foreground leading-8 mb-8">{card.text}</p>

            <div className="rounded-xl border border-molten-orange/25 bg-molten-orange/5 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-molten-orange mb-2">Data Source</div>
              <p className="text-sm text-foreground/90 leading-7">
                Card facts on this page are merged from the local game extract bundle and verified on {card.source.verifiedAt}.
              </p>
            </div>
          </section>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-border bg-background/55 p-6">
              <h2 className="font-heading text-2xl font-bold mb-4">Card Snapshot</h2>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                  <span className="text-muted-foreground">Character</span>
                  <span className="font-semibold">{getCardCharacterLabel(card.character)}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-semibold">{getCardTypeLabel(card.type)}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                  <span className="text-muted-foreground">Cost</span>
                  <span className="font-semibold">{card.costText}</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                  <span className="text-muted-foreground">Rarity</span>
                  <span className="font-semibold">{getCardRarityLabel(card.rarity)}</span>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/55 p-6">
              <h2 className="font-heading text-2xl font-bold mb-4">Source Record</h2>
              <a
                href={card.source.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-molten-orange transition-colors hover:text-ember-glow"
              >
                Open temporary public source
              </a>
              <p className="mt-3 text-sm text-muted-foreground leading-7">
                Source note: {card.source.note}
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-background/55 p-6">
              <h2 className="font-heading text-2xl font-bold mb-4">Best Next Read</h2>
              <div className="flex flex-col gap-3 text-sm">
                <Link href={backHref} className="text-molten-orange transition-colors hover:text-ember-glow">
                  Return to the filtered cards database
                </Link>
                <Link href="/mechanics" className="text-molten-orange transition-colors hover:text-ember-glow">
                  Read mechanics if you need keyword context
                </Link>
                <Link
                  href={`/cards/character/${card.character}`}
                  className="text-molten-orange transition-colors hover:text-ember-glow"
                >
                  Browse all {getCardCharacterLabel(card.character)} cards
                </Link>
                <Link href="/characters" className="text-molten-orange transition-colors hover:text-ember-glow">
                  Compare the full character roster
                </Link>
              </div>
            </section>

            <section className="rounded-2xl border border-border bg-background/55 p-6">
              <h2 className="font-heading text-2xl font-bold mb-4">Related Cards</h2>
              <div className="space-y-3">
                {relatedCards.map((entry) => (
                  <Link
                    key={entry.id}
                    href={search.from ? `/cards/${entry.slug}?from=${encodeURIComponent(search.from)}` : `/cards/${entry.slug}`}
                    className="block rounded-xl border border-border px-4 py-4 transition-colors hover:border-molten-orange"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-semibold">{entry.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {getCardCharacterLabel(entry.character)} · {getCardTypeLabel(entry.type)}
                        </div>
                      </div>
                      <div className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs text-molten-orange">
                        {entry.costText}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
        </div>
      </div>
    </>
  );
}
