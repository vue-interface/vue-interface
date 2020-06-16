const Color = require('color');

module.exports = {
    plugins: [
        require('postcss-nested'),
        require('tailwindcss'),
        require('postcss-css-variables')({
            preserve: 'computed'
        }),
        require('postcss-calc'),
        require('postcss-hexrgba'),
        require('postcss-functions')({
            functions: {
                darken(color, ...args) {
                    return Color(color).darken(...args);
                },
                lighten(color, ...args) {
                    return Color(color).lighten(...args);
                }
            }
        }),
        require('autoprefixer')
    ]
};