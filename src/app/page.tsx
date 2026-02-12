'use client';

import Image from 'next/image';
import Link from 'next/link';
import Lightbox, { useLightbox } from '@/components/Lightbox';
import YouTubeEmbed from '@/components/YouTubeEmbed';

/*
 * ALL DATA FROM: SF_SLACKLINE_VOICE_AND_DATA.md
 * Every fact on this page has a source: tweet date, EXIF metadata, or archived policy.
 */

// Verified locations — from tweets + EXIF GPS
const spots = [
  {
    name: 'Dolores Park',
    aka: '"The Palms" · Cumberland & Dolores',
    gps: '37.7593, -122.4260',
    gpsSource: 'nightline-2.jpg EXIF',
    image: '/photos/nightline-2.jpg',
    tweetCount: '200+',
    years: '2010–2018',
    note: 'Primary spot since 2009. Near J Church line.',
  },
  {
    name: 'The Panhandle',
    aka: 'Cole & Fell',
    image: '/photos/panhandle-170.jpg',
    tweetCount: '50+',
    years: '2011–2016',
    note: 'Longline territory. 80–200ft. "cole in the panhandle."',
  },
  {
    name: 'Ocean Beach',
    aka: 'Fort Funston · South of hang gliders',
    gps: '37.7748, -122.4472',
    gpsSource: 'ocean-beach.jpg EXIF',
    image: '/photos/ocean-beach.jpg',
    tweetCount: '5+',
    years: '2011',
    note: '150ft line over sand. Pilings.',
  },
];

// Timeline entries — from verified tweets
const timeline = [
  { year: '2009', event: 'San Francisco Slacklining Association founded. sfslackline.org goes live.' },
  { year: '2010', event: 'Twitter account created (Aug). First nightlines at Dolores Park. Yosemite trips.' },
  { year: '2011', event: 'Peak activity — almost daily sessions. 849 photos. Pride lines. Burning Man. Ocean Beach 150ft. SFPD encounters begin.' },
  { year: '2012', event: 'Panhandle longlines (186ft). First highline. SlackDay Sausalito (30+ people). Civic Center festival. Park Police shutdowns escalate.' },
  { year: '2013', event: 'Waterlines at Islais Creek. Fort Miley. Equinox celebration. 140ft standard at Cole.' },
  { year: '2014', event: 'Dusty and Tamara marry. Activity shifts to Precita Park. Posting slows.' },
  { year: '2016', event: 'Sporadic — 3 tweets. Lines at Dolores, Duboce, GG Park.' },
  { year: '2018', event: 'Final tweet Nov 7: "SF Slackers, still at it! Three lines up."' },
];

// Enforcement incidents — from verified tweets
const incidents = [
  { date: 'Feb 2011', what: '"Jst put on a little show for the sfpd... Nerve wracking!"' },
  { date: 'Jun 2011', what: '"Trucks rolled up with fence. Lines dwn." Dolores Park renovation forces relocation.' },
  { date: 'Jun 2012', what: '"Getting shut down. We need to do something about this."' },
  { date: 'Sep 2012', what: '"Scratch that. Douchebag complained and Park Police say NO." NPS rangers shut down waterline same day.' },
];

// Real tutorial videos — verified YouTube IDs
const tutorials = [
  { id: 'MdDzz5H2VQA', title: 'Setup & Basics' },
  { id: 'REvz4jv1YZQ', title: 'Walking' },
  { id: 'QCQLJsSm_ec', title: 'Turning Around' },
];

const archivePhotos = [
  { f: 'prideline.jpg', d: 'Jun 25, 2011', c: 'MS690' },
  { f: 'rainbow.jpg', d: 'Aug 8, 2010', c: 'Nikon D90' },
  { f: 'july4th.jpg', d: 'Jul 2, 2011', c: 'Nikon D90' },
  { f: 'highline.jpg', d: 'Feb 18, 2012', c: 'Canon 1D Mark IV' },
  { f: 'ocean-beach-2.jpg', d: 'Dec 5, 2011', c: '' },
  { f: 'rooftop.jpg', d: 'Feb 24, 2012', c: 'iPhone 4' },
  { f: 'memorial.jpg', d: 'May 30, 2011', c: 'Nikon D90' },
  { f: 'yosemite.jpg', d: 'Aug 10, 2010', c: 'Canon G11' },
];

