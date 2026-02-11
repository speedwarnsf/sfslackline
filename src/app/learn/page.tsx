import Link from 'next/link';

const lessons = [
  {
    level: 'Beginner',
    color: 'neon-lime',
    modules: [
      { title: 'What is Slacklining?', duration: '5 min', description: 'History, gear basics, and what to expect.' },
      { title: 'Setting Up Your First Line', duration: '8 min', description: 'Tree selection, webbing setup, tension basics.' },
      { title: 'Mounting & Standing', duration: '10 min', description: 'Getting on the line and finding your center.' },
      { title: 'Your First Steps', duration: '12 min', description: 'Weight transfer, arm position, and breathing.' },
      { title: 'Turning Around', duration: '8 min', description: 'The 180 — your first real milestone.' },
    ],
  },
  {
    level: 'Intermediate',
    color: 'neon-cyan',
    modules: [
      { title: 'Walking with Confidence', duration: '10 min', description: 'Flow state, longer distances, different tensions.' },
      { title: 'Sitting & Lying Down', duration: '8 min', description: 'Controlled descents and recoveries.' },
      { title: 'Basic Tricks', duration: '15 min', description: 'Bounce walk, drop knee, buddha sit.' },
      { title: 'Different Line Types', duration: '10 min', description: 'Ratchet vs pulley, flat vs tubular webbing.' },
      { title: 'Longlining Basics', duration: '12 min', description: 'Lines over 30m — new challenges, new rewards.' },
    ],
  },
  {
    level: 'Advanced',
    color: 'neon-orange',
    modules: [
      { title: 'Tricklining', duration: '20 min', description: 'Backflips, chest bounces, combos.' },
      { title: 'Longline Mastery', duration: '15 min', description: '100m+ sends, wind management, mental game.' },
      { title: 'Highline Introduction', duration: '25 min', description: 'Safety systems, leashes, and mindset.' },
      { title: 'Rigging Advanced Systems', duration: '20 min', description: 'Pulleys, multipliers, highline anchors.' },
      { title: 'Competition Preparation', duration: '15 min', description: 'Judging criteria, routines, performance.' },
    ],
  },
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
            Free, structured lessons to take you from your first wobble to walking highlines. 
            Every lesson is written by experienced Bay Area slackliners who&apos;ve taught hundreds of people.
          </p>
        </div>
      </section>

      {/* Quick tips */}
      <section className="py-12 bg-dark-900/30 border-y border-dark-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Focus on Your Feet', tip: 'Look at a fixed point at the end of the line, not down at your feet.' },
              { icon: '🫁', title: 'Breathe', tip: 'Deep belly breaths. The line amplifies tension — stay relaxed.' },
              { icon: '💪', title: 'Bend Your Knees', tip: 'Straight legs = falling. Keep a soft bend and let your body absorb.' },
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

      {/* Curriculum */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {lessons.map((level) => (
              <div key={level.level}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className={`font-[family-name:var(--font-display)] text-3xl font-bold text-${level.color}`}>
                    {level.level}
                  </h2>
                  <div className={`flex-1 h-[1px] bg-${level.color}/20`} />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {level.modules.map((mod, i) => (
                    <div key={mod.title} className="glass p-6 group cursor-pointer hover:scale-[1.01] transition-all">
                      <div className="flex items-start justify-between mb-3">
                        <span className={`font-[family-name:var(--font-mono)] text-xs text-${level.color}/50`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-fog-300 bg-dark-700/50 px-2 py-0.5">{mod.duration}</span>
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-fog-100 group-hover:text-neon-lime transition-colors mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-fog-300 text-sm leading-relaxed">{mod.description}</p>
                    </div>
                  ))}
                </div>
              </div>
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
            Find a beginner-friendly spot near you and connect with local mentors.
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
