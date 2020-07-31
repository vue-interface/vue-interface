/**
 * Use Regex to find the <svg /></svg> segment of the URL
 * @param String svgURL - string of background-image value
 * @return String
 */
function getSVGElement(svgURL) {
    // Regex for an un-encoded SVG
    const svgRegex = /url\((?:\'|\")data:image\/svg\+xml(?:,|;utf8,|;charset=utf-8,)\s?(<svg.*<\/svg>)(?:\'|\")\)(.*)/g;
    // Regex for an encoded SVG
    const svgRegexEncoded = /url\((?:\'|\")data:image\/svg\+xml(?:,|;utf8,|;charset=utf-8,)\s?(%3Csvg.*(?:\/%3E%3C\/svg%3E|%2F%3E%3C%2Fsvg%3E))(?:\'|\")\)(.*)/g;
    // Execute our regex on the value passed in to this method
    let match = svgRegex.exec(svgURL);
    let matchEncoded = svgRegexEncoded.exec(svgURL);
    // If our Regex matches
    if (match !== null && match.length > 1 && match[1] !== 0 && match[2] !== 0) {
        return {
            svg: match[1],
            shorthandRules: match[2],
            svgAlreadyEncoded: false
        };
    } else if (matchEncoded !== null && matchEncoded.length > 1 && matchEncoded[1] !== 0 && matchEncoded[2] !== 0) {
        return {
            svg: matchEncoded[1],
            shorthandRules: matchEncoded[2],
            svgAlreadyEncoded: true
        };
    } else {
        return null;
    }
}

/**
 * Correctly optimise SVG
 * Taken from: https://codepen.io/tigt/post/optimizing-svgs-in-data-uris
 * @author Taylor Hunt
 * @param  String svgString - SVG unencoded
 * @return String
 */
function encodeOptimizedSVGDataUri(svgString) {
    var uriPayload = encodeURIComponent(svgString) // encode URL-unsafe characters
        .replace(/%0A/g, '') // remove newlines
        .replace(/%20/g, ' ') // put spaces back in
        .replace(/%3D/g, '=') // ditto equals signs
        .replace(/%3A/g, ':') // ditto colons
        .replace(/%2F/g, '/') // ditto slashes
        .replace(/%22/g, '\''); // replace quotes with apostrophes (may break certain SVGs)
    return uriPayload;
}

/**
 * URL encode our SVG
 * @param String svgURL - string of background-image value
 */
function encodeSVG(svgURL) {
    // Default value is what we've passed in
    // If the regex is successful, this will be overidden
    let newValue = svgURL;
    let matchSVG = getSVGElement(svgURL);
    if (matchSVG) {
        let encodedURL = matchSVG.svg;
        // Ensure that the <svg /></svg> segment of the URL is not already encoded
        // If not, encode it
        if (!matchSVG.svgAlreadyEncoded) {
            encodedURL = encodeOptimizedSVGDataUri(matchSVG.svg);
        }
        let shorthandRules = matchSVG.shorthandRules;
        // Place the encoded URL back into the value structure
        newValue = `url("data:image/svg+xml,${encodedURL}")${shorthandRules}`;
    // If our Regex doesn't match, throw an error
    } else {
        throw new Error('Background SVG syntax error - please correct your syntax and try again.');
    }
    return newValue;
}

module.exports = encodeSVG;