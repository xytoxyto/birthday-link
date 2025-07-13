'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-birthday-blue to-birthday-purple text-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          <Link href="/">🎂 Birthday Link</Link>
        </h1>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <nav className={`flex-col md:flex-row md:flex ${open ? 'flex' : 'hidden'} md:space-x-4 space-y-2 md:space-y-0 bg-white md:bg-transparent text-gray-900 md:text-white p-4 md:p-0 rounded md:rounded-none`}>
          <Link href="/signup">Sign Up</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/events">Events</Link>
          <Link href="/events/123">Event Detail</Link>
          <Link href="/events/create">Create Event</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/admin">Admin</Link>
          <Link href="/legal">Legal</Link>
        </nav>
      </div>
    </header>
  );
}
