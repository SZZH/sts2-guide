import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { WebsiteSchema, OrganizationSchema, VideoGameSchema } from './schema';
import { siteAssetUrl } from '@/shared/siteAssets';

export const metadata: Metadata = {
  title: 'StS2 Guide: Slay the Spire 2 Builds, Tips, Cards, and Relics Database',
  description:
    'StS2 guide hub for Slay the Spire 2 builds, starter tips, mechanics, and searchable cards/relics/potions, including confirmed v0.103.2 card and relic updates.',
  openGraph: {
    title: 'StS2 Guide Hub: Slay the Spire 2 Builds, Tips, Cards, Relics',
    description:
      'Find beginner routes, mechanics explanations, patch analysis, and confirmed v0.103.2 card and relic lookup pages in one place.',
  },
};

export default function HomePage() {
  const heroTasks = [
    {
      href: '/guides',
      badge: 'Beginner',
      title: 'Beginner Path',
      description: 'Hands-on act-by-act priorities, starter relic calls, and what to fix before expedition two.',
    },
    {
      href: '/builds',
      badge: 'Builds',
      title: 'Current Build Guides',
      description: 'Patch-ready archetypes, decision pivots, and quick links into character deep dives.',
    },
    {
      href: '/patches',
      badge: 'Patch',
      title: 'Patch Impact',
      description: 'Live tracker for nerfs/buffs and which strategies need a reset after the latest hotfix.',
    },
    {
      href: '/characters',
      badge: 'Characters',
      title: 'Character Choice',
      description: 'Compare availability, difficulty, and card pools before locking your next hero.',
    },
  ];

  const trustSignals = [
    { label: 'Updated for patch 0.103.2', detail: 'Built from beta notes & SteamDB mirror' },
    { label: 'Verified daily', detail: 'Community testing + patch metadata' },
    { label: 'Focus: decisions, not lore', detail: 'CTA routing + this week highlights always stay aligned' },
  ];

  const thisWeekHighlights = [
    {
      href: '/builds',
      title: 'Build Spotlight — Regent Reckoning',
      summary: 'New bone synergy vs. silence-heavy enemies, plus the one relic every Regent build still should grab.',
      tag: 'Builds',
    },
    {
      href: '/patches',
      title: 'Patch Impact — Neow Relic Shuffle',
      summary: 'Interview the latest relic swaps and leaderboard tweaks so your next run starts with the right rewards.',
      tag: 'Patch',
    },
    {
      href: '/guides',
      title: 'First Run Primer',
      summary: 'Know which early upgrades to split between defense and completion before the boss fight.',
      tag: 'Beginner',
    },
    {
      href: '/cards',
      title: 'Card Lookup — Live Meta Picks',
      summary: 'Jump into the cards hub to compare rarity, cost, and synergy for each patch-aligned vote.',
      tag: 'Reference',
    },
  ];

  return (
    <>
      <WebsiteSchema />
      <OrganizationSchema />
      <VideoGameSchema />
      <div className="min-h-screen">
        <section className="relative h-[620px] overflow-hidden border-b border-border">
          <div className="absolute inset-0">
            <Image
              src={siteAssetUrl('/hero/home-hero.png')}
              alt="Slay the Spire 2 decision flow"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-black/70 to-forge-black" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-forge-black to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto flex h-full flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white">Slay the Spire 2</h1>
            <p className="max-w-2xl text-base md:text-xl text-steel-blue">
              Skip the noise. This page routes you straight to the builds, guides, patches, and card lookup
              tailored to patch 0.103.2 and the current Early Access narrative.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/builds"
                className="rounded-full bg-molten-orange px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-ember-glow"
              >
                Explore Builds
              </Link>
              <Link
                href="/patches"
                className="rounded-full border border-border bg-forge-black/60 px-8 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white"
              >
                Latest Patch Impact
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-forge-black/70 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 flex flex-col items-center gap-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">Task Cards</p>
              <h2 className="font-heading text-3xl font-bold">Four paths that solve right now</h2>
              <p className="max-w-3xl text-sm text-steel-blue">
                Each card routes to the action you need—in-run build calls, beginner guardrails, patch response, or the current roster choice.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {heroTasks.map((task) => (
                <Link
                  key={task.href}
                  href={task.href}
                  className="group rounded-2xl border border-border bg-background/40 p-6 transition-all duration-300 hover:border-molten-orange"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.4em] text-steel-blue">
                    {task.badge}
                  </div>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white">{task.title}</h3>
                  <p className="mt-3 text-sm text-steel-blue">{task.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-gradient-to-b from-forge-black to-shadow-gray/20 py-10">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-3 text-sm text-steel-blue">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex min-w-[180px] flex-col rounded-full border border-border bg-forge-black/60 px-4 py-2 text-center"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-steel-blue">{signal.label}</span>
                <span className="text-foreground">{signal.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-col items-center gap-3 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-molten-orange">This Week</p>
              <h2 className="font-heading text-3xl font-bold">本周最该看</h2>
              <p className="max-w-3xl text-sm text-steel-blue">
                Signals pulled from patch notes, community highlights, and first-run learnings. Tap the card that matches your next decision.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {thisWeekHighlights.map((highlight) => (
                <Link
                  key={highlight.href}
                  href={highlight.href}
                  className="group rounded-2xl border border-border bg-shadow-gray/30 p-6 transition-all duration-300 hover:border-molten-orange"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.4em] text-steel-blue">{highlight.tag}</div>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white">{highlight.title}</h3>
                  <p className="mt-3 text-sm text-steel-blue">{highlight.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
