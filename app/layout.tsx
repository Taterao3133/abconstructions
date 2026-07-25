import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import {
  absoluteUrl,
  businessName,
  localBusinessJsonLd,
  priorityKeywords,
  siteUrl,
  websiteJsonLd
} from "@/lib/seo";

export const metadata: Metadata = {
  
  metadataBase: new URL(siteUrl),
  title: {
    default: "Construction Company in Banswada | AB Construction & Interior",
    template: `%s | ${businessName}`
  },
  description:
    "AB Construction & Interior is a construction company in Banswada offering interior design, villa construction, home building and commercial construction services across Telangana.",
  keywords: priorityKeywords,
  authors: [{ name: businessName }],
  creator: businessName,
  publisher: businessName,
  alternates: {
    canonical: absoluteUrl()
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    title: "AB Builders & Constructions in Banswada | Interior Designers",
    description:
      "Construction, interiors, villa building and commercial construction services from Banswada across Telangana.",
    url: siteUrl,
    siteName: businessName,
    locale: "en",
    type: "website",
    images: [
      {
        url: "/hero-interior.png",
        width: 1200,
        height: 630,
        alt: `${businessName} construction and interior design work`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Builders & Constructions in Banswada | AB Construction & Interior",
    description:
      "Interior designers, villa construction, home builders and commercial construction services in Telangana.",
    images: ["/hero-interior.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
