import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Bouscout.github.io',
  base: '/Galactic-Portfolio',
  integrations: [react()]
});