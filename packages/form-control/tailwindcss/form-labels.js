const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

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
            marginBottom: 'var(--form-label-margin-bottom)',
            fontSize: 'var(--form-label-font-size)',
            fontStyle: 'var(--form-label-font-style)',
            fontWeight: 'var(--form-label-font-weight)',
            color: 'var(--form-label-color)'
        },
        
        // For use with horizontal and inline forms, when you need the label (or legend)
        // text to align with the form controls.
        '.col-form-label': {
            paddingTop: 'calc(var(--form-label-padding-y) + var(--form-label-border-width)',
            paddingBotton: 'calc(var(--form-label-padding-y) + var(--form-label-border-width)',
            marginBottom: 'var(--form-label-col-margin-bottom)', // Override the `<legend>` default
            fontSize: 'var(--form-label-font-size)',
            fontStyle: 'var(--form-label-font-style)',
            fontWeight: 'var(--form-label-font-weight)',
            color: 'var(--form-label-color)'
        },
        
        '.col-form-label-lg': {
            paddingTop: 'calc(var(--form-label-lg-padding-y) + var(--form-label-border-width)',
            paddingBotton: 'calc(var(--form-label-lg-padding-y) + var(--form-label-border-width)',
            fontSize: 'var(--form-label-lg-padding-y)'
        },
        
        '.col-form-label-sm': {
            paddingTop: 'calc(var(--form-label-sm-padding-y) + var(--form-label-border-width)',
            paddingBotton: 'calc(var(--form-label-sm-padding-y) + var(--form-label-border-width)',
            fontSize: 'var(--form-label-sm-padding-y)'
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