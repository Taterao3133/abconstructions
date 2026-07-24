import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Construction and Interior Design FAQs",
  description:
    "Answers about construction timelines, villa construction, interior design, commercial construction, budgets and process for clients in Banswada and Telangana.",
  path: "/faq",
  keywords: ["Construction Company in Banswada", "Commercial Construction Services"]
});

export default function FaqPage() { return <PageShell page="faq" />; }
