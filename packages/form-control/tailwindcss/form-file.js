const rgba = require('./rgba');
const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const { flatten } = require('@vue-interface/tailwindcss/utils');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': flatten(theme('formFile'), '--form-file-'),
        
        '.form-file': {
            // --bs-form-fileHeight: #{$form-file-height};
            position: 'relative',
        },
          
        '.form-file .form-file-input': {
            position: 'relative',
            zIndex: 2,
            width: '100%',
            height: theme('formFile.height'),
            margin: 0,
            opacity: 0,
        },

        '.form-file .form-file-input:focus-within ~ .form-file-label': {
            borderColor: theme('formFile.focus.borderColor'),
            boxShadow: theme('formFile.focus.boxShadow'),
        },
          
        // Use disabled attribute in addition of :disabled pseudo-class
        // See: https://github.com/twbs/bootstrap/issues/28247
        '.form-file .form-file-input[disabled] ~ .form-file-label .form-file-text, .form-file .form-file-input:disabled ~ .form-file-label .form-file-text': {
            backgroundColor: theme('formFile.disabled.backgroundColor'),
        },
        
        '.form-file-label': {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 1,
            display: 'flex',
            height: theme('formFile.height'),
            borderColor: theme('formFile.borderColor'),
            borderRadius: theme('formFile.borderRadius'),
            boxShadow: theme('formFile.boxShadow'),
        },
        
        '.form-file-text': {
            display: 'block',
            flexGrow: 1,
            padding: `${theme('formFile.paddingY')} ${theme('formFile.paddingX')}`,
            overflow: 'hidden',
            fontFamily: theme('formFile.fontFamily'),
            fontWeight: theme('formFile.fontWeight'),
            lineHeight: theme('formFile.lineHeight'),
            color: theme('formFile.color'),
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            backgroundColor: theme('formFile.backgroundColor'),
            borderColor: 'inherit',
            borderStyle: 'solid',
            borderWidth: theme('formFile.borderWidth'),
            borderTopLeftRadius: 'inherit',
            borderBottomLeftRadius: 'inherit',
        },
          
        '.form-file-button': {
            display: 'block',
            flexShrink: 0,
            padding: `${theme('formFile.paddingY')} ${theme('formFile.paddingX')}`,
            marginLeft: `-${theme('formFile.borderWidth')}`,
            lineHeight: theme('formFile.lineHeight'),
            color: theme('formFile.button.color'),
            backgroundColor: theme('formFile.button.backgroundColor'),
            borderColor: 'inherit',
            borderStyle: 'solid',
            borderWidth: theme('formFile.borderWidth'),
            borderTopRightRadius: 'inherit',
            borderBottomRightRadius: 'inherit',
        },
          
        '.form-file-sm': {
            // --bs-form-fileHeight: #{$form-file-height-sm};
            fontSize: theme('formFile.sm.fontSize')
        },
          
        '.form-file-sm .form-file-text, .form-file-sm .form-file-button': {
            padding: `${theme('formFile.sm.paddingY')} ${theme('formFile.sm.paddingY')}`
        },
          
        '.form-file-lg': {
            // --bs-form-fileHeight: #{$form-file-height-lg};
            fontSize: theme('formFile.lg.fontSize'),
        },

        '.form-file-lg .form-file-text, .form-file-lg .form-file-button': {
            padding: `${theme('formFile.lg.paddingY')} ${theme('formFile.lg.paddingY')}`
        }
            
    };

    addComponents(component);
}, {
    theme: {
        formFile: theme => ({
            height: `calc(${theme('formControl.lineHeight', 1.5)} * 1em + ${theme('formControl.paddingY', '.375rem')} * 2 + ${theme('formControl.borderWidth', '1px')} * 2)`,
            paddingY: theme('formControl.paddingY', '.375rem'),
            paddingX: theme('formControl.paddingX', '.75rem'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            fontFamily: theme('formControl.fontFamily', 'inherit'),
            fontWeight: theme('formControl.fontWeight', 400),
            color: theme('formControl.color', theme('colors.gray.400', colors.gray['400'])),
            backgroundColor: theme('formControl.backgroundColor', theme('colors.white', colors.white)),
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.600', colors.gray['600'])),
            borderRadius: theme('formControl.borderRadius', '.25rem'),
            boxShadow: theme('formControl.boxShadow', 'inset 0 1px 2px rgba(0, 0, 0, .075)'),

            focus: {
                borderColor: theme('formControl.focus.borderColor', theme('colors.blue.400', colors.blue['400'])),
                boxShadow: theme('formControl.focus.boxShadow', `0 0 0 .2rem ${rgba(theme('colors.blue.500', colors.blue['500']), .25)}`)
            },
            disabled: {
                borderColor: theme('formControl.disabled.borderColor', 'inherit'),
                backgroundColor: theme('formControl.disabled.backgroundColor', theme('colors.gray.200', colors.gray['200']))
            },

            button: {
                color: theme('formControl.color', colors.gray['600']),
                backgroundColor: theme('formControl.disabled.backgroundColor', colors.gray['200']),
            },

            sm: {
                paddingY: theme('formControl.sm.paddingY', '.25rem'),
                paddingX: theme('formControl.sm.paddingX', '.5rem'),
                fontSize: theme('formControl.sm.fontSize', '.875rem'),
                height: `calc(${theme('formControl.lineHeight', 1.5)} * 1em + ${theme('formControl.sm.paddingY', '.25rem')} * 2 + ${theme('formControl.borderWidth', '1px')} * 2)`,
            },

            lg: {
                paddingY: theme('formControl.lg.paddingY', '.5rem'),
                paddingX: theme('formControl.lg.paddingX', '.1rem'),
                fontSize: theme('formControl.lg.fontSize', '1.25rem'),
                height: `calc(${theme('formControl.lineHeight', 1.5)} * 1em + ${theme('formControl.lg.paddingY', '.5rem')} * 2 + ${theme('formControl.borderWidth', '1px')} * 2)`,
            }
        })
    }
});