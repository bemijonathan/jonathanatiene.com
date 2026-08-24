import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllArticles } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/writing",
    "/research",
    "/projects",
    "/talks",
    "/about",
    "/press",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" || path === "/writing" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const articles = await getAllArticles();
  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${site.url}/writing/${a.slug}`,
    lastModified: new Date(a.updated ?? a.date),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes];
}
