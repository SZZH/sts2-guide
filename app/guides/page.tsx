import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Guide Hub — Decision Paths',
  description:
    'Task-oriented Slay the Spire 2 guidance grouped into Beginner, Build Path, Patch Adjustments, Route Decisions, and Mechanics so you know exactly what to read next.',
  keywords: [
    'Slay the Spire 2 guide hub',
    'Slay the Spire 2 decisions',
    'Slay the Spire 2 beginner path',
  ],
  alternates: {
    canonical: '/guides',
  },
};

const GUIDE_SECTIONS = [
  {
    title: 'Beginner Path',
    description:
      'First ten runs, starter character picks, and early campfire choices that keep new players alive long enough to reach Act 2.',
    tasks: [
      'Follow a single, high-value build until you understand timing and ramp-up',
      'Understand starter relics and why protecting Osty matters',
      'Master first-run priorities: when to rest, upgrade, or skip',
    ],
    ctas: [
      { label: 'Browse beginner builds', href: '/builds' },
      { label: 'Compare starter characters', href: '/characters' },
    ],
  },
  {
    title: 'Build Path',
    description:
      'Decide which builds to chase based on the current patch, which archetypes still win, and how to sequence upgrades for the core cards you actually find.',
    tasks: [
      'Identify a role (damage, control, tank) and stick to builds that support it',
      'Track key card synergies that scale through Acts 2 and 3',
      'Pair relics with build goals so you know what to keep and what to sell',
    ],
    ctas: [
      { label: 'Go to the builds hub', href: '/builds' },
      { label: 'Reference characters for build flavor', href: '/characters' },
    ],
  },
  {
    title: 'Patch Adjustments',
    description:
      'Summaries of recent balance shifts, plus the quick decisions you need to rewrite your priorities when a relic gets nerfed or a card buff lands.',
    tasks: [
      'Read the latest patch impact and what it means for your win conditions',
      'Retrofit current builds with buffed cards or avoid nerfed chains',
      'Update your tier expectations based on fresh stability signals',
    ],
    ctas: [
      { label: 'Plan around the latest patch', href: '/patches' },
      { label: 'Link to builds influenced by this patch', href: '/builds' },
    ],
  },
  {
    title: 'Route Decisions',
    description:
      'Which elites to fight, when to visit the new optional fights, and how to sequence upgrade nodes, shrines, and camps for the rolls that maximize survival.',
    tasks: [
      'Decide early whether you are a damage dealer, tank, or hybrid',
      'Track which characters thrive against upcoming elites',
      'Force/(or avoid) branching paths when their rewards sync with your build',
    ],
    ctas: [
      { label: 'See character decision matrices', href: '/characters' },
      { label: 'Pull detailed route scenarios', href: '/patches' },
    ],
  },
  {
    title: 'Mechanics & References',
    description:
      'Need to understand a new mechanic, relic interaction, or how cards stack with status effects? These quick summaries tie back to the builds that rely on them.',
    tasks: [
      'Review the refreshed mechanics before you invest in a build',
      'Cross-reference cards and relics that interact with your chosen archetype',
      'Confirm the current version notes so you know what is still viable',
    ],
    ctas: [
      { label: 'Lookup mechanics', href: '/mechanics' },
      { label: 'Cross-check cards and relics', href: '/mechanics' },
    ],
  },
];

export default function GuidesPage() {
  return (
    <main className="px-6 py-10 lg:px-16">
      <section className="max-w-4xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Decision hub</p>
        <h1 className="text-4xl font-semibold text-slate-900">Task-oriented guidance for every Slay the Spire 2 run</h1>
        <p className="text-lg text-slate-700">
          This page doesn’t dump every article at you. It organizes the guidance you actually need today—beginner moves, build paths,
          patch fixes, route choices, and mechanic primers—so you can tap the next decision without scrolling through old news or co-op filler.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {GUIDE_SECTIONS.slice(0, 2).map((section) => (
            <article key={section.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500">{section.title}</p>
              <p className="mt-2 text-sm text-slate-600">{section.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8">
        {GUIDE_SECTIONS.map((section) => (
          <article key={section.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-slate-500">{section.title}</p>
                <p className="mt-1 text-xl font-semibold text-slate-900">{section.description}</p>
              </div>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              {section.tasks.map((task) => (
                <p key={task} className="rounded-2xl border border-dashed border-slate-300 bg-white/80 px-4 py-3">
                  {task}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {section.ctas.map((cta) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className="rounded-full border border-transparent bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  {cta.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
