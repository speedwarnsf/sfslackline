'use client';

import Image from 'next/image';
import Link from 'next/link';
import Lightbox, { useLightbox } from '@/components/Lightbox';

/*
 * SAFETY & LEGAL — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * Injury photos from sfslackline.org/sf_slackline/injury-upload/
 * Policy from Wayback Machine 2019 archive of sfrecpark.org/slacklining-policy/
 * Enforcement from @sfslackline tweets (2011–2018)
 * ISA standards from slacklineinternational.org
 */

const injuries = [
  { file: 'broken-finger.jpg', desc: 'Broken finger. Common when catching the line wrong on a fall.' },
  { file: 'xray-finger.jpg', desc: 'X-ray confirming fracture. Clean break, healed in 6 weeks.' },
  { file: 'xray-finger-2.jpg', desc: 'Second angle. Finger fractures are the most common slackline injury.' },
  { file: 'dat-arm-sore.png', desc: 'Dat\'s arm after a session. Rope burn from the line.' },
  { file: 'dat-arm-sore-2.png', desc: 'Dat\'s arm, day two. Friction injuries heal but they remind you.' },
  { file: 'high-ankle-sprain.jpg', desc: 'High ankle sprain. Landed wrong dismounting a 4ft line.' },
  { file: 'maybe-broken-toes.jpg', desc: 'Possibly broken toes. Never confirmed — no one went to the doctor.' },
  { file: 'finger-meet-biner.jpg', desc: 'Finger meets carabiner. Pinch point injury during rigging.' },
  { file: 'kikitoes.jpg', desc: 'Kiki\'s toes. Barefoot slacklining has consequences.' },
  { file: 'omalley-injury.jpg', desc: 'O\'Malley\'s injury. Details lost to time.' },
  { file: 'anya-14.jpg', desc: 'Anya\'s injury. Minor but documented.' },
  { file: 'miley_line_sm020.jpg', desc: 'Line injury at Fort Miley. The terrain there doesn\'t forgive.' },
];

const enforcementTimeline = [
  { date: 'Feb 27, 2011', tweet: '"Jst put on a little show for the sfpd... Nerve wracking!"', context: 'SFPD encounter at Dolores Park. Officers watched, didn\'t shut it down. But the message was clear.' },
  { date: 'Jun 2–3, 2011', tweet: '"Trucks rolled up with fence. Lines dwn."', context: 'Dolores Park playground renovation. Fencing forced the community to relocate to "the old spot" near J Church.' },
  { date: 'Feb 4, 2012', tweet: '"Due to fences and park rangers"', context: 'Continued displacement. Rangers actively pushing slackliners out of preferred spots.' },
  { date: 'Jun 2, 2012', tweet: '"Getting shut down. We need to do something about this."', context: 'The first real call to action. Something had changed — enforcement was no longer occasional.' },
  { date: 'Sep 30, 2012', tweet: '"Scratch that. Douchebag complained and Park Police say NO."', context: 'A single complaint killed a longline session at the Panhandle. Park Police responded immediately.' },
  { date: 'Sep 30, 2012', tweet: '"Waterline up walked and shutdown by nps rangers."', context: 'Same day. NPS rangers shut down a waterline. Two shutdowns in one afternoon.' },
  { date: 'Nov 7, 2018', tweet: '"SF Slackers, still at it! Three lines up."', context: 'The final tweet. 5 likes. After years of silence, one last proof of life. Then nothing.' },
];

