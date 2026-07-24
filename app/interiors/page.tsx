import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Interior Designers in Banswada",
  description:
    "Interior designers in Banswada for kitchens, bedrooms, living spaces, office interiors, storage, lighting, finishes and turnkey interior execution.",
  path: "/interiors",
  keywords: [
    "Interior Designers in Banswada",
    "Interior Design Services in Telangana",
    "Home Interior Designers in Banswada"
  ]
});

export default function InteriorsPage() { return <PageShell page="interiors" />; }
