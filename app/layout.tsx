import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

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
        url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/PBsDTIjrsKhkQaMa.png",
        width: 1200,
        height: 630,
        alt: "StS2 Guide Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StS2 Guide — Slay the Spire 2 Strategy Hub",
    description: "Master Slay the Spire 2 with comprehensive character guides, tier lists, and expert strategies.",
    images: ["https://files.manuscdn.com/user_upload_by_module/session_file/310419663030533337/PBsDTIjrsKhkQaMa.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo-192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
