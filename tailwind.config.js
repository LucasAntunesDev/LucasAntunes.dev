/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './**/*.{html,js}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif'],
      'mono': ['ui-monospace'],
      'pixel': ['"Press Start 2P"', 'system-ui']
    },
    darkMode: 'class',
    extend: {
      colors: {
        // 'violet': {
        //   50: '#DFD6EC',
        //   100: '#C7B6DE',
        //   200: '#af96d0',
        //   300: '#9777c1',
        //   400: '#834eb8',
        //   500: '#6c3e9a',
        //   600: '#4c2c6d',
        //   700: '#351e4c',
        //   800: '#221330',
        //   900: '#0b060f',
        // },
      },
    },
  },
  plugins: [],
}

