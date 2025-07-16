export default function TierBadge({ tier }) {
  const getBadgeColors = () => {
    switch (tier.toLowerCase()) {
      case 'galaxy':
        return 'bg-gradient-to-r from-primary to-accent text-white shadow';
      case 'elite':
        return 'bg-gradient-to-r from-accent to-primary-light text-purple-900 shadow';
      case 'cosmic':
        return 'bg-gradient-to-r from-pink-500 to-primary text-white shadow';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wide border border-white/30 ${getBadgeColors()} fancy-border`}>
      {tier}
    </span>
  );
}
