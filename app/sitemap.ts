import { MetadataRoute } from 'next';
import { CHARACTERS, NEWS_ARTICLES } from '@/shared/gameData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sts2guide.com';
  const toDate = (value: string) => new Date(`${value}T00:00:00.000Z`);
  const latestCharacterUpdate = CHARACTERS.reduce((latest, character) => {
    return toDate(character.updatedAt) > latest ? toDate(character.updatedAt) : latest;
  }, toDate('2026-01-01'));
  const latestNewsUpdate = NEWS_ARTICLES.reduce((latest, article) => {
    return toDate(article.updatedAt) > latest ? toDate(article.updatedAt) : latest;
  }, toDate('2026-01-01'));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: latestNewsUpdate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/characters`,
      lastModified: latestCharacterUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: latestNewsUpdate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: toDate('2026-02-13'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mechanics`,
      lastModified: toDate('2026-02-13'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/relics`,
      lastModified: toDate('2026-02-13'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic character pages
  const characterPages: MetadataRoute.Sitemap = CHARACTERS.map((character) => ({
    url: `${baseUrl}/characters/${character.slug}`,
    lastModified: toDate(character.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...characterPages];
}
