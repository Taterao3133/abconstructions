import type { Metadata } from "next";

export const siteUrl = "https://abconstructionsandinterior.in";
export const businessName = "AB Builders & Constructions";
export const businessTitle = "AB Builders & Constructions";
export const officeLatitude = 18.3788899;
export const officeLongitude = 77.8771197;
export const serviceRadiusMeters = 150000;

export const priorityKeywords = [
  "Construction Company in Banswada",
  "construction in banswada",
  "interior banswada",
  "builders in banswada",
  "house building in banswada",
  "banswada",
  "designer in banswada",
  "Interior Designers in Banswada",
  "Villa Construction in Telangana",
  "Home Builders in Hyderabad",
  "Commercial Construction Services",
  "Construction Company near Banswada",
  "Interior Design Services in Telangana",
  "Residential Construction in Kamareddy",
  "Building Contractors in Telangana",
  "Turnkey Construction Services"
];

export const nearbyServiceAreas = [
  "Banswada",
  "Kamareddy",
  "Nizamabad",
  "Pitlam",
  "Bodhan",
  "Medak",
  "Sangareddy",
  "Siddipet",
  "Vikarabad",
  "Zaheerabad",
  "Hyderabad",
  "Telangana"
];

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  return {
    title,
    description,
    keywords: [...keywords, ...priorityKeywords],
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: businessName,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/hero-interior.png",
          width: 1200,
          height: 630,
          alt: `${businessName} construction and interior projects`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero-interior.png"]
    }
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${siteUrl}/#localbusiness`,
  name: businessName,
  url: siteUrl,
  image: `${siteUrl}/hero-interior.png`,
  logo: `${siteUrl}/ab-logo.jpeg`,
  description:
    "Construction company and interior designers in Banswada serving residential, villa, commercial and turnkey interior projects across Telangana.",
  telephone: "+919989940220",
  email: "Surisabconstructions@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "OPP: H.P Petrol bunk",
    addressLocality: "Banswada",
    postalCode: "503187",
    addressRegion: "Telangana",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: officeLatitude,
    longitude: officeLongitude
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: officeLatitude,
        longitude: officeLongitude
      },
      geoRadius: serviceRadiusMeters,
      description: "150 km service radius from the Banswada office"
    },
    ...nearbyServiceAreas.map((area) => ({
      "@type": "City",
      name: area
    }))
  ],
  makesOffer: [
    "Construction Company in Banswada",
    "Interior Designers in Banswada",
    "Villa Construction in Telangana",
    "Home Builders in Banswada",
    "Commercial Construction Services"
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service
    }
  })),
  priceRange: "$$"
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: businessName,
  publisher: {
    "@id": `${siteUrl}/#localbusiness`
  },
  inLanguage: "en-IN"
};
