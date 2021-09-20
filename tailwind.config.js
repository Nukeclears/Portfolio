const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
          },
        extend: {
        },
        fontFamily: {
            display: 'Montserrat, sans-serif',
            body: 'Noto Sans, sans-serif',
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            amber: colors.amber,
            rose: colors.rose,
            blue: colors.blue,
            cyan: colors.cyan,
            green: colors.green,
            yellow: colors.amber,
            pink: colors.pink,
            orange: colors.orange,
            white: colors.white,
            black: colors.black,
        },
    },
    plugins: [
        require('daisyui'),
    ],
}
