/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "Archivo Narrow": ["Archivo Narrow", "sans"],
      },
      backgroundColor: {
        s: {
          1: {
            regular: "#DABFFF",
            darker: "#46426D",
            light: "#E9D9FF",
            lighter: "#F7F1FF",
          },
          2: {
            regular: "#FFD6B3",
            darker: "#66421F",
            light: "#FFE4CC",
            lighter: "#FEF6EF",
          },
          3: {
            regular: "#99D1FF",
            darker: "#003A66",
            light: "#BFE3FF",
            lighter: "#E6F4FF",
          },
          4: {
            regular: "#81DDE5",
            darker: "#2A5154",
            light: "#AAECF2",
            lighter: "#DEF5F7",
          },
          5: {
            regular: "#FFBFD2",
            darker: "#773A47",
            light: "#FFD9E4",
            lighter: "#FFF2F6",
          },
          6: {
            regular: "#CBD5E0",
            darker: "#4A5568",
            light: "#E2E8F0",
            lighter: "#F2F7FA",
          },
        },
      },
      colors: {
        blue: {
          light: "#BFCFE0",
          highlight: "#2462D1",
          dark: "#1B3E67",
        },
        gray: {
          200: "#EDF2F7",
          300: "#E2E8F0",
          800: "#2D3748",
        },
        s: {
          1: {
            regular: "#DABFFF",
            darker: "#46426D",
            light: "#E9D9FF",
            lighter: "#F7F1FF",
          },
          2: {
            regular: "#FFD6B3",
            darker: "#66421F",
            light: "#FFE4CC",
            lighter: "#FEF6EF",
          },
          3: {
            regular: "#99D1FF",
            darker: "#003A66",
            light: "#BFE3FF",
            lighter: "#E6F4FF",
          },
          4: {
            regular: "#81DDE5",
            darker: "#2A5154",
            light: "#AAECF2",
            lighter: "#DEF5F7",
          },
          5: {
            regular: "#FFBFD2",
            darker: "#773A47",
            light: "#FFD9E4",
            lighter: "#FFF2F6",
          },
          6: {
            regular: "#CBD5E0",
            darker: "#4A5568",
            light: "#E2E8F0",
            lighter: "#F2F7FA",
          },
        },
      },
    },
  },
  plugins: [],
};
