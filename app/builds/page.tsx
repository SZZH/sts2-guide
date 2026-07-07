import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CHARACTERS } from '@/shared/gameData';
import { siteAssetUrl } from '@/shared/siteAssets';
import { OrganizationSchema, VideoGameSchema, WebsiteSchema } from '@/app/schema';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Builds v0.108.0: Best Current Builds by Character',
  description:
    'Find current Slay the Spire 2 builds for the active v0.108.0 Early Access cycle, with character build paths and links to patch notes, cards, and relic references.',
  alternates: {
    canonical: '/builds',
  },
  openGraph: {
    title: 'Slay the Spire 2 Builds v0.108.0: Best Current Builds by Character',
    description:
      'Best current Slay the Spire 2 builds for the active v0.108.0 Early Access cycle, with character build paths and links to patch notes, cards, and relic references.',
  },
};

const CURRENT_PATCH = 'v0.108.0';

const QUICK_START_LINKS = [
  {
    href: '/guides/ironclad-early-build',
    label: 'Ironclad beginner build',
    description: 'Start with the safest early build guide if you want a clean first run.',
    badge: 'Beginner',
  },
  {
    href: '/guides/silent-early-build',
    label: 'Silent build guide',
    description: 'Go straight into a reliable build guide built around sequencing, draw, and discard tempo.',
    badge: 'Build guide',
  },
  {
    href: '/guides/regent-stars-vs-forge-build-path',
    label: 'Regent patch-aware route',
    description: 'Check the current Stars vs. Forge route before committing to Regent artifact payoffs.',
    badge: 'Patch-aware',
  },
  {
    href: '/guides/defect-early-build',
    label: 'Defect early build',
    description: 'Use the low-variance Defect route if you need a stable early-game build plan.',
    badge: 'Starter route',
  },
  {
    href: '/patches',
    label: 'Patch notes before you reroute',
    description: 'Open the current patch hub if you need to sanity-check build priorities first.',
    badge: 'Retest',
  },
];

const DECISION_TILES = [
  {
    href: '/guides/ironclad-early-build',
    label: 'Beginner build route',
    description: 'Need a fast answer? Start with a beginner-friendly Ironclad route before branching into harder builds.',
    badge: 'Start here',
  },
  {
    href: '/guides/regent-stars-vs-forge-build-path',
    label: 'Patch-aware build path',
    description: 'Jump into a Regent build path if you want the clearest patch-aware build decision on this patch.',
    badge: 'Patch-aware',
  },
  {
    href: '/guides',
    label: 'All character build guides',
    description: 'Browse character-specific build guides if you already know who you want to play.',
    badge: 'Characters',
  },
  {
    href: '/patches',
    label: 'Retest build priorities',
    description: 'Open patch notes first if you need to confirm whether an older build guide still holds.',
    badge: 'Retest',
  },
];

const RESOURCE_CARDS = [
  {
    href: '/patches',
    title: 'Slay the Spire 2 patch notes hub',
    copy: 'Use the patch hub to confirm the current official beta scope before changing a build.',
    badge: 'Patches',
  },
  {
    href: '/news/slay-the-spire-2-beta-patch-v0-108-0-modding-multiplayer-and-current-beta-anchor',
    title: 'Latest beta patch notes',
    copy: 'Start with the current v0.108.0 beta notes, then decide which build assumptions need retesting.',
    badge: 'Patch',
  },
  {
    href: '/cards',
    title: 'Cards database',
    copy: 'Character-specific pools, breakout cards, and tempo checks before each draft pick.',
    badge: 'Cards',
  },
  {
    href: '/relics',
    title: 'Relic synergies',
    copy: 'Reference relic tables to see what best complements the current build path.',
    badge: 'Relics',
  },
];

