
"use client";
import React from "react";
import Image from "next/image";

// Example TierBadge component
const TierBadge = ({ tier }) => {
  const tierColors = {
    Gold: "bg-yellow-400 text-yellow-900",
    Silver: "bg-gray-300 text-gray-800",
    Bronze: "bg-orange-400 text-orange-900",
    Platinum: "bg-blue-300 text-blue-900",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${tierColors[tier] || "bg-gray-700 text-white"}`}
    >
      {tier}
    </span>
  );
};

const reviews = [
  {
    quote: "This app made my birthday unforgettable! The planning was seamless and fun.",
    name: "Alex Johnson",
    photo: "/images/alex.jpg",
    tier: "Gold",
  },
  {
    quote: "Loved the personalized recommendations. Highly recommend to everyone!",
    name: "Maria Chen",
    photo: "/images/maria.jpg",
    tier: "Platinum",
  },
  {
    quote: "Super easy to use and the team was so helpful. 10/10 experience.",
    name: "Samir Patel",
    tier: "Silver",
  },
  {
    quote: "The best way to organize a birthday party. My friends were impressed!",
    name: "Lina Gomez",
    photo: "/images/lina.jpg",
    tier: "Bronze",
  },
];

const ReviewCard = ({ quote, name, photo, tier }) => (
  <div className="flex flex-col items-center bg-white/10 rounded-2xl shadow-lg backdrop-blur-md p-6 mb-6 sm:mb-0 sm:mr-0 sm:ml-0">
    <div className="text-lg italic text-white mb-4 text-center">“{quote}”</div>
    {photo ? (
      <Image
        src={photo}
        alt={name}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover border-2 border-white mb-2"
      />
    ) : (
      <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center text-white mb-2 border-2 border-white">
        <span className="text-xl">👤</span>
      </div>
    )}
    <div className="font-semibold text-white">{name}</div>
    <div className="mt-2">
      <TierBadge tier={tier} />
    </div>
  </div>
);

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-black py-12 px-4">
      <header className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center gap-2">
          <span role="img" aria-label="heart">❤️</span>
          What Our Users Say
        </h2>
        <p className="mt-2 text-lg text-blue-200">
          Real stories from real people. Join the celebration!
        </p>
      </header>
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reviews.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </div>
    </div>
  );
}
