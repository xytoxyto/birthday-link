import TierBadge from '@/components/TierBadge';

function VenueCard({ image, name, description, tier }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2 text-white">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-white/80 text-sm">{description}</p>
        <TierBadge tier={tier} />
        <button className="mt-2 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
          Choose This Venue
        </button>
      </div>
    </div>
  );
}

export default function VenuesPage() {
  const venues = [
    {
      id: 1,
      image: "/images/venues/rooftop.jpg",
      name: "The Grand Rooftop",
      description: "Celebrate under the stars with panoramic views and VIP service.",
      tier: "Galaxy"
    },
    {
      id: 2,
      image: "/images/venues/vip-lounge.jpg",
      name: "Elite VIP Lounge",
      description: "Luxury seating and premium bar for your Elite experience.",
      tier: "Elite"
    },
    {
      id: 3,
      image: "/images/venues/cosmic-bowling.jpg",
      name: "Cosmic Bowling",
      description: "Neon-lit fun perfect for your Cosmic tier celebration.",
      tier: "Cosmic"
    },
    {
      id: 4,
      image: "/images/venues/yacht.jpg",
      name: "Galaxy Yacht",
      description: "Sail away on your birthday with this exclusive yacht experience.",
      tier: "Galaxy"
    },
    {
      id: 5,
      image: "/images/venues/penthouse.jpg",
      name: "Elite Penthouse",
      description: "Luxury penthouse with skyline views and private chef.",
      tier: "Elite"
    },
    {
      id: 6,
      image: "/images/venues/arcade.jpg",
      name: "Cosmic Arcade",
      description: "Retro gaming fun with unlimited plays and snacks.",
      tier: "Cosmic"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">🎉 Explore Our Venues</h1>
          <p className="text-white/80">Find the perfect place for your birthday bash.</p>
        </div>

        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          {venues.map(venue => (
            <VenueCard
              key={venue.id}
              image={venue.image}
              name={venue.name}
              description={venue.description}
              tier={venue.tier}
            />
          ))}
        </div>
      </div>
    </section>
  );
}