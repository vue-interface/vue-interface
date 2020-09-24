const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const { success, danger } = require('@vue-interface/variant/tailwindcss/defaultVariations');
const { rgba } = require('@vue-interface/tailwindcss/utils');


module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--custom-field-color': theme('customField.color'),
            '--custom-field-background-color': theme('customField.backgroundColor'),
            '--custom-field-fontSize': theme('customField.fontSize'),
            '--custom-field-box-shadow': theme('customField.boxShadow'),
            '--custom-field-padding-y': theme('customField.paddingY'),
            '--custom-field-padding-x': theme('customField.paddingX'),
            '--custom-field-line-height': theme('customField.lineHeight'),
            '--custom-field-border-width': theme('customField.borderWidth'),
            '--custom-field-border-color': theme('customField.borderColor'),
            '--custom-field-border-radius': theme('customField.borderRadius'),
            '--custom-field-transition': theme('customField.transition'),
            '--custom-field-height': `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
            '--custom-field-height-inner': `calc(${theme('customField.fontSize')} + (${theme('customField.lineHeight')} / 2) + (${theme('customField.paddingY')} * 2))`,
            
            '--custom-field-focus-border-width': theme('customField.focus.borderWidth'),
            
            '--custom-field-disabled-border-color': theme('customField.disabled.borderColor'),
            '--custom-field-disabled-background-color': theme('customField.disabled.backgroundColor'),

            '--custom-field-sm-fontSize': theme('customField.sm.fontSize'),
            '--custom-field-sm-padding-y': theme('customField.sm.paddingY'),
            '--custom-field-sm-padding-x': theme('customField.sm.paddingX'),
            '--custom-field-sm-border-radius': theme('customField.sm.borderRadius'),
            '--custom-field-sm-height': `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.sm.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
            '--custom-field-sm-height-inner': `calc(${theme('customField.sm.fontSize')} + (${theme('customField.lineHeight')} / 2) + (${theme('customField.sm.paddingY')} * 2))`,

            '--custom-field-lg-fontSize': theme('customField.lg.fontSize'),
            '--custom-field-lg-padding-y': theme('customField.lg.paddingY'),
            '--custom-field-lg-padding-x': theme('customField.lg.paddingX'),
            '--custom-field-lg-border-radius': theme('customField.lg.borderRadius'),
            '--custom-field-lg-height': `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.lg.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
            '--custom-field-lg-height-inner': `calc(${theme('customField.lg.fontSize')} + (${theme('customField.lineHeight')} / 2) + (${theme('customField.lg.paddingY')} * 2))`,
           
            '--custom-field-label-color': theme('customField.label.color'),
            '--custom-field-label-font-weight': theme('customField.label.fontWeight'),
            '--custom-field-label-fontSize': theme('customField.label.fontSize'),
            
            '--custom-field-label-sm-font-size': theme('customField.label.sm.fontSize'),
            '--custom-field-label-lg-font-size': theme('customField.label.lg.fontSize'),
            
            '--custom-field-shrink-font-size-base': theme('customField.shrink.fontSize'),
            
            //'--custom-field-shrink-font-size-sm': theme('customField.label.sm.fontSize') * .8;
            //'--custom-field-shrink-font-size-lg': theme('customField.label.lg.fontSize') * .85;
            
            '--custom-field-placeholder-color': theme('customField.placeholder.color'),
        },

        '.custom-select-field, .custom-input-field, .custom-textarea-field': {
            position: 'relative',

            'label': {
                margin: 0,
                fontWeight: theme('customField.label.fontWeight'),
                color: theme('customField.label.color'),
            },

            '&.is-invalid': {
                '&.custom-input-field .custom-control, &.custom-textarea-field .custom-control, &.custom-select-field .form-group-inner': {
                    borderColor: theme('variations.danger', danger)
                },

                '&.has-focus.custom-input-field .custom-control, &.has-focus.custom-textarea-field .custom-control, &.has-focus.custom-select-field .form-group-inner': {
                    borderColor: theme('variations.danger', danger),
                    boxShadow: `0 0 0 ${theme('customField.focus.width')} rgba(${theme('variations.danger', danger)}, .25)`,
                },

                'label': {
                    color: theme('variations.danger', danger)
                },

                '.invalid-feedback': {
                    display: 'block'
                }
            },

            '&.is-valid': {
                '&.custom-input-field .custom-control, &.custom-select-field .form-group-inner': {
                    borderColor: theme('variations.success', success)
                },

                '&.has-focus.custom-input-field .custom-control, &.has-focus.custom-select-field .form-group-inner': {
                    borderColor: theme('variations.success', success),
                    boxShadow: `0 0 0 ${theme('customField.focus.width')} rgba(${theme('variations.success', success)}, .25)`,
                },

                '&:not(.is-empty) > label': {
                    color: theme('variations.success', success)
                },

                '.invalid-feedback':  {
                    display: 'block'
                }
            }
        },

        '.custom-select-field .form-group-inner, .custom-input-field .custom-control': {
            minHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
        },

        '.custom-textarea-field .custom-control': {
            minHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
        },

        '.custom-select-field .form-group-inner, .custom-input-field .custom-control, .custom-textarea-field .custom-control': {
            display: 'block',
            width: '100%',
            transition: 'padding .15s ease-out',
            padding: `${theme('customField.paddingY')} ${theme('customField.paddingX')}`,
            fontSize: theme('customField.fontSize'),
            lineHeight: theme('customField.lineHeight'),
            color: theme('customField.color'),
            backgroundColor: theme('customField.backgroundColor'),
            backgroundClip: 'padding-box',
            border: `${theme('customField.borderWidth')} solid ${theme('customField.borderColor')}`,
            borderRadius: theme('customField.borderRadius'),
            boxShadow: theme('customField.boxShadow'),
            transition: theme('customField.transition'),

            // Unstyle the caret on `<select>`s in IE10+.
            '&::-ms-expand': {
                backgroundColor: 'transparent',
                border: 0
            },

            // Customize the `:focus` state to imitate native WebKit styles.
            '&:focus': {
                color: theme('customField.focus.color'),
                backgroundColor: theme('customField.focus.backgroundColor'),
                borderColor: theme('customField.focus.borderColor'),
                outline: theme('customField.focus.outline'),
                boxShadow: `${theme('customField.focus.boxShadow')}${theme('formControl.enableShadows') ? `, ${theme('formControl.boxShadow')}` : ''}`
            },

            // Placeholder
            '&::placeholder': {
                transition: 'opacity .15s ease-out',
                // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
                opacity: 1
            },

            '&.is-invalid::placeholder': {
                color: theme('variations.danger', danger)
            },

            // Disabled and read-only inputs
            //
            // HTML5 says that controls under a fieldset > legend:first-child won't be
            // disabled if the fieldset is disabled. Due to implementation difficulty, we
            // don't honor that edge case; we style them as disabled anyway.
            '&:disabled, &[readonly]': {
                borderColor: theme('customField.disabled.borderColor'),
                backgroundColor: theme('customField.disabled.backgroundColor'),
                // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655.
                opacity: 1
            }
        },

        // Custom Select
        '.custom-select-field': {

            '& > label': {
                left: 0,
                margin: 0,
                zIndex: 1,
                position: 'absolute',
                lineHeight: theme('customField.minHeight'),
                fontSize: theme('customField.fontSize'),
                transition: 'all .15s ease-out',
                padding: `0 ${theme('customField.paddingX')} 0`
            },
            
            '&.is-empty > label': {
                lineHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`
            },
            
            '.form-group-inner': {
                '&::after': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 0,
                    content: '',
                    width: '2.3em',
                    height: '66.6666%',
                    transform: 'translateY(25%)',
                    borderLeft: `${theme('customField.borderColor')} 1px solid`,
                    backgroundSize: '.666em .666em',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAxNi42IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNi42Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzZjNzU3ZCIgZD0iTTMwIDBMMTUgMTYuNiAwIDBoMzB6Ii8+PC9zdmc+)'
                }
            },

            '&.is-invalid .form-group-inner::after': {
                borderColor: theme('variations.danger', danger),
                backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAxNi42IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNi42Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2RjMzU0NSIgZD0iTTMwIDBMMTUgMTYuNiAwIDBoMzB6Ii8+PC9zdmc+)'
            },

            '&.is-valid .form-group-inner::after': {
                borderColor: theme('variations.success', success),
                backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAxNi42IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNi42Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzI4YTc0NSIgZD0iTTMwIDBMMTUgMTYuNiAwIDBoMzB6Ii8+PC9zdmc+)'
            },

            '&.is-invalid .custom-select': {
                background: 'none'
            },

            '&.has-focus .form-group-inner': {
                color: theme('customField.focus.color'),
                backgroundColor: theme('customField.focus.backgroundColor'),
                borderColor: theme('customField.focus.borderColor'),
                outline: 'none',
                boxShadow: `${theme('customField.focus.boxShadow')}${theme('customField.enableShadows') ? `, ${theme('customField.boxShadow')}` : ''}`
            },

            '&:not(.is-empty), &.has-changed, &.has-changed.is-empty': {
                '&:not(.has-focus)': {
                    zIndex: 0
                },

                '& > label': {
                    top: 0,
                    opacity: 1,
                    zIndex: 2,
                    transform: 'none',
                    lineHeight: '1em',
                    fontSize: theme('customField.shrink.fontSize'),
                    padding: `${theme('customField.paddingY')} * .75 ${theme('customField.paddingX')} + (${theme('customField.label.fontSize')} - ${theme('customField.shrink.fontSize')} / 1.05) 0`
                },

                '.custom-select': {
                    paddingTop: theme('customField.fontSize')
                }
            },

            // Form control sizing
            //
            // Build on `.form-control` with modifier classes to decrease or increase the
            // height and font-size of form controls
            '&.custom-select-field-sm': {
                '& > label': {
                    fontSize: theme('customField.sm.fontSize'),
                    paddingLeft: `${theme('customField.sm.paddingX')}`
                },
                
                '&:not(.is-empty), &.has-changed, &.has-changed.is-empty': {
                    '& > label': {
                        fontSize: '.5em',
                        padding: `${theme('customField.sm.paddingY')} ${theme('customField.sm.paddingX')} + (${theme('customField.label.sm.fontSize')} - .5em / 1.15) 0`
                    },

                    '.custom-select': {
                        paddingTop: `${theme('customField.fontSize')} + ${theme('customField.fontSize')} - ${theme('customField.sm.fontSize')}`
                    }
                },

                '&.is-empty > label, &.has-changed.is-empty > label': {
                    lineHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.sm.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2) + .5em`
                },

                '.form-group-inner': {
                    minHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.sm.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
                    padding: `${theme('customField.sm.paddingY')} ${theme('customField.sm.paddingX')}`,

                    '&::after': {
                        width: '2em',
                        backgroundSize: '.5em .5em'
                    },

                    '.custom-select': {
                        paddingLeft: `${theme('customField.sm.paddingX')}`
                    }
                }
            },

            '&.custom-select-field-lg': {
                '& > label': {
                    fontSize: theme('customField.lg.fontSize')
                },
                    
                '&:not(.is-empty), &.has-changed, &.has-changed.is-empty': {
                    '& > label': {
                        fontSize: '.5em',
                        padding: `${theme('customField.lg.paddingY')} / 1.15 ${theme('customField.lg.paddingX')} + (${theme('customField.label.lg.fontSize')} - .5em) 0`
                    },

                    '.custom-select': {
                        paddingTop: `${theme('customField.fontSize')} - (${theme('customField.lg.fontSize')} - ${theme('customField.fontSize')})`
                    }
                },

                '&.is-empty > label, &.has-changed.is-empty > label': { 
                    lineHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.lg.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2) + .5em`
                },

                '.form-group-inner': {
                    minHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.lg.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
                    fontSize: theme('customField.label.lg.fontSize'),
                    
                    '&::after': {
                        width: '2.8em',
                        backgroundSize: '1em 1em'
                    },

                    '.custom-select': {
                        paddingLeft: theme('customField.lg.paddingX')
                    }
                }
            },

            '.custom-select': {
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
                background: 'none',
                margin: 0,
                padding: `0 ${theme('customField.paddingX')}`,
                border: 0,
                zIndex: 1,
                transition: 'all .15s ease-out',
                '-webkit-appearance': 'none',
                '-moz-appearance': 'none',
                appearance: 'none',

                '&:focus': {
                    background: 'none',
                    borderColor: 'none',
                    outline: 'none',
                    boxShadow: 'none'
                }
            }
        },

        '.custom-input-field, .custom-textarea-field': {
            '& > label': {
                left: 0,
                margin: 0,
                opacity: 0,
                zIndex: -1,
                lineHeight: 1.5,
                position: 'absolute',
                transition: 'all .15s ease-out',
                paddingLeft: theme('customField.paddingX'),
                fontSize: theme('customField.label.fontSize'),
                padding: `${theme('customField.paddingY')} ${theme('customField.paddingX')} 0`
            },

            '&:not(.is-empty), &.has-changed, &.has-changed.is-empty': {
                '.custom-control::placeholder': {
                    opacity: 0
                },

                '& > label': {
                    zIndex: 2,
                    opacity: 1,
                    transform: 'none',
                    lineHeight: '1em',
                    fontSize: theme('customField.shrink.fontSize'),
                    padding: `${theme('customField.paddingY')} * .75 ${theme('customField.paddingX')} + (${theme('customField.label.fontSize')} - ${theme('customField.shrink.fontSize')} / 1.05) 0`,

                    '& + .form-group-inner .custom-control': {
                        paddingTop: `${theme('customField.fontSize')} + ${theme('customField.paddingY')}`
                    }
                }
            },

            '&.custom-textarea-field:not(.is-empty) textarea, &.custom-textarea-field.has-changed textarea, &.custom-textarea-field.is-empty.has-changed textarea': {
                paddingTop: `${theme('customField.paddingY')} * 2.5`
            },

            '&.custom-input-field-sm, &.custom-textarea-field-sm': {
                '&:not(.is-empty), &.has-changed, &.has-changed.is-empty': {
                    '& > label': {
                        fontSize: '.5em',
                        padding: `calc(${theme('customField.sm.paddingY')} / 1.15) calc(${theme('customField.sm.paddingX')} + (${theme('customField.sm.label.fontSize')} - .5em / 1.15)) 0`
                    },
            
                    '.form-group-inner .custom-control': {
                        paddingTop: theme('customField.label.sm.fontSize') * 1.5
                    }
                }
            },

            '&.custom-input-field-lg, &.custom-textarea-field-lg': {
                '&:not(.is-empty), &.has-changed, &.has-changed.is-empty': {
                    '& > label': {
                        fontSize: '.5em',
                        padding: `calc(${theme('customField.lg.paddingY')} / 1.15) calc(${theme('customField.lg.paddingX')} + (${theme('customField.lg.label.fontSize')} - .5em)) 0`
                    },
                    
                    '.form-group-inner .custom-control': {
                        paddingTop: theme('customField.lg.fontSize')
                    }
                }
            },

            '&.is-valid .valid-feedback, &.is-invalid .invalid-feedback': {
                display: 'block'
            },

            '.custom-control': {
                // Form control sizing
                //
                // Build on `.form-control` with modifier classes to decrease or increase the
                // height and font-size of form controls
                '&.custom-control-sm': {
                    minHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.sm.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
                    padding: `${theme('customField.sm.paddingY')} ${theme('customField.sm.paddingX')}`,
                    fontSize: theme('customField.label.sm.fontSize'),
                    lineHeight: theme('customField.sm.lineHeight'),
                    borderRadius: theme('customField.sm.borderRadius')
                },

                '&.custom-control-lg': {
                    minHeight: `calc(${theme('customField.lineHeight')} * 1em + ${theme('customField.lg.paddingY')} * 2 + ${theme('customField.borderWidth')} * 2)`,
                    padding: `${theme('customField.lg.paddingY')} ${theme('customField.lg.paddingX')}`,
                    fontSize: theme('customField.label.lg.fontSize'),
                    lineHeight: theme('customField.lg.lineHeight'),
                    borderRadius: theme('customField.lg.borderRadius')
                }
            }
        },

        '.input-group': {

            '&.is-invalid .input-group-prepend::after, &.is-invalid .input-group-prepend span, &.is-invalid .input-group-append::after, &.is-invalid .input-group-append span, &.is-invalid .form-control, &.is-invalid .custom-select, &.is-invalid .custom-control': {
                color: theme('formFeedback.invalid.color'),
                borderColor: theme('formFeedback.invalid.color')
            },

            '&.is-invalid .form-control, &.is-invalid .custom-select, &.is-invalid .custom-control': {
                '&::placeholder': {
                    color: theme('formFeedback.invalid.color')
                }
            },

            '& > div:not(.input-group-prepend):not(.input-group-append):not(:last-child) .form-control, & > div:not(.input-group-prepend):not(.input-group-append):not(:last-child) .custom-control, & > div:not(.input-group-prepend):not(.input-group-append):not(:last-child) .custom-select': {
                borderRight: 0
            },

            '& > div:not(.input-group-prepend):not(.input-group-append):not(:first-child) .form-control, & > div:not(.input-group-prepend):not(.input-group-append):not(:first-child) .custom-control, & > div:not(.input-group-prepend):not(.input-group-append):not(:first-child) .custom-select': {
                borderLeft: 0
            },

            '.input-group-append, .input-group-prepend': {
                position: 'relative',

                '&::after': {
                    content: '',
                    position: 'absolute',
                    top: '50%',
                    zIndex: 1,
                    padding: '.75em',
                    transform: 'translateY(-50%)'
                }
            },

            '.input-group-text': {
                fontSize: theme('customField.fontSize'),
                padding: `${theme('customField.paddingY')} ${theme('customField.paddingX')}`
            },

            '.input-group-prepend': {
                '.input-group-text': {
                    borderRight: 0
                },

                '&::after': {
                    right: 0,
                    borderRight: `${theme('customField.borderWidth')} solid ${theme('customField.borderColor')} `
                }
            },

            '.input-group-append': {
                '.input-group-text': {
                    borderLeft: 0
                },

                '&::after': {
                    left: 0,
                    borderLeft: `${theme('customField.borderWidth')} solid ${theme('customField.borderColor')} `
                }
            },

            '.input-group-text': {
                background: 'inherit'
            }
        }
    };

    addComponents(component);
}, {
    theme: {
        customField: theme => ({
            enableShadows: true,
            color: theme('formControl.color', theme('colors.gray.700', colors.gray['700'])),
            backgroundColor: theme('formControl.backgroundColor', theme('colors.gray.400', colors.gray['400'])),
            boxShadow: theme('formControl.boxShadow', 'inset 0 1px 2px rgba(0, 0, 0, .075)'),
            fontSize: '1em',
            paddingY: theme('formControl.paddingY', '.375rem'),
            paddingX: theme('formControl.paddingX', '.75em'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400'])),
            borderRadius: theme('formControl.borderRadius', '.25rem'),
            transition: `${theme('formControl.transition', 'border-color .15s ease-in-out, box-shadow .15s ease-in-out')}, padding .15s ease-out`,

            focus:{
                width: theme('formControl.focus.width', '.2em'),
                color: theme('formControl.focus.color', theme('colors.gray.700', colors.gray['700'])),
                backgroundColor: theme('formControl.focus.backgroundColor', theme('colors.white', colors.white)),
                borderColor: theme('formControl.focus.borderColor', theme('colors.blue.400', colors.blue['400'])),
                outline: theme('formControl.focus.outline', 0),
                opacity: theme('formControl.focus.opacity', .25),
                boxShadow: theme('formControl.focus.boxShadow', `0 0 0 .2rem ${rgba(theme('colors.blue.500', colors.blue['500']), .25)}`),
            },

            disabled: {
                borderColor: theme('formControl.disabled.borderColor', theme('colors.gray.400', colors.gray['400'])),
                backgroundColor: theme('formControl.disabled.backgroundColor', theme('colors.gray.200', colors.gray['200'])),
            },

            label: {
                fontWeight: 'normal',
                fontSize: theme('formControl.fontSize'),
                opacity: theme('formControl.placeholder.opacity', 1),
                color: theme('formControl.placeholder.color', theme('colors.gray.500', colors.gray['500'])),
            },
            
            sm: {
                paddingY: theme('formControl.paddingY', '.25rem'),
                paddingX: theme('formControl.paddingX', '.5em'),
                fontSize: theme('formControl.sm.fontSize', '.875em'),
                borderRadius: theme('formContro.sm.borderRadius', '.2rem'),
                label: {
                    fontSize: theme('formControl.sm.fontSize'),
                }
            },

            lg: {
                paddingY: theme('formControl.paddingY', '.5rem'),
                paddingX: theme('formControl.paddingX', '1em'),
                fontSize:  theme('formControl.lg.fontSize', '1.25em'),
                borderRadius: theme('formContro.sm.borderRadius', '.3rem'),
                label: {
                    fontSize: theme('formControl.sm.fontSize'),
                }
            },            
        })
    }
});