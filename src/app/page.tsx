'use client';

import Image from 'next/image';
import Link from 'next/link';
import Lightbox, { useLightbox } from '@/components/Lightbox';

/*
 * ALL DATA FROM: SF_SLACKLINE_VOICE_AND_DATA.md
 * Every fact on this page has a source: tweet date, EXIF metadata, or archived policy.
 */

// Full photo collection with real metadata
const allPhotos = [
  { src: '/photos/highline-2.jpg', caption: 'First highline · Feb 18, 2012 · Canon EOS-1D Mark IV', date: 'Feb 2012', featured: true },
  { src: '/photos/prideline.jpg', caption: 'Pride weekend · Jun 25, 2011 · MS690', date: 'Jun 2011', featured: true },
  { src: '/photos/ocean-beach.jpg', caption: 'Ocean Beach · 150ft over sand · Dec 6, 2011', date: 'Dec 2011', featured: true },
  { src: '/photos/nightline-2.jpg', caption: 'Nightline at Dolores Park · Oct 12, 2010 · iPhone GPS: 37.7593, -122.4260', date: 'Oct 2010', featured: true },
  { src: '/photos/rainbow.jpg', caption: 'Rainbow line · Aug 8, 2010 · Nikon D90', date: 'Aug 2010' },
  { src: '/photos/panhandle-170.jpg', caption: '170ft at the Panhandle · Nov 27, 2011', date: 'Nov 2011', featured: true },
  { src: '/photos/july4th.jpg', caption: 'July 4th weekend · Jul 2, 2011 · Nikon D90', date: 'Jul 2011' },
  { src: '/photos/highline.jpg', caption: 'Highline · Feb 18, 2012 · Canon 1D Mark IV', date: 'Feb 2012' },
  { src: '/photos/ocean-beach-2.jpg', caption: 'Ocean Beach · 150ft line · Dec 5, 2011', date: 'Dec 2011' },
  { src: '/photos/memorial.jpg', caption: 'Memorial Day · May 30, 2011 · Nikon D90', date: 'May 2011' },
  { src: '/photos/rooftop.jpg', caption: 'SF rooftop session · Feb 24, 2012 · iPhone 4 · GPS: 37.7868, -122.4038', date: 'Feb 2012' },
  { src: '/photos/yosemite.jpg', caption: 'Yosemite · Aug 10, 2010 · Canon PowerShot G11', date: 'Aug 2010' },
  { src: '/photos/nightline-3.jpg', caption: 'Nightline at Dolores Park', date: '2011' },
  { src: '/photos/nightline.jpg', caption: 'Nightline at the palms · Dolores Park', date: '2011' },
  { src: '/photos/sausalito.jpg', caption: 'SlackDay festival · MLK Park, Sausalito · Sep 8, 2012 · 30+ people', date: 'Sep 2012' },
  { src: '/photos/prideline-2.jpg', caption: 'Pride weekend · Jun 25, 2011', date: 'Jun 2011' },
  { src: '/photos/big-sur.jpg', caption: 'Big Sur', date: '2011' },
  { src: '/photos/big-sur-2.jpg', caption: 'Big Sur', date: '2011' },
  { src: '/photos/0-0.jpg', caption: 'Memorial Day · May 30, 2011', date: 'May 2011' },
  { src: '/photos/april2011.jpg', caption: 'April 2011', date: 'Apr 2011' },
  { src: '/photos/panhandle-nemesis.jpg', caption: 'Panhandle nemesis line', date: '2012' },
];

// Tweets that define the voice
const tweets = [
  { text: 'Lines up. Sun hot. Come play.', date: '2011' },
  { text: 'A little rain wont teather us to the earth. But it reminds us that things fall.', date: 'Mar 13, 2011' },
  { text: 'Getting shut down. We need to do something about this.', date: 'Jun 2, 2012' },
  { text: 'Two new personal bests today and two new friends.', date: '2011' },
  { text: 'SF Slackers, still at it! Three lines up.', date: 'Nov 7, 2018' },
];

