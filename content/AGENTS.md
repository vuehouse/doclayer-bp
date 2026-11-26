# Content author rules

DocLayer is a content framework on top of Vue, Nuxt, Nuxt Content, and Nuxt UI. Pages are Markdown rendered by `@vuehouse/dl`.
Write for the readers of this site, not for people reading Vue source.

## Voice

- Be precise and instructional. Prefer examples over theory.
- Do not invent APIs, props, or components. Read the writing guide and an existing page first.

## Where to look first

- Before writing or editing a page, read guidelines:
  - [Writing content](https://doclayer.dev/docs/guidelines/writing-content),
  - [Components catalog](https://doclayer.dev/docs/components).
- One existing page in the same collection.
- For step-by-step page work, use the `write-doclayer-content-page` skill in `.agents/skills/` (see root `AGENTS.md`).

## Hard rules

- Required frontmatter: `title`, `description`.
- Put a `.navigation.yml` (`title`, `icon`) in each collection section (e.g. `content/docs/<section>/<page>.md`).
- Always follow the `.markdownlint.js` rules.
- Starter collection is `content/docs/`. Add `blog` or another collection only when asked.
- Treat `content/docs/landing/index.md` as the landing page. It uses landing blocks; do not treat it like a normal docs page.
- Nest at most two levels: `content/docs/section/page.md`.
- Order files and folders with numeric prefixes (`01.`, `02.`); group by context with tenths (`10.`, `11.`, `20.`, `21.`).
- Start in-page headings at `H2`. Keep hierarchy consecutive.
- Always use `DlLink` for internal links (path map markers come from `app/app.config.ts` and `.nuxt/doclayer/path-map.json`); verify them.
- Always wrap code samples in `DlCode`; never within the standalone backticks (```).
- Use `DlCallout` for notes (`note` for internal tips, `info` for general knowledge, `warning` for risk).
- Use `DlTooltip` for short inline definitions.
- Use `DlRenderer` for repeated Markdown snippets, located within the `content/_shared` directory; prefer using/creating them; verify names.
- Use `DlPrompter` for hidden synonyms and assistant recall. Do not put secrets there.
- Use `pnpm` to define commands.

## Optional rules

- If a DocLayer component already covers the need, use it. Do not drop to raw HTML or ad-hoc Markdown layouts.
- Verify in the running app (`pnpm dev`).
- Check heading hierarchy, sidebar order, links and its structure, callout types, and that no required component was replaced with raw markup. Do not run `pnpm build` to verify.
