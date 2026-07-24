"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Facebook, Globe2, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { navItems, services } from "@/lib/site-data";
import { useCmsContent } from "@/lib/use-cms-content";

export function Footer() {
  const { settings, socialLinks } = useCmsContent();
  const socialItems = [
    { href: socialLinks.facebook, icon: Facebook, label: "Facebook" },
    { href: socialLinks.instagram, icon: Instagram, label: "Instagram" },
    { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socialLinks.youtube, icon: Youtube, label: "YouTube" }
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-charcoal/10 bg-[#fbfaf6]">
      <div className="container grid gap-9 py-10 max-md:gap-0 max-md:py-8 md:grid-cols-[1.5fr_1fr_1.5fr] lg:grid-cols-[1.35fr_0.75fr_1fr_1.35fr_1.35fr]">
        <div className="border-charcoal/10 md:border-r md:pr-9">
          <div className="flex items-center gap-3">
            <Image src={settings.logo} alt={`${settings.businessName} logo`} width={58} height={58} className="h-[58px] w-[58px] shrink-0 rounded-sm object-contain" />
            <div>
              {/* <p className="font-sans text-[12px] font-bold uppercase leading-[1.45] tracking-[0.22em] text-charcoal">{settings.businessName}</p> */}
              <span className="flex flex-col ">
              {/* First Line */}
              <span className="text-[18px] font-semibold uppercase tracking-[0.08em] leading-none text-charcoal max-md:text-[16px]">
                AB BUILDERS
              </span>

              {/* Second Line */}
              <span className="mt-1 flex items-center gap-2">
                <span className="h-px w-4  bg-[#B68B2E] max-sm:w-5" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.35em] text-charcoal max-md:text-[9px]">
                  &amp; CONSTRUCTIONS
                </span>

                <span className="h-px w-4 bg-[#B68B2E] max-sm:w-5" mt-4 />
              </span>
            </span>
            </div>
          </div>
          <p className="mt-5 max-w-[230px] text-sm leading-7 text-charcoal/65 max-md:max-w-[250px]">
            {settings.aboutText}
          </p>
          <div className="mt-5 flex gap-4 text-charcoal/75">
            {socialItems.map((item) => (
              <Link key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                <item.icon size={18} />
              </Link>
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
            <p className="flex gap-3"><MapPin className="mt-1 shrink-0" size={16} /> {settings.address}</p>
            <p className="flex gap-3"><Phone className="mt-1 shrink-0" size={16} /> {settings.phone}</p>
            <p className="flex gap-3"><Mail className="mt-1 shrink-0" size={16} /> {settings.email}</p>
            <p className="flex gap-3"><Globe2 className="mt-1 shrink-0" size={16} /> {settings.weblink}</p>
          </div>
        </div>
        <div className="max-sm:hidden">
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
