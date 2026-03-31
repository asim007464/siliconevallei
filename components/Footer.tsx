import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold text-stone-50">{site.name}</p>
          <p className="mt-1 text-sm text-stone-500">
            {site.owner} · {site.role}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm sm:gap-8">
          <Link
            href={`mailto:${site.email}`}
            className="min-h-11 touch-manipulation px-2 py-2.5 text-stone-400 transition hover:text-teal-400"
          >
            E-mail
          </Link>
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 touch-manipulation px-2 py-2.5 text-stone-400 transition hover:text-teal-400"
          >
            Instagram
          </Link>
          <Link
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 touch-manipulation px-2 py-2.5 text-stone-400 transition hover:text-[#25D366]"
          >
            WhatsApp
          </Link>
        </div>
        <p className="text-xs text-stone-600">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
