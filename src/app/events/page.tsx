import Link from 'next/link';

const events = [
  { date: 'Every Sunday', time: '11am - 4pm', title: 'Sunday Session @ Dolores Park', type: 'Recurring', description: 'Weekly community meetup. All levels welcome. Bring a line or use ours.', location: 'Dolores Park, south slope' },
  { date: 'Feb 22', time: '10am - 2pm', title: 'Beginner Workshop', type: 'Workshop', description: 'Free intro to slacklining. We provide the gear, you bring the curiosity. Limited to 20 people.', location: 'Golden Gate Park' },
  { date: 'Mar 1-2', time: 'All day', title: 'Castle Rock Highline Weekend', type: 'Trip', description: 'Highline trip to Castle Rock State Park. All experience levels for spectating, intermediate+ for walking. Carpool from SF.', location: 'Castle Rock State Park' },
  { date: 'Mar 15', time: '12pm - 5pm', title: 'SF Slackline Jam', type: 'Jam', description: 'Tricks, longlines, good vibes. Music, food, and friendly competition. Prizes for best trick.', location: 'Crissy Field' },
  { date: 'Apr 5', time: '9am - 3pm', title: 'Marin Highline Day', type: 'Trip', description: 'Guided highline experience in the Marin Headlands. Experienced riggers set up, you walk. Permit secured.', location: 'Marin Headlands' },
];

const typeColors: Record<string, string> = {
  Recurring: 'bg-neon-lime/10 text-neon-lime border-neon-lime/20',
  Workshop: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
  Trip: 'bg-neon-orange/10 text-neon-orange border-neon-orange/20',
  Jam: 'bg-neon-pink/10 text-neon-pink border-neon-pink/20',
};

export default function EventsPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-neon-lime text-xs font-semibold uppercase tracking-widest">Events</span>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold mt-3 mb-6 leading-tight">
            Get on <span className="text-neon-lime">The Line</span>
          </h1>
          <p className="text-fog-300 text-xl max-w-3xl leading-relaxed">
            Workshops, jams, highline trips, and weekly sessions. 
            There&apos;s always something happening in the Bay Area slackline scene.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.title} className="glass p-6 hover:scale-[1.005] transition-all">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Date */}
                  <div className="md:w-32 flex-shrink-0">
                    <div className="font-[family-name:var(--font-display)] text-lg font-bold text-fog-100">{event.date}</div>
                    <div className="text-fog-300 text-sm">{event.time}</div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-fog-100">{event.title}</h3>
                      <span className={`text-xs px-2 py-0.5 border ${typeColors[event.type]}`}>{event.type}</span>
                    </div>
                    <p className="text-fog-300 text-sm leading-relaxed mb-2">{event.description}</p>
                    <p className="text-fog-300/60 text-xs">📍 {event.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">
            Want to host an event?
          </h2>
          <p className="text-fog-300 mb-8">
            We support community-led workshops, jams, and trips. Get in touch and we&apos;ll help you organize.
          </p>
          <Link href="/community" className="btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
