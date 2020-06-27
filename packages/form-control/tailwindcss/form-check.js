const plugin = require('tailwindcss/plugin');
const { colors, translate } = require('tailwindcss/defaultTheme'); 
const { white } = colors;

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-check-float': theme('formCheck.float'),
            '--form-check-width': theme('formCheck.width'),
            '--form-check-height': theme('formCheck.height'),
            '--form-check-display': theme('formCheck.display'),

            '--form-check-font-size': theme('formCheck.fontSize'),
            '--form-check-font-family': theme('formCheck.fontFamily'),
            '--form-check-font-weight': theme('formCheck.fontWeight'),
            '--form-check-line-height': `${theme('formCheck.lineHeight')}`,
            '--form-check-min-height': theme('formCheck.minHeight'),
            '--form-check-margin-bottom': theme('formCheck.marginBottom'),
            '--form-check-padding-left': theme('formCheck.paddingLeft'),
            '--form-check-border-width': theme('formCheck.borderWidth'),
            '--form-check-border-style': theme('formCheck.borderStyle'),
            '--form-check-border-color': theme('formCheck.borderColor'),

            '--form-check-margin-left': theme('formCheck.marginLeft'),
            '--form-check-margin-top': theme('formCheck.marginTop'),
            '--form-check-vertical-align': theme('formCheck.verticalAlign'),
            '--form-check-background-color': theme('formCheck.backgroundColor'),
            '--form-check-background-repeat': theme('formCheck.backgroundRepeat'),
            '--form-check-background-position': theme('formCheck.backgroundPosition'),
            '--form-check-background-size': theme('formCheck.backgroundSize'),
            '--form-check-background-image': theme('formCheck.backgroundImage'),
            '--form-check-border': theme('formCheck.border'),
            '--form-check-appearance': theme('formCheck.appearance'),
            '--form-check-color-adjust': theme('formCheck.colorAdjust'),
            '--form-check-transition': theme('formCheck.transition'),

            '--form-check-checkbox-border-radius': theme('formCheck.checkbox.borderRadius'),

            '--form-check-radio-border-radius': theme('formCheck.radio.borderRadius'),

            '--form-check-active-filter': theme('formCheck.active.filter'),

            '--form-check-focus-border-color': theme('formCheck.focus.borderColor'),
            '--form-check-focus-outline': theme('formCheck.focus.outline'),
            '--form-check-focus-box-shadow': theme('formCheck.focus.boxShadow'),

            '--form-check-checked-background-color': theme('formCheck.checked.backgroundColor'),
            '--form-check-checked-border-color': theme('formCheck.checked.borderColor'),
            '--form-check-checked-checkbox-background-image': theme('formCheck.checked.checkbox.backgroundImage'),
            '--form-check-checked-radio-background-image': theme('formCheck.checked.radio.backgroundImage'),

            '--form-check-indeterminate-background-color': theme('formCheck.indeterminate.backgroundColor'),
            '--form-check-indeterminate-border-color': theme('formCheck.indeterminate.borderColor'),
            '--form-check-indeterminate-checkbox-background-image': theme('formCheck.indeterminate.checkbox.backgroundImage'),
            '--form-check-indeterminate-radio-background-image': theme('formCheck.indeterminate.radio.backgroundImage'),

            '--form-check-disabled-pointer-events': theme('formCheck.disabled.pointerEvents'),
            '--form-check-disabled-filter': theme('formCheck.disabled.filter'),
            '--form-check-disabled-opacity': `${theme('formCheck.disabled.opacity')}`,

            '--form-check-label-color': theme('formCheck.label.color'),
            '--form-check-label-cursor': theme('formCheck.label.cursor'),

            '--form-check-inline-display': theme('formCheck.inline.display'),
            '--form-check-inline-margin-right': theme('formCheck.inline.marginRight'),
        },

        '.form-check': {
            display: 'var(--form-check-display)',
            fontSize: 'var(--form-check-font-size)',
            fontFamily: 'var(--form-check-font-family)',
            fontWeight: 'var(--form-check-font-weight)',
            minHeight: 'var(--form-check-min-height)',
            paddingLeft: 'var(--form-check-padding-left)',
            marginBottom: 'var(--form-check-margin-bottom)',
          
            '.form-check-input': {
                float: 'var(--form-check-float)',
                marginLeft: 'var(--form-check-margin-left)'
            }
        },

        '.form-check-input': {
            width: 'var(--form-check-width)',
            height: 'var(--form-check-height)',
            marginTop: 'var(--form-check-margin-top)',
            verticalAlign: 'var(--form-check-vertical-align)',
            backgroundColor: 'var(--form-check-background-color)',
            backgroundRepeat: 'var(--form-check-background-repeat)',
            backgroundPosition: 'var(--form-check-background-position)',
            backgroundSize: 'var(--form-check-background-size)',
            border: 'var(--form-check-border)',
            appearance: 'var(--form-check-appearance)',
            colorAdjust: 'var(--form-check-color-adjust)', // Keep themed appearance for print
            transition: 'var(--form-check-transition)',
          
            '&[type="checkbox"]': {
                borderRadius: 'var(--form-check-checkbox-border-radius)'
            },
          
            '&[type="radio"]': {
                borderRadius: 'var(--form-check-radio-border-radius)'
            },
          
            '&:active': {
                filter: 'var(--form-check-active-filter)'
            },
          
            '&:focus': {
                borderColor: 'var(--form-check-focus-border-color)',
                outline: 'var(--form-check-focus-outline)',
                boxShadow: 'var(--form-check-focus-box-shadow)'
            },
          
            '&:checked': {
                background: 'var(--form-check-checked-background-color)',
                borderColor: 'var(--form-check-checked-border-color)',
          
                '&[type="checkbox"]': {
                    backgroundImage: 'var(--form-check-checked-checkbox-background-image)'
                },
          
                '&[type="radio"]': {
                    backgroundImage: 'var(--form-check-checked-radio-background-image)'
                }
            },
          
            '&[type="checkbox"]:indeterminate': {
                backgroundColor: 'var(--form-check-indeterminate-background-color)',
                borderColor: 'var(--form-check-indeterminate-border-color)',
                
                '&[type="checkbox"]': {
                    backgroundImage: 'var(--form-check-indeterminate-checkbox-background-image)'
                },
          
                '&[type="radio"]': {
                    backgroundImage: 'var(--form-check-indeterminate-radio-background-image)'
                }
            },
        
            '&:disabled': {
                pointerEvents: 'var(--form-check-disabled-pointer-events)',
                filter: 'var(--form-check-disabled-filter)',
                opacity: 'var(--form-check-disabled-opacity)',
            },
        
            // Use disabled attribute in addition of :disabled pseudo-class
            // See: https://github.com/twbs/bootstrap/issues/28247
            '&[disabled], &:disabled': {
                '~ .form-check-label': {
                    opacity: 'var(--form-check-disabled-opacity)'
                }
            }
        },

        '.form-check-label': {
            color: 'var(--form-check-label-color)',
            cursor: 'var(--form-check-label-cursor)',
        },
        
        '.form-check-inline': {
            display: 'var(--form-check-inline-display)',
            marginRight: 'var(--form-check-inline-margin-right)',
        }
    };

    addComponents(component);
}, {
    theme: {
        formCheck: theme => ({
            float: 'left',
            display: 'block',
            width: '1.25em',
            height: 'var(--form-check-width)',
            fontSize: theme('formControl.fontSize', '1rem'),
            lineHeight: theme('formControl.lineHeight', 1.5),
            fontFamily: theme('formControl.fontFamily', null),
            fontWeight: theme('formControl.fontWeight', 400),
            minHeight: `calc(var(--form-check-line-height) * var(--form-check-font-size))`,
            paddingLeft: 'calc(var(--form-check-width) + .5em)',
            marginBottom: '.125rem',
            marginLeft: 'calc(var(--form-check-padding-left) * -1)',
            marginTop: 'calc((var(--form-check-line-height) * 1em - var(--form-check-height)) / 2)', // line-height minus check height
            verticalAlign: 'top',
            backgroundColor: theme('colors.white', white),
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage: `url("data:image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='rgba(0, 0, 0, .25)'/></svg>")`,
            borderWidth: theme('formControl.borderWidth', '1px'),
            borderStyle: theme('formControl.borderStyle', 'solid'),
            borderColor: theme('formControl.borderColor', theme('colors.gray.400', colors.gray['400'])),
            border: 'var(--form-check-border-width) var(--form-check-border-style) var(--form-check-border-color)',
            appearance: 'var(--form-control-appearance)',
            colorAdjust: 'exact', // Keep themed appearance for print,
            transition: 'background-color .15s ease-in-out, background-position .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out',
            checkbox: {
                borderRadius: 'calc(var(--form-check-width) / 4)'
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
            },
            label: {
                color: 'inherit',
                cursor: 'inherit'
            },
            inline: {
                display: 'inline-block',
                marginRight: '1rem'
            }
        })
    }
});