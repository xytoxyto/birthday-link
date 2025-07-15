export default function EventDetail() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen">
      <div className="h-48 bg-cover bg-center rounded-b-lg shadow-lg" style={{ backgroundImage: 'url(/images/event-cover.jpg)' }} />

      <div className="max-w-lg mx-auto p-6 space-y-6">
        <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-white space-y-4">
          <h1 className="text-3xl font-bold mb-2">🎉 Galaxy Rooftop Party</h1>
          <p className="text-sm text-white/80">Hosted by Birthday Link</p>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-700">
            Galaxy Tier
          </span>
          <p className="text-lg text-white/80">
            Celebrate under the stars with live DJs, exclusive rooftop access, group matching, and VIP service.
          </p>
          <div className="border-t border-white/20 pt-4">
            <p className="text-sm text-white/60">Venue: The Grand Rooftop</p>
            <p className="text-sm text-white/60">Date: September 15, 2024</p>
          </div>
          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition">
            RSVP Now
          </button>
        </div>
      </div>
    </section>
  );
}