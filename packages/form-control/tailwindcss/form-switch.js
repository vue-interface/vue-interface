const plugin = require('tailwindcss/plugin');
const { colors, translate } = require('tailwindcss/defaultTheme'); 
const { white } = colors;

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        ':root': {
            '--form-switch-display': theme('formSwitch.display'),
            '--form-switch-align-items': theme('formSwitch.alignItems'),
            '--form-switch-height': theme('formSwitch.height'),
            '--form-switch-width': theme('formSwitch.width'),
            '--form-switch-margin-top': theme('formSwitch.marginTop'),
            '--form-switch-padding-left': theme('formSwitch.paddingLeft'),
            '--form-switch-margin-left': theme('formSwitch.marginLeft'),
            '--form-switch-label-margin-bottom': theme('formSwitch.label.marginBottom'),
            '--form-switch-background-image': theme('formSwitch.backgroundImage'),
            '--form-switch-background-repeat': theme('formSwitch.backgroundRepeat'),
            '--form-switch-background-position': theme('formSwitch.backgroundPosition'),
            '--form-switch-border-radius': theme('formSwitch.borderRadius'),
            '--form-switch-focus-background-image': theme('formSwitch.focus.backgroundImage'),
            '--form-switch-checked-background-position': theme('formSwitch.checked.backgroundPosition'),
            '--form-switch-checked-background-image': theme('formSwitch.checked.backgroundImage'),

            '--form-switch-sm-height': theme('formSwitch.sm.height'),
            '--form-switch-sm-width': theme('formSwitch.sm.width'),

            '--form-switch-lg-height': theme('formSwitch.lg.height'),
            '--form-switch-lg-width': theme('formSwitch.lg.width'),
        },

        //
        // Switch
        //
        '.form-switch, .form-switch.form-control': {
            display: 'var(--form-switch-display)',
            alignItems: 'var(--form-switch-align-items)',
            paddingLeft: 'var(--form-switch-padding-left)',

            '.form-check-label': {
                paddingLeft: 'calc(var(--form-switch-padding-left) / 6)',
                marginBottom: 'var(--form-switch-label-margin-bottom)'
            },

            '.form-check-input': {
                width: 'var(--form-switch-width)',
                marginTop: 'var(--form-switch-margin-top)',
                marginLeft: 'var(--form-switch-margin-left)',
                backgroundRepeat: 'var(--form-switch-background-repeat)',
                backgroundImage: 'var(--form-switch-background-image)',
                backgroundPosition: 'var(--form-switch-background-position)',
                borderRadius: 'var(--form-switch-border-radius)',
            
                '&:focus': {
                    backgroundImage: 'var(--form-switch-focus-background-image)',
                },
            
                '&:checked': {
                    backgroundPosition: 'var(--form-switch-checked-background-position)',
                    backgroundImage: 'var(--form-switch-checked-background-image)'
                }
            }
        },

        '.form-switch.form-control-sm': {
            '.form-check-input': {
                width: 'var(--form-switch-sm-width)',
                height: 'var(--form-switch-sm-height)'
            }
        },

        '.form-switch.form-control': {
            border: 0,
            boxShadow: 'none',

            '.form-check-input': {
                width: 'calc(var(--form-switch-width) * 1.666)',
                height: 'var(--form-switch-height)',
            }
        },

        '.form-switch.form-control-lg': {
            '.form-check-input': {
                width: 'var(--form-switch-lg-width)',
                height: 'var(--form-switch-lg-height)'
            }
        }
    };

    addComponents(component);
}, {
    theme: {
        formSwitch: theme => ({
            display: 'flex',
            alignItems: 'center',
            height: '2.375em',
            width: '2rem',
            marginTop: 0,
            paddingLeft: 'calc(var(--form-switch-width) + .5em)',
            marginLeft: 'calc(var(--form-switch-padding-left) * -1)',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${colors.gray['500']}'/></svg>")`,
            backgroundPosition: 'left center',
            borderRadius: 'var(--form-switch-width)',

            label: {
                paddingLeft: '.5em',
                marginBottom: 0
            },

            focus: {
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.primary')}'/></svg>")`,
            },
                                        
            checked: {
                backgroundPosition: 'right center',
                backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='white'/></svg>")`
            },

            sm: {
                height: '2.215em',
                width: 'calc(var(--form-switch-sm-height) * 1.5)',
            },

            lg: {
                height: '2.4em',
                width: 'calc(var(--form-switch-lg-height) * 1.75)',
            }
        })
    }
});