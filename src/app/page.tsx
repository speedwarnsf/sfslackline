import Image from 'next/image';
import Link from 'next/link';

// Real gallery albums from the original sfslackline.org (keeping all 57)
const galleryAlbums = [
  { slug: 'prideline', title: 'Pride Line', date: 'June 2011', image: '/photos/prideline.jpg', count: 21 },
  { slug: 'nightline', title: 'Night Line Sessions', date: 'Oct 2010', image: '/photos/nightline-2.jpg', count: 7 },
  { slug: 'ocean-beach', title: 'Ocean Beach — 150ft Line', date: 'Dec 2011', image: '/photos/ocean-beach.jpg', count: 15 },
  { slug: 'highline', title: 'First SF City Highline — Miley Park', date: 'Feb 2012', image: '/photos/highline.jpg', count: 30 },
  { slug: 'big-sur', title: 'Big Sur Camping Trip', date: '2013', image: '/photos/big-sur.jpg', count: 20 },
  { slug: 'rooftop', title: 'Rooftop Session', date: 'Feb 2012', image: '/photos/rooftop.jpg', count: 10 },
  { slug: 'panhandle-170', title: '170ft Line in the Panhandle', date: 'Nov 2011', image: '/photos/panhandle-170.jpg', count: 12 },
  { slug: 'sausalito', title: 'Sausalito / Mt. Tam Field Trip', date: '2013', image: '/photos/sausalito.jpg', count: 40 },
  { slug: 'rainbow', title: 'Rainbow Weekend', date: 'Aug 2010', image: '/photos/rainbow.jpg', count: 30 },
  { slug: 'yosemite', title: 'Yosemite High Country', date: '2011', image: '/photos/yosemite.jpg', count: 15 },
  { slug: 'memorial', title: 'Memorial Day Weekend', date: 'May 2011', image: '/photos/memorial.jpg', count: 40 },
  { slug: 'july4th', title: 'July 4th Long Weekend', date: 'July 2011', image: '/photos/july4th.jpg', count: 20 },
];

// Real instructional videos from the original site (NWslackline.org series)
const instructionalVideos = [
  { id: 'MdDzz5H2VQA', title: 'How to Slackline - Part 1: Setup & Basics' },
  { id: 'REvz4jv1YZQ', title: 'How to Slackline - Part 2: Walking' },
  { id: 'QCQLJsSm_ec', title: 'How to Slackline - Part 3: Turning Around' },
  { id: '-gKMeeAk460', title: 'How to Slackline - Part 4: Tricks & Sitting' },
  { id: 'yjsaPot7hzE', title: 'How to Slackline - Part 5: Advanced Tips' },
];

