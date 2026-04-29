"use server";

import nodemailer from "nodemailer";

export type ContactState = {
  success: boolean;
  message: string;
};

const RECIPIENT = process.env.CONTACT_EMAIL ?? "asimsajjad928@gmail.com";

const MAX_IMAGE_FILES = 5;
const MAX_IMAGE_BYTES = 4 * 1024 * 1024; // 4 MB per file (SMTP-friendly)
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]);

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

  const attachmentResult = await buildImageAttachments(formData);
  if (!attachmentResult.ok) {
    return { success: false, message: attachmentResult.message };
  }
  const attachments = attachmentResult.attachments;

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

  const bijlagenRow =
    attachments.length > 0
      ? `<tr><td style="padding:6px 12px;font-weight:bold;">Foto&apos;s</td><td style="padding:6px 12px;">${attachments.length} bijlage(n) (zie e-mailbijlagen)</td></tr>`
      : "";

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
      ${bijlagenRow}
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
    attachments.length ? `Foto's: ${attachments.length} bijlage(n) toegevoegd aan deze e-mail.` : "",
  ]
    .filter(Boolean)
    .join("\n");

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
      attachments,
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

type MailAttachment = {
  filename: string;
  content: Buffer;
  contentType: string;
};

async function buildImageAttachments(formData: FormData): Promise<
  | { ok: true; attachments: MailAttachment[] }
  | { ok: false; message: string }
> {
  const entries = formData.getAll("photos");
  const files: File[] = [];
  for (const item of entries) {
    if (item instanceof File && item.size > 0) {
      files.push(item);
    }
  }

  if (files.length === 0) {
    return { ok: true, attachments: [] };
  }

  if (files.length > MAX_IMAGE_FILES) {
    return {
      ok: false,
      message: `U kunt maximaal ${MAX_IMAGE_FILES} afbeeldingen tegelijk uploaden.`,
    };
  }

  const attachments: MailAttachment[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const type = resolveImageMime(file);

    if (!type || !ALLOWED_IMAGE_TYPES.has(type)) {
      return {
        ok: false,
        message:
          "Alleen afbeeldingen zijn toegestaan (JPG, PNG, GIF of WebP). Controleer uw bestanden.",
      };
    }

    if (file.size > MAX_IMAGE_BYTES) {
      return {
        ok: false,
        message: "Elke afbeelding mag maximaal 4 MB zijn.",
      };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = safeImageFilename(file.name, i, type);

    attachments.push({
      filename,
      content: buffer,
      contentType: type,
    });
  }

  return { ok: true, attachments };
}

function resolveImageMime(file: File): string | null {
  const raw = (file.type || "").trim().toLowerCase();
  if (ALLOWED_IMAGE_TYPES.has(raw)) return raw;
  const n = file.name.toLowerCase();
  if (n.endsWith(".jpg") || n.endsWith(".jpeg")) return "image/jpeg";
  if (n.endsWith(".png")) return "image/png";
  if (n.endsWith(".gif")) return "image/gif";
  if (n.endsWith(".webp")) return "image/webp";
  return null;
}

function safeImageFilename(original: string, index: number, mime: string): string {
  const ext =
    mime === "image/png"
      ? "png"
      : mime === "image/gif"
        ? "gif"
        : mime === "image/webp"
          ? "webp"
          : "jpg";
  const cleaned = original
    .replace(/^.*[/\\]/, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(0, 80);
  if (cleaned.length > 4 && /\.(jpe?g|png|gif|webp)$/i.test(cleaned)) {
    return cleaned;
  }
  return `foto-${index + 1}.${ext}`;
}
