"use client";
import { useState } from 'react';
import Link from 'next/link';
import EventCard from '@/components/EventCard';
import BirthdayTimelineModal from './BirthdayTimelineModal';

const TIMELINE_EVENTS = [
  {
    id: 1,
    image: '/images/event1.jpg',
    name: 'Rooftop Vibes',
    date: 'July 20, 2024',
    notes: 'Incredible night with live music and friends.',
    tier: 'Galaxy',
    detailUrl: '/events/1',
  },
  {
    id: 2,
    image: '/images/future-event.jpg',
    name: 'Upcoming Cosmic Bash',
    date: 'July 20, 2025',
    notes: 'Get ready for neon bowling and VIP lounge!',
    tier: 'Cosmic',
    detailUrl: '/events/2',
  },
];

export default function BirthdayTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof TIMELINE_EVENTS[0] | null>(null);
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen py-12 px-4">
      <div className="max-w-lg mx-auto space-y-6">
        {/* Header */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-2">📅 Birthday Timeline</h1>
          <p className="text-white/80">
            Celebrate your memories and plan your next big day.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {TIMELINE_EVENTS.map(event => (
            <EventCard
              key={event.id}
              image={event.image}
              name={event.name}
              date={event.date}
              notes={event.notes}
              tier={event.tier}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>

        {/* Tier Upgrade */}
        <div className="bg-yellow-400/10 backdrop-blur rounded-lg p-4 shadow-lg text-yellow-400 space-y-2 mt-6">
          <h2 className="text-xl font-bold">⭐️ Elite & Cosmic Members</h2>
          <p>
            Unlock video memories and upload your favorite photos from each celebration.
          </p>
          <Link
            href="/tiers/upgrade"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition"
          >
            Upgrade to Save More Memories
          </Link>
        </div>
      </div>
      {selectedEvent && (
        <BirthdayTimelineModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