// Spots data for featured locations
const featuredSpots = [
  { name: 'Mission Dolores Park', area: 'Mission District', description: 'The original hub. Multiple great tree pairs on the south slope. Where the SF slackline community was born.', image: '/photos/prideline-2.jpg', difficulty: 'All Levels' },
  { name: 'The Panhandle', area: 'Western Addition', description: '170ft+ longline territory. Beautiful tree-lined path with massive eucalyptus. Where the big sends happen.', image: '/photos/panhandle-170.jpg', difficulty: 'Intermediate' },
  { name: 'Ocean Beach / Fort Funston', area: 'Outer Sunset', description: '150ft lines on the beach with nothing but Pacific Ocean views. Bring an A-frame — and a windbreaker.', image: '/photos/ocean-beach.jpg', difficulty: 'Intermediate' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* ============== HERO SECTION ============== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/photos/highline-2.jpg"
            alt="First SF City Highline at Miley Park, 2012"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-6">
            WALK THE LINE
          </h1>
          <p className="max-w-3xl mx-auto text-xl sm:text-2xl md:text-3xl leading-relaxed mb-12 text-white/90">
            San Francisco's slackline community since 2009. Learn, connect, and find your balance in the city by the bay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/learn" className="btn-primary text-lg px-10 py-4 text-lg">
              Start Learning
            </Link>
            <Link href="/spots" className="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-deep-teal">
              Find a Spot
            </Link>
          </div>
        </div>
      </section>

      {/* ============== STATS BAR ============== */}
      <section className="bg-deep-teal py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">849</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Photos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">57</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Galleries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">15</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Years</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">12</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Spots</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CATEGORY PILLS ============== */}
      <section className="py-12 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Spots', href: '/spots' },
              { label: 'Gear', href: '/gear' },
              { label: 'Safety', href: '/learn' },
              { label: 'Events', href: '/events' },
            ].map((category) => (
              <Link 
                key={category.label}
                href={category.href}
                className="inline-flex items-center px-6 py-3 bg-white border-2 border-teal text-teal font-medium rounded-full hover:bg-teal hover:text-white transition-colors"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURED SPOTS - 3 COLUMN GRID ============== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-deep-teal mb-4">
              Featured Spots
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best slackline locations across the Bay Area, from beginner-friendly parks to challenging highlines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredSpots.map((spot) => (
              <div key={spot.name} className="glass overflow-hidden group hover:shadow-lg transition-all">
                <div className="relative h-64">
                  <Image 
                    src={spot.image} 
                    alt={spot.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-gold text-white text-sm font-medium rounded-full">
                      {spot.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-deep-teal mb-2">
                    {spot.name}
                  </h3>
                  <p className="text-teal text-sm font-medium mb-3">{spot.area}</p>
                  <p className="text-gray-600 leading-relaxed">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURE ROW - 2 COLUMN ============== */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Getting Started */}
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black text-deep-teal mb-6">
                Getting Started
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                New to slacklining? Our comprehensive guides will get you walking the line safely and confidently. 
                From choosing your first gear to mastering basic moves.
              </p>
              <Link href="/learn" className="btn-primary">
                Start Learning
              </Link>
            </div>

            {/* Find a Spot */}
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black text-deep-teal mb-6">
                Find a Spot
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore our detailed map of slackline spots throughout the Bay Area. GPS coordinates, 
                difficulty levels, and community photos for every location.
              </p>
              <Link href="/spots" className="btn-outline">
                Explore Spots
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PULL QUOTE BLOCK ============== */}
      <section className="py-16 bg-deep-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black italic text-white leading-tight">
            "The line is more than just a piece of webbing — it's a meditation, a challenge, and a community all in one."
          </blockquote>
          <cite className="block mt-6 text-gold text-lg font-medium">
            — SF Slackline Community, Est. 2009
          </cite>
        </div>
      </section>

      {/* ============== INSTRUCTIONAL VIDEOS ============== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-deep-teal mb-4">
              Learn to Slackline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete tutorial series from NWslackline.org — from setup to advanced tricks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructionalVideos.map((video, i) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass overflow-hidden group hover:shadow-lg transition-all block"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-sm text-gold font-bold mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-semibold text-deep-teal group-hover:text-teal transition-colors">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============== GALLERY PREVIEW ============== */}
      <section className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-deep-teal mb-4">
              Community Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              849 photos from 57 albums spanning 2009-2013. Real sessions, real people, real stoke.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {galleryAlbums.slice(0, 8).map((album) => (
              <div key={album.slug} className="group relative aspect-square overflow-hidden cursor-pointer">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-gold transition-colors">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-xs">
                    <span>{album.date}</span>
                    <span>•</span>
                    <span>{album.count} photos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/community" className="btn-outline">
              View All 57 Albums →
            </Link>
          </div>
        </div>
      </section>

      {/* ============== CTA BAND ============== */}
      <section className="py-16 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Walk the Line?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the community that's been keeping San Francisco balanced since 2009. 
            Sunday sessions, field trips, and adventures await.
          </p>
          <Link href="/community" className="btn-primary text-lg px-10 py-4">
            Join the Community
          </Link>
        </div>
      </section>

      {/* ============== HISTORICAL NOTE ============== */}
      <section className="py-16 bg-white border-t border-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-2 block">Since 2009</span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-black text-deep-teal mb-4">
                The Original SF Slackline Archive
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This site preserves 15+ years of San Francisco slackline history. 
                57 gallery albums, community uploads, instructional videos, and spot maps — 
                all documenting the growth of Bay Area slacklining from 2009 to today.
              </p>
            </div>
            <a 
              href="http://sfslackline.org" 
              target="_blank" 
              rel="noopener" 
              className="btn-outline whitespace-nowrap"
            >
              Visit Original Site →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}