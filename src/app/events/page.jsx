// src/app/events/page.jsx
import Link from 'next/link';

export default function EventsPage() {
  const events = [
    { id: 1, name: 'Galaxy Rooftop Bash' },
    { id: 2, name: 'Elite Birthday Soiree' },
    { id: 3, name: 'Cosmic Connection Mixer' },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Birthday Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-300">
              Join us for a stellar celebration!
            </p>
            <Link href={`/events/${event.id}`} className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}