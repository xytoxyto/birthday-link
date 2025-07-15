import TierBadge from './TierBadge';

export default function MatchCard({ name, birthday, proximity, tier }) {
  return (
    <div className="rounded-lg bg-white/10 backdrop-blur p-4 shadow-lg text-white space-y-2">
      <div className="flex items-center space-x-3">
        <div className="bg-blue-700 rounded-full w-12 h-12 flex items-center justify-center text-xl">🎂</div>
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-white/80 text-sm">{birthday}</p>
        </div>
      </div>
      <p className="text-sm text-white/60">🎉 {proximity}</p>
      <TierBadge tier={tier} />
    </div>
  );
}