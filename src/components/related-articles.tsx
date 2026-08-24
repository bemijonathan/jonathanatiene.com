import Link from "next/link";
import type { Article } from "@/lib/content";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="mt-20 border-t border-border pt-10"
    >
      <h2
        id="related-heading"
        className="font-sans text-xs uppercase tracking-[0.18em] text-subtle"
      >
        Related
      </h2>
      <ul className="mt-6 divide-y divide-border border-t border-border">
        {articles.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/writing/${a.slug}`}
              className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="max-w-2xl">
                <p className="font-serif text-lg text-foreground group-hover:text-accent">
                  {a.title}
                </p>
                {a.description ? (
                  <p className="mt-1 font-serif text-base text-muted">
                    {a.description}
                  </p>
                ) : null}
              </div>
              <span className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                {a.topics[0] ?? "Writing"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
