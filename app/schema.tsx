export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StS2 Guide',
    alternateName: 'Slay the Spire 2 Guide',
    url: 'https://sts2guide.com',
    description: 'Master Slay the Spire 2 with comprehensive character guides, tier lists, and expert strategies.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StS2 Guide',
    url: 'https://sts2guide.com',
    logo: 'https://sts2guide.com/logo-512.png',
    description: 'Comprehensive strategy guides and resources for Slay the Spire 2',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VideoGameSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Slay the Spire 2',
    alternateName: 'StS2',
    description: 'A roguelike deck-building game developed by Mega Crit Games',
    genre: ['Roguelike', 'Deck-building', 'Strategy'],
    gamePlatform: ['PC', 'Steam'],
    publisher: {
      '@type': 'Organization',
      name: 'Mega Crit Games',
    },
    datePublished: '2026-03-15',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  url,
  imageUrl,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  url: string;
  imageUrl?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      '@type': 'Organization',
      name: 'StS2 Guide Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'StS2 Guide',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sts2guide.com/logo-512.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(imageUrl && {
      image: {
        '@type': 'ImageObject',
        url: imageUrl,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
