import Link from 'next/link';
import TestimonialSection from '../components/TestimonialSection';

export default function HomePage() {
  const tiers = [
    {
      name: 'Galaxy',
      description:
        'Connect with birthday twins for starry rooftop celebrations.',
    },
    {
      name: 'Elite',
      description: 'VIP luxury experiences in exclusive venues.',
    },
    {
      name: 'Cosmic',
      description: 'Fun cosmic gatherings crafted for lasting memories.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="relative flex-grow flex items-center justify-center text-center p-4 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/zodiac-bg.svg')] opacity-10 bg-repeat" />
        <div className="relative z-10 max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-birthday-gold drop-shadow-lg">
            🎂 Birthday Link
          </h1>
          <p className="text-xl md:text-2xl text-purple-100">Never Celebrate Alone Again.</p>
          <p className="text-purple-200 text-base md:text-lg">
            Match with people who share your birthday and enjoy curated luxury experiences.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      <section className="py-12 bg-black/50">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-birthday-gold">Our Tiers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white/10 border border-purple-300 rounded-lg p-6 backdrop-blur-md shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2 text-birthday-gold">{tier.name}</h3>
                <p className="text-purple-100 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />
    </main>
  );
}
