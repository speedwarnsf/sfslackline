'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from '@/components/Lightbox';

/*
 * EVENTS — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * Historical events from @sfslackline tweets (2011–2018)
 * Photos matched to events via EXIF data
 * No fabricated content — only verified sources.
 */

/* ── Photo-matched events ── */
const featuredEvents = [
  {
    date: 'Jun 25–26, 2011',
    title: 'Pride Weekend Lines',
    type: 'Session',
    photo: '/photos/prideline.jpg',
    quote: null,
    description: 'Slacklines up during SF Pride. The parks were full, the lines were full, the sun was out.',
    source: 'Tweet + photos (MS690 camera)',
  },
  {
    date: 'Dec 4–5, 2011',
    title: 'Ocean Beach / Fort Funston',
    type: 'Session',
    photo: '/photos/ocean-beach.jpg',
    quote: null,
    description: '150ft line over sand, south of the hang gliders. Pilings as anchors. One of the most unique setups the crew ever did.',
    source: 'Tweet Dec 2011 + EXIF GPS: 37.7748, -122.4472',
  },
  {
    date: 'Oct 12, 2010',
    title: 'Nightline at Dolores Park',
    type: 'Session',
    photo: '/photos/nightline-2.jpg',
    quote: '"Line is down. Moon is up."',
    description: 'LED-lit lines at the palms after dark. GPS: 37.7593, -122.4260. These sessions became a ritual — showing up after sundown, stringing lights, walking by moonlight.',
    source: 'EXIF Oct 2010, iPhone GPS',
  },
  {
    date: 'Feb 18, 2012',
    title: 'First Highline Session',
    type: 'Session',
    photo: '/photos/highline.jpg',
    quote: null,
    description: 'The first documented highline photos in the SF Slackline archive. Shot on a Canon EOS-1D Mark IV. The crew was pushing into new territory.',
    source: 'EXIF Feb 18, 2012',
  },
];

const historicalEvents = [
  {
    date: 'Sep 8, 2012',
    title: 'SlackDay at MLK Park, Sausalito',
    type: 'Festival',
    quote: '"SlackDay in MLK park!! 30+ confirmed."',
    description: 'The biggest single-day gathering. Multiple lines, all levels, all day in Sausalito. Coloma St & Olima St.',
    source: 'Tweet Sep 7, 2012',
  },
  {
    date: 'Oct 21, 2012',
    title: 'Civic Center Slacklining Festival',
    type: 'Festival',
    quote: null,
    description: 'Public slackline demonstration and festival at Civic Center. Bringing slacklining to downtown SF.',
    source: 'Tweet Oct 2012',
  },
  {
    date: 'Sep 22, 2013',
    title: 'Equinox Line',
    type: 'Session',
    quote: '"Equinox line this sunday!! 135\' at panhandle and cole. Celebrate perfect balance with us."',
    description: 'Perfect balance on the equinox. 135 feet of webbing. Poetry.',
    source: 'Tweet Sep 22, 2013',
  },
  {
    date: 'Sep 30, 2011',
    title: 'Hardly Strictly Bluegrass',
    type: 'Session',
    quote: null,
    description: 'Lines up during Hardly Strictly Bluegrass in Golden Gate Park. Music and slacklining. NZ was there.',
    source: 'Tweet Sep 30, 2011',
  },
  {
    date: 'Aug 27, 2011',
    title: 'Burning Man Slackline Camp',
    type: 'Trip',
    quote: null,
    description: 'SF Slackline crew at Burning Man. Charlie rigged. Lines in the desert.',
    source: 'Tweet Aug 2011',
  },
  {
    date: 'Nov 11, 2011',
    title: '11.11.11 One Day on Earth',
    type: 'Film',
    quote: null,
    description: 'Filming at Dolores Park for the One Day on Earth global documentary project. Slacklining as San Francisco\'s contribution.',
    source: 'Tweet Nov 2011',
  },
  {
    date: 'Oct 6, 2013',
    title: 'Waterlines at Islais Creek',
    type: 'Session',
    quote: '"Water Lines going up at islais park in dog patch."',
    description: '71ft waterline in Dogpatch. A different kind of balance when the fall is into the creek.',
    source: 'Tweet Oct 6, 2013',
  },
  {
    date: 'Nov 24, 2013',
    title: 'Fort Miley',
    type: 'Session',
    quote: '"Ft Miley line up one high and one low!"',
    description: 'With Dat. Lands End area. The terrain there doesn\'t forgive.',
    source: 'Tweet Nov 24, 2013',
  },
  {
    date: 'Oct 1, 2011',
    title: 'Lake Merritt, Oakland',
    type: 'Trip',
    quote: '"4 lines up at lake merrit in oakland. Field tripping in the east bay."',
    description: 'The SF crew goes across the bay. Four lines at once.',
    source: 'Tweet Oct 1, 2011',
  },
  {
    date: 'Feb 1, 2014',
    title: 'Dusty & Tamara\'s Wedding',
    type: 'Community',
    quote: '"First official kiss as man and wife!"',
    description: 'Not a slackline event per se, but the whole community was there.',
    source: 'Tweet Feb 1, 2014',
  },
];

