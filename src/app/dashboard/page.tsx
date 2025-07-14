import Link from 'next/link';

interface Event {
  id: number;
  name: string;
  date: string;
  tier: 'Galaxy' | 'Elite' | 'Cosmic';
}

const events: Event[] = [
  {
    id: 1,
    name: 'Galaxy Rooftop Party',
    date: '2024-09-15',
    tier: 'Galaxy',
  },
  {
    id: 2,
    name: 'Elite Lounge Dinner',
    date: '2024-10-03',
    tier: 'Elite',
  },
  {
    id: 3,
    name: 'Cosmic Bowling Night',
    date: '2024-11-20',
    tier: 'Cosmic',
  },
];

const tierClasses: Record<Event['tier'], string> = {
  Galaxy: 'bg-gradient-to-r from-birthday-blue to-birthday-purple text-white',
  Elite: 'bg-birthday-gold text-purple-900',
  Cosmic: 'bg-gradient-to-r from-purple-500 to-blue-500 text-white',
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-4 md:p-8">
        <div className="max-w-3xl w-full bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 md:p-8 border border-purple-300 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-birthday-gold">
              🎂 Your Birthday Link Dashboard 🎉
            </h1>
            <p className="text-base md:text-lg text-purple-100">
              View your matched birthday celebrations, upcoming events, and manage your RSVPs.
              Birthday Link ensures you never celebrate alone with curated, premium experiences.
            </p>
          </div>

          <ul className="space-y-4 text-left">
            {events.map((event) => (
              <li key={event.id} className="bg-white/10 rounded-lg p-4 border border-purple-300 shadow-md">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">{event.name}</h2>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tierClasses[event.tier]}`}>
                    {event.tier}
                  </span>
                </div>
                <p className="text-sm text-purple-200 mt-1">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
                <button
                  type="button"
                  className="mt-3 bg-birthday-gold text-purple-900 font-bold px-4 py-2 rounded-full shadow hover:bg-yellow-400 transition text-sm"
                >
                  RSVP
                </button>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Link
              href="/events"
              className="inline-block bg-birthday-gold text-purple-900 font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow hover:bg-yellow-400 transition text-sm md:text-base"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
