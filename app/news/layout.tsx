import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 News, Patch Notes, and Launch Guides',
  description:
    'Track Slay the Spire 2 launch updates, SteamDB patch changes, co-op news, known issues, and practical beginner guides in one feed.',
  keywords: ['Slay the Spire 2 news', 'StS2 updates', 'StS2 patch notes', 'Slay the Spire 2 guide', 'Early Access updates'],
  alternates: {
    canonical: '/news',
  },
  openGraph: {
    title: 'Slay the Spire 2 News: Patch Notes, Co-op, and Launch Updates',
    description:
      'Daily Slay the Spire 2 update feed with patch trackers, launch troubleshooting, and high-intent guide pages.',
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
