'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import TierBadge from '@/components/TierBadge';

export default function ZodiacSignPage() {
  const params = useParams();
  const sign = params.sign;
  const [userTier, setUserTier] = useState('cosmic'); // In a real app, get from context
  
  // Sign-specific data
  const signData = {
    aries: {
      name: 'Aries',
      emoji: '♈',
      dates: 'March 21 - April 19',
      element: 'Fire',
      ruling: 'Mars',
      gradient: 'from-red-800 to-orange-600',
      about: 'Aries is the first sign of the zodiac, and that's fitting because these brave rams are always ready to take on a challenge. They're known for their boldness, passion, and initiative.',
      traits: ['Courageous', 'Determined', 'Passionate', 'Confident', 'Enthusiastic', 'Independent'],
      compatibility: ['Leo', 'Sagittarius', 'Gemini'],
      celebrations: 'Aries birthdays often feature adventurous activities, competitive games, and bold red decorations to match their fiery spirit.',
      gifts: ['Sports equipment', 'Adventure experiences', 'Bold statement pieces', 'Spicy food kits'],
      detailedReadings: 'As an Aries, your birthday celebrations tend to be energetic and action-packed. You thrive when your special day includes physical activities and friendly competition. Your birth chart reveals that you have a natural leadership quality that shines during celebrations.'
    },
    // Other signs would be defined here
  };
  
  // Default data if sign not found
  const currentSign = signData[sign] || {
    name: 'Unknown Sign',
    emoji: '❓',
    dates: '',
    element: '',
    ruling: '',
    gradient: 'from-blue-800 to-purple-600',
    about: 'Sign information not available.',
    traits: [],
    compatibility: [],
    celebrations: '',
    gifts: [],
    detailedReadings: ''
  };
  
  const isPremiumUser = userTier === 'elite' || userTier === 'galaxy';
  
  return (
    <section className={`min-h-screen bg-gradient-to-b ${currentSign.gradient} text-white`}>
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="text-6xl mb-2">{currentSign.emoji}</div>
          <h1 className="text-4xl font-bold">{currentSign.name}</h1>
          <p className="text-white/80 mt-2">{currentSign.dates}</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="bg-white/10 px-3 py-1 rounded-full text-sm">
              Element: {currentSign.element}
            </div>
            <div className="bg-white/10 px-3 py-1 rounded-full text-sm">
              Ruling: {currentSign.ruling}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* About section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">About {currentSign.name}</h2>
          <p className="mb-6">{currentSign.about}</p>
          
          <h3 className="text-xl font-semibold mb-3">Key Traits</h3>
          <div className="flex flex-wrap gap-2">
            {currentSign.traits.map(trait => (
              <span key={trait} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        {/* Compatibility section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Best Matches</h2>
          <p className="mb-4">These signs are most compatible with {currentSign.name} for birthdays and beyond:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {currentSign.compatibility.map(compatSign => (
              <div key={compatSign} className="bg-white/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">
                  {/* You would map these properly in a real app */}
                  {compatSign === 'Leo' ? '♌' : 
                   compatSign === 'Sagittarius' ? '♐' : 
                   compatSign === 'Gemini' ? '♊' : '⭐'}
                </div>
                <div className="font-bold">{compatSign}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Birthday celebrations section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Birthday Celebrations</h2>
          <p className="mb-4">{currentSign.celebrations}</p>
          
          <h3 className="text-xl font-semibold mb-3">Gift Ideas</h3>
          <ul className="list-disc pl-5 space-y-1">
            {currentSign.gifts.map(gift => (
              <li key={gift}>{gift}</li>
            ))}
          </ul>
        </div>
        
        {/* Premium content section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">Detailed Readings</h2>
          
          {isPremiumUser ? (
            <>
              <p className="mb-4">{currentSign.detailedReadings}</p>
              <div className="mt-6 p-4 bg-white/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Your Personal Birthday Forecast</h3>
                <p>
                  Your next birthday will be a pivotal moment for personal growth and celebration.
                  Expect surprises from close friends and opportunities for meaningful connections.
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-2">Premium Content</h3>
                <p className="mb-4">Upgrade to Elite or Galaxy tier to unlock detailed zodiac readings and personalized birthday forecasts.</p>
                <TierBadge tier="Elite" className="mx-auto mb-4" />
                <Link
                  href="/tiers/upgrade"
                  className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
                >
                  Upgrade Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}