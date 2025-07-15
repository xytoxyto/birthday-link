import { useState } from 'react';

export default function TraditionExplorer({ currentSign }) {
  const [expandedCountry, setExpandedCountry] = useState(null);

  // Define traditions data that's specific to each sign
  const getTraditions = (sign) => {
    const name = sign?.name || 'Aries';
    const element = sign?.element?.toLowerCase() || 'fire';
    
    return [
      { 
        id: 'japan',
        country: 'Japan', 
        flag: '🇯🇵', 
        description: `${name} birthdays in Japan often incorporate ${element}-themed elements. Celebrations might include special red bean mochi and prosperity symbols that align with the ${name} spirit.`
      },
      { 
        id: 'mexico',
        country: 'Mexico', 
        flag: '🇲🇽', 
        description: `${name} birthdays in Mexico often feature vibrant decorations and a piñata filled with treats that represent the sign's ${element} nature. The celebration emphasizes the bold energy of ${name}.`
      },
      { 
        id: 'india',
        country: 'India', 
        flag: '🇮🇳', 
        description: `In India, ${name} birthdays may incorporate special blessings and energetic Bhangra dancing to channel the ${name} energy. The celebrations often feature colors and elements associated with the sign.`
      },
      { 
        id: 'brazil',
        country: 'Brazil', 
        flag: '🇧🇷', 
        description: `Brazilian ${name} celebrations often include lively music and dance that honors the ${element} nature of the sign. Special foods and decorations are chosen to amplify the ${name} qualities.`
      }
    ];
  };

  const traditions = getTraditions(currentSign);
  
  // Toggle expanded country view
  const toggleCountry = (id) => {
    if (expandedCountry === id) {
      setExpandedCountry(null);
    } else {
      setExpandedCountry(id);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white mt-6">
      <h3 className="text-xl font-semibold mb-2">Birthday Traditions Around the World</h3>
      <p className="text-white/80 mb-4">
        Explore how {currentSign?.name || 'zodiac'} birthdays are celebrated globally and incorporate these traditions 
        into your shared celebrations.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {traditions.map((tradition) => (
          <div 
            key={tradition.id}
            className={`bg-white/10 rounded-lg p-3 hover:bg-white/20 transition cursor-pointer ${
              expandedCountry === tradition.id ? 'ring-2 ring-yellow-400' : ''
            }`}
            onClick={() => toggleCountry(tradition.id)}
          >
            <div className="flex items-start">
              <span className="text-2xl mr-3">{tradition.flag}</span>
              <div>
                <h4 className="font-bold">{tradition.country}</h4>
                <p className="text-sm text-white/80">
                  {tradition.description}
                </p>
                {expandedCountry === tradition.id && (
                  <button className="mt-2 text-yellow-400 text-sm hover:underline">
                    Explore this tradition →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 bg-white/20 text-white px-4 py-2 rounded-full hover:bg-white/30 transition">
        Explore More Traditions
      </button>
    </div>
  );
}