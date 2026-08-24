import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

function A({ href = "", ...rest }: ComponentPropsWithoutRef<"a">) {
  const isExternal = /^https?:\/\//.test(href) && !href.includes("bemijonathan.com");
  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
  }
  return <Link href={href} {...rest} />;
}

function Callout({
  children,
  tone = "note",
}: {
  children: ReactNode;
  tone?: "note" | "warn" | "insight";
}) {
  const toneClass =
    tone === "warn"
      ? "border-l-accent"
      : tone === "insight"
        ? "border-l-accent"
        : "border-l-border";
  return (
    <aside
      className={`my-8 border-l-2 ${toneClass} bg-surface/60 px-5 py-4 text-[0.98em] not-italic text-muted`}
    >
      {children}
    </aside>
  );
}

function Aside({ children }: { children: ReactNode }) {
  return (
    <aside className="my-6 border-t border-b border-border py-4 text-[0.95em] text-muted">
      {children}
    </aside>
  );
}

function Figure({
  src,
  alt,
  caption,
  width = 1200,
  height = 720,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8">
      <Image src={src} alt={alt} width={width} height={height} className="rounded-md" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Quote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote>
      {children}
      {cite ? <footer className="mt-2 text-sm text-muted">— {cite}</footer> : null}
    </blockquote>
  );
}

function Definition({ term, children }: { term: string; children: ReactNode }) {
  return (
    <dl className="my-6">
      <dt className="font-sans font-semibold text-foreground">{term}</dt>
      <dd className="mt-1 text-muted">{children}</dd>
    </dl>
  );
}

export const mdxComponents = {
  a: A,
  Callout,
  Aside,
  Figure,
  Quote,
  Definition,
};
