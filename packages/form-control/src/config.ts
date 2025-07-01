const global = {};

export default function config(...args: any[]) {
    // config() returns the global object.
    if(!args.length) {
        return global;
    }
    
    // Destruct the key/value from the args.
    const [ key, value ] = args;
    
    // config('key') returns value assigned to the key
    if(typeof key === 'string') {
        //@ts-ignore
        return typeof global[key] !== 'undefined' ? global[key] : value;
    }

    // config(['a', 'b']) returns an object of key/value pairs
    if(Array.isArray(key)) {
        return key.reduce((carry, key) => {
            return Object.assign(carry, {
                //@ts-ignore
                [key]: global[key]
            });
        }, {});
    }

    // config({a: 1}, {b: 2}) assigns the args and returns the global object.
    return Object.assign(global, ...args);
}