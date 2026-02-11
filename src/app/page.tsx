import Image from 'next/image';
import Link from 'next/link';

// Real gallery albums from the original sfslackline.org
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

// Real community videos from the original site
const communityVideos = [
  { id: 'qKb35RrmuMo', title: 'SF Slackline Community', platform: 'youtube' },
  { id: 'ZWWy0D8DOPc', title: 'Dolores Park Sessions', platform: 'youtube' },
  { id: 'lOhk0QOpR8o', title: 'Panhandle Slacklining', platform: 'youtube' },
  { id: 'pMdNYaQVeVA', title: 'SF Slackline Compilation', platform: 'youtube' },
  { id: 'QBR6EFrF2rk', title: 'Ocean Beach Line', platform: 'youtube' },
  { id: '42309071', title: 'Bay Area Slackline', platform: 'vimeo' },
];

const stats = [
  { value: '2009', label: 'Founded' },
  { value: '849+', label: 'Community Photos' },
  { value: '57', label: 'Gallery Albums' },
  { value: '30+', label: 'Videos' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* ============== HERO ============== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background — real photo */}
        <div className="absolute inset-0">
          <Image
            src="/photos/highline-2.jpg"
            alt="First SF City Highline at Miley Park, 2012"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/60 to-dark-950" />
        </div>

        {/* The Line — horizontal accent */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-lime/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pre-header */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neon-lime/10 border border-neon-lime/20 mb-8">
            <div className="w-2 h-2 bg-neon-lime rounded-full animate-pulse" />
            <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">
              San Francisco Slacklining Association • Est. 2009
            </span>
          </div>

          {/* Original header logo */}
          <Image
            src="/photos/header-original.png"
            alt="SF Slackline"
            width={400}
            height={80}
            className="mx-auto mb-6 opacity-90"
          />

          {/* Main headline */}
          <h1 className="font-[family-name:var(--font-display)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter mb-6">
            <span className="text-fog-100">WALK</span>
            <br />
            <span className="text-glow text-neon-lime">THE LINE</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-fog-300 leading-relaxed mb-10">
            The Bay Area&apos;s original slackline community since 2009.
            849+ community photos, 57 gallery albums, instructional videos, spot maps, 
            and 16 years of keeping San Francisco balanced.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn" className="btn-primary text-lg px-8 py-4">
              Start Learning
            </Link>
            <Link href="/spots" className="btn-outline text-lg px-8 py-4">
              Find a Spot
            </Link>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="text-fog-300 text-xs uppercase tracking-widest">Scroll</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-neon-lime/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS BAR ============== */}
      <section className="relative py-6 border-y border-neon-lime/10 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-neon-lime">
                  {stat.value}
                </div>
                <div className="text-fog-300 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PHOTO GALLERY ============== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Community Photos</span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 leading-tight">
                From the <span className="text-neon-lime">Archives</span>
              </h2>
              <p className="text-fog-300 mt-2">57 albums, 849+ photos from the SF slackline community (2009-2013)</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryAlbums.map((album) => (
              <div key={album.slug} className="group relative aspect-square overflow-hidden cursor-pointer">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-fog-100 group-hover:text-neon-lime transition-colors leading-tight">
                    {album.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-fog-300">{album.date}</span>
                    <span className="text-xs text-fog-300/50">•</span>
                    <span className="text-xs text-fog-300">{album.count} photos</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== INSTRUCTIONAL VIDEOS ============== */}
      <section className="py-24 md:py-32 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Learn</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Instructional <span className="text-neon-lime">Videos</span>
            </h2>
            <p className="text-fog-300 mt-2">The complete NWslackline.org tutorial series — from setup to advanced tricks</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructionalVideos.map((video, i) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass p-4 group hover:scale-[1.02] transition-all block"
              >
                <div className="relative aspect-video mb-3 overflow-hidden bg-dark-800">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/30 group-hover:bg-dark-950/10 transition-colors">
                    <div className="w-14 h-14 bg-neon-lime/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-dark-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-neon-lime/50 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                    {video.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/learn" className="btn-outline">
              More Videos & Tutorials →
            </Link>
          </div>
        </div>
      </section>

      {/* ============== FEATURED SPOTS with real map data ============== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Bay Area</span>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Find Your <span className="text-neon-lime">Line</span>
              </h2>
            </div>
            <Link href="/spots" className="hidden md:inline-block btn-outline text-sm">
              View All Spots →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Real spots from the original site */}
            {[
              { name: 'Mission Dolores Park', area: 'Mission District', description: 'The original hub. Multiple great tree pairs on the south slope. Where the SF slackline community was born.', image: '/photos/prideline-2.jpg', difficulty: 'All Levels', coords: '37.7591, -122.4263' },
              { name: 'The Panhandle', area: 'Western Addition', description: '170ft+ longline territory. Beautiful tree-lined path with massive eucalyptus. Where the big sends happen.', image: '/photos/panhandle-170.jpg', difficulty: 'Intermediate', coords: '37.7720, -122.4380' },
              { name: 'Ocean Beach / Fort Funston', area: 'Outer Sunset', description: '150ft lines on the beach with nothing but Pacific Ocean views. Bring an A-frame — and a windbreaker.', image: '/photos/ocean-beach.jpg', difficulty: 'Intermediate', coords: '37.7594, -122.5107' },
              { name: 'Sausalito / Mt. Tam', area: 'Marin County', description: 'Field trip territory. Redwoods, ocean views, and spots that make you forget you\'re 15 minutes from the city.', image: '/photos/sausalito.jpg', difficulty: 'All Levels', coords: '37.8590, -122.4852' },
            ].map((spot) => (
              <Link key={spot.name} href="/spots" className="glass overflow-hidden group hover:scale-[1.01] transition-all block">
                <div className="relative h-48">
                  <Image src={spot.image} alt={spot.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                          {spot.name}
                        </h3>
                        <p className="text-fog-300 text-sm">{spot.area}</p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-neon-lime/10 text-neon-lime border border-neon-lime/20">
                        {spot.difficulty}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-fog-300 text-sm leading-relaxed">{spot.description}</p>
                  <p className="text-fog-300/40 text-xs mt-2 font-[family-name:var(--font-mono)]">{spot.coords}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== COMMUNITY VIDEOS ============== */}
      <section className="py-24 md:py-32 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Watch</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Community <span className="text-neon-lime">Videos</span>
            </h2>
            <p className="text-fog-300 mt-2">Shot by the community, for the community. Real sessions, real people, real stoke.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityVideos.map((video) => (
              <a
                key={video.id}
                href={video.platform === 'vimeo' ? `https://vimeo.com/${video.id}` : `https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass p-4 group hover:scale-[1.02] transition-all block"
              >
                <div className="relative aspect-video mb-3 overflow-hidden bg-dark-800">
                  {video.platform === 'youtube' ? (
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-dark-800">
                      <span className="text-fog-300 text-sm">Vimeo</span>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/30 group-hover:bg-dark-950/10 transition-colors">
                    <div className="w-12 h-12 bg-neon-lime/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-dark-950 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MORE COMMUNITY GALLERIES SHOWCASE ============== */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Archive</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mt-3 leading-tight">
              More From the <span className="text-neon-lime">Community</span>
            </h2>
            <p className="text-fog-300 mt-2">57 albums spanning 2009-2013 — uploaded by the community</p>
          </div>

          {/* Full-width photo strip */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              '/photos/april2011.jpg',
              '/photos/rainbow.jpg',
              '/photos/nightline.jpg',
              '/photos/big-sur-2.jpg',
              '/photos/rooftop.jpg',
              '/photos/panhandle-nemesis.jpg',
            ].map((src) => (
              <div key={src} className="relative aspect-square overflow-hidden">
                <Image src={src} alt="SF Slackline community" fill className="object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>

          {/* Album list */}
          <div className="mt-8 glass p-6">
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-fog-100 mb-4">All 57 Albums</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
              {[
                'Pride Line', 'Night Line Sessions', 'Ocean Beach 150ft', 'First SF City Highline',
                'Big Sur Road Trip', 'Rooftop Session', '170ft Panhandle Line', 'Sausalito / Mt. Tam',
                'Rainbow Weekend', 'Yosemite High Country', 'Memorial Day Weekend', 'July 4th Weekend',
                'April 2011 Sessions', 'March 2011', 'Birthday in the Palm Grove', 'Panhandle Nemesis',
                '180ft Panhandle Line', 'Swords, Snakes & Flips', 'First Timers (Sasha K.)',
                'Lake Merritt Field Trip', 'Christmas: Diablo, Tam', 'Monterey Lunch Break Highline',
                'New Shots Pre-Reno', 'Matthew Roth - April', 'Margaret Leist - Sept',
                'Charlie Remsen Shots', 'Mike Shriver Uploads', 'Dan Rosenfeld - Sept',
                'Rapture Visit', 'Higher Than DP', 'K.E.T. Jwalking', 'Evan & Kyle: Attack from Space',
                'Phone Pics New Spot', 'Mountain Lake Park Visit', 'Last Walk Before the Fence',
                'Post-Theatre Production', 'Chris W. Uploads', 'TD in the New Digs',
                'BCBYHF Visit', '3rd BCBYHF: Nate & Anya Get High', 'Another BCBYHF Visit',
                'Nov 19-20 Sessions', 'Nov 6 Ocean Beach / Funston', 'Oct 22 Weekend Tunnel Mountain',
                'Sept 18 (Anon Upload)', 'Sept 18 (Regina A.)', 'Saturday Nov 13',
                'Sat Oct 9th', 'Aug 14 (Anon)', 'Aug 21 (Post-Theatre)',
                'Aug 21 (Chris W.)', 'Injury Upload', 'Jan 15-17 Uploads',
                'Jan 22-24', 'Jan 9 (Mike Shriver)', 'March (Christor L.)',
                '2013: DT or East Bay?',
              ].map((name) => (
                <span key={name} className="text-fog-300 hover:text-neon-lime cursor-pointer transition-colors py-0.5">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== COMMUNITY CTA ============== */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/photos/rainbow.jpg" alt="Rainbow Weekend" fill className="object-cover" />
          <div className="absolute inset-0 bg-dark-950/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold leading-tight mb-6">
            The line is set.<br />
            <span className="text-neon-lime">Are you walking?</span>
          </h2>
          <p className="text-fog-300 text-lg mb-10 max-w-2xl mx-auto">
            Join the community that&apos;s been keeping San Francisco balanced since 2009. 
            Sunday sessions at Dolores Park, field trips to Big Sur and Yosemite, 
            highlines above the Pacific. Your line is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/community" className="btn-primary text-lg px-8 py-4">
              Join the Community
            </Link>
            <Link href="/events" className="btn-outline text-lg px-8 py-4">
              Upcoming Events
            </Link>
          </div>
        </div>
      </section>

      {/* ============== HISTORY TEASER ============== */}
      <section className="py-16 border-t border-dark-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <span className="text-neon-cyan text-xs font-semibold uppercase tracking-widest">Since 2009</span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold mt-2 mb-4">
                The Original SF Slackline Site
              </h3>
              <p className="text-fog-300 leading-relaxed">
                Built on Squarespace v5, running continuously for 16+ years. 
                57 gallery albums, community uploads, Google Maps spots, Twitter feed, 
                instructional videos, and the history of Bay Area slacklining — 
                all preserved as a living archive.
              </p>
            </div>
            <a href="http://sfslackline.org" target="_blank" rel="noopener" className="btn-outline whitespace-nowrap">
              Visit the Original →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
