/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ Enables class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      keyframes: {
        pulseBlur: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.08)', opacity: '0.4' },
        },
      },
      animation: {
        pulseBlur: 'pulseBlur 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
