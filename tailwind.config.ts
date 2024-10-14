import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        desktop: "url('/images/backgrounds/bg-desktop.png')",
        mobile: "url('/images/backgrounds/bg-mobile.png')",
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms ease-in-out forwards',
        fadeIn: 'fadeIn 500ms ease-in-out forwards',
        'fadeIn-300': 'fadeIn 300ms ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.delay-300': {
          animationDelay: '300ms',
        },
        '.delay-500': {
          animationDelay: '500ms',
        },
        '.delay-700': {
          animationDelay: '700ms',
        },
        '.delay-1000': {
          animationDelay: '1000ms',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
