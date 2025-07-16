import TierBadge from './TierBadge';

export default function DashboardHeader({ user = {} }) {
  // Default values if user prop isn't fully loaded
  const { name = 'Birthday Friend', tier = 'Cosmic', nextBirthday = 'July 25' } = user;

  return (
    <div className="bg-white/30 backdrop-blur-lg rounded-xl p-8 shadow-xl mb-10 border-2 border-primary/10 brand-glow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-5">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl shadow-md">
            382
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-foreground drop-shadow">{name}</h2>
            <p className="text-foreground/80">Your next birthday: {nextBirthday}</p>
            <div className="mt-2">
              <TierBadge tier={tier} />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="bg-white/40 rounded-xl px-6 py-3 text-center shadow">
            <p className="text-sm text-foreground/70">Upcoming Events</p>
            <p className="text-2xl font-bold text-foreground">3</p>
          </div>
          <div className="bg-white/40 rounded-xl px-6 py-3 text-center shadow">
            <p className="text-sm text-foreground/70">Birthday Matches</p>
            <p className="text-2xl font-bold text-foreground">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}