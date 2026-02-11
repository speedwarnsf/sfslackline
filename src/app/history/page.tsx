export default function HistoryPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-cyan text-xs font-semibold uppercase tracking-widest">Archive</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Where It <span className="text-neon-cyan">Started</span>
          </h1>
          <p className="text-fog-300 text-xl leading-relaxed mb-12">
            In 2009, a small group of slackliners in San Francisco built a website to connect 
            the growing community. That site ran continuously for over 16 years — 
            a quiet, persistent presence in the Bay Area outdoor scene.
          </p>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neon-cyan/20 md:-translate-x-1/2" />
            
            {[
              { year: '2009', title: 'The Beginning', text: 'San Francisco Slacklining Association founded. The first website goes live — a simple hub for a growing community of balance enthusiasts.' },
              { year: '2010', title: 'Community Growth', text: 'Regular meetups established in Dolores Park and Golden Gate Park. The slackline scene explodes across the Bay Area.' },
              { year: '2012', title: 'Highline Era', text: 'Bay Area slackliners begin pushing into highlining. Castle Rock becomes the local proving ground.' },
              { year: '2014', title: 'Competition Scene', text: 'SF slackliners compete nationally. Tricklining and freestyle disciplines gain popularity.' },
              { year: '2016', title: 'Longline Records', text: 'Local slackliners push longline distances. 200m+ walks become regular at Crissy Field.' },
              { year: '2020', title: 'Pandemic Boom', text: 'Slacklining sees massive growth as people seek outdoor activities. Parks fill with new slackliners.' },
              { year: '2025', title: 'New Chapter', text: 'After 16 years, it\'s time for the next evolution. The original site is preserved as a monument to where it all began.' },
              { year: '2026', title: 'SF Slackline Reborn', text: 'A world-class resource for the global slackline community, built on the foundation of San Francisco\'s pioneering scene.' },
            ].map((event, i) => (
              <div key={event.year} className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8 mb-12`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                  <div className="glass p-6">
                    <span className="font-[family-name:var(--font-mono)] text-neon-cyan text-sm">{event.year}</span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100 mt-1 mb-2">{event.title}</h3>
                    <p className="text-fog-300 text-sm leading-relaxed">{event.text}</p>
                  </div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-neon-cyan rounded-full md:-translate-x-1/2 mt-8 ring-4 ring-dark-950" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Original site embed */}
      <section className="py-16 bg-dark-900/30 border-y border-dark-700/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            The Original Site
          </h2>
          <p className="text-fog-300 mb-8">
            The 2009 website, preserved exactly as it was. A time capsule of San Francisco slackline culture.
          </p>
          <div className="glass p-8">
            <p className="text-fog-300 text-sm mb-4">© 2009, San Francisco Slacklining Association</p>
            <a 
              href="http://sfslackline.org" 
              target="_blank" 
              rel="noopener"
              className="btn-outline inline-block"
            >
              Visit the Original Site →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
