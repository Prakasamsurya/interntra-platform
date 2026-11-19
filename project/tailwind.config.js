/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F4F1EA',
        },
        sand: {
          100: '#EFEAE0',
          200: '#E4DDCF',
          300: '#D3C9B5',
        },
        ink: {
          50: '#F5F5F4',
          100: '#E7E6E4',
          200: '#CFCEC9',
          300: '#A8A6A0',
          400: '#7C7A74',
          500: '#5A5852',
          600: '#413F3B',
          700: '#2E2D2A',
          800: '#222120',
          900: '#181817',
          950: '#101010',
        },
        forest: {
          50: '#F0F5F1',
          100: '#DCE8DE',
          200: '#B9D1BF',
          300: '#8BB095',
          400: '#5C8A69',
          500: '#3E6C4D',
          600: '#2F553C',
          700: '#264432',
          800: '#1E3629',
          900: '#172A20',
          950: '#0E1B14',
        },
      },
      maxWidth: {
        site: '76rem',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 36s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out both',
      },
    },
  },
  plugins: [],
};
