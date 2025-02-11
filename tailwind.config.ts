import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#8c32ff',
        gray: '#7c7c81',
      },
      screens: {
        'lg-max': '1113px',
      },
      fontSize: {
        md: '1.125rem',
      },
    },
  },
  plugins: [],
};
export default config;
