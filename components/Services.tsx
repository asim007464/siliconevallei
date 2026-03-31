import { RevealItem } from "@/components/RevealItem";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="diensten"
      className="border-b border-stone-800 bg-gradient-to-b from-stone-900 to-stone-950 px-4 py-14 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Diensten"
          title="Professionele kit-oplossingen"
          lead="Van kleine reparaties tot complete afwerking na verbouwing — elke klus krijgt dezelfde aandacht voor detail en duurzaamheid."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title}>
              <RevealItem index={i} stagger={70}>
                <div className="flex h-full min-w-0 flex-col rounded-xl border border-stone-700/80 border-l-4 border-l-teal-600 bg-stone-800/30 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-stone-600 hover:bg-stone-800/50 sm:p-6">
                  <span className="font-mono text-xs text-teal-500/90">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-stone-50">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-400">
                    {s.text}
                  </p>
                </div>
              </RevealItem>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
