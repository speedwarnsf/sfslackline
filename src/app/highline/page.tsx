import Image from 'next/image';
import Link from 'next/link';

export default function HighlinePage() {
  return (
    <div className="mt-14 font-body">
      {/* Hero with highline photo */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <Image src="/photos/highline-2.jpg" alt="First SF Slackline highline · Feb 18, 2012 · Canon 1D Mark IV" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 pb-10 sm:pb-14 w-full">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[0.9] mb-3">
            Walk<br />the Sky
          </h1>
          <p className="text-white/70 text-sm sm:text-lg font-light max-w-xl">
            Highlining is slacklining at height — sometimes hundreds or thousands of feet above the ground.
            The ultimate expression of balance, courage, and trust in your systems.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-[#F5F0E0] py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="flex gap-4 items-start">
            <span className="text-2xl shrink-0">⚠️</span>
            <div>
              <h2 className="font-display text-xl font-black text-[#1A3A4A] mb-2">Safety Is Non-Negotiable</h2>
              <p className="text-sm text-gray-700 font-light leading-relaxed mb-3">
                Highlining involves serious risk. Every highline requires redundant safety systems,
                experienced riggers, proper leashes, and thorough knowledge of anchor building.
                <strong className="text-[#1A3A4A]"> Never attempt highlining without proper training and mentorship.</strong>
              </p>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Our community follows ISA (International Slackline Association) safety standards.
                We can connect you with experienced highliners who can mentor you through your first exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bay Area highline spots */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Bay Area Highline Locations</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Known spots for experienced highliners</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { name: 'Castle Rock State Park', length: '30–80m', height: '50–200ft', description: 'The Bay Area\'s highline playground. Multiple established lines on sandstone formations. Permits may be required.', access: 'Moderate hike' },
              { name: 'Marin Headlands', length: '20–60m', height: '100–500ft', description: 'Dramatic coastal cliffs with ocean views. Exposed and windy — for experienced highliners only.', access: 'Variable' },
              { name: 'Point Reyes', length: '15–40m', height: '50–150ft', description: 'Secluded spots with stunning coastal scenery. Limited access, requires planning and permits.', access: 'Long approach' },
              { name: 'Yosemite Valley', length: '20–1000m+', height: '100–3000ft', description: 'The birthplace of slacklining. World-class highlines for the most experienced. Special permits required.', access: '3–4 hour drive' },
            ].map((spot) => (
              <div key={spot.name} className="p-5 rounded-xl bg-[#F2F4F6] border border-gray-100">
                <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-1">{spot.name}</h3>
                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="text-[10px] text-[#1E6B7B] font-medium">Length: {spot.length}</span>
                  <span className="text-[10px] text-[#1E6B7B] font-medium">Height: {spot.height}</span>
                  <span className="text-[10px] text-[#1E6B7B] font-medium">Access: {spot.access}</span>
                </div>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6B7B] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-xl font-black text-white mb-2">Want to try highlining?</h2>
          <p className="text-sm font-light text-white/70 mb-5 max-w-lg mx-auto">
            Start by mastering slacklining on the ground. Then join monthly highline trips
            where experienced riggers set up safe, inspected lines for you to try.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/learn"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Learn the Basics
            </Link>
            <Link
              href="/events"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Join a Trip
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
