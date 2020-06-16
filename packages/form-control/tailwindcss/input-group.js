const plugin = require('tailwindcss/plugin');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = plugin(function({ addComponents, theme }) {
    const component = {
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
            padding: $input-padding-y $input-padding-x;
            @include font-size($input-font-size); // Match inputs
            fontWeight: $font-weight-normal;
            lineHeight: $input-line-height;
            color: $input-group-addon-color;
            textAlign: 'center';
            whiteSpace: 'nowrap';
            backgroundColor: $input-group-addon-bg;
            border: $input-border-width solid $input-group-addon-border-color;
            @include border-radius($input-border-radius);
        },
          
          
          // Sizing
          //
          // Remix the default form control sizing classes into new ones for easier
          // manipulation.
          
          '.input-group-lg > .form-control': {
            minHeight: $input-height-lg
          }
          
          '.input-group-lg > .form-select': {
            height: $input-height-lg
          }
          
          .input-group-lg > .form-control,
          .input-group-lg > .form-select,
          .input-group-lg > .input-group-text,
          .input-group-lg > .btn {
            padding: $input-padding-y-lg $input-padding-x-lg;
            @include font-size($input-font-size-lg);
            @include border-radius($input-border-radius-lg);
          }
          
          .input-group-sm > .form-control {
            minHeight: $input-height-sm;
          }
          
          .input-group-sm > .form-select {
            height: $input-height-sm;
          }
          
          .input-group-sm > .form-control,
          .input-group-sm > .form-select,
          .input-group-sm > .input-group-text,
          .input-group-sm > .btn {
            padding: $input-padding-y-sm $input-padding-x-sm;
            @include font-size($input-font-size-sm);
            @include border-radius($input-border-radius-sm);
          }
          
          .input-group-lg > .form-select,
          .input-group-sm > .form-select {
            paddingRight: $form-select-padding-x + $form-select-indicator-padding;
          }
          
          
          // Rounded corners
          //
          // These rulesets must come after the sizing ones to properly override sm and lg
          // border-radius values when extending. They're more specific than we'd like
          // with the `.input-group >` part, but without it, we cannot override the sizing.
          
          // stylelint-disable-next-line no-duplicate-selectors
          .input-group {
            > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu),
            > .dropdown-toggle:nth-last-child(n + 3) {
              @include border-right-radius(0);
            }
          
            > :not(:first-child):not(.dropdown-menu) {
              margin-left: -$input-border-width;
              @include border-left-radius(0);
            }
          }
    };

    addComponents(component);
}, {
    theme: {
        form: {
            inputGroup: ({ theme }) => ({
                
            })
        }
    }
});
  