'use client'
import { useState } from 'react';

export default function BirthChartCompatibility() {
  const [people, setPeople] = useState([
    { id: 1, name: 'You', sign: 'Aries' },
    { id: 2, name: 'Alex', sign: 'Leo' },
    { id: 3, name: 'Jordan', sign: 'Gemini' }
  ]);

  const removePerson = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  return (
    <div className="mt-6 p-4 bg-white/20 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-white">Group Celebration Compatibility</h3>
        <span className="bg-yellow-400 text-blue-900 text-xs rounded-full px-2 py-1">Premium</span>
        <div className="flex flex-wrap gap-2 mb-3">
          {people.map(person => (
            <div key={person.id} className="bg-white/10 rounded-full px-3 py-1 text-sm flex items-center">
              <span>{person.name} ({person.sign})</span>
              <button 
                onClick={() => removePerson(person.id)} 
                className="ml-2 text-white/50 hover:text-white/80"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
            <button className="ml-2 text-white/50 hover:text-white/80">✕</button>
          </div>
          <div className="bg-white/10 rounded-full px-3 py-1 text-sm flex items-center">
            <span>Alex (Leo)</span>
            <button className="ml-2 text-white/50 hover:text-white/80">✕</button>
          </div>
          <div className="bg-white/10 rounded-full px-3 py-1 text-sm flex items-center">
            <span>Jordan (Gemini)</span>
            <button className="ml-2 text-white/50 hover:text-white/80">✕</button>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3">
          <h5 className="font-bold text-white">92% Celebration Compatibility</h5>
          <p className="text-sm text-white/80">
            Your group has excellent celebration energy! With Aries leadership, Leo&apos;s flair for drama, 
            and Gemini&apos;s social skills, your joint birthday will be unforgettable.
          </p>
          <button className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
            Generate Full Group Reading
          </button>
        </div>
      </div>
    </div>
  );
}