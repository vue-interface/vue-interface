const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-text-margin-top': theme('formText.marginTop'),
            '--form-text-font-size': theme('formText.fontSize'),
            '--form-text-font-style': theme('formText.fontStyle'),
            '--form-text-font-weight': theme('formText.fontWeight'),
            '--form-text-color': theme('formText.color'),
        },

        '.form-text': {
            marginTop: 'var(--form-text-margin-top)',
            fontSize: 'var(--form-text-font-size)',
            fontStyle: 'var(--form-text-font-style)',
            fontWeight: 'var(--form-text-font-weight)',
            color: 'var(--form-text-color)'
        }
    };

    addComponents(component);
}, {
    theme: {
        formText: theme => ({
            marginTop: '.25rem',
            fontSize: '.875em',
            fontStyle: 'normal',
            fontWeight: 400,
            color: theme('colors.gray.600', colors.gray['600']),
        })
    }
});
  