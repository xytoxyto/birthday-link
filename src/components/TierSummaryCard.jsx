import TierBadge from './TierBadge';

export default function TierSummaryCard({ tier, price, features }) {
  const getBgColor = () => {
    switch (tier.toLowerCase()) {
      case 'galaxy':
        return 'from-blue-900 to-blue-800';
      case 'elite':
        return 'from-purple-900 to-purple-800';
      case 'cosmic':
        return 'from-pink-900 to-pink-800';
      default:
        return 'from-gray-900 to-gray-800';
    }
  };

  return (
    <div className={`rounded-lg shadow-lg bg-gradient-to-br ${getBgColor()} p-6 text-white space-y-4`}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{tier} Tier</h2>
        <TierBadge tier={tier} />
      </div>
      
      <div className="text-3xl font-bold">${price}<span className="text-lg text-white/70">/month</span></div>
      
      <ul className="space-y-2 pt-4 border-t border-white/20">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}