const typeColors: Record<string, string> = {
  Festival: 'bg-[#C8A84E]/10 text-[#C8A84E] border-[#C8A84E]/20',
  Session: 'bg-[#1E6B7B]/10 text-[#1E6B7B] border-[#1E6B7B]/20',
  Trip: 'bg-[#4A9BAA]/10 text-[#4A9BAA] border-[#4A9BAA]/20',
  Film: 'bg-[#1A3A4A]/10 text-[#1A3A4A] border-[#1A3A4A]/20',
  Community: 'bg-[#C8A84E]/10 text-[#C8A84E] border-[#C8A84E]/20',
  Policy: 'bg-[#C8A84E]/10 text-[#C8A84E] border-[#C8A84E]/20',
};

const recurringPatterns = [
  {
    pattern: 'Sundays at Dolores',
    quote: '"Line goin up in 15." "Lines up. Sun. Come out."',
    note: 'Sundays at Dolores was the thing. Almost every weekend 2010–2014, weather permitting. The palms at Cumberland & Dolores. Dat would rig, someone would bring tunes, and the whole crew would show. DJs in the palms. Sun rasta sun.',
  },
  {
    pattern: 'Nightline Sessions',
    quote: '"Line is down. Moon is up." "Such a perfect night." —Anya',
    note: 'LED-lit lines after dark at the palms. Started in 2010, documented by iPhone GPS at 37.7593, -122.4260. These weren\'t planned events — someone would text, lines would go up, and people would walk by moonlight.',
  },
  {
    pattern: 'Panhandle Longline Days',
    quote: '"140\' at panhandle and cole." "195 at cole."',
    note: 'Cole & Fell became longline HQ. T, Ariel, Mac, and others rigged 80–195ft. The panhandle had the tree spacing for serious lines. Regular sessions 2011–2013.',
  },
  {
    pattern: 'Beach Days',
    quote: null,
    note: 'Ocean Beach, Fort Funston — 150ft lines over sand south of the hang gliders, using pilings as anchors. Different energy than the parks. Wind, salt, no crowd. Just the line and the Pacific.',
  },
];

function EventPhoto({ src, alt }: { src: string; alt: string }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="relative h-64 sm:h-80 bg-gray-100 cursor-pointer" onClick={() => setShow(true)}>
        <Image src={src} alt={alt} fill className="object-cover hover:scale-[1.02] transition-transform duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
      </div>
      {show && <Lightbox images={[{ src, alt, caption: alt }]} index={0} onClose={() => setShow(false)} />}
    </>
  );
}

