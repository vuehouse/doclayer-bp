<div align="center">

<img style="width: 100%; max-width: 940px; height: auto;" alt="DocLayer — Smart Content Framework powered by Nuxt" src="https://doclayer.dev/promo.webp" />

# DocLayer Boilerplate

![npm version](https://img.shields.io/npm/v/@vuehouse/dl?style=flat-round)
![NPM Downloads](https://img.shields.io/npm/dm/@vuehouse/dl?style=flat-round)
![GitHub License](https://img.shields.io/github/license/vuehouse/doclayer?style=flat-round)
![Discord](https://img.shields.io/discord/1547187121180246046?style=flat-round)

**Smart Content Framework powered by [Nuxt](https://nuxt.com).**

Write documentation, blogs, and static content in Markdown. DocLayer does the rest

[Documentation](https://doclayer.dev/docs) · [Changelog](https://github.com/vuehouse/doclayer/releases) · [Boilerplate](https://github.com/vuehouse/doclayer-bp) · [Discord](https://discord.gg/EemSKTJvU) · [Blog](https://doclayer.dev/blog)

</div>

---

Welcome! This is the [DocLayer](https://doclayer.dev) Boilerplate application / template.

What you can find here is a starter [Nuxt](https://nuxt.com/) app with [`@vuehouse/dl`](https://doclayer.dev/docs) preinstalled - the best approach to start building with DocLayer. Write Markdown, DocLayer handles data, layouts, navigation, components, utils, and much more. This repo **consumes** the module - it is not the [module source](https://github.com/vuehouse/doclayer). API and guides live at [doclayer.dev/docs](https://doclayer.dev/docs).

## Prerequisites

Node.js `^20.22.3` or `^22.22.0`, and pnpm `^11.29.0` (see `package.json`).

## Get the code

You can download/fetch code of this application in a three different ways:

1. Clone this repository.
2. Use it as a [Template](https://github.com/vuehouse/doclayer-bp/generate).
3. Use the the official CLI.

```bash
pnpx @vuehouse/dl-cli@latest init
```

## Run it

Enter the newly created project directory.

```bash
cd doclayer
```

Install the dependencies and run the development server.

```bash
pnpm i && pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and start with **[Docs → Introduction](http://localhost:3000/docs/intro)**. The bundled pages explain project layout, configuration, content, and workflow - **that is the place for detail**; this README stays short.

Copy `.env.example` to `.env` only when you need branding, SEO, or search (`DL_*` variables).

## Worth knowing up front

- You get sample **landing** and **docs** content on purpose - browse it, then edit or remove.
- `app/app.config.ts` is where most app-specific customization lives; `nuxt.config.ts` should stay minimal.
- Prefer DocLayer primitives and module docs over reimplementing behavior in this repo.

For automation or AI-assisted edits, see `AGENTS.md` and `content/AGENTS.md` from the project root.

## Issues

For any kind of issues with this template please report them on the [DocLayer Repository](https://github.com/vuehouse/doclayer). Thanks.

## Updates

To stay updated with the latest news, features, and releases, follow us on [Twitter/X](https://twitter.com/doclayerdev) or [Bluesky](https://bsky.app/profile/doclayer.dev). You can also join our [Discord](https://discord.gg/EemSKTJvU) server to connect with other developers and get support.

## Support this project

If you find this project useful, please consider supporting it. You can join the [Early Supporters Program](https://doclayer.dev/docs/project/support) which can give you many great benefits, or simply use the [GitHub Sponsors](https://github.com/sponsors/lukasborawski) button. Thank you in advance for your support!

## License

MIT © [vue.house](https://vue.house)
