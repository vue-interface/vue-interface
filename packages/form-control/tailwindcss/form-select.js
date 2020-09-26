const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const { escapeSvg, flatten, rgba } = require('@vue-interface/tailwindcss/utils');

console.log(escapeSvg(`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='red' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>`));

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': flatten(theme('formSelect'), '--form-select-'),
        
        '.form-select': {
            display: 'block',
            width: '100%',
            height: `calc(${theme('formSelect.lineHeight')} * 1em + ${theme('formSelect.paddingY')} * 2 + ${theme('formSelect.borderWidth')} * 2)`,
            padding: `${theme('formSelect.paddingY')} ${theme('formSelect.paddingX')}`,
            fontFamily: theme('formSelect.fontFamily'),
            fontSize: theme('formSelect.fontSize'),
            fontWeight: theme('formSelect.fontWeight'),
            lineHeight: theme('formSelect.lineHeight'),
            color: theme('formSelect.color'),
            verticalAlign: 'middle',
            backgroundColor: theme('formSelect.backgroundColor'),
            backgroundImage: theme('formSelect.backgroundImage'),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: theme('formSelect.backgroundPosition'),
            backgroundSize: theme('formSelect.backgroundSize'),
            border: `${theme('formSelect.borderWidth')} ${theme('formSelect.borderStyle')} ${theme('formSelect.borderColor')}`,
            borderRadius: theme('formSelect.borderRadius'),
            boxShadow: theme('formSelect.enableShadows') && theme('formSelect.boxShadow'),
            '-webkit-appearance': 'none',
            appearance: 'none'
        },
            
        '.form-select:focus': {
            color: theme('formSelect.focus.color'),
            backgroundColor: theme('formSelect.focus.backgroundColor'),
            borderColor: theme('formSelect.focus.borderColor'),
            outline: theme('formSelect.focus.outline'),
            boxShadow: `${theme('formSelect.focus.boxShadow')}${theme('formSelect.enableShadows') ? `, ${theme('formSelect.boxShadow')}` : ''}`,
        },
            
        '.form-select::-ms-value': {
            // For visual consistency with other platforms/browsers,
            // suppress the default white text on blue background highlight given to
            // the selected option text when the (still closed) <select> receives focus
            // in Edge.
            // See https://github.com/twbs/bootstrap/issues/19398.
            color: theme('colors.gray.700', colors.gray['700']),
            backgroundColor: theme('colors.white', colors.white),
        },

        '.form-select[multiple], .form-select[size]:not([size="1"])': {
            height: 'auto',
            paddingRight: theme('formSelect.paddingX'),
            backgroundImage: 'none'
        },

        '.form-select:disabled': {
            color: theme('formSelect.disabled.color'),
            backgroundColor: theme('formSelect.disabled.backgroundColor'),
            borderColor: theme('formSelect.disabled.borderColor'),
        },

        // Remove outline from select box in FF
        '.form-select:-moz-focusring': {
            color: 'transparent',
            textShadow: `0 0 0 ${theme('formSelect.color')}`
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
            enableShadows: theme('formControl.enableShadows'),
            paddingY: theme('formControl.paddingY', '.375rem'),
            paddingX: theme('formControl.paddingX', '.75rem'),
            fontSize: theme('formControl.fontSize', '1rem'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            fontFamily: theme('formControl.fontFamily', null),
            fontWeight: theme('formControl.fontWeight', 400),
            boxShadow: theme('formControl.boxShadow', 'inset 0 1px 2px rgba(0, 0, 0, .075)'),
            borderRadius: theme('formControl.borderRadius', '.25rem'),
            color: theme('colors.gray.800', colors.gray['800']),
            backgroundColor: theme('colors.white', colors.white),
            backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='${theme('colors.gray.700', colors.gray['700'])}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>")`),
            backgroundPosition: `right ${theme('formControl.paddingY', '.375rem')} center`,
            backgroundSize: '16px 12px',
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderStyle: theme('formControl.borderStyle', 'solid'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400'])),
            indicator: {
                paddingY: '1rem',
                paddingX: '1rem',
            },
            focus: {
                color: theme('formControl.color', theme('colors.gray.700', colors.gray['700'])),
                backgroundColor: theme('formControl.backgroundColor', theme('colors.white', colors.white)),
                borderColor: theme('formControl.borderColor', theme('colors.blue.400', colors.blue['400'])),
                outline: theme('formControl.outline', 0),
                boxShadow: theme('formControl.focus.boxShadow', `0 0 0 .2rem ${rgba(theme('colors.blue.500', colors.blue['500']), .25)}`)
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