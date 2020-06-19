const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-file-display': theme('formFile.display'),
            '--form-file-line-height': theme('formFile.lineHeight'),
            '--form-file-padding-y': theme('formFile.paddingY'),
            '--form-file-padding-x': theme('formFile.paddingX'),
            '--form-file-border-radius': theme('formFile.borderRadius'),
            '--form-file-border-width': theme('formFile.borderWidth'),
            '--form-file-position': theme('formFile.position'),
            '--form-file-z-index': theme('formFile.zIndex'),
            '--form-file-color': theme('formFile.color'),
            '--form-file-width': theme('formFile.width'),
            '--form-file-height': theme('formFile.height'),
            '--form-file-margin': theme('formFile.margin'),
            '--form-file-opacity': theme('formFile.margin'),
            '--form-file-font-weight': theme('formFile.fontWeight'),
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
            '--form-file-label-z-index': theme('formFile.label.zIndex'),

            '--form-file-text-display': theme('formFile.text.display'),
            '--form-file-text-flex-grow': theme('formFile.text.flexGrow'),
            '--form-file-text-padding': theme('formFile.text.padding'),
            '--form-file-text-overflow': theme('formFile.text.overflow'),
            '--form-file-text-font-family': theme('formFile.fontFamily'),
            '--form-file-text-font-weight': theme('formFile.fontWeight'),
            '--form-file-text-line-height': theme('formFile.lineHeight'),
            '--form-file-text-color': theme('formFile.text.color'),
            '--form-file-text-text-overflow': theme('formFile.text.textOverflow'),
            '--form-file-text-white-space': theme('formFile.text.whiteSpace'),
            '--form-file-text-background-color': theme('formFile.text.backgroundColor'),
            '--form-file-text-border-color': theme('formFile.borderColor'),
            '--form-file-text-border-style': theme('formFile.borderStyle'),
            '--form-file-text-border-width': theme('formFile.borderWidth'),
            '--form-file-text-border-left-top-radius': theme('formFile.text.borderLeftRadius'),
            '--form-file-text-border-left-bottom-radius': theme('formFile.text.borderLeftRadius'),

            '--form-file-button-display': theme('formFile.button.display'),
            '--form-file-button-flex-shrink': theme('formFile.button.flexShrink'),
            '--form-file-button-padding': theme('formFile.button.padding'),
            '--form-file-button-margin-left': theme('formFile.borderWidth'),
            '--form-file-button-line-height': theme('formFile.lineHeight'),
            '--form-file-button-color': theme('formFile.button.color'),
            '--form-file-button-background-color': theme('formFile.backgroundColor'),
            '--form-file-button-border-color': theme('formFile.borderColor'),
            '--form-file-button-border-style': theme('formFile.borderStyle'),
            '--form-file-button-border-width': theme('formFile.borderWidth'),
            '--form-file-button-border-right-top-radius': theme('formFile.button.borderRightRadius'),
            '--form-file-button-border-right-bottom-radius': theme('formFile.button.borderRightRadius'),

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
            position: 'var(--form-file-position)'
        },
          
        '.form-file-input': {
            position: 'var(--form-file-position)',
            zIndex: 'var(--form-file-z-index)',
            width: 'var(--form-file-width)',
            margin: 'var(--form-file-margin)',
            opacity: 'var(--form-file-opacity)',
          
            '&:focus-within ~ .form-file-label': {
                borderColor: 'var(--form-file-focus-border-color)',
                boxShadow: 'var(--form-file-focus-box-shadow)',
            },
          
            // Use disabled attribute in addition of :disabled pseudo-class
            // See: https://github.com/twbs/bootstrap/issues/28247
            '&[disabled] ~ .form-file-label .form-file-text, &:disabled ~ .form-file-label .form-file-text': {
                backgroundColor: 'var(--form-file-disabled-background-color)',
                borderColor: 'var(--form-file-disabled-border-color)',
            }
        },
          
        '.form-file-label': {
            position: 'var(--form-file-label-position)',
            top: 'var(--form-file-label-top)',
            right: 'var(--form-file-label-right)',
            left: 'var(--form-file-label-left)',
            zIndex: 'var(--form-file-label-z-index)',
            display: 'var(--form-file-display)',
            height: 'var(--form-file-height)',
            borderColor: 'var(--form-file-border-color)',
            borderRadius: 'var(--form-file-border-radius)',
            boxShadow: 'var(--form-file-box-shadow)',
        },
          
        '.form-file-text': {
            display: 'var(--form-file-text-display)',
            flexGrow: 'var(--form-file-text-flex-grow)',
            padding: 'var(--form-file-text-padding)',
            overflow: 'var(--form-file-text-overflow)',
            fontFamily: 'var(--form-file-text-font-family)',
            fontWeight: 'var(--form-file-text-font-weight)',
            lineHeight: 'var(--form-file-text-line-height)',
            color: 'var(--form-file-text-color)',
            textOverflow: 'var(--form-file-text-text-overflow)',
            whiteSpace: 'var(--form-file-text-white-space)',
            backgroundColor: 'var(--form-file-text-background-color)',
            borderColor: 'var(--form-file-text-border-color)',
            borderStyle: 'var(--form-file-text-border-style)',
            borderWidth: 'var(--form-file-text-border-width)',
            borderLeftTopRadius: 'var(--form-file-text-border-left-top-radius)',
            borderLeftBottomRadius: 'var(--form-file-text-border-left-bottom-radius)'
        },
          
        '.form-file-button': {
            display: 'var(--form-file-button-display)',
            flexShrink: 'var(--form-file-button-flex-shrink)',
            padding: 'var(--form-file-button-padding)',
            marginLeft:' calc(var(--form-file-border-width) * -1)',
            lineHeight: 'var(--form-file-button-line-height)',
            color: 'var(--form-file-button-color)',
            backgroundColor: 'var(--form-file-button-background-color)',
            borderColor: 'var(--form-file-button-border-color)',
            borderStyle: 'var(--form-file-button-border-style)',
            borderWidth: 'var(--form-file-button-border-width)',
            borderLeftTopRadius: 'var(--form-file-button-border-right-top-radius)',
            borderLeftBottomRadius: 'var(--form-file-button-border-right-bottom-radius)'
        },
          
        '.form-file-sm': {
            height: 'var(--form-file-sm-height)',
            fontSize: 'var(--form-file-sm-font-size)',

            '.form-file-text, .form-file-button': {
                padding: 'var(--form-file-sm-padding-y) var(--form-file-sm-padding-x)',
            }
        },
          
        '.form-file-lg': {
            height: 'var(--form-file-lg-height)',
            fontSize: 'var(--form-file-lg-font-size)',

            '.form-file-text, .form-file-button': {
                padding: 'var(--form-file-lg-padding-y) var(--form-file-lg-padding-x)',
            }
        }     
    };

    addComponents(component);
}, {
    theme: {
        formFile: theme => ({
            display: theme('formControl.display', 'block'),
            width: theme('formControl.width', '100%'),
            height: `calc(var(--form-file-line-height) * 1em + var(--form-file-padding-y) * 2 + var(--form-file-border-width) * 2)`,
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
                boxShadow: theme('formControl.focus.boxShadow', `0 0 0 .2rem rgba(${theme('colors.blue.500', colors.blue['500'])}, .25)`)
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
                fontWeight: 'var(--form-file-font-weight)',
                padding: 'var(--form-file-padding-y) var(--form-file-padding-x)',
                color: 'var(--form-file-color)',
                backgroundColor: 'var(--form-file-background-color)',
                borderWidth: 'var(--form-file-border-width)',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                borderLeftRadius: 'inherit'
            },
            button: {
                display: 'block',
                flexShrink: 0,
                padding: 'var(--form-file-padding-y) var(--form-file-padding-x)',
                color: theme('colors.gray.400', colors.gray['400']),
                background: theme('colors.gray.200', colors.gray['200']),
                borderColor: 'inherit',
                borderStyle: 'var(--form-file-border-style)',
                borderRightRadius: 'inherit'
            },
            sm: {
                paddingY: theme('formControl.sm.paddingY', '.25rem'),
                paddingX: theme('formControl.sm.paddingX', '.5rem'),
                fontSize: theme('formControl.sm.fontSize', '.875rem'),
                height: `calc(var(--form-file-line-height) * 1em + var(--form-file-sm-padding-y) * 2 + var(--form-file-border-width) * 2)`,
            },
            lg: {
                paddingY: theme('formControl.lg.paddingY', '.5rem'),
                paddingX: theme('formControl.lg.paddingX', '.1rem'),
                fontSize: theme('formControl.lg.fontSize', '1.25rem'),
                height: `calc(var(--form-file-line-height) * 1em + var(--form-file-lg-padding-y) * 2 + var(--form-file-border-width) * 2)`,
            }
        })
    }
});