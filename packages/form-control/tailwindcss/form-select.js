const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const rgba = require('./rgba');
const encodeSVG = require('./encode-svg');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-select-display': theme('formSelect.display'),
            '--form-select-width': theme('formSelect.width'),
            '--form-select-padding-y': theme('formSelect.paddingY'),
            '--form-select-padding-x': theme('formSelect.paddingX'),
            '--form-select-font-size': theme('formSelect.fontSize'),
            '--form-select-line-height': theme('formSelect.lineHeight'),
            '--form-select-font-family': theme('formSelect.fontFamily'),
            '--form-select-font-weight': theme('formSelect.fontWeight'),
            '--form-select-box-shadow': theme('formSelect.boxShadow'),
            '--form-select-color': theme('formSelect.color'),
            '--form-select-vertical-align': theme('formSelect.verticalAlign'),
            '--form-select-background-color': theme('formSelect.backgroundColor'),
            '--form-select-background-image': theme('formSelect.backgroundImage'),
            '--form-select-background-repeat': theme('formSelect.backgroundRepeat'),
            '--form-select-background-position': theme('formSelect.backgroundPosition'),
            '--form-select-background-repeat': theme('formSelect.backgroundRepeat'),
            '--form-select-background-size': theme('formSelect.backgroundSize'),
            '--form-select-border-width': theme('formSelect.borderWidth'),
            '--form-select-border-style': theme('formSelect.borderStyle'),
            '--form-select-border-color': theme('formSelect.borderColor'),
            '--form-select-border-radius': theme('formSelect.borderRadius'),
            '--form-select-appearance': theme('formSelect.appearance'),

            '--form-select-indicator-padding-y': theme('formSelect.indicator.paddingY'),
            '--form-select-indicator-padding-x': theme('formSelect.indicator.paddingX'),

            '--form-select-focus-color': theme('formSelect.focus.color'),
            '--form-select-focus-background-color': theme('formSelect.focus.backgroundColor'),
            '--form-select-focus-border-color': theme('formSelect.focus.borderColor'),
            '--form-select-focus-outline': theme('formSelect.focus.outline'),
            '--form-select-focus-box-shadow': `${theme('formSelect.focus.boxShadow')}${theme('formSelect.enableShadows') ? `, ${theme('formSelect.boxShadow')}` : ''}`,

            '--form-select-placeholder-color': theme('formSelect.placeholder.color'),

            '--form-select-disabled-border-color': theme('formSelect.disabled.borderColor'),
            '--form-select-disabled-color': theme('formSelect.disabled.color'),
            '--form-select-disabled-background-color': theme('formSelect.disabled.backgroundColor'),

            '--form-select-sm-padding-y': theme('formSelect.sm.paddingY'),
            '--form-select-sm-padding-x': theme('formSelect.sm.paddingX'),
            '--form-select-sm-font-size': theme('formSelect.sm.fontSize'),
            '--form-select-sm-border-radius': theme('formSelect.sm.borderRadius'),
            
            '--form-select-lg-padding-y': theme('formSelect.lg.paddingY'),
            '--form-select-lg-padding-x': theme('formSelect.lg.paddingX'),
            '--form-select-lg-font-size': theme('formSelect.lg.fontSize'),
            '--form-select-lg-border-radius': theme('formSelect.lg.borderRadius'),
        },
        
        '.form-select': {
            display: theme('formSelect.display'),
            width: theme('formSelect.width'),
            height: `calc(${theme('formSelect.lineHeight')} * 1em + ${theme('formSelect.paddingY')} * 2 + ${theme('formSelect.borderWidth')} * 2)`,
            padding: `${theme('formSelect.paddingY')} ${theme('formSelect.paddingX')}`,
            fontFamily: theme('formSelect.fontFamily'),
            fontSize: theme('formSelect.fontSize'),
            fontWeight: theme('formSelect.fontWeight'),
            lineHeight: theme('formSelect.lineHeight'),
            color: theme('formSelect.color'),
            verticalAlign: theme('formSelect.verticalAlign'),
            backgroundColor: theme('formSelect.backgroundColor'),
            backgroundImage: theme('formSelect.backgroundImage'),
            backgroundRepeat: theme('formSelect.backgroundRepeat'),
            backgroundPosition: theme('formSelect.backgroundPosition'),
            backgroundSize: theme('formSelect.backgroundSize'),
            border: `${theme('formSelect.borderWidth')} ${theme('formSelect.borderStyle')} ${theme('formSelect.borderColor')}`,
            borderRadius: theme('formSelect.borderRadius'),
            boxShadow: theme('formSelect.enableShadows') && theme('formSelect.boxShadow'),

            '-webkit-appearance': theme('formSelect.appearance'),
            appearance: theme('formSelect.appearance'),
            
            '&:focus': {
                color: theme('formSelect.focus.color'),
                backgroundColor: theme('formSelect.focus.backgroundColor'),
                borderColor: theme('formSelect.focus.borderColor'),
                outline: theme('formSelect.focus.outline'),
                boxShadow: `${theme('formSelect.focus.boxShadow')}${theme('formSelect.enableShadows') ? `, ${theme('formSelect.boxShadow')}` : ''}`,
            

                '&::-ms-value': {
                    // For visual consistency with other platforms/browsers,
                    // suppress the default white text on blue background highlight given to
                    // the selected option text when the (still closed) <select> receives focus
                    // in Edge.
                    // See https://github.com/twbs/bootstrap/issues/19398.
                    color: theme('colors.gray.700', colors.gray['700']),
                    backgroundColor: theme('colors.white', colors.white),
                }
            },

            '&[multiple], &[size]:not([size="1"])': {
                height: 'auto',
                paddingRight: theme('formSelect.paddingX'),
                backgroundImage: 'none'
            },

            '&:disabled': {
                color: theme('formSelect.disabled.color'),
                backgroundColor: theme('formSelect.disabled.backgroundColor'),
                borderColor: theme('formSelect.disabled.borderColor'),
            },

            // Remove outline from select box in FF
            '&:-moz-focusring': {
                color: 'transparent',
                textShadow: `0 0 0 ${theme('formSelect.color')}`
            }
        },

        '.form-select-sm': {
            height: `calc(${theme('formSelect.lineHeight')} * 1em + ${theme('formSelect.sm.paddingY')} * 2 + ${theme('formSelect.borderWidth')} * 2)`,
            paddingTop: theme('formSelect.sm.paddingY'),
            paddingBottom: theme('formSelect.sm.paddingY'),
            paddingLeft: theme('formSelect.sm.paddingX'),
            fontSize: theme('formSelect.sm.fontSize'),
            borderRadius: theme('formSelect.sm.borderRadius'),
        },
        
        '.form-select-lg': {
            height: `calc(${theme('formSelect.lineHeight')} * 1em + ${theme('formSelect.lg.paddingY')} * 2 + ${theme('formSelect.borderWidth')} * 2)`,
            paddingTop: theme('formSelect.lg.paddingY'),
            paddingBottom: theme('formSelect.lg.paddingY'),
            paddingLeft: theme('formSelect.lg.paddingX'),
            fontSize: theme('formSelect.lg.fontSize'),
            borderRadius: theme('formSelect.lg.borderRadius'),
        }
    };

    addComponents(component);
}, {
    theme: {
        formSelect: theme => ({
            enableShadows: theme('formControl.enableShadows', true),
            display: theme('formControl.display', 'block'),
            width: theme('formControl.width', '100%'),
            paddingY: theme('formControl.paddingY', '.375rem'),
            paddingX: theme('formControl.paddingX', '.75rem'),
            fontSize: theme('formControl.fontSize', '1rem'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            fontFamily: theme('formControl.fontFamily', null),
            fontWeight: theme('formControl.fontWeight', 400),
            boxShadow: theme('formControl.boxShadow', 'inset 0 1px 2px rgba(0, 0, 0, .075)'),
            borderRadius: theme('formControl.borderRadius', '.25rem'),
            color: theme('colors.gray.400', colors.gray['400']),
            verticalAlign: 'middle',
            backgroundColor: theme('colors.white', colors.white),
            backgroundImage: encodeSVG(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='${theme('colors.gray.700', colors.gray['700'])}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>")`),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: `right ${theme('formControl.paddingY', '.375rem')} center`,
            backgroundSize: '16px 12px',
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderStyle: theme('formControl.borderStyle', 'solid'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400'])),
            appearance: 'none',
            indicator: {
                paddingY: '1rem',
                paddingX: '1rem',
            },
            focus: {
                color: theme('formControl.color', theme('colors.gray.700', colors.gray['700'])),
                backgroundColor: theme('formControl.backgroundColor', theme('colors.white', colors.white)),
                borderColor: theme('formControl.borderColor', theme('colors.blue.400', colors.blue['400'])),
                outline: theme('formControl.outline', 0),
                boxShadow: theme('formControl.boxShadow', `0 0 0 .2rem ${rgba(theme('colors.blue.500', colors.blue['500']), .25)}`)
            },
            placeholder: {
                color: theme('formControl.placeholder.color', theme('colors.gray.500', colors.gray['500']))
            },
            disabled: {
                borderColor: theme('formControl.disabled.borderColor', null),
                color: theme('formControl.disabled.color', theme('colors.gray.500', colors.gray['500'])),
                backgroundColor: theme('formControl.disabled.backgroundColor', theme('colors.gray.200', colors.gray['200']))
            },
            sm: {
                paddingY: theme('formControl.sm.paddingY', '.25rem'),
                paddingX: theme('formControl.sm.paddingX', '.5rem'),
                fontSize: theme('formControl.sm.fontSize', '.875rem'),
                borderRadius: theme('formControl.sm.borderRadius', '.2rem')
            },
            lg: {
                paddingY: theme('formControl.lg.paddingY', '.5rem'),
                paddingX: theme('formControl.lg.paddingX', '1rem'),
                fontSize: theme('formControl.lg.fontSize', '1.25rem'),
                borderRadius: theme('formControl.lg.borderRadius', '.3rem')
            }
        })
    }
});