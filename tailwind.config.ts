import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#fbc40e",
        "primary-dark": "#ce9b0d",
        "primary-light": "#f9e310",
        "primary-black": "#1a232e",
        "primary-white": "#c7c7c7",
        secondary: "#343f71",
        "secondary-dark": "#202844",
        "secondary-light": "#354c70",
        light: "#e0d8e4",
        "light-dark": "#aaa5ad",
        white: "#ffffff",
        pome: "#f34c19",
        "pome-dark": "#af3d15",
        "pome-light": "#ef7c1d",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
}
export default config
