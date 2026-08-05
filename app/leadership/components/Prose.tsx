import type { ReactNode } from "react";

/** Body copy — the grey the long-form pages use for paragraphs and list items. */
export const proseBody =
  "text-base leading-8 font-normal text-brand-grey lg:text-xl";

/** Section and sub-section headings — bold black. */
export const proseHeading = "text-lg leading-8 font-bold text-black lg:text-xl";

/** Accent heading — the teal some pages use in place of black. */
export const proseHeadingAccent =
  "text-lg leading-8 font-bold text-brand-teal lg:text-xl";

/** The heavier accent weight the design reserves for a page's opening and
    closing calls to action. */
export const proseHeadingAccentStrong =
  "text-lg leading-8 font-extrabold text-brand-teal lg:text-xl";

/** Semibold grey sub-heading, sitting between a heading and body copy. */
export const proseSubheading =
  "text-base leading-8 font-semibold text-brand-grey lg:text-xl";

/** These pages are one continuous sky panel; sections only vary their padding. */
export function ProseSection({
  children,
  className = "pt-8",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-brand-skybg ${className}`}>
      <div className="mx-auto w-full max-w-[1055px] px-6">{children}</div>
    </section>
  );
}

/** A dash item, optionally with its own indented sub-items. */
export type DashItem = string | { label: string; items: string[] };

/** Dash markers, not discs — every list in these designs reads "- item". */
export function DashList({ items }: { items: DashItem[] }) {
  return (
    <ul className="mt-1 list-none">
      {items.map((item) =>
        typeof item === "string" ? (
          <li key={item} className={proseBody}>
            {`- ${item}`}
          </li>
        ) : (
          <li key={item.label} className={proseBody}>
            {`- ${item.label}`}
            <ul className="list-none pl-4">
              {item.items.map((child) => (
                <li key={child} className={proseBody}>
                  {`- ${child}`}
                </li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );
}

/** Disc variant, for designs that use real bullets rather than typed dashes. */
export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-1 list-disc pl-6">
      {items.map((item) => (
        <li key={item} className={proseBody}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Numbered variant, for the one list the design sets as "1." … "4.". */
export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="mt-1 list-decimal pl-6">
      {items.map((item) => (
        <li key={item} className={proseBody}>
          {item}
        </li>
      ))}
    </ol>
  );
}
