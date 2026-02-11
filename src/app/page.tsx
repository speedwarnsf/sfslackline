import Image from 'next/image';
import Link from 'next/link';

const featuredAlbums = [
  { slug: 'prideline', title: 'Prideline 2011', image: '/photos/prideline.jpg', count: 21, tag: 'Gallery' },
  { slug: 'highline', title: 'First City Highline', image: '/photos/highline.jpg', count: 30, tag: 'Highline' },
  { slug: 'nightline', title: 'Nightline Sessions', image: '/photos/nightline-2.jpg', count: 7, tag: 'Gallery' },
];

const spots = [
  { name: 'Dolores Park', desc: 'The OG spot since 2009', image: '/photos/prideline-2.jpg', tag: 'Beginner Friendly' },
  { name: 'The Panhandle', desc: '170ft longline territory', image: '/photos/panhandle-170.jpg', tag: 'Advanced' },
  { name: 'Ocean Beach', desc: 'Salt air, sand, sunset sends', image: '/photos/ocean-beach.jpg', tag: 'Intermediate' },
];

const videos = [
  { id: 'MdDzz5H2VQA', title: 'Part 1: Setup & Basics' },
  { id: 'REvz4jv1YZQ', title: 'Part 2: Walking' },
  { id: 'QCQLJsSm_ec', title: 'Part 3: Turning Around' },
];

export default function Home() {
  return (
    <main className="font-body">
      {/* ===== HERO ===== */}
      <section className="relative h-[85vh] min-h-[500px] max-h-[700px] flex items-end overflow-hidden">
        <Image
          src="/photos/highline-2.jpg"
          alt="First SF City Highline, 2012"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A]/90 via-[#1A3A4A]/40 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[0.95] mb-4">
            Walk the<br />Line.
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-light max-w-md mb-6">
            Bay Area&apos;s slackline community since 2009. 849 photographs across 57 galleries.
          </p>
          <Link
            href="/learn"
            className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
          >
            Explore the Archive
          </Link>
        </div>
      </section>

      {/* ===== STAT BAR ===== */}
      <section className="bg-[#1A3A4A]">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-4 text-center text-white">
          {[
            { num: '849', label: 'Photos' },
            { num: '57', label: 'Galleries' },
            { num: '15', label: 'Years' },
            { num: '12', label: 'Spots' },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl sm:text-4xl font-black text-[#C8A84E]">{s.num}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/60 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CATEGORY PILLS ===== */}
      <section className="bg-[#F2F4F6] py-8">
        <div className="max-w-5xl mx-auto px-6 flex justify-center gap-3">
          {['Spots', 'Gear', 'Safety', 'Events'].map((cat) => (
            <Link
              key={cat}
              href={cat === 'Safety' ? '/learn' : `/${cat.toLowerCase()}`}
              className="px-6 py-2.5 rounded-lg bg-[#F5F0E0] text-[#1A3A4A] text-xs font-semibold uppercase tracking-wider hover:bg-[#C8A84E] hover:text-white transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* ===== FEATURED SPOTS ===== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A]">Featured Spots</h2>
            <Link href="/spots" className="text-[#1E6B7B] text-sm font-semibold hover:underline">All 12 spots →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {spots.map((spot) => (
              <div key={spot.name} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image src={spot.image} alt={spot.name} fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-[#1A3A4A]/90 text-[#C8A84E] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">
                    {spot.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm">{spot.name}</h3>
                  <p className="text-xs text-gray-500 font-light mt-0.5">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GETTING STARTED + FIND A SPOT ===== */}
      <section className="bg-[#F2F4F6] py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-[#F5F0E0] rounded-xl p-8">
            <h3 className="font-display text-xl font-black text-[#1A3A4A] mb-2">Getting Started</h3>
            <p className="text-sm text-gray-600 font-light mb-4">New to slacklining? Our guides get you walking in one session.</p>
            <Link href="/learn" className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors">
              Start Learning
            </Link>
          </div>
          <div className="bg-[#F5F0E0] rounded-xl p-8">
            <h3 className="font-display text-xl font-black text-[#1A3A4A] mb-2">Find a Spot</h3>
            <p className="text-sm text-gray-600 font-light mb-4">12 documented Bay Area locations with GPS, difficulty ratings, and tips.</p>
            <Link href="/spots" className="inline-block border-2 border-[#1A3A4A] text-[#1A3A4A] px-5 py-2 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#1A3A4A] hover:text-white transition-colors">
              Explore Spots
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PULL QUOTE ===== */}
      <section className="bg-[#1A3A4A] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-xl sm:text-2xl italic text-[#A8DDE8] leading-relaxed mb-4">
            &ldquo;Balance is not something you find, it&apos;s something you create.&rdquo;
          </p>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">
            Dolores Park · Sunday mornings since 2009
          </span>
        </div>
      </section>

      {/* ===== LEARN TO SLACKLINE ===== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A]">Learn to Slackline</h2>
            <Link href="/learn" className="text-[#1E6B7B] text-sm font-semibold hover:underline">Full tutorial series →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {videos.map((v) => (
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

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="bg-[#F2F4F6] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A]">From the Archive</h2>
            <Link href="/community" className="text-[#1E6B7B] text-sm font-semibold hover:underline">All 57 galleries →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featuredAlbums.map((album) => (
              <div key={album.slug} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-40">
                  <Image src={album.image} alt={album.title} fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-[#1A3A4A]/90 text-[#C8A84E] text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">
                    {album.count} photos
                  </span>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-sm">{album.title}</h3>
                  <p className="text-xs text-gray-500 font-light mt-0.5">From the original archive</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="bg-[#1E6B7B] py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h2 className="font-display text-2xl font-black mb-1">Join the Community</h2>
            <p className="text-sm font-light text-white/80">Sessions every weekend. All levels welcome.</p>
          </div>
          <Link
            href="/community"
            className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-[#B8983E] transition-colors whitespace-nowrap"
          >
            Find a Session
          </Link>
        </div>
      </section>
    </main>
  );
}
