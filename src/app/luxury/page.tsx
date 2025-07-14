import Link from 'next/link';

export default function LuxuryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-birthday-blue via-birthday-purple to-birthday-blue text-white">
      <section className="flex-grow flex flex-col items-center justify-center text-center p-8 space-y-6">
        <h1 className="text-5xl font-extrabold text-birthday-gold drop-shadow-lg">Celebrate in Luxury</h1>
        <p className="max-w-xl text-lg">
          Experience curated birthday events in premium venues. Connect with others who share your special day and enjoy unforgettable celebrations.
        </p>
        <Link href="/signup" className="bg-birthday-gold text-birthday-blue font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition">
          Join the Celebration
        </Link>
      </section>
    </main>
  );
}
