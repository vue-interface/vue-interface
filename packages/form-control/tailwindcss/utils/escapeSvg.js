const escapedCharacters = {
    '<': '%3c',
    '>': '%3e',
    '\\#': '%23',
    '\\(': '%28',
    '\\)': '%29',
};

module.exports = function(str) {
    if(str.match(/data\:image\/svg\+xml/)) {
        return Object.entries(escapedCharacters)
            .reduce((str, [char, encoded]) => {
                if(str.match(/url\(/)) {
                    return `url(${str.slice(4, -1).replace(new RegExp(char, 'g'), encoded)})`;
                }

                return str.replace(new RegExp(char, 'g'), encoded);
            }, str);
    }
    
    return str;
};