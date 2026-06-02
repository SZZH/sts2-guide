import type { Metadata } from 'next';
import Link from 'next/link';

const currentVersion = 'v0.106.1 / v0.106.0 beta';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Tier List & Tier Lists | v0.106.1 / v0.106.0 Beta',
  description:
    'Use the Slay the Spire 2 tier list hub for patch-aware tier lists covering characters, beginner stability, archetypes, cards, relics, builds, and the current v0.106.1 / v0.106.0 beta patch cycle.',
  alternates: {
    canonical: '/tier-lists',
  },
  openGraph: {
    title: 'Slay the Spire 2 Tier List & Tier Lists',
    description:
      'Character, beginner, archetype, card, relic, build, and patch-aware tier guidance for Slay the Spire 2 with conservative recommendations tied to the current v0.106.1 / v0.106.0 beta cycle.',
  },
};

const heroLinks = [
  { label: 'Builds', href: '/builds' },
  { label: 'Cards', href: '/cards' },
  { label: 'Relics', href: '/relics' },
  { label: 'Patch notes', href: '/patches' },
  { label: 'Latest beta patch', href: '/news/slay-the-spire-2-beta-patch-v0-106-0-v0-106-1-hotfix' },
];

const sectionData = [
  {
    id: 'characters',
    title: 'Characters',
    description: (
      <>
        <p>
          For early and returning runs, Ironclad remains the safest character to recommend, but the current beta cycle
          still makes Strength AoE and Exhaust turns the first retest target rather than a settled promotion. Silent
          and Regent can be strong, but they should be treated as patch-sensitive choices until the beta window settles.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Version {currentVersion} · Stability range: beta watchlist with conservative role-based evaluation ·
          Use the builds hub before turning a character ranking into a concrete deck decision.
        </p>
      </>
    ),
    calls: [
      { label: 'View builds by hero', href: '/builds' },
      { label: 'Character details', href: '/characters' },
      { label: 'Patch impact', href: '/patches' },
    ],
  },
  {
    id: 'beginner',
    title: 'Beginner',
    description: (
      <>
        <p>
          In the current beta branch, official notes point toward slightly easier lower Ascensions while preserving high
          Ascension pressure. First-run players should still favor safer defensive lines, cleaner upgrades, and route
          control before committing to high-variance archetypes.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Applicable when your goal is repeatable act-one and act-two stability. Once your runs stop collapsing to
          early mistakes, move into the builds hub for more specific archetype calls, or check the current patch hub if
          your old beginner route depended on pre-Aeonglass assumptions.
        </p>
      </>
    ),
    calls: [
      { label: 'Starter builds', href: '/builds' },
      { label: 'Character card primers', href: '/cards' },
      { label: 'Latest beta notes', href: '/news/slay-the-spire-2-beta-patch-v0-106-0-v0-106-1-hotfix' },
    ],
  },
  {
    id: 'archetypes',
    title: 'Archetypes',
    description: (
      <>
        <p>
          The most reliable archetypes in this beta window are the ones that still produce stable defense, scaling, and route
          flexibility without depending on one narrow combo line. Use the watchlist label for burst-heavy or highly
          sequencing-dependent paths that still look strong but have not settled enough to promote aggressively.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Controversy note: any archetype that depends on the beta branch’s newest timing, boss reads, or scoring behavior should
          stay in watchlist territory until it survives more than one patch cycle.
        </p>
      </>
    ),
    calls: [
      { label: 'Archetype grid', href: '/builds' },
      { label: 'Character breakdowns', href: '/characters' },
      { label: 'Relic checks', href: '/relics' },
    ],
  },
  {
    id: 'cards',
    title: 'Cards',
    description: (
      <>
        <p>
          This lens is for cards whose value changes with the build you are actually running. Use it to separate
          “core to a stable route” cards from “still promising but patch-sensitive” cards, then jump into builds or
          character pages for the full decision context.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          When a card drops into watchlist territory, treat it as a re-test candidate rather than an automatic pick.
          That keeps this page aligned with current patch uncertainty instead of pretending card rankings are final,
          especially when patch notes and boss updates are moving faster than run-proofed rankings.
        </p>
      </>
    ),
    calls: [
      { label: 'Card deep dives', href: '/cards' },
      { label: 'Related builds', href: '/builds' },
      { label: 'Patch notes', href: '/patches' },
    ],
  },
];

