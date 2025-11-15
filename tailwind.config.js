/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
        'cool': ['Orbitron', 'monospace'],
        'elegant': ['Poppins', 'sans-serif'],
        'tech': ['Space Grotesk', 'monospace'],
      }
    },
  },
  plugins: [],
}