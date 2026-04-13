import type { Metadata } from 'next';
import Link from 'next/link';
import { NEWS_ARTICLES } from '@/shared/gameData';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Patch Hub: Latest Patch Impact, Hotfixes, and Meta Shifts',
  description:
    'Track Slay the Spire 2 patch notes, hotfixes, and balance impact in one place. Use this hub to see what changed, what advice is outdated, and which builds or guides to review next.',
  alternates: {
    canonical: '/patches',
  },
  openGraph: {
    title: 'Slay the Spire 2 Patch Hub',
    description:
      'Patch-first decision hub for Slay the Spire 2 hotfixes, balance notes, known issues, and build-impact updates.',
  },
};

const patchArticles = NEWS_ARTICLES.filter(
  (article) =>
    article.slug === 'slay-the-spire-2-steamdb-patch-tracker' ||
    article.slug === 'slay-the-spire-2-hotfix-patch-notes' ||
    article.slug === 'slay-the-spire-2-known-issues-and-fixes' ||
    article.slug === 'slay-the-spire-2-beta-patch-v0-101-0-analysis' ||
    article.slug === 'slay-the-spire-2-beta-patch-v0-100-0-highlights' ||
    article.slug === 'slay-the-spire-2-patch-v0-99-1-main-branch'
).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const impactCards = [
  {
    href: '/news/slay-the-spire-2-beta-patch-v0-101-0-analysis',
    title: 'Current Balance Direction',
    description: 'Review the last major balance read before changing your current build assumptions.',
  },
  {
    href: '/news/slay-the-spire-2-steamdb-patch-tracker',
    title: 'Patch Timeline',
    description: 'Track when patches landed, then map them to official notes and practical impact.',
  },
  {
    href: '/news/slay-the-spire-2-hotfix-patch-notes',
    title: 'Hotfixes & Stability',
    description: 'Separate crash and lockout fixes from actual balance changes before you rewrite build advice.',
  },
  {
    href: '/news/slay-the-spire-2-known-issues-and-fixes',
    title: 'Known Issues',
    description: 'See which problems are still active so you do not mistake bugs for design changes.',
  },
];

const followUpRoutes = [
  {
    href: '/builds',
    label: 'Re-check current builds after a patch',
  },
  {
    href: '/guides',
    label: 'Open the updated guide hub',
  },
  {
    href: '/characters',
    label: 'Compare which characters benefit most',
  },
  {
    href: '/cards',
    label: 'Look up cards that changed your line',
  },
];

export default function PatchesPage() {
  const latestArticle = patchArticles[0];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <section className="rounded-2xl border border-border bg-forge-black/70 p-8">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
            Patch & Meta
          </div>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">Slay the Spire 2 Patch Hub</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-steel-blue">
            Start here whenever the current question is not “what exists” but “what changed, what broke, and which
            build or guide should I trust now.”
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-steel-blue">
            <span className="rounded-full border border-border bg-background/50 px-4 py-2">Hotfixes + balance notes</span>
            <span className="rounded-full border border-border bg-background/50 px-4 py-2">Current patch decision support</span>
            <span className="rounded-full border border-border bg-background/50 px-4 py-2">Outdated advice detection</span>
          </div>

          {latestArticle ? (
            <div className="mt-8 rounded-xl border border-molten-orange/30 bg-background/40 p-5">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-molten-orange">
                Latest Priority Read
              </div>
              <h2 className="font-heading text-2xl font-bold">{latestArticle.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{latestArticle.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-steel-blue">
                <span>{latestArticle.date}</span>
                <span>{latestArticle.readTime}</span>
                <span>{latestArticle.source}</span>
              </div>
              <div className="mt-5">
                <Link
                  href={`/news/${latestArticle.slug}`}
                  className="inline-flex items-center rounded-lg bg-molten-orange px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-ember-glow"
                >
                  Read latest patch impact
                </Link>
              </div>
            </div>
          ) : null}
        </section>

        <section className="mt-10">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                What To Check
              </div>
              <h2 className="font-heading text-3xl font-bold">Decision Routes After Every Patch</h2>
            </div>
            <p className="max-w-2xl text-sm text-steel-blue">
              These are the pages to open before you rewrite your tier list, abandon a build, or blame a failed run on
              balance alone.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {impactCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="rounded-xl border border-border bg-background/55 p-5 transition-all duration-300 hover:border-molten-orange"
              >
                <h3 className="font-heading text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-border bg-background/40 p-6">
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
              Timeline
            </div>
            <h2 className="font-heading text-3xl font-bold">Recent Patch Sequence</h2>
            <div className="mt-6 space-y-4">
              {patchArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/news/${article.slug}`}
                  className="block rounded-xl border border-border bg-forge-black/60 p-4 transition-colors hover:border-molten-orange"
                >
                  <div className="flex flex-wrap items-center gap-3 text-xs text-steel-blue">
                    <span className="rounded-full border border-border px-3 py-1">{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.source}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white">{article.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-background/40 p-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Updated Advice
              </div>
              <h2 className="font-heading text-2xl font-bold">What To Re-check Immediately</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Do not treat a hotfix as a full meta reset unless cards, relics, or encounter pacing actually changed.</li>
                <li>Re-check build advice after balance notes, not just after bug-fix changelogs.</li>
                <li>Use known-issues context to separate design problems from current bugs.</li>
                <li>Route changes belong in guides and build pages, not only in patch-note summaries.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background/40 p-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                Next Routes
              </div>
              <h2 className="font-heading text-2xl font-bold">Where To Go After Reading Patch Notes</h2>
              <div className="mt-4 flex flex-col gap-3 text-sm">
                {followUpRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="rounded-lg border border-border px-4 py-3 text-molten-orange transition-colors hover:border-molten-orange hover:text-ember-glow"
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
