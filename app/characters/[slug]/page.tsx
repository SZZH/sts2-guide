import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CHARACTERS } from '@/shared/gameData';
import { ArrowLeft, Shield, Zap, Heart } from 'lucide-react';
import { ArticleSchema, BreadcrumbSchema } from '@/app/schema';

export async function generateStaticParams() {
  return CHARACTERS.map((character) => ({
    slug: character.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const character = CHARACTERS.find((c) => c.slug === slug);

  if (!character) {
    return {
      title: 'Character Not Found',
    };
  }

  return {
    title: `${character.name} Guide`,
    description: `Master ${character.name} in Slay the Spire 2. Learn optimal card combos, relic synergies, and winning strategies for this ${character.difficulty.toLowerCase()} difficulty character.`,
    keywords: [`${character.name} guide`, `${character.name} best build`, `${character.name} strategy`, 'Slay the Spire 2'],
    openGraph: {
      title: `${character.name} Guide - Best Builds & Strategy | StS2`,
      description: `Master ${character.name} in Slay the Spire 2. ${character.description}`,
      images: [{ url: character.image }],
    },
  };
}

export default async function CharacterDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const character = CHARACTERS.find((c) => c.slug === slug);

  if (!character) {
    notFound();
  }

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Characters', url: 'https://sts2guide.com/characters' },
          { name: character.name, url: `https://sts2guide.com/characters/${character.slug}` },
        ]}
      />
      <ArticleSchema
        title={`${character.name} Guide - Slay the Spire 2`}
        description={character.description}
        datePublished="2026-02-12"
        dateModified={new Date().toISOString()}
        url={`https://sts2guide.com/characters/${character.slug}`}
        imageUrl={character.image}
      />
      <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/characters"
          className="inline-flex items-center gap-2 text-steel-blue hover:text-molten-orange transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Characters
        </Link>

        {/* Character Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-lg overflow-hidden border border-border">
            <Image
              src={character.image}
              alt={character.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: 'center 60%' }}
            />
            <div className="absolute top-4 right-4">
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  character.difficulty === 'Intermediate'
                    ? 'bg-blue-500/80 text-white'
                    : 'bg-purple-500/80 text-white'
                }`}
              >
                {character.difficulty}
              </span>
            </div>
          </div>

          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {character.name}
            </h1>
            <p className="text-steel-blue text-xl mb-6">{character.title}</p>
            <p className="text-muted-foreground text-lg mb-8">{character.description}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-shadow-gray border border-border rounded-lg p-4 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-molten-orange">{character.hp}</div>
                <div className="text-xs text-muted-foreground">Starting HP</div>
              </div>
              <div className="bg-shadow-gray border border-border rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-molten-orange">{character.gold}</div>
                <div className="text-xs text-muted-foreground">Starting Gold</div>
              </div>
              <div className="bg-shadow-gray border border-border rounded-lg p-4 text-center">
                <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-molten-orange">{character.startingRelic}</div>
                <div className="text-xs text-muted-foreground">Relic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mechanics */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Core Mechanics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {character.mechanics.map((ability, index) => (
              <div key={index} className="bg-shadow-gray border border-border rounded-lg p-6">
                <h3 className="font-heading text-xl font-bold text-molten-orange mb-2">
                  {ability.name}
                </h3>
                <p className="text-muted-foreground">{ability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Playstyle */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Playstyle & Strategy</h2>
          <div className="bg-shadow-gray border border-border rounded-lg p-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {character.playstyle}
            </p>
          </div>
        </section>

        {/* Starting Deck */}
        <section>
          <h2 className="font-heading text-3xl font-bold mb-6">Starting Deck</h2>
          <div className="bg-shadow-gray border border-border rounded-lg p-6">
            <ul className="space-y-2">
              {character.startingDeck.map((card, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-molten-orange mt-1">▸</span>
                  <span className="text-muted-foreground">{card}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
