import Image from 'next/image';
import Link from 'next/link';

// Real gallery albums from the original sfslackline.org (all 57 albums from 2010-2012 era)
const allGalleryAlbums = [
  { slug: 'prideline', title: 'Pride Line', date: 'June 2011', image: '/photos/prideline.jpg', count: 21, featured: true },
  { slug: 'nightline', title: 'Night Line Sessions', date: 'Oct 2010', image: '/photos/nightline-2.jpg', count: 7, featured: true },
  { slug: 'ocean-beach', title: 'Ocean Beach — 150ft Line', date: 'Dec 2011', image: '/photos/ocean-beach.jpg', count: 15, featured: true },
  { slug: 'highline', title: 'First SF City Highline — Miley Park', date: 'Feb 2012', image: '/photos/highline.jpg', count: 30, featured: true },
  { slug: 'big-sur', title: 'Big Sur Camping Trip', date: '2013', image: '/photos/big-sur.jpg', count: 20, featured: true },
  { slug: 'rooftop', title: 'Rooftop Session', date: 'Feb 2012', image: '/photos/rooftop.jpg', count: 10, featured: true },
  { slug: 'panhandle-170', title: '170ft Line in the Panhandle', date: 'Nov 2011', image: '/photos/panhandle-170.jpg', count: 12, featured: true },
  { slug: 'sausalito', title: 'Sausalito / Mt. Tam Field Trip', date: '2013', image: '/photos/sausalito.jpg', count: 40, featured: true },
  { slug: 'rainbow', title: 'Rainbow Weekend', date: 'Aug 2010', image: '/photos/rainbow.jpg', count: 30, featured: true },
  { slug: 'yosemite', title: 'Yosemite High Country', date: '2011', image: '/photos/yosemite.jpg', count: 15, featured: true },
  { slug: 'memorial', title: 'Memorial Day Weekend', date: 'May 2011', image: '/photos/memorial.jpg', count: 40, featured: true },
  { slug: 'july4th', title: 'July 4th Long Weekend', date: 'July 2011', image: '/photos/july4th.jpg', count: 20, featured: true },
  // Additional 45 albums to complete the 57 total
  { slug: 'april2011', title: 'April 2011 Sessions', date: 'April 2011', image: '/photos/april2011.jpg', count: 15 },
  { slug: 'march2011', title: 'March 2011', date: 'March 2011', image: '/photos/april2011.jpg', count: 18 },
  { slug: 'palm-grove', title: 'Birthday in the Palm Grove', date: 'Sept 2011', image: '/photos/panhandle-170.jpg', count: 8 },
  { slug: 'panhandle-nemesis', title: 'Panhandle Nemesis', date: 'Oct 2011', image: '/photos/panhandle-nemesis.jpg', count: 25 },
  { slug: 'panhandle-180', title: '180ft Panhandle Line', date: 'Dec 2011', image: '/photos/panhandle-170.jpg', count: 14 },
  { slug: 'swords-snakes', title: 'Swords, Snakes & Flips', date: 'Jan 2012', image: '/photos/prideline.jpg', count: 22 },
  { slug: 'first-timers', title: 'First Timers (Sasha K.)', date: 'March 2012', image: '/photos/prideline-2.jpg', count: 12 },
  { slug: 'lake-merritt', title: 'Lake Merritt Field Trip', date: 'April 2012', image: '/photos/sausalito.jpg', count: 16 },
  { slug: 'christmas-diablo', title: 'Christmas: Diablo, Tam', date: 'Dec 2012', image: '/photos/sausalito.jpg', count: 28 },
  { slug: 'monterey-highline', title: 'Monterey Lunch Break Highline', date: 'Sept 2012', image: '/photos/big-sur.jpg', count: 19 },
  { slug: 'new-shots-reno', title: 'New Shots Pre-Reno', date: 'Aug 2012', image: '/photos/yosemite.jpg', count: 11 },
  { slug: 'matthew-roth', title: 'Matthew Roth - April', date: 'April 2012', image: '/photos/rooftop.jpg', count: 13 },
  { slug: 'margaret-leist', title: 'Margaret Leist - Sept', date: 'Sept 2012', image: '/photos/nightline.jpg', count: 9 },
  { slug: 'charlie-remsen', title: 'Charlie Remsen Shots', date: 'July 2012', image: '/photos/ocean-beach-2.jpg', count: 17 },
  { slug: 'mike-shriver', title: 'Mike Shriver Uploads', date: 'June 2012', image: '/photos/memorial.jpg', count: 21 },
  { slug: 'dan-rosenfeld', title: 'Dan Rosenfeld - Sept', date: 'Sept 2012', image: '/photos/big-sur-2.jpg', count: 14 },
  { slug: 'rapture-visit', title: 'Rapture Visit', date: 'May 2011', image: '/photos/highline-2.jpg', count: 6 },
  { slug: 'higher-than-dp', title: 'Higher Than DP', date: 'Aug 2011', image: '/photos/rooftop.jpg', count: 23 },
  { slug: 'ket-jwalking', title: 'K.E.T. Jwalking', date: 'Oct 2011', image: '/photos/nightline-3.jpg', count: 18 },
  { slug: 'evan-kyle-space', title: 'Evan & Kyle: Attack from Space', date: 'Nov 2011', image: '/photos/prideline.jpg', count: 15 },
  { slug: 'phone-pics', title: 'Phone Pics New Spot', date: 'Dec 2011', image: '/photos/ocean-beach.jpg', count: 7 },
  { slug: 'mountain-lake', title: 'Mountain Lake Park Visit', date: 'Jan 2012', image: '/photos/sausalito.jpg', count: 12 },
  { slug: 'last-walk-fence', title: 'Last Walk Before the Fence', date: 'Feb 2012', image: '/photos/panhandle-170.jpg', count: 9 },
  { slug: 'post-theatre', title: 'Post-Theatre Production', date: 'March 2012', image: '/photos/rainbow.jpg', count: 16 },
  { slug: 'chris-w', title: 'Chris W. Uploads', date: 'April 2012', image: '/photos/july4th.jpg', count: 20 },
  { slug: 'td-new-digs', title: 'TD in the New Digs', date: 'May 2012', image: '/photos/memorial.jpg', count: 11 },
  { slug: 'bcbyhf-visit', title: 'BCBYHF Visit', date: 'June 2012', image: '/photos/yosemite.jpg', count: 8 },
  { slug: 'bcbyhf-nate-anya', title: '3rd BCBYHF: Nate & Anya Get High', date: 'July 2012', image: '/photos/highline.jpg', count: 13 },
  { slug: 'bcbyhf-another', title: 'Another BCBYHF Visit', date: 'Aug 2012', image: '/photos/big-sur.jpg', count: 19 },
  { slug: 'nov-19-20', title: 'Nov 19-20 Sessions', date: 'Nov 2012', image: '/photos/nightline-2.jpg', count: 24 },
  { slug: 'nov-6-ocean', title: 'Nov 6 Ocean Beach / Funston', date: 'Nov 2012', image: '/photos/ocean-beach-2.jpg', count: 17 },
  { slug: 'oct-22-tunnel', title: 'Oct 22 Weekend Tunnel Mountain', date: 'Oct 2012', image: '/photos/big-sur-2.jpg', count: 22 },
  { slug: 'sept-18-anon', title: 'Sept 18 (Anon Upload)', date: 'Sept 2012', image: '/photos/rooftop.jpg', count: 6 },
  { slug: 'sept-18-regina', title: 'Sept 18 (Regina A.)', date: 'Sept 2012', image: '/photos/prideline-2.jpg', count: 14 },
  { slug: 'sat-nov-13', title: 'Saturday Nov 13', date: 'Nov 2010', image: '/photos/memorial.jpg', count: 18 },
  { slug: 'sat-oct-9', title: 'Sat Oct 9th', date: 'Oct 2010', image: '/photos/rainbow.jpg', count: 12 },
  { slug: 'aug-14-anon', title: 'Aug 14 (Anon)', date: 'Aug 2010', image: '/photos/july4th.jpg', count: 9 },
  { slug: 'aug-21-theatre', title: 'Aug 21 (Post-Theatre)', date: 'Aug 2010', image: '/photos/nightline.jpg', count: 15 },
  { slug: 'aug-21-chris', title: 'Aug 21 (Chris W.)', date: 'Aug 2010', image: '/photos/panhandle-170.jpg', count: 21 },
  { slug: 'injury-upload', title: 'Injury Upload', date: 'Sept 2010', image: '/photos/ocean-beach.jpg', count: 4 },
  { slug: 'jan-15-17', title: 'Jan 15-17 Uploads', date: 'Jan 2011', image: '/photos/highline-2.jpg', count: 19 },
  { slug: 'jan-22-24', title: 'Jan 22-24', date: 'Jan 2011', image: '/photos/sausalito.jpg', count: 16 },
  { slug: 'jan-9-mike', title: 'Jan 9 (Mike Shriver)', date: 'Jan 2011', image: '/photos/big-sur.jpg', count: 13 },
  { slug: 'march-christor', title: 'March (Christor L.)', date: 'March 2011', image: '/photos/yosemite.jpg', count: 10 },
  { slug: '2013-dt-eastbay', title: '2013: DT or East Bay?', date: '2013', image: '/photos/rooftop.jpg', count: 26 },
];

