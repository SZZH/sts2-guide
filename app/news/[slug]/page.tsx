import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { NEWS_ARTICLES } from '@/shared/gameData';
import { ArticleSchema, BreadcrumbSchema } from '@/app/schema';

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

            <div className="rounded-xl border border-border bg-background/70 p-5 mb-8">
              <p className="text-sm text-muted-foreground leading-7">
                This summary page is designed to help users discover and revisit important Slay the Spire 2 updates.
                For the full original reporting or official announcement, use the source link below.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-molten-orange hover:bg-ember-glow text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
              >
                Read Original Source
                <ExternalLink className="w-4 h-4" />
              </a>
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
