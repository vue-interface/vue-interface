const plugin = require('tailwindcss/plugin');
const { colors, translate } = require('tailwindcss/defaultTheme'); 
const { white } = colors;
const encodeSVG = require('./encode-svg');

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
            display: theme('formSwitch.display'),
            alignItems: theme('formSwitch.alignItems'),
            paddingLeft: theme('formSwitch.paddingLeft'),

            '.form-check-label': {
                paddingLeft: `calc(${theme('formSwitch.paddingLeft')} / 6)`,
                marginBottom: theme('formSwitch.label.marginBottom')
            },

            '.form-check-input': {
                width: theme('formSwitch.width'),
                marginTop: theme('formSwitch.marginTop'),
                marginLeft: theme('formSwitch.marginLeft'),
                backgroundRepeat: theme('formSwitch.backgroundRepeat'),
                backgroundImage: theme('formSwitch.backgroundImage'),
                backgroundPosition: theme('formSwitch.backgroundPosition'),
                borderRadius: theme('formSwitch.borderRadius'),
            
                '&:focus': {
                    backgroundImage: theme('formSwitch.focus.backgroundImage'),
                },
            
                '&:checked': {
                    backgroundPosition: theme('formSwitch.checked.backgroundPosition'),
                    backgroundImage: theme('formSwitch.checked.backgroundImage')
                }
            }
        },

        '.form-switch.form-control-sm': {
            '.form-check-input': {
                width: theme('formSwitch.sm.width'),
                height: theme('formSwitch.sm.height')
            }
        },

        '.form-switch.form-control': {
            border: 0,
            boxShadow: 'none',

            '.form-check-input': {
                width: `calc(${theme('formSwitch.width')} * 1.666)`,
                height: theme('formSwitch.sm.height'),
            }
        },

        '.form-switch.form-control-lg': {
            '.form-check-input': {
                width: theme('formSwitch.lg.width'),
                height: theme('formSwitch.lg.height')
            }
        }
    };

    addComponents(component);
}, {
    theme: {
        formSwitch: theme => {
            return {
                display: 'flex',
                alignItems: 'center',
                height: '2.375em',
                width: '2rem',
                marginTop: 0,
                paddingLeft: `calc(2rem + .5em)`,
                marginLeft: `calc((2rem + .5em) * -1)`,
                backgroundRepeat: 'no-repeat',
                backgroundImage: encodeSVG(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${colors.gray['500']}'/></svg>")`),
                backgroundPosition: 'left center',
                borderRadius: '2rem',

                label: {
                    paddingLeft: '.5em',
                    marginBottom: 0
                },

                focus: {
                    backgroundImage: encodeSVG(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.primary')}'/></svg>")`),
                },
                                            
                checked: {
                    backgroundPosition: 'right center',
                    backgroundImage: encodeSVG(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='white'/></svg>")`)
                },

                sm: {
                    height: '2.215em',
                    width: `calc(2.215em * 1.5)`,
                },

                lg: {
                    height: '2.4em',
                    width: `calc(2.4em * 1.75)`,
                }
            };
        }
    }
});