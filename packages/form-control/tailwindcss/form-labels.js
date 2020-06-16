const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        '.form-label': {
            marginBottom: theme('form.label.marginBottom'),
            fontSize: theme('form.label.fontSize'),
            fontStyle: theme('form.label.fontStyle'),
            fontWeight: theme('form.label.fontWeight'),
            color: theme('form.label.color')
        },
        
        // For use with horizontal and inline forms, when you need the label (or legend)
        // text to align with the form controls.
        '.col-form-label': {
            paddingTop: `calc(${theme('form.label.paddingY')},${theme('form.label.borderWidth')}`,
            paddingBotton: `calc(${theme('form.label.paddingY')},${theme('form.label.borderWidth')}`,
            marginBottom: theme('form.label.col.marginBottom'), // Override the `<legend>` default
            fontSize: theme('form.label.fontSize'),
            fontStyle: theme('form.label.fontStyle'),
            fontWeight: theme('form.label.fontWeight'),
            color: theme('form.label.color')
        },
        
        '.col-form-label-lg': {
            paddingTop: `calc(${theme('form.label.lg.paddingY')},${theme('form.label.lg.borderWidth')}`,
            paddingBotton: `calc(${theme('form.label.lg.paddingY')},${theme('form.label.lg.borderWidth')}`,
            fontSize: theme('form.label.lg.fontSize')
        },
        
        '.col-form-label-sm': {
            paddingTop: `calc(${theme('form.label.sm.paddingY')},${theme('form.label.sm.borderWidth')}`,
            paddingBotton: `calc(${theme('form.label.sm.paddingY')},${theme('form.label.sm.borderWidth')}`,
            fontSize: theme('form.label.sm.fontSize')
        }
    };

    addComponents(component);
}, {
    theme: {
        form: {
            label: ({ theme }) => ({
                marginBottom: '.5rem',
                fontStyle: 'normal',
                fontSize: null,
                fontWeight: null,
                color: null,
                paddingY: '.375rem',
                borderWidth: '1px',
                col: {
                    marginBottom: 0
                },
                sm: {
                    paddingY: '.25rem',
                    fontSize: '.875rem',
                },
                lg: {
                    paddingY: '.5rem',
                    fontSize: '1.25rem',
                }
            })
        }
    }
});