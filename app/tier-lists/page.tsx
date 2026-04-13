import Link from 'next/link';

const currentVersion = 'v0.103.0';

const sectionData = [
  {
    id: 'characters',
    title: 'Characters',
    description:
      'See how current patch weights each hero for new and returning players, then jump straight to the builds that make them shine.',
    calls: [
      { label: 'Character Tier List', href: '#characters' },
      { label: 'Top Builds by Role', href: '/builds' },
    ],
  },
  {
    id: 'beginner',
    title: 'Beginner',
    description:
      'Get a calm starter loop: recommended unlock order, first-run choices, and the safest cards to pick in the latest meta.',
    calls: [
      { label: 'Beginner Focus', href: '#beginner' },
      { label: 'Starter Builds', href: '/builds' },
    ],
  },
  {
    id: 'archetypes',
    title: 'Archetypes',
    description:
      'Choose from today’s most resilient archetypes, compare their stability scores, and see what makes them work in patch-vetted runs.',
    calls: [
      { label: 'Archetype Stability Grid', href: '#archetypes' },
      { label: 'Builds-by-Archetype', href: '/builds' },
    ],
  },
  {
    id: 'cards',
    title: 'Cards',
    description:
      'Drill into the cards that matter for each hero or archetype, including synergy cues and the cards you can stop prioritizing after patch shifts.',
    calls: [
      { label: 'Card Priority Lens', href: '#cards' },
      { label: 'Character Card Breakdowns', href: '/characters' },
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
            patch window before we keep promoting them; anything below that is tagged as “volatile” and surfaced
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
