import Link from 'next/link';

// Notice board data — these would eventually come from a database/CMS
const notices = [
  {
    id: 1,
    category: 'event',
    title: 'Sunday Session @ Dolores Park',
    body: 'Weekly community meetup — all levels welcome. We\'ll have beginner lines set up plus a 60m longline. Bring sunscreen and good vibes.',
    author: 'SF Slackline',
    date: 'Every Sunday',
    time: '11am - 4pm',
    location: 'Dolores Park, south slope near 20th St',
    pinned: true,
    color: 'lime',
  },
  {
    id: 2,
    category: 'event',
    title: 'Beginner Workshop — Free!',
    body: 'Never tried slacklining? This is your chance. We provide all the gear, tree protectors, and patient instructors. Limited to 20 spots — show up early!',
    author: 'SF Slackline',
    date: 'Feb 22, 2026',
    time: '10am - 2pm',
    location: 'Golden Gate Park, near Hippie Hill',
    pinned: true,
    color: 'cyan',
  },
  {
    id: 3,
    category: 'trip',
    title: 'Castle Rock Highline Weekend',
    body: 'Monthly trip to Castle Rock State Park for highlining. Experienced riggers will set lines — you just need to show up and be ready to walk (or watch). Intermediate slackline experience required for walking. Carpools from SF available.',
    author: 'Bay Area Highliners',
    date: 'Mar 1-2, 2026',
    time: 'All day',
    location: 'Castle Rock State Park',
    pinned: false,
    color: 'orange',
  },
  {
    id: 4,
    category: 'gear',
    title: 'FOR SALE: Gibbon Classic Line 50ft',
    body: 'Used twice, basically new. Ratchet + tree protectors included. $45 (retail $75). Pick up in the Mission or at Sunday session.',
    author: 'Marcus T.',
    date: 'Feb 10',
    pinned: false,
    color: 'pink',
  },
  {
    id: 5,
    category: 'safety',
    title: '🌳 Tree Protection Reminder',
    body: 'Friends — please ALWAYS use tree protectors when rigging. We\'ve had reports of bark damage at Dolores Park. This is how we lose access to spots. Wide pads, carpet scraps, or commercial protectors. No exceptions. If you see someone rigging without protection, kindly offer help.',
    author: 'SF Slackline',
    date: 'Feb 8',
    pinned: true,
    color: 'lime',
  },
  {
    id: 6,
    category: 'community',
    title: 'Seeking Mentors for New Slackliners',
    body: 'Our mentorship program pairs experienced slackliners with newcomers for 4 weeks of guided progression. 1 hour per week at a park near you. If you can walk 50ft consistently and want to give back, reach out!',
    author: 'SF Slackline',
    date: 'Ongoing',
    pinned: false,
    color: 'cyan',
  },
  {
    id: 7,
    category: 'event',
    title: 'Skiing Denali — Expedition Slideshow',
    body: 'Join local adventurers Jnani and Tomas for an evening of ski mountaineering storytelling from their recent expedition to Mount Denali (20,310 ft). Cross-sport stoke for the outdoor community.',
    author: 'Movement SF',
    date: 'Thu, Feb 12',
    time: '7:15 PM',
    location: 'Movement SF, Yoga Room',
    pinned: false,
    color: 'cyan',
  },
  {
    id: 8,
    category: 'community',
    title: 'Leave No Trace — 7 Principles',
    body: '1. Plan ahead & prepare. 2. Travel on durable surfaces. 3. Dispose of waste properly. 4. Leave what you find. 5. Minimize campfire impacts. 6. Respect wildlife. 7. Be considerate of others. These apply to slacklining too — protect our parks!',
    author: 'LNT.org',
    date: 'Always',
    pinned: false,
    color: 'lime',
  },
  {
    id: 9,
    category: 'gear',
    title: 'WANTED: 100m+ webbing for longline project',
    body: 'Looking to buy or borrow 100m+ of 1" webbing for a longline project at Crissy Field this spring. Will provide pulleys and rigging. DM if you have spare webbing!',
    author: 'Jake R.',
    date: 'Feb 9',
    pinned: false,
    color: 'pink',
  },
  {
    id: 10,
    category: 'event',
    title: 'SF Slackline Spring Jam 🎉',
    body: 'Tricks, longlines, music, food, and friendly competition. Prizes for best trick, longest walk, and best style. Open to all levels — come watch or participate!',
    author: 'SF Slackline',
    date: 'Mar 15, 2026',
    time: '12pm - 5pm',
    location: 'Crissy Field',
    pinned: false,
    color: 'orange',
  },
  {
    id: 11,
    category: 'community',
    title: 'GirlVentures Summer Courses 2026',
    body: 'Outdoor adventures for girls and gender-expansive youth! Redwood Adventure (Jun 17-23), Project Courage (Jul 6-15), and more. Sliding scale fees, all gear provided. Mentors also needed for Pacific Pipe & Movement SF, Mar-May.',
    author: 'GirlVentures',
    date: 'Summer 2026',
    pinned: false,
    color: 'cyan',
  },
  {
    id: 12,
    category: 'safety',
    title: 'Ocean Beach — Rip Current Safety',
    body: 'If you\'re slacklining at Ocean Beach, know the water hazards. Water temp is 50-55°F even in summer. If caught in a rip current: stay calm, swim parallel to shore, float if you can\'t escape. Never turn your back on the ocean.',
    author: 'SF Ocean Safety',
    date: 'Year-round',
    pinned: false,
    color: 'orange',
  },
  {
    id: 13,
    category: 'event',
    title: 'February Events at Movement SF',
    body: 'Escalemos Meetup (2/3), Shoe Demo (2/5), Bring a Friend Friday (2/6), Women & Non Binary Night (2/9), ParaCliffHangers Meetup (2/12), Coffee & Waffles (2/21), Queer Crush (2/25), Partner Project (2/26). Cross-training welcome!',
    author: 'Movement SF',
    date: 'Feb 2026',
    pinned: false,
    color: 'cyan',
  },
  {
    id: 14,
    category: 'trip',
    title: 'Gym to Crag — Climbing & Adventure Trips',
    body: '2026 trips to Mexico, Spain & more. Small groups + local guides. 5.8-5.9 top rope, or go harder. More than climbing — outdoors, cuisine, culture. Gym members save $100 with code MVMTSF at gohardertravel.com.',
    author: 'Go Harder Travel',
    date: '2026 season',
    pinned: false,
    color: 'orange',
  },
];

