import React from "react";
import TierBadge from "@/components/TierBadge";

const host = {
  photo: "/images/host-photo.jpg", // Replace with actual path
  name: "Alex Johnson",
  birthday: "April 12, 1990",
  tier: "Gold",
  bio: "Event enthusiast and cake lover. I enjoy bringing people together for unforgettable celebrations.",
  note: "Thank you for making my birthday special every year! 🎉",
  pastEvents: [
    {
      image: "/images/event1.jpg",
      name: "Galactic Gala",
      date: "March 2024",
      tier: "Platinum",
    },
    {
      image: "/images/event2.jpg",
      name: "Starlit Soirée",
      date: "July 2023",
      tier: "Gold",
    },
  ],
};

export default function HostProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black p-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md rounded-2xl shadow-xl backdrop-blur-md bg-white/10 p-6 flex flex-col items-center mb-6">
        <img
          src={host.photo}
          alt={host.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-800 shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          {host.name} <span role="img" aria-label="cake">🎂</span>
        </h1>
        <div className="text-blue-200 text-sm mb-2">{host.birthday}</div>
        <TierBadge tier={host.tier} />
      </div>

      {/* About Section */}
      <div className="w-full max-w-md rounded-xl shadow-lg backdrop-blur-md bg-white/10 p-5 mb-6">
        <h2 className="text-lg font-semibold text-white mb-2">About</h2>
        <p className="text-blue-100 mb-2">{host.bio}</p>
        <div className="text-blue-300 italic">"{host.note}"</div>
      </div>

      {/* Past Events */}
      <div className="w-full max-w-md rounded-xl shadow-lg backdrop-blur-md bg-white/10 p-5">
        <h2 className="text-lg font-semibold text-white mb-4">Past Events</h2>
        <div className="flex flex-col gap-4">
          {host.pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white/10 rounded-lg p-3 shadow-md"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-16 h-16 rounded-lg object-cover border-2 border-blue-800"
              />
              <div className="flex-1">
                <div className="text-white font-medium">{event.name}</div>
                <div className="text-blue-200 text-xs">{event.date}</div>
                <TierBadge tier={event.tier} className="mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
