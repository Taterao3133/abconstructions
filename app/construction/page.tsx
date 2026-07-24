import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Villa Construction in Telangana",
  description:
    "AB Construction & Interior provides villa construction, home building, civil construction and commercial construction services across Telangana from Banswada.",
  path: "/construction",
  keywords: [
    "Villa Construction in Telangana",
    "Home Builders in Hyderabad",
    "Construction Company in Banswada",
    "Commercial Construction Services"
  ]
});

export default function ConstructionPage() { return <PageShell page="construction" />; }
