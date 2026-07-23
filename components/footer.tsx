import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Facebook, Globe2, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { contact, navItems, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-[#fbfaf6]">
      <div className="container grid gap-9 py-10 max-md:gap-0 max-md:py-8 md:grid-cols-[1.35fr_0.75fr_1fr_1.35fr_1.35fr]">
        <div className="border-charcoal/10 md:border-r md:pr-9">
          <div className="flex items-center gap-3">
            <Image src="/ab-logo.jpeg" alt="AB logo" width={58} height={58} className="hidden h-0 w-0" />
            <div>
              <p className="font-display text-[42px] leading-none text-olive">AB <span className="font-sans text-[12px] font-bold uppercase leading-none tracking-[0.22em] text-charcoal">Construction<br />& Interior</span></p>
            </div>
          </div>
          <p className="mt-5 max-w-[230px] text-sm leading-7 text-charcoal/65 max-md:max-w-[250px]">
            We create inspiring spaces that enhance the way you live, work and connect.
          </p>
          <div className="mt-5 flex gap-4 text-charcoal/75">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, index) => (
              <Icon key={index} size={18} />
            ))}
          </div>
        </div>
        <div className="border-charcoal/10 max-md:hidden md:border-r md:pr-9">
          <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Quick Links</h3>
          <div className="mt-5 grid gap-2 text-sm text-charcoal/65">
            {navItems.slice(0, 6).map(([label, href]) => (
              <Link key={href} href={href} className="hover:text-moss">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-charcoal/10 max-md:hidden md:border-r md:pr-9">
          <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Services</h3>
          <div className="mt-5 grid gap-2 text-sm text-charcoal/65">
            {services.map((service) => (
              <Link key={service.title} href="/services" className="hover:text-moss">
                {service.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-charcoal/10 max-md:hidden md:border-r md:pr-9">
          <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Contact Info</h3>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-charcoal/65">
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0" size={16} /> {contact.address}</p>
            <p className="flex gap-3"><Phone className="mt-1 shrink-0" size={16} /> {contact.phone}</p>
            <p className="flex gap-3"><Mail className="mt-1 shrink-0" size={16} /> {contact.email}</p>
            <p className="flex gap-3"><Globe2 className="mt-1 shrink-0" size={16} /> www.abconstruction.com</p>
          </div>
        </div>
        <div className="max-md:hidden">
          <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Newsletter</h3>
          <p className="mt-5 text-sm text-charcoal/65">Subscribe to get updates</p>
          <form className="mt-6 flex h-12 max-w-[230px] border border-charcoal/12 bg-white">
            <input className="min-w-0 flex-1 px-4 text-sm outline-none" placeholder="Your Email" />
            <button className="flex w-12 items-center justify-center bg-moss text-white" aria-label="Subscribe">
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
        <div className="mt-7 hidden border-t border-charcoal/15 max-md:block">
          {["Quick Links", "Services", "Projects", "Company"].map((item) => (
            <div key={item} className="flex h-[54px] items-center justify-between border-b border-charcoal/15 text-sm font-bold">
              {item}
              <ChevronDown size={17} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-moss py-4 text-xs text-white/78 max-md:bg-[#fbfaf6] max-md:py-4 max-md:text-charcoal/72">
        <div className="container flex flex-col justify-between gap-3 md:flex-row">
          <p>© 2025 AB Construction & Interior.<br className="hidden max-md:block" /> All Rights Reserved.</p>
          <p className="max-md:hidden">Privacy Policy · Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
