import Image from 'next/image';
import Link from 'next/link';

/*
 * HISTORY — ALL DATA FROM SF_SLACKLINE_VOICE_AND_DATA.md
 * Timeline built from 360 @sfslackline tweets (2011–2018), EXIF metadata,
 * archived sfslackline.org, SF Rec & Park policy (now 404).
 * Real tweet quotes used as primary-source oral history throughout.
 */

/* ── helpers ─────────────────────────────────────────────────────────── */

function Tweet({ text, date, highlight }: { text: string; date: string; highlight?: boolean }) {
  return (
    <blockquote
      className={`rounded-lg p-4 sm:p-5 ${
        highlight
          ? 'bg-red-900/80 border-l-4 border-red-400'
          : 'bg-[#1A3A4A] border-l-4 border-[#C8A84E]'
      }`}
    >
      <p className="text-white/90 text-sm sm:text-base italic leading-relaxed">{text}</p>
      <footer className="text-[11px] text-white/40 mt-2 not-italic">@sfslackline · {date}</footer>
    </blockquote>
  );
}

function Photo({ src, caption, tall }: { src: string; caption: string; tall?: boolean }) {
  return (
    <figure className="rounded-lg overflow-hidden">
      <div className={`relative ${tall ? 'h-64 sm:h-80' : 'h-48 sm:h-64'}`}>
        <Image src={src} alt={caption} fill className="object-cover" />
      </div>
      <figcaption className="text-[10px] text-gray-400 mt-1.5 px-0.5">{caption}</figcaption>
    </figure>
  );
}

function Enforcement({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-red-950/30 border border-red-900/30 rounded-lg p-4 sm:p-5 my-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-red-400 text-xs font-semibold uppercase tracking-widest">⚠ Enforcement</span>
      </div>
      {children}
    </div>
  );
}

/* ── page ─────────────────────────────────────────────────────────────── */

