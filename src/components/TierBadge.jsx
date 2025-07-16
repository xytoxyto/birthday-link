
import { getTierStyles } from './tierStyles';

export default function TierBadge({ tier }) {
  const { background, text } = getTierStyles(tier);
  return (
    <span
      className={`inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wide border border-white/30 ${background} ${text} fancy-border`}
    >
      {tier}
    </span>
  );
}
