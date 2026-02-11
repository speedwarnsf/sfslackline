import Link from 'next/link';

const gearCategories = [
  {
    title: 'Beginner Kits',
    description: 'Everything you need to start. One purchase, you\'re ready.',
    items: [
      { name: 'Gibbon Classic Line', price: '$75', best: true, note: 'Our #1 recommendation for beginners. 50ft, ratchet included.' },
      { name: 'Slackline Industries Base Line', price: '$60', best: false, note: 'Budget-friendly, solid quality. 50ft with ratchet and tree protectors.' },
      { name: 'YogaSlackers e-line', price: '$50', best: false, note: 'Great starter line, softer webbing that\'s forgiving for learning.' },
    ],
  },
  {
    title: 'Intermediate Gear',
    description: 'Ready to level up? Longer lines and better systems.',
    items: [
      { name: 'Balance Community Primitive Kit', price: '$120', best: true, note: 'Classic primitive setup. No ratchet — learn to rig properly.' },
      { name: 'Gibbon Surfer Line', price: '$90', best: false, note: 'Bouncy and dynamic. Great for learning tricks.' },
      { name: 'Slackline Industries Aggro Line', price: '$110', best: false, note: '100ft trickline for serious bouncing.' },
    ],
  },
  {
    title: 'Advanced / Longline',
    description: 'For serious progression. Pulley systems and pro webbing.',
    items: [
      { name: 'Balance Community Longline Kit', price: '$280', best: true, note: 'Complete pulley system for 100m+ lines.' },
      { name: 'Landcruising Webbing (per meter)', price: '$2-5/m', best: false, note: 'Pro-grade webbing. Choose your width and stretch profile.' },
      { name: 'Rigging Plate + Pulleys', price: '$150+', best: false, note: 'Build your own system. Infinite customization.' },
    ],
  },
];

export default function GearPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Gear Guide</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Gear <span className="text-neon-lime">Up</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            Honest gear recommendations from the community. We only recommend what we actually use. 
            Links support SF Slackline through affiliate commissions.
          </p>
          <p className="text-fog-300/60 text-sm mt-4">
            💡 Don&apos;t buy gear to start — come to a Sunday session first and try ours for free.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {gearCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2">{cat.title}</h2>
              <p className="text-fog-300 mb-6">{cat.description}</p>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div key={item.name} className={`glass p-6 flex flex-col sm:flex-row sm:items-center gap-4 ${item.best ? 'border-neon-lime/30' : ''}`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-fog-100">{item.name}</h3>
                        {item.best && <span className="text-xs px-2 py-0.5 bg-neon-lime/10 text-neon-lime border border-neon-lime/20">Recommended</span>}
                      </div>
                      <p className="text-fog-300 text-sm mt-1">{item.note}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-[family-name:var(--font-display)] text-xl font-bold text-neon-lime">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tree protection */}
      <section className="py-16 bg-dark-900/30 border-y border-dark-700/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4 text-neon-lime">
            🌳 Always Use Tree Protection
          </h2>
          <p className="text-fog-300 leading-relaxed">
            Every single time. No exceptions. Tree protectors (wide, padded wraps around the tree) 
            prevent damage to bark and keep slacklining welcome in our parks. 
            If your kit doesn&apos;t include them, buy them separately. 
            A towel or carpet scrap works in a pinch, but proper protectors are best.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Not sure what to get?
          </h2>
          <p className="text-fog-300 mb-8">
            Come to a session, try different setups, and ask the community. 
            Everyone loves talking gear.
          </p>
          <Link href="/events" className="btn-primary">Come to a Session</Link>
        </div>
      </section>
    </div>
  );
}
