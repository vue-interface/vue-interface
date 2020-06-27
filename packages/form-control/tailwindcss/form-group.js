const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-group-margin-bottom': theme('formGroup.marginBottom')
        },

        '.form-group': {
            marginBottom: 'var(--form-group-margin-bottom)'
        }
    };

    addComponents(component);
}, {
    theme: {
        formGroup: theme => ({
            marginBottom: theme('margin.3', '0.75rem')
        })
    }
});