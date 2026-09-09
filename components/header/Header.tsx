"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import zoikoGroupLogo from "@/public/zoiko-group-logo.png";
import { contactItem, navItems } from "./nav-items";
import SearchOverlay from "./SearchOverlay";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_1px_2px_rgba(16,55,92,0.06)]">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-20">
        <Link href="/" className="shrink-0" aria-label="Zoiko Group — home">
          <Image
            src={zoikoGroupLogo}
            alt="Zoiko Group"
            priority
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-7 lg:flex xl:gap-9"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[15px] transition-colors hover:text-brand-teal ${
                  active
                    ? "font-semibold text-brand-teal"
                    : "font-medium text-brand-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          <SearchOverlay />

          <button
            type="button"
            aria-label="Region and language"
            className="text-brand-ink transition-colors hover:text-brand-teal"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9s1.2-6.5 3.6-9Z" />
            </svg>
          </button>

          <Link
            href={contactItem.href}
            className="rounded-full bg-brand-navy px-7 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            {contactItem.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="mx-auto max-w-7xl border-t border-gray-100 bg-white px-6 pb-6 pt-2 sm:px-8 lg:hidden"
        >
          <ul className="flex flex-col">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 text-[17px] ${
                      active
                        ? "font-semibold text-brand-teal"
                        : "font-medium text-brand-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-3">
              <Link
                href={contactItem.href}
                onClick={closeMenu}
                className="inline-block rounded-full bg-brand-navy px-8 py-2.5 text-[17px] font-semibold text-white"
              >
                {contactItem.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Accent bar under the whole header. */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full bg-linear-to-r from-brand-gradient-from via-brand-teal to-brand-sky"
      />
    </header>
  );
}