export default function SafetyPage() {
  const lightbox = useLightbox(
    injuries.map((injury) => ({
      src: `/photos/injuries/${injury.file}`,
      alt: injury.desc,
      caption: injury.desc,
    }))
  );

  return (
    <div className="mt-14 font-body">
      {lightbox.index >= 0 && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={lightbox.close} />
      )}
      {/* Hero with photo */}
      <section className="relative bg-[#1A3A4A] py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/photos/april2011.jpg" alt="April 2011" fill className="object-cover" priority />
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-6">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-tight mb-3">
            Here&apos;s What<br />Actually Happens
          </h1>
          <p className="text-white/70 text-sm sm:text-lg font-light max-w-xl">
            Injuries, enforcement, policy, and what the medical literature says.
            Not a liability disclaimer. Not a scare tactic. Just the record.
          </p>
        </div>
      </section>

      {/* Injury Archive */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">Injury Archive</h2>
          <p className="text-sm text-gray-500 font-light mb-2">
            12 photos from sfslackline.org/sf_slackline/injury-upload/
          </p>
          <p className="text-sm text-gray-600 font-light mb-8 max-w-2xl">
            The community uploaded these. Broken fingers, rope burns, ankle sprains.
            Mostly minor. Nothing life-threatening. The worst injuries are broken fingers
            from catching the line on a fall, and ankle sprains from bad dismounts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {injuries.map((injury, i) => (
              <div key={injury.file} className="rounded-lg overflow-hidden border border-gray-100 cursor-pointer group" onClick={() => lightbox.open(i)}>
                <div className="relative h-32 sm:h-40 bg-gray-100">
                  <Image
                    src={`/photos/injuries/${injury.file}`}
                    alt={injury.desc}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-2.5 bg-[#F2F4F6]">
                  <p className="text-[11px] text-gray-600 font-light leading-snug">{injury.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Medical literature */}
          <div className="mt-10 p-5 rounded-lg bg-[#F5F0E0] border border-[#C8A84E]/20">
            <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-2">What the Medical Literature Says</h3>
            <p className="text-sm text-gray-700 font-light leading-relaxed">
              Search PubMed for &quot;slackline injury&quot; and you get <span className="font-semibold text-[#1A3A4A]">7 results</span>.
              Seven. Most of them are about slacklining as <em>therapy</em> — for ankle rehabilitation,
              balance training, postural control. The medical establishment has barely documented
              slackline injuries because there aren&apos;t enough serious ones to study.
            </p>
            <p className="text-sm text-gray-700 font-light leading-relaxed mt-3">
              For context: &quot;skateboard injury&quot; returns 1,200+ results. &quot;Bicycle injury&quot; returns 15,000+.
              Slacklining is one of the safest outdoor balance activities you can do. The line is
              usually 1–2 feet off the ground. You fall on grass.
            </p>
          </div>
        </div>
      </section>

      {/* SF Rec Park Policy */}
      <section className="bg-[#F2F4F6] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">SF Rec & Park Policy</h2>
          {/* Policy Disappearance Callout */}
          <div className="mb-8 p-5 rounded-lg bg-[#C8A84E]/15 border-l-4 border-[#C8A84E]">
            <p className="text-sm font-semibold text-[#1A3A4A] mb-1">
              The city&apos;s slacklining policy page at sfrecpark.org/slacklining-policy/ now returns 404.
            </p>
            <p className="text-sm text-gray-700 font-light">
              We&apos;ve preserved the original text here. Whether the policy was revoked, updated, or
              simply lost in a website migration to CivicPlus is unknown. The Dolores Park page
              (sfrecpark.org/parks-open-spaces/dolores-park/) is also gone. For what it&apos;s worth:
              Austin, Boulder, and Portland&apos;s slackline policy pages are all 404 too.
              Every city that once published slackline rules has quietly unpublished them.
            </p>
            <p className="text-xs text-gray-500 font-light mt-2">
              Archived via{' '}
              <a href="https://web.archive.org/web/20190920143203/https://sfrecpark.org/slacklining-policy/" target="_blank" rel="noopener noreferrer" className="text-[#1E6B7B] underline">
                Wayback Machine, Sep 20, 2019
              </a>
              . Confirmed identical in{' '}
              <a href="https://web.archive.org/web/20190514014819/https://sfrecpark.org/slacklining-policy/" target="_blank" rel="noopener noreferrer" className="text-[#1E6B7B] underline">
                May 2019 snapshot
              </a>.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200">
            <h3 className="font-display text-lg font-black text-[#1A3A4A] mb-4">Official Rules (as of 2019)</h3>
            <div className="space-y-3">
              {[
                { rule: 'Tree padding REQUIRED', detail: 'Carpet strips, felt mats, burlap, or professional tree protectors.' },
                { rule: 'Minimum tree diameter: 1 foot', detail: 'No rigging on small or young trees.' },
                { rule: 'Maximum line length: 80 feet', detail: 'Longer lines need more force on anchors.' },
                { rule: 'One slackline per park/meadow', detail: 'Not per tree pair — per entire meadow.' },
                { rule: 'Only between trees', detail: 'Not structures, poles, fences, or anything else.' },
                { rule: '8 feet clearance on both sides', detail: 'Buffer zone for pedestrians.' },
                { rule: 'No unattended lines', detail: 'Someone must be present at all times.' },
                { rule: 'No climbing trees', detail: 'Park Code 4.01(f). Even to rig.' },
                { rule: 'SFRPD can stop any activity immediately', detail: 'At their sole discretion.' },
                { rule: 'Individuals liable for all damage or injury', detail: 'The city assumes zero responsibility.' },
                { rule: 'Slackliners assume all risk', detail: 'Explicitly stated in the policy.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-full bg-[#1A3A4A] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-sm font-semibold text-[#1A3A4A]">{item.rule}</span>
                    <span className="text-sm text-gray-500 font-light"> — {item.detail}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-100">
              <h4 className="text-sm font-semibold text-red-800 mb-1">Banned Locations (5)</h4>
              <p className="text-sm text-red-700 font-light">
                Conservatory Valley, Botanical Garden, Music Concourse, Japanese Tea Garden, National AIDS Memorial Grove
              </p>
            </div>

            <div className="mt-4 p-4 rounded-lg bg-[#C8A84E]/10 border border-[#C8A84E]/20">
              <p className="text-sm text-gray-700 font-light">
                <span className="font-semibold text-[#1A3A4A]">To confirm current status:</span> Call
                SF Rec & Park at 415-831-2700. These rules may still be in effect — or they may not.
                The website can&apos;t tell you anymore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enforcement Timeline */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-1">Enforcement Timeline</h2>
          <p className="text-sm text-white/50 font-light mb-8">From @sfslackline tweets, 2011–2016</p>

          <div className="space-y-6">
            {enforcementTimeline.map((inc, i) => (
              <div key={i} className="border-l-2 border-[#C8A84E]/30 pl-5">
                <span className="text-[#C8A84E] text-xs font-mono">{inc.date}</span>
                <p className="text-white/90 text-sm italic mt-1">{inc.tweet}</p>
                <p className="text-white/50 text-xs font-light mt-1">{inc.context}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-lg bg-white/5 border border-white/10">
            <p className="text-white/70 text-sm font-light leading-relaxed">
              The pattern is clear. 2011: occasional encounters, mostly warnings. 2012: active shutdowns,
              complaint-driven enforcement. 2014 onward: the community went quieter. The tweets slowed.
              The lines didn&apos;t stop — they just stopped being public.
            </p>
          </div>
        </div>
      </section>

      {/* ISA Tree Protection Standards */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-1">ISA Tree Protection Standards</h2>
          <p className="text-sm text-gray-500 font-light mb-8">
            International Slackline Association &middot; DIN 79400 Standard
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-[#F2F4F6] border border-gray-200">
              <div className="font-display text-3xl font-black text-[#C8A84E] mb-1">30cm</div>
              <p className="text-sm font-semibold text-[#1A3A4A]">Minimum tree diameter</p>
              <p className="text-xs text-gray-500 font-light mt-1">
                About 12 inches. SF Rec Park required 1 foot — same standard.
                Smaller trees flex too much and sustain bark damage.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#F2F4F6] border border-gray-200">
              <div className="font-display text-3xl font-black text-[#C8A84E] mb-1">5cm+</div>
              <p className="text-sm font-semibold text-[#1A3A4A]">Minimum sling width</p>
              <p className="text-xs text-gray-500 font-light mt-1">
                About 2 inches. Narrow slings concentrate force and cut into bark.
                Wider distributes the load. This is non-negotiable.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#F2F4F6] border border-gray-200">
              <div className="font-display text-3xl font-black text-[#1A3A4A]">20cm</div>
              <p className="text-xs text-[#1E6B7B] font-medium">x 2–3 meters</p>
              <p className="text-sm font-semibold text-[#1A3A4A] mt-1">Protection pad specs</p>
              <p className="text-xs text-gray-500 font-light mt-1">
                20cm wide pads, 2–3 meters long, wrapped around the trunk
                under the sling. Prevents friction damage and bark compression.
              </p>
            </div>
          </div>

          {/* Three Categories of Tree Stress */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-semibold text-[#1A3A4A] mb-1">1. Tension</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                The pull force on the tree. Why minimum diameter matters — thin trees flex,
                crack, or uproot. Higher tension (longer lines, more bounce) = bigger tree required.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-semibold text-[#1A3A4A] mb-1">2. Pressure</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Contact force from sling on bark. Narrow slings concentrate force and crush cambium.
                Wide slings (5cm+) spread the load. Trees with thin bark are especially vulnerable.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-semibold text-[#1A3A4A] mb-1">3. Friction</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Sling movement against bark during use. Robust padding (felt, carpet) ensures
                the sling rubs on protection, not bark. This is what the 2–3 meter wrap is for.
              </p>
            </div>
          </div>

          <div className="mt-6 p-5 rounded-lg bg-[#1A3A4A]">
            <p className="text-white/80 text-sm font-light">
              <span className="text-[#C8A84E] font-semibold">Pad your trees. Don&apos;t be the reason we lose a spot.</span>
            </p>
            <p className="text-white/50 text-xs font-light mt-2">
              Full ISA standards: <a href="https://slacklineinternational.org/tree-protection/" target="_blank" rel="noopener noreferrer" className="text-[#C8A84E] underline">slacklineinternational.org/tree-protection</a>
              &nbsp;&middot;&nbsp;
              Gear standards: <a href="https://slacklineinternational.org/isa-gear-standards/" target="_blank" rel="noopener noreferrer" className="text-[#C8A84E] underline">slacklineinternational.org/isa-gear-standards</a>
              &nbsp;&middot;&nbsp;
              Report incidents: <a href="https://slacklineinternational.org/report-accident/" target="_blank" rel="noopener noreferrer" className="text-[#C8A84E] underline">slacklineinternational.org/report-accident</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E6B7B] py-10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="font-display text-xl font-black text-white mb-2">Know the rules. Protect the trees. Keep slacking.</h2>
          <p className="text-sm font-light text-white/70 mb-5">
            The best way to keep spots open is to be the slackliner that park rangers don&apos;t mind.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/gear"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Tree Protection Gear
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
