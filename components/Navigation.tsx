/* Obsidian Forge Design: Sticky navigation with backdrop blur, metallic borders
 * Orange glow on hover, weighted interactions, mobile hamburger menu
 */

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', href: '/', label: 'Home', placeholder: false },
    { id: 'launch', href: '/news/slay-the-spire-2-launch-time-us-china', label: 'Launch', placeholder: false },
    { id: 'news', href: '/news', label: 'News', placeholder: false },
    { id: 'cards', href: '/cards', label: 'Cards', placeholder: false },
    { id: 'characters', href: '/characters', label: 'Characters', placeholder: false },
    { id: 'guides', href: '/guides', label: 'Guides', placeholder: false },
    { id: 'mechanics', href: '/mechanics', label: 'Mechanics', placeholder: false },
    { id: 'relics', href: '/relics', label: 'Relics', placeholder: false },
    { id: 'potions', href: '/potions', label: 'Potions', placeholder: false },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo-192.png"
              alt="StS2 Guide Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-heading text-xl font-bold">StS2 Guide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.id}
                  href={link.href}
                  label={link.label}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="text-foreground hover:text-accent-foreground hover:bg-accent/10 px-3 py-2 rounded-md transition-all font-medium"
    >
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-foreground hover:text-accent-foreground hover:bg-accent/10 px-4 py-3 rounded-md transition-all block"
    >
      {label}
    </Link>
  );
}
