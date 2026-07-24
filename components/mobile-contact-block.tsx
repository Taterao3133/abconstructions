"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useCmsContent } from "@/lib/use-cms-content";

export function MobileContactBlock() {
  const { settings } = useCmsContent();

  return (
    <section className="hidden bg-[#fbfaf6] py-10 max-md:block">
      <div className="container">
        <p className="eyebrow">Let's Talk</p>
        <h2 className="font-display mt-4 text-[38px] leading-none">Get In Touch</h2>
        <span className="mt-6 block h-[12px] w-10 border-y border-olive" />
        <p className="mt-6 max-w-[250px] text-[15px] leading-7 text-charcoal/72">
          We are here to answer your queries and help you build your dream project.
        </p>
        <div className="mt-7 grid gap-6 text-[14px] text-charcoal/80">
          <p className="flex items-center gap-5"><Phone className="text-olive" size={23} fill="currentColor" /> {settings.phone}</p>
          <p className="flex items-center gap-5"><Mail className="text-olive" size={23} /> {settings.email}</p>
          <p className="flex items-start gap-5"><MapPin className="mt-1 text-olive" size={23} fill="currentColor" /> {settings.address}</p>
          <p className="flex items-center gap-5"><Clock className="text-olive" size={23} /> Mon - Sat: 9:00 AM - 7:00 PM</p>
        </div>
        <Link href="/contact" className="mt-8 flex h-14 items-center justify-between rounded-[4px] bg-moss px-6 text-sm font-bold text-white">
          Contact Us <ArrowRight size={18} />
        </Link>
        <div className="relative mt-8 h-[148px] overflow-hidden rounded-[4px] border border-charcoal/8">
          <Image src="/demo/mobile-map.png" alt="AB Construction & Interior map location" fill className="object-cover" sizes="100vw" />
        </div>
      </div>
    </section>
  );
}
