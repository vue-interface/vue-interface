module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('./tailwindcss/form-control'),
        require('./tailwindcss/form-check'),
        require('./tailwindcss/form-select'),
        require('./tailwindcss/form-file'),
        require('./tailwindcss/form-switch'),
        require('./tailwindcss/form-text'),
        require('./tailwindcss/form-labels'),
        require('./tailwindcss/form-group'),
        require('./tailwindcss/input-group'),
        // require('./tailwindcss/custom-fields'),
        require('./tailwindcss/validation')
    ],
    safelist: [
        
    ]
};