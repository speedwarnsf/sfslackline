'use client';

import Image from 'next/image';
import Link from 'next/link';
import YouTubeEmbed from '@/components/YouTubeEmbed';

/*
 * LEARN — Video IDs from original sfslackline.org (NWslackline series)
 * Community videos from @sfslackline YouTube/Vimeo references
 * Advice from community voice in SF_SLACKLINE_VOICE_AND_DATA.md
 */

const instructionalVideos = [
  { id: 'MdDzz5H2VQA', title: 'Setup & Basics', part: 1, desc: 'Pick your trees, rig your line, get on for the first time. Everything starts here.' },
  { id: 'REvz4jv1YZQ', title: 'Walking', part: 2, desc: 'Weight transfer, arm position, taking your first real steps. Look at the end of the line, not your feet.' },
  { id: 'QCQLJsSm_ec', title: 'Turning Around', part: 3, desc: 'The 180. Your first real milestone. Once you can turn, the line is yours.' },
  { id: '-gKMeeAk460', title: 'Sitting & Tricks', part: 4, desc: 'Controlled sitting, lying down, basic tricks. Building confidence and control on the line.' },
  { id: 'yjsaPot7hzE', title: 'Advanced Tips', part: 5, desc: 'Longer lines, higher tension, and hard-won wisdom from experienced slackliners.' },
];

const communityVideos = [
  { id: 'qKb35RrmuMo', title: 'SF Slackline Community' },
  { id: 'ZWWy0D8DOPc', title: 'Dolores Park Sessions' },
  { id: 'lOhk0QOpR8o', title: 'Panhandle Slacklining' },
  { id: 'mzIk-QX8qA0', title: 'Bay Area Sessions' },
  { id: 'pMdNYaQVeVA', title: 'SF Slackline Compilation' },
  { id: 'QBR6EFrF2rk', title: 'Ocean Beach Line' },
  { id: '4b6fxU9rcfU', title: 'Slackline Session' },
  { id: 'BeJVe_J1UNU', title: 'Slackline Skills' },
];

const funVideos = [
  { id: 'kdsryZINo3Y', title: 'Epic Slackline Moments' },
  { id: 'S2tiu26VNJM', title: 'Highlight Reel' },
  { id: 'qLnQ4kJfs50', title: 'Bay Area Adventures' },
  { id: 'Cc-Hn2QnU20', title: 'Tricklining' },
  { id: 'uWSLz-uC9XY', title: 'Slackline Fun' },
  { id: 'FXycwkc8BG0', title: 'Outdoor Balance' },
];

