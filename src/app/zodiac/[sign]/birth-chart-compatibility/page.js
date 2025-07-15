'use client'
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BirthChartCompatibility() {
  const params = useParams();
  const getSignAttribute = (sign) => {
    const attributes = {
      'Aries': 'leadership',
      'Leo': 'flair for drama',
      'Gemini': 'social skills',
      'Taurus': 'stability',
      'Cancer': 'nurturing nature',
      'Virgo': 'attention to detail',
      'Libra': 'harmony',
      'Scorpio': 'intensity',
      'Sagittarius': 'enthusiasm',
      'Capricorn': 'determination',
      'Aquarius': 'innovation',
      'Pisces': 'imagination'
    };
  const [people, setPeople] = useState([
    { id: 1, name: 'You', sign: params.sign || 'Aries' },
    { id: 2, name: 'Alex', sign: 'Leo' },
    { id: 3, name: 'Jordan', sign: 'Gemini' }
  ]);
    { id: 3, name: 'Jordan', sign: 'Gemini' }
  const [newSign, setNewSign] = useState(params.sign || 'Aries');
  const [newName, setNewName] = useState('');
  const [newSign, setNewSign] = useState('Aries');
  const [readingGenerated, setReadingGenerated] = useState(false);
  
  const generateReading = () => {
    setReadingGenerated(true);
    // Additional logic for generating the reading can be added here
  };

  const removePerson = (id) => {
    setPeople(people.filter(person => person.id !== id));
  };

  const addPerson = () => {
    if (newName.trim()) {
      const newId = people.length > 0 ? Math.max(...people.map(p => p.id)) + 1 : 1;
      setPeople([...people, { id: newId, name: newName, sign: newSign }]);
      setNewName('');
    }
  };

  return (
    <div className="mt-6 p-4 bg-white/20 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold text-white text-center w-full">Group Celebration Compatibility</h3>
      </div>
      
      <div className="mt-3">
        <p className="text-sm text-white/80">
          Your group has excellent celebration energy! 
          {people.map((person, index) => (
            <span key={person.id}>
              {index > 0 && (index === people.length - 1 ? ' and ' : ', ')}
              {person.name}&apos;s {getSignAttribute(person.sign)}
            </span>
          ))}
          , your joint birthday will be unforgettable.
        </p>
        <button 
          onClick={generateReading} 
          className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition mt-2"
        >
          {readingGenerated ? "Reading Generated!" : "Generate Full Group Reading"}
        </button>
      </div>
      
      <div className="mb-4">
        {people.map(person => (
          <div key={person.id} className="flex items-center bg-white/10 p-2 rounded-lg mb-2">
            <span className="text-white">{person.name} - {person.sign}</span>
            <button 
              onClick={() => removePerson(person.id)}
              className="ml-2 text-white/50 hover:text-white/80"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-4 bg-white/10 p-3 rounded-lg">
        <h5 className="font-bold text-white mb-2">Add Person</h5>
        <div className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Name"
            className="flex-1 bg-white/20 rounded px-3 py-1 text-white placeholder:text-white/50"
          />
          <select
            value={newSign}
            onChange={(e) => setNewSign(e.target.value)}
            className="bg-white/20 rounded px-3 py-1 text-white"
          >
            {['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'].map(sign => (
              <option key={sign} value={sign}>{sign}</option>
            ))}
          </select>
          <button
            onClick={addPerson}
            className="bg-yellow-400 text-blue-900 px-3 py-1 rounded font-medium"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}