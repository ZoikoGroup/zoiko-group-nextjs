"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { SearchIcon } from "./mega-menu-icons";
import { searchIndex } from "./search-index";

export default function SearchOverlay({
  className = "",
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    setQuery("");
  }

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? searchIndex.filter((page) =>
        `${page.title} ${page.description}`.toLowerCase().includes(trimmed),
      )
    : [];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close search" : "Search"}
        aria-expanded={open}
        className={className || "text-brand-ink transition-colors hover:text-brand-teal"}
      >
        <SearchIcon className="h-4 w-4" />
        Search
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close search"
            onClick={close}
            className="fixed inset-0 z-40 cursor-default"
          />

          <div
            role="dialog"
            aria-label="Site search"
            className="absolute right-0 top-full z-50 mt-3 w-80 rounded-2xl border border-brand-border bg-white p-4 shadow-card sm:w-96"
          >
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search Zoiko Group…"
              className="w-full rounded-full border border-brand-border px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-teal"
            />

            {trimmed && (
              <ul className="mt-3 max-h-80 space-y-1 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((page) => (
                    <li key={page.href}>
                      <Link
                        href={page.href}
                        onClick={close}
                        className="block rounded-lg px-3 py-2 transition-colors hover:bg-brand-skybg"
                      >
                        <span className="block text-sm font-semibold text-brand-navy">
                          {page.title}
                        </span>
                        <span className="block text-xs text-brand-muted">
                          {page.description}
                        </span>
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-2 text-sm text-brand-muted">
                    No pages found for &ldquo;{query}&rdquo;.
                  </li>
                )}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}
