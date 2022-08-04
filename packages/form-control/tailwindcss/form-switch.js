const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors'); 
const escapeSvg = require('./utils/escapeSvg');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
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
                backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.secondary', theme('colors.gray.500', colors.gray[500]))}'/></svg>")`),
                backgroundPosition: 'left center',
                borderRadius: '2rem',

                label: {
                    paddingLeft: '.5em',
                    marginBottom: 0
                },

                focus: {
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='${theme('variations.primary', theme('colors.blue.500', colors.blue[500]))}'/></svg>")`),
                },
                                            
                checked: {
                    backgroundPosition: 'right center',
                    backgroundImage: escapeSvg(`url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'><circle r='3' fill='white'/></svg>")`)
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