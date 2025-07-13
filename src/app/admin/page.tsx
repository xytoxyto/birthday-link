// Update the import path if NavBar is located elsewhere, for example:
import NavBar from '../../components/NavBar';
// Or create the NavBar component at src/components/NavBar.tsx if it does not exist.
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <NavBar />

      <section className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-8 border border-purple-300">
          <h1 className="text-5xl font-extrabold mb-4 text-birthday-gold">🎂 Welcome to Birthday Link 🎉</h1>
          <p className="text-lg text-purple-100 mb-6">
            Never celebrate alone again. Connect with those who share your birthday. 
            Curated celebrations. Premium service. Your day, truly celebrated.
          </p>
          <Link 
            href="/signup"
            className="inline-block bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      <footer className="text-center text-sm text-purple-200 p-4 bg-purple-950">
        &copy; {new Date().getFullYear()} Birthday Link. All rights reserved.
      </footer>
    </main>
  );
}
