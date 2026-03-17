import { MetadataRoute } from 'next';
import { CHARACTERS, NEWS_ARTICLES } from '@/shared/gameData';
import { CARDS, CARD_CHARACTERS } from '@/shared/cardsData';
import { GUIDE_ARTICLES } from '@/shared/guidesData';
import { RELICS_GENERATED } from '@/shared/relicPotionData.generated';

export default function sitemap(): MetadataRoute.Sitemap {
  const archivedNewsSlugs = new Set([
    'gamesradar-industry-impact',
    'megacrit-regent-reveal',
    'pc-gamer-complete-guide',
    'megacrit-necrobinder-reveal',
    'steam-delay-announcement',
    'ign-official-announcement',
  ]);
  const baseUrl = 'https://sts2guide.com';
  const toDate = (value: string) => new Date(`${value}T00:00:00.000Z`);
  const latestCardUpdate = CARDS.reduce((latest, card) => {
    return toDate(card.updatedAt) > latest ? toDate(card.updatedAt) : latest;
  }, toDate('2026-01-01'));
  const latestDatabaseModuleUpdate = toDate('2026-03-10');
  const latestGuideUpdate = GUIDE_ARTICLES.reduce((latest, guide) => {
    return toDate(guide.updatedAt) > latest ? toDate(guide.updatedAt) : latest;
  }, toDate('2026-01-01'));
  const latestCharacterUpdate = CHARACTERS.reduce((latest, character) => {
    return toDate(character.updatedAt) > latest ? toDate(character.updatedAt) : latest;
  }, toDate('2026-01-01'));
  const latestNewsUpdate = NEWS_ARTICLES.reduce((latest, article) => {
    return toDate(article.updatedAt) > latest ? toDate(article.updatedAt) : latest;
  }, toDate('2026-01-01'));
  const latestSeoPushUpdate = toDate('2026-03-11');

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
      lastModified: latestGuideUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cards`,
      lastModified: latestCardUpdate,
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/mechanics`,
      lastModified: toDate('2026-02-13'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/relics`,
      lastModified: latestDatabaseModuleUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/potions`,
      lastModified: latestDatabaseModuleUpdate,
      changeFrequency: 'weekly',
      priority: 0.78,
    },
  ];

  // Dynamic character pages
  const characterPages: MetadataRoute.Sitemap = CHARACTERS.map((character) => ({
    url: `${baseUrl}/characters/${character.slug}`,
    lastModified: character.slug === 'necrobinder' ? latestSeoPushUpdate : toDate(character.updatedAt),
    changeFrequency: character.slug === 'necrobinder' ? ('daily' as const) : ('weekly' as const),
    priority: character.slug === 'necrobinder' ? 0.95 : 0.9,
  }));

  const newsPages: MetadataRoute.Sitemap = NEWS_ARTICLES.filter(
    (article) => !archivedNewsSlugs.has(article.slug)
  ).map((article) => {
    const isPriorityHotfix =
      article.slug === 'slay-the-spire-2-hotfix-patch-notes' ||
      article.slug === 'slay-the-spire-2-known-issues-and-fixes';

    return {
      url: `${baseUrl}/news/${article.slug}`,
      lastModified: isPriorityHotfix ? latestSeoPushUpdate : toDate(article.updatedAt),
      changeFrequency: isPriorityHotfix ? ('daily' as const) : ('monthly' as const),
      priority: isPriorityHotfix ? 0.82 : 0.7,
    };
  });

  const cardPages: MetadataRoute.Sitemap = CARDS.map((card) => ({
    url: `${baseUrl}/cards/${card.slug}`,
    lastModified: toDate(card.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.75,
  }));

  const characterCardPages: MetadataRoute.Sitemap = CARD_CHARACTERS.map((character) => ({
    url: `${baseUrl}/cards/character/${character.value}`,
    lastModified: character.value === 'necrobinder' ? latestSeoPushUpdate : toDate('2026-03-09'),
    changeFrequency: character.value === 'necrobinder' ? ('daily' as const) : ('weekly' as const),
    priority: character.value === 'necrobinder' ? 0.85 : 0.78,
  }));

  const relicPages: MetadataRoute.Sitemap = RELICS_GENERATED.map((relic) => ({
    url: `${baseUrl}/relics/${relic.slug}`,
    lastModified: latestDatabaseModuleUpdate,
    changeFrequency: 'weekly' as const,
    priority: 0.72,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDE_ARTICLES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: toDate(guide.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.86,
  }));

  return [...staticPages, ...characterPages, ...newsPages, ...cardPages, ...characterCardPages, ...relicPages, ...guidePages];
}
