const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const Color = require('color');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
    
        '.form-control': {
            display: theme('formControl.display'),
            width: theme('formControl.width'),
            minHeight: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2 + 1px * 2)`,
            padding: `${theme('formControl.paddingY')} ${theme('formControl.paddingX')}`,
            fontFamily: theme('formControl.fontFamily'),
            fontSize: theme('formControl.fontSize'),
            fontWeight: theme('formControl.fontWeight'),
            lineHeight: theme('formControl.lineHeight'),
            backgroundColor: theme('formControl.backgroundColor'),
            backgroundClip: theme('formControl.backgroundClip'),
            border: `${theme('formControl.borderWidth')} ${theme('formControl.borderStyle')} ${theme('formControl.borderColor')}`,
            borderRadius: theme('formControl.borderRadius'),
            boxShadow: theme('formControl.enableShadows') && theme('formControl.boxShadow'),
            transition: theme('formControl.transition'),
            appearance: theme('formControl.appearance'),

            '&:not(.form-switch)': {
                color: theme('formControl.color'),
            },

            // Customize the `:focus` state to imitate native WebKit styles.
            '&:focus': {
                color: theme('formControl.focus.color'),
                backgroundColor: theme('formControl.focus.backgroundColor'),
                borderColor: theme('formControl.focus.borderColor'),
                outline: theme('formControl.focus.outline'),
                boxShadow: `${theme('formControl.focus.boxShadow')}${theme('formControl.enableShadows') ? `, ${theme('formControl.boxShadow')}` : ''}`
            },
        
            // Placeholder
            '&::placeholder': {
                color: theme('formControl.placeholder.color'),
                // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
                opacity: theme('formControl.placeholder.opacity'),
            },
        
            // Disabled and read-only inputs
            //
            // HTML5 says that controls under a fieldset > legend:first-child won't be
            // disabled if the fieldset is disabled. Due to implementation difficulty, we
            // don't honor that edge case; we style them as disabled anyway.
            '&:disabled, &[readonly]': {
                backgroundColor: theme('formControl.disabled.backgroundColor'),
                borderColor: theme('formControl.disabled.borderColor'),
                // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
                opacity: theme('formControl.disabled.opacity')
            }
        },
        
        // Readonly controls as plain text
        //
        // Apply class to a readonly input to make it appear like regular plain
        // text (without any border, background color, focus indicator)
        
        '.form-control-plaintext, .form-control-plaintext[readonly]': {
            display: theme('formControl.plaintext.display'),
            width: theme('formControl.plaintext.width'),
            padding: `${theme('formControl.plaintext.paddingY')} ${theme('formControl.plaintext.paddingX')}`,
            marginBottom: theme('formControl.plaintext.marginBottom'), // match inputs if this class comes on inputs with default margins
            lineHeight: theme('formControl.plaintext.lineHeight'),
            color: theme('formControl.plaintext.color'),
            backgroundColor: theme('formControl.plaintext.backgroundColor'),
            borderStyle: theme('formControl.plaintext.borderStyle'),
            borderColor: theme('formControl.plaintext.borderColor'),
            borderWidth: theme('formControl.plaintext.borderWidth'),
            boxShadow: 'none',

            '&.form-control-sm, &.form-control-lg': {
                paddingRight: theme('formControl.plaintext.paddingX'),
                paddingLeft: theme('formControl.plaintext.paddingY'),
            }
        },
        
        // Form control sizing
        //
        // Build on `.form-control` with modifier classes to decrease or increase the
        // height and font-size of form controls.

        '.form-control-sm': {
            minHeight: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.sm.paddingY')} * 2 + 1px * 2)`,
            padding: `${theme('formControl.sm.paddingY')} ${theme('formControl.sm.paddingX')}`,
            fontSize: theme('formControl.sm.fontSize'),
            borderRadius: theme('formControl.sm.borderRadius'),
        },
        
        '.form-control-lg': {
            minHeight: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.lg.paddingY')} * 2 + 1px * 2)`,
            padding: `${theme('formControl.lg.paddingY')} ${theme('formControl.lg.paddingX')}`,
            fontSize: theme('formControl.lg.fontSize'),
            borderRadius: theme('formControl.lg.borderRadius'),
        },
        
        '.form-control-color': {
            maxWidth:theme('formControl.colorControl.maxWidth'),
            padding: theme('formControl.colorControl.padding'),
        },
        
        '.form-control-color::-moz-color-swatch': {
            borderRadius: theme('formControl.borderRadius'),
        },
        
        '.form-control-color::-webkit-color-swatch': {
            borderRadius: theme('formControl.borderRadius')
        }
    };

    addComponents(component);
}, {
    theme: {
        formControl: theme => ({
            display: 'block',
            width: '100%',
            lineHeight: '1.5',
            color: theme('colors.gray.700', colors.gray['700']),
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
            transition: 'border-color .15s ease-in-out, box-shadow .15s ease-in-out',
            enableShadows: true,
            colorControl: {
                maxWidth: '3rem',
                padding: '.375rem'
            },
            focus: {
                color: theme('colors.gray.700', colors.gray['700']),
                backgroundColor: theme('colors.white', colors.white),
                borderColor: Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).hex(),
                outline: 0,
                width: '.2rem',
                opacity: .5,
                boxShadow: `0 0 0 .2rem ${Color(theme('variations.primary', theme('colors.blue.400', colors.blue['400']))).fade(.5)}`
            },
            placeholder: {
                opacity: 1,
                color: theme('colors.gray.400', colors.gray['400'])
            },
            disabled: {
                opacity: 1,
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