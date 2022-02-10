module.exports = {
    content: [
        "./index.html"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        ...require('@vue-interface/form-control/tailwindcss'),
        require('@vue-interface/form-control/tailwindcss/custom-fields')
    ],
    safelist: [
        ...require('@vue-interface/form-control/tailwindcss/safelist')()
    ]
};