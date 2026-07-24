import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Designing Calm Luxury Interiors",
  description:
    "A guide from AB Construction & Interior on calm luxury interiors, premium finishes and practical home design for Telangana residences.",
  path: "/blog/designing-calm-luxury",
  keywords: ["Interior Designers in Banswada", "Interior Design Services in Telangana"]
});

export default function SingleBlogPage() { return <PageShell page="blog" />; }
