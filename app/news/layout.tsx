import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Updates',
  description: 'Stay updated with the latest Slay the Spire 2 news, patch notes, developer updates, and community guides from top gaming sources.',
  keywords: ['Slay the Spire 2 news', 'StS2 updates', 'patch notes', 'developer blog', 'game updates'],
  openGraph: {
    title: 'Slay the Spire 2 News & Updates - Latest Patch Notes',
    description: 'Get the latest Slay the Spire 2 news, updates, and community guides from IGN, PC Gamer, and official sources.',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
