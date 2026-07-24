import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction and Interior Projects in Telangana",
  description:
    "View residential, villa, interior and commercial construction projects by AB Construction & Interior serving Banswada and Telangana.",
  path: "/projects",
  keywords: ["Villa Construction in Telangana", "Commercial Construction Services"]
});

export default function ProjectsPage() { return <PageShell page="projects" />; }
