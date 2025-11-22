/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: '#2d3748',
        primary1: '#1a202c',
        primary2: '#312000',
        primary3: '#c4c4c4',
        primary4: '#4a5568',
        primary5: '#1890ff',
        primary6: '#212121',
        primary7: '#666666',
        primary8: '#0acf83',
        primary9: '#e8f4ff',
      },
      backgroundColor: {
        bg1: '#f0f2f5',
        bg2: '#ffffff',
        bg3: '#f5f5f5',
        bg4: '#dfdfdf',
        bg5: '#112032',
        bg6: '#232e42',
      },
      boxShadow: {
        custom1: '7.5px 20px 7.5px 20px rgba(108, 126, 147, 0.15)',
        custom2: '7.43px 49.03px 7.5px 49.03px rgba(108, 126, 147, 0.1)',
        custom3: '7px 42px 7px 42px rgba(108, 126, 147, 0.15)',
        custom4: '0px 2px 0px 2px rgba(108, 126, 147, 0.15)',
        custom5: '0px 3px 0px 3px rgba(108, 126, 147, 0.15)',
        custom6: '0px 4px 0px 4px rgba(108, 126, 147, 0.15)',
      },
      borderColor: {
        border1: '#f0f2f5',
        border2: '#e8e8e8',
        border3: '#f5f5f5',
      },
    },
  },
  plugins: [],
}

