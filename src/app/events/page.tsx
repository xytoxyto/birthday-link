import Link from 'next/link';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 border border-purple-300">
          <h1 className="text-5xl font-extrabold mb-4 text-birthday-gold">🎂 Group Birthday Celebrations</h1>
          <p className="text-lg text-purple-100 mb-6">
            Discover curated birthday events that connect you with people who share your day.
            Celebrate effortlessly, in style, with premium venues and unforgettable experiences.
          </p>
          <Link
            href="/events/create"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Create Your Event
          </Link>
        </div>
      </section>
    </main>
  );
}
