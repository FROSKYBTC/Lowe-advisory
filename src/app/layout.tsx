import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "business consulting",
    "strategy consulting",
    "operations consulting",
    "small business advisor",
    "SMB consultant",
    "growth strategy",
    "fractional COO",
    "business advisor",
  ],
  authors: [{ name: site.founder.name }],
  creator: site.founder.name,
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const googleMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.contactEmail,
    founder: { "@type": "Person", name: site.founder.name },
    areaServed: "Worldwide",
    serviceType: "Business Strategy & Operations Consulting",
    knowsAbout: [
      "Business Strategy",
      "Operations Management",
      "Financial Planning",
      "Growth Strategy",
      "Go-To-Market",
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        {googleMeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${googleMeasurementId}', { anonymize_ip: true });`}
            </Script>
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">
          <div aria-hidden className="brand-background-mark" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
