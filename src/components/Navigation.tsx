'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/learn', label: 'Learn' },
  { href: '/spots', label: 'Spots & Map' },
  { href: '/community', label: 'Community' },
  { href: '/events', label: 'Events' },
  { href: '/highline', label: 'Highline' },
  { href: '/gear', label: 'Gear' },
  { href: '/history', label: 'History' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-950/80 backdrop-blur-md border-b border-neon-lime/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-8 h-8 border-2 border-neon-lime rounded-full flex items-center justify-center group-hover:bg-neon-lime/10 transition-colors">
                <div className="w-1.5 h-1.5 bg-neon-lime rounded-full" />
              </div>
              {/* Balance line through the circle */}
              <div className="absolute top-1/2 -left-1 -right-1 h-[2px] bg-neon-lime/60 -translate-y-1/2" />
            </div>
            <span className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight">
              <span className="text-neon-lime">SF</span>
              <span className="text-fog-100"> SLACKLINE</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-fog-300 hover:text-neon-lime transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/spots" className="btn-primary text-sm">
              Find a Line
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-fog-300 hover:text-neon-lime"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-md border-t border-neon-lime/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-fog-200 hover:text-neon-lime hover:bg-neon-lime/5 transition-colors uppercase tracking-wider border-b border-dark-700/50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="/spots" className="btn-primary text-sm block text-center" onClick={() => setMobileOpen(false)}>
                Find a Line
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
