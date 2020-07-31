
const hexToRgba = require('hex-to-rgba');

function rgba(color, percent) {
    return hexToRgba(color, percent);
}

module.exports = rgba;