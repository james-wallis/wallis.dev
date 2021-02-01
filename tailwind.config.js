module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.white'),
                            '&:hover': {
                                color: theme('colors.white'),
                            },
                        },
                        h1: {
                            color: theme('colors.white'),
                        },
                        h2: {
                            color: theme('colors.white'),
                        },
                        h3: {
                            color: theme('colors.gray.200'),
                        },
                        h4: {
                            color: theme('colors.gray.200'),
                        },
                        h5: {
                            color: theme('colors.gray.200'),
                        },
                        h6: {
                            color: theme('colors.gray.200'),
                        },
                        strong: {
                            color: theme('colors.gray.200'),
                        },
                        pre: {
                            backgroundColor: theme('colors.gray.900'),
                        },
                        code: {
                            color: theme('colors.white'),
                        },
                        figcaption: {
                            color: theme('colors.gray.300'),
                        },
                        blockquote: {
                            color: theme('colors.gray.300'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ["dark"],
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}