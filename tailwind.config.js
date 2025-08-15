/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // adjust to your project
    ],
    theme: {
        extend: {
            fontFamily: {
                bitcount: ['Bitcount', 'sans-serif'], // your custom font
            },
        },
    },
    plugins: ["@tailwindcss/postcss"],
};

export default config;
