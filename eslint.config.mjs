import withNuxt from './.nuxt/eslint.config.mjs';

import eslintBaseConfig from '@vuehouse/eslint-config';
import eslintNuxtConfig from '@vuehouse/eslint-config/nuxt';

export default withNuxt(eslintBaseConfig, eslintNuxtConfig);
