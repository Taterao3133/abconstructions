"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCmsContent } from "@/lib/use-cms-content";

export function ProjectGrid({ compact = false }: { compact?: boolean }) {
  const { projects } = useCmsContent();

  return (
    <div className="grid gap-4 max-md:mt-7 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <Link key={project.id} href="/projects/signature-villa" className="group overflow-hidden rounded-[7px] border border-charcoal/10 bg-white">
          <div className={`relative ${compact ? "h-[178px]" : "h-[230px]"} max-md:h-[224px]`}>
            <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
          </div>
          <div className="flex items-center justify-between p-4">
            <div>
              <h3 className="text-[15px] font-bold">{project.title}</h3>
              <p className="mt-1 text-[12px] text-charcoal/62">{project.type}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-[3px] bg-moss text-white transition group-hover:bg-charcoal">
              <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
