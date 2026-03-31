import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, lead, tone = "dark" }: Props) {
  const isLight = tone === "light";
  return (
    <div>
      <p
        className={
          isLight
            ? "text-[0.8125rem] font-semibold uppercase tracking-[0.2em] text-teal-800"
            : "text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-teal-400"
        }
      >
        {eyebrow}
      </p>
      <div
        className={
          isLight
            ? "mt-3 h-px w-10 bg-teal-600/70"
            : "mt-3 h-px w-10 bg-teal-500/50"
        }
        aria-hidden
      />
      <h2
        className={
          isLight
            ? "mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-[2rem] sm:leading-tight"
            : "mt-5 max-w-2xl text-3xl font-semibold tracking-tight text-stone-50 sm:text-[2rem] sm:leading-tight"
        }
      >
        {title}
      </h2>
      {lead != null && lead !== "" ? (
        <p
          className={
            isLight
              ? "mt-4 max-w-3xl text-lg leading-relaxed text-stone-600"
              : "mt-4 max-w-3xl text-lg leading-relaxed text-stone-300"
          }
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
