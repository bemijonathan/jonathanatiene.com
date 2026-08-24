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
  image?: string;
  canonical?: string;
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
  image?: string;
  canonical?: string;
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
        image: fm.image,
        canonical: fm.canonical,
        readingTimeMinutes: Math.max(1, Math.round(stats.minutes)),
        wordCount: stats.words,
        content,
      } satisfies Article;
    }),
  );

  return articles
    .filter((a) => (process.env.NODE_ENV === "production" ? !a.draft : true))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
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
  const featured = all.filter((a) => a.featured);
  return featured.length ? featured : all.slice(0, 1);
}

export async function getLatestArticles(limit = 5): Promise<Article[]> {
  const all = await getAllArticles();
  return all.slice(0, limit);
}

export async function getTopics(): Promise<string[]> {
  const all = await getAllArticles();
  const set = new Set<string>();
  for (const a of all) for (const t of a.topics) set.add(t);
  return [...set].sort();
}
