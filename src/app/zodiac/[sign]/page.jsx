'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TierBadge from '@/components/TierBadge';
import { motion } from 'framer-motion';
import TraditionExplorer from '@/components/TraditionExplorer';

export default function ZodiacSignPage() {
  const params = useParams();
  const sign = params.sign?.toLowerCase() || 'aries';
  const [userTier, setUserTier] = useState('cosmic'); // In a real app, get from context
  const [activeTab, setActiveTab] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Sign-specific data
  const signData = {
    aries: {
      name: 'Aries',
      emoji: '♈️',
      dates: 'March 21 - April 19',
      element: 'Fire',
      ruling: 'Mars',
      gradient: 'from-red-800 to-orange-600',
      tagline: 'The Pioneer. Bold. Confident. Adventurous.',
      about: 'Aries is the first sign of the zodiac, and that\'s fitting because these brave rams are always ready to take on a challenge. They\'re known for their boldness, passion, and initiative.',
      traits: [
        { name: 'Passionate', icon: '🔥' },
        { name: 'Energetic', icon: '⚡️' },
        { name: 'Determined', icon: '🎯' },
        { name: 'Confident', icon: '💪' },
        { name: 'Enthusiastic', icon: '🌟' },
        { name: 'Independent', icon: '🚶' }
      ],
      compatibility: [
        { sign: 'Leo', emoji: '♌️', description: 'Fiery passion and mutual respect' },
        { sign: 'Sagittarius', emoji: '♐️', description: 'Adventure and exploration' },
        { sign: 'Gemini', emoji: '♊️', description: 'Intellectual stimulation' }
      ],
      celebrations: 'Aries birthdays often feature adventurous activities, competitive games, and bold red decorations to match their fiery spirit.',
      gifts: ['Sports equipment', 'Adventure experiences', 'Bold statement pieces', 'Spicy food kits'],
      detailedReadings: 'As an Aries, your birthday celebrations tend to be energetic and action-packed. You thrive when your special day includes physical activities and friendly competition. Your birth chart reveals that you have a natural leadership quality that shines during celebrations.',
      birthdayThemes: [
        { name: 'Adventure Quest', description: 'Outdoor adventure with challenges and rewards' },
        { name: 'Fire & Spice', description: 'Bold colors, spicy food, and energetic music' },
        { name: 'Championship', description: 'Sports-themed celebration with friendly competitions' }
      ]
    },
    // Other signs would be defined here
  };
  
  // Default data if sign not found
  const currentSign = signData[sign] || signData.aries;
  
  const isPremiumUser = userTier === 'elite' || userTier === 'galaxy';
  
  return (
    <section className={`min-h-screen bg-gradient-to-b ${currentSign.gradient} pb-12`}>
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.5 }}
        className="bg-black/30 backdrop-blur-sm sticky top-0 z-10"
      >
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <div className="text-6xl mb-2">{currentSign.emoji}</div>
          <h1 className="text-4xl font-bold text-white">{currentSign.name}</h1>
          <p className="text-white/80 mt-2">{currentSign.dates}</p>
          <div className="flex justify-center gap-4 mt-4">
            <div className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">
              Element: {currentSign.element}
            </div>
            <div className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">
              Ruling: {currentSign.ruling}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Hero banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 pt-8 pb-4"
      >
        <div className="bg-gradient-to-r from-red-800 to-orange-600 p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl font-bold text-white mb-2">{currentSign.emoji} {currentSign.name}</h1>
          <p className="text-white/80">{currentSign.tagline}</p>
        </div>
      </motion.div>
      
      {/* Navigation tabs */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex overflow-x-auto bg-white/10 backdrop-blur rounded-full p-1 shadow-lg space-x-1">
          <button 
            onClick={() => setActiveTab('about')}
            className={`px-4 py-2 rounded-full transition flex-1 ${
              activeTab === 'about' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('compatibility')}
            className={`px-4 py-2 rounded-full transition flex-1 ${
              activeTab === 'compatibility' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10'
            }`}
          >
            Compatibility
          </button>
          <button 
            onClick={() => setActiveTab('birthdays')}
            className={`px-4 py-2 rounded-full transition flex-1 ${
              activeTab === 'birthdays' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10'
            }`}
          >
            Birthdays
          </button>
          <button 
            onClick={() => setActiveTab('readings')}
            className={`px-4 py-2 rounded-full transition flex-1 ${
              activeTab === 'readings' ? 'bg-white/20 text-white font-bold' : 'text-white/70 hover:bg-white/10'
            }`}
          >
            Readings
          </button>
        </div>
      </div>
      
      {/* Content sections */}
      <div className="max-w-4xl mx-auto px-4 py-4 space-y-6">
        {/* About section */}
        {activeTab === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white space-y-2">
              <h2 className="text-2xl font-bold mb-2">About {currentSign.name}</h2>
              <p className="text-white/80">
                {currentSign.about}
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {currentSign.traits.map(trait => (
                  <li key={trait.name} className="flex items-center text-white/80">
                    <span className="mr-2">{trait.icon}</span> {trait.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-yellow-400/10 backdrop-blur rounded-lg p-4 shadow-lg text-yellow-400 space-y-2 mt-4">
              <h2 className="text-xl font-bold mb-2">⭐️ Elite & Cosmic Members</h2>
              <p>
                Unlock detailed personality insights, exclusive character analysis, and personalized tips for your sign.
              </p>
              <Link
                href="/tiers/upgrade"
                className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
              >
                Upgrade to Unlock
              </Link>
            </div>
          </motion.div>
        )}
        
        {/* Compatibility section */}
        {activeTab === 'compatibility' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white space-y-2">
              <h2 className="text-2xl font-bold mb-2">Best Matches</h2>
              <p className="text-white/80 mb-4">
                These signs are most compatible with {currentSign.name} for birthdays and beyond:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentSign.compatibility.map(match => (
                  <Link 
                    href={`/zodiac/${match.sign.toLowerCase()}`}
                    key={match.sign} 
                    className="bg-white/20 rounded-lg p-4 text-center hover:bg-white/30 transition"
                  >
                    <div className="text-3xl mb-2">{match.emoji}</div>
                    <div className="font-bold">{match.sign}</div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="bg-yellow-400/10 backdrop-blur rounded-lg p-4 shadow-lg text-yellow-400 space-y-2">
              <h2 className="text-xl font-bold mb-2">⭐️ Elite & Cosmic Members</h2>
              <p>
                Unlock detailed compatibility insights, exclusive match predictions, and astrology tips for your next Birthday Link event.
              </p>
              <Link
                href="/tiers/upgrade"
                className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
              >
                Upgrade to Unlock
              </Link>
            </div>
          </motion.div>
        )}
        
        {/* Birthday celebrations section */}
        {activeTab === 'birthdays' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white space-y-4">
              <h2 className="text-2xl font-bold">Birthday Celebrations</h2>
              <p className="text-white/80">{currentSign.celebrations}</p>
              
              <h3 className="text-xl font-semibold mt-4">Party Themes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentSign.birthdayThemes.map((theme, index) => (
                  <div key={theme.name} className="bg-white/20 rounded-lg p-4">
                    <h4 className="font-bold">{theme.name}</h4>
                    <p className="text-sm text-white/80">{theme.description}</p>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mt-4">Gift Ideas</h3>
              <ul className="list-disc list-inside text-white/80 pl-2 space-y-1">
                {currentSign.gifts.map(gift => (
                  <li key={gift}>{gift}</li>
                ))}
              </ul>
            </div>
            
            {/* Tradition Explorer component */}
            <TraditionExplorer currentSign={currentSign} />
          </motion.div>
        )}
        
        {/* Premium content section */}
        {activeTab === 'readings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg relative overflow-hidden">
              <h2 className="text-2xl font-bold mb-4 text-white">Detailed Readings</h2>
              
              {isPremiumUser ? (
                <>
                  <p className="mb-4 text-white/80">{currentSign.detailedReadings}</p>
                  <div className="mt-6 p-4 bg-white/20 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">Your Personal Birthday Forecast</h3>
                    <p className="text-white/80">
                      Your next birthday will be a pivotal moment for personal growth and celebration.
                      Expect surprises from close friends and opportunities for meaningful connections.
                    </p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/20 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-white">Cosmic Connections</h3>
                    <p className="text-white/80">
                      With your {currentSign.name} energy, you'll find that your birthday celebrations 
                      are most meaningful when they include elements of {currentSign.element.toLowerCase()} 
                      and activities that channel your natural {currentSign.traits[0].name.toLowerCase()} spirit.
                    </p>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-bold mb-2 text-white">Premium Content</h3>
                    <p className="mb-4 text-white/80">Upgrade to Elite or Galaxy tier to unlock detailed zodiac readings and personalized birthday forecasts.</p>
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
          </motion.div>
        )}
      </div>
    </section>
  );
}