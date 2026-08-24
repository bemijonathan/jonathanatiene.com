import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug } from "@/lib/content";
import { mdxComponents } from "@/components/mdx";
import { mdxOptions } from "@/lib/mdx-options";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

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

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <header className="max-w-2xl">
        {article.topics[0] ? (
          <p className="font-sans text-xs uppercase tracking-[0.18em] text-accent">
            {article.topics[0]}
          </p>
        ) : null}
        <h1 className="mt-4 font-serif text-4xl leading-[1.15] tracking-tight text-foreground sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-5 font-serif text-xl leading-relaxed text-muted">
          {article.description}
        </p>
        <p className="mt-6 font-sans text-sm text-subtle">
          {site.name}
          <span className="mx-2">·</span>
          <time dateTime={article.date}>{publishedDate}</time>
          <span className="mx-2">·</span>
          {article.readingTimeMinutes} min
        </p>
      </header>

      <hr className="my-12 border-border" />

      <div className="prose">
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{ mdxOptions }}
        />
      </div>

      <footer className="mt-20 border-t border-border pt-8">
        <Link href="/writing" className="font-sans text-sm text-muted hover:text-foreground">
          ← All writing
        </Link>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
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
