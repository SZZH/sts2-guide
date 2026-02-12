import type { Metadata } from 'next';
import Link from 'next/link';
import { CHARACTERS, NEWS_ARTICLES } from '@/shared/gameData';
import CountdownTimer from '@/components/CountdownTimer';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Master the ultimate roguelike deck-builder with comprehensive guides, tier lists, and expert strategies for Slay the Spire 2.',
  openGraph: {
    title: 'Slay the Spire 2 Guide - Master the Ultimate Roguelike',
    description: 'Comprehensive character guides, tier lists, and winning strategies for Slay the Spire 2.',
  },
};

export default function HomePage() {
  const featuredCharacters = CHARACTERS.slice(0, 2);
  const latestNews = NEWS_ARTICLES.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/gFbKHMXVTdkNWJHQ.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-forge-black/50 to-forge-black" />
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forge-black to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 text-gradient glow-orange">
            SLAY THE SPIRE 2
          </h1>
          <p className="text-xl md:text-2xl text-steel-blue mb-8 max-w-3xl mx-auto">
            Master the ultimate roguelike deck-builder with comprehensive guides, tier lists, and expert strategies.
          </p>
          
          {/* Countdown Timer */}
          <CountdownTimer />

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Link 
              href="/characters"
              className="bg-molten-orange hover:bg-ember-glow text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              View Characters
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/news"
              className="bg-shadow-gray hover:bg-muted border border-border text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Latest News
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Characters */}
      <section className="py-16 bg-forge-black">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            PLAYABLE CHARACTERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredCharacters.map((character) => (
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
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      character.difficulty === 'Intermediate' 
                        ? 'bg-blue-500/80 text-white' 
                        : 'bg-purple-500/80 text-white'
                    }`}>
                      {character.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold mb-2">{character.name}</h3>
                  <p className="text-steel-blue mb-4">{character.title}</p>
                  <p className="text-muted-foreground">{character.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/characters"
              className="inline-block bg-shadow-gray hover:bg-muted border border-border text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              View All Characters
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-shadow-gray/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            LATEST NEWS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((article) => (
              <a
                key={article.slug}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-forge-black border border-border rounded-lg overflow-hidden hover:border-molten-orange transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-molten-orange/20 text-molten-orange rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{article.source}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-molten-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-steel-blue">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/news"
              className="inline-block bg-shadow-gray hover:bg-muted border border-border text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
