// Add filtering functionality
'use client';
import { useState, useEffect } from 'react';
import TierBadge from '@/components/TierBadge';

function VenueCard({ image, name, description, tier, availability, tags, index, onToggleCompare, isSelected }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-white/10 backdrop-blur rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <button
              onClick={() => setShowDetails(true)}
              className="text-white underline text-sm"
            >
              View Details
            </button>
          </div>
        </div>
        <div className="p-4 space-y-2 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-white/80 text-sm">{description}</p>
          <TierBadge tier={tier} />
          <button className="mt-2 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Choose This Venue
          </button>
        </div>
      </motion.div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-blue-900/90 backdrop-blur-lg rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="relative h-72">
              <img src={image} alt={name} className="w-full h-full object-cover" />
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                <TierBadge tier={tier} />
              </div>
              <p className="text-white/80">{description}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">Amenities</h3>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    <li className="flex items-center text-white/80"><span className="mr-2">✓</span> Free WiFi</li>
                    <li className="flex items-center text-white/80"><span className="mr-2">✓</span> Catering Available</li>
                    <li className="flex items-center text-white/80"><span className="mr-2">✓</span> Sound System</li>
                    <li className="flex items-center text-white/80"><span className="mr-2">✓</span> Lighting</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Capacity</h3>
                  <p className="text-white/80">Up to 100 guests</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-white/80">123 Birthday Avenue, Suite 101</p>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button className="flex-1 bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition">
                  Book Now
                </button>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 bg-white/10 text-white font-semibold px-4 py-3 rounded-full shadow hover:bg-white/20 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Add search bar to find venues
export default function VenuesPage() {
  const [loading, setLoading] = useState(true);
  const [compareList, setCompareList] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [tierFilter, setTierFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Simulate loading venues
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Add categories and tags for better organization
  const venues = [
    {
      id: 1,
      image: "/images/venues/rooftop.jpg",
      name: "The Grand Rooftop",
      description: "Celebrate under the stars with panoramic views and VIP service.",
      tier: "Galaxy",
      category: "Rooftop",
      tags: ["Outdoor", "Scenic View", "Bar Service"],
      capacity: 80,
      availability: [
        { day: 'Mon', available: true },
        { day: 'Tue', available: true },
        { day: 'Wed', available: false },
        { day: 'Thu', available: true },
        { day: 'Fri', available: false },
        { day: 'Sat', available: true },
        { day: 'Sun', available: true },
      ]
    },
    {
      id: 2,
      image: "/images/venues/vip-lounge.jpg",
      name: "Elite VIP Lounge",
      description: "Luxury seating and premium bar for your Elite experience.",
      tier: "Elite",
      category: "Lounge",
      tags: ["Indoor", "VIP Service", "Bar"],
      capacity: 50,
      availability: [
        { day: 'Mon', available: false },
        { day: 'Tue', available: true },
        { day: 'Wed', available: true },
        { day: 'Thu', available: false },
        { day: 'Fri', available: true },
        { day: 'Sat', available: true },
        { day: 'Sun', available: false },
      ]
    },
    {
      id: 3,
      image: "/images/venues/cosmic-bowling.jpg",
      name: "Cosmic Bowling",
      description: "Neon-lit fun perfect for your Cosmic tier celebration.",
      tier: "Cosmic",
      category: "Activity",
      tags: ["Indoor", "Bowling", "Games"],
      capacity: 100,
      availability: [
        { day: 'Mon', available: true },
        { day: 'Tue', available: true },
        { day: 'Wed', available: true },
        { day: 'Thu', available: true },
        { day: 'Fri', available: true },
        { day: 'Sat', available: false },
        { day: 'Sun', available: true },
      ]
    },
    {
      id: 4,
      image: "/images/venues/yacht.jpg",
      name: "Galaxy Yacht",
      description: "Sail away on your birthday with this exclusive yacht experience.",
      tier: "Galaxy",
      category: "Luxury",
      tags: ["Outdoor", "Water", "Luxury Service"],
      capacity: 20,
      availability: [
        { day: 'Mon', available: false },
        { day: 'Tue', available: false },
        { day: 'Wed', available: true },
        { day: 'Thu', available: true },
        { day: 'Fri', available: true },
        { day: 'Sat', available: true },
        { day: 'Sun', available: false },
      ]
    },
    {
      id: 5,
      image: "/images/venues/penthouse.jpg",
      name: "Elite Penthouse",
      description: "Luxury penthouse with skyline views and private chef.",
      tier: "Elite",
      category: "Luxury",
      tags: ["Indoor", "Skyline View", "Private Chef"],
      capacity: 10,
      availability: [
        { day: 'Mon', available: true },
        { day: 'Tue', available: false },
        { day: 'Wed', available: true },
        { day: 'Thu', available: true },
        { day: 'Fri', available: true },
        { day: 'Sat', available: true },
        { day: 'Sun', available: true },
      ]
    },
    {
      id: 6,
      image: "/images/venues/arcade.jpg",
      name: "Cosmic Arcade",
      description: "Retro gaming fun with unlimited plays and snacks.",
      tier: "Cosmic",
      category: "Activity",
      tags: ["Indoor", "Games", "Snacks"],
      capacity: 120,
      availability: [
        { day: 'Mon', available: true },
        { day: 'Tue', available: true },
        { day: 'Wed', available: true },
        { day: 'Thu', available: false },
        { day: 'Fri', available: true },
        { day: 'Sat', available: true },
        { day: 'Sun', available: true },
      ]
    }
  ];

  const categories = ['All', 'Rooftop', 'Lounge', 'Activity', 'Luxury'];

  // Update the filtered venues logic
  const filteredVenues = venues
    .filter(venue => tierFilter === 'All' || venue.tier === tierFilter)
    .filter(venue => categoryFilter === 'All' || venue.category === categoryFilter)
    .filter(venue =>
      searchQuery === '' ||
      venue.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venue.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  const toggleCompare = (venueId) => {
    if (compareList.includes(venueId)) {
      setCompareList(compareList.filter(id => id !== venueId));
    } else {
      if (compareList.length < 3) {
        setCompareList([...compareList, venueId]);
      } else {
        alert('You can compare up to 3 venues at a time');
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">🎉 Explore Our Venues</h1>
          <p className="text-white/80">Find the perfect place for your birthday bash.</p>
        </div>

        {/* Search and filter section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Search venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
            <select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              className="px-4 py-2 rounded-full bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            >
              <option value="All">All Tiers</option>
              <option value="Galaxy">Galaxy Tier</option>
              <option value="Elite">Elite Tier</option>
              <option value="Cosmic">Cosmic Tier</option>
            </select>
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-1 rounded-full text-sm ${
                  categoryFilter === category
                    ? 'bg-yellow-400 text-blue-900 font-bold'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } transition`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-white/5 animate-pulse rounded-lg h-80"></div>
            ))}
          </div>
        ) : (
          <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
            {filteredVenues.map((venue, index) => (
              <VenueCard
                key={venue.id}
                index={index}
                image={venue.image}
                name={venue.name}
                description={venue.description}
                tier={venue.tier}
                availability={venue.availability}
                tags={venue.tags}
                onToggleCompare={() => toggleCompare(venue.id)}
                isSelected={compareList.includes(venue.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Comparison toolbar - fixed at bottom when items are selected */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-900/90 backdrop-blur shadow-lg py-3 px-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white mr-2">
                {compareList.length} {compareList.length === 1 ? 'venue' : 'venues'} selected
              </span>
              <div className="flex gap-2">
                {compareList.map(id => {
                  const venue = venues.find(v => v.id === id);
                  return (
                    <div key={id} className="flex items-center bg-white/10 rounded-full px-2 py-1">
                      <span className="text-white text-sm mr-1">{venue.name}</span>
                      <button
                        onClick={() => toggleCompare(id)}
                        className="text-white/70 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCompareList([])}
                className="text-white/80 hover:text-white text-sm"
              >
                Clear All
              </button>
              <button className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
                Compare Venues
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}