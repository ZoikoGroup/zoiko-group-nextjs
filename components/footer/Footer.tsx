import Link from "next/link";

import { footerColumns, socialLinks } from "./footer-links";

// Kept as a constant rather than `new Date()` so the footer stays statically
// prerendered — bump it when the legal line is refreshed.
const COPYRIGHT_YEAR = 2025;

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 pb-8 sm:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-[17px] font-bold text-brand-teal">
                {column.heading}
              </h2>
              <ul className="mt-6 space-y-5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[17px] leading-relaxed text-brand-muted transition-colors hover:text-brand-teal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-[15px] font-bold text-brand-teal">
              Connect on Social media
            </h2>
            <ul className="mt-5 flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-surface text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-14 border-t border-gray-200" />

        <div className="mt-8 space-y-2 text-center">
          <p className="text-[17px] font-bold text-brand-muted">
            © {COPYRIGHT_YEAR} Zoiko Group Inc., headquartered at 1401 21st
            Street, Sacramento, California 95811
          </p>
          <p className="text-[17px] text-gray-400">
            Designed &amp; powered by Zoiko Web - AI-driven web solutions trusted
            worldwide. Services
          </p>
        </div>
      </div>
    </footer>
  );
}
