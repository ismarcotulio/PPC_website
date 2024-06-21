import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    adapter: 'built-in', // Make sure this is set to 'built-in'
    // ... other configurations
  ,
  integrations: [tailwind()]
});