export default function EventsPage() {
  return (
    <div className="mt-14 font-body">
      {/* ── Hero ── */}
      <section className="bg-[#1A3A4A] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-[1.05] mb-4">
            Line Goin Up<br />in 15
          </h1>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-xl leading-relaxed">
            Real events from 360 @sfslackline tweets, 2011–2018.
            Real dates. Real quotes. Real gatherings.
            849 photos across 57 gallery albums — this is what happened.
          </p>
        </div>
      </section>

      {/* ── Featured events with photos ── */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-2">Moments</h2>
          <p className="text-sm text-gray-400 font-light mb-10">Photo-documented events from the archive</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <div key={event.title} className="group  overflow-hidden border border-gray-100 hover:border-[#C8A84E]/30 transition-colors">
                <EventPhoto src={event.photo} alt={event.title} />
                <div className="p-5">
                  <span className="text-[10px] font-mono text-[#C8A84E] uppercase tracking-wider">{event.date}</span>
                  <h3 className="font-display text-lg font-black text-[#1A3A4A] mt-1 mb-1">{event.title}</h3>
                  {event.quote && (
                    <p className="text-sm italic text-[#1E6B7B] mb-2">{event.quote}</p>
                  )}
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{event.description}</p>
                  <p className="text-[10px] text-gray-400 mt-3">Source: {event.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Rhythms — Recurring Patterns ── */}
      <section className="bg-[#F5F0E0] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-2">The Rhythms</h2>
          <p className="text-sm text-[#1A3A4A]/50 font-light mb-8">The patterns that made this community — sourced from tweets</p>

          <div className="grid sm:grid-cols-2 gap-5">
            {recurringPatterns.map((r) => (
              <div key={r.pattern} className="bg-white  p-5 border border-[#C8A84E]/10">
                <h3 className="font-display text-base font-black text-[#1A3A4A] mb-2">{r.pattern}</h3>
                {r.quote && (
                  <p className="text-sm italic text-[#1E6B7B] mb-2 leading-relaxed">{r.quote}</p>
                )}
                <p className="text-sm text-gray-600 font-light leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2012: The Policy ── */}
      <section className="bg-[#FAF8F2] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono text-[#C8A84E] uppercase tracking-wider">2012</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mt-1 mb-4">
              The Year We Got a Policy
            </h2>
            <div className="space-y-4 text-sm text-gray-600 font-light leading-relaxed">
              <p>
                By mid-2012, enforcement was escalating. The tweets tell the story:
              </p>
              <blockquote className="border-l-2 border-[#C8A84E] pl-4 py-1 text-[#1A3A4A] italic">
                &ldquo;Getting shut down. We need to do something about this.&rdquo;
                <span className="block text-[10px] text-gray-400 not-italic mt-1">— @sfslackline, Jun 2, 2012</span>
              </blockquote>
              <blockquote className="border-l-2 border-[#C8A84E] pl-4 py-1 text-[#1A3A4A] italic">
                &ldquo;Scratch that. Douchebag complained and Park Police say NO.&rdquo;
                <span className="block text-[10px] text-gray-400 not-italic mt-1">— @sfslackline, Sep 30, 2012</span>
              </blockquote>
              <blockquote className="border-l-2 border-[#C8A84E] pl-4 py-1 text-[#1A3A4A] italic">
                &ldquo;Waterline up walked and shutdown by nps rangers.&rdquo;
                <span className="block text-[10px] text-gray-400 not-italic mt-1">— @sfslackline, Sep 30, 2012</span>
              </blockquote>
              <p>
                So the community did something about it. SF Rec & Park created an official slacklining policy —
                tree padding required, max 80 feet, one line per meadow, specific exclusion zones.
                It wasn&apos;t perfect, but it was something. For the first time, slacklining was officially allowed in SF parks.
              </p>
              <p>
                That policy page at sfrecpark.org/slacklining-policy/ is now a 404. Whether it changed, was revoked, or just got lost in a website redesign — nobody knows.
                That&apos;s worth investigating.
              </p>
            </div>
            <Link
              href="/safety"
              className="inline-block mt-6 text-xs text-[#1E6B7B] font-semibold hover:text-[#C8A84E] transition-colors"
            >
              Read the full policy history →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Event Archive ── */}
      <section className="bg-[#F5F0E0]/50 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Event Archive</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Every documented gathering from @sfslackline, 2011–2014</p>

          <div className="space-y-3">
            {historicalEvents.map((event) => (
              <div key={event.title} className="bg-white p-5  border border-gray-100 hover:border-[#C8A84E]/20 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="sm:w-28 shrink-0">
                    <span className="text-xs font-mono text-[#C8A84E]">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm text-[#1A3A4A]">{event.title}</h3>
                      <span className={`text-[10px] px-1.5 py-0.5 border ${typeColors[event.type] || ''}`}>{event.type}</span>
                    </div>
                    {event.quote && (
                      <p className="text-sm italic text-[#1E6B7B] mb-1">{event.quote}</p>
                    )}
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{event.description}</p>
                    <p className="text-[10px] text-gray-400 mt-2">Source: {event.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revival ── */}
      <section className="bg-[#1A3A4A] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[10px] font-mono text-[#C8A84E] uppercase tracking-wider">Nov 7, 2018</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              The Last Tweet
            </h2>
            <blockquote className="text-white/80 text-lg sm:text-xl italic leading-relaxed mb-6">
              &ldquo;SF Slackers, still at it! Three lines up.&rdquo;
            </blockquote>
            <p className="text-white/40 text-xs mb-8">5 likes. Then silence.</p>

            <div className="bg-white/5 border border-white/10  p-6 sm:p-8 text-left">
              <h3 className="font-display text-xl font-black text-[#C8A84E] mb-3">Bring It Back</h3>
              <div className="space-y-3 text-sm text-white/60 font-light leading-relaxed">
                <p>
                  The community went quiet after 2018. People moved, life happened, the tweets stopped.
                  But the trees at Dolores are still there. The palms haven&apos;t gone anywhere.
                  Cole & Fell still has the spacing for a 140-footer.
                </p>
                <p>
                  This page exists because this history matters — and because it doesn&apos;t have to be history.
                  If you&apos;re in SF with a line and some tree pads, you&apos;re already most of the way there.
                </p>
                <p className="text-white/80">
                  All we r missing is you.
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-center mt-8">
              <Link
                href="/spots"
                className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
              >
                Find a Spot
              </Link>
              <Link
                href="/safety"
                className="inline-block border border-white/30 text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
              >
                Know the Rules
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
