"use client";

import PropTypes from 'prop-types';

export default function CoCelebrationIdeas({ currentSign = { name: '', element: '' } }) {
  // Using the currentSign with default parameter values
  const sign = currentSign;
  
  const handlePlanningClick = (planType) => {
    console.log(`Planning started for: ${planType}`);
    // Add your planning logic here
  };

  return (
    <div>
      <p className="text-white/80 mb-4">
        Sharing your birthday with other {sign.name || 'zodiac signs'}? Here are perfect ways to celebrate together:
      </p>
      
      <div className="space-y-3">
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <p className="mt-2 text-sm text-white/80 pl-11">
              Pool resources with your birthday twins for an epic {sign.element ? sign.element.toLowerCase() : 'zodiac'}-themed adventure that satisfies your {sign.name || 'zodiac'} spirit.
            </p>
          </div>
          <button 
            onClick={() => handlePlanningClick('Joint Adventure')}
            className="mt-2 ml-11 text-sm text-yellow-400 hover:underline"
          >
            Start planning →
          </button>
        </div>
        
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <p className="mt-2 text-sm text-white/80 pl-11">
              Create a two-location party that reflects both of your unique {sign.name || 'zodiac'} personalities while celebrating what you share.
            </p>
          </div>
          <button 
            onClick={() => handlePlanningClick('Dual Destination')}
            className="mt-2 ml-11 text-sm text-yellow-400 hover:underline"
          >
            Start planning →
          </button>
        </div>
        
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <p className="mt-2 text-sm text-white/80 pl-11">
              Gift each other items that represent your shared {sign.name || 'zodiac'} traits and celebrate your cosmic connection.
            </p>
          </div>
          <button 
            onClick={() => handlePlanningClick('Zodiac Exchange')}
            className="mt-2 ml-11 text-sm text-yellow-400 hover:underline"
          >
            Start planning →
          </button>
        </div>
      </div>
    </div>
  );
}

CoCelebrationIdeas.propTypes = {
  currentSign: PropTypes.shape({
    name: PropTypes.string,
    element: PropTypes.string
  })
};