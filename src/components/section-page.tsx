import type { ReactNode } from "react";

export function SectionPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-foreground">
          {title}
        </h1>
        <p className="mt-4 font-serif text-lg text-muted">{intro}</p>
      </header>
      {children ? <div className="mt-16">{children}</div> : null}
    </div>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <p className="font-sans text-xs uppercase tracking-[0.18em] text-subtle">{children}</p>
  );
}
