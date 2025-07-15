'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import BirthdayChat from '@/components/BirthdayChat';
import { motion } from 'framer-motion';

// First install the missing dependencies:
// npm install react-confetti react-use

export default function EventChatPage() {
  // Import these dynamically to avoid build errors
  const [Confetti, setConfetti] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Load modules dynamically
  useEffect(() => {
    Promise.all([
      import('react-confetti').then(module => setConfetti(() => module.default)),
      import('react-use').then(() => {
        // Set up window size tracking
        const updateSize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
          });
        };
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
      })
    ]);
  }, []);

  const params = useParams();
  const eventId = params.id;
  const [messages, setMessages] = useState([]);
  const [showGiftIdeas, setShowGiftIdeas] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [isRecording, setIsRecording] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showMapView, setShowMapView] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const giftIdeas = [
    { name: "Birthday Cake", emoji: "🎂", price: "$25" },
    { name: "Party Supplies Pack", emoji: "🎉", price: "$15" },
    { name: "Gift Card", emoji: "💳", price: "$50" },
    { name: "Custom T-shirt", emoji: "👕", price: "$30" },
  ];

  useEffect(() => {
    // Assume the event date comes from props or API
    const eventDate = new Date('2025-07-25T18:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
      
      if (diff <= 0) {
        clearInterval(timer);
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      
      setCountdown({ days, hours, minutes });
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);

  const createPoll = () => {
    const question = prompt("Enter your poll question:");
    if (!question) return;
    
    const options = [];
    for (let i = 1; i <= 3; i++) {
      const option = prompt(`Enter option ${i}:`);
      if (option) options.push({ text: option, votes: 0 });
    }
    
    if (options.length > 0) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          sender: 'You',
          content: question,
          isPoll: true,
          options,
          isOwnMessage: true
        }
      ]);
    }
  };

  const startRecording = async () => {
    audioChunksRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl); // Corrected line
        
        // In a real app, you'd upload this and send a link
        // In a real app, you'd upload this and send a link
        setMessages([
          ...messages,
          {
            id: Date.now(),
            sender: 'You',
            content: '🎤 Voice message',
            audioUrl: audioUrl,
            isOwnMessage: true
          }
        ]);
      };
      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const handleSendMessage = (content) => {
    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'You',
        content,
        isOwnMessage: true
      }
    ]);
  };

  const getSortedVenues = () => {
    const filtered = [...filteredVenues]; // Create a copy
    
    switch(sortOption) {
      case 'name-asc':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return filtered.sort((a, b) => b.name.localeCompare(a.name));
      case 'capacity-asc':
        return filtered.sort((a, b) => a.capacity - b.capacity);
      case 'capacity-desc':
        return filtered.sort((a, b) => b.capacity - a.capacity);
      default:
        return filtered; // Default sort (id or featured)
    }
  };

  return (
    <>
      <BirthdayChat eventId={eventId} tier="Galaxy" />
      <div className="bg-blue-800/50 px-4 py-2 text-center text-white">
        <p className="text-sm">Birthday celebration in:</p>
        <div className="flex justify-center space-x-4 font-bold">
          <span>{countdown.days}d</span>
          <span>{countdown.hours}h</span>
          <span>{countdown.minutes}m</span>
        </div>
      </div>
      <button
        onClick={createPoll}
        className="text-white bg-blue-700 rounded-full px-3 py-1 text-sm"
      >
        📊 Create Poll
      </button>
      <button
        onClick={() => setShowGiftIdeas(!showGiftIdeas)}
        className="text-white bg-pink-600 rounded-full px-3 py-1 text-sm"
      >
        🎁 Gift Ideas
      </button>
      {showGiftIdeas && (
        <div className="absolute bottom-full left-0 mb-2 w-full bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-white">Gift Ideas</h3>
            <button onClick={() => setShowGiftIdeas(false)}>✖️</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {giftIdeas.map(gift => (
              <div key={gift.name} className="bg-white/20 rounded-lg p-2 text-white">
                <div className="text-2xl">{gift.emoji}</div>
                <div className="font-bold">{gift.name}</div>
                <div>{gift.price}</div>
                <button className="mt-1 bg-yellow-400 text-blue-900 rounded-full px-2 py-1 text-xs">
                  Share in Chat
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center space-x-2">
        {isRecording ? (
          <button
            onClick={stopRecording}
            className="bg-red-500 text-white px-4 py-3 rounded-full shadow animate-pulse"
          >
            Recording... Stop
          </button>
        ) : (
          <button
            onClick={startRecording}
            className="bg-blue-700 text-white px-4 py-3 rounded-full shadow"
          >
            🎤
          </button>
        )}
        <button 
          onClick={() => {
            handleSendMessage("🎉 HAPPY BIRTHDAY! 🎉");
            setShowConfetti(true);
          }}
          className="bg-pink-600 text-white rounded-full px-3 py-1 text-sm ml-2"
        >
          Birthday Wish
        </button>
      </div>
      {usersTyping.length > 0 && (
        <div className="text-white/70 text-sm italic mb-2 flex items-center">
          <div className="mr-2">
            <span className="inline-block w-2 h-2 bg-white/70 rounded-full animate-bounce mr-1"></span>
            <span className="inline-block w-2 h-2 bg-white/70 rounded-full animate-bounce delay-75 mr-1"></span>
            <span className="inline-block w-2 h-2 bg-white/70 rounded-full animate-bounce delay-150"></span>
          </div>
          {usersTyping.join(', ')} {usersTyping.length === 1 ? 'is' : 'are'} typing...
        </div>
      )}
      {messages.map((message) => (
        <div key={message.id} className={`my-2 p-3 rounded-lg ${message.isOwnMessage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
          <div className="font-bold">{message.sender}</div>
          <div className="whitespace-pre-wrap">{message.content}</div>
          {message.audioUrl && (
            <audio controls src={message.audioUrl} className="mt-2 w-full" />
          )}
          {message.isPoll && (
            <div className="mt-2 space-y-2">
              {message.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Update the votes in your state management
                    const updatedMessages = messages.map(msg => 
                      msg.id === message.id 
                        ? {
                            ...msg,
                            options: msg.options.map((opt, i) => 
                              i === index ? { ...opt, votes: opt.votes + 1 } : opt
                            )
                          }
                        : msg
                    );
                    setMessages(updatedMessages);
                  }}
                  className="block w-full bg-white/20 hover:bg-white/30 rounded-lg px-3 py-2 text-left transition"
                >
                  <div className="flex justify-between">
                    <span>{option.text}</span>
                    <span>{option.votes}</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 mt-1 rounded-full overflow-hidden">
                    <div 
                      className="bg-yellow-400 h-full rounded-full"
                      style={{ 
                        width: `${message.options.reduce((sum, o) => sum + o.votes, 0) > 0 
                          ? (option.votes / message.options.reduce((sum, o) => sum + o.votes, 0) * 100) 
                          : 0}%` 
                      }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {/* ChatMessage component for reactions */}
          <ChatMessage message={message} isOwnMessage={message.isOwnMessage} />
        </div>
      ))}
      {showConfetti && Confetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      {/* Date picker section */}
      <div className="pt-4">
        <button 
          onClick={() => setShowDatePicker(!showDatePicker)}
          className="w-full bg-white/10 text-white font-semibold px-4 py-3 rounded-lg mb-4 flex justify-between items-center"
        >
          <span>{selectedDate || 'Select a date'}</span>
          <span>{showDatePicker ? '▲' : '▼'}</span>
        </button>
        
        {showDatePicker && (
          <div className="bg-white/5 rounded-lg p-4 mb-4">
            <h4 className="text-white font-semibold mb-2">Available Dates:</h4>
            <div className="grid grid-cols-7 gap-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={`header-${i}`} className="text-center text-white/70 text-sm">
                  {day}
                </div>
              ))}
              {Array.from({ length: 28 }, (_, i) => (
                <button
                  key={`day-${i+1}`}
                  onClick={() => {
                    setSelectedDate(`July ${i+1}, 2025`);
                    setShowDatePicker(false);
                  }}
                  className={`h-10 rounded-full flex items-center justify-center
                    ${i % 3 === 0 ? 'bg-red-500/20 text-red-300 cursor-not-allowed' : 'bg-green-500/20 text-green-300 hover:bg-green-500/40'}`}
                  disabled={i % 3 === 0}
                >
                  {i+1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Sorting UI */}
      <div className="flex justify-end mb-4">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="px-4 py-2 rounded-full bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
        >
          <option value="default">Featured</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="capacity-asc">Capacity (Low to High)</option>
          <option value="capacity-desc">Capacity (High to Low)</option>
        </select>
      </div>
      {/* Map toggle button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setShowMapView(!showMapView)}
          className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center"
        >
          <span className="mr-2">{showMapView ? 'Grid View' : 'Map View'}</span>
          <span>{showMapView ? '📷' : '🗺️'}</span>
        </button>
      </div>
      {/* Venue mapping */}
      {showMapView ? (
        <div className="bg-white/5 rounded-lg overflow-hidden h-[70vh] mt-6 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/60">
              <p className="text-xl mb-2">Interactive Map</p>
              <p>In a real app, this would be a map showing venue locations</p>
            </div>
          </div>
          {/* This is where you'd integrate a map like Google Maps or Mapbox */}
          {filteredVenues.map((venue, index) => (
            <div 
              key={venue.id}
              className="absolute bg-white/90 rounded-lg p-2 shadow-lg text-blue-900 cursor-pointer hover:bg-yellow-400 transition"
              style={{ 
                top: `${20 + (index * 10)}%`, 
                left: `${15 + (index * 12)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => {
                const venueElement = document.getElementById(`venue-${venue.id}`);
                setShowMapView(false);
                setTimeout(() => {
                  venueElement?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              <p className="font-bold">{venue.name}</p>
              <p className="text-xs">{venue.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          {getSortedVenues().map((venue, index) => (
            <div id={`venue-${venue.id}`} key={venue.id}>
              <VenueCard
                index={index}
                image={venue.image}
                name={venue.name}
                description={venue.description}
                tier={venue.tier}
                availability={venue.availability}
                tags={venue.tags}
                onToggleCompare={() => toggleCompare(venue.id)}
                isSelected={compareList.includes(venue.id)}
                isFeatured={venue.isFeatured}
                isPopular={venue.isPopular}
              />
            </div>
          ))}
        </div>
      )}
      {/* Compare button */}
      <div className="fixed bottom-4 right-4">
        <button 
          onClick={() => setShowCompareModal(true)}
          className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Compare Venues
        </button>
      </div>
      {/* Comparison modal */}
      {showCompareModal && compareList.length > 0 && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-blue-900/90 backdrop-blur-lg rounded-lg max-w-6xl w-full max-h-[90vh] overflow-auto shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Compare Venues</h2>
                <button 
                  onClick={() => setShowCompareModal(false)}
                  className="bg-white/10 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {compareList.map(id => {
                  const venue = venues.find(v => v.id === id);
                  return (
                    <div key={id} className="bg-white/10 rounded-lg overflow-hidden">
                      <img src={venue.image} alt={venue.name} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-white">{venue.name}</h3>
                        <TierBadge tier={venue.tier} className="mt-1" />
                        
                        <div className="mt-4 space-y-2 text-sm">
                          <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-white/70">Category</span>
                            <span className="text-white">{venue.category}</span>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-white/70">Capacity</span>
                            <span className="text-white">{venue.capacity} guests</span>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-1">
                            <span className="text-white/70">Weekend Availability</span>
                            <span className="text-white">
                              {venue.availability.filter(d => d.day === 'Sat' || d.day === 'Sun')
                                .some(d => d.available) ? 'Available' : 'Unavailable'}
                            </span>
                          </div>
                        </div>
                        
                        <button className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
                          Book This Venue
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Add ChatMessage component
function ChatMessage({ message, isOwnMessage }) {
  const [showReactions, setShowReactions] = useState(false);
  const [reactions, setReactions] = useState(message.reactions || {});
  
  const addReaction = (emoji) => {
    setReactions(prev => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1
    }));
    setShowReactions(false);
  };
  
  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-2`}>
      <div>
        <div className={`${isOwnMessage 
          ? 'bg-yellow-400 text-blue-900' 
          : 'bg-white/20 text-white'} 
          rounded-lg px-4 py-2 shadow max-w-xs relative`}
          onDoubleClick={() => setShowReactions(!showReactions)}
        >
          {message.content}
          
          {/* Reaction button */}
          <button 
            onClick={() => setShowReactions(!showReactions)}
            className="absolute -right-2 -bottom-2 bg-white/30 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition"
          >
            😀
          </button>
          
          {/* Reaction picker */}
          {showReactions && (
            <div className="absolute bottom-full left-0 mb-2 bg-white/20 backdrop-blur rounded-full px-2 py-1 shadow-lg">
              {['👍', '❤️', '😂', '🎉', '🎂'].map(emoji => (
                <button 
                  key={emoji} 
                  onClick={() => addReaction(emoji)}
                  className="p-1 hover:bg-white/20 rounded-full transition"
                >
                  {emoji}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Reaction display */}
        {Object.keys(reactions).length > 0 && (
          <div className="flex mt-1 ml-2 space-x-1">
            {Object.entries(reactions).map(([emoji, count]) => (
              <div key={emoji} className="bg-white/10 rounded-full px-2 py-0.5 text-xs flex items-center">
                <span>{emoji}</span>
                <span className="ml-1">{count}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function VenueCard({ image, name, description, tier, availability, tags, index, onToggleCompare, isSelected, isFeatured, isPopular }) {
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  return (
    <motion.div className="relative">
      {isFeatured && (
        <div className="absolute top-2 left-2 z-10 bg-green-500 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg">
          Featured
        </div>
      )}
      {isPopular && (
        <div className="absolute top-2 right-2 z-10 bg-red-500 text-white rounded-full px-3 py-1 text-sm font-bold shadow-lg">
          Popular
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <img src={image} alt={name} className="w-16 h-16 rounded-full" />
          </div>
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">{name}</h3>
              <button 
                onClick={onToggleCompare}
                className={`text-xs rounded-full px-3 py-1 ${isSelected ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-900'}`}
              >
                {isSelected ? 'Remove from Compare' : 'Compare'}
              </button>
            </div>
            <p className="text-sm text-gray-700 mt-1">{description}</p>
            <div className="flex justify-between mt-2">
              <button 
                onClick={() => setShowVirtualTour(true)}
                className="text-yellow-400 text-sm underline"
              >
                Virtual Tour
              </button>
              <button
                onClick={() => setShowVirtualTour(true)}
                className="text-yellow-400 text-sm underline"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        
        {/* Modal for virtual tour */}
        {showVirtualTour && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-blue-900/90 backdrop-blur-lg rounded-lg max-w-4xl w-full h-[80vh] shadow-2xl">
              <div className="relative h-full">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Virtual Tour"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
                <button 
                  onClick={() => setShowVirtualTour(false)}
                  className="absolute top-2 right-2 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Add TierBadge component
function TierBadge({ tier, className }) {
  const colors = {
    'Basic': 'bg-gray-400',
    'Premium': 'bg-blue-500',
    'Galaxy': 'bg-purple-600'
  };
  
  return (
    <span className={`${colors[tier] || 'bg-gray-400'} text-white text-xs rounded-full px-2 py-1 ${className}`}>
      {tier}
    </span>
  );
}

// Define missing variables
const filteredVenues = [
  {
    id: 1,
    name: "Party Hall A",
    description: "A beautiful venue for parties",
    image: "https://picsum.photos/200",
    tier: "Premium",
    category: "Indoor",
    capacity: 100,
    availability: [
      { day: "Sat", available: true },
      { day: "Sun", available: false }
    ],
    isFeatured: true,
    isPopular: false
  },
  {
    id: 2,
    name: "Garden Venue",
    description: "Beautiful outdoor space",
    image: "https://picsum.photos/201",
    tier: "Galaxy",
    category: "Outdoor",
    capacity: 150,
    availability: [
      { day: "Sat", available: false },
      { day: "Sun", available: true }
    ],
    isFeatured: false,
    isPopular: true
  }
];

const usersTyping = ["John", "Alice"];
const compareList = [1];

const setAudioURL = (url) => {
  // This would be implemented in a real app
  console.log("Audio URL set to:", url);
};

const toggleCompare = (id) => {
  // This would be implemented in a real app
  console.log("Toggle compare for venue:", id);
};