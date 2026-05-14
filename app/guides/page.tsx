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
    eyebrow: 'Beginner guide',
    quickQuestion: 'First run, early mistakes, and what to learn before you overcomplicate the deck.',
    description:
      'First ten runs, starter character picks, and early campfire choices that keep new players alive long enough to reach Act 2.',
    tasks: [
      'Follow a single, high-value build until you understand timing and ramp-up',
      'Understand starter relics and why protecting Osty matters',
      'Master first-run priorities: when to rest, upgrade, or skip',
    ],
    routes: [
      'Need a first-run plan? Open the Act 1 priorities guide before touching class-specific routes.',
      'Keep dying in Act 1? Review common beginner mistakes before changing your whole draft.',
    ],
    ctas: [
      { label: 'Open first-run guide', href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities' },
      { label: 'Fix common beginner mistakes', href: '/guides/common-beginner-mistakes' },
    ],
  },
  {
    title: 'Build Path',
    eyebrow: 'Build guide',
    quickQuestion: 'You already know the basics and need a cleaner build path for the run in front of you.',
    description:
      'Decide which builds to chase based on the current patch, which archetypes still win, and how to sequence upgrades for the core cards you actually find.',
    tasks: [
      'Identify a role (damage, control, tank) and stick to builds that support it',
      'Track key card synergies that scale through Acts 2 and 3',
      'Pair relics with build goals so you know what to keep and what to sell',
    ],
    routes: [
      'Looking for a build guide? Jump straight to the early-build page for your current character.',
      'Not sure if your current draft is real? Use a concrete early-build baseline before committing upgrades.',
    ],
    ctas: [
      { label: 'Ironclad early build', href: '/guides/ironclad-early-build' },
      { label: 'Silent early build', href: '/guides/silent-early-build' },
      { label: 'Defect early build', href: '/guides/defect-early-build' },
      { label: 'Regent Stars vs Forge path', href: '/guides/regent-stars-vs-forge-build-path' },
    ],
  },
  {
    title: 'Patch Adjustments',
    eyebrow: 'Patch adjustments',
    quickQuestion: 'Something changed after an update and you need to know what to stop forcing right now.',
    description:
      'Summaries of recent balance shifts, plus the quick decisions you need to rewrite your priorities when a relic gets nerfed or a card buff lands.',
    tasks: [
      'Read the latest patch impact and what it means for your win conditions',
      'Retrofit current builds with buffed cards or avoid nerfed chains',
      'Update your tier expectations based on fresh stability signals',
    ],
    routes: [
      'Need patch adjustments fast? Read the latest patch summary, then reopen your build priorities.',
      'Unsure whether a nerfed line is still playable? Compare the patch notes against your current build path.',
    ],
    ctas: [
      { label: 'Plan around the latest patch', href: '/patches' },
      { label: 'Re-check Regent build path', href: '/guides/regent-stars-vs-forge-build-path' },
    ],
  },
  {
    title: 'Route Decisions',
    eyebrow: 'Route decisions',
    quickQuestion: 'Your deck is half-formed and the next elite, campfire, or branch can still ruin the run.',
    description:
      'Which elites to fight, when to visit the new optional fights, and how to sequence upgrade nodes, shrines, and camps for the rolls that maximize survival.',
    tasks: [
      'Decide early whether you are a damage dealer, tank, or hybrid',
      'Track which characters thrive against upcoming elites',
      'Force/(or avoid) branching paths when their rewards sync with your build',
    ],
    routes: [
      'Need safer route decisions? Start with first-run priorities, then route around elite breakpoints.',
      'Unsure whether to greed an event path? Re-anchor on common mistakes before taking side fights.',
    ],
    ctas: [
      { label: 'Act 1 route priorities', href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities' },
      { label: 'Avoid route mistakes', href: '/guides/common-beginner-mistakes' },
    ],
  },
  {
    title: 'Mechanics & References',
    eyebrow: 'Mechanics guide',
    quickQuestion: 'You need the rule behind the outcome before you can trust your next pick.',
    description:
      'Need to understand a new mechanic, relic interaction, or how cards stack with status effects? These quick summaries tie back to the builds that rely on them.',
    tasks: [
      'Review the refreshed mechanics before you invest in a build',
      'Cross-reference cards and relics that interact with your chosen archetype',
      'Confirm the current version notes so you know what is still viable',
    ],
    routes: [
      'Confused by a keyword or interaction? Open mechanics first, then return to the exact build path that depends on it.',
      'Trying to avoid common mistakes? Verify the mechanic before you cut or force a synergy.',
    ],
    ctas: [
      { label: 'Lookup mechanics', href: '/mechanics' },
      { label: 'Return to Regent route after mechanics', href: '/guides/regent-stars-vs-forge-build-path' },
    ],
  },
];

