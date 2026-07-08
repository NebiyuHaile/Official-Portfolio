"use client";

import { useState } from "react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-border bg-bg/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 font-mono text-sm sm:px-10 lg:px-16">
          <a href="#hero" className="flex items-center gap-2 text-fg">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            nebiyu.dev
          </a>

          <nav className="hidden items-center gap-6 text-fg-muted md:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="text-fg-muted md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-14 bottom-0 flex flex-col gap-1 bg-bg px-6 py-6 font-mono text-base md:hidden">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 text-fg-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
