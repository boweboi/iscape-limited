"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import Logo from "./logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/services" },
  { label: "Estimate Tool", href: "/estimators" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <Link href="/" className="transition hover:opacity-80">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-slate-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-200/40 transition hover:bg-slate-600 md:inline-flex"
            >
              Get a quote
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600 transition hover:border-slate-500 hover:text-slate-950 md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span className="text-lg">☰</span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-slate-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-600"
                onClick={() => setMenuOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-10 md:px-8">{children}</main>

      <footer className="border-t border-slate-200 bg-white py-10 text-slate-500">
        <div className="mx-auto max-w-7xl space-y-4 px-6 text-center md:px-8">
          <p className="text-sm">&copy; {new Date().getFullYear()} Iscape Limited</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:iscapework@gmail.com"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm transition hover:border-slate-300 hover:text-slate-950"
            >
              Email: iscapework@gmail.com
            </a>
            <a
              href="tel:0211095981"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm transition hover:border-slate-300 hover:text-slate-950"
            >
              Phone: 021 1095 981
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
