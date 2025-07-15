import Link from 'next/link';

export default function SignupForm() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-purple-900 py-12 px-4 text-center">
      <div className="max-w-md mx-auto bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg space-y-4">
        <h1 className="text-3xl font-bold text-white mb-2">🎂 Join Birthday Link 🎉</h1>
        <p className="text-white mb-4">Never celebrate alone again. Find your birthday crew.</p>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <input
          type="date"
          className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        <select
          className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option>Select Tier</option>
          <option>Galaxy - Starry rooftop celebrations with birthday twins</option>
          <option>Elite - VIP luxury experiences in exclusive venues</option>
          <option>Cosmic - Fun cosmic gatherings crafted for memories</option>
        </select>

        <button
          className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition-colors"
        >
          Join Birthday Link
        </button>

        <p className="text-white text-sm">
          Already have an account? <Link href="/login" className="underline hover:text-yellow-300">Log in</Link>
        </p>
      </div>
    </section>
  );
}