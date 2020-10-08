module.exports = {
    presets: [
        ['@vue/app', {
            targets: {
                node: "current",
                browsers: "> 0.25%, not dead"
            }
        }]
    ],
    exclude: /node_modules\/(?!@vue-interface\/.*)/
};
