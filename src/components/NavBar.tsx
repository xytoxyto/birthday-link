'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 bg-gradient-to-r from-birthday-blue to-birthday-purple text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Brand Logo / Name */}
        <h1 className="text-xl font-bold">
          <Link href="/">🎂 Birthday Link</Link>
        </h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none transition-transform duration-300"
          aria-label="Toggle Navigation"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <nav
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            md:flex flex-col md:flex-row md:items-center
            absolute md:static top-16 md:top-auto left-0 w-full md:w-auto
            bg-gradient-to-r from-birthday-blue to-birthday-purple md:bg-transparent
            text-white
            space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0 z-50 shadow md:shadow-none rounded md:rounded-none transition-all duration-300
          `}
        >
          <Link href="/signup" className="hover:underline">Sign Up</Link>
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
          <Link href="/events" className="hover:underline">Events</Link>
          <Link href="/events/123" className="hover:underline">Event Detail</Link>
          <Link href="/events/create" className="hover:underline">Create Event</Link>
          <Link href="/profile" className="hover:underline">Profile</Link>
          <Link href="/admin" className="hover:underline">Admin</Link>
          <Link href="/legal" className="hover:underline">Legal</Link>
        </nav>
      </div>
    </header>
  );
}
