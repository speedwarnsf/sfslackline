import Link from 'next/link';

/*
 * GEAR — Real recommendations + ISA standards from SF_SLACKLINE_VOICE_AND_DATA.md
 * Balance Community is the primary recommended retailer.
 * ISA DIN 79400 standards for tree protection.
 */

export default function GearPage() {
  return (
    <div className="mt-14 font-body">
      {/* Hero */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight mb-3">
            Gear Up
          </h1>
          <p className="text-white/60 text-sm sm:text-base font-light max-w-xl">
            Don&apos;t buy gear to start. Come to a session first and try ours.
            When you&apos;re ready, here&apos;s what actually matters — and what doesn&apos;t.
          </p>
          <p className="text-white/40 text-xs font-light mt-3">
            New to slacklining? Start with{' '}
            <Link href="/learn" className="text-[#C8A84E]/70 underline hover:text-[#C8A84E]">
              how to learn
            </Link>{' '}
            before you buy anything.
          </p>
        </div>
      </section>

      {/* Beginner Kit */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Beginner Kit</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Everything you need. One purchase. Walking in 10 minutes.</p>

          <div className="space-y-4">
            {[
              {
                name: 'Ratchet Kit (50ft)',
                price: '$50–80',
                rec: true,
                desc: 'A 50ft ratchet kit with tree protectors is the standard starter setup. Gibbon, Slackline Industries, and BC all make solid ones. Ratchet does the tensioning for you — clip in, crank, walk. Best bang for the buck.',
              },
              {
                name: 'Tree Protectors',
                price: '$20–40',
                rec: true,
                desc: 'Most kits include basic tree pro. If yours doesn\'t, or if you want real padding, get dedicated felt or foam wraps. Non-negotiable — this is what keeps our spots open. See our safety page for ISA standards.',
              },
              {
                name: 'Primitive Kit',
                price: '$100–130',
                rec: false,
                desc: 'No ratchet — uses line lockers or carabiners to tension. Lighter, more portable, teaches you proper rigging from day one. Nice to have, not necessary to start. Balance Community sells the definitive primitive kit.',
              },
              {
                name: 'Backup Line (50ft+)',
                price: '$15–30',
                rec: false,
                desc: 'A secondary line run underneath as a safety catch. Not needed for short beginner lines close to the ground. Becomes essential once you\'re rigging longer or higher setups.',
              },
            ].map((item) => (
              <div key={item.name} className={`p-5 rounded-xl border ${item.rec ? 'border-[#C8A84E]/30 bg-[#F5F0E0]/30' : 'border-gray-100'}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm text-[#1A3A4A]">{item.name}</h3>
                      {item.rec && <span className="text-[10px] px-1.5 py-0.5 bg-[#C8A84E]/10 text-[#C8A84E] border border-[#C8A84E]/20 rounded font-semibold">START HERE</span>}
                    </div>
                    <p className="text-xs text-gray-600 font-light mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="font-display text-lg font-black text-[#C8A84E] shrink-0">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 font-light mt-6">
            Total starter cost: <strong className="text-[#1A3A4A]">$50–80</strong> for a ratchet kit with tree pro.
            That&apos;s it. Everything else is nice to have.
          </p>
        </div>
      </section>

      {/* Gear Progression */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Gear Progression</h2>
          <p className="text-sm text-gray-500 font-light mb-8">
            How your setup changes as you push distance and height.
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {/* Beginner */}
            <div className="p-5 rounded-xl bg-white border border-gray-200">
              <div className="text-[10px] px-1.5 py-0.5 bg-[#1E6B7B]/10 text-[#1E6B7B] border border-[#1E6B7B]/20 rounded font-semibold inline-block mb-3">BEGINNER</div>
              <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-1">Park Lines</h3>
              <p className="text-xs text-gray-500 font-light mb-3">Up to 80ft · Low to ground</p>
              <ul className="space-y-2">
                {['Ratchet kit (50ft webbing)', 'Tree protectors', 'That\'s literally it'].map((item) => (
                  <li key={item} className="text-xs text-gray-600 font-light flex items-start gap-2">
                    <span className="text-[#1E6B7B] mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-gray-400 font-light mt-4 border-t border-gray-100 pt-3">
                What we set up at Dolores most weekends. 35–50ft between the palms.
              </p>
            </div>

            {/* Longline */}
            <div className="p-5 rounded-xl bg-white border border-gray-200">
              <div className="text-[10px] px-1.5 py-0.5 bg-[#C8A84E]/10 text-[#C8A84E] border border-[#C8A84E]/20 rounded font-semibold inline-block mb-3">INTERMEDIATE</div>
              <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-1">Longlines</h3>
              <p className="text-xs text-gray-500 font-light mb-3">100–300ft · Pulley tensioned</p>
              <ul className="space-y-2">
                {[
                  'Pulley system (replaces ratchet)',
                  'Pro webbing (by the meter)',
                  'Soft shackles',
                  'Rigging plate + carabiners',
                  'Backup line',
                ].map((item) => (
                  <li key={item} className="text-xs text-gray-600 font-light flex items-start gap-2">
                    <span className="text-[#C8A84E] mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-gray-400 font-light mt-4 border-t border-gray-100 pt-3">
                The Panhandle at Cole. 130–195ft. This is where T and Mac rigged.
              </p>
            </div>

            {/* Highline */}
            <div className="p-5 rounded-xl bg-white border border-[#1A3A4A]/20">
              <div className="text-[10px] px-1.5 py-0.5 bg-[#1A3A4A]/10 text-[#1A3A4A] border border-[#1A3A4A]/20 rounded font-semibold inline-block mb-3">ADVANCED</div>
              <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-1">Highlines</h3>
              <p className="text-xs text-gray-500 font-light mb-3">Any height · Full safety system</p>
              <ul className="space-y-2">
                {[
                  'Harness + leash (climbing harness works)',
                  'Backup webbing (separate from mainline)',
                  'Load cells / tension meter',
                  'Bolt anchors or wrap anchors',
                  'Soft shackles (rated, not DIY)',
                  'Helmet',
                ].map((item) => (
                  <li key={item} className="text-xs text-gray-600 font-light flex items-start gap-2">
                    <span className="text-[#1A3A4A] mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-gray-400 font-light mt-4 border-t border-gray-100 pt-3">
                Not a solo endeavor. Learn from experienced highliners. ISA standards apply.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 font-light mt-6">
            You can&apos;t ratchet-tension a 150ft line — the physics won&apos;t let you.
            Pulley systems multiply your pulling force. That&apos;s the main gear jump.
          </p>
        </div>
      </section>

      {/* Longline Gear Detail */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl font-black text-[#1A3A4A] mb-1">Longline &amp; Advanced Gear</h2>
          <p className="text-sm text-gray-500 font-light mb-8">For 100ft+ lines. Real hardware, real investment.</p>

          <div className="space-y-4">
            {[
              { name: 'Pulley System Kit', price: '$250–350', desc: 'Complete pulley system for tensioning lines 100m+. Multiplies your pulling force 6:1 or 9:1. Essential for longlines — you physically cannot tension a 150ft line with a ratchet.' },
              { name: 'Pro Webbing', price: '$2–5/meter', desc: 'Tubular or flat webbing in various widths and stretch profiles. 1" is standard. 2" is more forgiving for beginners. Buy by the meter from Balance Community.' },
              { name: 'Soft Shackles', price: '$15–30 each', desc: 'Dyneema loops that replace metal shackles at anchor points. Lighter, won\'t damage webbing, rated to spec. Use rated ones from reputable makers — don\'t DIY these until you know what you\'re doing.' },
              { name: 'Load Cell / Tension Meter', price: '$150–300', desc: 'Measures actual tension on the line. Critical for highlines, useful for longlines. Tells you if you\'re overloading anchors or webbing. Not optional for serious rigging.' },
              { name: 'Rigging Plate + Pulleys', price: '$100–200', desc: 'Build your own system. Infinite customization. This is what T used to rig 140ft at Cole in the Panhandle.' },
            ].map((item) => (
              <div key={item.name} className="p-5 rounded-xl bg-[#F2F4F6] border border-gray-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-sm text-[#1A3A4A]">{item.name}</h3>
                    <p className="text-xs text-gray-600 font-light mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="font-display text-lg font-black text-[#C8A84E] shrink-0">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree Protection — ISA Standards */}
      <section className="bg-[#F5F0E0] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Tree Protection</h2>
          <p className="text-sm text-[#1A3A4A]/60 font-light mb-2">ISA DIN 79400 Standard. Non-negotiable.</p>
          <p className="text-sm text-[#1A3A4A]/50 font-light mb-8 max-w-2xl">
            Every shutdown in our{' '}
            <Link href="/safety" className="text-[#1E6B7B] underline hover:text-[#1E6B7B]/80">
              enforcement timeline
            </Link>{' '}
            came from complaints — and tree damage is the #1 complaint.
            Protect the bark and you protect the community.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            <div className="p-5 rounded-xl bg-white border border-[#C8A84E]/20">
              <h3 className="font-display text-2xl font-black text-[#C8A84E]">5cm+</h3>
              <p className="text-sm font-semibold text-[#1A3A4A] mt-1">Sling width</p>
              <p className="text-xs text-gray-600 font-light mt-1">Minimum 2 inches. Narrow slings cut bark.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#C8A84E]/20">
              <h3 className="font-display text-2xl font-black text-[#C8A84E]">20cm &times; 2–3m</h3>
              <p className="text-sm font-semibold text-[#1A3A4A] mt-1">Pad size</p>
              <p className="text-xs text-gray-600 font-light mt-1">8 inches wide, 2–3 meters long per tree.</p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-[#C8A84E]/20">
              <h3 className="font-display text-2xl font-black text-[#C8A84E]">30cm</h3>
              <p className="text-sm font-semibold text-[#1A3A4A] mt-1">Min trunk diameter</p>
              <p className="text-xs text-gray-600 font-light mt-1">About 12 inches. No small or young trees. Ever.</p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Professional Tree Protectors', price: '$20–40/pair', desc: 'Purpose-built felt or foam pads with velcro. Balance Community stocks several options. Easiest solution — wrap, velcro, done.' },
              { name: 'Carpet Strips', price: 'Free–$5', desc: 'Cut carpet remnants work. SF Rec Park explicitly listed carpet strips as acceptable. Ask at any carpet store for scraps.' },
              { name: 'Felt Mats / Burlap', price: '$5–15', desc: 'Hardware store felt or burlap sacking. Wrap around the trunk, secure with tape or string. Cheap and effective.' },
            ].map((item) => (
              <div key={item.name} className="p-4 rounded-lg bg-white border border-[#C8A84E]/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-sm text-[#1A3A4A]">{item.name}</h3>
                    <p className="text-xs text-gray-500 font-light mt-1">{item.desc}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#1E6B7B] shrink-0">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#1A3A4A]/40 font-light mt-6">
            Full tree protection details on our{' '}
            <Link href="/safety" className="text-[#1E6B7B] underline">safety page</Link>.
            ISA tree protection guidelines:{' '}
            <a href="https://slacklineinternational.org/tree-protection/" target="_blank" rel="noopener noreferrer" className="text-[#1E6B7B] underline">slacklineinternational.org</a>
          </p>
        </div>
      </section>

      {/* Where to Buy */}
      <section className="bg-[#1A3A4A] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl font-black text-white mb-3">Where to Buy</h2>
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-sm text-[#C8A84E] mb-2">Balance Community</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed">
              The go-to shop for slackliners. Started as a forum and community,
              now the best gear retailer in the US. Webbing, hardware, tree protection,
              complete kits, primitive kits — they stock everything and actually know
              what they&apos;re selling. Not a random Amazon brand.
            </p>
            <a
              href="https://balancecommunity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              balancecommunity.com
            </a>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 mt-4">
            <h3 className="font-semibold text-sm text-white/70 mb-1">Amazon / Generic Kits</h3>
            <p className="text-white/40 text-xs font-light leading-relaxed">
              Fine for a first ratchet kit if you just want to try it. Gibbon and Slackline Industries
              both sell on Amazon. Just check that tree protectors are included. Don&apos;t buy unbranded
              webbing for anything beyond a park line — you want rated gear for longer or higher setups.
            </p>
          </div>

          <p className="text-white/30 text-[10px] mt-4">
            ISA gear standards:{' '}
            <a href="https://slacklineinternational.org/isa-gear-standards/" target="_blank" rel="noopener noreferrer" className="text-[#C8A84E]/50 underline">slacklineinternational.org</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6B7B] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-xl font-black text-white mb-2">Still not sure what to get?</h2>
          <p className="text-sm font-light text-white/70 mb-5">
            Come to a session. Try different setups. Everyone loves talking gear.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/learn"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Learn to Slackline
            </Link>
            <Link
              href="/spots"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/safety"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Safety &amp; Legal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
