import Link from 'next/link';

export default function EventDetailPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 border border-purple-300">
          <h1 className="text-5xl font-extrabold mb-4 text-birthday-gold">🎂 Birthday Link Event Details 🎉</h1>
          <p className="text-lg text-purple-100 mb-6">
            View details for this curated birthday celebration. Check the venue, guest list,
            premium service options, and RSVP to join the experience. Make it unforgettable!
          </p>
          <Link
            href="/events"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Back to Events
          </Link>
        </div>
      </section>
    </main>
  );
}
