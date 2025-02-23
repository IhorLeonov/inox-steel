import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        accent: '#FFFFFF', // #002A41
        yellow: '#FFCD00',
        blue: '#002A41',
        black: '#1A1A1A',
        gray: '#B6BBC4',
        'light-grey': '#DCDEDF',
        'dark-grey': '#3E444D',
      },
      screens: {
        sm: '375px',
        smm: '500px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      backdropFilter: {
        blur: 'blur(2px)',
      },
      // blur: {
      //   '52': '52px',
      // },
    },
  },
  plugins: [],
};
export default config;
