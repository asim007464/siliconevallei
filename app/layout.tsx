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

function getMetadataBase(): URL {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }
  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: "Silicone Vallei | Kitspecialist — Keuken, plinten, sanitair",
  description:
    "Professionele kit- en voegwerkzaamheden door Cagri. Keuken, plinten en sanitair. Contact via WhatsApp, telefoon of e-mail.",
  openGraph: {
    title: "Silicone Vallei | Kitspecialist",
    description:
      "Professionele kit- en voegwerkzaamheden. Neem contact op via WhatsApp of e-mail.",
    locale: "nl_NL",
    siteName: "Silicone Vallei",
    type: "website",
    url: getMetadataBase().origin,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
      <body className="flex min-h-full min-w-0 flex-col bg-stone-950 text-stone-50 antialiased">
        <ScrollHashHandler />
        {children}
      </body>
    </html>
  );
}
