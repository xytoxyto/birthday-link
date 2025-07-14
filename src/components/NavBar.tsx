"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const desktopLinks = (
    <ul className="hidden md:flex items-center space-x-6 text-lg">
      <li>
        <Link href="/" className="hover:text-birthday-gold">Home</Link>
      </li>
      <li>
        <Link href="/signup" className="hover:text-birthday-gold">Signup</Link>
      </li>
      <li>
        <Link href="/dashboard" className="hover:text-birthday-gold">Dashboard</Link>
      </li>
      <li>
        <Link href="/events" className="hover:text-birthday-gold">Events</Link>
      </li>
      <li>
        <Link href="/events/create" className="hover:text-birthday-gold">Create Event</Link>
      </li>
      <li className="relative group">
        <span className="cursor-pointer hover:text-birthday-gold">Tiers ▾</span>
        <ul className="absolute left-0 hidden group-hover:block bg-gradient-to-br from-birthday-blue to-birthday-purple text-white mt-2 rounded shadow-lg whitespace-nowrap">
          <li>
            <Link href="/tiers/galaxy" className="block px-4 py-2 hover:text-birthday-gold">Galaxy</Link>
          </li>
          <li>
            <Link href="/tiers/elite" className="block px-4 py-2 hover:text-birthday-gold">Elite</Link>
          </li>
          <li>
            <Link href="/tiers/cosmic" className="block px-4 py-2 hover:text-birthday-gold">Cosmic</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/profile" className="hover:text-birthday-gold">Profile</Link>
      </li>
      <li>
        <Link href="/admin" className="hover:text-birthday-gold">Admin</Link>
      </li>
      <li>
        <Link href="/legal" className="hover:text-birthday-gold">Legal</Link>
      </li>
    </ul>
  );

  const mobileLinks = (
    <ul className="md:hidden flex flex-col space-y-2 p-4 bg-gradient-to-b from-birthday-blue via-birthday-purple to-black text-lg">
      <li>
        <Link href="/" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/signup" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Signup
        </Link>
      </li>
      <li>
        <Link href="/dashboard" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link href="/events" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Events
        </Link>
      </li>
      <li>
        <Link href="/events/create" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Create Event
        </Link>
      </li>
      <li className="pl-2 font-semibold text-birthday-gold">Tiers</li>
      <li className="ml-4">
        <Link href="/tiers/galaxy" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Galaxy
        </Link>
      </li>
      <li className="ml-4">
        <Link href="/tiers/elite" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Elite
        </Link>
      </li>
      <li className="ml-4">
        <Link href="/tiers/cosmic" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Cosmic
        </Link>
      </li>
      <li>
        <Link href="/profile" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Profile
        </Link>
      </li>
      <li>
        <Link href="/admin" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Admin
        </Link>
      </li>
      <li>
        <Link href="/legal" className="block hover:text-birthday-gold" onClick={() => setOpen(false)}>
          Legal
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="relative z-50 bg-gradient-to-r from-birthday-blue via-birthday-purple to-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold whitespace-nowrap">
          🎂 Birthday Link
        </Link>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        {desktopLinks}
      </div>
      {open && mobileLinks}
    </header>
  );
}

