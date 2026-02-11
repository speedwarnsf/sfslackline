import Link from 'next/link';

const spots = [
  { name: 'Dolores Park', area: 'Mission District', lat: 37.7596, lng: -122.4269, trees: true, difficulty: 'All Levels', description: 'The spiritual home of SF slacklining. Multiple great tree pairs, always someone setting up. South slope gets sun all day.', amenities: ['Restrooms', 'Food nearby', 'Transit accessible', 'Shade'], popular: true },
  { name: 'Golden Gate Park - Hippie Hill', area: 'Haight', lat: 37.7694, lng: -122.4563, trees: true, difficulty: 'All Levels', description: 'Iconic spot with massive eucalyptus trees. Room for multiple lines. Weekend vibe is unbeatable.', amenities: ['Restrooms', 'Shade', 'Flat ground', 'Good trees'], popular: true },
  { name: 'Crissy Field', area: 'Presidio', lat: 37.8039, lng: -122.4644, trees: false, difficulty: 'Beginner', description: 'Flat, grassy field with Golden Gate Bridge views. Use posts or bring your own A-frame. Wind can be a factor.', amenities: ['Restrooms', 'Parking', 'Views', 'Flat ground'], popular: true },
  { name: 'Precita Park', area: 'Bernal Heights', lat: 37.7477, lng: -122.4125, trees: true, difficulty: 'Beginner', description: 'Quiet neighborhood park. Great for focused practice without crowds. Several good tree setups.', amenities: ['Quiet', 'Good trees', 'Residential'], popular: false },
  { name: 'Glen Canyon Park', area: 'Glen Park', lat: 37.7382, lng: -122.4414, trees: true, difficulty: 'Intermediate', description: 'Hidden gem with excellent tree pairs. Less crowded, more technical terrain. Great for progression.', amenities: ['Trails', 'Nature', 'Good trees', 'Quiet'], popular: false },
  { name: 'Ocean Beach', area: 'Outer Sunset', lat: 37.7594, lng: -122.5107, trees: false, difficulty: 'Intermediate', description: 'Beach slacklining at its finest. Posts in sand, wind training, sunset sessions. Bring an A-frame.', amenities: ['Beach', 'Sunset views', 'Parking'], popular: false },
  { name: 'Baker Beach', area: 'Presidio', lat: 37.7936, lng: -122.4836, trees: false, difficulty: 'Intermediate', description: 'Dramatic backdrop with the Golden Gate Bridge. Sandy setup, great for photos and highline spotting.', amenities: ['Beach', 'Bridge views', 'Parking'], popular: false },
  { name: 'Marin Headlands', area: 'Marin County', lat: 37.8270, lng: -122.4994, trees: false, difficulty: 'Advanced', description: 'Highline territory. Dramatic cliffs and exposed ridges. Experienced riggers only. Permit required for some areas.', amenities: ['Highline potential', 'Epic views', 'Remote'], popular: false },
];

export default function SpotsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Bay Area Spots</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Find Your <span className="text-neon-lime">Line</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            Every great spot in the Bay Area, mapped and rated by the community. 
            From beginner-friendly parks to advanced highline locations.
          </p>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-1 overflow-hidden" style={{ height: '400px' }}>
            <div className="w-full h-full bg-dark-800 flex items-center justify-center relative">
              {/* Stylized map placeholder */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 30% 40%, rgba(204,255,0,0.3) 0%, transparent 50%), 
                                  radial-gradient(circle at 70% 60%, rgba(0,240,255,0.2) 0%, transparent 50%)`,
              }} />
              <div className="text-center z-10">
                <div className="text-5xl mb-4">🗺️</div>
                <p className="text-fog-300 text-lg font-[family-name:var(--font-display)]">Interactive Map Coming Soon</p>
                <p className="text-fog-300/60 text-sm mt-2">Real-time line up/down status • Community reports • Navigation</p>
              </div>
              {/* Dot markers */}
              {spots.filter(s => s.popular).map((spot, i) => (
                <div key={spot.name} className="absolute w-3 h-3" style={{ left: `${25 + i * 18}%`, top: `${30 + (i % 2) * 25}%` }}>
                  <div className="w-3 h-3 bg-neon-lime rounded-full animate-pulse" />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-neon-lime/70">{spot.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spot listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {spots.map((spot) => (
              <div key={spot.name} className="glass p-6 hover:scale-[1.01] transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100">
                      {spot.name}
                      {spot.popular && <span className="ml-2 text-xs text-neon-lime">★ Popular</span>}
                    </h3>
                    <p className="text-fog-300 text-sm">{spot.area}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 border ${
                    spot.difficulty === 'Beginner' ? 'bg-neon-lime/10 text-neon-lime border-neon-lime/20' :
                    spot.difficulty === 'All Levels' ? 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20' :
                    spot.difficulty === 'Intermediate' ? 'bg-neon-orange/10 text-neon-orange border-neon-orange/20' :
                    'bg-neon-pink/10 text-neon-pink border-neon-pink/20'
                  }`}>
                    {spot.difficulty}
                  </span>
                </div>
                <p className="text-fog-300 text-sm leading-relaxed mb-4">{spot.description}</p>
                <div className="flex flex-wrap gap-2">
                  {spot.amenities.map((a) => (
                    <span key={a} className="text-xs text-fog-300/70 bg-dark-700/50 px-2 py-1">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Know a spot we&apos;re missing?
          </h2>
          <p className="text-fog-300 mb-8">
            This map is built by the community. Submit a spot and help other slackliners find their next session.
          </p>
          <Link href="/community" className="btn-primary">Submit a Spot</Link>
        </div>
      </section>
    </div>
  );
}
