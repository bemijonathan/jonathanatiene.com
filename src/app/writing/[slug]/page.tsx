import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
  topicToSlug,
} from "@/lib/content";
import { mdxComponents } from "@/components/mdx";
import { mdxOptions } from "@/lib/mdx-options";
import { articleJsonLd, breadcrumbJsonLd, jsonLdString } from "@/lib/seo";
import { site } from "@/lib/site";
import { extractToc } from "@/lib/toc";
import { TableOfContents } from "@/components/toc";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RelatedArticles } from "@/components/related-articles";

const TOC_MIN_WORDS = 1200;

export async function generateStaticParams() {
  const all = await getAllArticles();
  return all.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: PageProps<"/writing/[slug]">,
): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const canonical = article.canonical ?? `/writing/${article.slug}`;
  const ogImage =
    article.image ??
    `/api/og?title=${encodeURIComponent(article.title)}&kicker=${encodeURIComponent(article.topics[0] ?? "Writing")}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: `${site.url}/writing/${article.slug}`,
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [site.name],
      tags: article.topics,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [ogImage],
    },
  };
}

export default async function ArticlePage(
  { params }: PageProps<"/writing/[slug]">,
) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const publishedDate = new Date(article.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const toc = article.wordCount >= TOC_MIN_WORDS ? extractToc(article.content) : [];
  const related = await getRelatedArticles(article.slug, 3);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Breadcrumbs
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Writing", href: "/writing" },
          { name: article.title },
        ]}
      />

      <header className="mt-6 max-w-2xl">
        {article.topics[0] ? (
          <Link
            href={`/writing/topics/${topicToSlug(article.topics[0])}`}
            className="font-sans text-xs uppercase tracking-[0.18em] text-accent hover:text-accent-hover"
          >
            {article.topics[0]}
          </Link>
        ) : null}
        <h1 className="mt-4 font-serif text-4xl leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          {article.title}
        </h1>
        {article.description ? (
          <p className="mt-5 font-serif text-xl leading-relaxed text-muted">
            {article.description}
          </p>
        ) : null}
        <p className="mt-6 font-sans text-sm text-subtle">
          {site.name}
          <span className="mx-2">·</span>
          <time dateTime={article.date}>{publishedDate}</time>
          <span className="mx-2">·</span>
          {article.readingTimeMinutes} min
        </p>
      </header>

      <hr className="my-12 border-border" />

      <TableOfContents headings={toc} />

      <div className="prose">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{ mdxOptions }}
        />
      </div>

      {article.topics.length > 0 ? (
        <p className="mt-16 flex flex-wrap gap-x-4 gap-y-2 font-sans text-xs uppercase tracking-widest">
          {article.topics.map((t) => (
            <Link
              key={t}
              href={`/writing/topics/${topicToSlug(t)}`}
              className="text-subtle hover:text-accent"
            >
              #{t}
            </Link>
          ))}
        </p>
      ) : null}

      <RelatedArticles articles={related} />

      <footer className="mt-16 border-t border-border pt-8">
        <Link href="/writing" className="font-sans text-sm text-muted hover:text-foreground">
          ← All writing
        </Link>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(articleJsonLd(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Writing", path: "/writing" },
              { name: article.title, path: `/writing/${article.slug}` },
            ]),
          ),
        }}
      />
    </article>
  );
}
