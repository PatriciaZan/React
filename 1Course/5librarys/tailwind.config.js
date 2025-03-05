/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {       
          "primary": "#ffe4e6",      
          "secondary": "#fecdd3",       
          "accent": "#f43f5e",        
          "neutral": "#f3f4f6",      
          "base-100": "#111827",       
          "info": "#9ca3af",       
          "success": "#e11d48",      
          "warning": "#0ea5e9",
          "error": "#ff0000",
      },
    },
  ],
  },
  plugins: [
    daisyui,
  ],
}

