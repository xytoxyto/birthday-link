import TierBadge from './TierBadge';
import { getTierStyles } from './tierStyles';

export default function TierSummaryCard({ tier, price, features }) {
  const { background, text } = getTierStyles(tier);
  return (
    <div className={`rounded-lg shadow-lg p-6 space-y-4 ${background} ${text}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">{tier} Tier</h2>
        <TierBadge tier={tier} />
      </div>

      <div className="text-3xl font-bold">${price}<span className="text-lg opacity-70">/month</span></div>

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