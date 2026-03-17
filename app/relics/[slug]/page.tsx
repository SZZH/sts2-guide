import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { BreadcrumbSchema, CollectionPageSchema } from '@/app/schema';
import { RELICS } from '@/shared/gameData';

const RELIC_SLUG_ALIASES: Record<string, string> = {
  prismatic_shard: 'prismatic_gem',
};

function getRelicBySlug(slug: string) {
  const normalizedSlug = RELIC_SLUG_ALIASES[slug] ?? slug;
  return RELICS.find((relic) => relic.slug === normalizedSlug);
}

function getCharacterTag(character?: string) {
  return character ?? 'Neutral';
}

export async function generateStaticParams() {
  return RELICS.filter((relic) => Boolean(relic.slug)).map((relic) => ({
    slug: relic.slug!,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const relic = getRelicBySlug(slug);

  if (!relic || !relic.slug) {
    return { title: 'Relic Not Found' };
  }

  return {
    title: `${relic.name} Relic Guide (${relic.rarity})`,
    description: `${relic.name} relic in Slay the Spire 2: rarity ${relic.rarity}, character tag ${getCharacterTag(relic.character)}, and effect summary.`,
    keywords: [
      `${relic.name} relic`,
      `${relic.name} slay the spire 2`,
      `${relic.name} sts2`,
      'Slay the Spire 2 relics',
    ],
    alternates: {
      canonical: `/relics/${relic.slug}`,
    },
    openGraph: {
      title: `${relic.name} Relic Guide for Slay the Spire 2`,
      description: `${relic.name} effect text, rarity, and character context.`,
      url: `https://sts2guide.com/relics/${relic.slug}`,
      type: 'article',
      images: relic.image ? [{ url: relic.image }] : undefined,
    },
  };
}

export default async function RelicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const relic = getRelicBySlug(slug);

  if (!relic || !relic.slug) {
    notFound();
  }

  const relatedRelics = RELICS.filter((entry) => {
    if (entry.slug === relic.slug) return false;
    if (!entry.slug) return false;
    return entry.rarity === relic.rarity || getCharacterTag(entry.character) === getCharacterTag(relic.character);
  }).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Relics', url: 'https://sts2guide.com/relics' },
          { name: relic.name, url: `https://sts2guide.com/relics/${relic.slug}` },
        ]}
      />
      <CollectionPageSchema
        name={`${relic.name} Relic - Slay the Spire 2`}
        description={`${relic.name} relic details with rarity, character tag, and effect text.`}
        url={`https://sts2guide.com/relics/${relic.slug}`}
      />

      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/relics"
            className="mb-8 inline-flex items-center gap-2 text-steel-blue transition-colors hover:text-molten-orange"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Relics
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-2xl border border-border bg-background/55 p-6 md:p-8">
              <div className="mb-6 flex items-start gap-5">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl border border-border bg-forge-black/70">
                  {relic.image ? (
                    <Image src={relic.image} alt={relic.name} fill className="object-contain p-3" sizes="112px" />
                  ) : (
                    <div className="h-full w-full" />
                  )}
                </div>
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-molten-orange">
                      {relic.rarity}
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.16em] text-steel-blue">
                      {getCharacterTag(relic.character)}
                    </span>
                  </div>
                  <h1 className="font-heading text-4xl font-bold md:text-5xl">{relic.name}</h1>
                </div>
              </div>

              <p className="mb-8 text-lg leading-8 text-muted-foreground">{relic.description}</p>

              <div className="rounded-xl border border-molten-orange/25 bg-molten-orange/5 p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-molten-orange">Data Source</div>
                <p className="text-sm leading-7 text-foreground/90">
                  Relic facts are synced from the local extract bundle and may still change during Early Access patches.
                </p>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="rounded-2xl border border-border bg-background/55 p-6">
                <h2 className="mb-4 font-heading text-2xl font-bold">Relic Snapshot</h2>
                <div className="grid gap-3 text-sm">
                  <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                    <span className="text-muted-foreground">Rarity</span>
                    <span className="font-semibold">{relic.rarity}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-border px-4 py-3">
                    <span className="text-muted-foreground">Character Tag</span>
                    <span className="font-semibold">{getCharacterTag(relic.character)}</span>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-background/55 p-6">
                <h2 className="mb-4 font-heading text-2xl font-bold">Best Next Read</h2>
                <div className="flex flex-col gap-3 text-sm">
                  <Link href="/relics" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Return to relic database filters
                  </Link>
                  <Link href="/cards" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Match this relic with cards
                  </Link>
                  <Link href="/characters" className="text-molten-orange transition-colors hover:text-ember-glow">
                    Compare character playstyles
                  </Link>
                </div>
              </section>

              <section className="rounded-2xl border border-border bg-background/55 p-6">
                <h2 className="mb-4 font-heading text-2xl font-bold">Related Relics</h2>
                <div className="space-y-3">
                  {relatedRelics.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/relics/${entry.slug}`}
                      className="block rounded-xl border border-border px-4 py-4 transition-colors hover:border-molten-orange"
                    >
                      <div className="font-semibold">{entry.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {entry.rarity} · {getCharacterTag(entry.character)}
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
