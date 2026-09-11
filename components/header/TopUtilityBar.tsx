import Link from "next/link";

import { BriefcaseIcon, GlobeIcon } from "./mega-menu-icons";
import SearchOverlay from "./SearchOverlay";

const linkClass =
  "flex items-center gap-1.5 text-brand-utility-text transition-colors hover:text-brand-teal";

export default function TopUtilityBar() {
  return (
    <div className="hidden bg-brand-utility-bg lg:block">
      <div className="font-highlight mx-auto flex h-[40px] w-full max-w-7xl items-center justify-end gap-6 px-8 text-sm font-normal">
        <Link href="/investor-relations" className={linkClass}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M8 7h9v9" />
          </svg>
          Investor Relations
        </Link>
        <Link href="/careers" className={linkClass}>
          <BriefcaseIcon className="h-3.5 w-3.5" />
          Careers
        </Link>
        <Link href="/global-reach" className={linkClass}>
          <GlobeIcon className="h-3.5 w-3.5" />
          Global Reach
        </Link>
        <SearchOverlay className={`${linkClass} h-auto p-0`} />
      </div>
    </div>
  );
}
