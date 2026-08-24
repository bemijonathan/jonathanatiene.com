import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllArticles, getTopics, topicToSlug } from "@/lib/content";

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
    priority: a.featured ? 0.9 : a.archived ? 0.5 : 0.8,
  }));

  const topics = await getTopics();
  const topicRoutes: MetadataRoute.Sitemap = topics.map((t) => ({
    url: `${site.url}/writing/topics/${topicToSlug(t)}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes, ...topicRoutes];
}
