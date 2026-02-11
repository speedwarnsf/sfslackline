import Link from 'next/link';

export default function HighlinePage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-neon-pink/5 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-pink text-xs font-semibold uppercase tracking-widest">Advanced</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Walk the <span className="text-neon-pink">Sky</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            Highlining is slacklining at height — sometimes hundreds or thousands of feet above the ground. 
            It&apos;s the ultimate expression of balance, courage, and trust in your systems.
          </p>
        </div>
      </section>

      {/* Safety first */}
      <section className="py-16 bg-neon-pink/5 border-y border-neon-pink/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <span className="text-3xl">⚠️</span>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-neon-pink mb-3">Safety Is Non-Negotiable</h2>
              <p className="text-fog-300 leading-relaxed mb-4">
                Highlining involves serious risk. Every highline requires redundant safety systems, 
                experienced riggers, proper leashes, and thorough knowledge of anchor building. 
                <strong className="text-fog-100"> Never attempt highlining without proper training and mentorship.</strong>
              </p>
              <p className="text-fog-300 leading-relaxed">
                Our community follows ISA (International Slackline Association) safety standards. 
                We can connect you with experienced highliners who can mentor you through your first exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bay Area highline spots */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-8">
            Bay Area <span className="text-neon-pink">Highline</span> Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Castle Rock State Park', length: '30-80m', height: '50-200ft', description: 'The Bay Area\'s highline playground. Multiple established lines on sandstone formations. Permits may be required.', access: 'Moderate hike' },
              { name: 'Marin Headlands', length: '20-60m', height: '100-500ft', description: 'Dramatic coastal cliffs with ocean views. Exposed and windy — for experienced highliners only.', access: 'Variable' },
              { name: 'Point Reyes', length: '15-40m', height: '50-150ft', description: 'Secluded spots with stunning coastal scenery. Limited access, requires planning and permits.', access: 'Long approach' },
              { name: 'Yosemite Valley', length: '20-1000m+', height: '100-3000ft', description: 'The birthplace of slacklining. World-class highlines for the most experienced. Special permits required.', access: '3-4 hour drive' },
            ].map((spot) => (
              <div key={spot.name} className="glass p-6 border-neon-pink/10 hover:border-neon-pink/30 transition-all">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100 mb-1">{spot.name}</h3>
                <div className="flex gap-4 mb-3">
                  <span className="text-xs text-fog-300">Length: {spot.length}</span>
                  <span className="text-xs text-fog-300">Height: {spot.height}</span>
                  <span className="text-xs text-fog-300">Access: {spot.access}</span>
                </div>
                <p className="text-fog-300 text-sm leading-relaxed">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting started */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Want to try highlining?
          </h2>
          <p className="text-fog-300 mb-8 max-w-2xl mx-auto">
            Start by mastering slacklining on the ground. Then join our monthly highline trips 
            where experienced riggers set up safe, inspected lines for you to try.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/learn" className="btn-primary">Learn the Basics First</Link>
            <Link href="/events" className="btn-outline">Join a Highline Trip</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