const STATUS_TIER_HINTS = [
  {
    tier: 'Beginner',
    title: 'Beginner primer',
    summary: 'Lean on builds that trade burst for guarded pacing while the current balance cycle settles.',
  },
  {
    tier: 'Stable',
    title: 'Stable core',
    summary: 'Repeatable Strength, Sly, and Forge threads still pay off more consistently than one-patch spike plays.',
  },
  {
    tier: 'Watchlist',
    title: 'Watchlist picks',
    summary: 'These lines still have upside but demand tight pacing while the current patch cycle keeps encounter reads and role timing in motion.',
  },
];

type BuildTile = {
  slug: 'ironclad' | 'silent' | 'regent' | 'necrobinder' | 'defect';
  archetype: string;
  patchImpact: string;
  focus: string;
  guideHref: string;
  statusTier: 'Beginner' | 'Stable' | 'Watchlist';
  actionCue: string;
  cardFocus: string;
  relicFocus: string;
  watchlistReason?: string;
};

const BUILD_TILES: BuildTile[] = [
  {
    slug: 'ironclad',
    archetype: 'Strength ramp + controlled HP trade-offs',
    patchImpact: 'The current balance cycle keeps Ironclad focused on Strength-friendly AoE lines and cleaner Exhaust payoffs.',
    focus: 'Retest Strength AoE and Exhaust energy turns before treating old Ironclad ratings as settled.',
    guideHref: '/guides/ironclad-early-build',
    statusTier: 'Beginner',
    actionCue: 'Draft guard-heavy draws, then layer Strength when the map calms before branching out.',
    cardFocus: 'Track Conflagration, Drum of Battle, guard, and Strength pairings in early elite paths.',
    relicFocus: 'Favor relics boosting Strength or Block in tandem, not one-shot damage spikes.',
  },
  {
    slug: 'silent',
    archetype: 'Discard tempo with Sly/Poison follow-through',
    patchImpact: 'Silent is still less about headline reworks and more about keeping Sly and Poison guidance conservative.',
    focus: 'Build hand quality and sequencing before locking into high-variance Sly payoffs.',
    guideHref: '/guides/silent-early-build',
    statusTier: 'Stable',
    actionCue: 'Prioritize clean sequencing, then layer Poison while keeping draw and discard consistent.',
    cardFocus: 'Emphasize card draw and discard smoothing to bait reliable Poisons.',
    relicFocus: 'Lean into relics that reward discard cycling rather than random burst boosts.',
  },
  {
    slug: 'regent',
    archetype: 'Stars economy and Forge artifacts',
    patchImpact: 'Regent still rewards cleaner Block and Blade reading, so Stars and Forge decisions should stay grounded in current patch context.',
    focus: 'Retest Blade lines with Dexterity and Frail in mind before promoting Regent rankings.',
    guideHref: '/guides/regent-stars-vs-forge-build-path',
    statusTier: 'Stable',
    actionCue: 'Stack Stars early, set up Forge triggers, and delay artifact burst until your map reading is reliable.',
    cardFocus: 'Monitor Stars generation vs. artifact payoff so you know when to pull trigger.',
    relicFocus: 'Pick relics that smooth extra Stars or offset Forge cooldowns.',
  },
  {
    slug: 'necrobinder',
    archetype: 'Doom + Souls + Osty control',
    patchImpact: 'Necrobinder is still not the safest headline route, so Doom and Soul plans belong in watchlist language until more run evidence lands.',
    focus: 'Stagger Osty usage, stack Souls, and keep Doom thresholds readable while beta balance settles.',
    guideHref: '/guides/necrobinder-common-cards',
    statusTier: 'Watchlist',
    actionCue: 'Manage Soul stacks closely and only deploy Osty when the board is stable.',
    cardFocus: 'Watch guard timing and Soul pacing to avoid Doom backfires.',
    relicFocus: 'Consider relics that smooth Soul generation or protect against delayed Doom.',
    watchlistReason: 'Still prone to variance if Doom windows misalign or if patch tweaks reduce Soul gains.',
  },
  {
    slug: 'defect',
    archetype: 'Orb sequencing and Focus scaling',
    patchImpact: 'Defect remains more about stable orb sequencing and Focus pacing than any one headline patch push.',
    focus: 'Balance early control orbs with late-game investment orbs without going full random burst.',
    guideHref: '/guides/defect-early-build',
    statusTier: 'Stable',
    actionCue: 'Layer control orbs early, then transition into scaling Focus stacks once you lock cadence.',
    cardFocus: 'Highlight orbs that pair with Focus ramps instead of random burst draws.',
    relicFocus: 'Seek relics that tack on orb generation or steady Focus gains.',
  },
];

