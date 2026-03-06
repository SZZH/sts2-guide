import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CHARACTERS } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Characters Guide - Classes, Difficulty & Playstyles',
  description: 'Explore all playable characters in Slay the Spire 2. Compare abilities, difficulty levels, and find the perfect character for your playstyle.',
  keywords: ['Slay the Spire 2 characters', 'StS2 character tier list', 'best character StS2', 'Necrobinder', 'The Regent'],
  alternates: {
    canonical: '/characters',
  },
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
            SLAY THE SPIRE 2 CHARACTERS
          </h1>
          <p className="text-steel-blue text-lg max-w-2xl mx-auto">
            Use this Slay the Spire 2 character guide to compare starter difficulty, mechanics, and early-run consistency before you choose your first serious run.
          </p>
        </div>

        <div className="grid gap-4 mb-12 max-w-5xl mx-auto md:grid-cols-3">
          <div className="rounded-xl border border-molten-orange/30 bg-forge-black/70 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange mb-2">
              Beginner Pick
            </div>
            <h2 className="font-heading text-2xl font-bold mb-3">Start with consistency</h2>
            <p className="text-sm text-muted-foreground leading-7">
              If you are deciding between classes for launch week, use this page to compare which character gives you the cleanest first 5 to 10 runs.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-forge-black/70 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange mb-2">
              Best Next Read
            </div>
            <Link
              href="/news/best-starter-character-slay-the-spire-2-early-access"
              className="font-heading text-2xl font-bold mb-3 block hover:text-molten-orange transition-colors"
            >
              Best Starter Character
            </Link>
            <p className="text-sm text-muted-foreground leading-7">
              Need the short answer instead of the full roster? Jump to the launch-week starter recommendation guide.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-forge-black/70 p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange mb-2">
              Mechanics First
            </div>
            <Link
              href="/mechanics"
              className="font-heading text-2xl font-bold mb-3 block hover:text-molten-orange transition-colors"
            >
              Compare Core Systems
            </Link>
            <p className="text-sm text-muted-foreground leading-7">
              Read Sly, Doom, Stars, and Forge first if you want to understand why each character feels different in Early Access.
            </p>
          </div>
        </div>

        <div className="mb-12 max-w-5xl mx-auto rounded-2xl border border-molten-orange/20 bg-shadow-gray/60 p-6">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
            Launch Week Decision Path
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
              If you are here because your first runs feel messy, do not only compare class fantasy. Use the starter-character page for the short answer, then use beginner mistakes to check whether your problem is really class choice or just early-run discipline.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/news/best-starter-character-slay-the-spire-2-early-access"
                className="rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Best Starter Character
              </Link>
              <Link
                href="/news/slay-the-spire-2-top-10-beginner-mistakes"
                className="rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Beginner Mistakes
              </Link>
            </div>
          </div>
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
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
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
                <div className="mt-4 text-xs text-steel-blue">
                  Launch-week use: compare starter comfort, mechanic complexity, and early consistency.
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
