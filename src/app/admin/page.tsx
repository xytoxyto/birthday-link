import NavBar from '../../components/NavBar';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <NavBar />

      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">🎂 Birthday Link Admin Dashboard</h1>
          <p className="text-lg text-gray-700 mb-6">
            Manage events, approve guest lists, and ensure every Birthday Link experience
            meets our promise of premium, unforgettable celebrations.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-birthday-gold text-white px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition duration-300"
          >
            Return to Dashboard
          </Link>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 p-4 bg-gray-50">
        &copy; {new Date().getFullYear()} Birthday Link. All rights reserved.
      </footer>
    </main>
  );
}
