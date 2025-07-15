import { useState } from 'react';

export default function BirthChartCompatibility({ currentSign }) {
  const [people, setPeople] = useState([
    { id: 1, name: 'You', sign: currentSign?.name || 'Aries' },
    { id: 2, name: 'Alex', sign: 'Leo' },
    { id: 3, name: 'Jordan', sign: 'Gemini' }
  ]);
  
  const removePerson = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };
  
  const compatibilityScore = '92%';
  const compatibilityDescription = `Your group has excellent celebration energy! With ${currentSign?.name || 'Aries'} leadership, Leo's flair for drama, and Gemini's social skills, your joint birthday will be unforgettable.`;

  return (
    <div className="mt-6 p-4 bg-white/20 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-white">Group Celebration Compatibility</h3>
        <span className="bg-yellow-400 text-blue-900 text-xs rounded-full px-2 py-1">Premium</span>
      </div>
      <p className="text-white/80 mb-4">
        Planning a joint celebration? See how your birth charts align for the perfect shared birthday experience.
      </p>
      
      <div className="bg-black/30 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-bold text-white">Your Birthday Group</h4>
          <button className="text-sm text-yellow-400">+ Add Person</button>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {people.map(person => (
            <div key={person.id} className="bg-white/10 rounded-full px-3 py-1 text-sm flex items-center">
              <span>{person.name} ({person.sign})</span>
              {person.id !== 1 && (
                <button 
                  className="ml-2 text-white/50 hover:text-white/80"
                  onClick={() => removePerson(person.id)}
                >
                  ✕
                </button>
              )}
            </div>
          ))}
        </div>
        
        {people.length > 1 && (
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
            <h5 className="font-bold text-white">{compatibilityScore} Celebration Compatibility</h5>
            <p className="text-sm text-white/80">
              {compatibilityDescription}
            </p>
          </div>
        )}
      </div>
      
      <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
        Generate Full Group Reading
      </button>
    </div>
  );
}