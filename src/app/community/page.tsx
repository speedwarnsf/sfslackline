import Link from 'next/link';

/*
 * COMMUNITY — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * People verified from @sfslackline tweets (2011–2018) and firsthand accounts.
 */

const sfCrew = [
  {
    name: 'Dat Phan',
    handle: '@datphan',
    role: 'The Teacher',
    bio: 'Set up more lines than anyone. Gave more lessons than anyone. If you learned to slackline in SF between 2009 and 2016, Dat probably taught you. Rigged at Dolores, Panhandle, Precita, Fort Miley. His arm injuries are in our injury archive — and he kept rigging.',
    tweets: 'Multiple tweets 2011–2016',
  },
  {
    name: 'Max Silver',
    role: 'Drink Your Tea',
    bio: 'Slackliner turned entrepreneur. Founded Drink Your Tea. Still part of the crew. One of those people who found something on the line and carried it into the rest of his life.',
    tweets: 'Core member',
  },
  {
    name: 'Thom Dedecko',
    handle: '@tdedecko',
    role: 'Still Walking',
    bio: 'Ex-Google. Night videos at Dolores Park. The TSA slackline story. Left SF but never stopped — still highlines worldwide. One of the few who made it from park lines to big air and kept going.',
    tweets: 'Tweets Oct 2011, Mar 2011',
  },
  {
    name: 'Anya',
    role: 'Still Walking',
    bio: '"Such a perfect night." Ukrainian. Came through SF, fell in love with the line and the community. Still highlines. Her injury is in our archive too — she didn\'t stop either.',
    tweets: 'Tweet Aug 2011',
  },
  {
    name: 'Dusty & Tamara',
    role: 'Heart of the Crew',
    bio: 'Dusty held the lost-and-found gear. Tamara\'s birthday was June 18. They married February 1, 2014 — "first official kiss as man and wife!" The community was their wedding party.',
    tweets: 'Tweets Sep 2011, Feb 2014',
  },
  {
    name: 'T',
    role: 'Rigger',
    bio: '140ft lines at the Panhandle were T\'s standard. Rigged regularly at Cole & Fell. Quiet, consistent, showed up and put up big lines.',
    tweets: 'Tweet Oct 2013',
  },
  {
    name: 'Ariel',
    role: 'Longlines',
    bio: 'Set up longlines at both the Panhandle and Dolores Park. One of the crew pushing line length when 80ft felt short.',
    tweets: 'Tweets Sep 2012',
  },
];

const extendedFamily = [
  {
    name: 'Tarzen',
    from: 'Austin, Texas',
    title: 'The Grand Slacker of Austin',
    bio: 'Grandfather. Massage therapist. Experience creator. Shepherds Austin\'s slackline scene. Rigs lines across bridges, rides longboards down parking garages. Little Chihuahua named Moca. Catchphrase: "I hope you have the best day ever." Visited SF and slacked with the crew.',
    link: 'https://youtube.com/watch?v=UimnK9DIxEw',
    linkLabel: 'Documentary',
  },
  {
    name: 'Andy Lewis',
    from: 'Greenbrae, Marin County',
    title: 'Sketchy Andy',
    bio: 'Born Oct 7, 1986, Santa Rosa. Grew up in Greenbrae. Four-time slackline world champion (2008–2011) — the first-ever slackline world champion. Performed on Madonna\'s Super Bowl XLVI halftime show, February 5, 2012. SNL and Conan parodies followed. Bay Area native, connected to the SF community.',
    link: 'https://en.wikipedia.org/wiki/Andy_Lewis_(slackliner)',
    linkLabel: 'Wikipedia',
  },
  {
    name: 'Alexander Schulz',
    from: 'Rosenheim, Germany',
    title: 'One Inch Dreams',
    bio: 'Born 1991. Multiple highline world record holder. Founded the One Inch Dreams collective in 2012. Crossed an active volcano on a highline (Mount Yasur, Vanuatu, April 2020). Late 2011: two-month trip in the western US, walked 119m at Consumnes River Gorge, CA. Stayed with the SF Slackline crew. Walked the longest midline world record.',
    link: null,
    linkLabel: null,
  },
  {
    name: 'Lukas Irmler',
    from: 'Germany',
    title: '2km World Record',
    bio: 'Walked the longest highline in the world: 2 kilometers (August 2019). Guinness record for highest slackline walk at 2,500m between hot air balloons (November 2024). Stayed with the SF Slackline crew for several nights. World-class highliner who slept on our couches.',
    link: null,
    linkLabel: null,
  },
];

