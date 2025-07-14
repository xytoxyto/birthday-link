"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/signup", label: "Signup" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/events", label: "Events" },
    { href: "/events/create", label: "Create Event" },
    { href: "/profile", label: "Profile" },
    { href: "/admin", label: "Admin" },
    { href: "/legal", label: "Legal" },
  ];

  const tierLinks = [
    { href: "/tiers/galaxy", label: "Galaxy" },
    { href: "/tiers/elite", label: "Elite" },
    { href: "/tiers/cosmic", label: "Cosmic" },
  ];

  const linkClass =
    "whitespace-nowrap hover:underline hover:decoration-[#FFD700] hover:text-[#FFD700]";

  return (
    <header className="relative z-50 bg-gradient-to-r from-[#0a0a5b] to-[#4b0082] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="text-lg md:text-xl font-bold">
          🎂 Birthday Link
        </Link>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className="hidden md:flex items-center space-x-6 text-sm md:text-base lg:text-lg">
          {links.slice(0, 5).map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
          <li className="relative group">
            <span className="cursor-pointer">Tiers ▾</span>
            <ul className="absolute left-0 hidden group-hover:block bg-[#0a0a5b] text-white mt-2 rounded shadow-lg">
              {tierLinks.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="block px-4 py-2 hover:text-[#FFD700]">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {links.slice(5).map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
        <div className="absolute right-0 top-0 h-full w-2/3 sm:w-1/2 bg-[#0a0a5b] p-6 space-y-4 text-[#FFD700]">
          <ul className="flex flex-col text-lg">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-1">
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="font-semibold pt-2">Tiers</li>
            {tierLinks.map((t) => (
              <li key={t.href} className="ml-2">
                <Link href={t.href} onClick={() => setOpen(false)} className="block py-1">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

