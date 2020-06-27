const plugin = require('tailwindcss/plugin');

module.exports = {
    purge: {
        content: [
            './src/**/*.vue',
            './node_modules/@vue-interface/**/src/**/*.vue'
        ],
        options: {
            whitelistPatterns: [/^bg-/]
        }
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        require('@vue-interface/variant/tailwindcss'),
        require('./tailwindcss/form-control'),
        require('./tailwindcss/form-check'),
        require('./tailwindcss/form-switch'),
        require('./tailwindcss/form-select'),
        require('./tailwindcss/form-file'),
        require('./tailwindcss/form-text'),
        require('./tailwindcss/form-labels'),
        require('./tailwindcss/form-group'),
        require('./tailwindcss/input-group'),
        require('./tailwindcss/validation')
    ]
};