"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import zoikoGroupLogo from "@/public/zoiko-group-logo.png";
import MegaMenuPanel from "./MegaMenuPanel";
import { megaMenuItems } from "./mega-menu-data";
import { contactItem } from "./nav-items";
import TopUtilityBar from "./TopUtilityBar";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenLabel, setMobileOpenLabel] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openNow = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenLabel(label);
  };

  const closeSoon = () => {
    closeTimeout.current = setTimeout(() => setOpenLabel(null), 150);
  };

  const closeNow = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenLabel(null);
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeNow();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenLabel(null);
    setMenuOpen(false);
  }

  const activeItem = megaMenuItems.find((item) => item.label === openLabel);

  return (
    <>
      <TopUtilityBar />

      {/* This must be a direct child of <body> (not nested inside a short
          wrapper) so its containing block is tall enough for `sticky` to
          keep working past the point where TopUtilityBar scrolls away. */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white transition-shadow duration-300 ${
          scrolled
            ? "border-transparent shadow-[0_4px_16px_rgba(16,55,92,0.1)]"
            : "border-gray-100 shadow-none"
        }`}
        onMouseLeave={closeSoon}
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between px-6 transition-[height] duration-300 sm:px-8 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          <Link href="/" className="shrink-0" aria-label="Zoiko Group — home">
            <Image
              src={zoikoGroupLogo}
              alt="Zoiko Group"
              priority
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-7 lg:h-8" : "h-8 lg:h-10"
              }`}
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-7 lg:flex xl:gap-9"
          >
            {megaMenuItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => openNow(item.label)}
                  aria-current={active ? "page" : undefined}
                  aria-expanded={openLabel === item.label}
                  className={`border-b-2 pb-1 text-[15px] transition-colors hover:text-brand-teal ${
                    active
                      ? "border-brand-teal font-semibold text-brand-heading"
                      : "border-transparent font-medium text-brand-heading"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
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

        {/* Desktop mega menu */}
        <div
          className={`absolute inset-x-0 top-full hidden justify-center transition-all duration-200 lg:flex ${
            activeItem
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-1 opacity-0"
          }`}
        >
          {/* Hover tracking is on this visible card, not the full-width
              wrapper above — otherwise moving the cursor into the empty
              space beside the card still counts as "inside" and the menu
              never closes. */}
          <div
            className="mx-6 w-full max-w-7xl overflow-hidden rounded-3xl border border-brand-border bg-white shadow-xl"
            onMouseEnter={() => activeItem && openNow(activeItem.label)}
            onMouseLeave={closeSoon}
          >
            {activeItem && (
              <MegaMenuPanel item={activeItem} onNavigate={closeNow} />
            )}
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100 bg-white px-6 pb-6 pt-2 sm:px-8 lg:hidden"
          >
            <ul className="flex flex-col divide-y divide-gray-100">
              {megaMenuItems.map((item) => {
                const expanded = mobileOpenLabel === item.label;
                return (
                  <li key={item.label} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className="block flex-1 py-3 text-[16px] font-medium text-brand-heading"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`Toggle ${item.label} submenu`}
                        onClick={() =>
                          setMobileOpenLabel(expanded ? null : item.label)
                        }
                        className="p-3 text-brand-muted"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>

                    {expanded && (
                      <div className="pb-4 pl-1">
                        {item.columns.map((column) => (
                          <div key={column.heading} className="mb-4">
                            <p className="text-xs font-bold tracking-wide text-brand-muted uppercase">
                              {column.heading}
                            </p>
                            <ul className="mt-2 space-y-2">
                              {column.links.map((link) => (
                                <li key={link.label}>
                                  <Link
                                    href={link.href}
                                    className="block text-sm text-brand-heading"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                        {item.footerLink && (
                          <Link
                            href={item.footerLink.href}
                            className="text-sm font-semibold text-brand-teal"
                          >
                            {item.footerLink.label} →
                          </Link>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
              <Link href="/investor-relations" className="text-sm font-medium text-brand-muted">
                Investor Relations
              </Link>
              <Link href="/careers" className="text-sm font-medium text-brand-muted">
                Careers
              </Link>
              <Link href="/global-reach" className="text-sm font-medium text-brand-muted">
                Global Reach
              </Link>
              <Link
                href={contactItem.href}
                className="mt-2 inline-block w-fit rounded-full bg-brand-navy px-8 py-2.5 text-[16px] font-semibold text-white"
              >
                {contactItem.label}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
