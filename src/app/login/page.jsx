import Link from 'next/link';

export default function LoginPage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-purple-900 py-12 px-4 text-center min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto bg-white/10 backdrop-blur rounded-lg p-6 shadow-lg space-y-4">
        <h1 className="text-3xl font-bold text-white mb-2">🎂 Welcome Back 🎉</h1>
        <p className="text-white mb-4">Log in to access your Birthday Link account</p>

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

        <button
          className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition-colors"
        >
          Log In
        </button>

        <p className="text-white text-sm">
          Don't have an account? <Link href="/" className="underline hover:text-yellow-300">Sign up</Link>
        </p>
      </div>
    </section>
  );
}