/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px', // Custom breakpoint for screens 480px and larger
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 12px)',
      },
      colors: {
        primary: '#0029FA',
        'primary-color': '#0029fa',
        'primary-stroke': '#1849d6',
        'primary-grey': '#373737',
        'primary-grey-100': '#262626',
        'pure-black': '#000',
        'secondary-grey': '#9a9a9a',
        'secondary-grey-400': '#858585',
        'secondary-grey-500': '#686464',
        'ghost-white': '#F3F3F3',
        'stroke-grey': '#bcbcbc',
        'stroke-grey-50': '#e7e7e7',
        'light-grey': '#F9F9F9',
        'light-grey-50': '#F4F4F4',
        'light-grey-100': '#e9e7e4',
        'dark-grey': '#373737',
        'light-blue': '#EDF5FF',
        'light-blue-50': '#EFF2FC',
        'light-blue-75': '#E7ECFC',
        'light-blue-100': '#a4b3ff',
        'lime-green': '#31b214',
        'light-green': '#ebfae8',
        'pure-white': '#fff',
        'ring-color': '#000',
        charcol: '#262626',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring-color))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        'box-shadow': {
          button: '2px 2px 10px 0px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
  plugins: [require('tailwindcss-animate')],
};
