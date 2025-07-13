import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-purple-800 text-white p-8">
      <h1 className="text-5xl font-bold mb-4">🎂 Oops! Page Not Found</h1>
      <p className="mb-6 text-lg max-w-xl text-center">
        You’re lost, but your birthday deserves to be found. Let’s get you back to the celebration!
      </p>
      <Link
        href="/"
        className="inline-block bg-white text-blue-700 px-6 py-3 rounded-full shadow hover:bg-gray-100"
      >
        Return Home
      </Link>
    </main>
  );
}
