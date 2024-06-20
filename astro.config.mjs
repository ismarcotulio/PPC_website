import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  adapter: cloudflare({
    // Optional configuration for Cloudflare adapter (see docs)
  }),
  output: 'server', // Set to 'server' for Cloudflare Pages compatibility
  // ... other Astro configurations
});
