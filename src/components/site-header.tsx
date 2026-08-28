"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/lib/site";

const nav = [
  { href: "/writing", label: "Writing" },
  { href: "/research", label: "Research" },
  { href: "/projects", label: "Projects" },
  { href: "/talks", label: "Talks" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

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
          <button
            type="button"
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsMobileNavOpen((open) => !open)}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border px-3 text-xs font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
          >
            <span>{isMobileNavOpen ? "Close" : "Menu"}</span>
            <span aria-hidden className="text-base leading-none">
              {isMobileNavOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {isMobileNavOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-border py-4 md:hidden"
          >
            <div className="flex flex-col gap-1 text-base text-muted">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="rounded-md px-2 py-2 transition-colors hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm text-muted">
              <span>Appearance</span>
              <ThemeToggle />
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
