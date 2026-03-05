import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { NEWS_ARTICLES } from '@/shared/gameData';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/app/schema';

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

  return {
    title: article.title,
    description: article.excerpt,
    keywords: ['Slay the Spire 2 news', article.category, article.source, article.title],
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://sts2guide.com/news/${article.slug}`,
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = NEWS_ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const isLaunchGuide = article.slug === 'slay-the-spire-2-launch-time-us-china';
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

            {article.intro && article.intro.length > 0 && (
              <div className="space-y-5 mb-10 text-base text-foreground/90 leading-8">
                {article.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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
                  ? 'This page is a quick-reference guide for players tracking launch timing, confirmed details, and useful follow-up links before Early Access.'
                  : 'This summary page is designed to help users discover and revisit important Slay the Spire 2 updates. For the full original reporting or official announcement, use the source link below.'}
              </p>
            </div>

            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <div className="rounded-xl border border-border bg-background/70 p-5 mb-8">
                <h2 className="font-heading text-xl font-bold mb-4">Related pages</h2>
                <div className="flex flex-col gap-3">
                  {article.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
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
