import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about StS2 Guide - the ultimate fan-made strategy resource for Slay the Spire 2. Our mission, roadmap, and community commitment.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">ABOUT StS2 GUIDE</h1>
          <p className="text-steel-blue text-lg">
            Your ultimate fan-made strategy resource for Slay the Spire 2
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Our Mission</h2>
          <div className="bg-shadow-gray border border-border rounded-lg p-8">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              StS2 Guide is a community-driven platform dedicated to helping players master Slay the
              Spire 2. We provide comprehensive character guides, tier lists, card databases, and
              expert strategies to help you conquer every run.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're a newcomer learning the basics or a veteran pushing for Ascension 20
              wins, we're here to forge your path to victory.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Content Roadmap</h2>
          <div className="space-y-6">
            {[
              {
                phase: 'Phase 1: Pre-Launch',
                status: 'Current',
                items: [
                  'Character overview guides',
                  'Official news aggregation',
                  'Community hub setup',
                ],
              },
              {
                phase: 'Phase 2: Early Access',
                status: 'Upcoming',
                items: [
                  'Complete card database with ratings',
                  'Relic tier lists and synergies',
                  'Boss strategy guides',
                ],
              },
              {
                phase: 'Phase 3: Full Release',
                status: 'Planned',
                items: [
                  'Interactive deck builder tool',
                  'Run analyzer and statistics',
                  'Community deck sharing',
                ],
              },
            ].map((phase) => (
              <div
                key={phase.phase}
                className="bg-shadow-gray border border-border rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-xl font-bold">{phase.phase}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      phase.status === 'Current'
                        ? 'bg-molten-orange/20 text-molten-orange'
                        : phase.status === 'Upcoming'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-steel-blue/20 text-steel-blue'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {phase.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-molten-orange mt-1">▸</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Legal */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold mb-6">Legal & Disclaimer</h2>
          <div className="bg-shadow-gray border border-border rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              StS2 Guide is a fan-made, non-commercial resource created by the community for the
              community. We are not affiliated with, endorsed by, or sponsored by Mega Crit Games.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Slay the Spire 2, all game assets, characters, and content are trademarks and
              copyrights of Mega Crit Games. All rights belong to their respective owners.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided for informational and educational purposes only. We respect
              intellectual property rights and will promptly remove any content upon request from
              the rightful owner.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/characters"
            className="inline-block bg-molten-orange hover:bg-ember-glow text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            Start Learning
          </Link>
        </div>
      </div>
    </div>
  );
}
