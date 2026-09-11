import Image from "next/image";
import Link from "next/link";

import zoikoGroupLogo from "@/public/zoiko-group-logo.png";
import { ArrowRightIcon, SunriseIcon } from "./footer-icons";
import {
  contactCtaLinks,
  contactSupportLinks,
  footerColumns,
  headquarters,
  legalLinks,
  socialLinks,
} from "./footer-links";

// Kept as a constant rather than `new Date()` so the footer stays statically
// prerendered — bump it when the legal line is refreshed.
const COPYRIGHT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 sm:px-8">
        {/* Quick-contact CTA banner */}
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--color-brand-item-heading) 55%, var(--color-brand-gradient-from) 95%)",
          }}
        >
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-2 lg:gap-6 lg:p-12">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Need the right Zoiko Team?
              </h2>
              <p className="mt-2 text-sm text-white/80">
                Get in touch with our global teams for the right support
              </p>

              <ul className="mt-8 space-y-3">
                {contactCtaLinks.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-4 rounded-full bg-white px-5 py-3 shadow-card transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      <item.icon className="h-6 w-6 shrink-0 text-brand-deep" />
                      <span className="flex-1">
                        <span className="font-display block text-[18px] leading-[23.2px] font-bold tracking-[0.26px] text-brand-item-heading">
                          {item.title}
                        </span>
                        <span className="font-highlight block text-[14px] leading-[20.8px] font-normal text-brand-item-heading/60">
                          {item.subtitle}
                        </span>
                      </span>
                      <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand-heading transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative -mr-8 -mb-8 hidden min-h-[280px] sm:-mr-10 sm:-mb-10 lg:-mr-12 lg:-mb-12 lg:block">
              {/* Drop the photo into public/footer/contact-cta.jpg. */}
              <Image
                src="/footer/contact-cta.png"
                alt="A Zoiko Group team member holding a laptop"
                fill
                sizes="480px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Brand + contact info / link groups */}
        <div className="grid gap-12 py-16 lg:grid-cols-[280px_1fr] lg:gap-8">
          <div>
            <Image
              src={zoikoGroupLogo}
              alt="Zoiko Group"
              className="h-9 w-auto"
            />
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">
              A global group building smarter businesses for a more
              connected, sustainable and inclusive tomorrow
            </p>

            <ul className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-brand-navy text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                  >
                    <social.icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-6">
              {headquarters.map((hq) => (
                <div key={hq.label}>
                  <p className="text-xs font-bold tracking-wide text-brand-heading uppercase">
                    {hq.label}
                  </p>
                  <address className="mt-2 text-sm leading-relaxed text-brand-muted not-italic">
                    {hq.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            {[
              footerColumns.slice(0, 3),
              footerColumns.slice(3, 6),
              footerColumns.slice(6, 9),
            ].map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={
                  rowIndex > 0
                    ? "border-t border-brand-border pt-8"
                    : undefined
                }
              >
                <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  {row.map((column) => (
                    <div key={column.heading}>
                      <h3 className="text-xs font-bold tracking-wide text-brand-heading uppercase">
                        {column.heading}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="text-sm text-brand-muted transition-colors hover:text-brand-teal"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-t border-brand-border" />

        {/* Contact & support */}
        <div className="py-8 text-center">
          <p className="text-xs font-bold tracking-wide text-brand-heading uppercase">
            Contact &amp; Support
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center divide-x divide-brand-border">
            {contactSupportLinks.map((link) => (
              <li key={link.label} className="px-4">
                <Link
                  href={link.href}
                  className="text-sm text-brand-muted transition-colors hover:text-brand-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="pb-8 text-center">
          <ul className="flex flex-wrap items-center justify-center divide-x divide-brand-border">
            {legalLinks.map((link) => (
              <li key={link.label} className="px-4">
                <Link
                  href={link.href}
                  className="text-sm text-brand-muted transition-colors hover:text-brand-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full bg-brand-item-heading">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 sm:flex-row sm:px-8">
          <p className="text-xs text-white/70">
            © {COPYRIGHT_YEAR} Zoiko Group Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white">
            <SunriseIcon className="h-5 w-5 shrink-0 text-brand-teal" />
            <p className="text-xs leading-tight font-semibold">
              Smarter Today.
              <br />A Brighter Tomorrow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
