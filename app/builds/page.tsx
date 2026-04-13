import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CHARACTERS } from '@/shared/gameData';
import { siteAssetUrl } from '@/shared/siteAssets';
import { OrganizationSchema, VideoGameSchema, WebsiteSchema } from '@/app/schema';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Builds Hub | Current patch decision flows',
  description:
    'Current Slay the Spire 2 builds hub with hero summaries, character archetype tiles, patch-aware notes, and quick links into the starter, guides, cards, and relic resources.',
  alternates: {
    canonical: '/builds',
  },
  openGraph: {
    title: 'StS2 Builds Hub — current patch 0.103.0 decision flows',
    description:
      'Plan your next run with patched build summaries, character archetypes, and the latest patch tracker, cards, and relic resources.',
  },
};

const CURRENT_PATCH = 'v0.103.0';

const DECISION_TILES = [
  {
    href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
    label: 'Beginner Path',
    description: 'Starter priorities, first-act pacing, and the next actions to keep new runs stable.',
    badge: 'Beginner',
  },
  {
    href: '/guides',
    label: 'Build Guides',
    description: 'Character archetypes, matchup notes, and recommendations vetted for patch 0.103.0.',
    badge: 'Builds',
  },
  {
    href: '/news/slay-the-spire-2-steamdb-patch-tracker',
    label: 'Patch Impact',
    description: 'Track what changed, why it matters, and which builds need a retest.',
    badge: 'Patch',
  },
  {
    href: '/cards',
    label: 'Card Lookup',
    description: 'Search cards, potions, and synergies that plug into each hero archetype.',
    badge: 'Reference',
  },
];

const RESOURCE_CARDS = [
  {
    href: '/guides',
    title: 'Step through the builds library',
    copy: 'Pin your archetype, read the practical guide, and lock in upgrade/crafting calls.',
    badge: 'Guides',
  },
  {
    href: '/news/slay-the-spire-2-steamdb-patch-tracker',
    title: 'Patch tracker & notes',
    copy: 'Follow every hotfix, know what touched your deck, and keep your assumptions fresh.',
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

type BuildTile = {
  slug: 'ironclad' | 'silent' | 'regent' | 'necrobinder' | 'defect';
  archetype: string;
  patchImpact: string;
  focus: string;
  guideHref: string;
};

const BUILD_TILES: BuildTile[] = [
  {
    slug: 'ironclad',
    archetype: 'Strength ramp + controlled HP trade-offs',
    patchImpact: 'Patch 0.103.0 trimmed the snappier self-damage lines so Block-based Strength ramps are safer.',
    focus: 'Lean toward consistent guard and Strength cards before tilting into explosive finishers.',
    guideHref: '/guides/ironclad-early-build',
  },
  {
    slug: 'silent',
    archetype: 'Discard tempo with Sly/Poison follow-through',
    patchImpact: 'Patch 0.103.0 sharpened Sly triggers and made Poison timing more reliable for mid-game hooks.',
    focus: 'Build hand quality and sequencing before locking into high-variance Sly payoffs.',
    guideHref: '/guides/silent-early-build',
  },
  {
    slug: 'regent',
    archetype: 'Stars economy and Forge artifacts',
    patchImpact: 'Forge tweaks from 0.103.0 reward clearer Stars-to-artifact paths and discourage overtaxed setups.',
    focus: 'Prioritize Stars generation that feeds your Forge toolkit and only load artifact burst when the map is stable.',
    guideHref: '/guides/regent-stars-vs-forge-build-path',
  },
  {
    slug: 'necrobinder',
    archetype: 'Doom + Souls + Osty control',
    patchImpact: 'Doom timing and Soul gains got calibration love, so early Osty plays need cleaner setup windows.',
    focus: 'Stagger Osty usage, stack Souls, and keep Doom thresholds readable for patch 0.103.0.',
    guideHref: '/guides/necrobinder-common-cards',
  },
  {
    slug: 'defect',
    archetype: 'Orb sequencing and Focus scaling',
    patchImpact: 'Orb stability from 0.103.0 means your Focus investments now unlock more reliable evocations.',
    focus: 'Balance early control orbs with late-game investment orbs without going full random burst.',
    guideHref: '/guides/defect-early-build',
  },
];

function heroMechanicNames(characterSlug: BuildTile['slug']) {
  const character = CHARACTERS.find((entry) => entry.slug === characterSlug);
  return character?.mechanics?.map((mechanic) => mechanic.name) ?? [];
}

export default function BuildsPage() {
  const heroSignals = [
    'Patch-aware builds for the current patch (patch 0.103.0) so you can spot the safe upgrade paths.',
    'Each character tile highlights the archetype focus, patch impact, and where to go next for guides or cards.',
    'Decision tiles funnel you into beginners, builds, patch details, and the reference resources you need right away.',
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
            <p className="text-xs uppercase tracking-[0.4em] text-molten-orange">Current patch {CURRENT_PATCH}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">Slay the Spire 2 builds hub</h1>
            <p className="max-w-3xl text-base leading-relaxed text-steel-blue md:text-lg">
              Plan your run with patched archetypes, clear build cards, and instant links into the starter, guides, cards, and relics resources.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {heroSignals.map((signal) => (
                <div key={signal} className="rounded-2xl border border-border bg-background/60 p-5 text-sm text-steel-blue">
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto flex flex-col gap-4 px-4 py-12">
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

        <section className="bg-gradient-to-r from-shadow-gray to-forge-black py-10">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-border bg-forge-black/60 p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Patch Signal</p>
              <h3 className="font-heading text-3xl font-bold mt-2">What patch {CURRENT_PATCH} means for builds</h3>
              <p className="mt-4 text-base text-steel-blue">
                The latest patch kept the Early Access metagame nimble: repeatable Strength, Sly, and Forge lines are rewarded while unpredictable spike builds are dialed down. These tiles highlight what to test in your current run.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/news/slay-the-spire-2-steamdb-patch-tracker"
                  className="inline-flex items-center rounded-full border border-molten-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange"
                >
                  Patch tracker
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
              <p className="text-sm text-steel-blue">Each tile packs the archetype, patch impact, focus, and where to go next.</p>
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
                  <p className="mt-4 text-sm text-steel-blue">{tile.archetype}</p>
                  <p className="mt-3 text-sm text-steel-blue">{tile.focus}</p>
                  <div className="mt-4 rounded-2xl border border-border bg-background/40 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Patch focus</p>
                    <p className="mt-2 text-sm text-steel-blue">{tile.patchImpact}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                    <Link
                      href={tile.guideHref}
                      className="rounded-full border border-molten-orange px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-molten-orange"
                    >
                      Open guide →
                    </Link>
                    <Link
                      href={`/characters/${character.slug}`}
                      className="rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-steel-blue transition hover:border-molten-orange hover:text-molten-orange"
                    >
                      Character detail →
                    </Link>
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
