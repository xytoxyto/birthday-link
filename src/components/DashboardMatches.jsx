import Link from 'next/link';
import { useState, useEffect } from 'react';
import MatchCard from './MatchCard';

export default function DashboardMatches() {
  const [loading, setLoading] = useState(true);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Simulate API call to fetch matches
    setTimeout(() => {
      setMatches([
        { id: 1, name: "Jane Doe", birthday: "July 22", proximity: "2 days apart", tier: "Galaxy" },
        { id: 2, name: "John Smith", birthday: "July 21", proximity: "1 day apart", tier: "Elite" },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Your Birthday Matches</h2>
      
      {loading ? (
        <div className="space-y-4">
          <div className="h-24 bg-white/10 animate-pulse rounded-lg"></div>
          <div className="h-24 bg-white/10 animate-pulse rounded-lg"></div>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {matches.map(match => (
              <MatchCard 
                key={match.id}
                name={match.name}
                birthday={match.birthday}
                proximity={match.proximity}
                tier={match.tier}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/matches"
              className="inline-block bg-white/10 backdrop-blur text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-white/20 transition"
            >
              View All Matches
            </Link>
          </div>
        </>
      )}
    </div>
  );
}