/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // aca le estamos diciendo que apliche en todas las carpetas el tailwindcss
    // dentro src ** todas las carpetas y  * todos los archivos que tengan la estencion js y jsx y el archivo html puedan usar tailwind
    "./src/**/*.{js,jsx}", "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