export default function TierListsPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col space-y-12 px-6 py-12 text-white">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Slay the Spire 2 tier list hub</p>
        <h1 className="text-4xl font-semibold">Slay the Spire 2 tier list and tier lists for {currentVersion}</h1>
        <p className="text-lg text-slate-200">
          Use this Slay the Spire 2 tier list page as a current-patch index for tier lists by hero strength, new
          player stability, archetype resilience, card decisiveness, and retest priority. Each section points back to
          builds, cards, relics, patches, or the latest v0.106 beta notes so you finish with a decision instead of a
          flat ranking.
        </p>
        <nav aria-label="Tier list decision links" className="flex flex-wrap gap-3 text-sm">
          {heroLinks.map((link) => (
            <Link
              key={link.href}
              className="rounded-full bg-slate-800 px-4 py-2 font-medium text-white transition hover:bg-slate-700"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-slate-600 px-3 py-1">Last validated May 25, 2026</span>
          <span className="rounded-full border border-slate-600 px-3 py-1">Sources: official Steam notes · community signals</span>
          <span className="rounded-full border border-slate-600 px-3 py-1">Stability window: 14-day rolling</span>
        </div>
      </header>

      <section className="rounded-2xl border border-molten-orange/30 bg-slate-900/70 p-6 shadow-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-molten-orange">Quick route</p>
            <h2 className="text-2xl font-semibold text-white">What should you open after this tier page?</h2>
          </div>
          <p className="max-w-2xl text-sm text-slate-300">
            Use tier lists to narrow the question, then switch to the page that actually changes your next run.
          </p>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <Link className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-4 text-sm font-medium text-white transition hover:border-molten-orange" href="/builds">
            Open build guides for the current patch
          </Link>
          <Link className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-4 text-sm font-medium text-white transition hover:border-molten-orange" href="/patches">
            Re-check patch notes before changing rankings
          </Link>
          <Link className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-4 text-sm font-medium text-white transition hover:border-molten-orange" href="/cards">
            Check cards when a tier call still feels volatile
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Stability pulse</h2>
          <p className="text-slate-200">
            Builds that appear in the Characters or Archetype leg must hit a 60% success ceiling across the latest
            patch window before we keep promoting them; anything below that is tagged as &quot;volatile&quot; and surfaced
            inside the cards, relics, or patch notes path for deeper review.
          </p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">Stable</span>
            <span className="rounded-full bg-amber-500/10 px-3 py-1 text-amber-200">Watchlist</span>
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-red-200">Volatile</span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {sectionData.map((section) => (
          <article
            id={section.id}
            key={section.title}
            className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg"
          >
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>{section.title}</span>
              <span>Patch {currentVersion}</span>
            </div>
            <h3 className="mt-3 text-2xl font-semibold">{section.title} tier focus</h3>
            <p className="mt-2 text-slate-200">{section.description}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {section.calls.map((call) => (
                <Link
                  key={call.href}
                  className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                  href={call.href}
                >
                  {call.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-3 rounded-2xl border border-dashed border-slate-700 p-6 text-slate-200">
        <h2 className="text-2xl font-semibold text-white">Need a quick path?</h2>
        <div className="flex flex-col gap-2 text-sm">
          <p>
            Characters feed the Builds hub, archetypes keep the tier map honest, and cards explain why something
            previously ranked high may fall to watchlist. Use the buttons above or hop into builds, cards, relics,
            patches, or the latest v0.105 beta analysis for the full decision flow.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
            CTA -&gt; /builds · /cards · /relics · /patches · /news/slay-the-spire-2-beta-patch-v0-105-0-aeonglass-bestiary-hotfix
          </p>
        </div>
      </section>
    </main>
  );
}
