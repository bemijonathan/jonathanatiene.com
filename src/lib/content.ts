import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ArticleFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated?: string;
  slug?: string;
  topics?: string[];
  featured?: boolean;
  draft?: boolean;
  archived?: boolean;
  image?: string;
  canonical?: string;
  originalUrl?: string;
  alsoPublishedAt?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  topics: string[];
  featured: boolean;
  draft: boolean;
  archived: boolean;
  image?: string;
  canonical?: string;
  originalUrl?: string;
  alsoPublishedAt?: string[];
  readingTimeMinutes: number;
  wordCount: number;
  content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function readMdxDir(dir: string): Promise<Article[]> {
  const abs = path.join(CONTENT_ROOT, dir);
  let entries: string[] = [];
  try {
    entries = await fs.readdir(abs);
  } catch {
    return [];
  }

  const files = entries.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const articles = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(abs, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as ArticleFrontmatter;
      const stats = readingTime(content);
      const slug = fm.slug ?? file.replace(/\.mdx?$/, "");

      return {
        slug,
        title: fm.title,
        description: fm.description,
        date: fm.date,
        updated: fm.updated,
        topics: fm.topics ?? [],
        featured: Boolean(fm.featured),
        draft: Boolean(fm.draft),
        archived: Boolean(fm.archived),
        image: fm.image,
        canonical: fm.canonical,
        originalUrl: fm.originalUrl,
        alsoPublishedAt: fm.alsoPublishedAt,
        readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
        wordCount: stats.words,
        content,
      } satisfies Article;
    }),
  );

  return articles
    .filter((a) => (process.env.NODE_ENV === "production" ? !a.draft : true))
    .sort((a, b) => {
      // Archived posts sort to the end, then by date desc
      if (a.archived !== b.archived) return a.archived ? 1 : -1;
      return a.date < b.date ? 1 : -1;
    });
}

export async function getAllArticles(): Promise<Article[]> {
  return readMdxDir("writing");
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const all = await getAllArticles();
  return all.find((a) => a.slug === slug) ?? null;
}

export async function getFeaturedArticles(): Promise<Article[]> {
  const all = await getAllArticles();
  const live = all.filter((a) => !a.archived);
  const featured = live.filter((a) => a.featured);
  return featured.length ? featured : live.slice(0, 1);
}

export async function getLatestArticles(limit = 5): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => !a.archived).slice(0, limit);
}

export async function getTopics(): Promise<string[]> {
  const all = await getAllArticles();
  const set = new Set<string>();
  for (const a of all) for (const t of a.topics) set.add(t);
  return [...set].sort();
}

export function topicToSlug(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function getTopicMap(): Promise<Map<string, string>> {
  const topics = await getTopics();
  return new Map(topics.map((t) => [topicToSlug(t), t]));
}

export async function getArticlesByTopic(topic: string): Promise<Article[]> {
  const all = await getAllArticles();
  return all.filter((a) => a.topics.includes(topic));
}

export async function getRelatedArticles(
  slug: string,
  limit = 3,
): Promise<Article[]> {
  const all = await getAllArticles();
  const current = all.find((a) => a.slug === slug);
  if (!current) return [];

  const currentTopics = new Set(current.topics);

  const scored = all
    .filter((a) => a.slug !== slug && !a.archived)
    .map((a) => {
      const shared = a.topics.filter((t) => currentTopics.has(t)).length;
      return { article: a, shared };
    })
    .filter((s) => s.shared > 0)
    .sort((a, b) => {
      if (b.shared !== a.shared) return b.shared - a.shared;
      return a.article.date < b.article.date ? 1 : -1;
    });

  const related = scored.slice(0, limit).map((s) => s.article);
  if (related.length >= limit) return related;

  // Backfill with latest live posts we haven't already picked.
  const picked = new Set([slug, ...related.map((r) => r.slug)]);
  const filler = all
    .filter((a) => !picked.has(a.slug) && !a.archived)
    .slice(0, limit - related.length);

  return [...related, ...filler];
}
