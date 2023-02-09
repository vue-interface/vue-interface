module.exports = {
    content: [
        "./index.html"
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