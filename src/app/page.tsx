import Link from 'next/link';
import TestimonialSection from '../components/TestimonialSection';

export default function HomePage() {
  const tiers = [
    {
      name: 'Galaxy',
      description: 'Starry rooftop celebrations with your birthday twins.',
      gradient: 'from-purple-900/40 to-blue-900/40 border-purple-300/50',
    },
    {
      name: 'Elite',
      description: 'VIP luxury venues and curated experiences.',
      gradient: 'from-yellow-800/40 to-yellow-600/40 border-yellow-300/50',
    },
    {
      name: 'Cosmic',
      description: 'Epic shared adventures and all-inclusive packages.',
      gradient: 'from-indigo-900/40 to-purple-800/40 border-indigo-300/50',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0a5b] to-[#4b0082] text-white flex flex-col">
      <section className="relative flex-grow flex items-center justify-center text-center p-6 md:p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/zodiac-bg.svg')] opacity-10 bg-repeat" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-birthday-gold drop-shadow-xl">
            🎂 Birthday Link
          </h1>
          <p className="text-lg md:text-2xl text-purple-100 max-w-2xl mx-auto">
            Never celebrate alone again. Match with birthday twins for unforgettable premium events.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-8 py-4 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      <section className="py-12 bg-black/50">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-birthday-gold">Our Tiers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-gradient-to-br ${tier.gradient} border rounded-lg p-6 backdrop-blur-md shadow-md`}
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
