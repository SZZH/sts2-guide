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

type RelicSeoOverride = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  intro: string;
  questionLinks: Array<{ href: string; label: string }>;
};

const RELIC_SEO_OVERRIDES: Record<string, RelicSeoOverride> = {
  book_of_five_rings: {
    title: 'Book of Five Rings Relic Guide (Slay the Spire 2)',
    description:
      'Book of Five Rings relic guide for Slay the Spire 2: what deck states convert it into stable value, where it underperforms, and how to route around it in Act 1-2.',
    openGraphTitle: 'Book of Five Rings Relic Guide for Slay the Spire 2',
    openGraphDescription:
      'When to take Book of Five Rings, what card pools support it, and which route decisions reduce fail states.',
    intro:
      'Book of Five Rings should be evaluated as a consistency lever, not a free scaling shortcut. It performs best when your deck already has clear sequencing lines and enough floor defense to survive weak draws.',
    questionLinks: [
      { href: '/guides/act1-route-priority', label: 'Unsure if your route can afford this relic line?' },
      { href: '/guides/card-upgrade-priority', label: 'Not sure which upgrades make this relic pay off faster?' },
    ],
  },
};

type RelicClusterPage = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  relatedLinks: Array<{ href: string; label: string }>;
};

const RELIC_CLUSTER_PAGES: Record<string, RelicClusterPage> = {
  energy_relics_guide: {
    slug: 'energy_relics_guide',
    title: 'Energy Relics Guide',
    description:
      'Core Slay the Spire 2 energy relic picks, when to draft around them, and what to avoid in early routes.',
    intro:
      'Use this quick guide to decide whether an energy relic is actually solving your run bottleneck, or just adding raw output without consistency.',
    bullets: [
      'Prioritize relics that improve turn consistency before raw spike turns.',
      'If your deck already has draw problems, avoid relics that punish hand quality.',
      'Pair energy gain with low-cost card density so you can convert extra energy every turn.',
    ],
    relatedLinks: [
      { href: '/relics', label: 'Browse all relics' },
      { href: '/guides/act1-route-priority', label: 'Review Act 1 route planning' },
      { href: '/guides/card-upgrade-priority', label: 'Check upgrade priority rules' },
    ],
  },
  card_draw_relics_guide: {
    slug: 'card_draw_relics_guide',
    title: 'Card Draw Relics Guide',
    description:
      'How to evaluate draw-focused relics in Slay the Spire 2 and when they outperform direct damage scaling.',
    intro:
      'Draw relics are strongest when they improve decision quality. If your hand remains cluttered, they can still underperform even with high card volume.',
    bullets: [
      'Treat draw relics as consistency tools, not automatic power spikes.',
      'Check whether your deck has enough playable cards to exploit extra draw.',
      'Combine draw scaling with exhaust or discard plans to keep hand quality high.',
    ],
    relatedLinks: [
      { href: '/relics', label: 'Browse all relics' },
      { href: '/guides/drawpile-mechanic-explained', label: 'Open drawpile mechanic guide' },
      { href: '/cards', label: 'Find draw-friendly cards' },
    ],
  },
  starter_relics_tier_list: {
    slug: 'starter_relics_tier_list',
    title: 'Starter Relics Tier List',
    description:
      'Starter relic priority for early runs in Slay the Spire 2, focused on consistency and route safety.',
    intro:
      'This tier view favors relics that reduce early-run volatility and keep your Act 1/Act 2 routes flexible.',
    bullets: [
      'Top tier relics should improve both weak and average opening hands.',
      'Mid tier relics are strong only when your deck already supports them.',
      'Skip niche relics early unless they directly solve your current run problem.',
    ],
    relatedLinks: [
      { href: '/relics', label: 'Browse all relics' },
      { href: '/guides/common-beginner-mistakes', label: 'Avoid beginner trap decisions' },
      { href: '/characters', label: 'Match relic picks to character' },
    ],
  },
};

function getRelicBySlug(slug: string) {
  const normalizedSlug = RELIC_SLUG_ALIASES[slug] ?? slug;
  return RELICS.find((relic) => relic.slug === normalizedSlug);
}

