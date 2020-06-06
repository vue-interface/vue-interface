const Color = require('color');
const plugin = require('tailwindcss/plugin');
// const { variations } = require('@vue-interface/variant');

module.exports = plugin(function({ addComponents, theme }) {
    /*
    const alert = {
        '.alert': {
            lineHeight: theme('alert.lineHeight', '1.5em'),
            position: theme('alert.position', 'relative'),
            padding: theme('alert.padding', '.5rem 1rem'),
            borderRadius: theme('alert.borderRadius', '.25rem'),
            '*': {
                lineHeight: theme('alert.lineHeight', '1.5rem')
            },
            '&.fade': {
                transition: theme('alert.fade', 'opacity .15s linear')
            },
            '&:not(.show)': {
                opacity: 0            
            },
            '.alert-header': {
                display: theme('alert.header.display', 'block'),
                fontSize: theme('alert.header.fontSize', '1.25rem'),
            },
            '.alert-link, .alert-link:hover, .alert-link:active, .alert-link:focus': {
                color: theme('alert.link.color', 'currentColor')
            },
            '.alert-dismissable': {
                padding: theme('alert.dismissable.padding', '0 0 0 3em')
            },
            '.alert-close, .close': {
                display: theme('alert.close.display', 'flex'),
                position: theme('alert.close.position', 'absolute'),
                top: theme('alert.close.top', 0),
                right: theme('alert.close.right', 0),
                background: theme('alert.close.background', 'none'),
                border: theme('alert.close.border', 'none'),
                cursor: theme('alert.close.cursor', 'pointer'),
                color: theme('alert.close.color', 'inherit'),
                padding: theme('alert.close.padding', '.5rem .66rem'),
                'span': {
                    lineHeight: theme('alert.lineHeight', '1.5rem'),
                    fontSize: theme('alert.close.fontSize', '1.5rem'),
                }
            } 
        }, 
    };

    for(const [key, value] of Object.entries(variations(theme('colors')))) {
        try {
            const color = Color(value);            
            const bgColor = color.lighten(.666).luminosity() == 1 ? color : color.lighten(.666);
            const borderColor = bgColor.darken(.15).hex();
            const fontColor = bgColor.isDark() && color.isDark() ? '#fff' : color.darken(.45).hex();

            alert[`.alert-${key}`] = {
                color: fontColor,
                backgroundColor: bgColor.luminosity() === 1 ? bgColor.darken(.05).hex() : bgColor.hex(),
                border: `${theme('alert.borderWidth', '1px')} ${theme('alert.borderStyle', 'solid')} ${borderColor}`,
            };

            alert[`.alert-${key} .alert-close, .alert-${key} > .close`] = {
                color: fontColor
            };

            alert[`.alert-${key} hr`] = {
                borderTop: 0,
                borderColor: borderColor
            };
        }
        catch (e) {
            // color didn't parse so do nothing...
        }
    }

    addComponents(alert);
    */
});