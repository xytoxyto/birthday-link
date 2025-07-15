"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [tiersOpen, setTiersOpen] = useState(false);

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

  return (
    <header className="bg-gradient-to-r from-[#0a0a5b] to-[#1e90ff] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link
          href="/"
          className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent"
        >
          🎂 Birthday Link
        </Link>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
        <ul className="hidden md:flex items-center space-x-6 text-sm md:text-base lg:text-lg list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-blue-300">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="relative group">
            <span className="cursor-pointer select-none">Tiers ▾</span>
            <ul className="absolute left-0 hidden group-hover:block bg-[#0a0a5b] mt-2 rounded shadow-lg list-none whitespace-nowrap text-sm">
              {tierLinks.map((t) => (
                <li key={t.href}>
                  <Link href={t.href} className="block px-4 py-2 hover:bg-blue-700">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="flex flex-col space-y-2 p-4 bg-blue-900 rounded-lg shadow-lg list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-white visited:text-white no-underline hover:bg-blue-700 rounded px-4"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 font-semibold">
            <button
              onClick={() => setTiersOpen(!tiersOpen)}
              className="appearance-none flex items-center w-full text-left py-2 bg-blue-900 text-white no-underline hover:bg-blue-700 rounded px-4"
            >
              Tiers <span className="ml-1">{tiersOpen ? "▴" : "▾"}</span>
            </button>
            {tiersOpen && (
              <ul className="pl-4 list-none space-y-1 mt-1">
                {tierLinks.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 text-white visited:text-white no-underline hover:bg-blue-700 rounded px-4"
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}