export default function Home() {
  const lightbox = useLightbox(
    archivePhotos.map((p) => ({
      src: `/photos/${p.f}`,
      alt: `${p.d}${p.c ? ` · ${p.c}` : ''}`,
      caption: `${p.d}${p.c ? ` · ${p.c}` : ''}`,
    }))
  );

  return (
    <div className="font-body">
      {lightbox.index >= 0 && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={lightbox.close} />
      )}

      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden mt-14">
        <Image
          src="/photos/highline-2.jpg"
          alt="Canon EOS-1D Mark IV · Feb 18, 2012"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A] via-[#1A3A4A]/40 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pb-8 sm:pb-12">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] mb-3">
            Lines up.<br />Sun.
          </h1>
          <p className="text-white/70 text-sm sm:text-base font-light max-w-sm mb-5">
            SF&apos;s slackline community since 2009. 360 tweets. 849 photos. 57 albums. Real history.
          </p>
          <div className="flex gap-3">
            <Link
              href="/spots"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/learn"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Learn
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SPOTS FROM REAL DATA ===== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Where We Slack</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Locations from tweets + EXIF GPS metadata</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {spots.map((spot) => (
              <div key={spot.name} className="rounded-xl overflow-hidden border border-gray-100">
                <div className="relative h-40">
                  <Image src={spot.image} alt={spot.name} fill className="object-cover" />
                  <span className="absolute top-2 right-2 bg-[#1A3A4A]/90 text-[#C8A84E] text-[10px] font-bold px-2 py-0.5 rounded">
                    {spot.tweetCount} tweets
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-[#1A3A4A]">{spot.name}</h3>
                  <p className="text-xs text-[#1E6B7B] font-medium mt-0.5">{spot.aka}</p>
                  <p className="text-xs text-gray-500 font-light mt-1">{spot.note}</p>
                  {spot.gps && (
                    <p className="text-[10px] text-gray-400 font-mono mt-2">
                      📍 {spot.gps} <span className="text-gray-300">· {spot.gpsSource}</span>
                    </p>
                  )}
                  <p className="text-[10px] text-gray-400 mt-1">Active: {spot.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ENFORCEMENT ===== */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-1">Know Before You Rig</h2>
          <p className="text-sm text-white/50 font-light mb-8">Real enforcement history from @sfslackline tweets</p>
          <div className="space-y-4">
            {incidents.map((inc, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-[#C8A84E] text-xs font-mono whitespace-nowrap mt-0.5">{inc.date}</span>
                <p className="text-white/80 text-sm font-light italic">{inc.what}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-white/60 font-light">
              <span className="text-[#C8A84E] font-semibold">SF Rec & Park had an official slacklining policy</span> — tree padding required, max 80ft, one per park, banned in 5 locations. That policy page is now a 404. <Link href="/learn" className="text-[#C8A84E] underline">Read the full archived policy →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Timeline</h2>
          <p className="text-sm text-gray-500 font-light mb-8">From tweets, photos, and the original site</p>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-4 items-start">
                <span className="font-display text-xl font-black text-[#C8A84E] w-14 shrink-0">{t.year}</span>
                <p className="text-sm text-gray-700 font-light pt-1">{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO GRID ===== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">From the Archive</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Dates and cameras from EXIF metadata</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {archivePhotos.map((p, i) => (
              <div
                key={p.f}
                className="rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => lightbox.open(i)}
              >
                <div className="relative h-28 sm:h-36">
                  <Image src={`/photos/${p.f}`} alt={`${p.d}${p.c ? ` · ${p.c}` : ''}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-2 bg-[#F2F4F6]">
                  <p className="text-xs font-medium text-[#1A3A4A]">{p.d}</p>
                  {p.c && <p className="text-[10px] text-gray-400">{p.c}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-6">
            849 photos across 57 albums on the original sfslackline.org (2009–2013)
          </p>
        </div>
      </section>

      {/* ===== LEARN ===== */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Learn to Slackline</h2>
          <p className="text-sm text-gray-500 font-light mb-8">NWslackline.org tutorial series · YouTube</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tutorials.map((v) => (
              <div key={v.id} className="rounded-xl overflow-hidden bg-white shadow-sm">
                <YouTubeEmbed id={v.id} title={v.title} />
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-[#1A3A4A]">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY VOICE ===== */}
      <section className="bg-[#1A3A4A] py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-lg font-black text-[#C8A84E] mb-6 uppercase tracking-wider text-center">From the Feed</h2>
          <div className="space-y-4 text-center">
            {[
              { text: '"Lines up. Sun hot. Come play."', date: 'Dolores Park, 2011' },
              { text: '"A little rain wont teather us to the earth. But it reminds us that things fall."', date: 'Mar 13, 2011' },
              { text: '"Getting shut down. We need to do something about this."', date: 'Jun 2, 2012' },
              { text: '"SF Slackers, still at it! Three lines up."', date: 'Nov 7, 2018 — final tweet' },
            ].map((q, i) => (
              <div key={i}>
                <p className="text-white/80 text-sm sm:text-base italic font-light">{q.text}</p>
                <p className="text-[10px] text-white/30 mt-1">@sfslackline · {q.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#1E6B7B] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="text-white">
            <h2 className="font-display text-xl font-black mb-1">This site is alive again.</h2>
            <p className="text-sm font-light text-white/80">Preserving 15+ years of SF slackline history. Built from real data.</p>
          </div>
          <a
            href="https://sfslackline.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors whitespace-nowrap"
          >
            Visit Original Site
          </a>
        </div>
      </section>
    </div>
  );
}
