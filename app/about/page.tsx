import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About AB Construction & Interior in Banswada",
  description:
    "Learn about AB Construction & Interior, a Banswada construction and interior design company for homes, villas, commercial spaces and renovations.",
  path: "/about",
  keywords: ["Construction Company in Banswada", "Interior Designers in Banswada"]
});

export default function AboutPage() { return <PageShell page="about" />; }
