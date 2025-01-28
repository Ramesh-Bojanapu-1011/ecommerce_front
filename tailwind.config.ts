import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { max: '550px' },
      md: { max: '1050px' },
      smlg: { min: '1051px', max: '1290px' },
      lg: { max: '1400px' },
      xl: { max: '1500px' },
      customsm: { max: '550px' },
      custommd: { min: '551px', max: '1050px' },
      customlg: { min: '1051px', max: '1290px' },
      customxl: { min: '1291px', max: '1400px' },
      custom2xl: { min: '1401px', max: '1500px' },
      custom3xl: { min: '1501px' },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
