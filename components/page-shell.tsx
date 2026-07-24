"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectGrid } from "@/components/project-grid";
import { pageSummaries, services, stats } from "@/lib/site-data";
import { useCmsContent } from "@/lib/use-cms-content";

type PageKey = keyof typeof pageSummaries;

export function PageShell({ page }: { page: PageKey }) {
  const { pages } = useCmsContent();
  const summary = pages[page];

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-[#f6f1e9] max-md:border-t max-md:border-charcoal/10">
          <div className="absolute bottom-10 left-0 hidden h-24 w-28 bg-[radial-gradient(circle,#d9b370_1.2px,transparent_1.2px)] [background-size:13px_13px] opacity-60 lg:block" />
          <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-white/45 lg:block" />
          <div className="container relative grid min-h-[430px] gap-10 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center lg:gap-14 lg:py-20">
            <div className="relative z-10 max-w-xl">
              <p className="eyebrow">{summary.eyebrow}</p>
              <h1 className="font-display mt-5 text-[46px] leading-[1.04] text-charcoal max-md:text-[38px] md:text-[64px]">
                {summary.title}
              </h1>
              <span className="mt-6 block h-[12px] w-12 border-y border-olive" />
              <p className="mt-6 max-w-[520px] text-[16px] leading-8 text-charcoal/70 max-md:text-[14px] max-md:leading-7">{summary.text}</p>
            </div>
            <div className="hero-photo relative min-h-[300px] overflow-hidden bg-white shadow-[0_28px_80px_rgba(32,33,29,0.16)] max-md:-mx-4 md:min-h-[360px] lg:min-h-[390px]">
              <Image src={summary.image} alt={summary.title} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 55vw" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-charcoal/28 to-transparent" />
            </div>
          </div>
        </section>
        {page === "about" && "body" in summary ? (
          <section className="bg-white py-14">
            <div className="container max-w-4xl">
              <p className="text-lg leading-9 text-charcoal/72">{summary.body}</p>
            </div>
          </section>
        ) : null}
        {page === "projects" ? (
          <section className="bg-[#f6f4ef] py-16">
            <div className="container">
              <ProjectGrid />
            </div>
          </section>
        ) : null}
        <section className="py-16">
          <div className="container grid gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-md border border-charcoal/10 bg-white p-6">
                <item.icon className="text-olive" size={28} />
                <p className="font-display mt-5 text-4xl">{item.value}</p>
                <p className="text-sm text-charcoal/62">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="pb-20">
          <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-md border border-charcoal/10 bg-linen p-7">
                <service.icon className="text-moss" size={34} />
                <h2 className="mt-7 text-xl font-bold">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/62">{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
