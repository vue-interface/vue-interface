const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-control-display': theme('formControl.display'),
            '--form-control-width': theme('formControl.width'),
            '--form-control-min-height': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2 + 1px * 2)`,
            '--form-control-line-height': theme('formControl.lineHeight'),
            '--form-control-color': theme('formControl.color'),
            '--form-control-font-size': theme('formControl.fontSize'),
            '--form-control-padding-x': theme('formControl.paddingX'),
            '--form-control-padding-y': theme('formControl.paddingY'),
            '--form-control-border-width': theme('formControl.borderWidth'),
            '--form-control-border-color': theme('formControl.borderColor'),
            '--form-control-border-style': theme('formControl.borderStyle'),
            '--form-control-font-family': theme('formControl.fontFamily'),
            '--form-control-font-weight': `${theme('formControl.fontWeight')}`,
            '--form-control-background-color': theme('formControl.backgroundColor'),
            '--form-control-background-clip': theme('formControl.backgroundClip'),
            '--form-control-appearance': theme('formControl.appearance'),
            '--form-control-box-shadow': theme('formControl.boxShadow'),
            '--form-control-border-radius': theme('formControl.borderRadius'),
            '--form-control-transition': theme('formControl.transition'),
            '--form-control-focus-color': theme('formControl.focus.color'),

            '--form-control-focus-background-color': theme('formControl.focus.backgroundColor'),
            '--form-control-focus-border-color': theme('formControl.focus.borderColor'),
            '--form-control-focus-outline': theme('formControl.focus.outline'),
            '--form-control-focus-box-shadow': `${theme('formControl.focus.boxShadow')}${theme('formControl.enableShadows') ? ', var(--form-control-box-shadow)' : ''}`,
            
            '--form-control-placeholder-opacity': theme('formControl.placeholder.opacity'),
            '--form-control-placeholder-color': theme('formControl.placeholder.color'),
            
            '--form-control-disabled-opacity': theme('formControl.disabled.opacity'),
            '--form-control-disabled-border-color': theme('formControl.disabled.borderColor'),
            '--form-control-disabled-background-color': theme('formControl.disabled.backgroundColor'),
            
            '--form-control-plaintext-display': theme('formControl.plaintext.display'),
            '--form-control-plaintext-width': theme('formControl.plaintext.width'),
            '--form-control-plaintext-padding-x': theme('formControl.plaintext.paddingX'),
            '--form-control-plaintext-padding-y': theme('formControl.plaintext.paddingY'),
            '--form-control-plaintext-color': theme('formControl.plaintext.color'),
            '--form-control-plaintext-background-color': theme('formControl.plaintext.backgroundColor'),
            '--form-control-plaintext-border-width': theme('formControl.plaintext.borderWidth'),
            '--form-control-plaintext-border-style': theme('formControl.plaintext.borderStyle'),
            '--form-control-plaintext-border-color': theme('formControl.plaintext.borderColor'),
            '--form-control-plaintext-line-height': theme('formControl.plaintext.lineHeight'),
            '--form-control-plaintext-margin-bottom': theme('formControl.plaintext.marginBottom'),

            '--form-control-color-control-max-width': theme('formControl.colorControl.maxWidth'),
            '--form-control-color-control-padding': theme('formControl.colorControl.padding'),
            
            '--form-control-sm-padding-x': theme('formControl.sm.paddingX'),
            '--form-control-sm-padding-y': theme('formControl.sm.paddingY'),
            '--form-control-sm-font-size': theme('formControl.sm.fontSize'),
            '--form-control-sm-border-radius': theme('formControl.sm.borderRadius'),
            '--form-control-sm-min-height': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.sm.paddingY')} * 2 + 1px * 2)`,
            
            '--form-control-lg-padding-x': theme('formControl.lg.paddingX'),
            '--form-control-lg-padding-y': theme('formControl.lg.paddingY'),
            '--form-control-lg-font-size': theme('formControl.lg.fontSize'),
            '--form-control-lg-border-radius': theme('formControl.lg.borderRadius'),
            '--form-control-lg-min-height': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.lg.paddingY')} * 2 + 1px * 2)`,
        },

        '.form-control': {
            display: 'var(--form-control-display)',
            width: 'var(--form-control-width)',
            minHeight: 'var(--form-control-min-height)',
            padding: 'var(--form-control-padding-y) var(--form-control-padding-x)',
            fontFamily: 'var(--form-control-font-family)',
            fontSize: 'var(--form-control-font-size)',
            fontWeight: 'var(--form-control-font-weight)',
            lineHeight: 'var(--form-control-line-height)',
            color: 'var(--form-control-color)',
            backgroundColor: 'var(--form-control-background-color)',
            backgroundClip: 'var(--form-control-background-clip)',
            border: 'var(--form-control-border-width) var(--form-control-border-style) var(--form-control-border-color)',
            borderRadius: 'var(--form-control-border-radius)',
            boxShadow: theme('formControl.enableShadows') && 'var(--form-control-box-shadow)',
            transition: 'var(--form-control-transition)',
            appearance: 'var(--form-control-appearance)',

            // Customize the `:focus` state to imitate native WebKit styles.
            '&:focus': {
                color: 'var(--form-control-focus-color)',
                backgroundColor: 'var(--form-control-focus-background-color)',
                borderColor: 'var(--form-control-focus-border-color)',
                outline: 'var(--form-control-focus-outline)',
                boxShadow: 'var(--form-control-focus-box-shadow)'
            },
        
            // Placeholder
            '&::placeholder': {
                color: 'var(--form-control-placeholder-color)',
                // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
                opacity: 'var(--form-control-placeholder-opacity)',
            },
        
            // Disabled and read-only inputs
            //
            // HTML5 says that controls under a fieldset > legend:first-child won't be
            // disabled if the fieldset is disabled. Due to implementation difficulty, we
            // don't honor that edge case; we style them as disabled anyway.
            '&:disabled, &[readonly]': {
                backgroundColor: 'var(--form-control-disabled-background-color)',
                borderColor: 'var(--form-control-disabled-border-color)',
                // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
                opacity: 'var(--form-control-disabled-opacity)'
            }
        },
        
        // Readonly controls as plain text
        //
        // Apply class to a readonly input to make it appear like regular plain
        // text (without any border, background color, focus indicator)
        
        '.form-control-plaintext, .form-control-plaintext[readonly]': {
            display: 'var(--form-control-plaintext-display)',
            width: 'var(--form-control-plaintext-width)',
            padding: 'var(--form-control-plaintext-padding-y) var(--form-control-plaintext-padding-x)',
            marginBottom: 'var(--form-control-plaintext-margin-bottom)', // match inputs if this class comes on inputs with default margins
            lineHeight: 'var(--form-control-plaintext-line-height)',
            color: 'var(--form-control-plaintext-color)',
            backgroundColor: 'var(--form-control-plaintext-background-color)',
            borderStyle: 'var(--form-control-plaintext-border-style)',
            borderColor: 'var(--form-control-plaintext-border-color)',
            borderWidth: 'var(--form-control-plaintext-border-width)',
            boxShadow: 'none',

            '&.form-control-sm, &.form-control-lg': {
                paddingRight: 'var(--form-control-plaintext-padding-x)',
                paddingLeft: 'var(--form-control-plaintext-padding-x)',
            }
        },
        
        // Form control sizing
        //
        // Build on `.form-control` with modifier classes to decrease or increase the
        // height and font-size of form controls.

        '.form-control-sm': {
            minHeight: 'var(--form-control-sm-min-height)',
            padding: 'var(--form-control-sm-padding-y) var(--form-control-sm-padding-x)',
            fontSize: 'var(--form-control-sm-font-size)',
            borderRadius: 'var(--form-control-sm-border-radius)',
        },
        
        '.form-control-lg': {
            minHeight: 'var(--form-control-lg-min-height)',
            padding: 'var(--form-control-lg-padding-y) var(--form-control-lg-padding-x)',
            fontSize: 'var(--form-control-lg-font-size)',
            borderRadius: 'var(--form-control-lg-border-radius)',
        },
        
        '.form-control-color': {
            maxWidth: 'var(--form-control-color-control-max-width)',
            padding: 'var(--form-control-color-control-padding)',
        },
        
        '.form-control-color::-moz-color-swatch': {
            borderRadius: 'var(--form-control-border-radius)',
        },
        
        '.form-control-color::-webkit-color-swatch': {
            borderRadius: 'var(--form-control-border-radius)'
        }
    };

    addComponents(component);
}, {
    theme: {
        formControl: theme => ({
            display: 'block',
            width: '100%',
            lineHeight: '1.5',
            color: theme('colors.gray.600', colors.gray['600']),
            paddingY: '.375rem',
            paddingX: '.75rem',
            borderWidth: '1px',
            borderColor: theme('colors.gray.400', colors.gray['400']),
            borderStyle: 'solid',
            fontSize: '1rem',
            fontFamily: 'inherit',
            fontWeight: 400,
            backgroundColor: theme('colors.white', colors.white),
            backgroundClip: 'padding-box',
            appearance: 'none',
            boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .075)',
            borderRadius: '.25rem',
            transition: 'all .15s ease-in-out',
            enableShadows: true,
            colorControl: {
                maxWidth: '3rem',
                padding: '.375rem'
            },
            focus: {
                color: theme('colors.gray.700', colors.gray['700']),
                backgroundColor: theme('colors.white', colors.white),
                borderColor: theme('colors.blue.400', colors.blue['400']),
                outline: 0,
                boxShadow: `0 0 0 .2rem rgba(${theme('colors.blue.500', colors.blue['500'])}, .25)`
            },
            placeholder: {
                opacity: '1',
                color: theme('colors.gray.500', colors.gray['500'])
            },
            disabled: {
                opacity: '1',
                borderColor: theme('colors.gray.400', colors.gray['400']),
                backgroundColor: theme('colors.gray.200', colors.gray['200'])
            },
            plaintext: {
                display: 'block',
                width: '100%',
                paddingX: 0,
                paddingY: '.375rem',
                color: 'inherit',
                backgroundColor: 'transparent',
                borderWidth: '1px 0',
                borderStyle: 'solid',
                borderColor: 'transparent',
                lineHeight: '1.5',
                marginBottom: 0
            },
            sm: {
                paddingX: '.5rem',
                paddingY: '.25rem',
                fontSize: '.875rem',
                borderRadius: '.2rem'
            },
            lg: {
                paddingX: '1rem',
                paddingY: '.5rem',
                fontSize: '1.25rem',
                borderRadius: '.3rem'
            }
        })
    }
});