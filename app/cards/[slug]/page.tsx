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

type CardSeoOverride = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  intro: string;
  questionLinks: Array<{ href: string; label: string }>;
};

const CARD_SEO_OVERRIDES: Record<string, CardSeoOverride> = {
  accelerant: {
    title: 'Accelerant Card Guide (Slay the Spire 2 Silent)',
    description:
      'Accelerant card guide for Slay the Spire 2: when poison-trigger scaling is worth taking early, when to skip it, and which support cards keep the line stable.',
    openGraphTitle: 'Accelerant Card Guide for Slay the Spire 2 Silent',
    openGraphDescription:
      'When to draft Accelerant in Silent runs, what poison density you need first, and which routes avoid dead draws.',
    intro:
      'Accelerant is best as a multiplier card after your poison baseline is already online. If your deck cannot apply poison reliably every cycle, this card often underperforms.',
    questionLinks: [
      { href: '/guides/silent-early-build', label: 'Need a safer Silent early-build baseline before poison scaling?' },
      { href: '/guides/card-upgrade-priority', label: 'Not sure whether to upgrade poison engine pieces first?' },
    ],
  },
  bullet_time: {
    title: 'Bullet Time Card Guide (Slay the Spire 2 Silent)',
    description:
      'Bullet Time card guide for Slay the Spire 2: when full-hand tempo spikes are worth the draw lockout, and how to avoid bricking follow-up turns.',
    openGraphTitle: 'Bullet Time Card Guide for Slay the Spire 2 Silent',
    openGraphDescription:
      'How to evaluate Bullet Time in Silent runs, what hand quality you need first, and when to skip it.',
    intro:
      'Bullet Time is a conversion tool, not free value. Draft it when your hand quality is already consistent enough to convert one explosive turn into tempo, instead of gambling on random hand states.',
    questionLinks: [
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Do your opening hands already support high-tempo turns?' },
      { href: '/guides/silent-early-build', label: 'Need a stable Silent shell before taking hand-lock cards?' },
    ],
  },
  biased_cognition: {
    title: 'Biased Cognition Card Guide (Slay the Spire 2 Defect)',
    description:
      'Biased Cognition card guide for Slay the Spire 2: how to decide whether focus burst is worth the risk, when decay outpaces the payoff, and what guardrails keep it stable for new players.',
    openGraphTitle: 'Biased Cognition Focus Burst Guide for Slay the Spire 2 Defect',
    openGraphDescription:
      'Should Defect early routes commit to Biased Cognition or wait for a safer shell, and which cards help you survive the decay trials?',
    intro:
      'Biased Cognition can win runs if you already dodge long fights; if your early game feels shaky, treat the decay as a hard guardrail and draft recovery tools first.',
    questionLinks: [
      { href: '/guides/defect-early-build', label: 'Need a steadier Defect baseline before going all-in on Focus burst?' },
      {
        href: '/guides/card-upgrade-priority',
        label: 'Can you afford to upgrade this focus burst crit or should you shore up defense first?',
      },
      { href: '/guides/common-beginner-mistakes', label: 'Feeling like you keep over-committing on cards that die to decay?' },
    ],
  },
  ball_lightning: {
    title: 'Ball Lightning Card Guide (Slay the Spire 2 Defect)',
    description:
      'Ball Lightning card guide for Slay the Spire 2: early Defect pick priority, orb-tempo value, and when to replace it as your deck scales.',
    openGraphTitle: 'Ball Lightning Card Guide for Slay the Spire 2 Defect',
    openGraphDescription:
      'How Ball Lightning stabilizes early Defect turns and which upgrade paths keep it relevant.',
    intro:
      'Ball Lightning is a tempo stabilizer for early Defect fights. It is strongest when your deck still needs clean front-load plus passive orb value in the same card slot.',
    questionLinks: [
      { href: '/guides/defect-early-build', label: 'Need a Defect early-game plan that keeps orb tempo consistent?' },
      { href: '/guides/card-upgrade-priority', label: 'Not sure when this upgrade beats other Defect upgrades?' },
    ],
  },
  hammer_time: {
    title: 'Hammer Time Card Guide (Slay the Spire 2 Regent)',
    description:
      'Hammer Time card guide for Slay the Spire 2: when Regent Forge chains are worth building around, where it fails, and what support cards fix consistency.',
    openGraphTitle: 'Hammer Time Card Guide for Slay the Spire 2 Regent',
    openGraphDescription:
      'When to draft Hammer Time, how to sequence Forge turns, and what setup pieces you need for stable Regent runs.',
    intro:
      'Hammer Time is strongest when your run already has repeatable Forge sequencing, not when you need a standalone spike card. Treat it as a role card for Regent tempo loops, then draft support around hand quality and turn order.',
    questionLinks: [
      { href: '/guides/act1-route-priority', label: 'Not sure if Act 1 route is safe enough for Forge lines?' },
      { href: '/guides/exhaust-mechanic-explained', label: 'Need a backup plan when Forge turns brick your hand?' },
    ],
  },
  corruption: {
    title: 'Corruption Card Guide (Slay the Spire 2 Ironclad)',
    description:
      'Corruption card guide for Slay the Spire 2: when high-damage commits pay off, when to hold off for a safer route, and what new player checks keep the build stable.',
    openGraphTitle: 'Corruption Card Prioritization for Slay the Spire 2 Ironclad',
    openGraphDescription:
      'Deciding when to draft Corruption in Ironclad runs, what early checkpoints prove the payoff, and which upgrades protect the route.',
    intro:
      'Corruption rewards confident Ironclad plans; if you still miss damage checks or tech coverage, treat it as a mid-game payoff and keep looking for protections.',
    questionLinks: [
      {
        href: '/guides/ironclad-early-build',
        label: 'Need a safer Ironclad early route before leaning on Corruption for burst?',
      },
      {
        href: '/guides/card-upgrade-priority',
        label: 'Not sure whether to upgrade this card or the defensive anchors that keep Corruption reliable?',
      },
      {
        href: '/guides/common-beginner-mistakes',
        label: 'Wondering if you are over-committing to damage cards that melt when you miss a block?',
      },
    ],
  },
  twin_strike: {
    title: 'Twin Strike Card Guide (Slay the Spire 2 Ironclad)',
    description:
      'Twin Strike card guide for Slay the Spire 2: when multi-hit front-load is worth an early pick, and how it compares against other Ironclad damage options.',
    openGraphTitle: 'Twin Strike Card Guide for Slay the Spire 2 Ironclad',
    openGraphDescription:
      'When to draft Twin Strike in Ironclad runs and what support keeps it from falling off.',
    intro:
      'Twin Strike is valuable when your run still needs reliable early damage checks. Treat it as route insurance first, then evaluate whether your scaling plan can keep it relevant.',
    questionLinks: [
      { href: '/guides/ironclad-early-build', label: 'Need a safer Ironclad early route before greedier picks?' },
      { href: '/guides/act1-route-priority', label: 'Are your next elites demanding immediate damage density?' },
    ],
  },
  machine_learning: {
    title: 'Machine Learning Card Guide (Slay the Spire 2 Defect)',
    description:
      'Machine Learning card guide for Slay the Spire 2: when recurring draw improves Defect consistency, when it is too slow, and which shells convert it best.',
    openGraphTitle: 'Machine Learning Card Guide for Slay the Spire 2 Defect',
    openGraphDescription:
      'How to evaluate Machine Learning timing, upgrades, and fit in Defect early-to-mid runs.',
    intro:
      'Machine Learning is a consistency card, not immediate survival. Prioritize it when your run can already pass near-term damage and block checks.',
    questionLinks: [
      { href: '/guides/defect-early-build', label: 'Need to confirm your Defect shell is stable enough for slower draw setup?' },
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Still losing on weak opening turns before draw engines matter?' },
    ],
  },
  tools_of_the_trade: {
    title: 'Tools of the Trade Card Guide (Slay the Spire 2 Silent)',
    description:
      'Tools of the Trade card guide for Slay the Spire 2: when draw-discard smoothing is worth setup tempo, and which discard lines convert it into real value.',
    openGraphTitle: 'Tools of the Trade Card Guide for Slay the Spire 2 Silent',
    openGraphDescription:
      'When to take Tools of the Trade in Silent runs and how to avoid low-impact setup turns.',
    intro:
      'Tools of the Trade is strongest when your deck already gains value from discard decisions, not when you still lack stable turn-one defense.',
    questionLinks: [
      { href: '/guides/silent-early-build', label: 'Need a Silent baseline before adding discard setup pieces?' },
      { href: '/guides/card-upgrade-priority', label: 'Unsure whether this upgrade outranks immediate survival upgrades?' },
    ],
  },
  hidden_gem: {
    title: 'Hidden Gem Card Guide (Slay the Spire 2 Colorless)',
    description:
      'Hidden Gem card guide for Slay the Spire 2: when replay scaling is worth a slot, where it whiffs, and what deck states convert it into consistent value.',
    openGraphTitle: 'Hidden Gem Card Guide for Slay the Spire 2',
    openGraphDescription:
      'How to evaluate Hidden Gem as a colorless pickup and when to skip it for cleaner tempo.',
    intro:
      'Hidden Gem is a payoff card that wants a deck with enough quality hits in the draw pile. If your pool is still noisy, this effect can be too inconsistent for early fights.',
    questionLinks: [
      { href: '/guides/how-to-evaluate-opening-hand', label: 'Need a quick way to judge whether your draw pile quality is ready?' },
      { href: '/guides/common-beginner-mistakes', label: 'Avoid over-greedy pickups that reduce run consistency' },
    ],
  },
  dagger_throw: {
    title: 'Dagger Throw Card Guide (Slay the Spire 2 Silent)',
    description:
      'Dagger Throw card guide for Slay the Spire 2: how to value early damage plus filtering, when discard upside is real, and when to cut it later.',
    openGraphTitle: 'Dagger Throw Card Guide for Slay the Spire 2 Silent',
    openGraphDescription:
      'When Dagger Throw stabilizes Silent turns and what discard shells keep it relevant.',
    intro:
      'Dagger Throw is most useful when your Silent run still needs both front-load and hand cleanup in one slot. Its value drops if your deck already has strong filtering density.',
    questionLinks: [
      { href: '/guides/silent-early-build', label: 'Need the Silent early routing baseline before discard pivots?' },
      { href: '/guides/act1-route-priority', label: 'Is this card solving your next elite damage check?' },
    ],
  },
};

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

  const seoOverride = CARD_SEO_OVERRIDES[card.slug];

  return {
    title: seoOverride?.title ?? `${card.name} Card Guide (${getCardCharacterLabel(card.character)})`,
    description:
      seoOverride?.description ??
      `${card.name} card guide for Slay the Spire 2: cost ${card.costText}, ${getCardRarityLabel(card.rarity)} ${getCardTypeLabel(card.type)}, full text, and related cards.`,
    keywords: [
      `${card.name} Slay the Spire 2`,
      `${card.name} card Slay the Spire 2`,
      `${card.name} slay the spire`,
      `${card.name} ${getCardCharacterLabel(card.character)} card`,
      'Slay the Spire 2 cards',
    ],
    alternates: {
      canonical: `/cards/${card.slug}`,
    },
    openGraph: {
      title: seoOverride?.openGraphTitle ?? `${card.name} Card Guide for Slay the Spire 2`,
      description:
        seoOverride?.openGraphDescription ??
        `${card.name} card details, rarity, cost, and effect text for ${getCardCharacterLabel(card.character)} runs.`,
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
  const seoOverride = CARD_SEO_OVERRIDES[card.slug];

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
            {seoOverride ? <p className="text-base leading-7 text-foreground/90 mb-4">{seoOverride.intro}</p> : null}
            <p className="text-lg text-muted-foreground leading-8 mb-8">{card.text}</p>

            <div className="rounded-xl border border-molten-orange/25 bg-molten-orange/5 p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-molten-orange mb-2">Data Source</div>
              <p className="text-sm text-foreground/90 leading-7">
                Card facts on this page are based on the local extract dataset plus public cross-checks. Confirmed v0.101.0 changes have already been synced, while unresolved Early Access items remain pending verification.
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
