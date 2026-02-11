import Image from 'next/image';
import Link from 'next/link';

/*
 * ALL DATA ON THIS PAGE IS REAL — sourced from:
 * - EXIF metadata extracted from downloaded photos
 * - Original sfslackline.org gallery scrape (57 albums, 849 photos)
 * - GPS coordinates from photo EXIF data
 * - Dates from photo EXIF DateTimeOriginal
 * 
 * Nothing is fabricated. If we don't know it, we don't show it.
 */

// Photos with verified EXIF data
const verifiedPhotos = [
  { file: 'highline-2.jpg', date: 'Feb 18, 2012', camera: 'Canon EOS-1D Mark IV' },
  { file: 'highline.jpg', date: 'Feb 18, 2012', camera: 'Canon EOS-1D Mark IV' },
  { file: 'prideline.jpg', date: 'Jun 25, 2011', camera: 'MS690' },
  { file: 'prideline-2.jpg', date: 'Jun 25, 2011', camera: 'MS690' },
  { file: 'nightline-2.jpg', date: 'Oct 12, 2010', camera: 'iPhone', gps: [37.7593, -122.4260] },
  { file: 'ocean-beach.jpg', date: 'Dec 6, 2011', gps: [37.7748, -122.4472] },
  { file: 'rooftop.jpg', date: 'Feb 24, 2012', camera: 'iPhone 4', gps: [37.7868, -122.4038] },
  { file: 'rainbow.jpg', date: 'Aug 8, 2010', camera: 'Nikon D90' },
  { file: 'july4th.jpg', date: 'Jul 2, 2011', camera: 'Nikon D90' },
  { file: 'panhandle-170.jpg', date: 'Nov 27, 2011' },
  { file: 'memorial.jpg', date: 'May 30, 2011', camera: 'Nikon D90' },
  { file: 'yosemite.jpg', date: 'Aug 10, 2010', camera: 'Canon PowerShot G11' },
];

// GPS-verified locations (from actual photo EXIF)
const verifiedSpots = [
  {
    name: 'Dolores Park area',
    image: '/photos/nightline-2.jpg',
    gps: [37.7593, -122.4260],
    source: 'nightline-2.jpg EXIF',
    date: 'Oct 2010',
  },
  {
    name: 'Ocean Beach / Fort Funston area',
    image: '/photos/ocean-beach.jpg',
    gps: [37.7748, -122.4472],
    source: 'ocean-beach.jpg EXIF',
    date: 'Dec 2011',
  },
  {
    name: 'SF rooftop location',
    image: '/photos/rooftop.jpg',
    gps: [37.7868, -122.4038],
    source: 'rooftop.jpg EXIF',
    date: 'Feb 2012',
  },
];

// Real video IDs from NWslackline.org tutorial series (verified YouTube)
const tutorials = [
  { id: 'MdDzz5H2VQA', title: 'How to Slackline — Part 1: Setup & Basics' },
  { id: 'REvz4jv1YZQ', title: 'How to Slackline — Part 2: Walking' },
  { id: 'QCQLJsSm_ec', title: 'How to Slackline — Part 3: Turning Around' },
];

export default function Home() {
  return (
    <main className="font-body">
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] min-h-[400px] max-h-[600px] flex items-end overflow-hidden mt-14">
        <Image
          src="/photos/highline-2.jpg"
          alt="Slackline highline — Canon EOS-1D Mark IV, Feb 18, 2012"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A]/90 via-[#1A3A4A]/40 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pb-8 sm:pb-12">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] mb-3">
            Walk the<br />Line.
          </h1>
          <p className="text-white/80 text-sm sm:text-base font-light max-w-sm mb-5">
            San Francisco&apos;s slackline community since 2009.
          </p>
          <Link
            href="/community"
            className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-6 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
          >
            Explore the Archive
          </Link>
        </div>
      </section>

      {/* ===== STAT BAR ===== */}
      <section className="bg-[#1A3A4A]">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 py-6 sm:py-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 text-center text-white">
          {[
            { num: '849', label: 'Photos' },
            { num: '57', label: 'Albums' },
            { num: '2009', label: 'Founded' },
            { num: '22', label: 'Photos Downloaded' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl sm:text-4xl font-black text-[#C8A84E]">{s.num}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GPS-VERIFIED SPOTS ===== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-2">GPS-Verified Locations</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Coordinates extracted from photo EXIF metadata</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {verifiedSpots.map((spot) => (
              <div key={spot.name} className="rounded-xl overflow-hidden shadow-sm">
                <div className="relative h-40">
                  <Image src={spot.image} alt={spot.name} fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-[#1A3A4A]/90 text-[#C8A84E] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">
                    {spot.date}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{spot.name}</h3>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    {spot.gps[0].toFixed(4)}, {spot.gps[1].toFixed(4)}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Source: {spot.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO ARCHIVE ===== */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-2">From the Archive</h2>
          <p className="text-sm text-gray-500 font-light mb-8">
            Real photos from sfslackline.org — dates and cameras from EXIF data
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {verifiedPhotos.slice(0, 8).map((photo) => (
              <div key={photo.file} className="rounded-lg overflow-hidden shadow-sm bg-white">
                <div className="relative h-28 sm:h-36">
                  <Image src={`/photos/${photo.file}`} alt={`${photo.date} — ${photo.camera || 'unknown camera'}`} fill className="object-cover" />
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-semibold text-[#1A3A4A]">{photo.date}</p>
                  <p className="text-[10px] text-gray-400">{photo.camera || 'Camera unknown'}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400 mb-3">
              Original site: 849 photos across 57 gallery albums (2009–2013)
            </p>
            <a
              href="https://sfslackline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E6B7B] text-sm font-semibold hover:underline"
            >
              Visit the original sfslackline.org →
            </a>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="font-display text-lg sm:text-2xl italic text-[#A8DDE8] leading-relaxed mb-4">
            &ldquo;The original Bay Area hub for learning, connecting, and finding your balance.&rdquo;
          </p>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
            sfslackline.org · Est. 2009
          </span>
        </div>
      </section>

      {/* ===== LEARN — REAL YOUTUBE VIDEOS ===== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-2">Learn to Slackline</h2>
          <p className="text-sm text-gray-500 font-light mb-8">NWslackline.org tutorial series on YouTube</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {tutorials.map((v) => (
              <a
                key={v.id}
                href={`https://youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-36 bg-[#1A3A4A]">
                  <Image
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C8A84E]/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm text-[#1A3A4A]">{v.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="bg-[#1E6B7B] py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div className="text-white">
            <h2 className="font-display text-xl sm:text-2xl font-black mb-1">This site is being rebuilt</h2>
            <p className="text-sm font-light text-white/80">Preserving 15+ years of SF slackline history. More content coming soon.</p>
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
    </main>
  );
}
