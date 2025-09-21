/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#059669',
        accent: '#dc2626',
        'chilp-blue': '#3b82f6',
        'chilp-green': '#10b981',
        'chilp-red': '#ef4444',
      },
    },
  },
  plugins: [],
}
