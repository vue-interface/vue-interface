const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
        // ':root': {
        //     '--input-group-text-color': theme('inputGroup.color'),
        //     '--input-group-text-background-color': theme('inputGroup.backgroundColor')
        // },
        '.input-group': {
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap', // For form validation feedback
            alignItems: 'stretch',
            width: '100%',          
                  
            '> .form-control, > .form-select, > .form-file': {
                position: 'relative', // For focus state's z-index
                flex: '1 1 auto',
                width: '1%',
                minWidth: 0 // https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size
            },
          
            // Bring the "active" form control to the top of surrounding elements
            '> .form-control:focus, > .form-select:focus, > .form-file .form-file-input:focus ~ .form-file-label': {
                zIndex: 3
            },
          
            // Bring the custom file input above the label
            '> .form-file': {
                '> .form-file-input:focus': {
                    zIndex: 4
                },
            
                '&:not(:last-child) > .form-file-label': {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                },
            
                '&:not(:first-child) > .form-file-label': {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                }
            },
          
            // Ensure buttons are always above inputs for more visually pleasing borders.
            // This isn't needed for `.input-group-text` since it shares the same border-color
            // as our inputs.
            '.btn': {
                position: 'relative',
                zIndex: 2,
            
                '&:focus': {
                    zIndex: 3
                }
            }
        },          
          
        // Textual addons
        //
        // Serves as a catch-all element for any text or radio/checkbox input you wish
        // to prepend or append to an input.
        
        '.input-group-text': {
            display: 'flex',
            alignItems: 'center',
            padding: `${theme('formControl.paddingY')} ${theme('formControl.paddingX')}`,
            fontSize: theme('formControl.fontSize'),
            fontWeight: theme('formControl.fontWeight'),
            lineHeight: theme('formControl.lineHeight'),
            color: theme('inputGroup.color'),
            textAlign: 'center',
            whiteSpace: 'nowrap',
            backgroundColor: theme('inputGroup.backgroundColor'),
            border: `${theme('formControl.borderWidth')} ${theme('formControl.borderStyle')} ${theme('formControl.borderColor')}`,
            borderRadius: theme('formControl.borderRadius')
        },
          
        
        // Sizing
        //
        // Remix the default form control sizing classes into new ones for easier
        // manipulation.
        
        '.input-group-lg > .form-control': {
            minHeight: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.lg.paddingY')} * 2 + ${theme('formControl.borderWidth')} * 2)`
        },
        
        '.input-group-lg > .form-select': {
            height: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.lg.paddingY')} * 2 + ${theme('formControl.borderWidth')} * 2)`
        },
        
        '.input-group-lg > .form-control, .input-group-lg > .form-select, .input-group-lg > .input-group-text, .input-group-lg > .btn': {
            padding: `${theme('formControl.lg.paddingY')} ${theme('formControl.lg.paddingX')}`,
            fontSize: theme('formControl.lg.fontSize'),
            borderRadius: theme('formControl.lg.borderRadius')
        },
        
        '.input-group-sm > .form-control': {
            minHeight: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.sm.paddingY')} * 2 + ${theme('formControl.borderWidth')} * 2)`
        },
        
        '.input-group-sm > .form-select': {
            height: `calc(${theme('formControl.lineHeight')} * 1em + ${theme('formControl.sm.paddingY')} * 2 + ${theme('formControl.borderWidth')} * 2)`
        },
        
        '.input-group-sm > .form-control, .input-group-sm > .form-select, .input-group-sm > .input-group-text, .input-group-sm > .btn': {
            padding: `${theme('formControl.sm.paddingY')} ${theme('formControl.sm.paddingX')}`,
            fontSize: theme('formControl.sm.fontSize'),
            borderRadius: theme('formControl.sm.borderRadius')
        },
        
        '.input-group-lg > .form-select, .input-group-sm > .form-select': {
            paddingRight: `${theme('formSelect.paddingX')} + ${theme('formSelect.indicator.paddingX')}`
        },

        // Rounded corners
        //
        // These rulesets must come after the sizing ones to properly override sm and lg
        // border-radius values when extending. They're more specific than we'd like
        // with the `.input-group >` part, but without it, we cannot override the sizing.
        '.input-group > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu), .input-group > .dropdown-toggle:nth-last-child(n + 3)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        },
        
        '.input-group > :not(:first-child):not(.dropdown-menu):not(.invalid-tooltip):not(.valid-tooltip)': {
            marginLeft: `calc(${theme('formControl.borderWidth')} * -1)`,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
        }
    };

    addComponents(component);
}, {
    theme: {
        inputGroup: theme => ({
            color: theme('formControl.color', colors.gray[400]),
            backgroundColor: theme('colors.gray.200', colors.gray[200])
        })
    }
});
  