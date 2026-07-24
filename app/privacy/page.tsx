import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for AB Construction & Interior, a construction and interior design company in Banswada, Telangana.",
  path: "/privacy"
});

export default function PrivacyPage() { return <PageShell page="privacy" />; }
