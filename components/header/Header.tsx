"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import zoikoGroupLogo from "@/public/zoiko-group-logo.png";
import { contactItem, navItems } from "./nav-items";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:h-32">
        <Link href="/" className="shrink-0" aria-label="Zoiko Group — home">
          <Image
            src={zoikoGroupLogo}
            alt="Zoiko Group"
            priority
            className="h-10 w-auto lg:h-16"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[17px] transition-colors hover:text-brand-teal ${
                  active
                    ? "font-semibold text-brand-teal"
                    : "font-medium text-brand-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={contactItem.href}
            className="rounded-full border-2 border-brand-navy px-8 py-2.5 text-[17px] font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            {contactItem.label}
          </Link>
        </nav>

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
                className="inline-block rounded-full border-2 border-brand-navy px-8 py-2.5 text-[17px] font-semibold text-brand-navy"
              >
                {contactItem.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
