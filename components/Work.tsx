import Link from "next/link";
import { RevealItem } from "@/components/RevealItem";
import { SectionHeading } from "@/components/SectionHeading";
import { ImageCarousel } from "@/components/ImageCarousel";
import { portfolio } from "@/lib/content";
import { site } from "@/lib/site";

export function Work() {
  return (
    <section
      id="werk"
      className="border-b border-stone-200 bg-white px-4 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tone="light"
          eyebrow="Werk"
          title="Recente projecten"
          lead={
            <>
              Eigen projectfoto&apos;s en actueel werk. Meer foto&apos;s staan
              op{" "}
              <Link
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-700 underline decoration-teal-400/50 underline-offset-[3px] transition hover:text-teal-800"
              >
                Instagram
              </Link>
              .
            </>
          }
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <li key={item.title}>
              <RevealItem index={i} stagger={80}>
                <div className="group flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-stone-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md">
                  <div className="relative">
                    <ImageCarousel images={item.images} alt={item.title} />
                    <div className="pointer-events-none absolute left-3 top-3 z-20">
                      <span className="rounded-lg border border-white/80 bg-white/95 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-teal-800 shadow-sm backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-stone-100 bg-white p-5">
                    <h3 className="text-lg font-semibold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                      {item.text}
                    </p>
                    {item.images.length > 1 && (
                      <p className="mt-3 text-xs text-stone-400">
                        {item.images.length} foto&apos;s — swipe of gebruik de pijltjes
                      </p>
                    )}
                  </div>
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
