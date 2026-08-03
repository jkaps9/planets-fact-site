// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Antonio",
      cssVariable: "--font-antonio",
      weights: [400],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Spartan",
      cssVariable: "--font-spartan",
      weights: [400, 700],
    },
  ],
});
