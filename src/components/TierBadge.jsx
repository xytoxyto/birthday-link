export default function TierBadge({ tier }) {
  const getBadgeColors = () => {
    switch (tier.toLowerCase()) {
      case 'galaxy':
        return 'bg-blue-700 text-white';
      case 'elite':
        return 'bg-yellow-400 text-purple-900';
      case 'cosmic':
        return 'bg-pink-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColors()}`}>
      {tier}
    </span>
  );
}
