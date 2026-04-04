"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  success: boolean;
  message: string;
};

const RECIPIENT = process.env.CONTACT_EMAIL ?? "asimsajjad928@gmail.com";

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const address = (formData.get("address") as string)?.trim() ?? "";
  const workTypes = formData.getAll("workType") as string[];
  const timing = (formData.get("timing") as string)?.trim() ?? "";
  const preferredDate = (formData.get("preferredDate") as string)?.trim() ?? "";
  const preferredTime = (formData.get("preferredTime") as string)?.trim() ?? "";
  const description = (formData.get("description") as string)?.trim() ?? "";

  const timingLabels: Record<string, string> = {
    asap: "Zo snel mogelijk",
    "2weeks": "Binnen 2 weken",
    month: "Binnen een maand",
    specific: preferredDate
      ? `Specifieke datum: ${preferredDate}${preferredTime ? ` om ${preferredTime}` : ""}`
      : "Specifieke datum (niet ingevuld)",
  };
  const timingDisplay = timingLabels[timing] || "—";

  if (!email || !phone) {
    return { success: false, message: "E-mail en telefoonnummer zijn verplicht." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Voer een geldig e-mailadres in." };
  }

  const htmlBody = `
    <h2>Nieuw contactformulier — Silicone Vallei</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;">
      <tr><td style="padding:6px 12px;font-weight:bold;">Naam</td><td style="padding:6px 12px;">${esc(name) || "—"}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">E-mail</td><td style="padding:6px 12px;"><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Telefoon</td><td style="padding:6px 12px;"><a href="tel:${esc(phone)}">${esc(phone)}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Adres</td><td style="padding:6px 12px;">${esc(address) || "—"}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Type werk</td><td style="padding:6px 12px;">${workTypes.length ? workTypes.map(esc).join(", ") : "—"}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Planning</td><td style="padding:6px 12px;">${esc(timingDisplay)}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;vertical-align:top;">Omschrijving</td><td style="padding:6px 12px;">${esc(description) || "—"}</td></tr>
    </table>
  `;

  const textBody = [
    `Nieuw contactformulier — Silicone Vallei`,
    ``,
    `Naam: ${name || "—"}`,
    `E-mail: ${email}`,
    `Telefoon: ${phone}`,
    `Adres: ${address || "—"}`,
    `Type werk: ${workTypes.length ? workTypes.join(", ") : "—"}`,
    `Planning: ${timingDisplay}`,
    `Omschrijving: ${description || "—"}`,
  ].join("\n");

  try {
    const smtpUser = process.env.SMTP_USER ?? "";
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: process.env.SMTP_PASS ?? "" },
    });

    await transport.sendMail({
      from: smtpUser,
      to: RECIPIENT,
      replyTo: email,
      subject: `Offerte aanvraag — ${name || email}`,
      text: textBody,
      html: htmlBody,
    });

    return {
      success: true,
      message: "Bedankt! Uw aanvraag is verstuurd. We nemen zo snel mogelijk contact met u op.",
    };
  } catch (err) {
    console.error("Contact form email error:", err);
    return {
      success: false,
      message: "Er is iets misgegaan bij het versturen. Probeer het later opnieuw of neem contact op via WhatsApp.",
    };
  }
}

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
