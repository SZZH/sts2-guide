import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from '@/app/schema';
import { GUIDE_ARTICLES, getGuideBySlug } from '@/shared/guidesData';

export async function generateStaticParams() {
  return GUIDE_ARTICLES.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${guide.title} | StS2 Guide`,
    description: guide.description,
    keywords: [
      guide.primaryKeyword,
      'Slay the Spire 2 guide',
      'StS2 guide',
      'Slay the Spire 2 strategy',
    ],
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      url: `https://sts2guide.com/guides/${guide.slug}`,
    },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const quickConclusion = guide.sections[0]?.points[0] ?? guide.description;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://sts2guide.com' },
          { name: 'Guides', url: 'https://sts2guide.com/guides' },
          { name: guide.title, url: `https://sts2guide.com/guides/${guide.slug}` },
        ]}
      />
      <ArticleSchema
        title={guide.title}
        description={guide.description}
        datePublished={guide.updatedAt}
        dateModified={guide.updatedAt}
        url={`https://sts2guide.com/guides/${guide.slug}`}
        inLanguage="en"
        about={['Slay the Spire 2', 'Guide', guide.primaryKeyword]}
        citationUrls={guide.relatedLinks.map((link) => `https://sts2guide.com${link.href}`)}
        quickConclusion={quickConclusion}
      />
      {guide.faqs.length > 0 && <FAQSchema questions={guide.faqs} />}

      <div className="min-h-screen py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <Link
            href="/guides"
            className="mb-8 inline-flex items-center gap-2 text-steel-blue transition-colors hover:text-molten-orange"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Guides
          </Link>

          <article className="rounded-2xl border border-border bg-shadow-gray/80 p-8 md:p-10">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{guide.readTime}</span>
              <span>Updated {guide.updatedAt}</span>
              <span className="rounded-full border border-molten-orange/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-molten-orange">
                {guide.primaryKeyword}
              </span>
            </div>

            <h1 className="mb-5 font-heading text-4xl font-bold md:text-5xl">{guide.title}</h1>
            <p className="mb-10 text-lg leading-8 text-muted-foreground">{guide.description}</p>

            <div className="space-y-10">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-4 font-heading text-2xl font-bold md:text-3xl">{section.heading}</h2>
                  <ul className="space-y-3 text-base leading-8 text-foreground/90">
                    {section.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            {guide.faqs.length > 0 && (
              <section className="mt-10 rounded-xl border border-border bg-background/60 p-5">
                <h2 className="mb-4 font-heading text-2xl font-bold">FAQ</h2>
                <div className="space-y-5">
                  {guide.faqs.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="mt-10 rounded-xl border border-border bg-background/60 p-5">
              <h2 className="mb-3 font-heading text-2xl font-bold">Best Next Read</h2>
              <div className="flex flex-col gap-2 text-sm">
                {guide.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-molten-orange transition-colors hover:text-ember-glow"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
