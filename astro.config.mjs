// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  redirects: { "/": "/planets/mercury" },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Antonio",
      cssVariable: "--font-antonio",
      weights: [400],
    },
    {
      provider: fontProviders.fontsource(),
      name: "League Spartan",
      cssVariable: "--font-spartan",
      weights: [400, 700],
    },
  ],
  integrations: [icon()],
});
