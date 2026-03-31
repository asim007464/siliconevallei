import { about } from "@/lib/content";
import { site } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function IconColor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx={13.5} cy={6.5} r={2.5} strokeWidth={2} />
      <circle cx={17.5} cy={12.5} r={2.5} strokeWidth={2} />
      <circle cx={8.5} cy={8.5} r={2.5} strokeWidth={2} />
      <circle cx={6.5} cy={14.5} r={2.5} strokeWidth={2} />
      <circle cx={12} cy={17} r={2.5} strokeWidth={2} />
    </svg>
  );
}

function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx={12} cy={12} r={9} strokeWidth={2} />
      <path strokeWidth={2} strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function IconShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const highlights = [
  {
    icon: IconColor,
    title: "Kleur & advies",
    text: "RAL-matching, kleuradvies en de juiste kit voor elk materiaal.",
  },
  {
    icon: IconCheck,
    title: "Strak resultaat",
    text: "Nette voegen, gladde lijnen en een afwerking die jaren meegaat.",
  },
  {
    icon: IconClock,
    title: "Flexibel & snel",
    text: "WhatsApp-reactie binnen uren. Avond of weekend? In overleg mogelijk.",
  },
  {
    icon: IconShield,
    title: "Geen verrassingen",
    text: "Heldere afspraken vooraf over prijs, materialen en planning.",
  },
];

export function About() {
  return (
    <section
      id="over"
      className="border-b border-stone-200 bg-stone-50 px-4 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          tone="light"
          eyebrow={`Over ${site.name}`}
          title={about.introTitle}
          lead={about.introLead}
        />

        {/* Highlight cards instead of long paragraphs */}
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li
              key={h.title}
              className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition duration-300 hover:border-teal-200 hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <h.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 text-[0.9375rem] font-semibold text-stone-900">
                {h.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                {h.text}
              </p>
            </li>
          ))}
        </ul>

        {/* Stats row */}
        <dl className="mt-12 grid gap-4 sm:grid-cols-3">
          {about.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-stone-200 bg-white px-5 py-5 text-center shadow-sm sm:text-left"
            >
              <dt className="text-[0.6875rem] uppercase tracking-wider text-teal-800">
                {s.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold tabular-nums text-stone-900">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
