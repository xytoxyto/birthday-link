import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col">
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 text-white p-6 shadow-md">
        <h1 className="text-4xl font-bold">🎂 Welcome to Birthday Link 🎉</h1>
        <p className="mt-2 text-lg max-w-2xl">
          Never celebrate alone again. Match with people who share your birthday.
          Curated experiences. Exclusive venues. Landmark events.
        </p>
      </header>
      
      <nav className="flex flex-wrap gap-4 justify-center p-4 bg-gray-100 shadow-inner">
        <Link href="/signup" className="hover:underline text-blue-700">Sign Up</Link>
        <Link href="/dashboard" className="hover:underline text-blue-700">Dashboard</Link>
        <Link href="/events" className="hover:underline text-blue-700">Events</Link>
        <Link href="/events/123" className="hover:underline text-blue-700">Event Detail</Link>
        <Link href="/events/create" className="hover:underline text-blue-700">Create Event</Link>
        <Link href="/profile" className="hover:underline text-blue-700">Profile</Link>
        <Link href="/admin" className="hover:underline text-blue-700">Admin</Link>
        <Link href="/legal" className="hover:underline text-blue-700">Legal</Link>
      </nav>

      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">A Landmark Birthday Experience</h2>
          <p className="text-lg text-gray-700 mb-6">
            This isn&apos;t just another party. It&apos;s a curated, unforgettable event.
            Exclusive venues. Premium service. Celebrate with those who share your journey.
          </p>
          <Link href="/signup" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800">
            Join Now
          </Link>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 p-4 bg-gray-50">
        &copy; {new Date().getFullYear()} Birthday Link. All rights reserved.
      </footer>
    </main>
  );
}
