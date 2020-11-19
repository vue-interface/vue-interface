module.exports = {
    transpileDependencies: [
        /@vue-interface\/.+/
    ],
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                ]
            }
        }
    }
};