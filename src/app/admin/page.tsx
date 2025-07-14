import NavBar from '../../components/NavBar';
import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <NavBar />

      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 border border-purple-300">
          <h1 className="text-5xl font-extrabold mb-4 text-birthday-gold">🎂 Birthday Link Admin Panel 🎉</h1>
          <p className="text-lg text-purple-100 mb-6">
            Manage events, user signups, site content, and moderation tools. 
            Birthday Link's Admin Panel empowers you to curate amazing shared birthday experiences.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>

      <footer className="text-center text-sm text-purple-200 p-4 bg-purple-950">
        &copy; {new Date().getFullYear()} Birthday Link. All rights reserved.
      </footer>
    </main>
  );
}
