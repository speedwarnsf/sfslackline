'use client';

import { useState, useEffect, useMemo } from 'react';

/* ───────────────────────── DATA ───────────────────────── */

interface Notice {
  id: number;
  category: 'pinned' | 'event' | 'iso' | 'gear' | 'safety' | 'community';
  title: string;
  body: string;
  author: string;
  date: string;
  time?: string;
  location?: string;
  link?: string;
  pinned?: boolean;
  userSubmitted?: boolean;
  rotation?: number; // slight card tilt in degrees
}

const hardcodedNotices: Notice[] = [
  // ── PINNED / FEATURED ──
  {
    id: 1,
    category: 'pinned',
    title: 'Line up Sunday at Dolores — all levels welcome',
    body: 'Weekly session near the palms. Beginner line + 80ft longline. Bring sunscreen. We have extra gear if you\'re new. Look for us on the south slope near 20th & Cumberland.',
    author: 'SF Slackline',
    date: 'Every Sunday',
    time: '11am – sunset',
    location: 'Dolores Park — the palms',
    pinned: true,
    rotation: -1.2,
  },
  {
    id: 2,
    category: 'pinned',
    title: 'Pad your trees. Always.',
    body: 'Wide pads, carpet scraps, or commercial protectors. Min 5cm sling width. No exceptions. This is how we keep our spots. If you see someone rigging without protection, kindly offer help — don\'t just watch.',
    author: 'SF Slackline',
    date: 'Forever',
    pinned: true,
    rotation: 0.8,
  },
  {
    id: 3,
    category: 'pinned',
    title: 'This board is for the NEXT generation',
    body: 'SF Slackline has been at it since 2009. The palms. The panhandle. Ocean Beach over sand. 849 photos, 57 albums, and a whole lot of sun. Now it\'s your turn. Post here. Show up. Rig lines. This is your community board.',
    author: 'SF Slackline',
    date: '2026',
    pinned: true,
    rotation: -0.5,
  },

  // ── LOOKING FOR (ISO) ──
  {
    id: 10,
    category: 'iso',
    title: 'ISO: 200ft longline setup for Ocean Beach',
    body: 'Planning a beach session south of the hang gliders. Need 200ft+ of 1" webbing, pulleys, and a multiplier. Have tree pro and anchors. Willing to split cost on new webbing if nobody has spare. DM or find me Sundays at DP.',
    author: 'Jake R.',
    date: 'Feb 10',
    location: 'Ocean Beach / Fort Funston',
    rotation: 1.5,
  },
  {
    id: 11,
    category: 'iso',
    title: 'Looking for highline mentor',
    body: 'Solid on 100ft longlines, want to learn highline rigging. Happy to carry gear and assist. Just want to learn from someone who knows what they\'re doing. Castle Rock or anywhere.',
    author: 'Priya K.',
    date: 'Feb 8',
    rotation: -1.8,
  },
  {
    id: 12,
    category: 'iso',
    title: 'WANTED: Riding partner for panhandle longlines',
    body: 'Looking for someone to rig with at Cole & Fell on weekday evenings. I have a 140ft setup. Just need a second pair of hands and someone to trade sends with.',
    author: 'Tommy L.',
    date: 'Feb 11',
    location: 'Panhandle — Cole & Fell',
    rotation: 0.6,
  },

  // ── EVENTS ──
  {
    id: 20,
    category: 'event',
    title: 'Beginner Workshop — Free, all gear provided',
    body: 'Never tried it? We teach balance, mounting, first steps. Patient instructors, tree protection demo included. Limited to 20 spots — show up early. Shoes you can balance in.',
    author: 'SF Slackline',
    date: 'Feb 22, 2026',
    time: '10am – 2pm',
    location: 'Golden Gate Park, near the log cabin',
    rotation: -0.9,
  },
  {
    id: 21,
    category: 'event',
    title: 'Tree protection workshop this month',
    body: 'Learn proper rigging with ISA-standard tree protection. We\'ll cover: sling width, padding materials, weight distribution, and how to inspect bark for damage. Bring your own gear to get feedback.',
    author: 'SF Slackline',
    date: 'Feb 28, 2026',
    time: '11am',
    location: 'Dolores Park',
    rotation: 1.1,
  },
  {
    id: 22,
    category: 'event',
    title: 'Spring Equinox Longline — 135ft at Cole',
    body: 'Celebrate perfect balance with a 135ft line at the panhandle. Tradition since 2013. All welcome to walk, watch, or just hang. Bring tunes.',
    author: 'SF Slackline',
    date: 'Mar 20, 2026',
    time: 'Noon – sunset',
    location: 'Panhandle — Cole & Fell',
    rotation: -1.4,
  },
  {
    id: 23,
    category: 'event',
    title: 'Castle Rock Highline Weekend',
    body: 'Monthly highline session. Experienced riggers set lines — you show up and walk (or watch). Intermediate slackline experience required. Carpools from SF available.',
    author: 'Bay Area Highliners',
    date: 'Mar 1–2, 2026',
    time: 'All day',
    location: 'Castle Rock State Park',
    rotation: 0.7,
  },

  // ── GEAR ──
  {
    id: 30,
    category: 'gear',
    title: 'FOR SALE: Gibbon Classic 50ft — barely used',
    body: 'Used twice. Ratchet + tree protectors included. $45 (retail $75). Pick up in the Mission or at Sunday session. No lowballs.',
    author: 'Marcus T.',
    date: 'Feb 10',
    rotation: 2.0,
  },
  {
    id: 31,
    category: 'gear',
    title: 'FREE: Carpet scraps for tree protection',
    body: 'Got a stack of carpet remnants from a renovation. Perfect for tree pads. Come grab some at Sunday session or DM for Mission pickup.',
    author: 'Dana M.',
    date: 'Feb 9',
    rotation: -1.6,
  },

  // ── SAFETY ──
  {
    id: 40,
    category: 'safety',
    title: 'Ocean Beach — Know the water',
    body: 'If you\'re rigging at Ocean Beach, know the hazards. Water temp: 50–55°F even in summer. Rip currents are real. Never turn your back on the ocean. Slackline falls near the waterline = cold water shock risk.',
    author: 'SF Ocean Safety',
    date: 'Year-round',
    rotation: 0.4,
  },
  {
    id: 41,
    category: 'safety',
    title: 'SF Parks Slackline Policy — Status Unknown',
    body: 'The official Rec & Park slackline policy page is now a 404. Last known rules: tree padding required, max 80ft, trees >1ft diameter only, 8ft clearance. We\'re investigating whether the policy changed or just moved. Rig responsibly regardless.',
    author: 'SF Slackline',
    date: 'Updated 2026',
    rotation: -0.3,
  },

  // ── COMMUNITY ──
  {
    id: 50,
    category: 'community',
    title: 'Seeking mentors for new slackliners',
    body: '4-week mentorship: 1hr/week at a park near you. If you can walk 50ft consistently and want to give back, reach out. Pairs experienced folks with total beginners.',
    author: 'SF Slackline',
    date: 'Ongoing',
    rotation: 1.3,
  },
  {
    id: 51,
    category: 'community',
    title: 'GirlVentures Summer Courses 2026',
    body: 'Outdoor adventures for girls and gender-expansive youth. Redwood Adventure, Project Courage, and more. Sliding scale fees, all gear provided. Mentors needed Mar–May.',
    author: 'GirlVentures',
    date: 'Summer 2026',
    link: 'girlventures.org',
    rotation: -2.1,
  },
  {
    id: 52,
    category: 'community',
    title: 'Leave No Trace — applies to slacklining too',
    body: 'Plan ahead. Travel on durable surfaces. Dispose of waste. Leave what you find. Minimize impacts. Respect wildlife. Be considerate. Pack out your tape scraps and water bottles.',
    author: 'LNT.org',
    date: 'Always',
    link: 'lnt.org',
    rotation: 0.9,
  },
];

