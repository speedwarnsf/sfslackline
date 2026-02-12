'use client';

import { useState, useEffect, useMemo } from 'react';

const hardcodedNotices = [
  { id: 1, category: 'event', title: 'Sunday Session @ Dolores Park', body: 'Weekly community meetup — all levels welcome. Beginner lines plus a 60m longline. Bring sunscreen and good vibes. Look for us near the palms.', author: 'SF Slackline', date: 'Every Sunday', time: '11am – 4pm', location: 'Dolores Park, south slope near 20th St', pinned: true },
  { id: 2, category: 'safety', title: 'Tree Protection Reminder', body: 'Always use tree protectors when rigging. Wide pads, carpet scraps, or commercial protectors. Min 5cm sling width, 20cm padding per ISA standards. No exceptions. If you see someone rigging without protection, kindly offer help. This is how we keep our spots.', author: 'SF Slackline', date: 'Always', pinned: true },
  { id: 3, category: 'event', title: 'Beginner Workshop — Free', body: 'Never tried slacklining? We provide all the gear, tree protectors, and patient instructors. Limited to 20 spots — show up early. No experience needed. Just wear shoes you can balance in.', author: 'SF Slackline', date: 'Feb 22, 2026', time: '10am – 2pm', location: 'Golden Gate Park, near the log cabin', pinned: true },
  { id: 5, category: 'community', title: 'GirlVentures Summer Courses 2026', body: 'Outdoor adventures for girls and gender-expansive youth. Redwood Adventure (Jun 17–23), Project Courage (Jul 6–15), and more. Sliding scale fees, all gear provided. Mentors needed for Pacific Pipe & Movement SF, Mar–May.', author: 'GirlVentures', date: 'Summer 2026', link: 'girlventures.org' },
  { id: 6, category: 'event', title: "Flash Foxy Education — Women's Climbing", body: 'Monthly clinics covering lead technique, crack climbing, and outdoor skills. Open to women and non-binary climbers of all levels. Cross-sport community — slackliners welcome.', author: 'Flash Foxy', date: 'Monthly', location: 'Movement SF' },
  { id: 7, category: 'community', title: 'Flirty Flashers — Social Climbing Group', body: 'Casual climbing sessions with a social twist. Meet new people, try new problems, grab a drink after. Because the outdoor community is better together.', author: 'Flirty Flashers', date: 'Wednesdays', location: 'Movement SF' },
  { id: 8, category: 'event', title: 'Skiing Denali — Expedition Slideshow', body: 'Join Jnani and Tomas for an evening of ski mountaineering storytelling from their recent expedition to Mount Denali (20,310 ft). Cross-sport stoke for the outdoor community.', author: 'Movement SF', date: 'Thu, Feb 12', time: '7:15 PM', location: 'Movement SF, Yoga Room' },
  { id: 9, category: 'community', title: 'Leave No Trace — 7 Principles', body: '1. Plan ahead & prepare. 2. Travel on durable surfaces. 3. Dispose of waste properly. 4. Leave what you find. 5. Minimize campfire impacts. 6. Respect wildlife. 7. Be considerate of others. These apply to slacklining too — protect our parks.', author: 'LNT.org', date: 'Always', link: 'lnt.org' },
  { id: 10, category: 'event', title: 'February Events at Movement SF', body: 'Escalemos Meetup (2/3), Shoe Demo (2/5), Bring a Friend Friday (2/6), Women & Non Binary Night (2/9), ParaCliffHangers Meetup (2/12), Coffee & Waffles (2/21), Queer Crush (2/25), Partner Project (2/26).', author: 'Movement SF', date: 'Feb 2026', location: 'Movement SF' },
  { id: 11, category: 'trip', title: 'Gym to Crag — Climbing & Adventure Trips', body: '2026 trips to Mexico, Spain & more. Small groups + local guides. 5.8–5.9 top rope, or go harder. More than climbing — outdoors, cuisine, culture. Gym members save $100 with code MVMTSF.', author: 'Go Harder Travel', date: '2026 season', link: 'gohardertravel.com' },
  { id: 12, category: 'event', title: 'Ken Yager — Yosemite Climbing History', body: 'Presentation by Ken Yager on the rich history of climbing in Yosemite Valley. Stories from the golden age of big wall climbing. Relevant for highliners who rig in the Valley.', author: 'Movement SF', date: 'Feb 2026', location: 'Movement SF' },
  { id: 13, category: 'safety', title: 'Ocean Beach — Rip Current Safety', body: "If you're slacklining at Ocean Beach, know the water hazards. Water temp is 50–55°F even in summer. If caught in a rip current: stay calm, swim parallel to shore, float if you can't escape. Never turn your back on the ocean.", author: 'SF Ocean Safety', date: 'Year-round' },
  { id: 14, category: 'community', title: 'Realization Climbing — Youth Programs', body: 'Climbing programs for underserved youth in the Bay Area. Mentorship, outdoor access, and community building through the vertical world. Volunteers and donors welcome.', author: 'Realization Climbing', date: 'Ongoing' },
  { id: 15, category: 'community', title: 'Autistic Climbers Survey', body: 'Research study seeking autistic climbers and slackliners to share their experiences with outdoor sports. Confidential survey — help improve accessibility and inclusion in our communities.', author: 'Research Team', date: 'Open' },
  { id: 16, category: 'gear', title: 'FOR SALE: Gibbon Classic Line 50ft', body: 'Used twice, basically new. Ratchet + tree protectors included. $45 (retail $75). Pick up in the Mission or at Sunday session.', author: 'Marcus T.', date: 'Feb 10' },
  { id: 17, category: 'gear', title: 'WANTED: 100m+ webbing for longline', body: 'Looking to buy or borrow 100m+ of 1" webbing for a longline project at Crissy Field this spring. Will provide pulleys and rigging. DM if you have spare webbing.', author: 'Jake R.', date: 'Feb 9' },
  { id: 18, category: 'trip', title: 'Castle Rock Highline Weekend', body: 'Monthly trip to Castle Rock State Park for highlining. Experienced riggers set lines — you show up and walk (or watch). Intermediate slackline experience required. Carpools from SF available.', author: 'Bay Area Highliners', date: 'Mar 1–2, 2026', time: 'All day', location: 'Castle Rock State Park' },
  { id: 19, category: 'community', title: 'Seeking Mentors for New Slackliners', body: 'Our mentorship program pairs experienced slackliners with newcomers for 4 weeks of guided progression. 1 hour per week at a park near you. If you can walk 50ft consistently and want to give back, reach out.', author: 'SF Slackline', date: 'Ongoing' },
  { id: 20, category: 'community', title: 'ProgressionAI — Training Tools', body: 'AI-powered training plans for climbers and balance athletes. Track your progression, get personalized drills, and connect with others working on similar skills.', author: 'ProgressionAI', date: '2026' },
];

