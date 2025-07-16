import TierBadge from './TierBadge';

export default function MatchCard({ name, birthday, proximity, tier }) {
  return (
    <div className="rounded-xl bg-white/30 backdrop-blur-lg p-5 shadow-xl text-foreground space-y-3 border-2 border-primary/10 brand-glow">
      <div className="flex items-center space-x-4">
        <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-xl shadow-md">382</div>
        <div>
          <h3 className="text-lg font-extrabold text-foreground drop-shadow">{name}</h3>
          <p className="text-foreground/70 text-sm">{birthday}</p>
        </div>
      </div>
      <p className="text-sm text-foreground/60">389 {proximity}</p>
      <TierBadge tier={tier} />
    </div>
  );
}