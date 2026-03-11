import type { Metadata } from "next";
import Image from "next/image";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteAssetUrl } from "@/shared/siteAssets";

export const metadata: Metadata = {
  title: {
    default: "StS2 Guide — Slay the Spire 2 Strategy Hub",
    template: "%s | StS2 Guide",
  },
  description: "Master Slay the Spire 2 with comprehensive character guides, tier lists, and expert strategies. Your ultimate StS2 resource.",
  keywords: ["Slay the Spire 2", "StS2", "guide", "strategy", "character builds", "tier list", "deck building"],
  authors: [{ name: "StS2 Guide Team" }],
  metadataBase: new URL('https://sts2guide.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sts2guide.com",
    siteName: "StS2 Guide",
    title: "StS2 Guide — Slay the Spire 2 Strategy Hub",
    description: "Master Slay the Spire 2 with comprehensive character guides, tier lists, and expert strategies.",
    images: [
      {
        url: siteAssetUrl('/hero/home-hero.png'),
        width: 1200,
        height: 630,
        alt: "StS2 Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StS2 Guide — Slay the Spire 2 Strategy Hub",
    description: "Master Slay the Spire 2 with comprehensive character guides, tier lists, and expert strategies.",
    images: [siteAssetUrl('/hero/home-hero.png')],
  },
  icons: {
    icon: siteAssetUrl('/logo.png'),
    shortcut: siteAssetUrl('/logo.png'),
    apple: siteAssetUrl('/logo-192.png'),
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen overflow-x-hidden">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Image
            src={siteAssetUrl('/hero/home-hero.png')}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forge-black/60 via-forge-black/75 to-forge-black/90" />
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
