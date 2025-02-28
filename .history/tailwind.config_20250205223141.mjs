/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "float-slow": "float 3s ease-in-out infinite", // Animación flotante
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)", // Inicia en su posición
          },
          "50%": {
            transform: "translateY(-10px)", // Sube 10px
          },
          "100%": {
            transform: "translateY(0)", // Regresa a la posición original
          },
        },
      },
    },
  },
  plugins: [],
};