interface Notice {
  id: number;
  category: string;
  title: string;
  body: string;
  author: string;
  date: string;
  time?: string;
  location?: string;
  link?: string;
  pinned?: boolean;
  userSubmitted?: boolean;
}

const categoryStyles: Record<string, { label: string; bg: string; text: string }> = {
  event: { label: 'Event', bg: 'bg-[#1E6B7B]/10', text: 'text-[#1E6B7B]' },
  trip: { label: 'Trip', bg: 'bg-[#C8A84E]/10', text: 'text-[#C8A84E]' },
  gear: { label: 'Gear', bg: 'bg-[#4A9BAA]/10', text: 'text-[#4A9BAA]' },
  safety: { label: 'Safety', bg: 'bg-red-500/10', text: 'text-red-600' },
  community: { label: 'Community', bg: 'bg-[#1A3A4A]/10', text: 'text-[#1A3A4A]' },
};

const CATEGORIES = ['all', 'event', 'trip', 'gear', 'safety', 'community'] as const;
const TRUNCATE_LENGTH = 150;
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

export default function BoardPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [userNotices, setUserNotices] = useState<Notice[]>([]);

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
    const newNotice: Notice = { ...notice, id: Date.now(), userSubmitted: true };
    const updated = [...userNotices, newNotice];
    setUserNotices(updated);
    saveUserNotices(updated);
    setShowForm(false);
  }

  return (
    <div className="mt-14 font-body">
      {/* Header */}
      <div className="bg-[#1A3A4A] px-5 py-10 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl font-black text-white mb-3">Notice Board</h1>
          <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
            Events, gear, trips, safety, and everything happening in the Bay Area outdoor community.
            Inspired by the bulletin board at Movement SF.
          </p>

          {/* Search */}
          <div className="mt-5 relative max-w-md">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search notices…"
              className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-white/10 text-white placeholder-white/40 text-sm border border-white/10 focus:border-[#C8A84E]/50 focus:outline-none focus:ring-1 focus:ring-[#C8A84E]/30 transition-colors"
            />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>

          {/* Filter pills — horizontally scrollable on mobile */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide">
            {CATEGORIES.map(cat => {
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
                  {cat === 'all' ? 'All' : categoryStyles[cat]?.label || cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pinned — always visible */}
      {pinned.length > 0 && (
        <div className="max-w-5xl mx-auto px-5 pt-8">
          <p className="text-[10px] uppercase tracking-widest text-[#C8A84E] font-semibold mb-4">📌 Pinned</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinned.map(n => <NoticeCard key={n.id} notice={n} pinned />)}
          </div>
        </div>
      )}

      {/* Filtered notices */}
      <div className="max-w-5xl mx-auto px-5 py-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">
            Community Posts{filtered.length > 0 ? ` (${filtered.length})` : ''}
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#C8A84E] text-[#1A3A4A] hover:bg-[#C8A84E]/80 transition-colors"
          >
            + Submit a Notice
          </button>
        </div>

        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 py-8 text-center">No notices match your search.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map(n => <NoticeCard key={n.id} notice={n} />)}
          </div>
        )}
      </div>

      {/* Submit modal */}
      {showForm && <SubmitModal onClose={() => setShowForm(false)} onSubmit={handleSubmit} />}
    </div>
  );
}

function NoticeCard({ notice, pinned }: { notice: Notice; pinned?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const style = categoryStyles[notice.category] || categoryStyles.community;
  const needsTruncate = notice.body.length > TRUNCATE_LENGTH;
  const displayBody = !expanded && needsTruncate ? notice.body.slice(0, TRUNCATE_LENGTH) + '…' : notice.body;

  return (
    <div className={`break-inside-avoid p-5 rounded-xl border ${pinned ? 'border-[#C8A84E]/30 bg-[#C8A84E]/5' : 'border-gray-200 bg-white'} hover:shadow-md transition-all`}>
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>
          {style.label}
        </span>
        <div className="flex items-center gap-2">
          {notice.userSubmitted && (
            <span className="text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#C8A84E]/20 text-[#C8A84E]">
              Pending Review
            </span>
          )}
          {pinned && <span className="text-[10px] text-[#C8A84E] font-medium">📌</span>}
        </div>
      </div>

      <h3 className="font-display text-base font-black text-[#1A3A4A] mb-2">{notice.title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-1">{displayBody}</p>
      {needsTruncate && (
        <button onClick={() => setExpanded(!expanded)} className="text-xs text-[#1E6B7B] font-medium hover:text-[#C8A84E] transition-colors mb-3">
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}

      <div className="pt-3 border-t border-gray-100 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#1E6B7B] font-medium">{notice.author}</span>
          <span className="text-xs text-gray-400">{notice.date}</span>
        </div>
        {notice.time && <p className="text-xs text-gray-400">{notice.time}</p>}
        {notice.location && <p className="text-xs text-gray-400">{notice.location}</p>}
        {notice.link && (
          <a href={`https://${notice.link}`} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E6B7B] hover:text-[#C8A84E] transition-colors">
            {notice.link} →
          </a>
        )}
      </div>
    </div>
  );
}

function SubmitModal({ onClose, onSubmit }: { onClose: () => void; onSubmit: (n: Omit<Notice, 'id' | 'userSubmitted'>) => void }) {
  const [form, setForm] = useState({ title: '', body: '', category: 'community', author: '', date: '', location: '', link: '' });

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

  const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-[#1A3A4A] placeholder-gray-400 focus:border-[#1E6B7B] focus:outline-none focus:ring-1 focus:ring-[#1E6B7B]/30";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 shadow-xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-black text-[#1A3A4A]">Submit a Notice</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Title *</label>
            <input className={inputCls} placeholder="Notice title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required />
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Body *</label>
            <textarea className={inputCls + ' min-h-[100px] resize-y'} placeholder="Details…" value={form.body} onChange={e => setForm(f => ({ ...f, body: e.target.value }))} required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Category *</label>
              <select className={inputCls} value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {Object.entries(categoryStyles).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Your Name *</label>
              <input className={inputCls} placeholder="Name" value={form.author} onChange={e => setForm(f => ({ ...f, author: e.target.value }))} required />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Date</label>
              <input className={inputCls} placeholder="e.g. Mar 15, 2026" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Location</label>
              <input className={inputCls} placeholder="Optional" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-semibold text-[#1A3A4A] mb-1">Link</label>
            <input className={inputCls} placeholder="example.com (optional)" value={form.link} onChange={e => setForm(f => ({ ...f, link: e.target.value }))} />
          </div>
          <button type="submit" className="w-full py-3 rounded-lg bg-[#1E6B7B] text-white text-sm font-semibold hover:bg-[#1A3A4A] transition-colors">
            Submit Notice
          </button>
          <p className="text-[10px] text-gray-400 text-center">Submissions are stored locally and shown with a &quot;Pending Review&quot; badge.</p>
        </form>
      </div>
    </div>
  );
}
