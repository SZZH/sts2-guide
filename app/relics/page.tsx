import { Metadata } from 'next';
import Link from 'next/link';
import { RELICS } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Relics | StS2 Guide',
  description: 'Complete database of Slay the Spire 2 relics. Browse starter, common, uncommon, and rare relics with detailed descriptions and character synergies.',
  openGraph: {
    title: 'Relics | StS2 Guide',
    description: 'Complete database of Slay the Spire 2 relics with detailed descriptions and character synergies.',
  },
};

const rarityColors = {
  Starter: 'border-yellow-500/50 bg-yellow-500/5',
  Common: 'border-gray-500/50 bg-gray-500/5',
  Uncommon: 'border-blue-500/50 bg-blue-500/5',
  Rare: 'border-purple-500/50 bg-purple-500/5',
};

const rarityIcons = {
  Starter: '⭐',
  Common: '⚪',
  Uncommon: '🔵',
  Rare: '🟣',
};

export default function RelicsPage() {
  const starterRelics = RELICS.filter(r => r.rarity === 'Starter');
  const commonRelics = RELICS.filter(r => r.rarity === 'Common');
  const uncommonRelics = RELICS.filter(r => r.rarity === 'Uncommon');
  const rareRelics = RELICS.filter(r => r.rarity === 'Rare');

  const getCharacterName = (character?: string) => character ?? null;
  const getCharacterSlug = (character?: string) => character?.toLowerCase();

  const RelicCard = ({ relic }: { relic: typeof RELICS[0] }) => {
    const characterName = getCharacterName(relic.character);
    
    return (
      <div className={`group relative border rounded-lg p-5 transition-all duration-300 hover:scale-105 ${rarityColors[relic.rarity]}`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{rarityIcons[relic.rarity]}</span>
            <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">
              {relic.name}
            </h3>
          </div>
          {characterName && (
            <Link
              href={`/characters/${getCharacterSlug(relic.character)}`}
              className="text-xs px-2 py-1 bg-background border border-border rounded hover:border-orange-400 transition-colors"
            >
              {characterName}
            </Link>
          )}
        </div>
        
        <p className="text-sm font-semibold text-orange-400 mb-3">
          {relic.description}
        </p>
        
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.1),transparent_50%)]" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Relics
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Powerful artifacts that define your run. Each relic provides unique passive abilities that can dramatically alter your strategy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2">
                <span>⭐</span>
                <span className="text-muted-foreground">Starter</span>
              </div>
              <div className="flex items-center gap-2">
                <span>⚪</span>
                <span className="text-muted-foreground">Common</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔵</span>
                <span className="text-muted-foreground">Uncommon</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🟣</span>
                <span className="text-muted-foreground">Rare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Starter Relics */}
      <section className="py-12 px-4">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <span>⭐</span>
              Starter Relics
            </h2>
            <p className="text-muted-foreground">
              Each character begins with a unique starter relic that defines their early game strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {starterRelics.map((relic) => (
              <RelicCard key={`${relic.rarity}-${relic.name}`} relic={relic} />
            ))}
          </div>
        </div>
      </section>

      {/* Common Relics */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <span>⚪</span>
              Common Relics
            </h2>
            <p className="text-muted-foreground">
              Frequently found relics that provide solid, reliable benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonRelics.map((relic) => (
              <RelicCard key={`${relic.rarity}-${relic.name}`} relic={relic} />
            ))}
          </div>
        </div>
      </section>

      {/* Uncommon Relics */}
      <section className="py-12 px-4">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <span>🔵</span>
              Uncommon Relics
            </h2>
            <p className="text-muted-foreground">
              Powerful relics that can significantly boost specific strategies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uncommonRelics.map((relic) => (
              <RelicCard key={`${relic.rarity}-${relic.name}`} relic={relic} />
            ))}
          </div>
        </div>
      </section>

      {/* Rare Relics */}
      <section className="py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <span>🟣</span>
              Rare Relics
            </h2>
            <p className="text-muted-foreground">
              Game-changing relics that can enable entirely new strategies and combos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rareRelics.map((relic) => (
              <RelicCard key={`${relic.rarity}-${relic.name}`} relic={relic} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">About the Ancients System</h2>
            <p className="text-muted-foreground mb-4">
              Slay the Spire 2 introduces the <span className="text-orange-400 font-semibold">Ancients</span> system, which replaces traditional Boss Relics. After defeating a boss, you encounter an Ancient - a powerful entity that offers you a choice of boons.
            </p>
            <p className="text-muted-foreground mb-4">
              Each Ancient has a unique personality and offers different types of rewards. Some might grant powerful relics with drawbacks, others might modify your deck directly, and some might offer permanent upgrades to your character.
            </p>
            <p className="text-muted-foreground">
              The Ancient you encounter is partially random, adding variety and strategic depth to each run. Choose wisely - the Ancient&apos;s gift may define the rest of your journey up the Spire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Build Your Perfect Run</h2>
            <p className="text-muted-foreground mb-8">
              Relics synergize with character mechanics and deck strategies. Explore our guides to learn which relics work best for each playstyle.
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
