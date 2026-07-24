import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Testimonials for Construction and Interiors",
  description:
    "Read client feedback for AB Construction & Interior, serving Banswada and Telangana with construction, interiors, villas and commercial work.",
  path: "/testimonials",
  keywords: ["Construction Company in Banswada", "Interior Designers in Banswada"]
});

export default function TestimonialsPage() { return <PageShell page="testimonials" />; }
