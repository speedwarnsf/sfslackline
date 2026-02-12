'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

function ClickablePhoto({ src, alt, className, fill, sizes }: { src: string; alt: string; className?: string; fill?: boolean; sizes?: string }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setShow(true)}>
        <Image src={src} alt={alt} className={className} fill={fill} sizes={sizes} />
      </div>
      {show && (
        <Lightbox images={[{ src, alt, caption: alt }]} index={0} onClose={() => setShow(false)} />
      )}
    </>
  );
}

/*
 * COMMUNITY — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * People verified from @sfslackline tweets (2011–2018) and firsthand accounts.
 * NO fabricated data. NO Friedi Kühne.
 */

const sfCrew = [
  {
    name: 'Dat Phan',
    handle: '@datphan',
    role: 'The Teacher',
    bio: 'If you learned to slackline in SF between 2009 and 2016, Dat probably taught you. Rigged at Dolores, Panhandle, Precita, Fort Miley. His arm injuries are in our injury archive — and he kept rigging.',
    quote: '"Stop by if you want a lesson - Dat."',
    photo: null,
  },
  {
    name: 'Dusty & Tamara',
    role: 'Heart of the Crew',
    bio: 'Dusty held the lost-and-found gear. Tamara\'s birthday was June 18. They married February 1, 2014. The community was their wedding party.',
    quote: '"First official kiss as man and wife!"',
    photo: null,
  },
  {
    name: 'Thom Dedecko',
    handle: '@tdedecko',
    role: 'Still Walking',
    bio: 'Ex-Google. Night videos at Dolores Park. The TSA slackline story. Left SF but never stopped — still highlines worldwide.',
    quote: null,
    photo: null,
  },
  {
    name: 'Max Silver',
    role: 'Drink Your Tea',
    bio: 'Slackliner turned entrepreneur. Founded Drink Your Tea. One of those people who found something on the line and carried it into the rest of his life.',
    quote: null,
    photo: null,
  },
  {
    name: 'Anya',
    role: 'Still Walking',
    bio: 'Ukrainian. Came through SF, fell in love with the line and the community. Still highlines. Her injury is in our archive too — she didn\'t stop either.',
    quote: '"Such a perfect night."',
    photo: null,
  },
  {
    name: 'T',
    role: 'Rigger',
    bio: '140ft lines at the Panhandle were T\'s standard. Rigged regularly at Cole & Fell. Quiet, consistent, showed up and put up big lines.',
    quote: null,
    photo: null,
  },
  {
    name: 'Ariel',
    role: 'Longlines',
    bio: 'Set up longlines at both the Panhandle and Dolores Park. Pushing line length when 80ft felt short.',
    quote: null,
    photo: null,
  },
];

