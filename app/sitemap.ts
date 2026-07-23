import type { MetadataRoute } from "next";

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
    url: `https://www.abconstruction.com${route}`,
    lastModified: new Date()
  }));
}
