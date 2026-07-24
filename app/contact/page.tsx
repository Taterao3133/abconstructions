import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Construction Company in Banswada",
  description:
    "Contact AB Construction & Interior at Banswada 503187 for villa construction, home building, interiors, renovation and commercial construction services.",
  path: "/contact",
  keywords: [
    "Construction Company in Banswada",
    "Interior Designers in Banswada",
    "Construction Office Banswada 503187"
  ]
});

export default function ContactPage() { return <PageShell page="contact" />; }
