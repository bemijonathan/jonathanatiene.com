import Link from "next/link";

export type Crumb = { name: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-sans text-xs uppercase tracking-[0.18em] text-subtle"
    >
      <ol className="flex flex-wrap items-center gap-x-2">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-x-2">
              {c.href && !isLast ? (
                <Link href={c.href} className="hover:text-foreground">
                  {c.name}
                </Link>
              ) : (
                <span className={isLast ? "text-muted" : "text-subtle"}>{c.name}</span>
              )}
              {!isLast ? <span aria-hidden>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
