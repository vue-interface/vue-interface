const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        '.form-file': {
            '--vui-form-file-height': `calc(${theme('form.file.lineHeight')} * 1em + ${theme('form.file.paddingY')} * 2 + ${theme('form.file.borderWidth')} * 2)`,
            position: theme('form.file.position')
        },
          
        '.form-file-input': {
            position: theme('form.file.position'),
            zIndex: theme('form.file.zIndex'),
            width: theme('form.file.width'),
            height: `var('--vui-form-file-height')`,
            margin: theme('form.file.margin'),
            opacity: theme('form.file.opacity'),
          
            '&:focus-within ~ .form-file-label': {
                borderColor: theme('form.file.focus.borderColor'),
                boxShadow: theme('form.file.focus.boxShadow'),
            },
          
            // Use disabled attribute in addition of :disabled pseudo-class
            // See: https://github.com/twbs/bootstrap/issues/28247
            '&[disabled] ~ .form-file-label .form-file-text, &:disabled ~ .form-file-label .form-file-text': {
                backgroundColor: theme('form.file.disabled.backgroundColor'),
                borderColor: theme('form.file.disabled.borderColor'),
            }
        },
          
        '.form-file-label': {
            position: theme('form.file.label.position'),
            top: theme('form.file.label.top'),
            right: theme('form.file.label.right'),
            left: theme('form.file.label.left'),
            zIndex: theme('form.file.label.zIndex'),
            display: theme('form.file.label.display'),
            height: theme('form.file.label.height'),
            borderColor: theme('form.file.label.borderColor'),
            borderRadius: theme('form.file.borderRadius'),
            boxShadow: theme('form.file.boxShadow'),
        },
          
        '.form-file-text': {
            display: theme('form.file.text.display'),
            flexGrow: theme('form.file.text.flexGrow'),
            padding: `${theme('form.file.paddingY')} ${theme('form.file.paddingX')}`,
            overflow: theme('form.file.text.overflow'),
            fontFamily: theme('form.file.text.fontFamily'),
            fontWeight: theme('form.file.text.fontWeight'),
            lineHeight: theme('form.file.lineHeight'),
            color: theme('form.file.text.color'),
            textOverflow: theme('form.file.text.textOverflow'),
            whiteSpace: theme('form.file.text.whiteSpace'),
            backgroundColor: theme('form.file.text.backgroundColor'),
            borderColor: theme('form.file.borderColor'),
            borderStyle: theme('form.file.borderStyle'),
            borderWidth: theme('form.file.borderWidth'),
            borderLeftTopRadius: theme('form.file.text.borderLeftRadius'),
            borderLeftBottomRadius: theme('form.file.text.borderLeftRadius')
        },
          
        '.form-file-button': {
            display: theme('form.file.button.display'),
            flexShrink: theme('form.file.button.flexShrink'),
            padding: `${theme('form.file.paddingY')} ${theme('form.file.paddingX')}`,
            marginLeft:`-${theme('form.file.borderWidth')}`,
            lineHeight: theme('form.file.lineHeight'),
            color: theme('form.file.button.color'),
            background: theme('form.file.background'),
            borderColor: theme('form.file.borderColor'),
            borderStyle: theme('form.file.borderStyle'),
            borderWidth: theme('form.file.borderWidth'),
            borderRightTopRadius: theme('form.file.button.borderRightRadius'),
            borderRightBottomRadius: theme('form.file.button.borderRightRadius'),
        },
          
        '.form-file-sm': {
            '--vui-form-file-height': `calc(${theme('form.file.lineHeight')} * 1em + ${theme('form.file.sm.paddingY')} * 2 + ${theme('form.file.borderWidth')} * 2)`,
            fontSize: theme('form.file.sm.fontSize'),

            '.form-file-text, .form-file-button': {
                padding: `${theme('form.file.sm.paddingY')} ${theme('form.file.sm.paddingX')}`,
            }
        },
          
        '.form-file-lg': {
            '--vui-form-file-height': `calc(${theme('form.file.lineHeight')} * 1em + ${theme('form.file.lg.paddingY')} * 2 + ${theme('form.file.borderWidth')} * 2)`,
            fontSize: theme('form.file.lg.fontSize'),

            '.form-file-text, .form-file-button': {
                padding: `${theme('form.file.lg.paddingY')} ${theme('form.file.lg.paddingX')}`,
            }
        }          
    };

    addComponents(component);
}, {
    theme: {
        form: {
            file: ({ theme }) => ({
                paddingY: '.375rem',
                paddingX: '.75rem',
                lineHeight: 1.5,
                borderWidth: '1px',
                borderColor: 'inherit',
                borderStyle: 'solid',
                borderRadius: '.25rem',
                position: theme('form.file.position'),
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .075)',
                zIndex: 2,
                margin: 0,
                opacity: 0,
                focus: {
                    borderColor: theme('colors.blue.400', colors.blue['400']),
                    boxShadow: `0 0 0 .2rem rgba(${theme('colors.blue.500', colors.blue['500'])}, .25)`
                },
                disabled: {
                    borderColor: null,
                    backgroundColor: theme('colors.gray.200', colors.gray['200'])
                },
                label: {
                    borderColor: theme('colors.gray.600', colors.gray['600']),
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    zIndex: 1,
                    height: `var('--vui-form-file-height')`,
                    display: 'flex',
                },
                text: {
                    display: 'block',
                    flexGrow: 1,
                    overflow: 'hidden',
                    fontFamily: null,
                    fontWeight: 400,
                    color: theme('colors.gray.400', colors.gray['400']),
                    backgroundColor: theme('colors.white', colors.white),
                    borderWidth: '1px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    borderLeftRadius: 'inherit'
                },
                button: {
                    display: 'block',
                    flexShrink: 0,
                    color: theme('colors.gray.400', colors.gray['400']),
                    background: theme('colors.gray.200', colors.gray['200']),
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderRightRadius: 'inherit'
                },
                sm: {
                    paddingY: '.25rem',
                    paddingX: '.5rem',
                    fontSize: '.875rem',
                },
                lg: {
                    paddingY: '.5rem',
                    paddingX: '.1rem',
                    fontSize: '1.25rem'
                }
            })
        }
    }
});