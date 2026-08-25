import { site } from "./site";
import type { Article } from "./content";

const abs = (path: string) =>
  path.startsWith("http") ? path : `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    description: site.descriptor,
    jobTitle: "AI engineer, researcher and writer",
    sameAs: [site.social.github, site.social.x, site.social.linkedin],
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents",
      "Agentic Memory",
      "Machine Learning",
      "Open Models",
      "Fine-Tuning",
      "Software Engineering",
    ],
  };
}

export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": abs(`/writing/${article.slug}`),
    },
    image: abs(article.image ?? `/api/og?title=${encodeURIComponent(article.title)}`),
    keywords: article.topics.join(", "),
    wordCount: article.wordCount,
    articleSection: article.topics[0],
  };
}

export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
