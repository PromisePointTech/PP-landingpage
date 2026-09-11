import type { MetadataRoute } from "next";
import { legalDocs, mainNav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = mainNav.map((item) => ({
    url: `${site.url}${item.href === "/" ? "" : item.href}`,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const legal: MetadataRoute.Sitemap = legalDocs.map((doc) => ({
    url: `${site.url}/legal/${doc.slug}`,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...pages, ...legal];
}
