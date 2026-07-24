"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Facebook, Instagram, Linkedin, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";
import { useCmsContent } from "@/lib/use-cms-content";

export function Header() {
  const [open, setOpen] = useState(false);
  const { settings } = useCmsContent();

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-line backdrop-blur-xl">
      <div className="hidden border-b border-charcoal/10 bg-[#f2eee8] py-2 text-[11px] text-charcoal/80 lg:block">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="flex items-center gap-2"><MapPin size={13} fill="currentColor" /> {settings.address}</span>
            <a href={`tel:${settings.phone}`}><span className="flex items-center gap-2"><Phone size={13} fill="currentColor" /> <span>{settings.phone}</span></span></a>
            <span className="flex items-center gap-2"><Mail size={13} /> {settings.email}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us:</span>
            {[Facebook, Instagram, Linkedin].map((Icon, index) => <Icon key={index} size={13} fill={index === 0 ? "currentColor" : "none"} />)}
          </div>
        </div>
      </div>
      <div className="container flex h-[74px] items-center justify-between">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="AB Construction & Interior home">
          {/* <span className="flex items-center gap-3 leading-tight">
            <Image
              src={settings.logo}
              alt={settings.businessName}
              width={56}
              height={56}
              priority
              className="h-14 w-14 shrink-0 rounded-sm object-contain max-md:h-12 max-md:w-12"
            />
            <span className="block max-w-[132px] text-[13px] font-bold uppercase leading-[1.35] tracking-[0.22em] text-charcoal max-md:max-w-[112px] max-md:text-[10px] max-md:tracking-[0.18em]">
             AB<br className="hidden max-md:block" /> Constructions & Interior
            </span>
          </span> */}
          <span className="flex items-center gap-3">
            <Image
              src={settings.logo}
              alt={settings.businessName}
              width={56}
              height={56}
              priority
              className="h-14 w-14 shrink-0 rounded-sm object-contain max-md:h-12 max-md:w-12"
            />

            <span className="flex flex-col ">
              {/* First Line */}
              <span className="text-[22px] font-semibold uppercase tracking-[0.08em] leading-none text-charcoal max-md:text-[16px]">
                AB BUILDERS
              </span>

              {/* Second Line */}
              <span className="mt-1 flex items-center gap-2">
                <span className="h-px w-8 bg-[#B68B2E] max-md:w-5" />

                <span className="text-[12px] font-semibold uppercase tracking-[0.35em] text-charcoal max-md:text-[9px]">
                  &amp; CONSTRUCTIONS
                </span>

                <span className="h-px w-8 bg-[#B68B2E] max-md:w-5" />
              </span>
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[0.04em] text-charcoal lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="group flex items-center gap-1 py-7 transition hover:text-moss">
              {label}
              {label === "Pages" ? <ChevronDown size={12} /> : null}
              {label === "Home" ? <span className="absolute mt-[48px] h-px w-10 bg-moss" /> : null}
            </Link>
          ))}
        </nav>
        <Link
          href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
            "Hi AB Construction & Interior, I'd like to get a quote."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-4 rounded-[3px] bg-moss px-7 py-4 text-sm font-bold text-white transition hover:bg-charcoal lg:inline-flex"
        >
          Get A Quote <span className="text-xl leading-none">→</span>
        </Link>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-charcoal/15 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open ? (
        <nav className="container grid gap-3 pb-5 text-sm font-semibold lg:hidden">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md bg-white px-4 py-3">
              {label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
