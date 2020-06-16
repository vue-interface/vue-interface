const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        '.form-select': {
            display: theme('form.select.dislay'),
            width: theme('form.select.width'),
            height: `calc(${theme('form.select.lineHeight')} * 1em + ${theme('form.select.paddingY')} * 2 + ${theme('form.select.borderWidth')} * 2)`,
            padding: `${theme('form.select.paddingY')} ${theme('form.select.paddingX')}`,
            fontFamily: theme('form.select.fontFamily'),
            // @include font-size($form-select-font-size);
            fontWeight: theme('form.select.fontWeight'),
            lineHeight: theme('form.select.lineHeight'),
            color: theme('form.select.color'),
            verticalAlign: theme('form.select.verticalAlign'),
            backgroundColor: theme('form.select.backgroundColor'),
            backgroundImage: theme('form.select.backgroundImage'),
            backgroundRepeat: theme('form.select.backgroundRepeat'),
            backgroundPosition: theme('form.select.backgroundPosition'),
            backgroundSize: theme('form.select.backgroundSize'),
            border: `${theme('form.select.borderWidth')} ${theme('form.select.borderStyle')} ${theme('form.select.borderColor')}`,

            // @include border-radius($form-select-border-radius, 0);
            // @include box-shadow($form-select-box-shadow);
            
            appearance: theme('form.select.appearance'),

            '&:focus': {
                color: theme('form.select.focus.color'),
                backgroundColor: theme('form.select.focus.backgroundColor'),
                borderColor: theme('form.select.focus.borderColor'),
                outline: theme('form.select.focus.outline'),
                boxShadow: `${theme('form.select.enableShadows') ? `${theme('form.select.boxShadow')}, ` : ''}${theme('form.select.focus.boxShadow')}`,
            

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
                paddingRight: theme('form.select.paddingX'),
                backgroundImage: 'none'
            },

            '&:disabled': {
                color: theme('form.select.disabled.color'),
                backgroundColor: theme('form.select.disabled.backgroundColor'),
                borderColor: theme('form.select.disabled.borderColor'),
            },

            // Remove outline from select box in FF
            '&:-moz-focusring': {
                color: 'transparent',
                textShadow: `0 0 0 ${theme('form.select.color')}`
            }
        },

        '.form-select-sm': {
            height: `calc(${theme('form.select.lineHeight')} * 1em + ${theme('form.select.sm.paddingY')} * 2 + ${theme('form.select.borderWidth')} * 2)`,
            paddingTop: theme('form.select.sm.paddingY'),
            paddingBottom: theme('form.select.sm.paddingY'),
            paddingLeft: theme('form.select.sm.paddingX'),
            fontSize: theme('form.select.sm.fontSize'),
            borderRadius: theme('form.select.sm.borderRadius'),
        },
        
        '.form-select-lg': {
            height: `calc(${theme('form.select.lineHeight')} * 1em + ${theme('form.select.lg.paddingY')} * 2 + ${theme('form.select.borderWidth')} * 2)`,
            paddingTop: theme('form.select.lg.paddingY'),
            paddingBottom: theme('form.select.lg.paddingY'),
            paddingLeft: theme('form.select.lg.paddingX'),
            fontSize: theme('form.select.lg.fontSize'),
            borderRadius: theme('form.select.lg.borderRadius'),
        }
    };

    addComponents(component);
}, {
    theme: {
        form: {
            select: ({ theme }) => ({
                dislay: 'block',
                width: '100%',
                paddingY: '.375rem',
                paddingX: '.75rem',
                lineHeight: 1.5,
                fontFamily: null,
                fontWeight: 400,
                color: theme('colors.gray.400', colors.gray['400']),
                verticalAlign: 'middle',
                backgroundColor: theme('colors.white', colors.white),
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><path fill='none' stroke='${theme('colors.gray.700', colors.gray['700'])}' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/></svg>")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right .375rem center',
                backgroundSize: '16px 12px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: theme('colors.gray.600', colors.gray['600']),
                appearance: 'none',
                focus: {
                    color: theme('colors.gray.700', colors.gray['700']),
                    backgroundColor: theme('colors.white', colors.white),
                    borderColor: theme('colors.blue.400', colors.blue['400']),
                    outline: 0,
                    boxShadow: `0 0 0 .2rem rgba(${theme('colors.blue.500', colors.blue['500'])}, .25)`
                },
                placeholder: {
                    color: theme('colors.gray.500', colors.gray['500'])
                },
                disabled: {
                    borderColor: null,
                    color: theme('colors.gray.500', colors.gray['500']),
                    backgroundColor: theme('colors.gray.200', colors.gray['200'])
                },
                sm: {
                    paddingY: '.25rem',
                    paddingX: '.5rem',
                    fontSize: '.875rem',
                    borderRadius: '.2rem'
                },
                lg: {
                    paddingY: '.5rem',
                    paddingX: '.1rem',
                    fontSize: '1.25rem',
                    borderRadius: '.3rem'
                }
            })
        }
    }
});