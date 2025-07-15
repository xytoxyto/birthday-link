"use client";
import PropTypes from 'prop-types';

export default function BirthdayPlanningSection({ currentSign }) {
  const sign = currentSign || { name: '', element: '' };
  const handlePlanningClick = (planType) => {
    console.log(`Planning started for: ${planType}`);
    // Add your planning logic here
  };
  
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white mt-6">
      <p className="text-white/80 mb-4">
        Sharing your birthday with other {sign.name}? Here are perfect ways to celebrate together:
      </p>
      
      <div className="space-y-3">
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="bg-yellow-400 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
            <h4 className="font-bold">Shared Adventure</h4>
          </div>
          <p className="mt-2 text-sm text-white/80 pl-11">
            Pool resources with your birthday twins for an epic {sign.element ? sign.element.toLowerCase() : 'special'}-themed adventure that satisfies your {sign.name || 'zodiac'} spirit.
          </p>
          <button
            onClick={() => handlePlanningClick('Shared Adventure')}
            className="mt-2 ml-11 text-sm text-yellow-400 hover:underline"
          >
            Start planning →
          </button>
        </div>
        
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="bg-yellow-400 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
            <h4 className="font-bold">Dual Destination Celebration</h4>
          </div>
          <p className="mt-2 text-sm text-white/80 pl-11">
            Create a two-location party that reflects both of your unique {sign.name || 'zodiac'} personalities while celebrating what you share.
          </p>
          <button
            onClick={() => handlePlanningClick('Dual Destination Celebration')}
            className="mt-2 ml-11 text-sm text-yellow-400 hover:underline"
          >
            Start planning →
          </button>
        </div>
        
      <div className="bg-white/10 p-3 rounded-lg">
        <div className="flex items-center">
          <div className="bg-yellow-400 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
          <h4 className="font-bold">Zodiac Exchange</h4>
        </div>
        <p className="mt-2 text-sm text-white/80 pl-11">
          Gift each other items that represent your shared {sign.name || 'zodiac'} traits and celebrate your cosmic connection.
        </p>
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

BirthdayPlanningSection.propTypes = {
  currentSign: PropTypes.shape({
    name: PropTypes.string,
    element: PropTypes.string
  })
};