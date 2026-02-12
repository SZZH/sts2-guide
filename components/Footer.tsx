/* Obsidian Forge Design: Footer with metallic borders and ember accents
 * Three-column layout with brand, quick links, and legal information
 */

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-shadow-gray/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="StS2 Guide Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-heading text-xl font-bold">StS2 Guide</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The ultimate Slay the Spire 2 strategy hub. Master every character, card, and strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  Character Guides
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Community */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://store.steampowered.com/app/2868840/Slay_the_Spire_2/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-foreground transition-colors"
                >
                  Official Steam Page
                </a>
              </li>
              <li>
                <a 
                  href="https://www.megacrit.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent-foreground transition-colors"
                >
                  Mega Crit Games
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} StS2 Guide. Fan-made resource for Slay the Spire 2.
          </p>
          <p className="mt-2">
            Slay the Spire 2 is a trademark of Mega Crit Games. All game assets and content belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
