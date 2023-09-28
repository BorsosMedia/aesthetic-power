/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      spacing: {
        xxxl: 'calc((0.8rem + 1.5625vw)*6)',
        xxl: 'calc((0.8rem + 1.5625vw)*4)',
        xl: 'calc((0.8rem + 1.5625vw)*2)',
        full: 'calc(0.8rem + 1.5625vw)',
        half: 'calc((0.8rem + 1.5625vw)/2)'
      },
      fontSize: {
        banner: '6em',
        h1: '4em',
        h2: '3em',
        h3: '2em',
        h4: '1.8em',
        h5: '1.5em',
        h6: '1.25em'
      },
      fontFamily: {
        mainFont: 'RobotoCondensed',
        headlineFont: 'HeadlinerNo45',
        auxiliarFont: 'Margarine'
      },
      screens: {
        '2xs': '470px',
        xs: '520px',
        '3xl': '1600px',
        '4xl': '1920px',
        targets: '1040px'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
