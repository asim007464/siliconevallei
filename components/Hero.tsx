import Link from "next/link";
import { hero } from "@/lib/content";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-stone-800 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(13,148,136,0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <p
          className="hero-animate text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-teal-400"
          style={{ animationDelay: "0ms" }}
        >
          {site.tagline}
        </p>
        <p
          className="hero-animate mt-4 text-sm text-stone-400"
          style={{ animationDelay: "70ms" }}
        >
          {hero.eyebrow}
        </p>
        <h1
          className="hero-animate mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-stone-50 sm:text-5xl sm:leading-[1.1]"
          style={{ animationDelay: "140ms" }}
        >
          {hero.title}
        </h1>
        <p
          className="hero-animate mt-6 max-w-2xl text-lg leading-relaxed text-stone-300"
          style={{ animationDelay: "220ms" }}
        >
          {hero.lead}
        </p>
        <div
          className="hero-animate mt-10 flex flex-wrap gap-3"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 transition duration-300 hover:bg-[#20bd5a] hover:brightness-105 active:scale-[0.98]"
          >
            Vraag een offerte aan
          </Link>
          <Link
            href={`mailto:${site.email}?subject=Offerte%20aanvraag`}
            className="inline-flex items-center justify-center rounded-lg border border-stone-600 bg-stone-800/60 px-6 py-3 text-sm font-medium text-stone-100 transition duration-300 hover:border-teal-600/50 hover:bg-stone-800 active:scale-[0.98]"
          >
            Stuur een e-mail
          </Link>
        </div>
        <dl className="mt-16 grid gap-4 sm:grid-cols-3">
          {hero.stats.map((s, i) => (
            <div
              key={s.label}
              className="hero-animate rounded-xl border border-stone-700/80 bg-stone-800/40 px-5 py-5 ring-1 ring-stone-700/50 transition duration-300 hover:border-teal-700/40 hover:ring-teal-900/30"
              style={{ animationDelay: `${420 + i * 90}ms` }}
            >
              <dt className="text-[0.6875rem] uppercase tracking-wider text-stone-500">
                {s.label}
              </dt>
              <dd className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-2xl font-semibold tabular-nums text-stone-50">
                  {s.value}
                </span>
                <span className="text-sm text-stone-500">{s.suffix}</span>
              </dd>
              {s.hint ? (
                <p className="mt-1.5 text-xs text-stone-600">{s.hint}</p>
              ) : null}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
