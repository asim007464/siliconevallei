import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollHashHandler } from "@/components/ScrollHashHandler";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silicone Vallei | Kitspecialist — Keuken, plinten, sanitair",
  description:
    "Professionele kit- en voegwerkzaamheden door Cagri. Keuken, plinten en sanitair. Contact via WhatsApp, telefoon of e-mail.",
  openGraph: {
    title: "Silicone Vallei | Kitspecialist",
    description:
      "Professionele kit- en voegwerkzaamheden. Neem contact op via WhatsApp of e-mail.",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-stone-950 text-stone-50 antialiased">
        <ScrollHashHandler />
        {children}
      </body>
    </html>
  );
}
