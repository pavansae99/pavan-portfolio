"use client";

import { useState } from "react";
import { navigation } from "@/app/data";

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-ink/10 bg-paper/85 px-5 py-3 shadow-sm backdrop-blur-xl md:px-7"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="flex items-center gap-3 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 place-items-center rounded-full bg-ink text-xs font-bold text-paper">
            PL
          </span>
          <span className="hidden text-sm sm:block">Pavan Lankalapalli</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/65 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/85 sm:flex"
        >
          Let&apos;s talk
          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-ink/15 sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0.5 h-0.5 w-5 bg-ink transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-ink transition ${
                open ? "-rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`mx-auto mt-2 max-w-[1400px] overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-card transition-all sm:hidden ${
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-3">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
