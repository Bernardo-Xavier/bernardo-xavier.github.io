// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bernardo-xavier.github.io',
  integrations: [sitemap()],
});