function getRelicClusterPage(slug: string) {
  return RELIC_CLUSTER_PAGES[slug];
}

function getCharacterTag(character?: string) {
  return character ?? 'Neutral';
}

export async function generateStaticParams() {
  return [
    ...RELICS.filter((relic) => Boolean(relic.slug)).map((relic) => ({
      slug: relic.slug!,
    })),
    ...Object.keys(RELIC_CLUSTER_PAGES).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const relic = getRelicBySlug(slug);
  const clusterPage = getRelicClusterPage(slug);
  const seoOverride = relic?.slug ? RELIC_SEO_OVERRIDES[relic.slug] : undefined;

  if (clusterPage) {
    return {
      title: `${clusterPage.title} (Slay the Spire 2)`,
      description: clusterPage.description,
      keywords: ['slay the spire 2 relic guide', 'sts2 relics', clusterPage.title.toLowerCase()],
      alternates: {
        canonical: `/relics/${clusterPage.slug}`,
      },
      openGraph: {
        title: `${clusterPage.title} for Slay the Spire 2`,
        description: clusterPage.description,
        url: `https://sts2guide.com/relics/${clusterPage.slug}`,
        type: 'article',
      },
    };
  }

  if (!relic || !relic.slug) {
    return { title: 'Relic Not Found' };
  }

  return {
    title: seoOverride?.title ?? `${relic.name} Relic Guide (${relic.rarity})`,
    description:
      seoOverride?.description ??
      `${relic.name} relic in Slay the Spire 2: rarity ${relic.rarity}, character tag ${getCharacterTag(relic.character)}, and effect summary.`,
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
      title: seoOverride?.openGraphTitle ?? `${relic.name} Relic Guide for Slay the Spire 2`,
      description: seoOverride?.openGraphDescription ?? `${relic.name} effect text, rarity, and character context.`,
      url: `https://sts2guide.com/relics/${relic.slug}`,
      type: 'article',
      images: relic.image ? [{ url: relic.image }] : undefined,
    },
  };
}

export default async function RelicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const relic = getRelicBySlug(slug);
  const clusterPage = getRelicClusterPage(slug);
  const seoOverride = relic?.slug ? RELIC_SEO_OVERRIDES[relic.slug] : undefined;

  if (clusterPage) {
    return (
      <>
        <BreadcrumbSchema
          items={[
            { name: 'Home', url: 'https://sts2guide.com' },
            { name: 'Relics', url: 'https://sts2guide.com/relics' },
            { name: clusterPage.title, url: `https://sts2guide.com/relics/${clusterPage.slug}` },
          ]}
        />
        <CollectionPageSchema
          name={`${clusterPage.title} - Slay the Spire 2`}
          description={clusterPage.description}
          url={`https://sts2guide.com/relics/${clusterPage.slug}`}
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

            <section className="rounded-2xl border border-border bg-background/55 p-6 md:p-8">
              <h1 className="mb-5 font-heading text-4xl font-bold md:text-5xl">{clusterPage.title}</h1>
              <p className="mb-8 text-lg leading-8 text-muted-foreground">{clusterPage.intro}</p>

              <div className="mb-8 rounded-xl border border-molten-orange/25 bg-molten-orange/5 p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-molten-orange">Key Notes</div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/90">
                  {clusterPage.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 text-sm">
                {clusterPage.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-molten-orange transition-colors hover:text-ember-glow">
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }

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

              {seoOverride ? <p className="mb-4 text-base leading-7 text-foreground/90">{seoOverride.intro}</p> : null}
              <p className="mb-8 text-lg leading-8 text-muted-foreground">{relic.description}</p>

              <div className="rounded-xl border border-molten-orange/25 bg-molten-orange/5 p-5">
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-molten-orange">Data Source</div>
                <p className="text-sm leading-7 text-foreground/90">
                  Relic facts on this page already include confirmed v0.101.0 updates. Any remaining Early Access items that are not yet fully confirmed stay pending instead of being guessed.
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
                  {seoOverride
                    ? seoOverride.questionLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-molten-orange transition-colors hover:text-ember-glow">
                          {link.label}
                        </Link>
                      ))
                    : null}
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
