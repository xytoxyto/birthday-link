import Link from 'next/link';
import TestimonialSection from '../components/TestimonialSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">

      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">🎂 Welcome to Birthday Link 🎉</h1>
          <p className="text-lg text-gray-700 mb-6">
            Never celebrate alone again. Match with those who share your birthday.
            Curated celebrations. Premium service. Your day, truly celebrated.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-birthday-gold text-white px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition duration-300"
          >
            Join Now
          </Link>
        </div>
      </section>
      <TestimonialSection />
    </main>
  );
}