const QUICK_STARTS = [
  {
    label: 'I need a beginner guide',
    hint: 'First run priorities, starter picks, and common mistakes.',
    href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
  },
  {
    label: 'Help me choose a build path',
    hint: 'Go straight to a concrete early-build page instead of a general hub.',
    href: '/guides/ironclad-early-build',
  },
  {
    label: 'What changed this patch?',
    hint: 'Patch adjustments, nerfs, buffs, and route rewrites.',
    href: '/patches',
  },
  {
    label: 'I am about to make a route decision',
    hint: 'Elites, campfires, shrines, and branching path calls from an Act 1 lens.',
    href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
  },
  {
    label: 'Explain the mechanic before I commit',
    hint: 'Check the rule, interaction, or card logic first.',
    href: '/mechanics',
  },
  {
    label: 'Show me the most common mistakes',
    hint: 'Use the guide hub like a first-run triage board.',
    href: '/guides/common-beginner-mistakes',
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background px-6 py-10 lg:px-16">
      <section className="max-w-4xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-molten-orange">Decision hub</p>
        <h1 className="font-heading text-4xl font-bold text-white md:text-5xl">Task-oriented guidance for every Slay the Spire 2 run</h1>
        <p className="text-lg leading-8 text-steel-blue">
          This page doesn’t dump every article at you. It organizes the guidance you actually need today—beginner moves, build paths,
          patch fixes, route choices, and mechanic primers—so you can tap the next decision without scrolling through old news or co-op filler.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {QUICK_STARTS.map((entry, index) => (
            <article
              key={entry.label}
              className={`rounded-2xl border p-5 ${index === 0 ? 'border-molten-orange/30 bg-forge-black/70' : 'border-border bg-background/40'}`}
            >
              <p className="text-xs uppercase tracking-widest text-molten-orange">Quick start</p>
              <p className="mt-2 text-lg font-semibold text-white">{entry.label}</p>
              <p className="mt-2 text-sm leading-7 text-steel-blue">{entry.hint}</p>
              <Link
                href={entry.href}
                className="mt-4 inline-flex rounded-full border border-border bg-shadow-gray px-4 py-2 text-sm font-semibold text-white transition hover:border-molten-orange hover:bg-muted"
              >
                Open guide
              </Link>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-molten-orange/20 bg-forge-black/75 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-molten-orange">How to use this page</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <p className="text-base font-semibold text-white">If you are brand new</p>
              <p className="mt-2 text-sm leading-7 text-steel-blue">
                Start with beginner path, then jump into a simple build guide before you worry about edge-case mechanics.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background/40 p-4">
              <p className="text-base font-semibold text-white">If the run is already live</p>
              <p className="mt-2 text-sm leading-7 text-steel-blue">
                Pick the lane that matches your current decision: build path, route decision, patch adjustment, or mechanic clarification.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-8">
        {GUIDE_SECTIONS.map((section) => (
          <article key={section.title} className="rounded-3xl border border-border bg-forge-black/70 p-6 shadow-inner">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-molten-orange">{section.eyebrow}</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">{section.title}</h2>
                <p className="mt-2 text-base leading-7 text-white/85">{section.quickQuestion}</p>
                <p className="mt-3 text-lg text-steel-blue">{section.description}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {section.routes.map((route) => (
                <p key={route} className="rounded-2xl border border-molten-orange/15 bg-background/30 px-4 py-3 text-sm text-white/85">
                  {route}
                </p>
              ))}
            </div>
            <div className="mt-4 grid gap-3 text-sm text-steel-blue">
              {section.tasks.map((task) => (
                <p key={task} className="rounded-2xl border border-dashed border-border bg-background/50 px-4 py-3">
                  {task}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {section.ctas.map((cta) => (
                <Link
                  key={cta.href + cta.label}
                  href={cta.href}
                  className="rounded-full border border-border bg-shadow-gray px-5 py-2 text-sm font-semibold text-white transition hover:border-molten-orange hover:bg-muted"
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
