import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const deploymentBase = process.env.GITHUB_PAGES_BASE || '/';

export default defineConfig({
  site: process.env.GITHUB_PAGES_SITE,
  base: deploymentBase,
  vite: {
    plugins: [tailwindcss()],
  },
});
