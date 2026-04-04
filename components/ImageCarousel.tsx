"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export function ImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);
  const total = images.length;

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

  if (total === 1) {
    return (
      <div className="relative aspect-4/3 overflow-hidden bg-stone-200">
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          quality={85}
        />
      </div>
    );
  }

  return (
    <div className="group/carousel relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {images.map((src, i) => (
            <div key={src} className="relative aspect-4/3 min-w-0 flex-[0_0_100%]">
              <Image
                src={src}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                quality={85}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover/carousel:opacity-100"
        aria-label="Vorige"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/70 group-hover/carousel:opacity-100"
        aria-label="Volgende"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === selected
                ? "w-4 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute right-2 top-2 z-10 rounded-md bg-black/50 px-2 py-0.5 text-xs font-medium text-white backdrop-blur-sm">
        {selected + 1}/{total}
      </div>
    </div>
  );
}
