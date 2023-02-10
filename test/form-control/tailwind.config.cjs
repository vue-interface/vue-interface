module.exports = {
    content: [
        './index.html'
    ],
    theme: {
        extend: {
            variations: {
                primary: 'red'
            }
        },
    },
    plugins: [
        require('./tailwindcss/form-control.cjs'),
        require('./tailwindcss/form-check.cjs'),
        require('./tailwindcss/form-select.cjs'),
        require('./tailwindcss/form-file.cjs'),
        require('./tailwindcss/form-switch.cjs'),
        require('./tailwindcss/form-text.cjs'),
        require('./tailwindcss/form-labels.cjs'),
        require('./tailwindcss/form-group.cjs'),
        require('./tailwindcss/input-group.cjs'),
        require('./tailwindcss/validation.cjs')
    ],
    safelist: [
        ...require('./tailwindcss/safelist.cjs')()
    ]
};