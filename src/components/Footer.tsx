import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#1A3A4A] border-t border-white/10">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="font-[family-name:var(--font-display)] text-base font-black mb-3">
              <span className="text-white">SF </span>
              <span className="text-[#C8A84E]">SLACKLINE</span>
            </div>
            <p className="text-white/40 text-xs font-light leading-relaxed">
              San Francisco&apos;s slackline community since 2009. Built from 360 tweets, 849 photos, and real history.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold text-[#C8A84E] uppercase tracking-widest mb-3">Get Started</h3>
            <ul className="space-y-1.5">
              {[
                { href: '/learn', label: 'Learn' },
                { href: '/gear', label: 'Gear' },
                { href: '/spots', label: 'Find a Spot' },
                { href: '/safety', label: 'Safety & Legal' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-xs transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold text-[#C8A84E] uppercase tracking-widest mb-3">Community</h3>
            <ul className="space-y-1.5">
              {[
                { href: '/community', label: 'People' },
                { href: '/history', label: 'History' },
                { href: '/events', label: 'Events' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-xs transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://twitter.com/sfslackline" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs transition-colors">@sfslackline</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold text-[#C8A84E] uppercase tracking-widest mb-3">Resources</h3>
            <ul className="space-y-1.5">
              {[
                { href: 'https://balancecommunity.com', label: 'Balance Community', ext: true },
                { href: 'https://slacklineinternational.org', label: 'ISA Standards', ext: true },
                { href: 'https://sfslackline.org', label: 'Original Site', ext: true },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[10px]">
            &copy; 2009–{new Date().getFullYear()} San Francisco Slacklining Association
          </p>
          <a href="https://sfslackline.org" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-[#C8A84E] text-[10px] transition-colors">
            Visit the original sfslackline.org (2009)
          </a>
        </div>
      </div>
    </footer>
  );
}
