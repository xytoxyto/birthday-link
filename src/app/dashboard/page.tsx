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
        <div className="max-w-4xl w-full space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-birthday-gold mb-2">
            🎂 Your Birthday Link Dashboard
          </h1>
          <p className="text-base md:text-lg text-purple-100 max-w-3xl mx-auto">
            See your upcoming events, manage your birthday crew, and enjoy your Galaxy, Elite, or Cosmic perks.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex flex-col justify-between bg-white/10 border border-purple-300 rounded-lg p-4 backdrop-blur-md shadow-md"
              >
                <div>
                  <h2 className="text-lg font-semibold text-white">{event.name}</h2>
                  <p className="text-sm text-purple-200">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${tierClasses[event.tier]}`}>{event.tier}</span>
                  <button
                    type="button"
                    className="bg-birthday-gold text-purple-900 font-bold px-3 py-1 rounded-full shadow hover:bg-yellow-400 transition text-xs"
                  >
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/events"
              className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
