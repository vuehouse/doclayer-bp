import { defineDoclayerAppConfig } from '@vuehouse/dl/exports';
/**
 * App Config
 *
 * @param config - App config.
 * @see https://nuxt.com/docs/getting-started/configuration#app-configuration
 * @see https://doclayer.dev/docs/guidelines/configuration
 * @remarks The whole config is fully typed. Hover over the property to read description.
 */
export default defineDoclayerAppConfig({
  dl: {
    ui: {
      headerLogoPath: {
        dark: '/logo-dark-placeholder.webp',
        light: '/logo-light-placeholder.webp',
      },
    },
    pathMap: [
      { marker: '$dl-newsletter', label: 'Newsletter', url: 'https://vuehouse.substack.com/p/weekly' },
      { marker: '$dl-docs', label: 'DocLayer Docs', url: 'https://doclayer.dev/docs' },
      { marker: '$dl-repo', label: 'vue.house', url: 'https://github.com/vuehouse/doclayer' },
      { marker: '$dl-boilerplate', label: 'DocLayer Boilerplate', url: 'https://github.com/vuehouse/doclayer-bp' },
      { marker: '$dl-twitter', label: 'Twitter/X', url: 'https://twitter.com/doclayerdev' },
      { marker: '$dl-bluesky', label: 'Bluesky', url: 'https://bsky.app/profile/doclayer.dev' },
      { marker: '$dl-github', label: 'GitHub', url: 'https://github.com/vue-house/doclayer' },
      { marker: '$mdc', label: 'MDC', url: 'https://remark-mdc.nuxt.space/' },
      { marker: '$pnpm', label: 'pnpm', url: 'https://pnpm.io/' },
    ],
    headerNav: {
      links: [
        '_overwrite',
        {
          url: '/docs/intro',
          label: 'Docs',
        },
        {
          url: 'https://github.com/vue-house/doclayer',
          label: 'Github',
        },
      ],
    },
    footerNav: {
      links: [
        {
          label: 'newsletter',
          url: 'https://vuehouse.substack.com/p/weekly',
        },
        {
          label: 'vue.house',
          url: 'https://vue.house',
        },
      ],
    },
  },
});
