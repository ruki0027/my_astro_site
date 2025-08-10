// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://my-astro-site-dusky.vercel.app',
  integrations: [sitemap()],
});