const categoryStyles: Record<string, { label: string; border: string; bg: string; text: string }> = {
  event: { label: '📅 Event', border: 'border-neon-lime/30', bg: 'bg-neon-lime/5', text: 'text-neon-lime' },
  trip: { label: '🏔️ Trip', border: 'border-neon-orange/30', bg: 'bg-neon-orange/5', text: 'text-neon-orange' },
  gear: { label: '🎒 Gear', border: 'border-neon-pink/30', bg: 'bg-neon-pink/5', text: 'text-neon-pink' },
  safety: { label: '⚠️ Safety', border: 'border-yellow-500/30', bg: 'bg-yellow-500/5', text: 'text-yellow-400' },
  community: { label: '🤝 Community', border: 'border-neon-cyan/30', bg: 'bg-neon-cyan/5', text: 'text-neon-cyan' },
};

export default function BoardPage() {
  const pinned = notices.filter(n => n.pinned);
  const regular = notices.filter(n => !n.pinned);

  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Community</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Notice <span className="text-neon-lime">Board</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            The community board — events, gear, trips, safety, and everything happening 
            in the Bay Area slackline scene. Always evolving, always fresh.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            {Object.entries(categoryStyles).map(([key, style]) => (
              <span key={key} className={`text-xs px-3 py-1.5 ${style.bg} ${style.text} border ${style.border}`}>
                {style.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pinned notices */}
      {pinned.length > 0 && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-[family-name:var(--font-display)] text-sm font-semibold text-neon-lime uppercase tracking-widest mb-6">
              📌 Pinned
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pinned.map((notice) => (
                <NoticeCard key={notice.id} notice={notice} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All notices — masonry-style */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-sm font-semibold text-fog-300 uppercase tracking-widest mb-6">
            Latest Posts
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {regular.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        </div>
      </section>

      {/* Submit */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass p-8 md:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">
              Have something to share?
            </h2>
            <p className="text-fog-300 mb-6">
              Events, gear for sale, trip plans, safety notices, or anything relevant to the Bay Area 
              slackline community. Submit a notice and it&apos;ll appear on the board after review.
            </p>
            <Link href="/community" className="btn-primary">
              Submit a Notice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function NoticeCard({ notice }: { notice: typeof notices[0] }) {
  const style = categoryStyles[notice.category] || categoryStyles.community;
  
  return (
    <div className={`glass p-5 break-inside-avoid border ${style.border} hover:scale-[1.01] transition-all`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-2 py-0.5 ${style.bg} ${style.text} border ${style.border}`}>
          {style.label}
        </span>
        {notice.pinned && <span className="text-xs text-neon-lime">📌</span>}
      </div>

      {/* Title */}
      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-fog-100 mb-2">
        {notice.title}
      </h3>

      {/* Body */}
      <p className="text-fog-300 text-sm leading-relaxed mb-4">
        {notice.body}
      </p>

      {/* Meta */}
      <div className="pt-3 border-t border-dark-600/30 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-fog-300/70">{notice.author}</span>
          <span className="text-xs text-fog-300/50">{notice.date}</span>
        </div>
        {notice.time && (
          <p className="text-xs text-fog-300/50">🕐 {notice.time}</p>
        )}
        {notice.location && (
          <p className="text-xs text-fog-300/50">📍 {notice.location}</p>
        )}
      </div>
    </div>
  );
}
