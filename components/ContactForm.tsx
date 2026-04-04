"use client";

import { useActionState, useState } from "react";
import { workTypes } from "@/lib/content";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initial: ContactState = { success: false, message: "" };

const timingOptions = [
  { value: "asap", label: "Zo snel mogelijk" },
  { value: "2weeks", label: "Binnen 2 weken" },
  { value: "month", label: "Binnen een maand" },
  { value: "specific", label: "Specifieke datum" },
] as const;

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const [timing, setTiming] = useState("");

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700">
            Naam
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
            placeholder="Uw naam"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
            placeholder="uw@email.nl"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700">
            Telefoonnummer <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
            placeholder="+31 6 12345678"
          />
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-stone-700">
            Adres
          </label>
          <input
            id="address"
            name="address"
            type="text"
            autoComplete="street-address"
            className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
            placeholder="Straat, stad"
          />
        </div>
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-stone-700">
          Type werkzaamheden
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {workTypes.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700 transition has-checked:border-teal-500 has-checked:bg-teal-50 has-checked:text-teal-800 hover:border-stone-400"
            >
              <input
                type="checkbox"
                name="workType"
                value={type}
                className="h-4 w-4 rounded border-stone-300 text-teal-600 focus:ring-teal-500/20"
              />
              {type}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="block text-sm font-medium text-stone-700">
          Wanneer wilt u het werk laten uitvoeren?
        </legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {timingOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2 rounded-lg border border-stone-300 px-3 py-2 text-sm text-stone-700 transition has-checked:border-teal-500 has-checked:bg-teal-50 has-checked:text-teal-800 hover:border-stone-400"
            >
              <input
                type="radio"
                name="timing"
                value={opt.value}
                onChange={(e) => setTiming(e.target.value)}
                className="h-4 w-4 border-stone-300 text-teal-600 focus:ring-teal-500/20"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {timing === "specific" && (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="preferredDate" className="block text-xs font-medium text-stone-600">
                Voorkeursdatum
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-xs font-medium text-stone-600">
                Voorkeurstijd
              </label>
              <input
                id="preferredTime"
                name="preferredTime"
                type="time"
                className="mt-1 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
              />
            </div>
          </div>
        )}
      </fieldset>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-stone-700">
          Omschrijving
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="mt-1.5 block w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-sm text-stone-900 shadow-sm transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
          placeholder="Beschrijf kort uw klus of situatie..."
        />
      </div>

      {state.message && (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${
            state.success
              ? "border border-green-200 bg-green-50 text-green-800"
              : "border border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-h-0 sm:py-2.5"
      >
        {pending ? "Bezig met versturen..." : "Verstuur aanvraag"}
      </button>
    </form>
  );
}
