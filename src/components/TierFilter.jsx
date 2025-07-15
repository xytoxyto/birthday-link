import TierBadge from './TierBadge';

export default function TierFilter({ onTierSelect, onDateChange, selectedTier }) {
  const tiers = ['Galaxy', 'Elite', 'Cosmic'];
  
  return (
    <div className="bg-white/10 backdrop-blur rounded-lg shadow-lg p-4 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {tiers.map(tier => (
          <button 
            key={tier}
            onClick={() => onTierSelect(tier)}
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold hover:opacity-90 transition ${
              selectedTier === tier ? 'ring-2 ring-white' : ''
            }`}
            style={{ background: 'transparent' }}
          >
            <TierBadge tier={tier} />
          </button>
        ))}
      </div>
      <input
        type="date"
        onChange={(e) => onDateChange(e.target.value)}
        className="w-full md:w-auto rounded-lg bg-white text-blue-900 px-4 py-2 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}