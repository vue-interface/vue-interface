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
        require('@vue-interface/form-control/tailwindcss'),
    ]
};