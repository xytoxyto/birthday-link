"use client";

import { useState, useEffect } from 'react';
import TierBadge from '@/components/TierBadge';

export default function CustomCakePage() {
  const [cakeOptions, setCakeOptions] = useState({
    style: '',
    flavors: [],
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [userTier, setUserTier] = useState('cosmic'); // Get from user context in real app

  const basePrice = 29.99;
  const tierPrices = { galaxy: 10, elite: 20, cosmic: 5 };

  // Calculate total price
  const totalPrice = basePrice + (cakeOptions.flavors.length * 2.50) + tierPrices[userTier];

  const handleStyleChange = (e) => {
    setCakeOptions({...cakeOptions, style: e.target.value});
  };
  
  const handleFlavorToggle = (flavor) => {
    const flavors = [...cakeOptions.flavors];
    if (flavors.includes(flavor)) {
      setCakeOptions({
        ...cakeOptions, 
        flavors: flavors.filter(f => f !== flavor)
      });
    } else {
      setCakeOptions({...cakeOptions, flavors: [...flavors, flavor]});
    }
  };
  
  const handleMessageChange = (e) => {
    setCakeOptions({...cakeOptions, message: e.target.value});
  };
  
  const validateForm = () => {
    const newErrors = {};
    if (!cakeOptions.style) newErrors.style = "Please select a cake style";
    if (cakeOptions.flavors.length === 0) newErrors.flavors = "Please select at least one flavor";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // Here you would normally send this to your backend
      console.log('Cake options:', cakeOptions);
    }
  };

  useEffect(() => {
    const savedCake = localStorage.getItem('savedCake');
    if (savedCake) {
      try {
        setCakeOptions(JSON.parse(savedCake));
      } catch (e) {
        console.error('Failed to load saved cake');
      }
    }
  }, []);

  const saveCakeToProfile = () => {
    localStorage.setItem('savedCake', JSON.stringify(cakeOptions));
    // Here you would also save to backend
    alert('Cake saved to your profile!');
  };

  // Add image previews for cake styles
  const cakeStyleImages = {
    classic: "/images/cakes/classic-round.jpg",
    tiered: "/images/cakes/tiered-luxury.jpg",
    novelty: "/images/cakes/novelty-shape.jpg"
  };
  
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-2">🎂 Build Your Custom Cake</h1>
          <p className="text-white/80">Design your perfect birthday treat and make your event unforgettable.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg space-y-4">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Step 1: Choose Your Style</h3>
                <div>
                  <label htmlFor="cake-style" className="block text-sm font-medium text-white/80 mb-1">
                    Cake Style
                  </label>
                  <select 
                    id="cake-style"
                    value={cakeOptions.style}
                    onChange={handleStyleChange}
                    aria-describedby="style-error"
                    className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                  >
                    <option value="">Select Cake Style</option>
                    <option value="classic">Classic Round</option>
                    <option value="tiered">Tiered Luxury</option>
                    <option value="novelty">Fun Novelty Shape</option>
                  </select>
                  {errors.style && <p className="text-red-400 text-sm mt-1">{errors.style}</p>}
                </div>

                {cakeOptions.style && (
                  <div className="mt-2 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={cakeStyleImages[cakeOptions.style]} 
                      alt={`${cakeOptions.style} cake style`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}

                <button 
                  onClick={() => setStep(2)} 
                  disabled={!cakeOptions.style}
                  className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Step 2: Select Flavors</h3>
                <div className="space-y-2 text-white">
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      className="rounded text-yellow-400 focus:ring-yellow-400"
                      checked={cakeOptions.flavors.includes('vanilla')}
                      onChange={() => handleFlavorToggle('vanilla')}
                    />
                    <span>Vanilla</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      className="rounded text-yellow-400 focus:ring-yellow-400"
                      checked={cakeOptions.flavors.includes('chocolate')}
                      onChange={() => handleFlavorToggle('chocolate')}
                    />
                    <span>Chocolate</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      className="rounded text-yellow-400 focus:ring-yellow-400"
                      checked={cakeOptions.flavors.includes('strawberry')}
                      onChange={() => handleFlavorToggle('strawberry')}
                    />
                    <span>Strawberry</span>
                  </label>
                </div>
                {errors.flavors && <p className="text-red-400 text-sm mt-1">{errors.flavors}</p>}

                <button 
                  onClick={() => setStep(3)} 
                  disabled={cakeOptions.flavors.length === 0}
                  className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Step 3: Add a Message</h3>
                <input
                  type="text"
                  placeholder="Your custom message"
                  value={cakeOptions.message}
                  onChange={handleMessageChange}
                  className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <div className="flex items-center justify-between text-sm text-white/80">
                  <p>Tier Pricing:</p>
                  <div className="flex gap-2">
                    <span className="flex items-center"><TierBadge tier="Galaxy" /> +$10</span>
                    <span className="flex items-center"><TierBadge tier="Elite" /> +$20</span>
                    <span className="flex items-center"><TierBadge tier="Cosmic" /> +$5</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-3 flex justify-between items-center">
                  <span>Total Price:</span>
                  <span className="text-xl font-bold text-yellow-400">${totalPrice.toFixed(2)}</span>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition"
                >
                  Save Custom Cake
                </button>
              </div>
            )}
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-center space-y-4 text-white">
            <div className="text-5xl">🎂</div>
            <h2 className="text-2xl font-bold">Your Custom Cake is Saved!</h2>
            <p>We'll have your {cakeOptions.style} cake ready for your birthday celebration.</p>
            <div className="bg-white/20 rounded-lg p-4 text-left">
              <p><strong>Style:</strong> {cakeOptions.style}</p>
              <p><strong>Flavors:</strong> {cakeOptions.flavors.join(', ')}</p>
              {cakeOptions.message && <p><strong>Message:</strong> "{cakeOptions.message}"</p>}
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
            >
              Build Another Cake
            </button>
          </div>
        )}
      </div>
    </section>
  );
}