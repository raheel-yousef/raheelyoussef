/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FCFAF7',
          100: '#F7F2EB',
          200: '#EFE7DE',
          300: '#E4D7C8',
          DEFAULT: '#F4EFEA',
        },
        charcoal: {
          950: '#0E0E0E',
          900: '#121212',
          850: '#161616',
          800: '#1A1A1A',
          750: '#222222',
          700: '#2A2A2A',
          DEFAULT: '#1E1E1E',
          muted: '#6B6864',
          darkMuted: '#A09D98',
        },
        coral: {
          light: '#FFF0EE',
          border: '#FFD6D2',
          DEFAULT: '#FF3B30',
          hover: '#E02E24',
          dark: '#FF453A',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'coral-glow': '0 0 20px rgba(255, 59, 48, 0.25)',
      }
    },
  },
  plugins: [],
}
