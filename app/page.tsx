import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CHARACTERS, NEWS_ARTICLES } from '@/shared/gameData';
import { WebsiteSchema, OrganizationSchema, VideoGameSchema } from './schema';

export const metadata: Metadata = {
  title: 'StS2 Guide - Slay the Spire 2 Strategy, Builds & Tier Lists',
  description: 'Master the ultimate roguelike deck-builder with comprehensive guides, tier lists, and expert strategies for Slay the Spire 2.',
  openGraph: {
    title: 'Slay the Spire 2 Guide - Master the Ultimate Roguelike',
    description: 'Comprehensive character guides, tier lists, and winning strategies for Slay the Spire 2.',
  },
};

export default function HomePage() {
  const featuredCharacters = CHARACTERS.slice(0, 2);
  const prioritizedLatestNewsSlugs = [
    'slay-the-spire-2-known-issues-and-fixes',
    'slay-the-spire-2-hotfix-patch-notes',
    'slay-the-spire-2-co-op-guide-how-it-works',
  ];
  const latestNews = [
    ...prioritizedLatestNewsSlugs
      .map((slug) => NEWS_ARTICLES.find((article) => article.slug === slug))
      .filter((article): article is NonNullable<typeof article> => Boolean(article)),
    ...NEWS_ARTICLES
      .filter((article) => !prioritizedLatestNewsSlugs.includes(article.slug))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  ].slice(0, 3);
  const launchWeekArticles = [
    {
      href: '/news/slay-the-spire-2-known-issues-and-fixes',
      label: 'Known Issues & Fixes',
      description: 'Crash, black screen, freeze, and text issues during launch week.',
    },
    {
      href: '/news/slay-the-spire-2-hotfix-patch-notes',
      label: 'Hotfix Patch Notes',
      description: 'What v0.98.1 fixed and what still needs troubleshooting.',
    },
    {
      href: '/news/slay-the-spire-2-co-op-guide-how-it-works',
      label: 'Co-op Guide',
      description: 'What multiplayer officially confirms at launch and how to start cleanly.',
    },
    {
      href: '/news/slay-the-spire-2-steam-deck-performance-guide',
      label: 'Steam Deck Guide',
      description: 'Current Deck performance picture and first troubleshooting steps.',
    },
  ];

  return (
    <>
      <WebsiteSchema />
      <OrganizationSchema />
      <VideoGameSchema />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero/home-hero.png"
            alt="Slay the Spire 2 gameplay"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
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
            Early Access is live. Start with the best Slay the Spire 2 guide pages for launch week, starter picks, and core mechanics.
          </p>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <Link
              href="/mechanics"
              className="rounded-xl border border-molten-orange/40 bg-forge-black/70 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Start Here
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Mechanics Guide
              </h2>
              <p className="mt-2 text-sm text-steel-blue">
                Learn Sly, Doom, Stars, Forge, and the systems that shape early winning runs.
              </p>
            </Link>
            <Link
              href="/news/slay-the-spire-2-first-run-guide-act-1-priorities"
              className="rounded-xl border border-border bg-forge-black/70 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Launch Week
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                First-Run Guide
              </h2>
              <p className="mt-2 text-sm text-steel-blue">
                Fast setup advice for Act 1 pathing, starter priorities, and launch-day decision making.
              </p>
            </Link>
            <Link
              href="/characters"
              className="rounded-xl border border-border bg-forge-black/70 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Pick Fast
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Starter Characters
              </h2>
              <p className="mt-2 text-sm text-steel-blue">
                Compare Necrobinder, Regent, Ironclad, and Silent before you lock your first serious run.
              </p>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-steel-blue">
            <span className="rounded-full border border-border bg-forge-black/60 px-4 py-2">
              Released on March 5, 2026
            </span>
            <span className="rounded-full border border-border bg-forge-black/60 px-4 py-2">
              Early Access live on Steam
            </span>
            <span className="rounded-full border border-border bg-forge-black/60 px-4 py-2">
              Updated for launch-week search trends
            </span>
          </div>

          <div className="mt-4 text-sm text-steel-blue">
            <Link
              href="/news/slay-the-spire-2-launch-time-us-china"
              className="text-molten-orange hover:text-ember-glow font-semibold transition-colors"
            >
              Launch status, release details, and first 24h checklist
            </Link>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <Link 
              href="/mechanics"
              className="bg-molten-orange hover:bg-ember-glow text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Explore Mechanics
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/characters"
              className="bg-shadow-gray hover:bg-muted border border-border text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Compare Characters
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-shadow-gray/40 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Launch Week
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Updated Today
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-steel-blue">
              Start here if you need immediate answers after launch. These pages are built for live patch notes, crash fixes, co-op questions, and Steam Deck checks.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {launchWeekArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="rounded-xl border border-border bg-forge-black/70 p-5 transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
              >
                <h3 className="font-heading text-xl font-bold text-white">{article.label}</h3>
                <p className="mt-3 text-sm leading-6 text-steel-blue">{article.description}</p>
              </Link>
            ))}
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
                  <Image 
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 60%' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forge-black via-forge-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      character.difficulty === 'Beginner'
                        ? 'bg-green-500/80 text-white'
                        : character.difficulty === 'Intermediate' 
                        ? 'bg-blue-500/80 text-white' 
                        : character.difficulty === 'Advanced'
                        ? 'bg-purple-500/80 text-white'
                        : 'bg-red-500/80 text-white'
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

      {/* Quick Links */}
      <section className="py-16 bg-gradient-to-b from-forge-black to-shadow-gray/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            EXPLORE THE SPIRE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/guides"
              className="group bg-forge-black border border-border rounded-lg p-8 hover:border-orange-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                StS2 Build Guides
              </h3>
              <p className="text-muted-foreground">
                Expert deck building strategies for every character. Learn winning combos and synergies.
              </p>
            </Link>
            <Link
              href="/mechanics"
              className="group bg-forge-black border border-border rounded-lg p-8 hover:border-purple-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                StS2 Mechanics
              </h3>
              <p className="text-muted-foreground">
                Master Sly, Doom, Stars, and other new mechanics that define StS2 gameplay.
              </p>
            </Link>
            <Link
              href="/relics"
              className="group bg-forge-black border border-border rounded-lg p-8 hover:border-yellow-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                StS2 Relics Database
              </h3>
              <p className="text-muted-foreground">
                Browse all relics with detailed descriptions and character synergies.
              </p>
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
            {latestNews.map((article) => {
              const cardContent = (
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
              );

              if (article.sourceType === 'internal') {
                return (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    className="group bg-forge-black border border-border rounded-lg overflow-hidden hover:border-molten-orange transition-all duration-300"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <a
                  key={article.slug}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-forge-black border border-border rounded-lg overflow-hidden hover:border-molten-orange transition-all duration-300"
                >
                  {cardContent}
                </a>
              );
            })}
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
    </>
  );
}