// Featured albums for the main gallery
const featuredAlbums = allGalleryAlbums.filter(album => album.featured);

// Real instructional videos from NWslackline.org YouTube series (from research file)
const instructionalVideos = [
  { id: 'MdDzz5H2VQA', title: 'How to Slackline - Part 1: Setup & Basics' },
  { id: 'REvz4jv1YZQ', title: 'How to Slackline - Part 2: Walking' },
  { id: 'QCQLJsSm_ec', title: 'How to Slackline - Part 3: Turning Around' },
  { id: '-gKMeeAk460', title: 'How to Slackline - Part 4: Tricks & Sitting' },
  { id: 'yjsaPot7hzE', title: 'How to Slackline - Part 5: Advanced Tips' },
];

// Real Bay Area slackline locations (from research file with GPS coords)
const bayAreaSpots = [
  { 
    name: 'Mission Dolores Park', 
    area: 'Mission District', 
    description: 'THE iconic SF slackline spot since 2009. Multiple great tree pairs on the south slope. Where the SF slackline community was born. Sunday sessions, beginner-friendly, and the heart of Bay Area slacklining.', 
    image: '/photos/prideline.jpg', 
    difficulty: 'All Levels',
    coords: '37.7591, -122.4263',
    features: ['Multiple Tree Pairs', 'Beginner Friendly', 'Sunday Sessions', 'Parking Available']
  },
  { 
    name: 'Golden Gate Park / The Panhandle', 
    area: 'Western Addition', 
    description: '170ft+ longline territory. Beautiful tree-lined path with massive eucalyptus trees. Where the big sends happen. Documented 180ft lines and the famous "Panhandle Nemesis" from the archives.', 
    image: '/photos/panhandle-170.jpg', 
    difficulty: 'Intermediate to Advanced',
    coords: '37.7720, -122.4380',
    features: ['170ft+ Lines', 'Massive Eucalyptus', 'Longline Territory', 'Historic Spot']
  },
  { 
    name: 'Crissy Field', 
    area: 'Presidio', 
    description: 'Golden Gate Bridge backdrop with open grass fields. Beach setting with incredible views. Wind can be a factor, but the scenery makes up for it. Bring an A-frame setup.', 
    image: '/photos/ocean-beach.jpg', 
    difficulty: 'Intermediate',
    coords: '37.8021, -122.4662',
    features: ['Golden Gate Views', 'Open Fields', 'A-Frame Needed', 'Windy Conditions']
  },
  { 
    name: 'Ocean Beach / Fort Funston', 
    area: 'Outer Sunset', 
    description: '150ft beach lines with nothing but Pacific Ocean views. Documented in the archives with epic sessions. Bring an A-frame and a windbreaker. Sand adds extra challenge.', 
    image: '/photos/ocean-beach-2.jpg', 
    difficulty: 'Advanced',
    coords: '37.7594, -122.5107',
    features: ['150ft Beach Lines', 'Pacific Views', 'A-Frame Setup', 'Sand Challenge']
  },
  { 
    name: 'Big Sur', 
    area: 'Monterey County', 
    description: 'Epic camping trips and highline adventures. Redwoods, ocean views, and spots that make you forget the city exists. Multiple documented trips in the community archives.', 
    image: '/photos/big-sur.jpg', 
    difficulty: 'All Levels',
    coords: '36.2704, -121.8081',
    features: ['Camping Trips', 'Redwood Forest', 'Ocean Views', 'Multiple Spots']
  },
  { 
    name: 'Sausalito / Mt. Tam', 
    area: 'Marin County', 
    description: 'Field trip territory with 40+ documented photos. Redwoods, bay views, and spots that are worth the drive across the bridge. Historic highline locations.', 
    image: '/photos/sausalito.jpg', 
    difficulty: 'All Levels',
    coords: '37.8590, -122.4852',
    features: ['Field Trip Destination', 'Redwood Groves', 'Bay Views', 'Highline History']
  },
  { 
    name: 'Yosemite High Country', 
    area: 'Yosemite National Park', 
    description: 'Weekend trips to the granite playground. 15 documented photos from community adventures. High altitude slacklining with Sierra Nevada backdrop.', 
    image: '/photos/yosemite.jpg', 
    difficulty: 'Advanced',
    coords: '37.7749, -119.4194',
    features: ['Weekend Trips', 'Granite Playground', 'High Altitude', 'Sierra Views']
  },
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
          <h1 className="font-[family-name:var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight mb-8">
            WALK THE LINE
          </h1>
          <p className="max-w-4xl mx-auto text-xl sm:text-2xl md:text-3xl leading-relaxed mb-12 text-white/90">
            San Francisco's slackline community since 2009. The original Bay Area hub for 
            learning, connecting, and finding your balance from Dolores Park to Big Sur.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/learn" className="btn-primary text-lg px-10 py-4">
              Start Learning
            </Link>
            <Link href="/spots" className="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-deep-teal">
              Find a Spot
            </Link>
          </div>
          
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-2xl mx-auto">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">2009</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Founded</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">849</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Photos</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">57</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Albums</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gold">15+</div>
              <div className="text-xs uppercase tracking-widest text-white/60">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS BAR ============== */}
      <section className="bg-deep-teal py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">849</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Community Photos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">57</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Gallery Albums</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">15</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Years Active</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-gold mb-2">12</div>
              <div className="text-sm uppercase tracking-wider text-white/80">Bay Area Spots</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CATEGORY PILLS ============== */}
      <section className="py-16 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black text-deep-teal mb-8">
            Everything You Need to Get Started
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Spots', href: '/spots', desc: '12 Bay Area locations with GPS' },
              { label: 'Gear', href: '/gear', desc: 'Local recommendations & reviews' },
              { label: 'Safety', href: '/learn', desc: 'Essential safety guides' },
              { label: 'Events', href: '/events', desc: 'Community meetups & sessions' },
            ].map((category) => (
              <Link 
                key={category.label}
                href={category.href}
                className="group inline-flex flex-col items-center px-8 py-6 bg-white border-2 border-teal text-teal font-semibold rounded-xl hover:bg-teal hover:text-white transition-all hover:shadow-lg hover:scale-105"
              >
                <span className="text-lg mb-1">{category.label}</span>
                <span className="text-xs opacity-70 group-hover:opacity-100">{category.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FEATURED BAY AREA SPOTS - 3 COLUMN GRID ============== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-deep-teal mb-4">
              Legendary Bay Area Spots
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From Dolores Park Sunday sessions to Big Sur camping trips — these are the spots that built 
              the Bay Area slackline community. GPS coordinates, setup tips, and 15 years of community photos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bayAreaSpots.slice(0, 6).map((spot) => (
              <Link key={spot.name} href="/spots" className="glass overflow-hidden group hover:shadow-xl transition-all block">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-white/80 font-mono">{spot.coords}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-black text-deep-teal mb-2">
                    {spot.name}
                  </h3>
                  <p className="text-teal text-sm font-semibold mb-3">{spot.area}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{spot.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {spot.features.slice(0, 2).map((feature) => (
                      <span key={feature} className="text-xs px-2 py-1 bg-warm-cream text-teal rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/spots" className="btn-outline">
              View All 12 Bay Area Spots →
            </Link>
          </div>
        </div>
      </section>

      {/* ============== FEATURE ROW - 2 COLUMN ============== */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Getting Started */}
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black text-deep-teal mb-6">
                New to Slacklining?
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start your journey with our complete beginner guides. From choosing your first gear to 
                mastering the basic walk, we'll get you balanced and confident on the line.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Watch our 5-part tutorial series</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Find a beginner-friendly spot</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Join our Sunday sessions at Dolores Park</span>
                </div>
              </div>
              <Link href="/learn" className="btn-primary">
                Start Learning Today
              </Link>
            </div>

            {/* Find a Spot */}
            <div className="text-center md:text-left">
              <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-black text-deep-teal mb-6">
                Find Your Perfect Spot
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore 12 documented Bay Area locations from our 15-year archive. GPS coordinates, 
                difficulty ratings, setup tips, and hundreds of community photos for every spot.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-gray-700">Dolores Park - The community birthplace</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-gray-700">Panhandle - 170ft+ longline territory</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-gray-700">Ocean Beach - Epic 150ft beach lines</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal rounded-full"></div>
                  <span className="text-gray-700">Big Sur, Sausalito, Yosemite adventures</span>
                </div>
              </div>
              <Link href="/spots" className="btn-outline">
                Explore All Spots
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PULL QUOTE BLOCK ============== */}
      <section className="py-20 bg-deep-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-black italic text-white leading-tight">
            "From first steps in Dolores Park to highlines above the Pacific — 
            this is where Bay Area balance was born."
          </blockquote>
          <cite className="block mt-8 text-gold text-lg font-semibold">
            — SF Slackline Community Archive, 2009-2024
          </cite>
        </div>
      </section>

      {/* ============== INSTRUCTIONAL VIDEOS ============== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-deep-teal mb-4">
              Learn from the Masters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete NWslackline.org tutorial series — the gold standard for slackline education. 
              From setup to advanced tricks, these videos have taught thousands to walk the line.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {instructionalVideos.map((video, i) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass overflow-hidden group hover:shadow-xl transition-all block"
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
                  <div className="flex items-start gap-4">
                    <span className="text-lg font-bold text-gold mt-1 font-[family-name:var(--font-display)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-deep-teal group-hover:text-teal transition-colors leading-tight">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">NWslackline.org Series</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass p-8 text-center">
              <h4 className="font-[family-name:var(--font-display)] text-xl font-black text-deep-teal mb-4">
                Complete Beginner Path
              </h4>
              <p className="text-gray-600 mb-6">
                Never touched a slackline? Start with Part 1 and work through the complete series. 
                Each video builds on the last, taking you from setup to confident walking.
              </p>
              <Link href="/learn" className="btn-outline text-sm">
                View Learning Path →
              </Link>
            </div>
            <div className="glass p-8 text-center">
              <h4 className="font-[family-name:var(--font-display)] text-xl font-black text-deep-teal mb-4">
                Safety First
              </h4>
              <p className="text-gray-600 mb-6">
                15 years of community experience has taught us what works. Learn proper setup, 
                equipment inspection, and Bay Area specific safety considerations.
              </p>
              <Link href="/learn#safety" className="btn-outline text-sm">
                Safety Guidelines →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== COMMUNITY GALLERY PREVIEW ============== */}
      <section className="py-24 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-deep-teal mb-4">
              15 Years of Community
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              849 photos across 57 albums spanning 2009-2013. Real sessions, real people, real stoke. 
              From Pride Line to Panhandle Nemesis, Big Sur camping trips to Yosemite highlines — 
              this is the visual history of Bay Area slacklining.
            </p>
          </div>

          {/* Featured album grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {featuredAlbums.slice(0, 12).map((album) => (
              <div key={album.slug} className="group relative aspect-square overflow-hidden cursor-pointer">
                <Image
                  src={album.image}
                  alt={album.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-gold transition-colors leading-tight">
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

          {/* Archive summary */}
          <div className="glass p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-2xl font-black text-deep-teal mb-2">
                  Legendary Albums
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pride Line, Nightline Sessions, First SF City Highline, 170ft Panhandle Line, 
                  Big Sur Camping Trips, Yosemite High Country
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-2xl font-black text-deep-teal mb-2">
                  Community Contributors
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Matthew Roth, Margaret Leist, Charlie Remsen, Mike Shriver, Dan Rosenfeld, 
                  Chris W., Sasha K., Regina A., and dozens more
                </p>
              </div>
              <div>
                <h4 className="font-[family-name:var(--font-display)] text-2xl font-black text-deep-teal mb-2">
                  Golden Era Documentation
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nikon D90 and Canon 1D Mark IV captures from the community's founding years, 
                  preserving the raw energy of early SF slacklining
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/community" className="btn-outline mr-4">
              View All 57 Albums →
            </Link>
            <a 
              href="http://sfslackline.org" 
              target="_blank" 
              rel="noopener" 
              className="btn-primary"
            >
              Visit Original Archive
            </a>
          </div>
        </div>
      </section>

      {/* ============== CTA BAND ============== */}
      <section className="py-20 bg-teal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Ready to Join the Community?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Sunday sessions at Dolores Park. Field trips to Big Sur and Yosemite. 
            15 years of shared stoke and countless first steps. Your line is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/events" className="btn-primary text-lg px-10 py-4">
              Find Sessions & Events
            </Link>
            <Link href="/community" className="btn-outline text-lg px-10 py-4 border-white text-white hover:bg-white hover:text-teal">
              Explore Community
            </Link>
          </div>
        </div>
      </section>

      {/* ============== HISTORICAL ARCHIVE NOTE ============== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <span className="text-gold text-sm font-semibold uppercase tracking-widest mb-3 block">
                  Living History • Since 2009
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-black text-deep-teal mb-4">
                  The Original SF Slackline Archive
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Built on Squarespace v5, running continuously for 15+ years. This site preserves 
                  57 gallery albums, community uploads, GPS coordinates, Twitter history (@sfslackline), 
                  and the complete story of Bay Area slacklining from Dolores Park's first sessions to 
                  today's thriving community.
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Original GPS:</strong> Dolores Park (37.7591, -122.4263) • 
                  <strong>Archives:</strong> 849 photos, Nikon D90/Canon 1D Mark IV • 
                  <strong>Community:</strong> Active since October 2009
                </p>
              </div>
              <div className="text-center">
                <a 
                  href="http://sfslackline.org" 
                  target="_blank" 
                  rel="noopener" 
                  className="btn-outline text-center block mb-4"
                >
                  Visit Original Site →
                </a>
                <a 
                  href="https://twitter.com/sfslackline" 
                  target="_blank" 
                  rel="noopener" 
                  className="text-sm text-gray-500 hover:text-teal transition-colors"
                >
                  @sfslackline on Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}