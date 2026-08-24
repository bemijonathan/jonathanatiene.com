import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getFeaturedArticles, getTopics } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, technical notes and ideas about intelligent systems, engineering and human behaviour.",
  alternates: { canonical: "/writing" },
};

export default async function WritingIndex() {
  const [featured] = await getFeaturedArticles();
  const all = await getAllArticles();
  const latest = all.filter((a) => a.slug !== featured?.slug);
  const topics = await getTopics();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground">
          Writing
        </h1>
        <p className="mt-4 font-serif text-lg text-muted">
          Essays, technical notes and ideas about intelligent systems, engineering and human
          behaviour.
        </p>
      </header>

      {featured ? (
        <section className="mt-16">
          <Label>Featured</Label>
          <Link href={`/writing/${featured.slug}`} className="group mt-4 block">
            <h2 className="font-serif text-3xl leading-tight text-foreground group-hover:text-accent">
              {featured.title}
            </h2>
            <p className="mt-2 font-serif text-lg text-muted">{featured.description}</p>
          </Link>
        </section>
      ) : null}

      <section className="mt-20">
        <Label>Latest</Label>
        <ul className="mt-6 divide-y divide-border border-t border-border">
          {latest.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/writing/${a.slug}`}
                className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div className="max-w-2xl">
                  <h3 className="font-serif text-xl leading-snug text-foreground group-hover:text-accent">
                    {a.title}
                  </h3>
                  <p className="mt-1 font-serif text-base text-muted">{a.description}</p>
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
      </section>

      {topics.length > 0 ? (
        <section className="mt-20">
          <Label>Topics</Label>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
            {topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs uppercase tracking-[0.18em] text-subtle">{children}</p>
  );
}
