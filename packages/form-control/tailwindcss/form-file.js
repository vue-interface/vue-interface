const rgba = require('./rgba');
const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-file-display': theme('formFile.display'),
            '--form-file-line-height': `${theme('formFile.lineHeight')}`,
            '--form-file-padding-y': theme('formFile.paddingY'),
            '--form-file-padding-x': theme('formFile.paddingX'),
            '--form-file-border-radius': theme('formFile.borderRadius'),
            '--form-file-border-width': theme('formFile.borderWidth'),
            '--form-file-position': theme('formFile.position'),
            '--form-file-z-index': `${theme('formFile.zIndex')}`,
            '--form-file-color': theme('formFile.color'),
            '--form-file-width': theme('formFile.width'),
            '--form-file-height': theme('formFile.height'),
            '--form-file-margin': theme('formFile.margin'),
            '--form-file-opacity': theme('formFile.opacity'),
            '--form-file-font-weight': `${theme('formFile.fontWeight')}`,
            '--form-file-background-color': theme('formFile.backgroundColor'),
            '--form-file-border-color': theme('formFile.borderColor'),
            '--form-file-border-style': theme('formFile.borderStyle'),
            '--form-file-box-shadow': theme('formFile.boxShadow'),

            '--form-file-focus-background-color': theme('formFile.focus.backgroundColor'),
            '--form-file-focus-border-color': theme('formFile.focus.borderColor'),
            '--form-file-focus-box-shadow': theme('formFile.focus.boxShadow'),

            '--form-file-disabled-background-color': theme('formFile.disabled.backgroundColor'),
            '--form-file-disabled-border-color': theme('formFile.disabled.borderColor'),
            '--form-file-disabled-box-shadow': theme('formFile.disabled.boxShadow'),
            
            '--form-file-label-position': theme('formFile.label.position'),
            '--form-file-label-top': theme('formFile.label.top'),
            '--form-file-label-right': theme('formFile.label.right'),
            '--form-file-label-left': theme('formFile.label.left'),
            '--form-file-label-z-index': `${theme('formFile.label.zIndex')}`,
            '--form-file-label-display': theme('formFile.label.display'),

            '--form-file-text-display': theme('formFile.text.display'),
            '--form-file-text-flex-grow': `${theme('formFile.text.flexGrow')}`,
            '--form-file-text-padding': theme('formFile.text.padding'),
            '--form-file-text-overflow': theme('formFile.text.overflow'),
            '--form-file-text-font-family': theme('formFile.fontFamily'),
            '--form-file-text-font-weight': `${theme('formFile.fontWeight')}`,
            '--form-file-text-line-height': `${theme('formFile.lineHeight')}`,
            '--form-file-text-color': theme('formFile.text.color'),
            '--form-file-text-text-overflow': theme('formFile.text.textOverflow'),
            '--form-file-text-white-space': theme('formFile.text.whiteSpace'),
            '--form-file-text-background-color': theme('formFile.text.backgroundColor'),
            '--form-file-text-border-color': theme('formFile.borderColor'),
            '--form-file-text-border-style': theme('formFile.borderStyle'),
            '--form-file-text-border-width': theme('formFile.borderWidth'),
            '--form-file-text-border-top-left-radius': theme('formFile.text.borderTopLeftRadius'),
            '--form-file-text-border-bottom-left-radius': theme('formFile.text.borderBottomLeftRadius'),

            '--form-file-button-display': theme('formFile.button.display'),
            '--form-file-button-flex-shrink': theme('formFile.button.flexShrink'),
            '--form-file-button-padding': theme('formFile.button.padding'),
            '--form-file-button-margin-left': theme('formFile.borderWidth'),
            '--form-file-button-line-height': theme('formFile.lineHeight'),
            '--form-file-button-color': theme('formFile.button.color'),
            '--form-file-button-background-color': theme('formFile.button.backgroundColor'),
            '--form-file-button-border-color': theme('formFile.borderColor'),
            '--form-file-button-border-style': theme('formFile.borderStyle'),
            '--form-file-button-border-width': theme('formFile.borderWidth'),
            '--form-file-button-border-top-right-radius': theme('formFile.button.borderTopRightRadius'),
            '--form-file-button-border-bottom-right-radius': theme('formFile.button.borderBottomRightRadius'),

            '--form-file-sm-font-size': theme('formFile.sm.fontSize'),
            '--form-file-sm-padding-y': theme('formFile.sm.paddingY'),
            '--form-file-sm-padding-x': theme('formFile.sm.paddingX'),
            '--form-file-sm-height': theme('formFile.sm.height'),

            '--form-file-lg-font-size': theme('formFile.lg.fontSize'),
            '--form-file-lg-padding-y': theme('formFile.lg.paddingY'),
            '--form-file-lg-padding-x': theme('formFile.lg.paddingX'),
            '--form-file-lg-height': theme('formFile.lg.height'),
        },

        '.form-file': {
            position: theme('formFile.position'),
            height: theme('formFile.height')
        },
          
        '.form-file-input': {
            height: 'inherit',
            position: theme('formFile.position'),
            zIndex: theme('formFile.zIndex'),
            width: theme('formFile.width'),
            margin: theme('formFile.margin'),
            opacity: theme('formFile.opacity'),
          
            '&:focus-within ~ .form-file-label': {
                borderColor: theme('formFile.focus.borderColor'),
                boxShadow: theme('formFile.focus.boxShadow'),
            },
          
            // Use disabled attribute in addition of :disabled pseudo-class
            // See: https://github.com/twbs/bootstrap/issues/28247
            '&[disabled] ~ .form-file-label .form-file-text, &:disabled ~ .form-file-label .form-file-text': {
                backgroundColor: theme('formFile.disabled.backgroundColor'),
                borderColor: theme('formFile.disabled.borderColor'),
            }
        },
          
        '.form-file-label': {
            position: theme('formFile.label.position'),
            top: theme('formFile.label.top'),
            right: theme('formFile.label.right'),
            left: theme('formFile.label.left'),
            zIndex: theme('formFile.label.zIndex'),
            display: theme('formFile.label.display'),
            borderColor: theme('formFile.borderColor'),
            borderRadius: theme('formFile.borderRadius'),
            boxShadow: theme('formFile.boxShadow'),
        },
          
        '.form-file-text': {
            display: theme('formFile.text.display'),
            flexGrow: theme('formFile.text.flexGrow'),
            padding: theme('formFile.text.padding'),
            overflow: theme('formFile.text.overflow'),
            fontFamily: theme('formFile.fontFamily'),
            fontWeight: theme('formFile.fontWeight'),
            lineHeight: theme('formFile.lineHeight'),
            color: theme('formFile.text.color'),
            textOverflow: theme('formFile.text.textOverflow'),
            whiteSpace: theme('formFile.text.whiteSpace'),
            backgroundColor: theme('formFile.text.backgroundColor'),
            borderColor: theme('formFile.borderColor'),
            borderStyle: theme('formFile.borderStyle'),
            borderWidth: theme('formFile.borderWidth'),
            borderTopLeftRadius: theme('formFile.text.borderTopLeftRadius'),
            borderBottomLeftRadius: theme('formFile.text.borderBottomLeftRadius')
        },
          
        '.form-file-button': {
            display: theme('formFile.button.display'),
            flexShrink: theme('formFile.button.flexShrink'),
            padding: theme('formFile.text.padding'),
            marginLeft: `calc(${theme('formFile.borderWidth')} * -1)`,
            lineHeight: theme('formFile.lineHeight'),
            color: theme('formFile.button.color'),
            backgroundColor: theme('formFile.button.backgroundColor'),
            borderColor: theme('formFile.borderColor'),
            borderStyle: theme('formFile.borderStyle'),
            borderWidth: theme('formFile.borderWidth'),
            borderTopLeftRadius: theme('formFile.button.borderTopLeftRadius'),
            borderTopRightRadius: theme('formFile.button.borderTopRightRadius'),
            borderBottomLeftRadius: theme('formFile.button.borderBottomLeftRadius'),
            borderBottomRightRadius: theme('formFile.button.borderBottomRightRadius'),
        },
          
        '.form-file-sm': {
            height: theme('formFile.sm.height'),
            fontSize: theme('formFile.sm.fontSize'),

            '.form-file-text, .form-file-button': {
                padding: `${theme('formFile.sm.paddingY')} ${theme('formFile.sm.paddingX')}`,
            }
        },
          
        '.form-file-lg': {
            height: theme('formFile.lg.height'),
            fontSize: theme('formFile.lg.fontSize'),

            '.form-file-text, .form-file-button': {
                padding: `${theme('formFile.lg.paddingY')} ${theme('formFile.lg.paddingX')}`,
            }
        }     
    };

    addComponents(component);
}, {
    theme: {
        formFile: theme => ({
            display: theme('formControl.display', 'block'),
            width: theme('formControl.width', '100%'),
            height: `calc(${theme('formControl.lineHeight', 1.5)} * 1em + ${theme('formControl.paddingY', '.375rem')} * 2 + ${theme('formControl.borderWidth', '1px')} * 2)`,
            color: theme('formControl.color', theme('colors.gray.400', colors.gray['400'])),
            paddingY: theme('formControl.paddingY', '.375rem'),
            paddingX: theme('formControl.paddingX', '.75rem'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            fontFamily: theme('formControl.fontFamily', 'inherit'),
            fontWeight: theme('formControl.fontWeight', 400),
            backgroundColor: theme('formControl.backgroundColor', theme('colors.white', colors.white)),
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.600', colors.gray['600'])),
            borderStyle: theme('formControl.borderStyle', 'solid'),
            borderRadius: theme('formControl.borderRadius', '.25rem'),
            position: 'relative',
            boxShadow: theme('formControl.boxShadow', 'inset 0 1px 2px rgba(0, 0, 0, .075)'),
            zIndex: 2,
            margin: 0,
            opacity: 0,
            focus: {
                borderColor: theme('formControl.focus.borderColor', theme('colors.blue.400', colors.blue['400'])),
                boxShadow: theme('formControl.focus.boxShadow', `0 0 0 .2rem ${rgba(theme('colors.blue.500', colors.blue['500']), .25)}`)
            },
            disabled: {
                borderColor: theme('formControl.disabled.borderColor', 'inherit'),
                backgroundColor: theme('formControl.disabled.backgroundColor', theme('colors.gray.200', colors.gray['200']))
            },
            label: {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                zIndex: 1,
                display: 'flex',
            },
            text: {
                display: 'block',
                flexGrow: 1,
                overflow: 'hidden',
                fontWeight: theme('formControl.fontWeight', 400),
                padding: `${theme('formControl.paddingY', '.375rem')} ${theme('formControl.paddingX', '.75rem')}`,
                color: theme('formControl.color', theme('colors.gray.400', colors.gray['400'])),
                backgroundColor: theme('formControl.backgroundColor', theme('colors.white', colors.white)),
                borderWidth: theme('formControl.borderWidth', '1px'),
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                borderTopLeftRadius: 'inherit',
                borderBottomLeftRadius: 'inherit'
            },
            button: {
                display: 'block',
                flexShrink: 0,
                padding: `${theme('formControl.paddingY', '.375rem')} ${theme('formControl.paddingX', '.75rem')}`,
                color: theme('formControl.color', colors.gray['600']),
                backgroundColor: theme('formControl.disabled.backgroundColor', colors.gray['200']),
                borderColor: 'inherit',
                borderStyle: theme('formControl.borderStyle', 'solid'),
                borderTopRightRadius: 'inherit',
                borderBottomRightRadius: 'inherit',
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