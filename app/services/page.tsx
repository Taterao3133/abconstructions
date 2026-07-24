import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction and Interior Services in Banswada",
  description:
    "Explore construction, architectural planning, interior design, renovation, villa construction and commercial construction services from AB Construction & Interior in Banswada.",
  path: "/services",
  keywords: [
    "Commercial Construction Services",
    "Construction Company in Banswada",
    "Interior Designers in Banswada"
  ]
});

export default function ServicesPage() { return <PageShell page="services" />; }
