import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon, ChevronRightIcon } from "./mega-menu-icons";
import type { MegaMenuItem } from "./mega-menu-data";

function ColumnList({
  column,
  onNavigate,
}: {
  column: MegaMenuItem["columns"][number];
  onNavigate: () => void;
}) {
  const Icon = column.icon;
  return (
    <div>
      {Icon && (
        <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-skybg text-brand-teal">
          <Icon className="h-4 w-4" />
        </span>
      )}
      <p className="font-highlight text-[16px] font-bold text-brand-heading">
        {column.heading}
      </p>
      <ul className="mt-5 space-y-10">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="group flex items-center justify-between gap-3 text-sm text-brand-muted transition-colors hover:text-brand-teal"
            >
              {link.label}
              {!Icon && (
                <ChevronRightIcon className="h-3.5 w-3.5 shrink-0 text-brand-light transition-colors group-hover:text-brand-teal" />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SidePanel({
  panel,
  onNavigate,
}: {
  panel: NonNullable<MegaMenuItem["panel"]>;
  onNavigate: () => void;
}) {
  if (panel.kind === "cta") {
    return (
      <div className="flex h-full flex-col">
        <p className="text-xs font-bold tracking-wide text-brand-muted uppercase">
          {panel.eyebrow}
        </p>
        <h3 className="mt-2 text-lg font-bold text-brand-ink">{panel.heading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          {panel.body}
        </p>
        <Link
          href={panel.ctaHref}
          onClick={onNavigate}
          className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowUpRightIcon className="h-4 w-4 rotate-45" />
          </span>
          {panel.ctaLabel}
        </Link>
        <p className="mt-auto pt-6 text-xs text-brand-light">{panel.footnote}</p>
      </div>
    );
  }

  if (panel.kind === "quote") {
    return (
      <div className="flex h-full flex-col justify-between">
        <p className="font-serif text-lg leading-snug font-medium text-brand-deep">
          {panel.body}
        </p>
        <Link
          href={panel.ctaHref}
          onClick={onNavigate}
          className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal text-white transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowUpRightIcon className="h-4 w-4 rotate-45" />
          </span>
          {panel.ctaLabel}
        </Link>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[320px] flex-col justify-between p-10">
      <Image
        src={panel.image}
        alt=""
        aria-hidden="true"
        fill
        sizes="300px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-deep/70" />
      <div className="relative">
        <p className="text-xs font-bold tracking-wide text-white/70 uppercase">
          {panel.eyebrow}
        </p>
        <h3 className="mt-2 text-lg font-bold text-white">{panel.heading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{panel.body}</p>
      </div>
      <div className="relative ml-auto w-fit border-t border-white/40 pt-3 text-right">
        <p className="text-xs text-white/70">{panel.caption}</p>
      </div>
    </div>
  );
}

export default function MegaMenuPanel({
  item,
  onNavigate,
}: {
  item: MegaMenuItem;
  onNavigate: () => void;
}) {
  const panelFirst = item.panelPosition === "left";
  const wide = item.columns.length >= 4;

  const columnsGrid = (
    <div
      className={`grid gap-y-10 divide-brand-border sm:grid-cols-2 sm:divide-x ${
        wide ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {item.columns.map((column) => (
        <div
          key={column.heading + column.links[0]?.label}
          className="px-4 first:pl-0 last:pr-0"
        >
          <ColumnList column={column} onNavigate={onNavigate} />
        </div>
      ))}
    </div>
  );

  const footer = (align: "start" | "end") =>
    item.footerLink && (
      <div
        className={`mt-8 flex border-t border-brand-border pt-6 ${
          align === "start" ? "justify-start" : "justify-end"
        }`}
      >
        <Link
          href={item.footerLink.href}
          onClick={onNavigate}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-teal"
        >
          {item.footerLink.label}
          <ArrowUpRightIcon className="h-4 w-4 rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    );

  if (!item.panel) {
    return (
      <div className="px-8 py-16">
        {columnsGrid}
        {footer("start")}
      </div>
    );
  }

  // The panel — whichever kind — fills the full height of the card
  // edge-to-edge (the card's own overflow-hidden + rounded corners clip
  // it), while the columns + footer form their own independent stack next
  // to it. That's why "View all…" lines up under the columns rather than
  // under the panel, and why the panel never reads as a separate boxed
  // card floating with its own margin.
  const isImage = item.panel.kind === "image";
  const panelBlock = (
    <div
      className={`shrink-0 lg:w-[300px] ${isImage ? "" : "bg-[#F5F5F2] px-8 py-16"} ${
        panelFirst ? "lg:border-r" : "lg:border-l"
      } lg:border-brand-border`}
    >
      <SidePanel panel={item.panel} onNavigate={onNavigate} />
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      {panelFirst && panelBlock}
      <div className="flex-1 px-8 py-16">
        {columnsGrid}
        {footer(isImage ? "end" : "start")}
      </div>
      {!panelFirst && panelBlock}
    </div>
  );
}
