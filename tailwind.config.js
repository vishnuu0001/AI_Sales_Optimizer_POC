/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dealer-dark': '#0B1221', // Dark Navy Background
                'dealer-card': '#161E32', // Slightly lighter dark for inner cards
                'brand-primary': '#4F46E5', // Indigo/Purple
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}