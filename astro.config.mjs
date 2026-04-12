// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://KrzyBen.github.io',
  base: '/KrzyBen.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});