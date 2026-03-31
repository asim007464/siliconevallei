import Link from "next/link";
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
  return (
    <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <a
          href="#home"
          className="min-w-0 shrink py-1 font-bold uppercase tracking-[0.14em] text-stone-50 transition hover:text-teal-400"
        >
          <span className="block text-lg leading-tight sm:text-2xl md:text-3xl">
            {site.name}
          </span>
        </a>
        <nav className="hidden items-center gap-0.5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-400 transition-all duration-300 hover:bg-stone-800 hover:text-stone-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#20bd5a] active:scale-[0.98]"
        >
          WhatsApp
        </Link>
      </div>
      <nav
        className="flex gap-1.5 overflow-x-auto border-t border-stone-800 bg-stone-950/90 px-4 py-2.5 md:hidden"
        aria-label="Secties"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full border border-stone-700 bg-stone-900 px-3 py-1.5 text-xs font-medium text-stone-300 transition hover:border-teal-700/50 hover:text-teal-300"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
