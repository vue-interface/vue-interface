const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');
const { theme } = require('tailwindcss/stubs/defaultConfig.stub');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-feedback-display': theme('formFeedback.display'),
            '--form-feedback-width': theme('formFeedback.width'),
            '--form-feedback-margin-top': theme('formFeedback.marginTop'),
            '--form-feedback-font-size': theme('formFeedback.fontSize'),
            '--form-feedback-font-style': `${theme('formFeedback.fontStyle')}`,

            '--form-select-feedback-icon-padding-right': 'calc(1em * .75 + (2 * var(--form-select-padding-y) * .75) + var(--form-select-padding-x) + var(--form-select-indicator-padding-x))',
            '--form-select-feedback-icon-position': 'center right calc(var(--form-select-padding-x) + var(--form-select-indicator-padding-x))',
            '--form-select-feedback-icon-size': 'var(--form-control-height-inner-half) var(--form-control-height-inner-half)',
            
            '--form-tooltip-position': theme('formTooltip.position'),
            '--form-tooltip-top': theme('formTooltip.top'),
            '--form-tooltip-z-index': theme('formTooltip.zIndex'),
            '--form-tooltip-display': theme('formTooltip.display'),
            '--form-tooltip-max-width': theme('formTooltip.maxWidth'),
            '--form-tooltip-margin-top': theme('formTooltip.marginTop'),
            '--form-tooltip-padding-y': theme('formTooltip.paddingY'),
            '--form-tooltip-padding-x': theme('formTooltip.paddingX'),
            '--form-tooltip-font-size': theme('formTooltip.fontSize'),
            '--form-tooltip-line-height': `${theme('formTooltip.lineHeight')}`,
            '--form-tooltip-opacity': `${theme('formTooltip.opacity')}`,
            '--form-tooltip-border-radius': theme('formTooltip.borderRadius'),
        }
    };

    function validationStateSelector(state, color, icon) {
        Object.assign(component[':root'], {
            [`--form-feedback-${state}-icon`]: icon
        });

        Object.assign(component, {
            [`.${state}-feedback`]: {
                color,
                display: 'var(--form-feedback-display)',
                width: 'var(--form-feedback-width)',
                marginTop: 'var(--form-feedback-margin-top)',
                fontSize: 'var(--form-feedback-font-size)',
                fontStyle: 'var(--form-feedback-font-style)',
            },

            [`.${state}-tooltip`]: {
                position: 'var(--form-tooltip-position)',
                top: 'var(--form-tooltip-top)',
                zIndex: 'var(--form-tooltip-z-index)',
                display: 'var(--form-tooltip-display)',
                maxWidth: 'var(--form-tooltip-max-width)', // Contain to parent when possible
                padding: 'var(--form-tooltip-padding-y) var(--form-tooltip-padding-x)',
                marginTop: 'var(--form-tooltip-margin-top)',
                fontSize: 'var(--form-tooltip-font-size)',
                lineHeight: 'var(--form-tooltip-line-height)',
                color: `contrast(${color}, ${colors.white}, ${colors.black})`,
                backgroundColor: `rgba(${color}, var(--form-tooltip-opacity))`,
                borderRadius: 'var(--form-tooltip-border-radius)',
            },

            [`.is-${state}~.${state}-feedback, .is-${state}~.${state}-tooltip, .was-validated :${state}~.${state}-feedback, .was-validated :${state}~.${state}-tooltip`]: {
                display: 'block'
            },

            [`.was-validated .form-control:${state}, .was-validated .form-control.is-${state}`]: {
                borderColor: color,
                paddingRight: theme('validation.enableIcons') ? 'var(--form-control-height-inner)' : null,
                backgroundImage: theme('validation.enableIcons') ? `var(--form-feedback-${state}-icon)` : null,
                backgroundRepeat: theme('validation.enableIcons') ? 'no-repeat' : null,
                backgroundPosition: theme('validation.enableIcons') ? 'right var(--form-control-height-inner-quarter) center' : null,
                backgroundSize: theme('validation.enableIcons') ? 'var(--form-control-height-inner-half) var(--form-control-height-inner-half)' : null,
    
                '&:focus': {
                    borderColor: color,
                    boxShadow: `0 0 0 var(--form-control-focus-width) rgba(${color}, var(--form-control-focus-opacity))`
                }
            },
                
            [`.was-validated textarea.form-control:${state}, .was-validated textarea.form-control.is-${state}`]: {
                paddingRight: theme('validation.enableIcons') ? 'var(--form-control-height-inner)' : null,
                backgroundPosition: theme('validation.enableIcons') ? 'top var(--form-control-height-inner-quarter) right var(--form-control-height-inner-quarter)' : null
            },
                
            [`.was-validated .form-select:${state}, .was-validated .form-select.is-${state}`]: {
                borderColor: color,
                paddingRight: theme('validation.enableIcons') ? 'var(--form-select-feedback-icon-padding-right)' : null,
                backgroundImage: theme('validation.enableIcons') ? `var(--form-feedback-${state}-icon), var(--form-select-background-image)` : null,
                backgroundPosition: theme('validation.enableIcons') ? 'var(--form-select-feedback-icon-position), var(--form-select-background-position)' : null,
                backgroundSize: theme('validation.enableIcons') ? 'var(--form-control-height-inner-half) var(--form-control-height-inner-half), var(--form-select-background-size), var(--form-select-background-size)' : null,
                                
                '&:focus': {
                    borderColor: color,
                    boxShadow: `0 0 0 var(--form-control-focus-width) rgba(${color}, .25)`
                }
            },
    
            [`.was-validated .form-check-input:${state}, .was-validated .form-check-input.is-${state}`]: {
                borderColor: color,
                
                '&:checked': {
                    backgroundColor: color
                },
                
                '&:focus': {
                    boxShadow: `0 0 0 var(--form-control-focus-width) rgba(${color}, .25)`
                },
                
                '~ .form-check-label': {
                    color: color
                }
            },
    
            [`.was-validated .form-check-inline .form-check-input:${state}, .was-validated .form-check-inline .form-check-input.is-${state}`]: {
                [`~ .${state}-feedback`]: {
                    marginLeft: '.5em'
                }
            },
                
            // custom file
            [`.was-validated .form-file-input:${state}, .was-validated .form-file-input.is-${state}`]: {
                '~ .form-file-label': {
                    borderColor: color
                },
                
                '&:focus': {
                    '~ .form-file-label': {
                        borderColor: color,
                        boxShadow: `0 0 0 var(--form-control-focus-width) rgba(${color}, .25)`
                    }
                }
            }       
        });
    }

    const defaultValidIcon = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='${theme('formFeedback.valid.color')}' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/></svg>")`;
    
    validationStateSelector(
        'valid',
        theme('validation.valid.color'),
        theme('formFeedback.valid.icon.backgroundImage', defaultValidIcon)
    );
    
    const defaultInvalidIcon = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='${theme('formFeedback.invalid.color')}' viewBox='0 0 12 12'><circle cx='6' cy='6' r='4.5'/><path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/><circle cx='6' cy='8.2' r='.6' fill='${theme('formFeedback.invalid.color')}' stroke='none'/></svg>")`;

    validationStateSelector(
        'invalid',
        theme('validation.invalid.color'),
        theme('formFeedback.invalid.icon.backgroundImage', defaultInvalidIcon)
    );
    
    addComponents(component);
}, {
    theme: {
        validation: theme => ({
            enableIcons: true,
            valid: {
                color: theme('variations.success', colors.green[600]),
                icon: {
                    backgroundImage: null
                }
            },
            invalid: {
                color: theme('variations.danger', colors.red[600])
            },
        }),
        formFeedback: theme => ({
            display: 'none',
            width: '100%',
            marginTop: theme('formText.marginTop', '.25rem'),
            fontSize: theme('formText.fontSize', '.875rem'),
            fontStyle: theme('formText.fontStyle', 'normal'),
            fontWeight: theme('formText.fontWeight', 400),
            valid: {
                color: theme('variations.success', colors.green[600]),
                icon: {
                    backgroundImage: undefined
                }
            },
            invalid: {
                color: theme('variations.danger', colors.red[600]),
                icon: {
                    backgroundImage: undefined
                }
            }
        }),
        formTooltip: theme => ({
            position: 'absolute',
            top: '100%',
            zIndex: '5',
            display: 'none',
            maxWidth: '100%',
            marginTop: '.1rem',
            paddingY: theme('tooltip.paddingY', '.25rem'),
            paddingX: theme('tooltip.paddingX', '.5rem'),
            fontSize: theme('tooltip.fontSize', '.875rem'),
            lineHeight: theme('tooltip.lineHeight', 1.5),
            opacity: theme('tooltip.opacity', .9),
            borderRadius: theme('tooltip.borderRadius', '.25rem'),
        })
    }
});