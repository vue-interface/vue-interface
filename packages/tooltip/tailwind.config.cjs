module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './demo/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('./tailwindcss/index.cjs')
    ],
    safelist: [
        ...require('./tailwindcss/safelist.cjs')()
    ]
};