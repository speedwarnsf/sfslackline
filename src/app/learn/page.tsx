import Image from 'next/image';
import Link from 'next/link';

// Real instructional videos from the original sfslackline.org (NWslackline.org series)
const instructionalVideos = [
  { id: 'MdDzz5H2VQA', title: 'How to Slackline - Part 1: Setup & Basics', description: 'Everything you need to know to get started. How to pick trees, set up your line, and get on for the first time.' },
  { id: 'REvz4jv1YZQ', title: 'How to Slackline - Part 2: Walking', description: 'Weight transfer, arm position, and the fundamentals of taking your first steps on the line.' },
  { id: 'QCQLJsSm_ec', title: 'How to Slackline - Part 3: Turning Around', description: 'The 180-degree turn — your first real milestone. Techniques for reversing direction on the line.' },
  { id: '-gKMeeAk460', title: 'How to Slackline - Part 4: Tricks & Sitting', description: 'Controlled sitting, lying down, and basic tricks. Building confidence and control.' },
  { id: 'yjsaPot7hzE', title: 'How to Slackline - Part 5: Advanced Tips', description: 'Longer lines, higher tension, and tips from experienced slackliners.' },
];

// Real community/fun videos from the original site
const communityVideos = [
  { id: 'qKb35RrmuMo', title: 'SF Slackline Community', platform: 'youtube' as const },
  { id: 'ZWWy0D8DOPc', title: 'Dolores Park Sessions', platform: 'youtube' as const },
  { id: 'lOhk0QOpR8o', title: 'Panhandle Slacklining', platform: 'youtube' as const },
  { id: 'mzIk-QX8qA0', title: 'Bay Area Slackline Sessions', platform: 'youtube' as const },
  { id: 'pMdNYaQVeVA', title: 'SF Slackline Compilation', platform: 'youtube' as const },
  { id: 'QBR6EFrF2rk', title: 'Ocean Beach Line', platform: 'youtube' as const },
  { id: '4b6fxU9rcfU', title: 'Slackline Session', platform: 'youtube' as const },
  { id: 'BeJVe_J1UNU', title: 'Slackline Skills', platform: 'youtube' as const },
];

const funVideos = [
  { id: 'kdsryZINo3Y', title: 'Epic Slackline Moments', platform: 'youtube' as const },
  { id: 'S2tiu26VNJM', title: 'Slackline Highlight Reel', platform: 'youtube' as const },
  { id: 'qLnQ4kJfs50', title: 'Bay Area Adventures', platform: 'youtube' as const },
  { id: 'Cc-Hn2QnU20', title: 'Tricklining Compilation', platform: 'youtube' as const },
  { id: 'uWSLz-uC9XY', title: 'Slackline Fun', platform: 'youtube' as const },
  { id: 'FXycwkc8BG0', title: 'Outdoor Balance', platform: 'youtube' as const },
];

export default function LearnPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Learn to Slackline</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            From Zero to <span className="text-neon-lime">Hero</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            Real instructional videos, curated from the original SF Slackline site. 
            The same series that taught Bay Area slackliners since 2009.
          </p>
        </div>
      </section>

      {/* Quick tips */}
      <section className="py-12 bg-dark-900/30 border-y border-dark-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Focus on the End', tip: 'Look at a fixed point at the end of the line, not down at your feet. Your body follows your eyes.' },
              { icon: '🫁', title: 'Breathe', tip: 'Deep belly breaths. The line amplifies tension in your body — relaxation is the key to balance.' },
              { icon: '💪', title: 'Bend Your Knees', tip: 'Straight legs = falling. Keep a soft bend and let your body absorb the movement of the line.' },
            ].map((t) => (
              <div key={t.title} className="flex gap-4">
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-semibold text-fog-100 mb-1">{t.title}</h3>
                  <p className="text-fog-300 text-sm">{t.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructional Videos */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2">
            Instructional Series
          </h2>
          <p className="text-fog-300 mb-8">Complete 5-part tutorial from NWslackline.org — the same videos featured on the original SF Slackline site</p>

          <div className="space-y-6">
            {instructionalVideos.map((video, i) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass p-4 flex flex-col md:flex-row gap-6 group hover:scale-[1.005] transition-all block"
              >
                <div className="relative w-full md:w-80 aspect-video flex-shrink-0 overflow-hidden bg-dark-800">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/20 group-hover:bg-dark-950/0 transition-colors">
                    <div className="w-14 h-14 bg-neon-lime/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-dark-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-[family-name:var(--font-mono)] text-2xl text-neon-lime/30">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                      {video.title}
                    </h3>
                  </div>
                  <p className="text-fog-300 leading-relaxed">{video.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Community Videos */}
      <section className="py-16 md:py-24 bg-dark-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2">
            Community Videos
          </h2>
          <p className="text-fog-300 mb-8">Shot by SF slackliners — real sessions, real community</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {communityVideos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass p-3 group hover:scale-[1.02] transition-all block"
              >
                <div className="relative aspect-video mb-2 overflow-hidden bg-dark-800">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/20 group-hover:bg-dark-950/0 transition-colors">
                    <div className="w-10 h-10 bg-neon-lime/90 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-dark-950 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Videos */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-2">
            Other Fun Videos
          </h2>
          <p className="text-fog-300 mb-8">Inspiration, entertainment, and pure stoke from the slackline world</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funVideos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener"
                className="glass p-3 group hover:scale-[1.02] transition-all block"
              >
                <div className="relative aspect-video mb-2 overflow-hidden bg-dark-800">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-950/20 group-hover:bg-dark-950/0 transition-colors">
                    <div className="w-10 h-10 bg-neon-lime/90 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-dark-950 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-fog-100 group-hover:text-neon-lime transition-colors">
                  {video.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Ready to walk?
          </h2>
          <p className="text-fog-300 mb-8">
            Find a beginner-friendly spot near you and come to a Sunday session.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/spots" className="btn-primary">Find a Spot</Link>
            <Link href="/events" className="btn-outline">Join a Workshop</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
