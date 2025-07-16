"use client";

import { useState } from "react";
import Link from "next/link";

import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

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
    <>
      <header className="bg-brand-gradient text-foreground shadow-lg brand-glow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 backdrop-blur bg-white/10 rounded-b-xl border-b border-primary/20">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="inline-flex items-center animate-bounce-slow">
              <Image src="/vercel.svg" alt="Birthday Link Logo" width={36} height={36} className="drop-shadow-lg mr-2" />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight drop-shadow group-hover:scale-105 transition-transform">
                Birthday Link
              </span>
            </span>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav>
              <ul className="flex space-x-6">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-white hover:text-accent hover:scale-105 transition-transform duration-200 font-semibold px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/60"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="relative">
                  <button
                    onClick={() => setDesktopTiersOpen(!desktopTiersOpen)}
                    className="text-white hover:text-accent transition flex items-center font-semibold px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/60"
                    onBlur={() => setTimeout(() => setDesktopTiersOpen(false), 100)}
                  >
                    Tiers {desktopTiersOpen ? "▴" : "▾"}
                  </button>
                  {desktopTiersOpen && (
                    <ul className="absolute z-10 right-0 mt-2 w-48 bg-blue-900/95 rounded-lg shadow-xl overflow-hidden border border-primary/20">
                      {tierLinks.map((t) => (
                        <li key={t.href}>
                          <Link
                            href={t.href}
                            className="block px-4 py-2 text-white hover:bg-accent/20 hover:text-accent transition font-semibold"
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
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-accent/60 text-3xl px-2 py-1 rounded-lg bg-white/10 hover:bg-accent/10 transition"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "✖️" : "☰"}
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-screen" : "max-h-0"}`}
        >
          <ul className="bg-blue-900/95 backdrop-blur-md rounded-xl shadow-2xl p-4 space-y-2 list-none border border-primary/20">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-lg text-white no-underline hover:bg-accent/20 hover:text-accent transition font-semibold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 font-semibold">
              <button
                onClick={() => setTiersOpen(!tiersOpen)}
                className="flex items-center w-full text-left px-4 py-2 rounded-lg text-white no-underline hover:bg-accent/20 hover:text-accent transition"
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
                        className="block px-4 py-2 rounded-lg text-white no-underline hover:bg-accent/20 hover:text-accent transition font-semibold"
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

      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite;
        }
      `}</style>
    </>
  );
}