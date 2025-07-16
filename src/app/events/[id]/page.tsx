
import Image from 'next/image';
import EventDetailClientStyles from './EventDetailClientStyles';
import Link from 'next/link';
import { type Metadata } from 'next';


type SegmentParams<T extends object = Record<string, unknown>> = T extends Record<string, unknown>
  ? { [K in keyof T]: T[K] extends string ? string | string[] | undefined : never }
  : T;

interface PageProps {
  params?: Promise<SegmentParams>;
  searchParams?: Promise<Record<string, unknown>>;
}
import React from 'react';


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const awaitedParams = params ? await params : { id: '' };
  return {
    title: `Birthday Event: ${awaitedParams.id} | Birthday Link`,
    description: 'View details for this curated birthday celebration with venue, guest list, and RSVP options.',
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const awaitedParams = params ? await params : { id: '' };
  const { id } = awaitedParams;
  // In a real app, you would fetch event data here
  // const { data: event, isLoading, error } = useSomeDataFetchingHook(id);
  return (
    <main className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900 text-white overflow-hidden">
      <EventDetailClientStyles />
      {/* Animated Confetti Effect */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <svg className="w-full h-full animate-confetti" viewBox="0 0 100 100" fill="none">
          <circle cx="10" cy="10" r="1.5" fill="#FFD700"/>
          <circle cx="90" cy="20" r="1.5" fill="#E879F9"/>
          <circle cx="50" cy="80" r="1.5" fill="#38BDF8"/>
          <circle cx="80" cy="60" r="1.5" fill="#F472B6"/>
          <circle cx="30" cy="40" r="1.5" fill="#FBBF24"/>
        </svg>
      </div>

      {/* Hero Section with background image and gradient overlay */}
      <section className="relative flex-grow flex items-center justify-center text-center p-4 md:p-8">
        <div className="absolute inset-0 z-0">
          <Image src="/zodiac-bg.svg" alt="Birthday background" className="w-full h-full object-cover opacity-30" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-blue-950/80" />
        </div>
        <div className="relative z-20 max-w-2xl bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 md:p-12 border-2 border-birthday-gold/60">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-birthday-gold drop-shadow-lg tracking-tight animate-gradient-x bg-gradient-to-r from-birthday-gold via-yellow-300 to-pink-400 bg-clip-text text-transparent">
            🎂 Birthday Link Event: <span className="text-white/90">{id}</span> 🎉
          </h1>
          <p className="text-lg md:text-2xl text-purple-100 mb-8 font-medium drop-shadow">
            View details for this <span className="text-birthday-gold font-bold">curated birthday celebration</span>.<br/>
            Check the <span className="text-pink-300 font-semibold">venue</span>, <span className="text-blue-300 font-semibold">guest list</span>,
            premium service options, and <span className="text-yellow-200 font-semibold">RSVP</span> to join the experience.<br/>
            <span className="italic text-purple-200">Make it unforgettable!</span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link
              href="/events"
              className="inline-block bg-gradient-to-r from-birthday-gold via-yellow-300 to-pink-400 text-purple-900 font-extrabold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-yellow-400 hover:to-pink-300 transition-all duration-200 text-lg border-2 border-yellow-200/60"
            >
              ← Back to Events
            </Link>
            <Link
              href={`/events/${id}/rsvp`}
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white font-extrabold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:from-pink-600 hover:to-yellow-300 transition-all duration-200 text-lg border-2 border-pink-200/60"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </section>
      {/* Subtle animated gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-400/30 via-purple-500/10 to-transparent animate-pulse-slow z-10" />

    </main>
  );
}
