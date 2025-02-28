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
        "float-slow": "float 3s ease-in-out infinite", // Animación de flotación
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)", // Inicia en la posición original
          },
          "50%": {
            transform: "translateY(-10px)", // Sube 10px hacia arriba
          },
          "100%": {
            transform: "translateY(0)", // Vuelve a la posición original
          },
        },
      },
    },
  },
  plugins: [],
};
