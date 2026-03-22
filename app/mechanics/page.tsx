import { Metadata } from 'next';
import Link from 'next/link';
import { GAME_MECHANICS } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Mechanics Guide - Sly, Doom, Stars, Forge',
  description:
    'Mechanics guide for Slay the Spire 2 covering Sly, Doom, Stars, Forge, Drawpile, and Exhaust. Use this page to map common questions to practical run decisions.',
  keywords: [
    'Slay the Spire 2 mechanics',
    'StS2 Sly mechanic',
    'StS2 Doom Stars Forge',
    'Slay the Spire 2 systems guide',
  ],
  alternates: {
    canonical: '/mechanics',
  },
  openGraph: {
    title: 'Slay the Spire 2 Mechanics Guide - Sly, Doom, Stars, Forge',
    description: 'Complete guide to Slay the Spire 2 game mechanics including Sly, Doom, Stars, Forge, Enchantments, and more.',
  },
};

export default function MechanicsPage() {
  const coreMechanics = GAME_MECHANICS.filter(m => m.category === 'Core');
  const characterMechanics = GAME_MECHANICS.filter(m => m.category === 'Character');
  const advancedMechanics = GAME_MECHANICS.filter(m => m.category === 'Advanced');
  const intentShortcuts = [
    {
      href: '/guides/exhaust-mechanic-explained',
      query: 'slay the spire 2 exhaust mechanic',
      label: 'Exhaust Mechanic Explained',
    },
    {
      href: '/guides/drawpile-mechanic-explained',
      query: 'sts2 drawpile mechanic',
      label: 'Drawpile Mechanic Explained',
    },
    {
      href: '/guides/act1-route-priority',
      query: 'sts2 act 1 route',
      label: 'Act 1 Route Priority',
    },
    {
      href: '/cards/hammer_time',
      query: 'slay the spire 2 hammer time',
      label: 'Hammer Time Card',
    },
    {
      href: '/relics/book_of_five_rings',
      query: 'book of five rings slay the spire',
      label: 'Book of Five Rings Relic',
    },
    {
      href: '/cards/abrasive',
      query: 'abrasive sts2',
      label: 'Abrasive Card',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              SLAY THE SPIRE 2 MECHANICS
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Slay the Spire 2 mechanics wiki for launch week. Start here if you need a fast beginner guide to Sly, Doom, Stars, Forge, and the systems shaping Early Access runs.
            </p>
            <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
              <div className="rounded-xl border border-orange-500/30 bg-card/80 p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                  Start Here
                </div>
                <h2 className="text-xl font-bold mb-2">Beginner Priority</h2>
                <p className="text-sm text-muted-foreground">
                  Learn the universal mechanics first, then jump to character-specific systems once your first run feels stable.
                </p>
              </div>
              <div className="rounded-xl border border-purple-500/30 bg-card/80 p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                  Best Next Page
                </div>
                <Link href="/characters" className="text-xl font-bold mb-2 block hover:text-purple-400 transition-colors">
                  Compare Characters
                </Link>
                <p className="text-sm text-muted-foreground">
                  Pick a starter character after you understand how Sly, Doom, and Stars change your decision making.
                </p>
              </div>
              <div className="rounded-xl border border-blue-500/30 bg-card/80 p-5">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  Launch Week
                </div>
                <Link href="/news/slay-the-spire-2-first-run-guide-act-1-priorities" className="text-xl font-bold mb-2 block hover:text-blue-400 transition-colors">
                  First-Run Guide
                </Link>
                <p className="text-sm text-muted-foreground">
                  Use this together with the mechanics page if you want a practical route from theory into Act 1 execution.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-orange-500/20 bg-card/70 p-5 text-left">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                Beginner Route
              </div>
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
                  If mechanics terms make sense but your runs still collapse, do not stay on theory pages too long. Move next into beginner mistakes or starter-character choice so the information turns into better launch-week decisions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/news/slay-the-spire-2-top-10-beginner-mistakes"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-orange-400 hover:text-orange-400"
                  >
                    Read Beginner Mistakes
                  </Link>
                  <Link
                    href="/news/best-starter-character-slay-the-spire-2-early-access"
                    className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-orange-400 hover:text-orange-400"
                  >
                    Pick a Starter Character
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card/70 p-5 text-left">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                Search Intent Shortcuts
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                Jump to the exact page behind recurring mechanic questions instead of starting from broad wiki sections.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {intentShortcuts.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg border border-border bg-background/60 px-4 py-3 transition-colors hover:border-orange-400"
                  >
                    <div className="text-[11px] uppercase tracking-[0.16em] text-orange-400">Query: {item.query}</div>
                    <div className="mt-1 text-sm font-semibold">{item.label}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Mechanics */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Core Mechanics</h2>
            <p className="text-muted-foreground">
              Universal systems that affect all characters and define the foundation of gameplay. If you are searching for a Slay the Spire 2 beginner guide or wiki-style quick answers, start with these systems before browsing builds.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coreMechanics.map((mechanic) => (
              <div
                key={mechanic.slug}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{mechanic.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">
                      {mechanic.name}
                    </h3>
                    <p className="text-sm text-orange-400 mb-3">{mechanic.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{mechanic.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character Mechanics */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Character-Specific Mechanics</h2>
            <p className="text-muted-foreground">
              Unique systems that define each character&apos;s playstyle and strategic identity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {characterMechanics.map((mechanic) => (
              <div
                key={mechanic.slug}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{mechanic.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">
                        {mechanic.name}
                      </h3>
                      <span className="px-2 py-0.5 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded">
                        NEW
                      </span>
                    </div>
                    <p className="text-sm text-purple-400 mb-2">{mechanic.description}</p>
                    {mechanic.character && (
                      <div className="flex gap-2 mb-3">
                        <Link
                          href={`/characters/${mechanic.character.toLowerCase()}`}
                          className="text-xs px-2 py-1 bg-background border border-border rounded hover:border-purple-400 transition-colors capitalize"
                        >
                          {mechanic.character}
                        </Link>
                      </div>
                    )}
                    <p className="text-muted-foreground leading-relaxed">{mechanic.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Mechanics */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Advanced Mechanics</h2>
            <p className="text-muted-foreground">
              Complex systems that add depth and variety to your runs. Master these for maximum strategic advantage.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {advancedMechanics.map((mechanic) => (
              <div
                key={mechanic.slug}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{mechanic.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {mechanic.name}
                    </h3>
                    <p className="text-sm text-blue-400 mb-3">{mechanic.description}</p>
                    <p className="text-muted-foreground leading-relaxed">{mechanic.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-500/10 via-orange-500/10 to-red-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Master the Spire?</h2>
            <p className="text-muted-foreground mb-8">
              Explore character guides to see how these mechanics work in practice, or move into the first-run guide if you want a more practical launch-week route.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/characters"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Characters
              </Link>
              <Link
                href="/news/slay-the-spire-2-first-run-guide-act-1-priorities"
                className="px-6 py-3 bg-card border border-border hover:border-orange-400 font-semibold rounded-lg transition-colors"
              >
                Read First-Run Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