export default function Home() {
  const lightbox = useLightbox(
    allPhotos.map((p) => ({
      src: p.src,
      alt: p.caption,
      caption: p.caption,
    }))
  );

  const featured = allPhotos.filter((p) => p.featured);
  const remaining = allPhotos.filter((p) => !p.featured);

  return (
    <div className="font-body bg-[#F5F0E0]">
      {lightbox.index >= 0 && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={lightbox.close} />
      )}

      {/* ===== HERO — full bleed photo ===== */}
      <section className="relative h-[85vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/photos/highline-2.jpg"
          alt="Canon EOS-1D Mark IV · Feb 18, 2012"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pb-10 sm:pb-16">
          <p className="text-[#C8A84E] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-3">San Francisco · Since 2009</p>
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-black text-white leading-[0.9] mb-4">
            SF<br />Slackline
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light max-w-md mb-6 leading-relaxed">
            849 photos. 360 tweets. 57 albums.<br />
            15 years of lines between trees.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/spots"
              className="bg-[#C8A84E] text-[#1A3A4A] px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#D4B85E] transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/history"
              className="border border-white/40 text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PHOTOS — big, uncropped, all clickable ===== */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1A3A4A] mb-2">The Photos</h2>
          <p className="text-[#1E6B7B] text-sm font-light mb-10">
            Shot on Nikon D90s, Canon 1D Mark IVs, and a lot of iPhones. Every one clickable. Every one real.
          </p>

          {/* Featured photos — large, masonry-ish */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {featured.map((photo, i) => (
              <div
                key={photo.src}
                className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                  i === 0 ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
                onClick={() => lightbox.open(allPhotos.indexOf(photo))}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  sizes={i === 0 ? '100vw' : '50vw'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining photos — medium grid, all clickable */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {remaining.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => lightbox.open(allPhotos.indexOf(photo))}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-xs font-medium drop-shadow-lg">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-[#1A3A4A]/40 text-xs mt-8 tracking-wide">
            21 of 849 photos · <a href="/photos" className="underline hover:text-[#1E6B7B]">View full gallery</a> · <a href="https://sfslackline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#1E6B7B]">Original archive</a>
          </p>
        </div>
      </section>

      {/* ===== TWEET VOICE — raw, unpolished ===== */}
      <section className="bg-[#1A3A4A] py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="space-y-8">
            {tweets.map((t, i) => (
              <div key={i} className={`${i === 0 ? 'pl-0' : 'pl-4 sm:pl-12'}`}>
                <p className="text-white text-xl sm:text-2xl md:text-3xl font-light italic leading-snug">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="text-[#C8A84E] text-xs mt-2 tracking-wider">
                  @sfslackline · {t.date}
                  {i === tweets.length - 1 && <span className="text-white/30 ml-2">— final tweet</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS — loose, magazine-style ===== */}
      <section className="py-16 sm:py-20 bg-[#FAF8F2]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/spots',
                label: 'Spots',
                desc: '13 verified locations with GPS from EXIF and tweets',
                photo: '/photos/ocean-beach-2.jpg',
              },
              {
                href: '/safety',
                label: 'Safety & Law',
                desc: 'The policy vanished. The 404 IS the story.',
                photo: '/photos/panhandle-nemesis.jpg',
              },
              {
                href: '/community',
                label: 'Community',
                desc: 'The SF crew, extended family, and friends',
                photo: '/photos/sausalito.jpg',
              },
              {
                href: '/history',
                label: 'History',
                desc: '2009–2018. Told through tweets and photos.',
                photo: '/photos/memorial.jpg',
              },
              {
                href: '/learn',
                label: 'Learn',
                desc: 'From first step to highline. Real progression.',
                photo: '/photos/rainbow.jpg',
              },
              {
                href: '/gear',
                label: 'Gear',
                desc: '$50 to start. No gatekeeping.',
                photo: '/photos/rooftop.jpg',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative overflow-hidden rounded-xl aspect-[3/2] flex items-end"
              >
                <Image
                  src={link.photo}
                  alt={link.label}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A]/90 via-[#1A3A4A]/20 to-transparent" />
                <div className="relative z-10 p-5">
                  <h3 className="font-display text-2xl font-black text-white mb-1">{link.label}</h3>
                  <p className="text-white/70 text-sm font-light">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR — casual, not corporate ===== */}
      <section className="bg-[#1E6B7B] py-8">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-wrap justify-center gap-8 sm:gap-16 text-center">
          {[
            { n: '849', l: 'photos' },
            { n: '57', l: 'albums' },
            { n: '360', l: 'tweets' },
            { n: '15+', l: 'years' },
            { n: '13', l: 'spots' },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-3xl sm:text-4xl font-black text-white">{s.n}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-[#F5F0E0] py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[#1A3A4A] mb-3">
            All we r missing is you.
          </h2>
          <p className="text-[#1A3A4A]/60 text-sm font-light mb-8 max-w-md mx-auto">
            The last tweet was November 2018. The lines are still there. The trees are still there. Maybe you are too.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/board"
              className="bg-[#1A3A4A] text-[#C8A84E] px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#0F2A36] transition-colors"
            >
              Community Board
            </Link>
            <Link
              href="/events"
              className="border-2 border-[#1A3A4A] text-[#1A3A4A] px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#1A3A4A] hover:text-white transition-colors"
            >
              Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
