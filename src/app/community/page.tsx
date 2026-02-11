import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Community</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Walk <span className="text-neon-lime">Together</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            Slacklining is better with friends. Connect with the Bay Area community — 
            from Sunday park sessions to epic highline expeditions.
          </p>
        </div>
      </section>

      {/* Ways to connect */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: 'Sunday Sessions',
                description: 'Every Sunday, rain or shine, the community gathers at Dolores Park. Bring a line or borrow one. All levels welcome. This is where friendships start.',
              },
              {
                icon: '🎓',
                title: 'Mentorship Program',
                description: 'Get paired with an experienced slackliner who can guide your progression. Free, community-driven, and the fastest way to improve.',
              },
              {
                icon: '🏕️',
                title: 'Highline Trips',
                description: 'Monthly trips to California\'s best highline locations. Castle Rock, Yosemite, Point Reyes. Carpools organized, all gear provided for beginners.',
              },
            ].map((item) => (
              <div key={item.title} className="glass p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100 mb-3">{item.title}</h3>
                <p className="text-fog-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community values */}
      <section className="py-16 bg-dark-900/30 border-y border-dark-700/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-8">
            Our <span className="text-neon-lime">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {[
              { title: 'Inclusive', text: 'Every body type, every age, every background. The line doesn\'t care who you are.' },
              { title: 'Safe', text: 'We rig responsibly, protect our trees, and look out for each other. No ego.' },
              { title: 'Stewards', text: 'We love our parks. Leave no trace, respect neighbors, be the reason slacklining stays welcome.' },
              { title: 'Generous', text: 'Share your gear, share your knowledge, share your stoke. That\'s how this community grew.' },
            ].map((v) => (
              <div key={v.title} className="glass p-6">
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-neon-lime mb-2">{v.title}</h3>
                <p className="text-fog-300 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Join the conversation
          </h2>
          <p className="text-fog-300 mb-8">
            User accounts, forums, and trip planning tools coming soon. 
            For now, find us at the park every Sunday.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/events" className="btn-primary">See Events</Link>
            <a href="https://instagram.com/sfslackline" target="_blank" rel="noopener" className="btn-outline">
              Follow @sfslackline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
