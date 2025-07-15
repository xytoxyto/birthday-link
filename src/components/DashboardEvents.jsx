export default function DashboardEvents() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-purple-900 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">🎂 Your Birthday Link Dashboard</h1>
        <p className="text-lg">
          See your upcoming events, manage your birthday crew, and enjoy your Galaxy, Elite, or Cosmic perks.
        </p>
      </div>

      <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        <div className="rounded-lg bg-white/10 backdrop-blur p-6 shadow-lg text-white space-y-4">
          <h2 className="text-xl font-bold">Galaxy Rooftop Party</h2>
          <p className="text-sm">September 15, 2024</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-700">
            Galaxy
          </span>
          <button className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            RSVP
          </button>
        </div>

        <div className="rounded-lg bg-white/10 backdrop-blur p-6 shadow-lg text-white space-y-4">
          <h2 className="text-xl font-bold">Elite Lounge Dinner</h2>
          <p className="text-sm">October 3, 2024</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-700">
            Elite
          </span>
          <button className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            RSVP
          </button>
        </div>

        <div className="rounded-lg bg-white/10 backdrop-blur p-6 shadow-lg text-white space-y-4">
          <h2 className="text-xl font-bold">Cosmic Bowling Night</h2>
          <p className="text-sm">November 20, 2024</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-pink-700">
            Cosmic
          </span>
          <button className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            RSVP
          </button>
        </div>
      </div>
    </section>
  );
}