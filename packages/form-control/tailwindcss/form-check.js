const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme'); 
const { white } = colors;

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-check-display': theme('formCheck.display'),
            '--form-check-min-height': theme('formCheck.minHeight'),
            '--form-check-padding-left': theme('formCheck.paddingLeft'),
            '--form-check-margin-bottom': theme('formCheck.marginBottom'),

            // '--form-check-input-float': theme('formCheck.input.float'),
            '--form-check-input-width': theme('formCheck.input.width'),
            '--form-check-input-height': theme('formCheck.input.height'),
            '--form-check-input-margin-left': theme('formCheck.input.marginLeft'),
            '--form-check-input-margin-top': theme('formCheck.input.marginTop'),
            '--form-check-input-vertical-align': theme('formCheck.input.verticalAlign'),
            '--form-check-input-background-color': theme('formCheck.input.backgroundColor'),
            '--form-check-input-background-repeat': theme('formCheck.input.backgroundRepeat'),
            '--form-check-input-background-position': theme('formCheck.input.backgroundPosition'),
            '--form-check-input-background-size': theme('formCheck.input.backgroundSize'),
            '--form-check-input-background-image': theme('formCheck.input.backgroundImage'),
            '--form-check-input-border': theme('formCheck.input.border'),
            '--form-check-input-appearance': theme('formCheck.input.appearance'),
            '--form-check-input-color-adjust': theme('formCheck.input.colorAdjust'),
            '--form-check-input-transition': theme('formCheck.input.transition'),

            '--form-check-input-checkbox-border-radius': theme('formCheck.input.checkbox.borderRadius'),

            '--form-check-input-radio-border-radius': theme('formCheck.input.radio.borderRadius'),

            '--form-check-input-active-filter': theme('formCheck.input.active.filter'),

            '--form-check-input-focus-border-color': theme('formCheck.input.focus.borderColor'),
            '--form-check-input-focus-outline': theme('formCheck.input.focus.outline'),
            '--form-check-input-focus-box-shadow': theme('formCheck.input.focus.boxShadow'),

            '--form-check-input-checked-background-color': theme('formCheck.input.checked.backgroundColor'),
            '--form-check-input-checked-border-color': theme('formCheck.input.checked.borderColor'),
            '--form-check-input-checked-checkbox-background-image': theme('formCheck.input.checked.checkbox.backgroundImage'),
            '--form-check-input-checked-radio-background-image': theme('formCheck.input.checked.radio.backgroundImage'),

            '--form-check-input-indeterminate-background-color': theme('formCheck.input.indeterminate.backgroundColor'),
            '--form-check-input-indeterminate-border-color': theme('formCheck.input.indeterminate.borderColor'),
            '--form-check-input-indeterminate-checkbox-background-image': theme('formCheck.input.indeterminate.checkbox.backgroundImage'),
            '--form-check-input-indeterminate-radio-background-image': theme('formCheck.input.indeterminate.radio.backgroundImage'),

            '--form-check-input-disabled-pointer-events': theme('formCheck.input.disabled.pointerEvents'),
            '--form-check-input-disabled-filter': theme('formCheck.input.disabled.filter'),
            '--form-check-input-disabled-opacity': `${theme('formCheck.input.disabled.opacity')}`,

            '--form-check-label-color': theme('formCheck.label.color'),
            '--form-check-label-cursor': theme('formCheck.label.cursor'),

            '--form-check-switch-padding-left': theme('formCheck.switch.paddingLeft'),
            '--form-check-switch-input-width': theme('formCheck.switch.input.width'),
            '--form-check-switch-input-margin-left': theme('formCheck.switch.input.marginLeft'),
            '--form-check-switch-input-background-image': theme('formCheck.switch.input.backgroundImage'),
            '--form-check-switch-input-background-repeat': theme('formCheck.switch.input.backgroundRepeat'),
            '--form-check-switch-input-background-position': theme('formCheck.switch.input.backgroundPosition'),
            '--form-check-switch-input-border-radius': theme('formCheck.switch.input.borderRadius'),
            '--form-check-switch-input-focus-background-image': theme('formCheck.switch.input.focus.backgroundImage'),
            '--form-check-switch-input-checked-background-position': theme('formCheck.switch.input.checked.backgroundPosition'),
            '--form-check-switch-input-checked-background-image': theme('formCheck.switch.input.checked.backgroundImage'),

            '--form-check-inline-display': theme('formCheck.inline.display'),
            '--form-check-inline-margin-right': theme('formCheck.inline.marginRight'),
        },

        '.form-check': {
            display: 'var(--form-check-display)',
            minHeight: 'var(--form-check-min-height)',
            paddingLeft: 'var(--form-check-padding-left)',
            marginBottom: 'var(--form-check-margin-bottom)',
          
            '.form-check-input': {
                // float: 'var(--form-check-input-float)',
                marginLeft: 'var(--form-check-input-margin-left)'
            }
        },

        '.form-check-input': {
            width: 'var(--form-check-input-width)',
            height: 'var(--form-check-input-height)',
            marginTop: 'var(--form-check-input-margin-top)',
            verticalAlign: 'var(--form-check-input-vertical-align)',
            backgroundColor: 'var(--form-check-input-background-color)',
            backgroundRepeat: 'var(--form-check-input-background-repeat)',
            backgroundPosition: 'var(--form-check-input-background-position)',
            backgroundSize: 'var(--form-check-input-background-size)',
            border: 'var(--form-check-input-border)',
            appearance: 'var(--form-check-input-appearance)',
            colorAdjust: 'var(--form-check-input-color-adjust)', // Keep themed appearance for print
            transition: 'var(--form-check-input-transition)',
          
            '&[type="checkbox"]': {
                borderRadius: 'var(--form-check-input-checkbox-border-radius)'
            },
          
            '&[type="radio"]': {
                borderRadius: 'var(--form-check-input-radio-border-radius)'
            },
          
            '&:active': {
                filter: 'var(--form-check-input-active-filter)'
            },
          
            '&:focus': {
                borderColor: 'var(--form-check-input-focus-border-color)',
                outline: 'var(--form-check-input-focus-outline)',
                boxShadow: 'var(--form-check-input-focus-box-shadow)'
            },
          
            '&:checked': {
                background: 'var(--form-check-input-checked-background-color)',
                borderColor: 'var(--form-check-input-checked-border-color)',
          
                '&[type="checkbox"]': {
                    backgroundImage: 'var(--form-check-input-checked-checkbox-background-image)'
                },
          
                '&[type="radio"]': {
                    backgroundImage: 'var(--form-check-input-checked-radio-background-image)'
                }
            },
          
            '&[type="checkbox"]:indeterminate': {
                backgroundColor: 'var(--form-check-input-indeterminate-background-color)',
                borderColor: 'var(--form-check-input-indeterminate-border-color)',
                
                '&[type="checkbox"]': {
                    backgroundImage: 'var(--form-check-input-indeterminate-checkbox-background-image)'
                },
          
                '&[type="radio"]': {
                    backgroundImage: 'var(--form-check-input-indeterminate-radio-background-image)'
                }
            },
        
            '&:disabled': {
                pointerEvents: 'var(--form-check-input-disabled-pointer-events)',
                filter: 'var(--form-check-input-disabled-filter)',
                opacity: 'var(--form-check-input-disabled-opacity)',
            },
        
            // Use disabled attribute in addition of :disabled pseudo-class
            // See: https://github.com/twbs/bootstrap/issues/28247
            '&[disabled], &:disabled': {
                '~ .form-check-label': {
                    opacity: 'var(--form-check-input-disabled-opacity)'
                }
            }
        },

        '.form-check-label': {
            color: 'var(--form-check-label-color)',
            cursor: 'var(--form-check-label-cursor)',
        },

        //
        // Switch
        //
        '.form-switch': {
            paddingLeft: 'var(--form-check-switch-padding-left)',
        
            '.form-check-input': {
                width: 'var(--form-check-switch-input-width)',
                marginLeft: 'var(--form-check-switch-input-margin-left)',
                backgroundRepeat: 'var(--form-check-switch-input-background-repeat)',
                backgroundImage: 'var(--form-check-switch-input-background-image)',
                backgroundPosition: 'var(--form-check-switch-input-background-position)',
                borderRadius: 'var(--form-check-switch-input-border-radius)',
            
                '&:focus': {
                    backgroundImage: 'var(--form-check-switch-input-focus-background-image)',
                },
            
                '&:checked': {
                    backgroundPosition: 'var(--form-check-switch-input-checked-background-position)',
                    backgroundImage: 'var(--form-check-switch-input-checked-background-image)'
                }
            }
        },
        
        '.form-check-inline': {
            display: 'var(--form-check-inline-display)',
            marginRight: 'var(--form-check-inline-margin-right)',
        }
    };

    addComponents(component);
}, {
    theme: {
        formCheck: theme => {
            return {
                display: 'block',
                minHeight: 'calc(var(--form-control-line-height) * var(--form-control-font-size))',
                paddingLeft: '1.25em',
                marginBottom: '.125rem',
                input: {
                    width: '1.25em',
                    height: '1.25em',
                    marginLeft: '-1.25em',
                    marginTop: 'calc((1.5 * 1em - 1.25em) / 2)', // line-height minus check height
                    verticalAlign: 'top',
                    backgroundColor: theme('colors.white', white),
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundImage: `url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgba(0, 0, 0, .25)'/></svg>")`,
                    border: 'var(--form-control-border-width) var(--form-control-border-style) var(--form-control-border-color)',
                    appearance: 'var(--form-control-appearance)',
                    colorAdjust: 'exact', // Keep themed appearance for print,
                    transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
                    checkbox: {
                        borderRadius: '.25em'
                    },
                    radio: {
                        borderRadius: '50%'
                    },
                    active: {
                        filter: 'brightness(90%)'
                    },
                    focus: {
                        borderColor: `lighten(${theme('variations.primary')}, .25)`,
                        outline: 0,
                        boxShadow: `var(--form-control-focus-box-shadow)`
                    },
                    checked: {
                        backgroundColor: theme('variations.primary'),
                        borderColor: theme('variations.primary'),
                        checkbox: {
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/></svg>")`
                        },
                        radio: {
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='2' fill='white'/></svg>")`
                        }
                    },
                    indeterminate: {
                        backgroundColor: theme('variations.primary'),
                        borderColor: theme('variations.primary'),
                        checkbox: {
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>")`
                        },
                        radio: {
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/></svg>")`
                        }
                    },
                    disabled: {
                        pointerEvents: 'none',
                        filter: 'none',
                        opacity: .5,
                    }
                },
                label: {
                    color: 'inherit',
                    cursor: 'inherit'
                },
                switch: {
                    paddingLeft: '2.5em',
                        
                    input: {
                        width: '2em',
                        marginLeft: '-2.5em',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgba(0, 0, 0, .25)'/></svg>")`,
                        backgroundPosition: 'left center',
                        borderRadius: '2em',

                        focus: {
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.primary')}'/></svg>")`,
                        },
                                            
                        checked: {
                            backgroundPosition: 'right center',
                            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='white'/></svg>")`
                        }
                    },
                },
                inline: {
                    display: 'inline-block',
                    marginRight: '1rem'
                }
            };
        }
    }
});