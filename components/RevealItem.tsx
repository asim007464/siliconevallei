"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  index: number;
  /** Base delay between items (ms). */
  stagger?: number;
};

/** Staggered fade-up for grid items (cards, list rows). */
export function RevealItem({
  children,
  className = "",
  index,
  stagger = 75,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -5% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = index * stagger;

  return (
    <div
      ref={ref}
      className={`transition-all duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:duration-0 motion-reduce:[transition-delay:0ms] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } motion-reduce:translate-y-0 motion-reduce:opacity-100 ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
