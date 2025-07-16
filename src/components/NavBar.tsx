"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [tiersOpen, setTiersOpen] = useState(false);
  const [desktopTiersOpen, setDesktopTiersOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/signup", label: "Signup" },
    { href: "/dashboard", label: "Dashboard" },
    { href: "/events", label: "Events" },
    { href: "/events/create", label: "Create Event" },
    { href: "/profile", label: "Profile" },
    { href: "/admin", label: "Admin" },
    { href: "/legal", label: "Legal" },
    { href: "/contact", label: "Contact" }, // Added Contact link
  ];

  const tierLinks = [
    { href: "/tiers/galaxy", label: "Galaxy" },
    { href: "/tiers/elite", label: "Elite" },
    { href: "/tiers/cosmic", label: "Cosmic" },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
          Birthday Link
        </Link>
        
        {/* Desktop Navigation - Add this section */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex space-x-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white hover:text-yellow-300 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="relative">
                <button
                  onClick={() => setDesktopTiersOpen(!desktopTiersOpen)}
                  className="text-white hover:text-yellow-300 transition flex items-center"
                  onBlur={() => setTimeout(() => setDesktopTiersOpen(false), 100)}
                >
                  Tiers {desktopTiersOpen ? "▴" : "▾"}
                </button>
                {desktopTiersOpen && (
                  <ul className="absolute z-10 right-0 mt-2 w-48 bg-blue-900 rounded-lg shadow-lg overflow-hidden">
                    {tierLinks.map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          className="block px-4 py-2 text-white hover:bg-blue-800 transition"
                        >
                          {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          {open ? "✖️" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-screen" : "max-h-0"}`}
      >
        <ul className="bg-blue-900/90 backdrop-blur-md rounded-lg shadow-lg p-4 space-y-2 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 rounded text-white no-underline hover:bg-blue-800 transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 font-semibold">
            <button
              onClick={() => setTiersOpen(!tiersOpen)}
              className="flex items-center w-full text-left px-4 py-2 rounded text-white no-underline hover:bg-blue-800 transition"
            >
              Tiers {tiersOpen ? "▴" : "▾"}
            </button>
            {tiersOpen && (
              <ul className="pl-4 space-y-1 mt-1">
                {tierLinks.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 rounded text-white no-underline hover:bg-blue-800 transition"
                    >
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="pt-2 flex justify-center">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
}