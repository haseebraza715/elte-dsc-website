/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#0ea5e9',
        accentContrast: '#0c4a6e',
        bgsoft: '#f0f9ff',
        border: '#e2e8f0',
        textmain: '#0f172a',
        textmuted: '#334155',
      },
      maxWidth: {
        content: '960px',
      },
    },
  },
  plugins: [],
}


