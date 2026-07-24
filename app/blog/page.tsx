import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction and Interior Design Blog",
  description:
    "Planning guides and ideas for home building, villa construction, interiors, renovation and commercial construction in Telangana.",
  path: "/blog",
  keywords: ["Villa Construction in Telangana", "Interior Designers in Banswada"]
});

export default function BlogPage() { return <PageShell page="blog" />; }
