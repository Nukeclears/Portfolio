const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./dist/*.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'display': 'Montserrat, sans-serif',
            'body': 'Noto Sans, sans-serif',
        },
        colors: {
            // Build your palette here
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            blue: colors.cyan,
            yellow: colors.amber,
            white: colors.white,
            black: colors.black,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
