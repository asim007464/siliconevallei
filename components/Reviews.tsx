import Link from "next/link";
import { RevealItem } from "@/components/RevealItem";
import { SectionHeading } from "@/components/SectionHeading";
import { reviewSummary, reviews } from "@/lib/content";
import { site } from "@/lib/site";

function Stars({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="h-5 w-5 text-amber-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0];
    const b = parts[parts.length - 1][0];
    return `${a}${b}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export function Reviews() {
  return (
    <section
      id="reviews"
      className="border-b border-stone-200 bg-stone-100 px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionHeading
              tone="light"
              eyebrow="Reviews"
              title="Wat klanten zeggen"
              lead="Voorbeeldreviews — koppel later aan Google of echte quotes."
            />
          </div>
          <div className="flex flex-col gap-1 rounded-xl border border-stone-200 bg-white px-5 py-4 shadow-sm lg:items-end">
            <Stars />
            <p className="text-sm font-medium text-stone-700">
              {reviewSummary.rating} uit 5 · {reviewSummary.countLabel}
            </p>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 lg:grid-cols-2">
          {reviews.map((r, i) => (
            <li key={r.name}>
              <RevealItem index={i} stagger={90}>
                <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-md">
                  <div className="flex gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-900 ring-2 ring-teal-200/80"
                      aria-hidden
                    >
                      {initials(r.name)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-stone-900">{r.name}</h3>
                      <p className="mt-0.5 text-xs text-stone-500">{r.meta}</p>
                      <p className="mt-1 text-xs text-stone-500">{r.time}</p>
                    </div>
                    <Stars className="hidden shrink-0 gap-0.5 sm:flex" />
                  </div>
                  <Stars className="mt-4 flex gap-0.5 sm:hidden" />
                  <p className="mt-4 text-sm leading-relaxed text-stone-700">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  {"reply" in r && r.reply ? (
                    <div className="mt-4 rounded-lg border border-stone-200 bg-stone-50 py-3 pl-4 pr-3">
                      <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-teal-800">
                        Reactie van de eigenaar
                      </p>
                      <p className="mt-1.5 text-sm text-stone-700">
                        &ldquo;{r.reply}&rdquo;
                      </p>
                    </div>
                  ) : null}
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center text-sm text-stone-600">
          Meer foto&apos;s en updates:{" "}
          <Link
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline decoration-teal-400/60 underline-offset-[3px] hover:text-teal-900"
          >
            {site.instagramHandle}
          </Link>
        </p>
      </div>
    </section>
  );
}
