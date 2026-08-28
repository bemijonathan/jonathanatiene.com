import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { site } from "@/lib/site";

const nav = [
  { href: "/writing", label: "Writing" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/talks", label: "Talks" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 sm:py-5">
          <Link
            href="/"
            className="font-serif text-lg font-medium tracking-tight text-foreground"
          >
            {site.name.split(" ")[0]}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
