'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';

export default function BirthdayConnectionMap() {
  const [userData, setUserData] = useState(null);
  const params = useParams();
  const [currentSign, setCurrentSign] = useState({ name: "Aries" });
  
  // Update currentSign when params.sign changes
  useEffect(() => {
    if (params.sign) {
      // Capitalize first letter of sign from URL parameter
      const formattedSign = params.sign.charAt(0).toUpperCase() + params.sign.slice(1).toLowerCase();
      setCurrentSign({ name: formattedSign });
    }
  }, [params.sign]);

  // Fetch user data and connections
  const fetchUserData = useCallback(async () => {
    // Simulate API call
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: 'You',
          connections: [
            { sign: 'Leo', strength: 80 },
            { sign: 'Sagittarius', strength: 70 },
            { sign: 'Gemini', strength: 60 },
          ],
        });
      }, 1000);
    });
    setUserData(data);
  }, [currentSign]); // Add currentSign as dependency since we want to refetch when sign changes

  // Fetch data on component mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]); // Include fetchUserData as a dependency since it's used in the effect

  if (!userData) {
    return (
      <div className="mt-6 bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white">
        <h3 className="text-xl font-semibold mb-4">Your Birthday Connection Map</h3>
        <div className="h-64 bg-black/20 rounded-lg mb-4 flex items-center justify-center">
          <p>Loading your connections...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white">
      <h3 className="text-xl font-semibold mb-4">Your Birthday Connection Map</h3>

      <div className="relative h-64 bg-black/20 rounded-lg mb-4 overflow-hidden">
        {/* This would be a real chart in production */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-yellow-400/20 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-yellow-400/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400/60 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold">
                  {userData.name}
                </div>
              </div>
            </div>
          </div>
        </div>
        {userData.connections.map((connection, index) => {
          // Calculate position based on index
          const positions = [
            { bottom: '33%', right: '25%' },
            { top: '25%', right: '33%' },
            { top: '50%', left: '25%' }
          ];
          const position = positions[index % positions.length];
          
          return (
            <div 
              key={connection.sign}
              className="absolute w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs"
              style={{
                ...position,
                opacity: connection.strength / 100
              }}
            >
              {connection.sign.substring(0, 3)}
            </div>
          );
        })}
      </div>
      
      <p className="text-white/80 text-sm">
        Your {currentSign.name} energy connects you most strongly with {userData?.connections?.length || 0} other Birthday Link users.
        Discover potential celebration partners based on your zodiac compatibility.
      </p>
      
      <button 
        className="w-full mt-4 bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
        onClick={fetchUserData}
      >
        Find Celebration Partners
      </button>
    </div>
  );
}