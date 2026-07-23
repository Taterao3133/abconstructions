import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container py-24">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-4 text-6xl">This page is still under construction.</h1>
        <Link href="/" className="mt-8 inline-flex rounded-md bg-moss px-6 py-4 text-sm font-bold text-white">
          Back To Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
