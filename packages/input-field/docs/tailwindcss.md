# Tailwindcss

[[toc]]

## Installation

If you want to include Alerts in your Tailwindcss build, then intall the plugin.

    module.exports = {
        plugins: [
            require('@vue-interface/alert/tailwind')
        ]
    };

## Theme

*These are the default values. Only override what you need.*

``` js
const Color = require('color');

module.exports = {
    theme: {
        alert: {
            lineHeight: '1.5em',
            position: 'relative',
            padding: '.5rem 1rem',
            borderRadius: '.25rem',
            close: {
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                padding: '.66rem',
                lineHeight: '1rem',
                fontSize: '1.5rem',
            },
            dismissable: {
                padding: '0 0 0 3em'
            },
            fade: 'opacity .15s linear',
            header: {
                display: 'block',
                fontSize: '1.25rem'
            },
            lineHeight: '1.5rem',
            link: {
                color: 'currentColor'
            },
            position: 'relative',
            px: '.5rem',
            py: '1rem'
        }
    }
}
```

## Variations

The colors variations allow contextual colors for alerts. These are variation
names are taken from Bootstrap 4 and can be used for convenience, or
backwards compatibility. Any color name from your theme can be used or assigned
to a contextual variation.

*Default variations:*

`primary`, `secondary`, `danger`, `success`, `warning`, `info`, `dark`,
`light`, `muted`


## Color API

`color` is used to manipulate colors dynamically. [API Docs](https://github.com/Qix-/color#readme)
