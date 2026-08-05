<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project conventions

## Where components live

`components/` holds **only** `header/` and `footer/`. Nothing else belongs there.

Every other component lives in the `components/` folder of the page that uses
it, and is imported with a relative path (`./Prose`, `./ConsultationForm`).
A component used by several pages is **copied into each one** — do not extract
it into a shared folder, and do not import across page folders. Duplication is
intended here; keep the copies in step by hand when one changes.

Currently duplicated this way: `Prose.tsx` (leadership, sustainability,
investor-relations, contact/suppliers), `ConsultationForm.tsx` +
`consultation-actions.ts` (home, careers, contact-us, portfolio),
`BrandStrip.tsx` and `ContactSection.tsx` (home, careers), `icons.tsx`
(home, careers).

## Building pages from Figma

Pages are built from Figma dev-mode exports. Convert absolute positioning to
flow layout, drop the header and footer (they come from `app/layout.tsx`), and
map colours onto the brand tokens in `app/globals.css` rather than pasting raw
hex values. Follow the export's typography exactly — heading colour and weight
vary per page, and some headings are deliberately set at body weight.

Asset filenames must not contain spaces; Turbopack cannot statically import
them.
