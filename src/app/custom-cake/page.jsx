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
  const [userTier] = useState('cosmic'); // Get from user context in real app

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

  // If you need to use useEffect, keep it empty or for side effects only
  useEffect(() => {
    // Any side effects here
  }, []);

  // You need to define cakeStyleImages for the image src to work
  const cakeStyleImages = {
    classic: "/images/cake-classic.jpg",
    tiered: "/images/cake-tiered.jpg",
    novelty: "/images/cake-novelty.jpg",
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col justify-center items-center font-sans">
      <section className="flex-grow flex items-center justify-center w-full p-4 md:p-8">
        <div className="max-w-lg w-full space-y-6">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold mb-2">🎂 Build Your Custom Cake</h1>
            <p className="text-white/80">Design your perfect birthday treat and make your event unforgettable.</p>
          </div>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl space-y-4 border border-purple-300">
              {/* ...existing code for steps and form fields... */}
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
                    {/* ...existing code for flavor checkboxes... */}
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
                    <label className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        className="rounded text-yellow-400 focus:ring-yellow-400"
                        checked={cakeOptions.flavors.includes('red velvet')}
                        onChange={() => handleFlavorToggle('red velvet')}
                      />
                      <span>Red Velvet</span>
                    </label>
                  </div>
                  {errors.flavors && <p className="text-red-400 text-sm mt-1">{errors.flavors}</p>}
                  <div>
                    <label htmlFor="cake-message" className="block text-sm font-medium text-white/80 mb-1">
                      Custom Message (optional)
                    </label>
                    <input
                      id="cake-message"
                      type="text"
                      value={cakeOptions.message}
                      onChange={handleMessageChange}
                      className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      maxLength={40}
                      placeholder="Happy Birthday, Alex!"
                    />
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
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-center space-y-4 text-white border border-purple-300">
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
    </main>
  );
}
