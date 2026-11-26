---
name: create-doclayer-content-component
description: Create a new custom Vue content component for this DocLayer app using DlWrapper and defineDoclayerComponentUi, and put it in app/components/content/. Use when adding a block or inline MDC component, extending content presentation, or building on DlWrapper instead of raw HTML in Markdown.
---

# Create a DocLayer content component

Read first:

- `AGENTS.md` and `content/AGENTS.md`,
- guidelines:
  - [Components catalog](https://doclayer.dev/docs/components) (restricted names),
  - [Building components](https://doclayer.dev/docs/components/building),
- the nearest existing component in `node_modules/@vuehouse/dl/dist/runtime/components/content/` or `app/components/content/` (if available).

Before writing code:

1. Run the reuse check from `reuse-doclayer-content-component`. Do not add a component if a built-in `Dl*` block already fits.
2. Ask before creating a new file or directory.
3. Do **not** use a reserved `Dl*` name. Built-in names always win. Use your own PascalCase filename under `app/components/content/` (MDC resolves it as kebab-case, for example `MyComponent.vue` > `::my-component`). Built-in module components live under `node_modules/@vuehouse/dl/dist/runtime/components/content/`.
4. Do **not** use `DlWrapper` directly in Markdown. It is only a foundation inside Vue SFCs.

Implementation checklist:

1. Add `app/components/content/<ComponentName>.vue` for app-specific blocks. Do not edit or extend the installed module.
2. Follow SFC order: `<script lang="ts">` (UI macro) > `<script setup lang="ts">` > `<template>` > `<style>` (scoped).
3. Define UI with `defineDoclayerComponentUi`, props with `UiProps<typeof ui>`, defaults with `ui` in `withDefaults`.
4. Wrap markup in `DlWrapper`, pass `:ui="resolvePropsUi(props)"` from `useComponentUi()`, and bind classes from the slot (`$ui.<part>.base`).
5. Keep `ui` internal. Content authors override styling via `#ui` (block) or `:iui` (inline) in Markdown, not via ad-hoc props unless the component needs them.
6. Use utilities or composables only if necessary or asked.
7. Match code style, import order, and JSDoc rules from root `AGENTS.md` when editing TypeScript.

After implementation:

1. Use the component once in `content/` with a minimal example (block or inline, matching the component type).
2. If the component is user-facing, add or extend a docs page under `content/`, only when asked.
3. Verify in `pnpm dev` (layout, `#ui` / `:iui`, default slot). Do not run `pnpm build`.