export default function LearnPage() {
  return (
    <div className="mt-14 font-body">
      {/* Hero with photo */}
      <section className="relative bg-[#1A3A4A] py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/photos/rainbow.jpg" alt="Rainbow line · Aug 2010" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Come Play
          </h1>
          <p className="text-white/70 text-sm sm:text-lg font-light max-w-xl">
            Real tutorials from the NWslackline series. Real advice from the SF crew.
            You don&apos;t need to buy anything to start — just show up.
          </p>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-[#F5F0E0] py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-xl font-black text-[#1A3A4A] mb-4">Getting Started</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-lg p-5 border border-[#C8A84E]/10">
              <h3 className="font-semibold text-sm text-[#1A3A4A] mb-2">Look at the end</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Fixed point at the end of the line, not your feet. Your body follows your eyes.
                This is the single most important thing.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#C8A84E]/10">
              <h3 className="font-semibold text-sm text-[#1A3A4A] mb-2">Breathe and bend</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Deep belly breaths. Soft knees. The line amplifies tension —
                if you&apos;re stiff, you&apos;re falling. Relax into the wobble.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 border border-[#C8A84E]/10">
              <h3 className="font-semibold text-sm text-[#1A3A4A] mb-2">Short and low first</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Start at 30–40ft, knee height. Don&apos;t buy gear yet —
                come to a session and try ours. Everyone shares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructional Series */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Instructional Series</h2>
          <p className="text-sm text-gray-500 font-light mb-8">5-part tutorial from NWslackline.org — featured on the original SF Slackline site</p>

          <div className="space-y-6">
            {instructionalVideos.map((v) => (
              <div key={v.id} className="rounded-xl overflow-hidden border border-gray-100">
                <YouTubeEmbed id={v.id} title={v.title} />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-[#C8A84E] font-bold">PART {v.part}</span>
                    <h3 className="font-semibold text-sm text-[#1A3A4A]">{v.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo break */}
      <div className="relative h-48 sm:h-64">
        <Image src="/photos/april2011.jpg" alt="April 2011 · Learning on the line" fill className="object-cover" />
      </div>

      {/* Progression Path */}
      <section className="bg-[#FAF8F2] py-12 sm:py-14 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-2">The Progression</h2>
          <p className="text-sm text-gray-500 font-light mb-8">Where you&apos;re going. No rush — most people spend months at each stage and that&apos;s the point.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg p-5 bg-[#F5F0E0] border border-[#C8A84E]/15">
              <span className="text-[10px] font-mono text-[#C8A84E] font-bold">STAGE 1</span>
              <h3 className="font-semibold text-sm text-[#1A3A4A] mt-1 mb-2">Beginner</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-2">
                30–50ft, knee height. Learning to stand, walk, turn around. A basic ratchet kit is all you need.
              </p>
              <p className="text-[10px] text-gray-400">Gear: ratchet kit, tree pads</p>
            </div>
            <div className="rounded-lg p-5 bg-[#F5F0E0] border border-[#C8A84E]/15">
              <span className="text-[10px] font-mono text-[#C8A84E] font-bold">STAGE 2</span>
              <h3 className="font-semibold text-sm text-[#1A3A4A] mt-1 mb-2">Intermediate</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-2">
                50–80ft. Sitting, tricks, surfing the line. You start feeling the line instead of fighting it.
              </p>
              <p className="text-[10px] text-gray-400">Gear: primitive or pulley system</p>
            </div>
            <div className="rounded-lg p-5 bg-[#F5F0E0] border border-[#C8A84E]/15">
              <span className="text-[10px] font-mono text-[#C8A84E] font-bold">STAGE 3</span>
              <h3 className="font-semibold text-sm text-[#1A3A4A] mt-1 mb-2">Longline</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-2">
                100–200ft+. Different beast. The line moves under you like water. Pulley tensioning systems, longer webbing, patience.
              </p>
              <p className="text-[10px] text-gray-400">Gear: pulleys, longer webbing, backup</p>
            </div>
            <div className="rounded-lg p-5 bg-[#F5F0E0] border border-[#C8A84E]/15">
              <span className="text-[10px] font-mono text-[#C8A84E] font-bold">STAGE 4</span>
              <h3 className="font-semibold text-sm text-[#1A3A4A] mt-1 mb-2">Highline</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-2">
                Off the ground. Harness, leash, redundant anchors. This is a different sport with real consequences. Learn from experienced highliners, not YouTube.
              </p>
              <p className="text-[10px] text-gray-400">Gear: harness, leash, redundant everything</p>
            </div>
          </div>

          <p className="text-xs text-gray-400 font-light mt-5">
            Need gear details? Check the{' '}
            <Link href="/gear" className="text-[#1E6B7B] underline underline-offset-2">Gear Guide</Link>.
            Tree protection info on the{' '}
            <Link href="/safety" className="text-[#1E6B7B] underline underline-offset-2">Safety page</Link>.
          </p>
        </div>
      </section>

      {/* Etiquette */}
      <section className="bg-[#1A3A4A] py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl font-black text-white mb-6">Etiquette</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Pad your trees', text: 'Every time. No exceptions. Wide protection pads under your slings. ISA standard: 5cm+ wide slings, 20cm x 2-3m pads. A towel works in a pinch but real padding is better.' },
              { title: 'Share the line', text: 'If someone\'s watching, invite them on. "Want to try?" built this entire community. Dat taught hundreds of people that way.' },
              { title: 'One line per meadow', text: 'SF Rec Park policy was one per park/meadow. We pushed that to 6 at Sasha\'s birthday. Don\'t be the reason they enforce it.' },
              { title: 'Take it down', text: 'No unattended lines. When you leave, the line comes with you. An empty line in a park is an invitation for a complaint.' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-sm font-semibold text-[#C8A84E] mb-2">{item.title}</h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Videos */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl font-black text-[#1A3A4A] mb-1">Community Videos</h2>
          <p className="text-sm text-gray-500 font-light mb-6">Real sessions, real community</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {communityVideos.map((v) => (
              <div key={v.id} className="rounded-lg overflow-hidden bg-white shadow-sm">
                <YouTubeEmbed id={v.id} title={v.title} />
                <div className="p-2">
                  <h3 className="text-[11px] font-medium text-[#1A3A4A]">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Videos */}
      <section className="bg-[#FAF8F2] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl font-black text-[#1A3A4A] mb-1">Inspiration</h2>
          <p className="text-sm text-gray-500 font-light mb-6">Pure stoke from the slackline world</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funVideos.map((v) => (
              <div key={v.id} className="rounded-lg overflow-hidden border border-gray-100">
                <YouTubeEmbed id={v.id} title={v.title} />
                <div className="p-2">
                  <h3 className="text-[11px] font-medium text-[#1A3A4A]">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gear basics + CTA */}
      <section className="bg-[#1E6B7B] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-xl font-black text-white mb-2">Don&apos;t buy gear to start</h2>
          <p className="text-sm font-light text-white/70 mb-5">
            Come to a session. Try different setups. Everyone shares. When you&apos;re ready to buy,
            <a href="https://balancecommunity.com" target="_blank" rel="noopener noreferrer" className="text-[#C8A84E] ml-1">Balance Community</a> has everything.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/gear"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Gear Guide
            </Link>
            <Link
              href="/safety"
              className="inline-block border border-[#C8A84E]/50 text-[#C8A84E] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Tree Protection
            </Link>
            <Link
              href="/spots"
              className="inline-block border border-white/30 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Find a Spot
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
