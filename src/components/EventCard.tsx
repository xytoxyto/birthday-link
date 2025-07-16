import Image from 'next/image';
import React from 'react';

interface EventCardProps {
  image: string;
  name: string;
  date: string;
  notes: string;
  tier: string;
  onClick?: () => void;
}

const tierColors: Record<string, string> = {
  Galaxy: 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white',
  Cosmic: 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white',
  Elite: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-blue-900',
};

const EventCard: React.FC<EventCardProps> = ({ image, name, date, notes, tier, onClick }) => {
  // Keyboard accessibility handler
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div
      className={`flex items-center gap-4 bg-white/5 rounded-lg p-4 shadow-lg transition transform select-none ${
        onClick ? 'cursor-pointer hover:scale-[1.025] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 active:scale-95' : ''
      }`}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? 'button' : undefined}
      aria-pressed={onClick ? false : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className={`px-2 py-1 rounded text-xs font-bold ${tierColors[tier] || 'bg-gray-200 text-gray-800'}`}>{tier}</span>
          <span className="text-sm text-white/60">{date}</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-white/80 text-sm">{notes}</p>
      </div>
    </div>
  );
};

export default EventCard;
