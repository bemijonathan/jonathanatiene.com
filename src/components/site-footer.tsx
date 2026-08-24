import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href={site.social.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.social.x} target="_blank" rel="noreferrer">
            X
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link href="/rss.xml">RSS</Link>
          <Link href="/press">Press</Link>
        </nav>
      </div>
    </footer>
  );
}
