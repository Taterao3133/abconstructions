import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction and Interior Gallery",
  description:
    "Browse construction, interiors, villa finishes and commercial space images from AB Construction & Interior in Banswada, Telangana.",
  path: "/gallery",
  keywords: ["Interior Designers in Banswada", "Villa Construction in Telangana"]
});

export default function GalleryPage() { return <PageShell page="gallery" />; }