const alsoMentioned = [
  { name: 'NZ', note: 'Active at Hardly Strictly Bluegrass, community events.' },
  { name: 'Mac', note: 'Longline partner. 100ft panhandle lines with the crew, Dec 2011.' },
  { name: 'Sasha', note: 'Birthday party = 6 lines in Dolores Park. Sep 2011.' },
  { name: 'Charlie', note: 'Uploaded pics. Nightline. Burning Man rigger.' },
  { name: 'Kyle, Evan, Matthew, Lindsey, David', note: 'Content contributors — photos and video across 57 albums.' },
];

export default function CommunityPage() {
  return (
    <div className="mt-14 font-body">
      {/* Hero */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-3xl sm:text-5xl font-black text-white leading-tight mb-3">
            Where Have<br />You Been?
          </h1>
          <p className="text-white/60 text-sm sm:text-base font-light max-w-xl">
            The people who built SF Slackline. Some are still on the line.
            Some moved on. All of them shaped this thing.
          </p>
        </div>
      </section>

      {/* SF Crew */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">The SF Crew</h2>
          <p className="text-sm text-gray-500 font-light mb-8">The people who showed up, rigged lines, and taught strangers to walk</p>

          <div className="space-y-5">
            {sfCrew.map((person) => (
              <div key={person.name} className="p-5 rounded-xl bg-[#F2F4F6] border border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-black text-[#1A3A4A]">
                      {person.name}
                      {person.handle && <span className="text-[#1E6B7B] text-sm font-medium ml-2">{person.handle}</span>}
                    </h3>
                    <span className="text-xs text-[#C8A84E] font-semibold uppercase tracking-wider">{person.role}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-light mt-2 leading-relaxed">{person.bio}</p>
                <p className="text-[10px] text-gray-400 mt-2">Source: {person.tweets}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Family */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Extended Family</h2>
          <p className="text-sm text-gray-500 font-light mb-8">World-class walkers who passed through SF. Slept on couches. Rigged at our parks.</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {extendedFamily.map((person) => (
              <div key={person.name} className="p-5 rounded-xl bg-white border border-gray-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-black text-[#1A3A4A]">{person.name}</h3>
                    <span className="text-xs text-[#C8A84E] font-semibold">{person.title}</span>
                    <span className="text-xs text-gray-400 ml-2">{person.from}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-light mt-2 leading-relaxed">{person.bio}</p>
                {person.link && (
                  <a href={person.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-[#1E6B7B] font-medium hover:text-[#1A3A4A] transition-colors">
                    {person.linkLabel} &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also Mentioned */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-xl font-black text-[#1A3A4A] mb-4">Also in the Feed</h2>
          <div className="space-y-2">
            {alsoMentioned.map((person) => (
              <div key={person.name} className="flex gap-3 items-start">
                <span className="text-sm font-semibold text-[#1A3A4A] shrink-0">{person.name}</span>
                <span className="text-sm text-gray-500 font-light">{person.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Balance Community */}
      <section className="bg-[#1A3A4A] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl font-black text-white mb-2">Balance Community</h2>
          <p className="text-white/70 text-sm font-light leading-relaxed max-w-2xl">
            The online hub for slackliners since the early days. Started as a forum and community resource,
            now primarily a gear retailer. Still the best place to buy webbing, hardware, and tree protection
            in the US. If you need slackline-specific gear, this is where the community buys it.
          </p>
          <a
            href="https://balancecommunity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
          >
            balancecommunity.com
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6B7B] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-xl font-black text-white mb-2">All we r missing is you</h2>
          <p className="text-sm font-light text-white/70 mb-5">
            The community is still here. The lines still go up. Come out.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/spots"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/events"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
