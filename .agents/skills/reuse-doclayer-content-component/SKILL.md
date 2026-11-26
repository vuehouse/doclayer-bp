---
name: reuse-doclayer-content-component
description: Reuse components instead of adding local HTML or Vue replacements. Use when the task involves Dl* components, custom content components, slots, props, or styling content blocks.
---

# Reuse a DocLayer content component

Read first:

- `content/AGENTS.md`,
- guidelines:
  - [Writing content](https://doclayer.dev/docs/guidelines/writing-content),
  - [Components catalog](https://doclayer.dev/docs/components).

Before adding custom markup or a local component, check:

1. Does DocLayer already provide this pattern? See [components catalog](https://doclayer.dev/docs/components).
2. Can the result be achieved through props, slots, or content structure?
3. Is the requirement truly app-specific?
4. Would a local implementation create duplication or drift?

When a local component is required:

- Ask before creating the file.
- Keep overrides local and minimal.
- Do not duplicate module behavior in the app.
- Do not guess props, slots, or supported patterns. Read the source:
  - `node_modules/@vuehouse/dl/dist/runtime/components/content/`
- Inspect current usage in `content/` before inspecting module internals.

If reuse is possible, prefer the existing DocLayer component. If module behavior is unclear, report uncertainty, keep the change small, and ask before inventing a solution.
