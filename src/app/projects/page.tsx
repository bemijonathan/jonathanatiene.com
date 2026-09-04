import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage, Label } from "@/components/section-page";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Independent products, open-source tools and research experiments — with a focus on agentic systems, applied AI, and infrastructure for reliable production AI.",
  alternates: { canonical: "/projects" },
};

const featured = projects.filter((p) => p.featured);
const other = projects.filter((p) => !p.featured && p.type !== "Archive");
const archive = projects.filter((p) => p.type === "Archive");

export default function ProjectsPage() {
  return (
    <SectionPage
      title="Projects"
      intro="I use projects to explore ideas outside proprietary commercial work — agentic systems and AI infrastructure, applied machine-learning research, and tools I want to exist."
    >
      <section>
        <Label>Featured</Label>
        <ul className="mt-6 space-y-14 border-t border-border pt-8">
          {featured.map((p) => (
            <li key={p.slug}>
              {p.image ? (
                <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-md bg-surface">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : null}

              <p className="font-sans text-xs uppercase tracking-widest text-accent">
                {p.type} · {p.date}
              </p>
              <h3 className="mt-2 font-serif text-2xl leading-snug text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/90">
                {p.summary}
              </p>

              {(p.problem || p.whyInteresting || p.learned) && (
                <dl className="mt-6 space-y-4">
                  {p.problem ? (
                    <div>
                      <dt className="font-sans text-xs uppercase tracking-widest text-subtle">
                        The problem
                      </dt>
                      <dd className="mt-1 font-serif text-base text-muted">{p.problem}</dd>
                    </div>
                  ) : null}
                  {p.whyInteresting ? (
                    <div>
                      <dt className="font-sans text-xs uppercase tracking-widest text-subtle">
                        Why it&apos;s interesting
                      </dt>
                      <dd className="mt-1 font-serif text-base text-muted">
                        {p.whyInteresting}
                      </dd>
                    </div>
                  ) : null}
                  {p.learned ? (
                    <div>
                      <dt className="font-sans text-xs uppercase tracking-widest text-subtle">
                        What I learned
                      </dt>
                      <dd className="mt-1 font-serif text-base text-muted">{p.learned}</dd>
                    </div>
                  ) : null}
                </dl>
              )}

              <p className="mt-5 flex flex-wrap gap-x-6 text-sm">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
                  >
                    Visit →
                  </a>
                ) : null}
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
                  >
                    GitHub →
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {other.length > 0 ? (
        <section className="mt-20">
          <Label>Also</Label>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {other.map((p) => (
              <li key={p.slug} className="py-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <div className="max-w-2xl">
                    <p className="font-serif text-lg text-foreground">
                      {p.link || p.github ? (
                        <a
                          href={p.link ?? p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-accent"
                        >
                          {p.title}
                        </a>
                      ) : (
                        p.title
                      )}
                    </p>
                    <p className="mt-1 font-serif text-base text-muted">{p.summary}</p>
                  </div>
                  <p className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                    {p.type} · {p.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {archive.length > 0 ? (
        <section className="mt-20">
          <Label>Archive</Label>
          <p className="mt-3 font-serif text-base text-muted">
            Commercial work from earlier in my career. Included for context, not currency.
          </p>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {archive.map((p) => (
              <li key={p.slug} className="py-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <p className="font-serif text-base text-foreground/90">
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent"
                      >
                        {p.title}
                      </a>
                    ) : (
                      p.title
                    )}
                    <span className="text-muted"> — {p.summary}</span>
                  </p>
                  <p className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                    {p.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </SectionPage>
  );
}
