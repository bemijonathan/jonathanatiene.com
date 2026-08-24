import Link from "next/link";
import { getFeaturedArticles, getLatestArticles } from "@/lib/content";
import { site } from "@/lib/site";

const currentlyExploring = [
  "Agentic memory",
  "Behavioural intelligence",
  "AI system reliability",
  "Human decision-making",
  "Technical stylistics",
];

export default async function HomePage() {
  const [featured] = await getFeaturedArticles();
  const latest = (await getLatestArticles(4)).filter((a) => a.slug !== featured?.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      {/* Hero */}
      <section className="max-w-2xl">
        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-3 font-sans text-lg text-muted">{site.descriptor}</p>
        <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-foreground/90">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="/writing"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            Read my writing →
          </Link>
          <Link href="/about" className="text-muted hover:text-foreground">
            About me
          </Link>
        </div>
      </section>

      {/* Featured */}
      {featured ? (
        <section className="mt-24">
          <SectionLabel>Featured</SectionLabel>
          <Link href={`/writing/${featured.slug}`} className="group mt-4 block">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-muted">
              {featured.description}
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-widest text-subtle">
              {featured.topics[0] ?? "Writing"} · {featured.readingTimeMinutes} min
            </p>
          </Link>

          {latest.length > 0 ? (
            <ul className="mt-10 space-y-6 border-t border-border pt-8">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/writing/${a.slug}`}
                    className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent">
                      {a.title}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                      {a.topics[0] ?? "Writing"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      {/* Currently exploring */}
      <section className="mt-24">
        <SectionLabel>Currently exploring</SectionLabel>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
          {currentlyExploring.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section className="mt-24 border-t border-border pt-10">
        <SectionLabel>Essays in your inbox</SectionLabel>
        <p className="mt-4 max-w-xl font-serif text-lg text-muted">
          Occasional writing about intelligent systems, engineering and human behaviour.
        </p>
        <form
          action="https://bemijonathan.substack.com/api/v1/free"
          method="post"
          target="_blank"
          className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="flex-1 border-b border-border bg-transparent px-1 py-2 font-sans text-base placeholder:text-subtle focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="font-sans text-sm uppercase tracking-widest text-accent hover:text-accent-hover"
          >
            Subscribe →
          </button>
        </form>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs uppercase tracking-[0.18em] text-subtle">{children}</p>
  );
}
