import { useState, useEffect } from 'react';
import TierBadge from './TierBadge';
import TierFilter from './TierFilter';
import EventCardSkeleton from '@/components/EventCardSkeleton';

export default function DashboardEvents() {
  const [selectedTier, setSelectedTier] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate an API call to fetch events
    setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: 'Galaxy Rooftop Party',
          date: 'September 15, 2024',
          location: 'The Grand Rooftop',
          tier: 'Galaxy',
        },
        {
          id: 2,
          title: 'Elite Lounge Dinner',
          date: 'October 3, 2024',
          location: 'Sky Lounge',
          tier: 'Elite',
        },
        {
          id: 3,
          title: 'Cosmic Bowling Night',
          date: 'November 20, 2024',
          location: 'Stellar Lanes',
          tier: 'Cosmic',
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

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
        {loading ? (
          // Show skeletons while loading
          <>
            <EventCardSkeleton />
            <EventCardSkeleton />
            <EventCardSkeleton />
          </>
        ) : (
          // Show actual events when loaded
          events.map(event => {
            const { button } = require('./tierStyles').getTierStyles(event.tier);
            return (
              <div key={event.id} className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg space-y-2">
                <h3 className="text-xl font-bold text-white">{`🎉 ${event.title}`}</h3>
                <p className="text-white/80">{`${event.date} · ${event.location}`}</p>
                <TierBadge tier={event.tier} />
                <button className={`w-full font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition ${button}`}>
                  Learn More
                </button>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}