'use client';

import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <header className="relative z-50 bg-gradient-to-r from-birthday-blue to-birthday-purple text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          {/* Brand Logo / Name */}
          <h1 className="text-xl font-bold">
            <Link href="/">🎂 Birthday Link</Link>
          </h1>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/signup" className="hover:text-birthday-gold">Sign Up</Link>
            <Link href="/dashboard" className="hover:text-birthday-gold">Dashboard</Link>
            <Link href="/events" className="hover:text-birthday-gold">Events</Link>
            <Link href="/profile" className="hover:text-birthday-gold">Profile</Link>
            <Link href="/admin" className="hover:text-birthday-gold">Admin</Link>
            <Link href="/legal" className="hover:text-birthday-gold">Legal</Link>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-gradient-to-r from-birthday-purple to-birthday-blue text-white flex justify-around items-center py-2 z-50 shadow-inner">
        <Link href="/" className="flex flex-col items-center text-xs">
          <span>🏠</span>
          Home
        </Link>
        <Link href="/events" className="flex flex-col items-center text-xs">
          <span>🎉</span>
          Events
        </Link>
        <Link href="/events/create" className="flex flex-col items-center text-xs">
          <span>➕</span>
          Create
        </Link>
        <Link href="/dashboard" className="flex flex-col items-center text-xs">
          <span>📊</span>
          Dashboard
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-xs">
          <span>👤</span>
          Profile
        </Link>
      </nav>
    </>
  );
}
