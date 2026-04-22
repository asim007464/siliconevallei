import Link from "next/link";

const styles: { name: string; classes: string; inner?: string; sub?: string }[] = [
  {
    name: "1 — Clean Uppercase",
    classes: "text-4xl font-bold uppercase tracking-[0.25em] text-stone-50",
  },
  {
    name: "2 — Minimal Light",
    classes: "text-4xl font-light tracking-[0.15em] uppercase text-stone-200",
  },
  {
    name: "3 — Bold Serif Feel",
    classes: "text-5xl font-black tracking-tight text-stone-50",
    inner: "italic",
  },
  {
    name: "4 — Two-tone Split",
    classes: "text-4xl font-bold uppercase tracking-widest",
    sub: "split",
  },
  {
    name: "5 — Teal Accent Bar",
    classes: "text-3xl font-semibold uppercase tracking-[0.2em] text-stone-50",
    sub: "bar",
  },
  {
    name: "6 — Monospace Tech",
    classes: "font-mono text-3xl font-medium uppercase tracking-[0.3em] text-teal-400",
  },
  {
    name: "7 — Stacked Layout",
    classes: "text-center",
    sub: "stacked",
  },
  {
    name: "8 — Outlined Text",
    classes: "text-5xl font-black uppercase tracking-wider",
    sub: "outline",
  },
  {
    name: "9 — Condensed Bold",
    classes: "text-5xl font-black uppercase tracking-[0.05em] text-stone-50 leading-none",
  },
  {
    name: "10 — Elegant Thin",
    classes: "text-5xl font-extralight tracking-[0.18em] text-stone-100",
  },
  {
    name: "11 — Badge Style",
    classes: "",
    sub: "badge",
  },
  {
    name: "12 — Gradient Text",
    classes: "text-5xl font-bold uppercase tracking-wider bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500 bg-clip-text text-transparent",
  },
  {
    name: "13 — Dot Separator",
    classes: "text-3xl font-semibold uppercase tracking-widest text-stone-50",
    sub: "dots",
  },
  {
    name: "14 — Underline Accent",
    classes: "text-4xl font-bold uppercase tracking-[0.15em] text-stone-50",
    sub: "underline",
  },
  {
    name: "15 — Compact Sans",
    classes: "text-2xl font-black uppercase tracking-[0.4em] text-stone-50",
  },
  {
    name: "16 — Vertical Line",
    classes: "",
    sub: "vertical",
  },
  {
    name: "17 — Circle Emblem",
    classes: "",
    sub: "circle",
  },
  {
    name: "18 — Slash Divider",
    classes: "text-4xl font-semibold text-stone-50",
    sub: "slash",
  },
  {
    name: "19 — Lowercase Modern",
    classes: "text-4xl font-medium tracking-[0.12em] text-stone-200 lowercase",
  },
  {
    name: "20 — Block Letters",
    classes: "",
    sub: "block",
  },
];

function LogoRender({ style }: { style: (typeof styles)[number] }) {
  if (style.sub === "split") {
    return (
      <div className={style.classes}>
        <span className="text-teal-400">Silicone</span>
        <span className="text-stone-50"> Vallei</span>
      </div>
    );
  }

  if (style.sub === "bar") {
    return (
      <div className="flex items-center gap-4">
        <div className="h-10 w-1 rounded-full bg-teal-500" />
        <span className={style.classes}>Silicone Vallei</span>
      </div>
    );
  }

  if (style.sub === "stacked") {
    return (
      <div className={style.classes}>
        <p className="text-4xl font-bold uppercase tracking-[0.3em] text-stone-50">Silicone</p>
        <p className="text-lg font-light uppercase tracking-[0.6em] text-teal-400">Vallei</p>
      </div>
    );
  }

  if (style.sub === "outline") {
    return (
      <span
        className={style.classes}
        style={{
          WebkitTextStroke: "1.5px #d6d3d1",
          color: "transparent",
        }}
      >
        Silicone Vallei
      </span>
    );
  }

  if (style.sub === "badge") {
    return (
      <div className="inline-flex flex-col items-center rounded-lg border-2 border-teal-500 px-8 py-4">
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.5em] text-teal-400">
          Est. 2024
        </span>
        <span className="mt-1 text-3xl font-bold uppercase tracking-[0.15em] text-stone-50">
          Silicone Vallei
        </span>
        <span className="mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.35em] text-stone-400">
          Kitspecialist
        </span>
      </div>
    );
  }

  if (style.sub === "dots") {
    return (
      <div className={style.classes}>
        <span>Silicone</span>
        <span className="mx-3 inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
        <span>Vallei</span>
      </div>
    );
  }

  if (style.sub === "underline") {
    return (
      <div className="inline-flex flex-col">
        <span className={style.classes}>Silicone Vallei</span>
        <div className="mt-2 h-0.5 w-full bg-linear-to-r from-teal-500 via-teal-400 to-transparent" />
      </div>
    );
  }

  if (style.sub === "vertical") {
    return (
      <div className="flex items-center gap-5">
        <span className="text-3xl font-bold uppercase tracking-[0.2em] text-stone-50">
          Silicone
        </span>
        <div className="h-10 w-px bg-stone-500" />
        <span className="text-3xl font-light uppercase tracking-[0.2em] text-teal-400">
          Vallei
        </span>
      </div>
    );
  }

  if (style.sub === "circle") {
    return (
      <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-stone-600">
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-teal-400">
          Silicone
        </span>
        <span className="text-lg font-bold uppercase tracking-[0.2em] text-stone-50">
          SV
        </span>
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-teal-400">
          Vallei
        </span>
      </div>
    );
  }

  if (style.sub === "slash") {
    return (
      <div className={style.classes}>
        <span className="font-bold">Silicone</span>
        <span className="mx-2 text-teal-500">/</span>
        <span className="font-light">Vallei</span>
      </div>
    );
  }

  if (style.sub === "block") {
    return (
      <div className="inline-flex gap-1">
        {"SILICONEVALLEI".split("").map((char, i) => (
          <span
            key={i}
            className={`flex h-10 w-8 items-center justify-center text-sm font-bold ${
              i < 8
                ? "bg-teal-600 text-white"
                : "bg-stone-700 text-teal-300"
            }`}
          >
            {char}
          </span>
        ))}
      </div>
    );
  }

  return (
    <span className={style.classes}>
      {style.inner ? (
        <em className={style.inner}>Silicone Vallei</em>
      ) : (
        "Silicone Vallei"
      )}
    </span>
  );
}

export default function StijlenPage() {
  return (
    <div className="min-h-screen bg-stone-950 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm text-teal-400 underline underline-offset-4 hover:text-teal-300"
        >
          &larr; Terug naar de website
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-stone-50">
          Logo stijlen — Silicone Vallei
        </h1>
        <p className="mt-2 text-base text-stone-400">
          20 verschillende typografische stijlen. Kies uw favoriet en laat het
          weten.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {styles.map((style, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center rounded-2xl border border-stone-800 bg-stone-900/60 px-6 py-10 transition hover:border-stone-700 hover:bg-stone-900"
            >
              <div className="flex min-h-20 items-center justify-center">
                <LogoRender style={style} />
              </div>
              <p className="mt-6 text-xs font-medium text-stone-500 transition group-hover:text-stone-400">
                {style.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
