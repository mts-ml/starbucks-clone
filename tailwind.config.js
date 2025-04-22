/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      min803: '50.1875rem',   // 803px
      min1702: '106.375rem',  // 1702px
      min1520: '95rem',       // 1520px
      sm: '40rem',            // 640px
      md: '48rem',            // 768px
      lg: '64rem',            // 1024px
      xl: '80rem',            // 1280px
    },
    extend: {
      fontSize: {
        "clampTitle": "clamp(1.5rem, 1.409rem + 0.455vw, 1.75rem)",
        "clampP": "clamp(1rem, 0.932rem + 0.341vw, 1.188rem)",
      },
    },
  },
  plugins: [],
}
