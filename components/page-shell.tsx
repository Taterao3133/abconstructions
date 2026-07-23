import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { pageSummaries, services, stats } from "@/lib/site-data";

type PageKey = keyof typeof pageSummaries;

export function PageShell({ page }: { page: PageKey }) {
  const summary = pageSummaries[page];

  return (
    <>
      <Header />
      <main>
        <section className="bg-cream py-20">
          <div className="container grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="eyebrow">{summary.eyebrow}</p>
              <h1 className="font-display mt-5 max-w-3xl text-5xl leading-tight text-charcoal md:text-7xl">
                {summary.title}
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-charcoal/68">{summary.text}</p>
          </div>
        </section>
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