const extendedFamily = [
  {
    name: 'Tarzen',
    from: 'Austin, Texas',
    title: 'The Grand Slacker of Austin',
    bio: 'Grandfather. Massage therapist. Experience creator. Shepherds Austin\'s slackline scene — rigs lines across bridges, rides longboards down parking garages. Little Chihuahua named Moca.',
    connection: 'Visited SF and slacked with the crew. His catchphrase: "I hope you have the best day ever."',
    link: 'https://youtube.com/watch?v=UimnK9DIxEw',
    linkLabel: 'Watch the Documentary',
    emoji: '🤙',
  },
  {
    name: 'Andy Lewis',
    from: 'Greenbrae, Marin County',
    title: 'Sketchy Andy',
    bio: 'Born in Santa Rosa, grew up in Greenbrae. Four-time slackline world champion (2008–2011) — the first-ever. Performed on Madonna\'s Super Bowl XLVI halftime show. SNL and Conan parodies followed.',
    connection: 'Bay Area native. Connected to the SF community from the beginning.',
    link: 'https://en.wikipedia.org/wiki/Andy_Lewis_(slackliner)',
    linkLabel: 'Wikipedia',
    emoji: '🏆',
  },
  {
    name: 'Alexander Schulz',
    from: 'Rosenheim, Germany',
    title: 'One Inch Dreams',
    bio: 'Born 1991. Multiple highline world record holder. Founded the One Inch Dreams collective in 2012. Crossed an active volcano on a highline — Mount Yasur, Vanuatu, April 2020.',
    connection: 'Late 2011: two-month trip in the western US. Walked 119m at Consumnes River Gorge, CA. Stayed with the SF Slackline crew.',
    link: null,
    linkLabel: null,
    emoji: '🌋',
  },
  {
    name: 'Lukas Irmler',
    from: 'Germany',
    title: '2km World Record',
    bio: 'Walked the longest highline in the world: 2 kilometers (August 2019). Guinness record for highest slackline walk at 2,500m between hot air balloons (November 2024).',
    connection: 'Stayed with the SF Slackline crew for several nights. World-class highliner who slept on our couches.',
    link: null,
    linkLabel: null,
    emoji: '🎈',
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
      <section className="relative bg-[#1A3A4A] py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/photos/nightline-2.jpg"
            alt="Nightline at Dolores Park"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-4">
            Where Have<br />You Been?
          </h1>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-xl leading-relaxed">
            The people who built SF Slackline. Some are still on the line.
            Some moved on. All of them shaped this thing.
          </p>
          <p className="text-[#C8A84E] text-sm font-light mt-4 italic">
            &ldquo;All we r missing is you!!!&rdquo;
          </p>
        </div>
      </section>

      {/* SF Crew */}
      <section className="bg-[#F5F0E0] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1A3A4A] mb-1">The SF Crew</h2>
          <p className="text-sm sm:text-base text-[#1A3A4A]/60 font-light mb-10">
            The people who showed up, rigged lines, and taught strangers to walk.
          </p>

          {/* Photo strip */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-10 rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src="/photos/memorial.jpg" alt="Memorial Day slacklining" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/photos/prideline.jpg" alt="Pride weekend slacklining" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image src="/photos/july4th.jpg" alt="July 4th slacklining" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            {sfCrew.map((person) => (
              <div key={person.name} className="p-5 sm:p-6 rounded-xl bg-white border border-[#1A3A4A]/10 hover:border-[#C8A84E]/40 transition-colors">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-black text-[#1A3A4A]">
                      {person.name}
                      {person.handle && <span className="text-[#1E6B7B] text-sm font-medium ml-2">{person.handle}</span>}
                    </h3>
                    <span className="text-xs text-[#C8A84E] font-semibold uppercase tracking-wider">{person.role}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-[#1A3A4A]/70 font-light mt-3 leading-relaxed">{person.bio}</p>
                {person.quote && (
                  <p className="text-sm text-[#1E6B7B] font-medium mt-3 italic border-l-2 border-[#C8A84E] pl-3">
                    {person.quote}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Also Mentioned */}
          <div className="mt-10 p-5 sm:p-6 rounded-xl bg-white/60 border border-[#1A3A4A]/5">
            <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-4">Also in the Feed</h3>
            <div className="space-y-2">
              {alsoMentioned.map((person) => (
                <div key={person.name} className="flex gap-3 items-start">
                  <span className="text-sm font-semibold text-[#1A3A4A] shrink-0">{person.name}</span>
                  <span className="text-sm text-[#1A3A4A]/50 font-light">{person.note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extended Family */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1A3A4A] mb-1">Extended Family</h2>
          <p className="text-sm sm:text-base text-gray-500 font-light mb-10">
            World-class walkers who passed through SF. Slept on couches. Rigged at our parks.
          </p>

          <div className="grid gap-6">
            {extendedFamily.map((person) => (
              <div key={person.name} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#F5F0E0]/60 to-white border border-[#C8A84E]/20">
                <div className="flex items-start gap-4">
                  <span className="text-3xl sm:text-4xl shrink-0">{person.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-display text-xl sm:text-2xl font-black text-[#1A3A4A]">{person.name}</h3>
                      <span className="text-xs text-[#C8A84E] font-semibold uppercase tracking-wider">{person.title}</span>
                    </div>
                    <p className="text-xs text-[#1E6B7B] font-medium mt-0.5">{person.from}</p>
                    <p className="text-sm sm:text-base text-[#1A3A4A]/70 font-light mt-3 leading-relaxed">{person.bio}</p>
                    <p className="text-sm text-[#1A3A4A]/90 font-medium mt-2 border-l-2 border-[#1E6B7B] pl-3 italic">
                      {person.connection}
                    </p>
                    {person.link && (
                      <a href={person.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-[#1E6B7B] font-semibold hover:text-[#1A3A4A] transition-colors">
                        {person.linkLabel} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="grid grid-cols-2 sm:grid-cols-4">
        <div className="relative aspect-square">
          <Image src="/photos/highline.jpg" alt="Highline" fill className="object-cover" />
        </div>
        <div className="relative aspect-square">
          <Image src="/photos/ocean-beach.jpg" alt="Ocean Beach slackline" fill className="object-cover" />
        </div>
        <div className="relative aspect-square">
          <Image src="/photos/rooftop.jpg" alt="Rooftop slackline" fill className="object-cover" />
        </div>
        <div className="relative aspect-square">
          <Image src="/photos/panhandle-170.jpg" alt="170ft at the Panhandle" fill className="object-cover" />
        </div>
      </section>

      {/* Friends & Partners */}
      <section className="bg-[#1A3A4A] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-4xl font-black text-white mb-2">Friends &amp; Partners</h2>
          <p className="text-white/50 text-sm font-light mb-8">
            The people and orgs keeping the slackline world connected.
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-display text-xl sm:text-2xl font-black text-[#C8A84E] mb-2">Balance Community</h3>
            <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
              The online hub for slackliners since the early days. Started as a forum and community resource,
              now primarily a gear retailer. Still the best place to buy webbing, hardware, and tree protection
              in the US. If you need slackline-specific gear, this is where the community buys it.
            </p>
            <a
              href="https://balancecommunity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 bg-[#C8A84E] text-[#1A3A4A] px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              balancecommunity.com &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6B7B] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-3">All we r missing is you</h2>
          <p className="text-base font-light text-white/70 mb-6 max-w-md mx-auto">
            The community is still here. The lines still go up. Come out.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/spots"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/events"
              className="inline-block border border-white/30 text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
