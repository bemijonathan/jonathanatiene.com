import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllArticles,
  getArticlesByTopic,
  getTopicMap,
  topicToSlug,
} from "@/lib/content";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdString } from "@/lib/seo";

export async function generateStaticParams() {
  const all = await getAllArticles();
  const topics = new Set<string>();
  for (const a of all) for (const t of a.topics) topics.add(t);
  return [...topics].map((t) => ({ topic: topicToSlug(t) }));
}

export async function generateMetadata(
  { params }: PageProps<"/writing/topics/[topic]">,
): Promise<Metadata> {
  const { topic: topicSlug } = await params;
  const map = await getTopicMap();
  const topic = map.get(topicSlug);
  if (!topic) return {};

  const title = `${topic} — Writing`;
  const description = `Essays and notes on ${topic.toLowerCase()} by ${site.name}.`;

  return {
    title,
    description,
    alternates: { canonical: `/writing/topics/${topicSlug}` },
    openGraph: {
      type: "website",
      title,
      description,
      url: `${site.url}/writing/topics/${topicSlug}`,
    },
  };
}

export default async function TopicPage(
  { params }: PageProps<"/writing/topics/[topic]">,
) {
  const { topic: topicSlug } = await params;
  const map = await getTopicMap();
  const topic = map.get(topicSlug);
  if (!topic) notFound();

  const articles = await getArticlesByTopic(topic);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <nav
        aria-label="Breadcrumb"
        className="font-sans text-xs uppercase tracking-[0.18em] text-subtle"
      >
        <Link href="/writing" className="hover:text-foreground">
          Writing
        </Link>{" "}
        <span aria-hidden> / </span>
        <span className="text-muted">{topic}</span>
      </nav>

      <header className="mt-6 max-w-2xl">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground">
          {topic}
        </h1>
        <p className="mt-4 font-serif text-lg text-muted">
          {articles.length} {articles.length === 1 ? "piece" : "pieces"} on{" "}
          {topic.toLowerCase()}.
        </p>
      </header>

      <ul className="mt-16 divide-y divide-border border-t border-border">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/writing/${a.slug}`}
              className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="max-w-2xl">
                <h2 className="font-serif text-xl leading-snug text-foreground group-hover:text-accent">
                  {a.title}
                </h2>
                {a.description ? (
                  <p className="mt-1 font-serif text-base text-muted">
                    {a.description}
                  </p>
                ) : null}
              </div>
              <time
                dateTime={a.date}
                className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap"
              >
                {new Date(a.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                })}
              </time>
            </Link>
          </li>
        ))}
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Writing", path: "/writing" },
              { name: topic, path: `/writing/topics/${topicSlug}` },
            ]),
          ),
        }}
      />
    </div>
  );
}
