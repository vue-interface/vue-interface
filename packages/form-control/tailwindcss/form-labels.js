const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-label-color': theme('formLabel.color'),
            '--form-label-margin-bottom': theme('formLabel.marginBottom'),
            '--form-label-font-style': theme('formLabel.fontStyle'),
            '--form-label-font-size': theme('formLabel.fontSize'),
            '--form-label-font-weight': theme('formLabel.fontWeight'),
            '--form-label-padding-y': theme('formLabel.paddingY'),
            '--form-label-border-width': theme('formLabel.borderWidth'),

            '--form-label-col-margin-bottom': theme('formLabel.marginBottom'),

            '--form-label-sm-padding-y': theme('formLabel.sm.paddingY'),
            '--form-label-sm-font-size': theme('formLabel.sm.fontSize'),

            '--form-label-lg-padding-y': theme('formLabel.lg.paddingY'),
            '--form-label-lg-font-size': theme('formLabel.lg.fontSize'),
        },

        '.form-label': {
            marginBottom: theme('formLabel.marginBottom'),
            fontSize: theme('formLabel.fontSize'),
            fontStyle: theme('formLabel.fontStyle'),
            fontWeight: theme('formLabel.fontWeight'),
            color: theme('formLabel.color'),
        },
        
        // For use with horizontal and inline forms, when you need the label (or legend)
        // text to align with the form controls.
        '.col-form-label': {
            paddingTop: `calc(${theme('formLabel.paddingY')} + ${theme('formLabel.borderWidth')})`,
            paddingBottom: `calc(${theme('formLabel.paddingY')} + ${theme('formLabel.borderWidth')})`,
            marginBottom: theme('formLabel.marginBottom'), // Override the `<legend>` default
            fontSize: theme('formLabel.fontSize'),
            fontStyle: theme('formLabel.fontStyle'),
            fontWeight: theme('formLabel.fontWeight'),
            color: theme('formLabel.color')
        },
        
        '.col-form-label-lg': {
            paddingTop: `calc(${theme('formLabel.lg.paddingY')} + ${theme('formLabel.borderWidth')})`,
            paddingBottom: `calc(${theme('formLabel.lg.paddingY')} + ${theme('formLabel.borderWidth')})`,
            fontSize: theme('formLabel.lg.fontSize')
        },
        
        '.col-form-label-sm': {
            paddingTop: `calc(${theme('formLabel.sm.paddingY')} + ${theme('formLabel.borderWidth')})`,
            paddingBottom: `calc(${theme('formLabel.sm.paddingY')} + ${theme('formLabel.borderWidth')})`,
            fontSize: theme('formLabel.sm.fontSize')
        },
    };

    addComponents(component);
}, {
    theme: {
        formLabel: theme => ({
            marginBottom: '.5rem',
            fontStyle: 'normal',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
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
});