const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-group-margin-bottom': theme('formGroup.marginBottom')
        },

        '.form-group': {
            marginBottom: theme('formGroup.marginBottom')
        }
    };

    addComponents(component);
}, {
    theme: {
        formGroup: theme => ({
            marginBottom: '.75rem'
        })
    }
});