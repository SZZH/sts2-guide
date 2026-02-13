import { Metadata } from 'next';
import Link from 'next/link';
import { GAME_MECHANICS } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Game Mechanics | StS2 Guide',
  description: 'Complete guide to Slay the Spire 2 game mechanics including Sly, Doom, Stars, Forge, Enchantments, and more. Master the new systems and dominate the Spire.',
  openGraph: {
    title: 'Game Mechanics | StS2 Guide',
    description: 'Complete guide to Slay the Spire 2 game mechanics including Sly, Doom, Stars, Forge, Enchantments, and more.',
  },
};

export default function MechanicsPage() {
  const coreMechanics = GAME_MECHANICS.filter(m => m.category === 'Core');
  const characterMechanics = GAME_MECHANICS.filter(m => m.category === 'Character');
  const advancedMechanics = GAME_MECHANICS.filter(m => m.category === 'Advanced');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Game Mechanics
            </h1>
            <p className="text-xl text-muted-foreground">
              Master the systems that define Slay the Spire 2. From core mechanics to character-specific abilities, understanding these systems is key to conquering the Spire.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mechanics */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">Core Mechanics</h2>
            <p className="text-muted-foreground">
              Universal systems that affect all characters and define the foundation of gameplay.
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
              Explore character guides to see how these mechanics work in practice, or check out our deck building guides for advanced strategies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/characters"
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                View Characters
              </Link>
              <Link
                href="/guides"
                className="px-6 py-3 bg-card border border-border hover:border-orange-400 font-semibold rounded-lg transition-colors"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
