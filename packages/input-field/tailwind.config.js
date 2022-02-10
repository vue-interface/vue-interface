const plugin = require('tailwindcss/plugin');

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
        'form-control',
        'form-control-sm',
        'form-control-lg',
        'form-group',
        'has-validated',
        'valid-feedback',
        'invalid-feedback',
        'is-invalid',
        'is-valid'
    ]
};