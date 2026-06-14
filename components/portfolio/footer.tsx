"use client";

import Link from "next/link";
import { site, social } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.name}. Crafted with care.
        </p>
        <div className="flex items-center gap-3">
          {social.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
