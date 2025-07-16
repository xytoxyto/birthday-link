import React from "react";
import Link from "next/link";
import TierBadge from "@/components/TierBadge";

type MatchCardProps = {
  name: string;
  date: string;
  tier: string;
};

function MatchCard({ name, date, tier }: MatchCardProps) {
  return (
    <div className="bg-white/20 hover:bg-white/30 transition-all duration-300 backdrop-blur-lg rounded-2xl shadow-2xl p-6 text-white flex flex-col items-start border border-white/10 hover:scale-[1.025]">
      <h3 className="text-2xl font-extrabold drop-shadow mb-1 flex items-center gap-2">
        <span className="inline-block animate-bounce text-pink-300">🎉</span> {name}
      </h3>
      <p className="text-white/80 text-base mb-3 font-medium">Birthday: <span className="text-pink-200 font-semibold">{date}</span></p>
      <TierBadge tier={tier} />
    </div>
  );
}

import { useEffect, useState } from "react";

type Match = {
  name: string;
  date: string;
  tier: string;
};

export default function BirthdayMatchingPage() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    // Replace this with your API call
    const fetchMatches = async () => {
      // Simulate API delay
      await new Promise((res) => setTimeout(res, 300));
      setMatches([
        { name: "Jane Doe", date: "July 20", tier: "Galaxy" },
        { name: "Carlos Rivera", date: "July 21", tier: "Elite" },
        { name: "Aisha Chen", date: "July 19", tier: "Cosmic" },
      ]);
    };
    fetchMatches();
  }, []);

  return (
    <section className="relative min-h-screen py-12 px-2 sm:px-4 flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-blue-900 via-indigo-900 via-60% to-black">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>
      <div className="max-w-lg w-full mx-auto space-y-8">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1
            className="text-5xl font-extrabold mb-3 tracking-tight drop-shadow animate-fade-in-up"
            style={{ animationDelay: '0s' }}
          >
            <span className="inline-block animate-bounce text-yellow-300 mr-2">🎯</span>
            Birthday Matching
          </h1>
          <p
            className="text-white/80 text-lg animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Find people nearby who share your birthday!
          </p>
        </div>

        {/* Dynamic Matches */}
        <div
          className="space-y-5 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {matches.length === 0 ? (
            <div className="text-center text-white/60 py-8 animate-pulse">Loading matches...</div>
          ) : (
            matches.map((match) => (
              <MatchCard key={match.name + match.date} {...match} />
            ))
          )}
        </div>

        {/* Tier Benefit */}
        <div
          className="bg-yellow-400/20 backdrop-blur-lg rounded-2xl p-6 shadow-2xl text-yellow-300 space-y-3 mt-8 border border-yellow-200/20 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          <h2 className="text-2xl font-extrabold flex items-center gap-2">
            <span className="text-yellow-200">⭐️</span> Elite Benefit
          </h2>
          <p className="text-yellow-100 text-base">Elite users see more nearby matches and advanced filters.</p>
          <Link
            href="/tiers/upgrade"
            className="inline-block bg-yellow-300 text-blue-900 font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-200 transition-all text-lg mt-2 ring-2 ring-yellow-100/40 focus:ring-4 focus:outline-none"
          >
            Upgrade to Elite
          </Link>
        </div>
      </div>
      {/* Decorative Stars */}
      <div className="pointer-events-none select-none absolute inset-0 -z-10">
        {[...Array(18)].map((_, i) => {
          // Use a seeded random for consistent star positions and delays
          const seed = i * 9973;
          const rand = (n: number) => {
            const x = Math.sin(seed + n) * 10000;
            return x - Math.floor(x);
          };
          const top = rand(1) * 100;
          const left = rand(2) * 100;
          const delay = rand(3) * 2;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full blur-sm animate-twinkle"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
