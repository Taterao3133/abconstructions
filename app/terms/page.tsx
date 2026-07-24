import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "Website terms and conditions for AB Construction & Interior construction and interior design enquiries in Banswada, Telangana.",
  path: "/terms"
});

export default function TermsPage() { return <PageShell page="terms" />; }
