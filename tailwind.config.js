/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/components/Navbar.js",
    './src/components/Hero.js',
    './src/components/Footer.js',
    './src/components/Features.js',
    './src/components/Blog.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: (theme) => ({
        'header-desktop': "url('/src/images/bg-intro-desktop.svg')",
        'header-mobile': "url('/src/images/bg-intro-mobile.svg')",
        'image-mockupss': "url('/src/images/image-mockups.png')",
      }),
      backgroundSize: {
        'custom-mobile-header-size': '100% 50%',
        'custom-mobile-mockup-size': 'auto 60%',
      },
      colors: {
        primary: {
          'dark-blue': 'hsl(233, 26%, 24%)',
          'lime-green': 'hsl(136, 65%, 51%)',
          'bright-cyan': 'hsl(192, 70%, 51%)',
        },
        neutral: {
          'grayish-blue': 'hsl(233, 8%, 62%)',
          'light-grayish-blue': 'hsl(220, 16%, 96%)',
          'very-light-gray': 'hsl(0, 0%, 98%)',
          white: 'hsl(0, 0%, 100%)',
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '1.25rem',
            sm: '2rem',
            lg: '3rem',
            xl: '4rem',
            '2xl': '5rem',
          },
        },
        inset: {
          '-42.6%': '-42.6%',
        },
      },
    },
  },
plugins: [require('@tailwindcss/aspect-ratio')],
}
