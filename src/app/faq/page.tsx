'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQ {
  q: string;
  a: string;
  links?: { href: string; label: string; external?: boolean }[];
}

const faqs: FAQ[] = [
  {
    q: 'What is slacklining?',
    a: 'Walking on a flat piece of nylon webbing tensioned between two trees. Think of it like a tightrope but wider (1-2 inches), lower to the ground (knee to waist height), and with dynamic bounce. It\'s a balance sport, a meditation practice, and a way to hang out in the park all at once.',
    links: [{ href: '/learn', label: 'Learn to slackline' }],
  },
  {
    q: 'I\'ve never done this. Can I just show up?',
    a: 'Yes. That\'s literally how everyone starts. Come to a Sunday session at Dolores Park, say "can I try?" and someone will hold your hand while you take your first steps. No signup, no waiver, no experience needed. Dat taught hundreds of people exactly this way.',
    links: [{ href: '/spots', label: 'Find a spot' }],
  },
  {
    q: 'Do I need my own gear?',
    a: 'Not to start. People share. Come try different setups before buying anything. When you\'re ready, a basic ratchet kit with tree protectors runs $50-80. That\'s the whole investment.',
    links: [{ href: '/gear', label: 'Gear guide' }],
  },
  {
    q: 'Is slacklining legal in SF parks?',
    a: 'SF Rec & Park created an official slacklining policy around 2012 — tree padding required, max 80ft, one line per meadow, only between trees with 1ft+ diameter. That policy page is now a 404 on their website. Whether it was revoked, updated, or just lost in a website migration is unknown. The safe bet: follow the original rules, pad your trees, and don\'t give anyone a reason to complain.',
    links: [{ href: '/safety', label: 'Full policy and enforcement history' }],
  },
  {
    q: 'Is it dangerous?',
    a: 'Search PubMed for "slackline injury" and you get 7 results. Seven. Most are about slacklining as therapy. For context, "skateboard injury" returns 1,200+. The line is usually 1-2 feet off the ground. You fall on grass. Common injuries: bruised egos, occasional sprained ankles, and broken fingers from catching the line wrong.',
    links: [{ href: '/safety', label: 'Injury archive and safety info' }],
  },
  {
    q: 'Where\'s the best spot for beginners?',
    a: 'Dolores Park, the palms at Cumberland & Dolores. It\'s where the community has been since 2009. Multiple lines, all levels, and people who will teach you. Precita Park and Duboce Park are also good — quieter, less intimidating if you want to practice without an audience.',
    links: [{ href: '/spots', label: 'All spots with difficulty ratings' }],
  },
  {
    q: 'When do people go?',
    a: 'Sundays at Dolores is the main session — afternoon, weather permitting. Weekends at the Panhandle for longlines. Weekday evenings in summer when the days are long. Weather drives everything. If it\'s sunny in SF, someone has a line up somewhere.',
    links: [{ href: '/events', label: 'Events and meetups' }],
  },
  {
    q: 'Does weather matter?',
    a: 'Yes. Rain makes webbing slippery. Wind makes longlines sway. Fog makes everything damp. Cold makes barefoot walking miserable. SF gets all of these, often in the same afternoon. Check the weather widget on our home page before heading out. The Mission (Dolores) is usually warmer and less foggy than the Sunset or the beach.',
  },
  {
    q: 'What should I wear?',
    a: 'Whatever you\'d wear to the park. Barefoot is traditional and gives the best feel, but shoes work too — flat soles, minimal cushion (think Vans, not running shoes). Layers are smart in SF. Avoid loose clothing that could catch on the line.',
  },
  {
    q: 'How long does it take to learn?',
    a: 'Most people can stand on the line in 10 minutes. Walking the full length of a 50ft line might take a few sessions. Turning around — that\'s your first real milestone, and it could take weeks. Getting fluid takes months. Getting good takes years. The learning curve is steep at first, then the progress is addictive.',
    links: [{ href: '/learn', label: 'The full progression' }],
  },
  {
    q: 'What\'s the difference between slacklining, highlining, and tricklining?',
    a: 'Slacklining: walking a line in the park, low to the ground. Longlining: same thing but 100ft+, needs pulley tensioning. Tricklining: bouncing and doing flips on a bouncy line. Highlining: walking a line at serious height with a harness and leash. Waterlining: line over water. All start with the same skill — balance on the line.',
  },
  {
    q: 'Do I need to protect the trees?',
    a: 'Always. No exceptions. Tree padding under your slings prevents bark damage. It\'s the #1 reason we lose spots — someone rigs without pads, bark gets damaged, a complaint gets filed, rangers shut it down. ISA standard: 5cm+ wide slings, 20cm x 2-3m pads. A towel works in a pinch. Real tree protectors are $20-40.',
    links: [
      { href: '/safety', label: 'Tree protection standards' },
      { href: '/gear', label: 'Where to buy tree pads' },
    ],
  },
  {
    q: 'How do I find other slackliners in SF?',
    a: 'Show up at Dolores on a sunny Sunday. Post on the community board. Check the events page. The community went quiet on social media after 2018, but people are still out there walking. The trees haven\'t gone anywhere.',
    links: [
      { href: '/board', label: 'Community board' },
      { href: '/community', label: 'The SF crew' },
    ],
  },
  {
    q: 'Can kids slackline?',
    a: 'Absolutely. Kids are often better at it than adults — lower center of gravity, less fear, more willing to fall. Keep the line low (shin to knee height) and short (30ft or less). An adult should spot them until they\'re comfortable. It\'s one of the best balance activities for children.',
  },
  {
    q: 'What happened to SF Slackline?',
    a: 'The last @sfslackline tweet was November 7, 2018: "SF Slackers, still at it! Three lines up." Five likes. Then silence. People moved, life happened, the Twitter feed went dark. But the community didn\'t disappear — it just stopped being public. This site exists to bring it back.',
    links: [{ href: '/history', label: 'The full history' }],
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-[#1A3A4A]/10 hover:border-[#C8A84E]/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start justify-between gap-4"
      >
        <h3 className="font-display text-base sm:text-lg font-black text-[#1A3A4A] leading-snug">{faq.q}</h3>
        <span className="text-[#C8A84E] text-xl font-light shrink-0 mt-0.5 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-sm text-[#1A3A4A]/70 font-light leading-relaxed">{faq.a}</p>
          {faq.links && faq.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {faq.links.map((link) => (
                link.external ? (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-xs text-[#1E6B7B] font-semibold hover:text-[#C8A84E] transition-colors">
                    {link.label} {"->"}
                  </a>
                ) : (
                  <Link key={link.href} href={link.href} className="text-xs text-[#1E6B7B] font-semibold hover:text-[#C8A84E] transition-colors">
                    {link.label} {"->"}
                  </Link>
                )
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-14 font-body">
      {/* Hero */}
      <section className="bg-[#1A3A4A] py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Questions?
          </h1>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-xl leading-relaxed">
            Everything newcomers ask before their first session. No question is dumb — everyone starts somewhere. Dat taught hundreds of people and they all asked the same things.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-[#F5F0E0] py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-black text-[#1A3A4A] mb-3">Still not sure?</h2>
          <p className="text-sm text-[#1A3A4A]/60 font-light mb-6 max-w-md mx-auto">
            The best answer to most questions is: just show up. Dolores Park, a sunny Sunday, look for the lines. Someone will help you.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/spots"
              className="bg-[#C8A84E] text-[#1A3A4A] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#D4B85E] transition-colors"
            >
              Find a Spot
            </Link>
            <Link
              href="/learn"
              className="border-2 border-[#1A3A4A] text-[#1A3A4A] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3A4A] hover:text-white transition-colors"
            >
              Learn to Slackline
            </Link>
            <Link
              href="/board"
              className="border-2 border-[#1A3A4A] text-[#1A3A4A] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A3A4A] hover:text-white transition-colors"
            >
              Community Board
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
