const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
const Color = require('color');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        // '*, ::before, ::after': {
        //     '--form-control-display': theme('formControl.display'),
        //     '--form-control-width': theme('formControl.width'),
        //     '--form-control-min-height': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2 + 1px * 2)`,
        //     '--form-control-line-height': theme('formControl.lineHeight'),
        //     '--form-control-color': theme('formControl.color'),
        //     '--form-control-font-size': theme('formControl.fontSize'),
        //     '--form-control-padding-x': theme('formControl.paddingX'),
        //     '--form-control-padding-y': theme('formControl.paddingY'),
        //     '--form-control-border-width': theme('formControl.borderWidth'),
        //     '--form-control-border-color': theme('formControl.borderColor'),
        //     '--form-control-border-style': theme('formControl.borderStyle'),
        //     '--form-control-font-family': theme('formControl.fontFamily'),
        //     '--form-control-font-weight': `${theme('formControl.fontWeight')}`,
        //     '--form-control-background-color': theme('formControl.backgroundColor'),
        //     '--form-control-background-clip': theme('formControl.backgroundClip'),
        //     '--form-control-appearance': theme('formControl.appearance'),
        //     '--form-control-box-shadow': theme('formControl.boxShadow'),
        //     '--form-control-border-radius': theme('formControl.borderRadius'),
        //     '--form-control-transition': theme('formControl.transition'),

        //     '--form-control-height-inner': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2)`,
        //     '--form-control-height-inner-half': `calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 2)`,
        //     '--form-control-height-inner-quarter': `calc((${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2) / 2)`,

        //     '--form-control-focus-color': theme('formControl.focus.color'),
        //     '--form-control-focus-width': theme('formControl.focus.width'),
        //     '--form-control-focus-opacity': `${theme('formControl.focus.opacity')}`,
        //     '--form-control-focus-background-color': theme('formControl.focus.backgroundColor'),
        //     '--form-control-focus-border-color': theme('formControl.focus.borderColor'),
        //     '--form-control-focus-outline': `${theme('formControl.focus.outline')}`,
        //     '--form-control-focus-box-shadow': `${theme('formControl.focus.boxShadow')}${theme('formControl.enableShadows') ? `, ${theme('formControl.boxShadow')}` : ''}`,
            
        //     '--form-control-placeholder-opacity': theme('formControl.placeholder.opacity'),
        //     '--form-control-placeholder-color': theme('formControl.placeholder.color'),
            
        //     '--form-control-disabled-opacity': theme('formControl.disabled.opacity'),
        //     '--form-control-disabled-border-color': theme('formControl.disabled.borderColor'),
        //     '--form-control-disabled-background-color': theme('formControl.disabled.backgroundColor'),
            
        //     '--form-control-plaintext-display': theme('formControl.plaintext.display'),
        //     '--form-control-plaintext-width': theme('formControl.plaintext.width'),
        //     '--form-control-plaintext-padding-x': theme('formControl.plaintext.paddingX'),
        //     '--form-control-plaintext-padding-y': theme('formControl.plaintext.paddingY'),
        //     '--form-control-plaintext-color': theme('formControl.plaintext.color'),
        //     '--form-control-plaintext-background-color': theme('formControl.plaintext.backgroundColor'),
        //     '--form-control-plaintext-border-width': theme('formControl.plaintext.borderWidth'),
        //     '--form-control-plaintext-border-style': theme('formControl.plaintext.borderStyle'),
        //     '--form-control-plaintext-border-color': theme('formControl.plaintext.borderColor'),
        //     '--form-control-plaintext-line-height': theme('formControl.plaintext.lineHeight'),
        //     '--form-control-plaintext-margin-bottom': theme('formControl.plaintext.marginBottom'),

        //     '--form-control-color-control-max-width': theme('formControl.colorControl.maxWidth'),
        //     '--form-control-color-control-padding': theme('formControl.colorControl.padding'),
            
        //     '--form-control-sm-padding-x': theme('formControl.sm.paddingX'),
        //     '--form-control-sm-padding-y': theme('formControl.sm.paddingY'),
        //     '--form-control-sm-font-size': theme('formControl.sm.fontSize'),
        //     '--form-control-sm-border-radius': theme('formControl.sm.borderRadius'),
        //     '--form-control-sm-min-height': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.sm.paddingY')} * 2 + 1px * 2)`,
            
        //     '--form-control-lg-padding-x': theme('formControl.lg.paddingX'),
        //     '--form-control-lg-padding-y': theme('formControl.lg.paddingY'),
        //     '--form-control-lg-font-size': theme('formControl.lg.fontSize'),
        //     '--form-control-lg-border-radius': theme('formControl.lg.borderRadius'),
        //     '--form-control-lg-min-height': `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.lg.paddingY')} * 2 + 1px * 2)`,
        // },

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
                color: theme('colors.gray.500', colors.gray['500'])
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