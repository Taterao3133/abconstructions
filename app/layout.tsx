import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abconstruction.com"),
  title: {
    default: "AB Construction & Interior",
    template: "%s | AB Construction & Interior"
  },
  description:
    "Premium construction and interior design company crafting calm, durable and elegant residential and commercial spaces.",
  openGraph: {
    title: "AB Construction & Interior",
    description: "Luxury construction and interior solutions for beautiful spaces built for living.",
    images: ["/hero-interior.png"]
  },
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "AB Construction & Interior",
    address: "123, Green Avenue, Hyderabad, Telangana 500081",
    telephone: "+91 98765 43210",
    email: "info@abconstruction.com",
    url: "https://www.abconstruction.com"
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
