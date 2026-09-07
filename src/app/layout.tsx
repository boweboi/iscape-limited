import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: replace the fallback with the real domain once one is purchased and connected.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iscape-limited.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wellington Retaining Walls, Landscaping & Ready Lawn | iScape Limited",
    template: "%s | iScape Limited",
  },
  description:
    "iScape Limited builds timber retaining walls, decks, fencing, ready lawn and full landscape transformations across the Wellington region, with LBP-qualified workmanship and council compliance.",
  applicationName: "iScape Limited",
  authors: [{ name: "iScape Limited" }],
  creator: "iScape Limited",
  publisher: "iScape Limited",
  keywords: [
    "Wellington retaining walls",
    "timber retaining walls Wellington",
    "landscaping Wellington",
    "ready lawn Wellington",
    "residential fencing Wellington",
    "deck builder Wellington",
    "Licensed Building Practitioner",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    siteName: "iScape Limited",
    title: "Wellington Retaining Walls, Landscaping & Ready Lawn | iScape Limited",
    description:
      "Timber retaining walls, decks, fencing, ready lawn and full landscape transformations across the Wellington region, built to last with LBP-qualified workmanship.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wellington Retaining Walls, Landscaping & Ready Lawn | iScape Limited",
    description:
      "Landscape creation, start to finish, for the Wellington region. Timber retaining walls, decks, fencing and ready lawn built to handle the local climate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "iScape Limited",
    description:
      "Wellington landscape creation, start to finish: timber retaining walls, decks, fencing, ready lawn and full outdoor transformations, built with LBP-qualified workmanship.",
    url: siteUrl,
    email: "iscapework@gmail.com",
    telephone: "+64211095981",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Wellington Region, New Zealand",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Wellington",
      addressCountry: "NZ",
    },
    knowsAbout: [
      "Timber retaining walls",
      "NZS 3604 timber wall design",
      "Ready lawn installation",
      "Residential fencing",
      "Deck construction",
      "Landscape drainage",
    ],
  };

  return (
    <html
      lang="en-NZ"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
