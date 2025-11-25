import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logo Colors
        'navy': {
          DEFAULT: '#062D5C',
          dark: '#041d3f',
          light: '#0a3d6f',
        },
        'golden': {
          DEFAULT: '#E6B950',
          light: '#f4d99a',
          dark: '#d4a842',
        },
        'sky': {
          DEFAULT: '#0E8ACA',
          light: '#3ba3d4',
          dark: '#0a6fa0',
          '50': '#e8f4fa',
        },
        'steel': {
          DEFAULT: '#93AEB9',
          light: '#b8ced6',
          dark: '#6d8a95',
        },
        'grey-green': {
          DEFAULT: '#5D6A62',
          light: '#7a8b82',
        },
        'off-white': '#FBFAF7',
      },
    },
  },
  plugins: [],
};

export default config;

