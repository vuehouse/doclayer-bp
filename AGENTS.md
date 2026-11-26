# About DocLayer

DocLayer is a content framework for documentation sites and blogs. Authors write Markdown; the module turns that into a themed app with navigation, layout, and `Dl*` content components.

It is built on Vue, Nuxt, Nuxt Content, and Nuxt UI. The published module is `@vuehouse/dl`.

[DocLayer](https://doclayer.dev/docs) product docs.

This repository is a standalone boilerplate that consumes `@vuehouse/dl`. Prefer existing module primitives over local replacements. Do not treat this repo as the module source.

## Agent rules

- Treat `@vuehouse/dl` (`node_modules/@vuehouse/dl`) as the source of truth for theme, schema, utilities, and content components.
- Configure the module before duplicating functionality locally.
- Keep local overrides minimal and intentional.
- Prefer existing content components over custom markup.
- Avoid broad global style overrides unless necessary.
- Keep changes scoped. Inspect nearby files before editing.
- Start from the files named in the task, then search and follow imports. Do not explore unrelated files.
- Patch, do not rewrite, unless a rewrite is requested.
- If requirements are unclear, ask or stop instead of inventing behavior.
- Ask before creating new files or directories.
- Do not add one-off hardcoded workarounds, `node_modules` patches, or commented-out hacks.
- Never create new scripts if not necessary. Always prefer existing and native solutions.
- Do not perform destructive git operations.

## Where to look first

- App content: `content/` (starter collection is `content/docs/`)
- Content contract: `content/AGENTS.md`
- App config: `app/app.config.ts` (main customization); `nuxt.config.ts` stays minimal
- Env: `.env.example` (`DL_*` branding, SEO, search, and related settings)
- Local styles: `app/assets/styles.css`
- Local components: `app/components/` (custom content components go in `app/components/content/`)
- Installed module: `node_modules/@vuehouse/dl/` (this app only ships `@vuehouse/dl`; do not assume optional add-ons)
- Content component sources: `node_modules/@vuehouse/dl/dist/runtime/components/content/`
- Guidelines:
  - [writing content](https://doclayer.dev/docs/guidelines/writing-content)
  - [components catalog](https://doclayer.dev/docs/components)
  - [utilities catalog](https://doclayer.dev/docs/utilities)
- Package manager: `pnpm`
- On-demand skills: `.agents/skills/` (see [Skills](#skills) for details)

## Commands

- Dev: `pnpm dev`
- Lint: `pnpm lint`
- Build: `pnpm build`
- Preview: `pnpm preview`
- Do not run `pnpm build` to verify work.
- When running tests, use a single Node process. Close it before starting another.

## Skills

Read the matching `SKILL.md` from '.agents/skills/' when the task fits. Do not paste skill bodies into chat.

- `write-doclayer-content-page` — create or edit Markdown in `content/`
- `reuse-doclayer-content-component` — prefer existing `Dl*` components before custom markup
- `create-doclayer-content-component` — new Vue content components in `app/components/content/`

## Optimize for

- Keep the app building cleanly with the module.
- Reuse module primitives before adding local abstractions.
- Keep edits easy to review.
