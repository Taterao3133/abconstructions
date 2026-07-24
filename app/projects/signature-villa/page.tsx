import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Signature Villa Construction in Telangana",
  description:
    "Explore a signature villa construction project by AB Construction & Interior, serving Banswada and Telangana with premium home building services.",
  path: "/projects/signature-villa",
  keywords: ["Villa Construction in Telangana", "Home Builders in Hyderabad"]
});

export default function ProjectDetailsPage() { return <PageShell page="projects" />; }
