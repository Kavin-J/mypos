/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: { 
                defalt: '#f1f5f9', // สีพื้นหลัง default
                parimary: {
                    50: "#e6f0ff",
                    100: "#cce0ff",
                    200: "#99c2ff",
                    300: "#66a3ff",
                    400: "#3385ff",
                    500: "#2d71f8", // สีหลัก
                    600: "#2560cc",
                    700: "#1e4f9f",
                    800: "#173f73",
                    900: "#102e46",
                },
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
