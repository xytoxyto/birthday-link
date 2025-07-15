'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    // Add your login logic here
    try {
      console.log('Login attempt with:', email, password);
      // Actual authentication logic would go here
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-blue-900 p-4">
      <div className="bg-blue-800 p-8 rounded-xl shadow-xl max-w-md w-full">
        <p className="text-white mb-4">Log in to access your Birthday Link account</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-white text-blue-900 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 text-blue-900 font-semibold px-4 py-3 rounded-full shadow hover:bg-yellow-300 transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="text-white text-sm mt-4 space-y-2">
          <p>
            Don't have an account? <Link href="/signup" className="underline hover:text-yellow-300">Sign up</Link>
          </p>
          <p>
            <Link href="/forgot-password" className="underline hover:text-yellow-300">Forgot password?</Link>
          </p>
        </div>
      </div>
    </section>
  );
}