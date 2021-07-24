const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./docs/*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: theme => ({
                'header-background': "url('/docs/images/Head_background.png')",
            }),
            colors: {
                gray: {
                    1000: '#0A0A0A'
                },
            },
            keyframes: {
                dropin: {
                    '100%': { transform: 'scale(1)' },
                    '0%': { transform: 'scale(1.1)' },
                }
            },
            animation: {
                dropin: 'dropin 1s ease-out',
            },
        },
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
            amber: colors.amber,
            rose: colors.rose,
            blue: colors.blue,
            cyan: colors.cyan,
            yellow: colors.amber,
            pink: colors.pink,
            orange: colors.orange,
            white: colors.white,
            black: colors.black,
        },
    },
    variants: {
        extend: {
            display: ['dark'],
        },
    },
    plugins: [],
}
