module.exports = {
    presets: [
        ['@vue/app', {
            targets: {
                node: "current",
                "ie": "10",
                browsers: "> 0.25%, not dead",
            }
        }]
    ]
};
