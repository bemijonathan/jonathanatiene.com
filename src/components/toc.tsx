import type { TocHeading } from "@/lib/toc";

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  if (headings.length < 3) return null;

  return (
    <nav aria-label="Table of contents" className="my-10 border-y border-border py-6">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-subtle">
        Contents
      </p>
      <ol className="mt-3 space-y-1.5 font-sans text-sm">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.depth === 3 ? "ml-4 text-muted" : "text-foreground"}
          >
            <a
              href={`#${h.id}`}
              className="hover:text-accent transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
