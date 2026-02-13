import { MetadataRoute } from 'next';
import { CHARACTERS } from '@/shared/gameData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sts2guide.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/characters`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/news`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mechanics`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/relics`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Dynamic character pages
  const characterPages: MetadataRoute.Sitemap = CHARACTERS.map((character) => ({
    url: `${baseUrl}/characters/${character.slug}`,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...characterPages];
}
