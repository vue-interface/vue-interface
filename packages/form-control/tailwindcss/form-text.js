const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        '.form-text': {
            marginTop: theme('form.text.marginTop'),
            fontSize: theme('form.text.fontSize'),
            fontStyle: theme('form.text.fontStyle'),
            fontWeight: theme('form.text.fontWeight'),
            color: theme('form.text.color')
        }
    };

    addComponents(component);
}, {
    theme: {
        form: {
            text: ({ theme }) => ({
                marginTop: '.25rem',
                fontSize: '.875em',
                fontStyle: null,
                fontWeight: null,
                color: theme('colors.gray.600', colors.gray['600']),
            })
        }
    }
});
  