import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction and Interior Careers in Banswada",
  description:
    "Join AB Construction & Interior in Banswada for construction, interior design, project management and site execution career opportunities.",
  path: "/career",
  keywords: ["Construction Jobs in Banswada", "Interior Design Jobs in Banswada"]
});

export default function CareerPage() { return <PageShell page="career" />; }
