import { useState } from 'react';
import TierBadge from './TierBadge';
import TierFilter from './TierFilter';

export default function DashboardEvents() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="bg-gradient-to-b from-blue-900 to-purple-900 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center text-white mb-8">
        <h1 className="text-3xl font-bold mb-2">🎂 Your Birthday Link Dashboard</h1>
        <p className="text-lg">
          See your upcoming events, manage your birthday crew, and enjoy your Galaxy, Elite, or Cosmic perks.
        </p>
      </div>
      
      {/* Add the filter component right after the header */}
      <div className="max-w-3xl mx-auto mb-8">
        <TierFilter 
          onTierSelect={setSelectedTier} 
          onDateChange={setSelectedDate}
          selectedTier={selectedTier}
        />
      </div>

      <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-2">
          <h3 className="text-xl font-bold text-white">🎉 Galaxy Rooftop Party</h3>
          <p className="text-white/80">September 15, 2024 · The Grand Rooftop</p>
          <TierBadge tier="Galaxy" />
          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-2">
          <h3 className="text-xl font-bold text-white">🎉 Elite Lounge Dinner</h3>
          <p className="text-white/80">October 3, 2024 · Sky Lounge</p>
          <TierBadge tier="Elite" />
          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-2">
          <h3 className="text-xl font-bold text-white">🎉 Cosmic Bowling Night</h3>
          <p className="text-white/80">November 20, 2024 · Stellar Lanes</p>
          <TierBadge tier="Cosmic" />
          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}