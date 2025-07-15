export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Never Celebrate Alone Again</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-80">
          Turn your birthday into a shared experience with people who match your date. Choose your tier. Celebrate in style.
        </p>
      </section>

      {/* Tier Cards */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 px-4">
        {/* Galaxy Tier */}
        <div className="bg-blue-800 rounded-2xl p-6 shadow-lg max-w-sm w-full hover:scale-105 transition">
          <h2 className="text-3xl font-bold mb-2">Galaxy Tier</h2>
          <p className="opacity-80 mb-4">
            Premium group birthday package with live artist performances, group cake, matching experience, and club entry.
          </p>
          <button className="bg-gray-300 hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">Learn More</button>
        </div>

        {/* Elite Tier */}
        <div className="bg-gradient-to-r from-yellow-500 to-purple-700 rounded-2xl p-6 shadow-lg max-w-sm w-full hover:scale-105 transition">
          <h2 className="text-3xl font-bold mb-2">Elite Tier</h2>
          <p className="opacity-80 mb-4">
            Exclusive birthday experience with hotel stays, bottle service, and VIP treatment. Perfect for premium celebrations.
          </p>
          <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded">Learn More</button>
        </div>

        {/* Cosmic Tier */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 rounded-2xl p-6 shadow-lg max-w-sm w-full hover:scale-105 transition">
          <h2 className="text-3xl font-bold mb-2">Cosmic Tier</h2>
          <p className="opacity-80 mb-4">
            Entry-level shared birthday event with group matching, themed decor, and nightlife access at an affordable rate.
          </p>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Learn More</button>
        </div>
      </section>
    </div>
  )
}
