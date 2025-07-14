
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthday: '',
    tier: '',
  });

  const tiers = ['Galaxy', 'Elite', 'Cosmic'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-900 text-white flex flex-col">
      <section className="flex-grow flex items-center justify-center text-center p-4 md:p-8">
        <form className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-4 md:p-8 border border-purple-300 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-birthday-gold">
            🎂 Join Birthday Link
          </h1>
          <p className="text-purple-100 mb-6 text-base md:text-lg">
            Never celebrate alone again. Find your birthday crew.
          </p>

          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-200 focus:outline-none"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-200 focus:outline-none"
          />

          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-200 focus:outline-none"
          />

          <input
            name="birthday"
            type="date"
            value={formData.birthday}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-200 focus:outline-none"
          />

          <select
            name="tier"
            value={formData.tier}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-purple-200 focus:outline-none"
          >
            <option value="">Select Tier</option>
            {tiers.map((tier) => (
              <option key={tier} value={tier}>{tier}</option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-birthday-gold text-purple-900 font-bold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition"
          >
            Join Birthday Link
          </button>

          <p className="text-purple-200 text-sm mt-4">
            Already have an account? <Link href="/login" className="underline">Log in</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
