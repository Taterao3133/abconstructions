import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Play, Quote, Star } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileContactBlock } from "@/components/mobile-contact-block";
import { ProjectGrid } from "@/components/project-grid";
import { nearbyServiceAreas, pageMetadata } from "@/lib/seo";
import { processSteps, services, stats } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Construction Company in Banswada",
  description:
    "AB Construction & Interior provides construction, interiors, villa construction, home building and commercial construction services from Banswada within a 150 km Telangana service area.",
  path: "/",
  keywords: [
    "Construction Company in Banswada",
    "Interior Designers in Banswada",
    "Villa Construction in Telangana",
    "Home Builders in Hyderabad",
    "Commercial Construction Services"
  ]
});

export default function HomePage() {
  const processStats = [
    { value: "250+", label: "Projects Completed", icon: stats[1].icon },
    { value: "15+", label: "Years of Experience", icon: stats[0].icon },
    { value: "50+", label: "Team Members", icon: stats[3].icon },
    { value: "98%", label: "Happy Clients", icon: stats[2].icon }
  ];
  const mobileServices = [...services, { ...services[0], title: "Landscape Design" }];
  const mobileBlogs = [
    {
      title: "Top Interior Design Trends for Modern Homes in 2025",
      date: "May 10, 2025",
      image: "/demo/blog-stairs.png"
    },
    {
      title: "How We Build Sustainable and Future-Ready Buildings",
      date: "May 05, 2025",
      image: "/demo/blog-villa.png"
    }
  ];

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="relative bg-[#f6f1e9] max-md:border-t max-md:border-charcoal/10">
          <div className="absolute bottom-12 left-0 hidden h-24 w-28 bg-[radial-gradient(circle,#d9b370_1.2px,transparent_1.2px)] [background-size:13px_13px] opacity-60 lg:block" />
          <div className="container relative grid min-h-[455px] items-center max-md:w-full max-md:px-0 lg:grid-cols-[42%_58%]">
            <div className="z-10 py-16 max-md:px-6 max-md:pb-9 max-md:pt-11 lg:py-0">
              <p className="eyebrow">We design. We build. We care.</p>
              <h1 className="font-display mt-5 max-w-[470px] text-[52px] leading-[1.02] text-charcoal max-md:text-[38px] md:text-[66px]">
                Beautiful Spaces Built for <span className="text-olive">Living.</span>
              </h1>
              <p className="mt-6 max-w-[390px] text-[15px] leading-8 text-charcoal/72 max-md:text-[14px] max-md:leading-7">
                We create exceptional construction and interior solutions that blend aesthetics, functionality and quality craftsmanship.
              </p>
              <div className="mt-8 flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-5">
                <Link href="/projects" className="inline-flex h-12 items-center gap-5 rounded-[4px] bg-moss px-6 text-sm font-bold text-white transition hover:bg-charcoal">
                  Explore Projects <ArrowRight size={16} />
                </Link>
                <Link href="/gallery" className="inline-flex items-center gap-4 text-sm font-semibold text-charcoal">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-moss/45 bg-white text-moss">
                    <Play size={15} fill="currentColor" />
                  </span>
                  Watch Our Video
                </Link>
              </div>
            </div>
            <div className="hero-photo relative min-h-[370px] self-stretch max-md:min-h-[300px] lg:absolute lg:bottom-0 lg:right-[-48px] lg:top-0 lg:w-[62%]">
              <Image src="/demo/hero.png" alt="Modern cream living room interior" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 62vw" />
            </div>
          </div>
        </section>

        <section className="relative z-20 mt-0">
          <div className="container grid rounded-[18px] border border-charcoal/8 bg-white px-8 py-5 shadow-[0_20px_45px_rgba(32,33,29,0.10)] max-md:w-[calc(100%-32px)] max-md:grid-cols-2 max-md:gap-y-5 max-md:px-5 max-md:py-6 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((item, index) => (
              <div key={item.label} className={`${index === 4 ? "max-md:hidden" : ""} flex items-center justify-center gap-4 border-charcoal/10 py-3 max-md:flex-col max-md:gap-2 max-md:text-center lg:border-r last:border-r-0`}>
                <span className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#d3b176]/70 text-olive max-md:h-[52px] max-md:w-[52px]">
                  <item.icon size={27} strokeWidth={1.35} />
                </span>
                <span>
                  <span className="font-display block text-[34px] leading-none text-charcoal max-md:text-[31px]">{item.value}</span>
                  <span className="block max-w-[92px] text-[12px] leading-4 text-charcoal/70">{item.label}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-12 max-md:py-10">
          <div className="container grid items-start gap-12 lg:grid-cols-[30%_70%]">
            <div className="pt-2">
              <p className="eyebrow">About Us</p>
              <h2 className="font-display mt-4 text-[34px] leading-[1.08] text-charcoal max-md:text-[29px]">
                Building More Than Structures, We Build Trust
              </h2>
              <span className="mt-5 hidden h-[12px] w-10 border-y border-olive max-md:block" />
              <p className="mt-5 text-[14px] leading-7 text-charcoal/72">
                AB Construction & Interior is a leading construction and interior design company delivering residential, commercial and luxury projects with innovation, quality and transparency.
              </p>
              <Link href="/about" className="mt-6 inline-flex h-11 items-center gap-6 rounded-[3px] border border-moss/55 px-6 text-sm font-bold text-charcoal">
                More About Us <ArrowRight size={15} />
              </Link>
            </div>
            <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.title} className="flex min-h-[218px] flex-col items-center rounded-[4px] border border-charcoal/10 bg-white p-7 text-center">
                  <service.icon className="text-olive" size={42} strokeWidth={1.25} />
                  <h3 className="mt-7 text-[15px] font-bold">{service.title}</h3>
                  <p className="mt-3 text-[12px] leading-6 text-charcoal/65">{service.description}</p>
                  <span className="mt-auto h-px w-10 bg-olive" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hidden border-y border-charcoal/10 bg-[#fbfaf6] py-10 max-md:block">
          <div className="container">
            <p className="eyebrow">Our Services</p>
            <h2 className="font-display mt-4 text-[31px] leading-none">What We Do</h2>
            <span className="mt-5 block h-[12px] w-10 border-y border-olive" />
            <div className="mt-6 grid gap-3">
              {mobileServices.map((service) => (
                <Link key={service.title} href="/services" className="flex min-h-[70px] items-center gap-4 rounded-[5px] border border-charcoal/10 bg-white px-4">
                  <service.icon className="shrink-0 text-olive" size={34} strokeWidth={1.25} />
                  <span className="flex-1 text-[14px] font-bold">{service.title === "Renovation" ? "Renovation & Remodeling" : service.title}</span>
                  <ChevronRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f4ef] py-7 max-md:bg-[#fbfaf6] max-md:py-10">
          <div className="container">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <p className="eyebrow">Our Projects</p>
                <h2 className="font-display mt-2 text-[32px] leading-none max-md:text-[29px]">Our Recent Work</h2>
              </div>
              <Link href="/projects" className="inline-flex items-center gap-3 text-sm font-bold text-charcoal">
                View All Projects <ArrowRight size={16} />
              </Link>
            </div>
            <ProjectGrid compact />
          </div>
        </section>

        <section className="bg-white py-14 max-md:py-10">
          <div className="container grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">Service Area</p>
              <h2 className="font-display mt-4 text-[34px] leading-[1.08] text-charcoal max-md:text-[29px]">
                Construction and Interior Services Within 150 km of Banswada
              </h2>
              <p className="mt-5 text-[14px] leading-7 text-charcoal/72">
                Our office is in Banswada 503187, and we serve homeowners, villa owners and commercial clients across nearby Telangana locations within an approximate 150 km radius.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Construction Company in Banswada",
                "Interior Designers in Banswada",
                "Villa Construction in Telangana",
                "Home Builders in Hyderabad",
                "Commercial Construction Services"
              ].map((term) => (
                <article key={term} className="rounded-md border border-charcoal/10 bg-[#fbfaf6] p-5">
                  <h3 className="text-[15px] font-bold text-charcoal">{term}</h3>
                  <p className="mt-3 text-[13px] leading-6 text-charcoal/65">
                    Planning, execution and finishing support by a local construction and interiors team based in Banswada.
                  </p>
                </article>
              ))}
            </div>
            <div className="lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/50">Nearby locations covered</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {nearbyServiceAreas.map((area) => (
                  <span key={area} className="rounded-[3px] border border-charcoal/10 bg-linen px-3 py-2 text-sm text-charcoal/70">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-5 max-md:py-0">
          <div className="container grid overflow-hidden rounded-[14px] bg-[#f5f0e8] max-md:w-full max-md:rounded-none max-md:bg-moss lg:grid-cols-[25%_45%_30%]">
            <div className="relative min-h-[230px] overflow-hidden rounded-r-[130px] max-md:hidden">
              <Image src="/demo/process-chair.png" alt="Olive accent chair interior corner" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="px-9 py-9 max-md:px-6 max-md:py-12 max-md:text-white">
              <p className="eyebrow">Our Process</p>
              <h2 className="font-display mt-3 text-[33px] leading-none max-md:max-w-[220px] max-md:text-[31px] max-md:leading-[1.08]">From Concept to Creation</h2>
              <span className="mt-5 hidden h-[12px] w-10 border-y border-white/75 max-md:block" />
              <p className="mt-4 max-w-[430px] text-[13px] leading-6 text-charcoal/70 max-md:hidden">
                We follow a seamless process to deliver projects that stand the test of time.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 max-md:grid max-md:gap-0">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex items-center gap-3 max-md:gap-4">
                    <div className="text-center max-md:flex max-md:items-center max-md:gap-4 max-md:text-left">
                      <span className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-olive shadow-line max-md:mx-0 max-md:h-[52px] max-md:w-[52px]">
                        <step.icon size={21} strokeWidth={1.35} />
                      </span>
                      <p className="mt-3 text-[11px] font-bold max-md:mt-0 max-md:text-[15px] max-md:font-medium"><span className="hidden max-md:block max-md:text-[17px] max-md:font-normal">{String(index + 1).padStart(2, "0")}</span>{step.title}</p>
                    </div>
                    {index < processSteps.length - 1 ? <ChevronRight className="mb-6 text-charcoal/55 max-md:hidden" size={15} /> : null}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 bg-moss p-5 text-white max-md:hidden">
              {processStats.map((stat) => (
                <div key={stat.label} className="border border-white/15 p-5">
                  <stat.icon size={30} strokeWidth={1.2} />
                  <p className="font-display mt-4 text-[31px] leading-none">{stat.value}</p>
                  <p className="mt-1 text-[12px] leading-4 text-white/82">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f6f4ef] pb-7 max-md:bg-[#fbfaf6] max-md:py-8">
          <div className="container grid gap-7 lg:grid-cols-[32%_68%]">
            <article className="rounded-[4px] border border-charcoal/10 bg-white p-8 max-md:bg-[#f8f4ed]">
              <Quote className="text-[#c4b386]" size={38} fill="currentColor" />
              <p className="eyebrow mt-1">What Our Clients Say</p>
              <p className="mt-4 text-[13px] leading-6 text-charcoal/72">
                AB Construction & Interior exceeded our expectations in every aspect. Their attention to detail, commitment and creativity are truly remarkable.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d8c9b7] text-sm font-bold">RK</span>
                  <span>
                    <span className="block text-sm font-bold">Ravi Kumar</span>
                    <span className="text-[11px] text-charcoal/58">Hyderabad</span>
                  </span>
                </div>
                <div className="flex gap-1 text-olive">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
              </div>
            </article>
            <article className="grid overflow-hidden bg-[#f7f2ea] max-md:grid-cols-[58%_42%] lg:grid-cols-[48%_52%]">
              <div className="p-2 lg:p-14">
                <h2 className="font-display text-[44px] leading-[1.06] max-md:text-[28px] max-sm:hidden">Let’s Build Your Dream Project  </h2> 
                <h2 className="font-display mt-2 text-[44px] leading-[1.06] max-md:text-[28px] lg:hidden">Let’s Build </h2> 
                 <h2 className="font-display text-[14px] leading-[1.06] lg:hidden "> Your Dream Project</h2>
                <p className="mt-5 text-[13px] leading-6 text-charcoal/70">
                  Have a project in mind? Let’s talk about how we can bring your vision to life.
                </p>
                <Link href="/contact" className="mt-6 inline-flex h-11 items-center gap-5 rounded-[3px] bg-moss px-6 text-sm font-bold text-white">
                  Get In Touch <ArrowRight size={15} />
                </Link>
              </div>
              <div className="relative min-h-[205px]">
                <Image src="/demo/cta-kitchen.png" alt="Warm kitchen interior" fill className="object-cover" sizes="50vw" />
              </div>
            </article>
          </div>
        </section>

        <MobileContactBlock />

        <section className="hidden bg-[#fbfaf6] py-10 max-md:block">
          <div className="container">
            <div className="flex items-end justify-between">
              <div>
                <p className="eyebrow">Latest Blogs</p>
                <h2 className="font-display mt-4 text-[34px] leading-none">Latest Articles</h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-moss">View All</Link>
            </div>
            <div className="mt-7 grid gap-6">
              {mobileBlogs.map((blog) => (
                <article key={blog.title} className="overflow-hidden rounded-[6px] border border-charcoal/10 bg-white">
                  <div className="relative h-[124px]">
                    <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="100vw" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[17px] font-bold leading-6">{blog.title}</h3>
                    <p className="mt-4 text-[13px] text-charcoal/55">{blog.date}</p>
                    <Link href="/blog/designing-calm-luxury" className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-moss">
                      Read More <ArrowRight size={15} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hidden bg-moss py-9 text-white max-md:block">
          <div className="container">
            <p className="eyebrow text-white/80">Newsletter</p>
            <h2 className="font-display mt-4 text-[33px]">Stay Updated</h2>
            <span className="mt-4 block h-[12px] w-10 border-y border-white/75" />
            <p className="mt-5 max-w-[250px] text-[14px] leading-6 text-white/82">
              Subscribe to get the latest updates, insights and offers.
            </p>
            <form className="mt-7 flex h-14 overflow-hidden rounded-[4px] bg-white text-charcoal">
              <input className="min-w-0 flex-1 px-5 text-sm outline-none" placeholder="Your Email" />
              <button className="flex w-16 items-center justify-center border-l border-charcoal/25" aria-label="Subscribe">
                <ArrowRight size={23} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
