import Link from 'next/link';
import TierBadge from '@/components/TierBadge';
import MatchCard from '@/components/MatchCard';

export default function MatchesPage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-2">🎂 Meet Your Matches</h1>
          <p className="text-white/80">See who you'll celebrate with and start planning the perfect birthday bash.</p>
        </div>

        <div className="space-y-4">
          <MatchCard name="Jane Doe" birthday="July 22" proximity="2 days apart" tier="Galaxy" />
          <MatchCard name="John Smith" birthday="July 21" proximity="1 day apart" tier="Elite" />
          <MatchCard name="Emily Rose" birthday="July 23" proximity="3 days apart" tier="Cosmic" />
        </div>

        <div className="text-center mt-6">
          <p className="text-white/80 mb-2">Want to see more matches?</p>
          <Link
            href="/tiers/upgrade"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
          >
            Unlock with Elite or Cosmic
          </Link>
        </div>
      </div>
    </section>
  );
}