import PropTypes from 'prop-types';

// Tradition card component for better organization and reusability
function TraditionCard({ country, flag, description }) {
  return (
    <div 
      className="bg-white/10 rounded-lg p-3 hover:bg-white/20 transition cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`Birthday tradition in ${country}`}
    >
      <div className="flex items-start">
        <span className="text-2xl mr-3" aria-hidden="true">{flag}</span>
        <div>
          <h4 className="font-bold">{country}</h4>
          <p className="text-sm text-white/80">{description}</p>
        </div>
      </div>
    </div>
  );
}

TraditionCard.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired
};

export default function TraditionExplorer({ currentSign }) {
  const traditions = [
    {
      country: "Japan",
      flag: "🇯🇵",
      description: `Red is considered lucky for ${currentSign.name} in Japan. Birthday celebrations often include 
                    red bean mochi and prosperity symbols.`
    },
    {
      country: "Mexico",
      flag: "🇲🇽",
      description: `${currentSign.name} birthdays in Mexico might include a piñata filled with spicy candy to 
                    represent the fire sign's bold nature.`
    },
    {
      country: "India",
      flag: "🇮🇳",
      description: `${currentSign.name} birthdays may incorporate red sandal paste blessings and energetic 
                    Bhangra dancing to channel Mars energy.`
    },
    {
      country: "Brazil",
      flag: "🇧🇷",
      description: `Brazilian ${currentSign.name} celebrations often include competitive capoeira displays 
                    and spicy feijoada to honor the zodiac's passionate nature.`
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white mt-6">
      <h3 className="text-xl font-semibold mb-2">Birthday Traditions Around the World</h3>
      <p className="text-white/80 mb-4">
        Explore how {currentSign.name} birthdays are celebrated globally and incorporate these traditions 
        into your shared celebrations.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {traditions.map((tradition) => (
          <TraditionCard 
            key={tradition.country}
            country={tradition.country}
            flag={tradition.flag}
            description={tradition.description}
          />
        ))}
      </div>
      
      <button 
        className="w-full mt-4 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition"
        aria-label="Explore more birthday traditions"
      >
        Explore More Traditions
      </button>
    </div>
  );
}

TraditionExplorer.propTypes = {
  currentSign: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};