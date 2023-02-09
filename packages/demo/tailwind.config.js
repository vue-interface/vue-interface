/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{html,js,vue}'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        ...require('@vue-interface/form-control/tailwindcss')
    ],
    safelist: [
        ...require('@vue-interface/form-control/tailwindcss/safelist')()
    ]
};
