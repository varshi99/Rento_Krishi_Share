/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f3fbf5',
          100: '#e8f7eb',
          200: '#c5eacc',
          300: '#94d6a0',
          400: '#6ecf7c',
          500: '#4cbb62',
          600: '#3aa34e',
          700: '#2d8a3e',
          800: '#216b34',
          900: '#1a6b2e',
          950: '#0d3b19',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef9e7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#e8a900',
          600: '#d4960a',
          700: '#b57a00',
          800: '#92600a',
          900: '#78350f',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.05)',
        'nav': '0 1px 0 rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
