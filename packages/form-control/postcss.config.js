const Color = require('color');

module.exports = {
    plugins: [
        require('postcss-nested'),
        require('tailwindcss'),
        require('postcss-encode-background-svgs'),
        require('postcss-css-variables')({
            preserve: 'computed'
        }),
        require('postcss-hexrgba'),
        require('postcss-functions')({
            functions: {
                darken(color, ...args) {
                    return Color(color).darken(...args);
                },
                lighten(color, ...args) {
                    return Color(color).lighten(...args);
                },
                contrast(color, light, dark) {
                    return Color(color).luminosity() > .5 ? dark : light;
                }
            }
        }),
        require('postcss-calc'),
        require('autoprefixer'),
    ]
};