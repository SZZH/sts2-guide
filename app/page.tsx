import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CHARACTERS, NEWS_ARTICLES } from '@/shared/gameData';
import { WebsiteSchema, OrganizationSchema, VideoGameSchema } from './schema';
import { siteAssetUrl } from '@/shared/siteAssets';

export const metadata: Metadata = {
  title: 'StS2 Guide: Slay the Spire 2 Builds, Tips, Cards, and Relics Database',
  description:
    'StS2 guide hub for Slay the Spire 2 builds, starter tips, mechanics, and searchable cards/relics/potions, including confirmed v0.101.0 card and relic updates.',
  openGraph: {
    title: 'StS2 Guide Hub: Slay the Spire 2 Builds, Tips, Cards, Relics',
    description:
      'Find beginner routes, mechanics explanations, patch analysis, and confirmed v0.101.0 card and relic lookup pages in one place.',
  },
};

export default function HomePage() {
  const featuredCharacters = CHARACTERS.slice(0, 2);
  const prioritizedLatestNewsSlugs = [
    'slay-the-spire-2-steam-charts-player-count',
    'slay-the-spire-2-steamdb-patch-tracker',
    'slay-the-spire-2-multiplayer-coop-guide',
  ];
  const latestNews = [
    ...prioritizedLatestNewsSlugs
      .map((slug) => NEWS_ARTICLES.find((article) => article.slug === slug))
      .filter((article): article is NonNullable<typeof article> => Boolean(article)),
    ...NEWS_ARTICLES
      .filter((article) => !prioritizedLatestNewsSlugs.includes(article.slug))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  ].slice(0, 3);
  const intentShortcuts = [
    {
      href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
      query: 'sts2 tips',
      label: 'First Run Act 1 Guide',
    },
    {
      href: '/news/best-starter-character-slay-the-spire-2-early-access',
      query: 'best starter character slay the spire 2',
      label: 'Best Starter Character',
    },
    {
      href: '/guides/celestial-might-regent-guide',
      query: 'celestial might sts2',
      label: 'Celestial Might Guide',
    },
    {
      href: '/cards',
      query: 'sts2 cards',
      label: 'All Cards Database',
    },
    {
      href: '/characters',
      query: 'sts2 guide',
      label: 'Character Roster',
    },
    {
      href: '/news/slay-the-spire-2-steamdb-patch-tracker',
      query: 'sts2 patch',
      label: 'SteamDB Patch Tracker',
    },
    {
      href: '/cards/danse_macabre',
      query: 'danse macabre sts2',
      label: 'Danse Macabre Card',
    },
    {
      href: '/cards/eradicate',
      query: 'sts2 eradicate',
      label: 'Eradicate Card',
    },
    {
      href: '/relics/book_of_five_rings',
      query: 'book of five rings slay the spire',
      label: 'Book of Five Rings Relic',
    },
    {
      href: '/guides/exhaust-mechanic-explained',
      query: 'slay the spire 2 exhaust mechanic',
      label: 'Exhaust Mechanic Guide',
    },
  ];

  const decisionModules = [
    {
      href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
      label: 'Beginner Path',
      description: 'Fast entry advice for first runs, starter priorities, and immediate guardrails.',
      badge: 'Beginner',
    },
    {
      href: '/guides',
      label: 'Build Guides',
      description: 'Character archetypes and deck blueprints ready for patch 0.103.0.',
      badge: 'Builds',
    },
    {
      href: '/news/slay-the-spire-2-steamdb-patch-tracker',
      label: 'Patch Impact',
      description: 'Track what changed and which decisions shift after each fix.',
      badge: 'Patch',
    },
    {
      href: '/characters',
      label: 'Character Choice',
      description: 'Compare availability, difficulty, and card pools before locking your next hero.',
      badge: 'Characters',
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
            src={siteAssetUrl('/hero/home-hero.png')}
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
            STS2 GUIDE HUB
          </h1>
          <p className="text-xl md:text-2xl text-steel-blue mb-8 max-w-3xl mx-auto">
            Early Access is live. Open the exact Slay the Spire 2 page you need for builds, starter picks, mechanics, and card or relic lookup.
          </p>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <Link
              href="/news/slay-the-spire-2-first-run-guide-act-1-priorities"
              className="rounded-xl border border-border bg-forge-black/70 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Beginner Path
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                First Run Guide
              </h2>
              <p className="mt-2 text-sm text-steel-blue">
                Immediate starter priorities, Act 1 pathing, and what to focus on before your first serious run.
              </p>
            </Link>
            <Link
              href="/guides"
              className="rounded-xl border border-border bg-forge-black/70 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Builds Hub
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Current Builds
              </h2>
              <p className="mt-2 text-sm text-steel-blue">
                Character-by-character archetypes, decision points, and quick links into archetype cards.
              </p>
            </Link>
            <Link
              href="/characters"
              className="rounded-xl border border-border bg-forge-black/70 p-5 text-left backdrop-blur-sm transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Character Choice
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">
                Starter Roster
              </h2>
              <p className="mt-2 text-sm text-steel-blue">
                Compare difficulty, availability, and card pools before locking your next hero.
              </p>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-steel-blue">
            <span className="rounded-full border border-border bg-forge-black/60 px-4 py-2">
              Patch 0.103.0 context
            </span>
            <span className="rounded-full border border-border bg-forge-black/60 px-4 py-2">
              Updated daily for decision flows
            </span>
            <span className="rounded-full border border-border bg-forge-black/60 px-4 py-2">
              Data backed by patch tracker + community testing
            </span>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              href="/news/slay-the-spire-2-steamdb-patch-tracker"
              className="bg-molten-orange hover:bg-ember-glow text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 flex items-center gap-2"
            >
              Latest Patch Tracker
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/guides"
              className="bg-shadow-gray hover:bg-muted border border-border text-foreground font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Explore Builds
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-forge-black/70 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Most Searched
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold">
                Open the exact page for each query
              </h2>
            </div>
            <p className="max-w-2xl text-sm text-steel-blue">
              These shortcuts map directly to recurring search intent and reduce first-click mismatch.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {intentShortcuts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-border bg-background/55 p-4 transition-all duration-300 hover:border-molten-orange"
              >
                <div className="text-xs uppercase tracking-[0.16em] text-steel-blue">
                  Query: {item.query}
                </div>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">{item.label}</h3>
              </Link>
            ))}
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
              Start here when you just need to know which build, beginner path, patch insight, or character choice to follow next.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {decisionModules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="rounded-xl border border-border bg-forge-black/70 p-5 transition-all duration-300 hover:border-molten-orange hover:bg-forge-black/85"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-steel-blue mb-2">
                  {module.badge}
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{module.label}</h3>
                <p className="mt-3 text-sm leading-6 text-steel-blue">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-forge-black to-shadow-gray/30">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border bg-background/50 p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                  Database
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold">
                  Browse The Cards Database
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-steel-blue">
                  Use the new cards index when you need a fast lookup by character, rarity, type, or cost. This first version is text-first, paginated, and built to support image slots once local licensed assets are imported.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-forge-black/70 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-molten-orange">Why it exists</div>
                  <p className="mt-2 text-sm text-steel-blue">
                    Faster card lookup during Early Access without waiting for the art pipeline.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-forge-black/70 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-molten-orange">What it does</div>
                  <p className="mt-2 text-sm text-steel-blue">
                    Search, filter, paginate, and jump into detail pages with source tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/cards"
                className="inline-flex items-center rounded-lg bg-molten-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-glow"
              >
                Which cards should I look up first?
              </Link>
              <Link
                href="/potions"
                className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Which potions are strongest right now?
              </Link>
              <Link
                href="/characters"
                className="inline-flex items-center rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-molten-orange hover:text-molten-orange"
              >
                Which character should I start with?
              </Link>
            </div>
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
                <div className="relative aspect-[825/464]">
                  <Image 
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-contain bg-forge-black/40 p-2"
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
            <Link
              href="/potions"
              className="group bg-forge-black border border-border rounded-lg p-8 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                StS2 Potions Database
              </h3>
              <p className="text-muted-foreground">
                Query potion effects by rarity and character context for faster in-run decisions.
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
