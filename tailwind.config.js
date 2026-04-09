/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        'primary': '#050816',
        'primary-dark-blue': '#2C3E50',
        'primary-midnight-black': '#1A1A1A',
        'primary-charcoal-gray': '#34495E',
        'primary-soft-white': '#F5F5F5',
        'accent-bright-cyan': '#00B8D4',
        'accent-electric-blue': '#3498DB',
        'accent-lime-green': '#2ECC71',
        'accent-orange': '#FF5733',
        'accent-soft-yellow': '#F1C40F',
        'text-dark-gray': '#2C3E50',
        'text-light-gray': '#BDC3C7',
        'background-light-gray': '#ECF0F1',
        'background-light-beige': '#FAF0E6',
      },
      screens: {
        'xs': '360px', // For small phones
        'sm': '640px', // Default Tailwind sm
        'md': '768px', // Default Tailwind md
        'lg': '1024px', // Default Tailwind lg
        'xl': '1280px', // Default Tailwind xl
        '2xl': '1536px', // Default Tailwind 2xl
        '3xl': '1920px', // Custom for ultra-wide monitors
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}