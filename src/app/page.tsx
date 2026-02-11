import Link from 'next/link';

// Bay Area slackline spots data
const featuredSpots = [
  { name: 'Dolores Park', area: 'Mission', vibe: 'Community hub', difficulty: 'All Levels' },
  { name: 'Crissy Field', area: 'Presidio', vibe: 'Golden Gate views', difficulty: 'Beginner' },
  { name: 'Golden Gate Park', area: 'Richmond', vibe: 'Tree lines galore', difficulty: 'All Levels' },
  { name: 'Lands End', area: 'Outer Richmond', vibe: 'Coastal highline', difficulty: 'Advanced' },
];

const stats = [
  { value: '16+', label: 'Years of Community' },
  { value: '50+', label: 'Bay Area Spots' },
  { value: '2009', label: 'Founded' },
  { value: '∞', label: 'Steps Taken' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* ============== HERO ============== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-dark-950" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-lime/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* The Line — horizontal accent */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-lime/30 to-transparent" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(204,255,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pre-header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neon-lime/10 border border-neon-lime/20 mb-8">
            <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
            <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">
              San Francisco • Est. 2009
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-6">
            <span className="text-fog-100">WALK</span>
            <br />
            <span className="text-glow text-neon-lime">THE LINE</span>
          </h1>

          {/* Subline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-fog-300 leading-relaxed mb-10">
            The Bay Area&apos;s definitive slackline community. 
            From your first wobbly step to sending highlines above the Pacific — 
            <span className="text-fog-100 font-medium"> we&apos;ll get you there.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn" className="btn-primary text-lg px-8 py-4">
              Start Learning
            </Link>
            <Link href="/spots" className="btn-outline text-lg px-8 py-4">
              Find a Spot
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-fog-300 text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-neon-lime/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS BAR ============== */}
      <section className="relative py-6 border-y border-neon-lime/10 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-neon-lime">
                  {stat.value}
                </div>
                <div className="text-fog-300 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHAT IS SLACKLINING ============== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">The Sport</span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight">
                Balance Is <br />
                <span className="text-neon-lime">Everything</span>
              </h2>
              <p className="text-fog-300 text-lg leading-relaxed mb-6">
                Slacklining is the art of walking and balancing on a length of flat webbing 
                tensioned between two anchor points. Born in Yosemite Valley in the 1980s by 
                climbers looking for something to do on rest days, it&apos;s evolved into a global 
                sport with disciplines ranging from chill park sessions to heart-stopping highlines 
                over thousand-foot chasms.
              </p>
              <p className="text-fog-300 text-lg leading-relaxed mb-8">
                San Francisco has been at the center of the West Coast slackline scene since the 
                early days. Our parks, our views, our community — there&apos;s nowhere better to learn.
              </p>
              <Link href="/learn" className="btn-outline">
                Start Your Journey →
              </Link>
            </div>

            {/* Discipline cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: 'Slackline', desc: 'The foundation. Low, chill, and meditative.', icon: '🌿' },
                { name: 'Trickline', desc: 'Bouncing, flipping, sending it.', icon: '⚡' },
                { name: 'Longline', desc: '100m+ of pure focus and endurance.', icon: '🏔️' },
                { name: 'Highline', desc: 'Hundreds of feet up. The ultimate.', icon: '🦅' },
              ].map((d) => (
                <div key={d.name} className="glass p-6 transition-all duration-300 hover:scale-[1.02]">
                  <div className="text-3xl mb-3">{d.icon}</div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-fog-100 mb-2">{d.name}</h3>
                  <p className="text-fog-300 text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== FEATURED SPOTS ============== */}
      <section className="py-24 md:py-32 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Bay Area</span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Find Your <span className="text-neon-lime">Line</span>
              </h2>
            </div>
            <Link href="/spots" className="hidden md:inline-block btn-outline text-sm">
              View All Spots →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSpots.map((spot) => (
              <Link key={spot.name} href="/spots" className="glass p-6 group transition-all duration-300 hover:scale-[1.02] block">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                      {spot.name}
                    </h3>
                    <p className="text-fog-300 text-sm">{spot.area}</p>
                  </div>
                  <span className="text-xs px-2 py-1 bg-neon-lime/10 text-neon-lime border border-neon-lime/20">
                    {spot.difficulty}
                  </span>
                </div>
                <p className="text-fog-300 text-sm">{spot.vibe}</p>
                <div className="mt-4 pt-4 border-t border-dark-600/50 flex items-center justify-between">
                  <span className="text-xs text-fog-300 uppercase tracking-wider">View on map</span>
                  <svg className="w-4 h-4 text-neon-lime/50 group-hover:text-neon-lime transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== LEARN PATHWAY ============== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Progression</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3">
              Your Path on <span className="text-neon-lime">The Line</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-neon-lime/20 via-neon-cyan/20 to-neon-pink/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'First Steps', desc: 'Mount the line, find your balance point, take that first step. Everyone wobbles — that\'s the point.', color: 'neon-lime' },
                { step: '02', title: 'Walk It', desc: 'String together steps, turn around, sit down. Build confidence on 50-foot park lines.', color: 'neon-cyan' },
                { step: '03', title: 'Push It', desc: 'Tricks, longer lines, higher tension. Start joining jams and finding your style.', color: 'neon-orange' },
                { step: '04', title: 'Send It', desc: 'Longlines, highlines, competitions. The sky isn\'t the limit — it\'s where you walk.', color: 'neon-pink' },
              ].map((phase) => (
                <div key={phase.step} className="relative glass p-8 text-center group">
                  <div className={`font-[family-name:var(--font-mono)] text-5xl font-bold text-${phase.color}/20 group-hover:text-${phase.color}/40 transition-colors mb-4`}>
                    {phase.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100 mb-3">{phase.title}</h3>
                  <p className="text-fog-300 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/learn" className="btn-primary">
              Start Learning Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ============== COMMUNITY CTA ============== */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-lime/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold leading-tight mb-6">
            The line is set.<br />
            <span className="text-neon-lime">Are you walking?</span>
          </h2>
          <p className="text-fog-300 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of Bay Area slackliners. Find mentors, discover new spots, 
            come to jams, and be part of a community that&apos;s been keeping San Francisco balanced since 2009.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community" className="btn-primary text-lg px-8 py-4">
              Join the Community
            </Link>
            <Link href="/events" className="btn-outline text-lg px-8 py-4">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* ============== HISTORY TEASER ============== */}
      <section className="py-16 border-t border-dark-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-neon-cyan text-xs font-semibold uppercase tracking-widest">Since 2009</span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mt-2 mb-4">
                The Original SF Slackline Site
              </h3>
              <p className="text-fog-300 leading-relaxed">
                This community started 16 years ago with a simple website and a group of people 
                who loved walking on webbing in San Francisco parks. The original site is preserved 
                as a time capsule of where it all began.
              </p>
            </div>
            <Link href="/history" className="btn-outline whitespace-nowrap">
              Visit the Archive →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