function heroMechanicNames(characterSlug: BuildTile['slug']) {
  const character = CHARACTERS.find((entry) => entry.slug === characterSlug);
  return character?.mechanics?.map((mechanic) => mechanic.name) ?? [];
}

function buildNextSteps(tile: BuildTile, characterName: string) {
  const patchLabel =
    tile.statusTier === 'Watchlist' ? 'Retest patch risks' : `Retest ${characterName} on patch`;

  return [
    {
      href: tile.guideHref,
      label: `Open ${characterName} build guide`,
      variant: 'primary' as const,
    },
    {
      href: `/characters/${tile.slug}`,
      label: `${characterName} overview`,
      variant: 'secondary' as const,
    },
    {
      href: `/cards/character/${tile.slug}`,
      label: `${characterName} cards`,
      variant: 'secondary' as const,
    },
    {
      href: '/patches',
      label: patchLabel,
      variant: 'secondary' as const,
    },
  ];
}

export default function BuildsPage() {
  const heroSignals = [
    'Use this page to choose a Slay the Spire 2 build fast: beginner route, character build guide, or patch-aware retest path.',
    'Every build tile tells you what the build does, what changed on this patch, and where to click next for cards or deeper guides.',
    'The quickest win is to pick a character build and move into the second hop instead of staying on overview text.',
  ];

  return (
    <>
      <WebsiteSchema />
      <OrganizationSchema />
      <VideoGameSchema />
      <div className="min-h-screen">
        <section className="relative h-[520px] overflow-hidden rounded-b-[3rem] bg-gradient-to-b from-forge-black via-shadow-gray to-shadow-gray">
          <Image
            src={siteAssetUrl('/hero/home-hero.png')}
            alt="Slay the Spire 2 action"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-black/80 to-forge-black" />
          <div className="relative z-10 container mx-auto flex h-full flex-col justify-center gap-6 px-4 py-12 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Best builds · patch {CURRENT_PATCH}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">Slay the Spire 2 builds for v0.108.0</h1>
            <p className="max-w-3xl text-base leading-relaxed text-steel-blue md:text-lg">
              Find the best current Slay the Spire 2 builds for the official {CURRENT_PATCH} scope, then jump straight into a build guide, a beginner-friendly route, or a patch-aware retest path by character.
            </p>
            <p className="max-w-3xl text-sm text-steel-blue md:text-base">
              If you came here looking for a Slay the Spire 2 build guide, start with the quick links below, pick your character, and use the second hop to reach the exact build, cards, or patch context you need.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link
                href="/guides/ironclad-early-build"
                className="rounded-full border border-molten-orange px-4 py-2 font-semibold text-molten-orange transition-colors hover:text-ember-glow"
              >
                Beginner build
              </Link>
              <Link
                href="/guides/regent-stars-vs-forge-build-path"
                className="rounded-full border border-border px-4 py-2 font-semibold text-steel-blue transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Patch-aware route
              </Link>
              <Link
                href="/guides"
                className="rounded-full border border-border px-4 py-2 font-semibold text-steel-blue transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                All build guides
              </Link>
              <Link
                href="/cards"
                className="rounded-full border border-border px-4 py-2 font-semibold text-steel-blue transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Cards
              </Link>
              <Link
                href="/patches"
                className="rounded-full border border-border px-4 py-2 font-semibold text-steel-blue transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Patch notes
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {heroSignals.map((signal) => (
                <div key={signal} className="rounded-2xl border border-border bg-background/60 p-5 text-sm text-steel-blue">
                  {signal}
                </div>
              ))}
            </div>
            <p className="max-w-3xl text-sm text-steel-blue">
              Ironclad, Silent, Regent, Necrobinder, and Defect build paths for the current Early Access watchlist.
            </p>
          </div>
        </section>

        <section className="container mx-auto flex flex-col gap-4 px-4 py-12">
          <div className="rounded-2xl border border-molten-orange/30 bg-background/50 p-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Build guide intent</p>
                <h2 className="font-heading text-2xl font-bold text-white">Use this page to pick the next exact build step</h2>
              </div>
              <p className="max-w-2xl text-sm text-steel-blue">
                Searchers arriving on “build guide”, “tips”, or “strategies” should leave this overview in one click: open a character build, retest with patch notes, or verify key cards first.
              </p>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Link href="/guides" className="rounded-xl border border-border bg-forge-black/40 px-4 py-4 text-sm font-semibold text-white transition hover:border-molten-orange">
                Browse all character build guides
              </Link>
              <Link href="/patches" className="rounded-xl border border-border bg-forge-black/40 px-4 py-4 text-sm font-semibold text-white transition hover:border-molten-orange">
                Check what changed in the current patch first
              </Link>
              <Link href="/cards" className="rounded-xl border border-border bg-forge-black/40 px-4 py-4 text-sm font-semibold text-white transition hover:border-molten-orange">
                Verify card priorities before you reroute
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background/50 p-5">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Quick start</p>
                <h2 className="font-heading text-2xl font-bold text-white">Pick your next build guide in one click</h2>
              </div>
              <p className="max-w-2xl text-sm text-steel-blue">
                These are the fastest second-hop routes if you came in looking for a beginner build, a character guide, or a patch-aware retest.
              </p>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {QUICK_START_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group rounded-2xl border border-border bg-forge-black/40 p-4 transition hover:border-molten-orange"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange">{link.badge}</div>
                  <h3 className="mt-3 font-heading text-lg font-bold text-white">{link.label}</h3>
                  <p className="mt-2 text-sm text-steel-blue">{link.description}</p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-molten-orange underline decoration-dotted decoration-molten-orange/60">
                    Open next →
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {DECISION_TILES.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group rounded-2xl border border-border bg-shadow-gray/50 p-5 transition hover:border-molten-orange"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange">{tile.badge}</div>
                <h2 className="mt-3 font-heading text-xl font-bold text-white">{tile.label}</h2>
                <p className="mt-2 text-sm text-steel-blue">{tile.description}</p>
                <span className="mt-4 inline-flex text-xs font-semibold text-molten-orange underline decoration-dotted decoration-molten-orange/60">
                  Go now →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-6">
          <div className="rounded-2xl border border-border bg-background/60 p-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Status tiers</p>
              <span className="text-xs text-steel-blue">Patch {CURRENT_PATCH}</span>
            </div>
            <div className="flex flex-wrap gap-4">
              {STATUS_TIER_HINTS.map((hint) => (
                <div key={hint.tier} className="flex-1 min-w-[180px] rounded-2xl border border-border bg-forge-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">{hint.tier}</p>
                  <h3 className="mt-2 font-heading text-lg font-bold text-white">{hint.title}</h3>
                  <p className="mt-2 text-sm text-steel-blue">{hint.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-shadow-gray to-forge-black py-10">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-border bg-forge-black/60 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Patch Signal</p>
              <h3 className="font-heading text-3xl font-bold mt-2">What patch {CURRENT_PATCH} means for builds</h3>
              <p className="mt-4 text-base text-steel-blue">
                Patch {CURRENT_PATCH} is your current balance baseline: retest Ironclad Strength and Exhaust lines, Regent Blade interactions, and any route assumptions that still depend on older beta reads.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/news/slay-the-spire-2-beta-patch-v0-105-0-aeonglass-bestiary-hotfix"
                  className="inline-flex items-center rounded-full border border-molten-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange"
                >
                  Latest beta patch
                </Link>
                <Link
                  href="/news/slay-the-spire-2-hotfix-patch-notes"
                  className="inline-flex items-center rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-steel-blue transition hover:border-molten-orange hover:text-molten-orange"
                >
                  Hotfix recap
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-shadow-gray/80 p-6 text-sm text-steel-blue">
              <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Decision hygiene</p>
              <ul className="mt-4 space-y-3">
                <li>Double-check patch log before updating card priorities.</li>
                <li>Focus on reliable mechanics instead of chasing hypothetical synergies.</li>
                <li>Use the cards/relics lookup if your next draft is missing a critical tool.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Character builds</p>
              <h2 className="font-heading text-3xl font-bold text-white">Hero cards with patch notes</h2>
              <p className="text-sm text-steel-blue">Each tile packs the archetype, patch context, focus, and where to go next.</p>
            </div>
            <Link
              href="/guides"
              className="text-sm font-semibold uppercase tracking-[0.3em] text-molten-orange"
            >
              View all build guides →
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {BUILD_TILES.map((tile) => {
              const character = CHARACTERS.find((entry) => entry.slug === tile.slug);

              if (!character) return null;

              const nextSteps = buildNextSteps(tile, character.name);

              return (
                <article key={tile.slug} className="rounded-3xl border border-border bg-gradient-to-br from-forge-black/70 to-shadow-gray p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">{character.title}</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-white">{character.name}</h3>
                    </div>
                    <span className="rounded-full border border-molten-orange px-3 py-1 text-xs font-semibold text-molten-orange">
                      {character.difficulty ?? 'Advanced'}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-molten-orange px-3 py-1 text-xs font-semibold text-molten-orange">
                      {tile.statusTier} tier
                    </span>
                    <p className="text-sm text-steel-blue">{tile.actionCue}</p>
                  </div>
                  <p className="mt-3 text-sm text-steel-blue">{tile.focus}</p>
                  <div className="mt-4 rounded-2xl border border-border bg-background/40 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Patch focus</p>
                    <p className="mt-2 text-sm text-steel-blue">{tile.patchImpact}</p>
                  </div>
                  <div className="mt-4 grid gap-2 text-xs text-steel-blue">
                    <p>Card focus: {tile.cardFocus}</p>
                    <p>Relic focus: {tile.relicFocus}</p>
                    {tile.watchlistReason && (
                      <p className="text-molten-orange">Watchlist note: {tile.watchlistReason}</p>
                    )}
                  </div>
                  <div className="mt-5 rounded-2xl border border-border bg-background/30 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Next step</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                      {nextSteps.map((step) => (
                        <Link
                          key={step.href + step.label}
                          href={step.href}
                          className={
                            step.variant === 'primary'
                              ? 'rounded-full border border-molten-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange'
                              : 'rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-steel-blue transition hover:border-molten-orange hover:text-molten-orange'
                          }
                        >
                          {step.label} →
                        </Link>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-steel-blue">
                      Pick the guide for the build line, the character page for baseline context, the character cards page for exact pool checks, or patch retest if this route still feels unsettled.
                    </p>
                  </div>
                  <div className="mt-5 grid gap-3 text-xs text-steel-blue">
                    {heroMechanicNames(tile.slug).slice(0, 3).map((mechanic) => (
                      <div key={mechanic} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-molten-orange" />
                        <span>{mechanic}</span>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-shadow-gray/70 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Need more depth?</p>
                <h2 className="font-heading text-3xl font-bold text-white">Next stops for cards, relics, and deeper patch context</h2>
              </div>
              <p className="text-sm text-steel-blue">
                Every tile below links to the resource you need to validate the build you are drafting.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {RESOURCE_CARDS.map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group rounded-2xl border border-border bg-forge-black/60 p-5 transition hover:border-molten-orange"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange">{resource.badge}</div>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white">{resource.title}</h3>
                  <p className="mt-2 text-sm text-steel-blue">{resource.copy}</p>
                  <span className="mt-4 inline-flex text-xs font-semibold text-molten-orange underline decoration-dotted decoration-molten-orange/60">
                    Open resource →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
