
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        '.form-group': {
            position: 'relative',
            fontSize: theme('formControl.fontSize'),

            '*': {
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDuration: '150ms'
            },

            '.form-group-inner': {
                position: 'relative',
            },

            '.form-label': {
                position: 'absolute',
                display: 'flex',
                top: '1px',
                left: 0,
                // height: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.paddingY')} * 2 + 1px * 2)`,
                paddingLeft: theme('formControl.paddingX'),
                paddingTop: theme('formControl.paddingY'),
                paddingBottom: theme('formControl.paddingY'),
                alignItems: 'center',
                transitionDuration: '300ms',
                color: theme('colors.gray.600', colors.gray[600]),
                zIndex: 10,
            },

            'input, textarea, select': {
                '&:empty:focus::placeholder, &.has-changed:empty::placeholder': {
                    opacity: 100
                },
            },

            '&.is-empty:not(.has-changed)': {
                'input, textarea, select': {
                    '&::placeholder': {
                        opacity: 0,
                    },
                },
            },

            '&.form-group-sm': {
                fontSize: theme('formControl.sm.fontSize'),

                '.form-label': {
                    paddingLeft: theme('formControl.sm.paddingX'),
                    paddingTop: theme('formControl.sm.paddingY'),
                    paddingBottom: theme('formControl.sm.paddingY'),
                    fontSize: theme('formControl.sm.fontSize'),
                },

                '&.has-changed': {
                    'input, textarea, select': {
                        '&:not(.is-empty), &:not([readonly])': {
                            paddingTop: `calc(${theme('formControl.sm.paddingY')} * 2)`,
                            paddingBottom: `calc(${theme('formControl.sm.paddingY')} * 0)`,
                        }
                    }
                },
            },

            '&.form-group-lg': {
                fontSize: theme('formControl.lg.fontSize'),

                '.form-label': {
                    paddingLeft: theme('formControl.lg.paddingX'),
                    paddingTop: theme('formControl.lg.paddingY'),
                    paddingBottom: theme('formControl.lg.paddingY'),
                    fontSize: theme('formControl.lg.fontSize'),
                },

                '&.has-changed': {
                    'input, textarea, select': {
                        '&:not(.is-empty), &:not([readonly])': {
                            paddingTop: `calc(${theme('formControl.lg.paddingY')} * 2)`,
                            paddingBottom: `calc(${theme('formControl.lg.paddingY')} * 0)`,
                        }
                    }
                },
            },

            '&.has-changed': {
                '.form-label': {
                    paddingTop: 0,
                    paddingBottom: 0,
                    fontSize: '.85em',
                    height: 'auto',
                    top: '-1px'
                },
    
                'input, textarea, select': {
                    '&:not([readonly])': {
                        paddingTop: `calc(${theme('formControl.paddingY')} * 2)`,
                        paddingBottom: `calc(${theme('formControl.paddingY')} * 0)`,
                    }
                }
            }
        },
    };

    addComponents(component);
});