import React from "react";
import TierBadge from "@/components/TierBadge";


// Example data for demonstration; in production, fetch or receive as props
const defaultHost = {
  photo: "/images/host-photo.jpg",
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

function HostHeader({ photo, name, birthday, tier }) {
  return (
    <section className="w-full max-w-md rounded-2xl shadow-xl backdrop-blur-md bg-white/10 p-6 flex flex-col items-center mb-6">
      <img
        src={photo}
        alt={name + " profile"}
        className="w-24 h-24 rounded-full object-cover border-4 border-blue-800 shadow-lg mb-4 bg-blue-900"
        onError={e => { e.target.onerror = null; e.target.src = '/public/file.svg'; }}
      />
      <h1 className="text-2xl font-bold text-white flex items-center gap-2">
        {name} <span role="img" aria-label="cake">🎂</span>
      </h1>
      <div className="text-blue-200 text-sm mb-2">{birthday}</div>
      <TierBadge tier={tier} />
    </section>
  );
}

function AboutSection({ bio, note }) {
  return (
    <section className="w-full max-w-md rounded-xl shadow-lg backdrop-blur-md bg-white/10 p-5 mb-6">
      <h2 className="text-lg font-semibold text-white mb-2">About</h2>
      <p className="text-blue-100 mb-2 whitespace-pre-line">{bio}</p>
      {note && <div className="text-blue-300 italic">"{note}"</div>}
    </section>
  );
}

function PastEventsSection({ events }) {
  if (!events?.length) return null;
  return (
    <section className="w-full max-w-md rounded-xl shadow-lg backdrop-blur-md bg-white/10 p-5">
      <h2 className="text-lg font-semibold text-white mb-4">Past Events</h2>
      <ul className="flex flex-col gap-4">
        {events.map((event, idx) => (
          <li
            key={event.name + event.date}
            className="flex items-center gap-4 bg-white/10 rounded-lg p-3 shadow-md"
          >
            <img
              src={event.image}
              alt={event.name + ' event'}
              className="w-16 h-16 rounded-lg object-cover border-2 border-blue-800 bg-blue-900"
              onError={e => { e.target.onerror = null; e.target.src = '/public/file.svg'; }}
            />
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium truncate">{event.name}</div>
              <div className="text-blue-200 text-xs">{event.date}</div>
              <TierBadge tier={event.tier} className="mt-1" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function HostProfilePage({ host = defaultHost }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black p-4 flex flex-col items-center">
      <HostHeader
        photo={host.photo}
        name={host.name}
        birthday={host.birthday}
        tier={host.tier}
      />
      <AboutSection bio={host.bio} note={host.note} />
      <PastEventsSection events={host.pastEvents} />
    </main>
  );
}
