/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        brand: {
          'red-500': '#FE3838',
          'white': '#FFFFFF',
          'white-100' : '#F5F5F5',
          'gray-100': '#BBBFBF',
          'gray-200': '#717171',
          'purple-700': '#312A4F',
          'purple-500': '#590BD8',
          'purple-300': '#DDD5EA',
        }
      }
    },
  },
  plugins: [],
}
