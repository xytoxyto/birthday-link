import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-black min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">😢 404</h1>
        <p className="text-white/80">We couldn't find the page you're looking for.</p>
        <Link
          href="/"
          className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}