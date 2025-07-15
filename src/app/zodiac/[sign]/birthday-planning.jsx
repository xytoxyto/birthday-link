"use client";

export default function CoCelebrationIdeas({ currentSign }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-4 shadow-lg text-white mt-6">
      <h3 className="text-xl font-semibold mb-2">Co-Celebration Ideas</h3>
      <p className="text-white/80 mb-4">
        Sharing your birthday with other {currentSign.name}? Here are perfect ways to celebrate together:
      </p>
      
      <div className="space-y-3">
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="bg-yellow-400 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
            <h4 className="font-bold">Joint Adventure Package</h4>
          </div>
          <p className="mt-2 text-sm text-white/80 pl-11">
            Pool resources with your birthday twins for an epic {currentSign.element.toLowerCase()}-themed adventure that satisfies your {currentSign.name} spirit.
          </p>
          <button className="mt-2 ml-11 text-sm text-yellow-400 hover:underline">Start planning →</button>
        </div>
        
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="bg-yellow-400 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
            <h4 className="font-bold">Dual Destination Celebration</h4>
          </div>
          <p className="mt-2 text-sm text-white/80 pl-11">
            Create a two-location party that reflects both of your unique {currentSign.name} personalities while celebrating what you share.
          </p>
          <button className="mt-2 ml-11 text-sm text-yellow-400 hover:underline">Start planning →</button>
        </div>
        
        <div className="bg-white/10 p-3 rounded-lg">
          <div className="flex items-center">
            <div className="bg-yellow-400 text-blue-900 h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
            <h4 className="font-bold">Zodiac Exchange</h4>
          <p className="mt-2 text-sm text-white/80 pl-11">
            Gift each other items that represent your shared {currentSign.name} traits and celebrate your cosmic connection.
          </p>
          <button className="mt-2 ml-11 text-sm text-yellow-400 hover:underline">Start planning →</button>
        </div>
        </div>
      </div>
    </div>
  );
}