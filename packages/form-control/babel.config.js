module.exports = {
    presets: [
        ['@vue/app', {
            corejs: 3,
            useBuiltIns: "entry", // or "usage"
            targets: {
                browsers: "> .25%, not dead",
            }
        }]
    ]
};