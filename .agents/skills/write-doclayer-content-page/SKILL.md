---
name: write-doclayer-content-page
description: Write or edit DocLayer Markdown content pages using MDC components, frontmatter, navigation.yml, and existing pages as examples. Use when creating, updating, or restructuring docs, blog, or landing Markdown in content/.
---

# Write a DocLayer content page

Read first:

- `content/AGENTS.md`,
- guidelines:
  - [Writing content](https://doclayer.dev/docs/guidelines/writing-content),
  - [Components catalog](https://doclayer.dev/docs/components),
- one (or more) existing page(s) in the same collection.

Then:

1. Reuse `DlCode`, `DlCallout`, `DlLink`, `DlTooltip`, `DlImage`, `DlStepper`, `DlPrompter`, `DlRenderer` as documented.
2. The landing page is `content/docs/landing/index.md` and may also use `DlHero`, `DlHeading`, `DlFeaturesGrid`, `DlNewsletter`, `DlTypeman`. Do not treat it like a normal docs page.
3. Stay in `content/docs/` unless asked to add another collection.
4. Always try to reuse the shared Markdown components from the `_shared` directory; render them with `DlRenderer`.
5. Copy structure from a nearby page instead of inventing a new layout.
6. Do not guess props. Open the component docs, or the Vue source in `node_modules/@vuehouse/dl/dist/runtime/components/content/` only if the docs page is not enough.
7. Add `DlPrompter` phrases for questions a reader would actually ask.
8. Keep frontmatter to `title` and `description` plus `_local` when page-scoped data is needed.
9. When styling inside the table, and rules should propagate for the whole table (e.g. cell `min-width`), apply CSS only for the first row and the first column, as it propagates to the rest of the table.
10. Report which example page you copied and what remains unverified in `pnpm dev`. Do not run `pnpm build`.
11. Never write:
    - `~` or `@` characters for relative paths (aliases),
    - HTML like characters like: →, …, etc. (not allowed in comments, use native characters instead).