export default function HistoryPage() {
  return (
    <div className="mt-14 font-body">
      {/* ═══ Hero ═══ */}
      <section className="relative h-[55vh] min-h-[340px] max-h-[500px] flex items-end overflow-hidden">
        <Image
          src="/photos/memorial.jpg"
          alt="Memorial Day slackline, May 30, 2011 — Nikon D90"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A4A] via-[#1A3A4A]/60 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pb-10 sm:pb-14">
          <h1 className="font-display text-4xl sm:text-6xl font-black text-white leading-[1.1] mb-3">
            Line Is Down.<br />Moon Is Up.
          </h1>
          <p className="text-white/50 text-sm sm:text-base font-light max-w-lg">
            Nine years of slacklining in San Francisco — told through tweets, photos, and the people who were there. No corporate version. Just what happened.
          </p>
        </div>
      </section>

      {/* ═══ Intro blurb ═══ */}
      <section className="bg-[#FAF8F5] py-10 sm:py-14 border-b border-[#E8E4DE]">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
            From 2009 to 2018, a loose crew of slackliners turned the palm trees at Dolores Park
            into one of the most consistent outdoor communities in San Francisco. They documented
            everything — 360 tweets, 849 photos, 57 albums. This is that record, in their words.
          </p>
        </div>
      </section>

      {/* ═══ Timeline ═══ */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">

          {/* ── 2009 ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#C8A84E]">2009</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Origins</p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  San Francisco Slacklining Association founded. sfslackline.org goes up on Squarespace v5.
                  First lines rigged at the palm trees in Dolores Park — Cumberland & Dolores, the spot
                  that would become home base for nearly a decade.
                </p>
                <p className="text-gray-500 text-sm italic">
                  No one knows the rules yet because there aren&apos;t any.
                </p>
              </div>
            </div>
          </div>

          {/* ── 2010 ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#C8A84E]">2010</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">First Lines</p>
              </div>
              <div className="flex-1 space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  @sfslackline Twitter account goes live in August. The community starts documenting —
                  nightlines at Dolores Park shot on iPhones, a Yosemite trip on a Canon PowerShot G11,
                  rainbow lines on a Nikon D90. The crew coalesces around the palms.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <Photo src="/photos/nightline-2.jpg" caption="Nightline at Dolores Park, Oct 12, 2010 — iPhone, GPS: 37.7593, -122.4260" />
                  <Photo src="/photos/rainbow.jpg" caption="Rainbow line, Aug 8, 2010 — Nikon D90" />
                </div>
                <Photo src="/photos/yosemite.jpg" caption="Yosemite, Aug 10, 2010 — Canon PowerShot G11" />
              </div>
            </div>
          </div>

          {/* ── 2011 ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#C8A84E]">2011</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Peak Community</p>
              </div>
              <div className="flex-1 space-y-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  The peak year. Almost daily tweets turn the feed into a real-time line-status system.
                  Dat gives lessons at the palms. Sasha&apos;s birthday means six lines simultaneously in
                  Dolores Park. The crew films for One Day on Earth on 11.11.11. They rig a 150-foot
                  line over sand at Ocean Beach south of the hang gliders. 849 photos across 57 albums.
                </p>

                <Tweet text="Jst put on a little show for the sfpd... Nerve wracking!" date="Feb 27, 2011" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Photo src="/photos/prideline.jpg" caption="Pride weekend, Jun 25, 2011" />
                  <Photo src="/photos/prideline-2.jpg" caption="Pride weekend, Jun 25, 2011" />
                </div>

                <Photo src="/photos/july4th.jpg" caption="July 4th weekend, Jul 2, 2011 — Nikon D90" />

                <Tweet text="Line is down. Moon is up." date="2011" />

                <Tweet text="Sasha's bday at dp. 6 lines. Come out!!" date="Sep 2011" />

                <Enforcement>
                  <Tweet
                    text="Trucks rolled up with fence. Lines dwn."
                    date="Jun 3, 2011"
                    highlight
                  />
                  <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                    Dolores Park playground renovation begins. Fencing goes up. The community relocates to
                    &quot;the old spot&quot; near the J Church line. The first taste of displacement —
                    not from enforcement, but from construction.
                  </p>
                </Enforcement>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Photo src="/photos/ocean-beach.jpg" caption="Ocean Beach, Dec 6, 2011 — GPS: 37.7748, -122.4472" />
                  <Photo src="/photos/ocean-beach-2.jpg" caption="Ocean Beach, Dec 5, 2011 — 150ft over sand" />
                </div>

                <Photo src="/photos/nightline-3.jpg" caption="Nightline at Dolores Park" tall />

                <Tweet text="Such a perfect night. -Anya" date="Aug 2011" />
              </div>
            </div>
          </div>

          {/* ── 2012 ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#C8A84E]">2012</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Longlines &amp; Pushback</p>
              </div>
              <div className="flex-1 space-y-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  The Panhandle at Cole becomes longline HQ — 100 to 186 feet. A 200–300ft threaded line
                  gets attempted in Golden Gate Park. First highline photos show up, shot on a Canon EOS-1D
                  Mark IV. SlackDay festival in Sausalito draws 30+ people. Andy Lewis — Marin native,
                  four-time world champion — performs at Madonna&apos;s Super Bowl halftime show. Slacklining
                  is suddenly visible, and that visibility has consequences.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Photo src="/photos/highline.jpg" caption="Highline, Feb 18, 2012 — Canon EOS-1D Mark IV" tall />
                  <Photo src="/photos/highline-2.jpg" caption="Highline, Feb 18, 2012" tall />
                </div>

                <Photo src="/photos/rooftop.jpg" caption="SF rooftop session, Feb 24, 2012 — iPhone 4, GPS: 37.7868, -122.4038" />

                <Enforcement>
                  <div className="space-y-3">
                    <Tweet
                      text="Due to fences and park rangers"
                      date="Feb 4, 2012"
                      highlight
                    />
                    <Tweet
                      text="Getting shut down. We need to do something about this."
                      date="Jun 2, 2012"
                      highlight
                    />
                    <Tweet
                      text="Scratch that. Douchebag complained and Park Police say NO."
                      date="Sep 30, 2012"
                      highlight
                    />
                    <Tweet
                      text="Waterline up walked and shutdown by nps rangers."
                      date="Sep 30, 2012"
                      highlight
                    />
                  </div>
                  <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                    2012 is when slacklining&apos;s relationship with authorities starts to break down. Four
                    documented enforcement incidents in a single year. Park Police, NPS rangers, complaints
                    from bystanders. The community starts to realize they need a policy — something official
                    that says they&apos;re allowed to be here.
                  </p>
                </Enforcement>

                <Photo src="/photos/sausalito.jpg" caption="SlackDay festival, MLK Park, Sausalito — Sep 8, 2012. 30+ people." />

                <Tweet text="Field tripping in the east bay. 4 lines at lake merritt." date="Oct 2011" />
              </div>
            </div>
          </div>

          {/* ── 2013 ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#C8A84E]">2013</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Expansion</p>
              </div>
              <div className="flex-1 space-y-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  The crew pushes into new spots. Waterlines at Islais Creek in Dogpatch. Sessions at Fort
                  Miley — &quot;one high and one low!&quot; 140ft becomes the standard at Cole, with T
                  rigging regularly. Someone proposes on a 140ft line at the Panhandle. 195ft in June.
                </p>

                <Tweet text="Equinox line this sunday!! 135' at panhandle and cole. Celebrate perfect balance with us." date="Sep 22, 2013" />

                <Tweet text="Wanna marry me?" date="Aug 13, 2013" />

                <Photo src="/photos/panhandle-170.jpg" caption="170ft at the Panhandle, Nov 27, 2011" />

                <p className="text-gray-500 text-sm leading-relaxed">
                  World-class slackliners start passing through. Alexander Schulz, the German world record
                  holder, stays with the crew and walks the longest midline world record. Lukas Irmler crashes
                  for several nights. Tarzen — the Grand Slacker of Austin — comes through with his chihuahua
                  Moca. SF Slackline isn&apos;t isolated. It&apos;s a node in a global network.
                </p>
              </div>
            </div>
          </div>

          {/* ── 2014 ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#C8A84E]">2014</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Settling Down</p>
              </div>
              <div className="flex-1 space-y-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Dusty and Tamara get married on February 1st. The daily status updates slow down.
                  Sessions shift to Precita Park and the Panhandle. The Dolores Park renovation drags on.
                  People grow up — same crew, different rhythm.
                </p>

                <Tweet text="First official kiss as man and wife!" date="Feb 1, 2014" />

                <Tweet text="Happy valentines day sf slackers! And a very happy anniversary to Dusty and Tamara." date="Feb 14, 2015" />
              </div>
            </div>
          </div>

          {/* ── The Policy ── */}
          <div className="py-12 sm:py-16 border-b border-gray-100 bg-[#FAF8F5] -mx-5 sm:-mx-6 px-5 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div className="sm:w-36 shrink-0">
                  <span className="font-display text-3xl sm:text-4xl font-black text-[#1E6B7B]">Policy</span>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">SF Rec &amp; Park</p>
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    At some point — likely in response to the 2012 enforcement conflicts — SF Rec &amp; Park
                    created an official slacklining policy. It was real. It had rules. It meant slacklining
                    was <em>allowed</em>.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-2">
                    <p className="text-xs font-semibold text-[#1E6B7B] uppercase tracking-wider mb-3">Key Rules (archived 2019)</p>
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex gap-2"><span className="text-[#1E6B7B]">→</span> Allowed in city parks (with exceptions)</li>
                      <li className="flex gap-2"><span className="text-[#1E6B7B]">→</span> Tree padding required — carpet, felt, burlap, or pro products</li>
                      <li className="flex gap-2"><span className="text-[#1E6B7B]">→</span> Trees under 1 foot diameter: no</li>
                      <li className="flex gap-2"><span className="text-[#1E6B7B]">→</span> Max 80 feet. One line per meadow.</li>
                      <li className="flex gap-2"><span className="text-[#1E6B7B]">→</span> No unattended lines. Only between trees — not structures.</li>
                      <li className="flex gap-2"><span className="text-[#1E6B7B]">→</span> SFRPD can stop any activity immediately</li>
                      <li className="flex gap-2"><span className="text-red-500">→</span> <strong>Slackliners assume all risk. Individuals liable for damage or injury.</strong></li>
                    </ul>
                    <p className="text-[10px] text-gray-400 mt-3">
                      Source:{' '}
                      <a
                        href="https://web.archive.org/web/20190920143203/https://sfrecpark.org/slacklining-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#1E6B7B]"
                      >
                        Wayback Machine, Sep 2019
                      </a>
                    </p>
                  </div>
                  <div className="bg-red-950/10 border border-red-200 rounded-lg p-4 mt-2">
                    <p className="text-sm text-red-800 font-semibold">This page is now a 404.</p>
                    <p className="text-xs text-red-700/70 mt-1 leading-relaxed">
                      sfrecpark.org/slacklining-policy/ returns &quot;page not found&quot; as of 2026.
                      Whether the policy was revoked, moved, or just lost in a site redesign — nobody seems
                      to know. The Wayback Machine archive is the only proof it existed. The 404{' '}
                      <em>is</em> the story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── 2016–2018 ── */}
          <div className="py-12 sm:py-16">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="sm:w-36 shrink-0">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#C8A84E]/60">2016</span>
                <span className="font-display text-4xl sm:text-5xl font-black text-[#C8A84E]/30">–18</span>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Quiet</p>
              </div>
              <div className="flex-1 space-y-5">
                <p className="text-gray-700 text-sm leading-relaxed">
                  2016: three tweets total. Lines still go up at Dolores, Duboce Park, Golden Gate Park.
                  But the daily rhythm is gone. No more &quot;Line goin up in 15.&quot; No more
                  &quot;3 lines up. Sun. Come out.&quot;
                </p>

                <Tweet text="Nice looking line going up at the base of duboce park." date="Aug 10, 2016" />

                <Tweet text="GG Park line down." date="Jun 12, 2016" />

                <p className="text-gray-700 text-sm leading-relaxed">
                  Then, November 7, 2018. The final tweet. A photo. Five likes.
                </p>

                <div className="bg-[#1A3A4A] rounded-lg p-6 sm:p-8 text-center">
                  <p className="text-white text-base sm:text-lg italic leading-relaxed">
                    &quot;SF Slackers, still at it! Three lines up.&quot;
                  </p>
                  <p className="text-[11px] text-white/30 mt-3">@sfslackline · Nov 7, 2018 — the last tweet. 5 likes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Stats ═══ */}
      <section className="bg-[#1A3A4A] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {[
              { num: '360', label: 'Tweets' },
              { num: '849', label: 'Photos' },
              { num: '57', label: 'Albums' },
              { num: '9', label: 'Years Active' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl sm:text-5xl font-black text-[#C8A84E]">{stat.num}</div>
                <p className="text-xs text-white/40 font-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Photo grid ═══ */}
      <section className="bg-[#FAF8F5] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1A3A4A] mb-8">From the Archive</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { src: '/photos/0-0.jpg', caption: 'Memorial Day, May 30, 2011' },
              { src: '/photos/april2011.jpg', caption: 'April 2011' },
              { src: '/photos/big-sur.jpg', caption: 'Big Sur' },
              { src: '/photos/big-sur-2.jpg', caption: 'Big Sur' },
              { src: '/photos/panhandle-nemesis.jpg', caption: 'Panhandle nemesis' },
              { src: '/photos/nightline.jpg', caption: 'Nightline at Dolores Park' },
            ].map((photo) => (
              <div key={photo.src} className="relative h-40 sm:h-52 rounded-lg overflow-hidden group">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-2 left-2 right-2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Closing ═══ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <blockquote className="text-gray-600 text-base sm:text-lg italic font-light leading-relaxed">
            &quot;A little rain wont teather us to the earth. But it reminds us that things fall.&quot;
          </blockquote>
          <p className="text-[11px] text-gray-400 mt-3">@sfslackline · Mar 13, 2011</p>

          <div className="mt-10 flex gap-3 justify-center flex-wrap">
            <a
              href="https://sfslackline.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C8A84E] text-[#1A3A4A] px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-[#B8983E] transition-colors"
            >
              Original Site
            </a>
            <Link
              href="/community"
              className="inline-block border border-gray-300 text-[#1A3A4A] px-6 py-3 rounded text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
            >
              Meet the Crew
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
