


import Link from 'next/link';
import { type Metadata } from 'next';


import React from 'react';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};



export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  return {
    title: `Birthday Event: ${resolvedParams.id} | Birthday Link`,
    description: 'View details for this curated birthday celebration with venue, guest list, and RSVP options.',
  };
}



export default async function EventDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  // In a real app, you would fetch event data here
  // const { data: event, isLoading, error } = useSomeDataFetchingHook(id);
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-4 md:p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 md:p-8 border border-purple-300">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-birthday-gold">
            🎂 Birthday Link Event: {id} 🎉
          </h1>
          <p className="text-base md:text-lg text-purple-100 mb-6">
            View details for this curated birthday celebration. Check the venue, guest list,
            premium service options, and RSVP to join the experience. Make it unforgettable!
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Link
              href="/events"
              className="inline-block bg-birthday-gold text-purple-900 font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow hover:bg-yellow-400 transition text-sm md:text-base"
            >
              Back to Events
            </Link>
            <Link
              href={`/events/${id}/rsvp`}
              className="inline-block bg-purple-600 text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow hover:bg-purple-500 transition text-sm md:text-base"
            >
              RSVP Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
