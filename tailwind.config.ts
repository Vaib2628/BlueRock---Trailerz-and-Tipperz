// Tailwind CSS v4 no longer uses this config file for theme tokens.
// All custom tokens are defined in app/globals.css via @theme.
// This file is kept for tooling compatibility only.
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
