import Image from 'next/image';
import Link from 'next/link';

/*
 * HISTORY — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * Timeline from 360 @sfslackline tweets (2011–2018), EXIF metadata, archived site.
 */

const timeline = [
  {
    year: '2009',
    title: 'Origins',
    events: [
      'San Francisco Slacklining Association founded.',
      'sfslackline.org registered on Squarespace v5.',
      'First lines at Dolores Park. No one knows the rules yet because there aren\'t any.',
    ],
    tweet: null,
  },
  {
    year: '2010',
    title: 'First Lines',
    events: [
      '@sfslackline Twitter account created, August.',
      'Nightlines at Dolores Park — iPhone photos, GPS: 37.7593, -122.4260.',
      'Yosemite trip documented (Canon PowerShot G11, Aug 10).',
      'The community starts to coalesce around the palms at Cumberland & Dolores.',
    ],
    tweet: null,
    image: { src: '/photos/nightline-2.jpg', caption: 'Nightline at Dolores Park, Oct 2010' },
  },
  {
    year: '2011',
    title: 'Peak',
    events: [
      'Almost daily tweets — the feed becomes a real-time line-status system.',
      'Pride weekend slacklining, Jun 25–26.',
      'Burning Man slackline camp, Aug 27.',
      'Hardly Strictly Bluegrass line, Sep 30.',
      'Sasha\'s birthday: 6 lines simultaneously in Dolores Park.',
      '11.11.11 One Day on Earth filming at DP.',
      'Ocean Beach / Fort Funston: 150ft line over sand, Dec 4–5.',
      '849 photos across 57 gallery albums accumulated.',
      'SFPD encounter at Dolores Park, Feb 27.',
      'Dolores Park fencing/renovation begins Jun 3 — community relocates.',
    ],
    tweet: { text: '"Jst put on a little show for the sfpd... Nerve wracking!"', date: 'Feb 27, 2011' },
    image: { src: '/photos/prideline.jpg', caption: 'Pride weekend, Jun 25, 2011' },
  },
  {
    year: '2012',
    title: 'Longlines and Pushback',
    events: [
      'Panhandle at Cole becomes longline HQ: 100–186ft.',
      '200–300ft threaded line attempted in Golden Gate Park, Mar 18.',
      'First highline photos — Canon EOS-1D Mark IV, Feb 18.',
      'Rooftop slackline session — iPhone 4, Feb 24, GPS: 37.7868, -122.4038.',
      'SlackDay festival at MLK Park, Sausalito, Sep 8 — 30+ people.',
      'Civic Center slacklining festival, Oct 21.',
      'Andy Lewis performs at Madonna\'s Super Bowl XLVI halftime, Feb 5.',
      'Waterlines near AT&T Park.',
      'Enforcement escalates — multiple shutdowns.',
    ],
    tweet: { text: '"Getting shut down. We need to do something about this."', date: 'Jun 2, 2012' },
    image: { src: '/photos/highline-2.jpg', caption: 'First highline, Feb 18, 2012 — Canon EOS-1D Mark IV' },
  },
  {
    year: '2013',
    title: 'Expansion',
    events: [
      'Waterlines at Islais Creek Park, Dogpatch — 71ft, Oct 6.',
      'Fort Miley sessions: "one high and one low!" Nov 24.',
      'Equinox celebration: "135\' at panhandle and cole. Celebrate perfect balance!"',
      '140ft becomes standard at Cole. T rigs regularly.',
      '"Wanna marry me?" line — 140ft at panhandle, Aug 13.',
      '195ft at the Panhandle, Jun.',
    ],
    tweet: { text: '"Equinox line this sunday!! 135\' at panhandle and cole. Celebrate perfect balance with us."', date: 'Sep 22, 2013' },
  },
  {
    year: '2014',
    title: 'Settling Down',
    events: [
      'Dusty and Tamara marry, Feb 1 — "first official kiss as man and wife!"',
      'Activity shifts to Precita Park, panhandle.',
      'Less frequent tweeting. The daily status updates slow.',
      'Dolores Park renovation continues.',
    ],
    tweet: { text: '"Happy valentines day sf slackers! And a very happy anniversary to Dusty and Tamara."', date: 'Feb 14, 2015' },
  },
  {
    year: '2016–2018',
    title: 'Quiet',
    events: [
      '2016: 3 tweets total. Lines at Dolores, Duboce Park, GG Park.',
      '"Nice looking line going up at the base of duboce park." Aug 10, 2016.',
      '"GG Park line down." Jun 12, 2016.',
      '2018, Nov 7: The final tweet.',
    ],
    tweet: { text: '"SF Slackers, still at it! Three lines up."', date: 'Nov 7, 2018 — final tweet. 5 likes.' },
  },
];

export default function HistoryPage() {
  return (
    <div className="mt-14 font-body">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] max-h-[450px] flex items-end overflow-hidden">
        <Image
          src="/photos/memorial.jpg"
          alt="Memorial Day slackline, May 30, 2011 — Nikon D90"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A] via-[#1A3A4A]/50 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pb-8 sm:pb-12">
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight mb-2">
            Line Is Down.<br />Moon Is Up.
          </h1>
          <p className="text-white/60 text-sm font-light">
            2009–2018. From first lines at Dolores Park to the last tweet. The full record.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="space-y-0">
            {timeline.map((era, i) => (
              <div key={era.year} className={`${i > 0 ? 'border-t border-gray-100' : ''} py-8 sm:py-10`}>
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                  {/* Year */}
                  <div className="sm:w-32 shrink-0">
                    <span className="font-display text-3xl sm:text-4xl font-black text-[#C8A84E]">{era.year}</span>
                    <p className="text-xs text-gray-400 font-medium mt-1">{era.title}</p>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <ul className="space-y-2 mb-4">
                      {era.events.map((event, j) => (
                        <li key={j} className="flex gap-2 items-start">
                          <span className="w-1 h-1 rounded-full bg-[#1E6B7B] mt-2 shrink-0" />
                          <span className="text-sm text-gray-700 font-light">{event}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tweet quote */}
                    {era.tweet && (
                      <div className="bg-[#1A3A4A] rounded-lg p-4 mt-4">
                        <p className="text-white/80 text-sm italic">{era.tweet.text}</p>
                        <p className="text-[10px] text-white/30 mt-1">@sfslackline &middot; {era.tweet.date}</p>
                      </div>
                    )}

                    {/* Image */}
                    {era.image && (
                      <div className="mt-4 rounded-lg overflow-hidden">
                        <div className="relative h-48 sm:h-64">
                          <Image src={era.image.src} alt={era.image.caption} fill className="object-cover" />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1">{era.image.caption}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1A3A4A] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: '360', label: 'Tweets' },
              { num: '849', label: 'Photos' },
              { num: '57', label: 'Albums' },
              { num: '9', label: 'Years Active' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl sm:text-4xl font-black text-[#C8A84E]">{stat.num}</div>
                <p className="text-xs text-white/50 font-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Poetic closing */}
      <section className="bg-[#F2F4F6] py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-gray-600 text-sm italic font-light leading-relaxed">
            &quot;A little rain wont teather us to the earth. But it reminds us that things fall.&quot;
          </p>
          <p className="text-[10px] text-gray-400 mt-2">@sfslackline &middot; Mar 13, 2011</p>

          <div className="mt-8 flex gap-3 justify-center">
            <a
              href="https://sfslackline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Visit Original Site
            </a>
            <Link
              href="/community"
              className="inline-block border border-gray-300 text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Meet the Crew
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
