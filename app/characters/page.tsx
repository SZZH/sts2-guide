import type { Metadata } from 'next';
import Link from 'next/link';
import { CHARACTERS } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Characters',
  description: 'Explore all playable characters in Slay the Spire 2. Compare abilities, difficulty levels, and find the perfect character for your playstyle.',
  keywords: ['Slay the Spire 2 characters', 'StS2 character tier list', 'best character StS2', 'Necrobinder', 'The Regent'],
  openGraph: {
    title: 'All Slay the Spire 2 Characters - Tier List & Guides',
    description: 'Complete guide to all Slay the Spire 2 characters. Compare stats, abilities, and find the best character for your playstyle.',
  },
};

export default function CharactersPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            PLAYABLE CHARACTERS
          </h1>
          <p className="text-steel-blue text-lg max-w-2xl mx-auto">
            Master each character's unique mechanics, card synergies, and optimal strategies to conquer the Spire.
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CHARACTERS.map((character) => (
            <Link
              key={character.slug}
              href={`/characters/${character.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-molten-orange transition-all duration-300"
            >
              <div className="relative h-64">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 60%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      character.difficulty === 'Beginner'
                        ? 'bg-green-500/80 text-white'
                        : character.difficulty === 'Intermediate'
                        ? 'bg-blue-500/80 text-white'
                        : character.difficulty === 'Advanced'
                        ? 'bg-purple-500/80 text-white'
                        : 'bg-red-500/80 text-white'
                    }`}
                  >
                    {character.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-2xl font-bold mb-2 group-hover:text-molten-orange transition-colors">
                  {character.name}
                </h2>
                <p className="text-steel-blue mb-4">{character.title}</p>
                <p className="text-muted-foreground">{character.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
