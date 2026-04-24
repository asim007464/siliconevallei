"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RevealItem } from "@/components/RevealItem";
import { SectionHeading } from "@/components/SectionHeading";
import { reviewSummary, reviews } from "@/lib/content";

function Star({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-4 w-4 text-amber-400"}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function Stars({ size = "sm" }: { size?: "sm" | "lg" }) {
  const cls =
    size === "lg" ? "h-5 w-5 text-amber-400" : "h-4 w-4 text-amber-400";
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={cls} />
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
    </svg>
  );
}

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="reviews"
      className="border-b border-stone-800 bg-stone-950 px-4 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <RevealItem index={0} stagger={0}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Reviews"
              title="Wat klanten zeggen"
              lead="Beoordelingen van klanten over onze kitwerkzaamheden."
            />

            {/* Summary badge */}
            <div className="flex shrink-0 items-center gap-3 rounded-xl border border-stone-700/60 bg-stone-900/80 px-5 py-4 ring-1 ring-stone-700/40">
              <GoogleIcon className="h-7 w-7 shrink-0" />
              <div className="flex min-w-0 flex-col gap-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold tabular-nums leading-none text-stone-50">
                    {reviewSummary.rating}
                  </span>
                  <span className="text-xs text-stone-500">/ 5</span>
                </div>
                <Stars size="sm" />
                <p className="text-xs leading-tight text-stone-500">
                  {reviewSummary.countLabel}
                </p>
              </div>
            </div>
          </div>
        </RevealItem>

        {/* Carousel */}
        <div className="relative mt-10">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="-ml-4 flex">
              {reviews.map((r, i) => (
                <div
                  key={`${i}-${r.name}`}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%]"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-stone-700/50 bg-stone-900/60 p-6 backdrop-blur-sm transition duration-300 hover:border-stone-600/70 sm:p-7">
                    <QuoteIcon className="mb-4 h-8 w-8 text-teal-700/40" />

                    <p className="flex-1 text-[0.9375rem] leading-relaxed text-stone-300">
                      &ldquo;{r.text}&rdquo;
                    </p>

                    {"reply" in r && r.reply ? (
                      <div className="mt-5 rounded-lg border border-teal-800/25 bg-teal-950/25 px-4 py-3">
                        <p className="text-[0.625rem] font-semibold uppercase tracking-widest text-teal-500">
                          Reactie van de eigenaar
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-stone-400">
                          &ldquo;{r.reply}&rdquo;
                        </p>
                      </div>
                    ) : null}

                    <div className="mt-5 flex items-center gap-3 border-t border-stone-800/60 pt-5">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-900/40 text-xs font-bold text-teal-300 ring-1 ring-teal-700/40"
                        aria-hidden
                      >
                        {initials(r.name)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-stone-100">
                          {r.name}
                        </p>
                        <p className="text-xs text-stone-500">
                          {r.meta} · {r.time}
                        </p>
                      </div>
                      <Stars />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone-700 bg-stone-900/90 text-stone-300 shadow-lg backdrop-blur-sm transition hover:border-teal-700 hover:text-teal-300 lg:flex"
            aria-label="Vorige review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-stone-700 bg-stone-900/90 text-stone-300 shadow-lg backdrop-blur-sm transition hover:border-teal-700 hover:text-teal-300 lg:flex"
            aria-label="Volgende review"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {reviews.map((r, i) => (
            <button
              key={`dot-${i}-${r.name}`}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selected
                  ? "w-6 bg-teal-500"
                  : "w-2 bg-stone-700 hover:bg-stone-600"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>

        {/* Full list: all reviews (same data as slider) */}
        <div className="mt-16 border-t border-stone-800/80 pt-12">
          <h3 className="text-lg font-semibold text-stone-100 sm:text-xl">
            Alle {reviews.length} beoordelingen
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-stone-500">
            Hieronder staan dezelfde beoordelingen als in de carrousel, in één overzicht.
          </p>
          <ul className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5">
            {reviews.map((r, i) => (
              <li
                key={`all-${i}-${r.name}`}
                className="flex flex-col rounded-2xl border border-stone-800/80 bg-stone-900/40 p-5 sm:p-6"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-900/40 text-xs font-bold text-teal-300 ring-1 ring-teal-800/50"
                      aria-hidden
                    >
                      {initials(r.name)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-stone-100">
                        {r.name}
                      </p>
                      <p className="text-xs text-stone-500">
                        {r.meta} · {r.time}
                      </p>
                    </div>
                  </div>
                  <Stars />
                </div>
                <p className="text-sm leading-relaxed text-stone-300">
                  &ldquo;{r.text}&rdquo;
                </p>
                {"reply" in r && r.reply ? (
                  <div className="mt-4 rounded-lg border border-teal-800/20 bg-teal-950/20 px-3 py-2.5">
                    <p className="text-[0.625rem] font-semibold uppercase tracking-widest text-teal-500/90">
                      Reactie van de eigenaar
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-stone-400">
                      &ldquo;{r.reply}&rdquo;
                    </p>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
