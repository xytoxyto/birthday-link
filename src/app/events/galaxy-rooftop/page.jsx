import EventDetail from '@/components/EventDetail';
import Link from 'next/link';import Link from 'next/link';

export default function GalaxyRooftopEventPage() {
  return (
    <>
      <EventDetail />
      <Link href="/events/galaxy-rooftop">
        <button className="mt-4 w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-300 transition">
          RSVP
        </button>
      </Link>
    </>
  );
}