/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors:{
        'emerald': {
          '50': 'hsl(133, 53%, 97%)',
          '100': 'hsl(131, 58%, 93%)',
          '200': 'hsl(133, 55%, 85%)',
          '300': 'hsl(132, 55%, 73%)',
          '400': 'hsl(133, 49%, 62%)',
          '500': 'hsl(133, 51%, 45%)',
          '600': 'hsl(132, 55%, 36%)',
          '700': 'hsl(133, 52%, 29%)',
          '800': 'hsl(134, 46%, 24%)',
          '900': 'hsl(135, 44%, 20%)',
          '950': 'hsl(137, 57%, 10%)',
      },
      
      }
    },
  },
  plugins: [],
}