const categoryMeta: Record<string, { label: string; color: string; bgColor: string }> = {
  pinned:    { label: 'Pinned',    color: 'text-[#C8A84E]', bgColor: 'bg-[#C8A84E]/15' },
  event:     { label: 'Event',     color: 'text-[#1E6B7B]', bgColor: 'bg-[#1E6B7B]/10' },
  iso:       { label: 'Looking For', color: 'text-[#8B5CF6]', bgColor: 'bg-[#8B5CF6]/10' },
  gear:      { label: 'Gear',      color: 'text-[#4A9BAA]', bgColor: 'bg-[#4A9BAA]/10' },
  safety:    { label: 'Safety',    color: 'text-red-600',   bgColor: 'bg-red-500/10' },
  community: { label: 'Community', color: 'text-[#1A3A4A]', bgColor: 'bg-[#1A3A4A]/10' },
};

const FILTER_CATS = ['all', 'event', 'iso', 'gear', 'safety', 'community'] as const;
const LS_KEY = 'sfslackline-board-notices';

function loadUserNotices(): Notice[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveUserNotices(notices: Notice[]) {
  localStorage.setItem(LS_KEY, JSON.stringify(notices));
}

/* ───────────────────────── PUSHPIN SVG ───────────────────────── */

function Pushpin({ gold }: { gold?: boolean }) {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="drop-shadow-sm">
      <circle cx="10" cy="8" r="6" fill={gold ? '#C8A84E' : '#E05555'} />
      <circle cx="10" cy="8" r="3.5" fill={gold ? '#D4B95E' : '#F07070'} opacity="0.6" />
      <rect x="9" y="14" width="2" height="8" rx="1" fill={gold ? '#9A7B30' : '#B03030'} />
    </svg>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */

export default function BoardPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [userNotices, setUserNotices] = useState<Notice[]>([]);
  const [showHowTo, setShowHowTo] = useState(false);

  useEffect(() => { setUserNotices(loadUserNotices()); }, []);

  const allNotices = useMemo(() => [...hardcodedNotices, ...userNotices], [userNotices]);
  const pinned = allNotices.filter(n => n.pinned);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allNotices.filter(n => {
      if (n.pinned) return false;
      if (activeCategory !== 'all' && n.category !== activeCategory) return false;
      if (q && !n.title.toLowerCase().includes(q) && !n.body.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [allNotices, activeCategory, search]);

  function handleSubmit(notice: Omit<Notice, 'id' | 'userSubmitted'>) {
    const newNotice: Notice = { ...notice, id: Date.now(), userSubmitted: true, rotation: (Math.random() - 0.5) * 4 };
    const updated = [...userNotices, newNotice];
    setUserNotices(updated);
    saveUserNotices(updated);
    setShowForm(false);
  }

  return (
    <div className="mt-14 font-body min-h-screen" style={{ background: 'linear-gradient(180deg, #1A3A4A 0%, #1A3A4A 280px, #F5F0E8 280px, #F5F0E8 100%)' }}>
      {/* Header */}
      <div className="px-5 pt-10 pb-14 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-3 mb-3">
            <h1 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
              The Board
            </h1>
            <span className="text-[10px] uppercase tracking-widest text-[#C8A84E] font-semibold bg-[#C8A84E]/15 px-2.5 py-1 rounded-full mt-2">
              Community
            </span>
          </div>
          <p className="text-white/50 text-sm max-w-xl leading-relaxed">
            Post it. Pin it. Find your people.<br />
            Inspired by the bulletin board at Movement SF — but for slackliners.
          </p>

          {/* Search */}
          <div className="mt-5 relative max-w-md">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search the board…"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/10 text-white placeholder-white/40 text-sm border border-white/10 focus:border-[#C8A84E]/50 focus:outline-none focus:ring-1 focus:ring-[#C8A84E]/30 transition-colors"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          {/* Filter pills */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide">
            {FILTER_CATS.map(cat => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 text-[11px] uppercase tracking-wider font-semibold px-3.5 py-1.5 rounded-full transition-all ${
                    active
                      ? 'bg-[#C8A84E] text-[#1A3A4A]'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  {cat === 'all' ? 'All' : categoryMeta[cat]?.label || cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Cork-board texture area */}
      <div className="max-w-5xl mx-auto px-5 -mt-4">

        {/* ── PINNED NOTICES ── */}
        {pinned.length > 0 && (
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8A84E] font-bold mb-5 flex items-center gap-2">
              <span className="w-5 h-px bg-[#C8A84E]/40" />
              Pinned Notices
              <span className="flex-1 h-px bg-[#C8A84E]/20" />
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pinned.map(n => <NoticeCard key={n.id} notice={n} isPinned />)}
            </div>
          </div>
        )}

        {/* ── COMMUNITY POSTS ── */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#1A3A4A]/50 font-bold flex items-center gap-2">
              <span className="w-5 h-px bg-[#1A3A4A]/20" />
              Community Posts{filtered.length > 0 ? ` · ${filtered.length}` : ''}
              <span className="flex-1 h-px bg-[#1A3A4A]/10" />
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowHowTo(true)}
                className="text-[11px] font-semibold px-3 py-1.5 rounded-lg border border-[#1A3A4A]/15 text-[#1A3A4A]/60 hover:border-[#1E6B7B]/30 hover:text-[#1E6B7B] transition-colors"
              >
                How to Post
              </button>
              <button
                onClick={() => setShowForm(true)}
                className="text-[11px] font-semibold px-4 py-1.5 rounded-lg bg-[#C8A84E] text-[#1A3A4A] hover:bg-[#D4B95E] transition-colors shadow-sm"
              >
                + Post a Notice
              </button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-[#1A3A4A]/40 py-12 text-center">No notices match your search.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map(n => <NoticeCard key={n.id} notice={n} />)}
            </div>
          )}
        </div>

        {/* ── HOW TO POST (inline) ── */}
        <div className="mb-12 bg-white border border-dashed border-[#1A3A4A]/15 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h2 className="font-display text-xl font-black text-[#1A3A4A] mb-3">This is your board.</h2>
          <div className="text-sm text-[#1A3A4A]/70 space-y-2 leading-relaxed">
            <p>
              Post a session. Sell old gear. Find a rigging partner. Announce a workshop.
              This board works like the real thing — tack it up, see who responds.
            </p>
            <p>
              SF Slackline ran from 2009 to 2018. The palms at Dolores. 140ft at Cole.
              150ft over sand at Ocean Beach. Now it&apos;s your turn to carry it.
            </p>
            <p className="text-[#1E6B7B] font-medium">
              Hit &quot;Post a Notice&quot; above. Submissions show instantly with a &quot;Pending Review&quot; badge.
            </p>
          </div>
        </div>

      </div>

      {/* Modals */}
      {showForm && <SubmitModal onClose={() => setShowForm(false)} onSubmit={handleSubmit} />}
      {showHowTo && <HowToModal onClose={() => setShowHowTo(false)} />}
    </div>
  );
}

/* ───────────────────────── NOTICE CARD ───────────────────────── */

function NoticeCard({ notice, isPinned }: { notice: Notice; isPinned?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const meta = categoryMeta[notice.category] || categoryMeta.community;
  const truncLen = 140;
  const needsTruncate = notice.body.length > truncLen;
  const displayBody = !expanded && needsTruncate ? notice.body.slice(0, truncLen) + '…' : notice.body;
  const rotation = notice.rotation || 0;

  return (
    <div
      className={`break-inside-avoid relative group transition-all duration-200 ${isPinned ? '' : ''}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Pushpin */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 transition-transform group-hover:scale-110">
        <Pushpin gold={isPinned} />
      </div>

      <div
        className={`pt-6 pb-5 px-5 rounded-xl border shadow-sm transition-shadow group-hover:shadow-md ${
          isPinned
            ? 'bg-gradient-to-b from-[#FFFDF5] to-white border-[#C8A84E]/30 ring-1 ring-[#C8A84E]/10'
            : 'bg-white border-[#1A3A4A]/10'
        }`}
        style={{ transform: 'rotate(0deg)' /* reset inner for readability */ }}
      >
        {/* Category badge */}
        <div className="flex items-center justify-between mb-2.5">
          <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${meta.bgColor} ${meta.color}`}>
            {meta.label}
          </span>
          {notice.userSubmitted && (
            <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#C8A84E]/20 text-[#C8A84E]">
              Pending Review
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className={`font-display text-[15px] font-black leading-snug mb-2 ${isPinned ? 'text-[#1A3A4A]' : 'text-[#1A3A4A]'}`}>
          {notice.title}
        </h3>

        {/* Body */}
        <p className="text-[#1A3A4A]/65 text-[13px] leading-relaxed mb-1">{displayBody}</p>
        {needsTruncate && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[12px] text-[#1E6B7B] font-medium hover:text-[#C8A84E] transition-colors mb-2"
          >
            {expanded ? 'Less' : 'More →'}
          </button>
        )}

        {/* Meta */}
        <div className={`pt-3 border-t space-y-0.5 ${isPinned ? 'border-[#C8A84E]/15' : 'border-[#1A3A4A]/8'}`}>
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-[#1E6B7B] font-semibold">{notice.author}</span>
            <span className="text-[11px] text-[#1A3A4A]/35">{notice.date}</span>
          </div>
          {notice.time && <p className="text-[11px] text-[#1A3A4A]/40">{notice.time}</p>}
          {notice.location && <p className="text-[11px] text-[#1A3A4A]/40">{notice.location}</p>}
          {notice.link && (
            <a href={`https://${notice.link}`} target="_blank" rel="noopener noreferrer" className="text-[11px] text-[#1E6B7B] hover:text-[#C8A84E] transition-colors">
              {notice.link} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── HOW TO POST MODAL ───────────────────────── */

function HowToModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[#FFFDF5] rounded-2xl w-full max-w-md p-6 shadow-xl border border-[#C8A84E]/20" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-black text-[#1A3A4A]">How to Post</h2>
          <button onClick={onClose} className="text-[#1A3A4A]/30 hover:text-[#1A3A4A]/60 text-xl leading-none">&times;</button>
        </div>
        <div className="text-sm text-[#1A3A4A]/70 space-y-3 leading-relaxed">
          <p><strong className="text-[#1A3A4A]">This is a community board.</strong> Like the one at the gym — tack up a note, see who bites.</p>
          <div className="space-y-1.5">
            <p className="font-semibold text-[#1E6B7B] text-[13px]">What to post:</p>
            <ul className="list-disc list-inside text-[13px] space-y-1 text-[#1A3A4A]/60">
              <li>Sessions — &quot;Line up Sunday at DP&quot;</li>
              <li>Looking for — gear, partners, mentors</li>
              <li>Gear for sale or free</li>
              <li>Events, workshops, trips</li>
              <li>Safety info and spot updates</li>
            </ul>
          </div>
          <div className="space-y-1.5">
            <p className="font-semibold text-[#1E6B7B] text-[13px]">How it works:</p>
            <ul className="list-disc list-inside text-[13px] space-y-1 text-[#1A3A4A]/60">
              <li>Hit &quot;Post a Notice&quot; — fill out the form</li>
              <li>Your post appears instantly (stored locally)</li>
              <li>Shows a &quot;Pending Review&quot; badge</li>
              <li>Keep it real. This isn&apos;t Craigslist.</li>
            </ul>
          </div>
          <p className="text-[#1A3A4A]/40 text-[11px] pt-2">
            The revival starts with you showing up. Post something.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── SUBMIT MODAL ───────────────────────── */

function SubmitModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: (n: Omit<Notice, 'id' | 'userSubmitted'>) => void }) {
  const [form, setForm] = useState({ title: '', body: '', category: 'community' as Notice['category'], author: '', date: '', location: '', link: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.body.trim() || !form.author.trim()) return;
    onSubmit({
      ...form,
      date: form.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      location: form.location || undefined,
      link: form.link || undefined,
    });
  }

  const inputCls = "w-full px-3 py-2.5 rounded-lg border border-[#1A3A4A]/12 text-sm text-[#1A3A4A] placeholder-[#1A3A4A]/30 bg-white focus:border-[#1E6B7B] focus:outline-none focus:ring-1 focus:ring-[#1E6B7B]/30";

  const categoryOptions = [
    { value: 'event', label: 'Event / Session' },
    { value: 'iso', label: 'Looking For' },
    { value: 'gear', label: 'Gear' },
    { value: 'safety', label: 'Safety' },
    { value: 'community', label: 'Community' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-[#FFFDF5] rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-xl border border-[#C8A84E]/20" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-black text-[#1A3A4A]">Post a Notice</h2>
          <button onClick={onClose} className="text-[#1A3A4A]/30 hover:text-[#1A3A4A]/60 text-xl leading-none">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A3A4A]/50 mb-1">Title *</label>
            <input className={inputCls} placeholder="Line up Sunday at DP" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A3A4A]/50 mb-1">Details *</label>
            <textarea className={inputCls + ' min-h-[100px] resize-y'} placeholder="What's the deal?" value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A3A4A]/50 mb-1">Category *</label>
              <select className={inputCls} value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value as Notice['category'] }))}>
                {categoryOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A3A4A]/50 mb-1">Your Name *</label>
              <input className={inputCls} placeholder="Name" value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A3A4A]/50 mb-1">Date</label>
              <input className={inputCls} placeholder="e.g. Mar 15, 2026" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1A3A4A]/50 mb-1">Location</label>
              <input className={inputCls} placeholder="Dolores Park" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
            </div>
          </div>
          <button type="submit" className="w-full py-3 rounded-lg bg-[#1E6B7B] text-white text-sm font-bold hover:bg-[#1A3A4A] transition-colors shadow-sm">
            Pin It to the Board
          </button>
          <p className="text-[10px] text-[#1A3A4A]/35 text-center">Stored locally. Shows with a &quot;Pending Review&quot; badge.</p>
        </form>
      </div>
    </div>
  );
}
