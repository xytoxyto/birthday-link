'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    try {
      console.log('Login attempt with:', email, password);
      // Actual authentication logic would go here
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col justify-center items-center font-sans">
      <section className="flex-grow flex items-center justify-center w-full p-4 md:p-8">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-300">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-birthday-gold text-center drop-shadow-lg">
            Log in to Birthday Link
          </h1>
          <p className="text-white/80 mb-6 text-center">Access your account and join the celebration!</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/80 text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-birthday-gold text-purple-900 font-bold px-4 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Log In
            </button>
            {error && <div className="text-red-400 text-center mt-2">{error}</div>}
          </form>
          <div className="text-white text-sm mt-6 space-y-2 text-center">
            <p>
              Don't have an account?{' '}
              <Link href="/signup" className="underline hover:text-birthday-gold">Sign up</Link>
            </p>
            <p>
              <Link href="/forgot-password" className="underline hover:text-birthday-gold">Forgot password?</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}