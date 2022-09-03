import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import a11yEmoji from '@fec/remark-a11y-emoji';
import remarkToc from 'remark-toc';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://indra-is.my.id',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [a11yEmoji, remarkToc]
  }
});