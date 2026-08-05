import type { Config } from "tailwindcss";

// Brand-specific styles live in src/app/globals.css as CSS custom properties
// (per the build brief). Tailwind here is for utility classes only — keep the
// theme thin so we don't accidentally introduce brand drift.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: {
          DEFAULT: "var(--ink)",
          deep: "var(--ink-deep)",
        },
        orange: {
          DEFAULT: "var(--orange)",
          deep: "var(--orange-deep)",
        },
        seafoam: {
          DEFAULT: "var(--seafoam)",
          light: "var(--seafoam-light)",
        },
        gold: "var(--gold)",
        "star-gold": "var(--star-gold)",
        muted: "var(--muted)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
