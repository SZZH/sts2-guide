import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { NEWS_ARTICLES } from '@/shared/gameData';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/app/schema';

const ARCHIVED_NEWS_SLUGS = new Set([
  'gamesradar-industry-impact',
  'megacrit-regent-reveal',
  'pc-gamer-complete-guide',
  'megacrit-necrobinder-reveal',
  'steam-delay-announcement',
  'ign-official-announcement',
]);

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const metadataTitle = article.category === 'Guide' ? `${article.title} (StS2 Guide)` : article.title;
  const isArchivedNews = ARCHIVED_NEWS_SLUGS.has(article.slug);

  return {
    title: metadataTitle,
    description: article.excerpt,
    keywords: [
      'Slay the Spire 2 guide',
      'StS2 guide',
      'Slay the Spire 2 news',
      article.category,
      article.source,
      article.title,
    ],
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: metadataTitle,
      description: article.excerpt,
      type: 'article',
      url: `https://sts2guide.com/news/${article.slug}`,
      images: article.image ? [{ url: article.image }] : undefined,
    },
    robots: isArchivedNews
      ? {
          index: false,
          follow: true,
        }
      : undefined,
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const isLaunchGuide = article.slug === 'slay-the-spire-2-launch-time-us-china';
  const isInternalArticle = article.sourceType === 'internal';
  const HIGH_INTENT_NEWS_SLUGS = new Set([
    'slay-the-spire-2-hotfix-patch-notes',
    'slay-the-spire-2-known-issues-and-fixes',
    'slay-the-spire-2-first-run-guide-act-1-priorities',
    'slay-the-spire-2-steamdb-patch-tracker',
  ]);
  const isHighIntentNews = HIGH_INTENT_NEWS_SLUGS.has(article.slug);
  const quickConclusion = article.intro?.[0] ?? article.excerpt;
  const evidenceLinks = [
    article.url,
    ...(article.relatedLinks?.slice(0, 2).map((link) => `https://sts2guide.com${link.href}`) ?? []),
  ];
  const actionableSteps =
    article.sections
      ?.flatMap((section) => section.bullets ?? [])
      .filter((bullet) => !bullet.startsWith('Q:'))
      .slice(0, 3) ?? [];
  const fallbackActionableSteps = [
    'Confirm the latest patch status first before changing your setup.',
    'Use one focused test case, then verify whether the issue is reproducible.',
    'Move to a specific guide page instead of broad browsing when you need the next action fast.',
  ];
  const funnelLinks = article.relatedLinks?.slice(0, 2) ?? [];
  const fallbackFunnelLinks = [
    { href: '/mechanics', label: 'Need quick definitions before deciding your next run?' },
    { href: '/guides', label: 'Need a practical build path instead of patch reading?' },
  ];
  const updatedTodayLinks = [
    {
      href: '/news/slay-the-spire-2-hotfix-patch-notes',
      label: 'Hotfix patch notes',
    },
    {
      href: '/news/slay-the-spire-2-known-issues-and-fixes',
      label: 'Known issues and fixes',
    },
    {
      href: '/news/slay-the-spire-2-first-run-guide-act-1-priorities',
      label: 'First-run priorities',
    },
    {
      href: '/cards',
      label: 'Card lookup for current builds',
    },
    {
      href: '/relics',
      label: 'Relic reference for today',
    },
    {
      href: '/guides',
      label: 'Browse builds and beginner routes',
    },
  ];
  const launchFaqItems = [
    {
      question: 'Is Slay the Spire 2 a full 1.0 release?',
      answer: 'No. Slay the Spire 2 launches as an Early Access release.',
    },
    {
      question: 'What is the practical launch-time conversion for US Pacific Time and China Standard Time?',
      answer:
        'Practical conversion used on this page: US Pacific Time is March 5, 2026 at 10:00 AM, and China Standard Time is March 6, 2026 at 2:00 AM.',
    },
    {
      question: 'Can launch-hour details change by region or platform behavior?',
      answer:
        'Yes. Use this page as a practical conversion reference, then verify your storefront and platform unlock status at launch time.',
    },
    {
      question: 'Where should beginners continue after checking launch time?',
      answer:
        'Start with the mechanics page for core systems, then review character pages for role-specific strategy planning.',
    },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'News', url: 'https://sts2guide.com/news' },
          { name: article.title, url: `https://sts2guide.com/news/${article.slug}` },
        ]}
      />
      <ArticleSchema
        title={article.title}
        description={article.excerpt}
        datePublished={article.date}
        dateModified={article.updatedAt}
        url={`https://sts2guide.com/news/${article.slug}`}
        imageUrl={article.image}
        inLanguage="en"
        about={['Slay the Spire 2', article.category, 'Early Access', 'Patch and launch updates']}
        citationUrls={evidenceLinks}
        quickConclusion={isHighIntentNews ? quickConclusion : undefined}
      />
      {isLaunchGuide && <FAQSchema questions={launchFaqItems} />}
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-steel-blue hover:text-molten-orange transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to News
          </Link>

          <article className="bg-shadow-gray/80 border border-border rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-molten-orange/20 text-molten-orange">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">{article.source}</span>
              <span className="text-sm text-muted-foreground">{article.date}</span>
              <span className="text-sm text-muted-foreground">{article.readTime}</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>

            <p className="text-lg text-muted-foreground leading-8 mb-8">
              {article.excerpt}
            </p>

            {isInternalArticle && (
              <div className="grid gap-4 mb-10 md:grid-cols-3">
                <section className="rounded-xl border border-molten-orange/30 bg-background/70 p-5">
                  <h2 className="font-heading text-lg font-bold mb-3">One-line conclusion</h2>
                  <p className="text-sm text-muted-foreground leading-6">
                    {quickConclusion}
                  </p>
                </section>
                <section className="rounded-xl border border-border bg-background/70 p-5">
                  <h2 className="font-heading text-lg font-bold mb-3">3 actions to do now</h2>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-6">
                    {(actionableSteps.length > 0 ? actionableSteps : fallbackActionableSteps).map((step) => (
                      <li key={step} className="list-disc ml-4">{step}</li>
                    ))}
                  </ul>
                </section>
                <section className="rounded-xl border border-border bg-background/70 p-5">
                  <h2 className="font-heading text-lg font-bold mb-3">Next questions to open</h2>
                  <div className="flex flex-col gap-2">
                    {(funnelLinks.length > 0 ? funnelLinks : fallbackFunnelLinks).map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm text-molten-orange hover:text-ember-glow transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                  </div>
                </section>
              </div>
            )}

            {article.intro && article.intro.length > 0 && (
              <div className="space-y-5 mb-10 text-base text-foreground/90 leading-8">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}

            {isLaunchGuide && (
              <section className="mb-10 rounded-xl border border-molten-orange/30 bg-background/70 p-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-molten-orange">
                  Updated Today
                </div>
                <h2 className="font-heading text-2xl font-bold mb-3">Launch-week pages to check first</h2>
                <p className="mb-5 text-sm text-muted-foreground leading-7">
                  Use these pages if your question is no longer about the unlock hour, but about what changed after launch, what is breaking, and what to read next before your next run.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {updatedTodayLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-lg border border-border bg-shadow-gray/50 px-4 py-3 text-molten-orange transition-colors hover:text-ember-glow"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {article.sections && article.sections.length > 0 && (
              <div className="space-y-10 mb-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                      {section.heading}
                    </h2>
                    <div className="space-y-4 text-base text-foreground/90 leading-8">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-5 space-y-3 text-base text-foreground/90 leading-8 list-disc pl-6">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            )}

            <div className="rounded-xl border border-border bg-background/70 p-5 mb-8">
              <p className="text-sm text-muted-foreground leading-7">
                {article.sourceType === 'internal'
                  ? 'This page is a quick-reference guide for players checking launch-week status, practical next steps, and the most useful follow-up links after release.'
                  : 'This summary page is designed to help users discover and revisit important Slay the Spire 2 updates. For the full original reporting or official announcement, use the source link below.'}
              </p>
            </div>

            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <div className="rounded-xl border border-border bg-background/70 p-5 mb-8">
                <h2 className="font-heading text-xl font-bold mb-4">Related pages</h2>
                <div className="flex flex-col gap-3">
                  {article.relatedLinks.map((link, index) => (
                    <Link
                      key={`${link.href}-${index}`}
                      href={link.href}
                      className="text-molten-orange hover:text-ember-glow transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {article.sourceType === 'internal' ? (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-molten-orange hover:bg-ember-glow text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  View Official Steam Page
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-molten-orange hover:bg-ember-glow text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                >
                  Read Original Source
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <Link
                href="/news"
                className="inline-flex items-center gap-2 bg-shadow-gray hover:bg-muted border border-border text-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Browse More News
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
