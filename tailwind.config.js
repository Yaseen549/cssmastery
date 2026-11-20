/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './data/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF6FF',  // Soft blue tint
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6', // Primary CSS Blue (Tailwind Blue 500)
          600: '#2563EB', // Primary Hover / Focus Blue (Blue 600)
          700: '#1D4ED8', // Deep Blue Accent (Blue 700)
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554', // Dark mode active badge / deep navy
        },
        accent: {
          cyan: '#06B6D4',
          indigo: '#6366F1',
        },
        surface: {
          light: '#FFFFFF',
          canvas: '#F8FAFC',       // Slate 50 Light Canvas
          border: '#E2E8F0',       // Slate 200 Light Border
          dark: '#0B1120',         // Deep Blue/Slate 950 Canvas
          darkSurface: '#111827',  // Gray 900 Surface
          darkElevated: '#1E293B', // Slate 800 Elevated Surface
          darkBorder: '#334155',   // Slate 700 Dark Border
        },
      },
      boxShadow: {
        'mac': '0 25px 60px -15px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        'mac-dark': '0 25px 60px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'mac-sm': '0 8px 20px -4px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
