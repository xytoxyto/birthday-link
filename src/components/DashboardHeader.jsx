import TierBadge from './TierBadge';

export default function DashboardHeader({ user = {} }) {
  // Default values if user prop isn't fully loaded
  const { name = 'Birthday Friend', tier = 'Cosmic', nextBirthday = 'July 25' } = user;

  return (
    <div className="bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-2xl">
            🎂
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <p className="text-white/80">Your next birthday: {nextBirthday}</p>
            <div className="mt-1">
              <TierBadge tier={tier} />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
            <p className="text-sm text-white/70">Upcoming Events</p>
            <p className="text-2xl font-bold text-white">3</p>
          </div>
          <div className="bg-white/20 rounded-lg px-4 py-2 text-center">
            <p className="text-sm text-white/70">Birthday Matches</p>
            <p className="text-2xl font-bold text-white">5</p>
          </div>
        </div>
      </div>
    </div>
  );
}