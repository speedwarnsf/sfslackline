import Link from 'next/link';

/*
 * EVENTS — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * Historical events from @sfslackline tweets (2011–2018)
 * No fabricated future events — only what actually happened + framework for future posting.
 */

const historicalEvents = [
  {
    date: 'Sep 8, 2012',
    title: 'SlackDay at MLK Park, Sausalito',
    type: 'Festival',
    description: '"SlackDay in MLK park!! 30+ confirmed." The biggest single-day gathering. Multiple lines, all levels, all day in Sausalito. Coloma St & Olima St.',
    source: 'Tweet Sep 7, 2012',
  },
  {
    date: 'Oct 21, 2012',
    title: 'Civic Center Slacklining Festival',
    description: 'Public slackline demonstration and festival at Civic Center. Bringing slacklining to downtown SF.',
    type: 'Festival',
    source: 'Tweet Oct 2012',
  },
  {
    date: 'Sep 22, 2013',
    title: 'Equinox Line',
    type: 'Session',
    description: '"Equinox line this sunday!! 135\' at panhandle and cole. Celebrate perfect balance with us." Perfect balance on the equinox. Poetry.',
    source: 'Tweet Sep 22, 2013',
  },
  {
    date: 'Sep 30, 2011',
    title: 'Hardly Strictly Bluegrass',
    type: 'Session',
    description: 'Lines up during Hardly Strictly Bluegrass in Golden Gate Park. Music and slacklining. NZ was there.',
    source: 'Tweet Sep 30, 2011',
  },
  {
    date: 'Jun 25–26, 2011',
    title: 'Pride Weekend Lines',
    type: 'Session',
    description: 'Slacklines up during SF Pride. The parks were full, the lines were full, the sun was out.',
    source: 'Tweet + photos (MS690 camera)',
  },
  {
    date: 'Aug 27, 2011',
    title: 'Burning Man Slackline Camp',
    type: 'Trip',
    description: 'SF Slackline crew at Burning Man. Charlie rigged. Lines in the desert.',
    source: 'Tweet Aug 2011',
  },
  {
    date: 'Nov 11, 2011',
    title: '11.11.11 One Day on Earth',
    type: 'Film',
    description: 'Filming at Dolores Park for the One Day on Earth global documentary project. Slacklining as San Francisco\'s contribution.',
    source: 'Tweet Nov 2011',
  },
  {
    date: 'Dec 4–5, 2011',
    title: 'Ocean Beach / Fort Funston',
    type: 'Session',
    description: '150ft line over sand, south of the hang gliders. Pilings as anchors. One of the most unique setups the crew ever did.',
    source: 'Tweet Dec 2011 + EXIF GPS',
  },
  {
    date: 'Oct 6, 2013',
    title: 'Waterlines at Islais Creek',
    type: 'Session',
    description: '"Water Lines going up at islais park in dog patch." 71ft waterline. A different kind of balance when the fall is into the creek.',
    source: 'Tweet Oct 6, 2013',
  },
  {
    date: 'Nov 24, 2013',
    title: 'Fort Miley',
    type: 'Session',
    description: '"Ft Miley line up one high and one low!" With Dat. Lands End area. The terrain there doesn\'t forgive.',
    source: 'Tweet Nov 24, 2013',
  },
  {
    date: 'Oct 1, 2011',
    title: 'Lake Merritt, Oakland',
    type: 'Trip',
    description: '"4 lines up at lake merrit in oakland. Field tripping in the east bay." The SF crew goes across the bay.',
    source: 'Tweet Oct 1, 2011',
  },
  {
    date: 'Feb 1, 2014',
    title: 'Dusty & Tamara\'s Wedding',
    type: 'Community',
    description: '"First official kiss as man and wife!" Not a slackline event per se, but the whole community was there.',
    source: 'Tweet Feb 1, 2014',
  },
];

const typeColors: Record<string, string> = {
  Festival: 'bg-[#C8A84E]/10 text-[#C8A84E] border-[#C8A84E]/20',
  Session: 'bg-[#1E6B7B]/10 text-[#1E6B7B] border-[#1E6B7B]/20',
  Trip: 'bg-[#4A9BAA]/10 text-[#4A9BAA] border-[#4A9BAA]/20',
  Film: 'bg-[#1A3A4A]/10 text-[#1A3A4A] border-[#1A3A4A]/20',
  Community: 'bg-[#C8A84E]/10 text-[#C8A84E] border-[#C8A84E]/20',
};

const recurringPatterns = [
  { pattern: 'Weekend Sessions at Dolores Park', note: 'Almost every weekend 2010–2014, weather permitting. The palms at Cumberland & Dolores. "Line goin up in 15."' },
  { pattern: 'Panhandle Longline Days', note: 'Regular longline sessions at Cole & Fell. 80–195ft. T, Ariel, Mac, and others rigged big.' },
  { pattern: 'Bay to Breakers Decompression', note: 'After the race, lines go up. Parks full of people. Natural audience.' },
  { pattern: 'Full Moon / Equinox Lines', note: 'Special sessions on astronomical events. "Line is down. Moon is up." The community treated these as rituals.' },
];

export default function EventsPage() {
  return (
    <div className="mt-14 font-body">
      {/* Hero */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight mb-3">
            Line Goin Up<br />in 15
          </h1>
          <p className="text-white/60 text-sm sm:text-base font-light max-w-xl">
            Historical events from 2011–2014 and the patterns that made this community.
            Real dates, real tweets, real gatherings.
          </p>
        </div>
      </section>

      {/* Recurring patterns */}
      <section className="bg-[#F5F0E0] py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-xl font-black text-[#1A3A4A] mb-4">The Rhythms</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {recurringPatterns.map((r) => (
              <div key={r.pattern} className="bg-white rounded-lg p-4 border border-[#C8A84E]/10">
                <h3 className="font-semibold text-sm text-[#1A3A4A] mb-1">{r.pattern}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Events */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Event Archive</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Documented events from @sfslackline, 2011–2014</p>

          <div className="space-y-4">
            {historicalEvents.map((event) => (
              <div key={event.title} className="p-5 rounded-xl border border-gray-100 hover:border-[#C8A84E]/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-28 shrink-0">
                    <span className="text-xs font-mono text-[#C8A84E]">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-[#1A3A4A]">{event.title}</h3>
                      <span className={`text-[10px] px-1.5 py-0.5 border rounded ${typeColors[event.type] || ''}`}>{event.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{event.description}</p>
                    <p className="text-[10px] text-gray-400 mt-2">Source: {event.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future framework */}
      <section className="bg-[#1A3A4A] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-black text-white mb-3">The lines still go up.</h2>
          <p className="text-white/60 text-sm font-light max-w-lg mx-auto mb-6">
            If you&apos;re rigging a session and want it listed here, get in touch.
            Weekend sessions at Dolores Park or the Panhandle are always welcome.
            Pad your trees. Bring extra line. Invite everyone.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/spots"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/safety"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Know the Rules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
