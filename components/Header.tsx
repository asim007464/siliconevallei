"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#over", label: "Over" },
  { href: "#diensten", label: "Diensten" },
  { href: "#werk", label: "Werk" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/95 pt-[env(safe-area-inset-top,0px)] backdrop-blur-md supports-backdrop-filter:bg-stone-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 md:py-5">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="min-w-0 shrink touch-manipulation py-2 font-bold uppercase tracking-[0.12em] text-stone-50 transition hover:text-teal-400 sm:tracking-[0.14em]"
        >
          <span className="block text-[clamp(1rem,4.5vw,1.5rem)] leading-tight sm:text-2xl md:text-3xl">
            {site.name}
          </span>
        </a>
        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Hoofdmenu">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-stone-400 transition-all duration-300 hover:bg-stone-800 hover:text-stone-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-manipulation rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#20bd5a] active:scale-[0.98] sm:px-4 sm:text-sm sm:py-2.5"
          >
            WhatsApp
          </Link>
          <button
            type="button"
            className="touch-manipulation flex h-11 w-11 items-center justify-center rounded-lg border border-stone-700 bg-stone-900 text-stone-200 transition hover:border-teal-600/50 hover:text-teal-300 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden
            tabIndex={-1}
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-menu"
            className="relative z-50 border-t border-stone-800 bg-stone-950 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-2 sm:px-6 md:hidden"
            aria-label="Mobiel menu"
          >
            <ul className="flex flex-col gap-1 pb-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-lg px-4 py-3.5 text-base font-medium text-stone-200 transition hover:bg-stone-800 hover:text-white active:bg-stone-800"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      ) : null}
    </header>
  );
}
