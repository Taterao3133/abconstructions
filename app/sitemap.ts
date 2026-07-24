import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const routes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/projects/signature-villa",
  "/interiors",
  "/construction",
  "/gallery",
  "/testimonials",
  "/blog",
  "/blog/designing-calm-luxury",
  "/career",
  "/faq",
  "/contact",
  "/privacy",
  "/terms"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
