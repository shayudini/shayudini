module.exports = {
  content: [
    'src/pages/**/*.{js,jsx,ts,tsx}',
    'src/components/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        "ping-once": "ping 1s cubic-bezier(0, 0, 0.2, 1)"
      }
    },
  },
  plugins: [],
};
