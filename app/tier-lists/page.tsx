import Link from 'next/link';

const currentVersion = 'v0.103.0';

const sectionData = [
  {
    id: 'characters',
    title: 'Characters',
    description: (
      <>
        <p>
          For early and returning runs, Ironclad remains the safest character to recommend because the current patch
          direction still favors clearer survivability and more forgiving act-one pacing. Silent and Regent can be
          strong, but they should be treated as patch-sensitive choices until the current balance window settles.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Version {currentVersion} · Stability range: current patch window with conservative role-based evaluation ·
          Use the builds hub before turning a character ranking into a concrete deck decision.
        </p>
      </>
    ),
    calls: [
      { label: 'View builds by hero', href: '/builds' },
      { label: 'Character details', href: '/characters' },
    ],
  },
  {
    id: 'beginner',
    title: 'Beginner',
    description: (
      <>
        <p>
          In the current beta branch, first-run players should favor safer defensive lines, cleaner upgrades, and
          consistent route control before committing to high-variance archetypes. Use this lens when you need the most
          forgiving path, not the highest ceiling.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Applicable when your goal is repeatable act-one and act-two stability. Once your runs stop collapsing to
          early mistakes, move into the builds hub for more specific archetype calls.
        </p>
      </>
    ),
    calls: [
      { label: 'Starter builds', href: '/builds' },
      { label: 'Character card primers', href: '/cards' },
    ],
  },
  {
    id: 'archetypes',
    title: 'Archetypes',
    description: (
      <>
        <p>
          The most reliable archetypes this patch are the ones that still produce stable defense, scaling, and route
          flexibility without depending on one narrow combo line. Use the watchlist label for burst-heavy or highly
          sequencing-dependent paths that still look strong but have not settled enough to promote aggressively.
        </p>
        <p className="mt-3 text-sm text-slate-400">
          Controversy note: any archetype that depends on the beta branch’s newest timing or scoring behavior should
          stay in watchlist territory until it survives more than one patch cycle.
        </p>
      </>
    ),
    calls: [
      { label: 'Archetype grid', href: '/builds' },
      { label: 'Character breakdowns', href: '/characters' },
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
          That keeps this page aligned with current patch uncertainty instead of pretending card rankings are final.
        </p>
      </>
    ),
    calls: [
      { label: 'Card deep dives', href: '/cards' },
      { label: 'Related builds', href: '/builds' },
    ],
  },
];

export default function TierListsPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col space-y-12 px-6 py-12 text-white">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current version</p>
        <h1 className="text-4xl font-semibold">Tier lists for {currentVersion}</h1>
        <p className="text-lg text-slate-200">
          Four living lenses for the latest patch: hero strength, new player stability, archetype resilience, and
          card decisiveness. Each section points back to builds or reference pages so you finish with a decision.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="rounded-full border border-slate-600 px-3 py-1">Last validated Apr 13, 2026</span>
          <span className="rounded-full border border-slate-600 px-3 py-1">Sources: patch notes · community testers</span>
          <span className="rounded-full border border-slate-600 px-3 py-1">Stability window: 14-day rolling</span>
        </div>
      </header>

      <section className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Stability pulse</h2>
          <p className="text-slate-200">
            Builds that appear in the Characters or Archetype leg must hit a 60% success ceiling across the latest
            patch window before we keep promoting them; anything below that is tagged as &quot;volatile&quot; and surfaced
            inside the cards section for deeper review.
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
            previously ranked high may fall to watchlist. Use the buttons above or hop into builds/characters/cards
            for the full decision flow.
          </p>
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500">CTA ⟶ /builds · /characters · /cards</p>
        </div>
      </section>
    </main>
  );
}
