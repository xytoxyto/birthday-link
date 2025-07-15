'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="bg-gradient-to-b from-purple-900 to-black min-h-screen flex items-center justify-center px-4">
      <div className="max-w-lg mx-auto bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">🚧 500</h1>
        <p className="text-white/80">Something went wrong on our end. We're working on it!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-block bg-white/20 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-white/30 transition"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block bg-yellow-400 text-purple-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}