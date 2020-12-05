const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  presets: [
    require('full-palette')
  ],
  experimental: {
    // uniformColorPalette: true,
    applyComplexClasses: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["'Inter'", "Inter", ...defaultTheme.fontFamily.sans],
      display: ["'Radio Grotesk'","Radio Grotesk", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        darkA: "#0B0B0B",
        darkB: "#232323",
        pinkLight: "rgba(213, 43, 217, 0.9)",
        yellowLight: "#fffa43e6",
        "gray-clay": "#9D9D9D",
        gravel: "#505050",
        "gravel-bright": "#DFDFDF",
        "blue-clay": "#6D85FF",
        "blue-clay-alt": "#3958FB",
        "deep-black": "#090909",
        "black-side": "#151515",
      },
      fontSize: {
        '28': '1.75rem'
      }
    },
  },
  variants: {},
  plugins: [ require('tailwindcss-multi-column')(),],
};
