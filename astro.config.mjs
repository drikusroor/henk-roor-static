import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://drikusroor.github.io',
  base: '/henk-roor-static',
  integrations: [mdx(), sitemap()],
  outDir: './_site',
  publicDir: './public',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
