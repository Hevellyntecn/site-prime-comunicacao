// tailwind.config.ts

import forms from '@tailwindcss/forms' // Importamos o plugin aqui no topo
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
        serif: ['var(--font-montserrat)'],
      },
    },
  },
  // E usamos a variável 'forms' que importamos aqui, em vez do 'require()'
  plugins: [forms],
}
export default config