import ComponentRegistry from '@vue-interface/component-registry';

const registry = new ComponentRegistry;

function get(...args) {
    return registry.get(...args);
}

function register(...args) {
    return registry.register(...args);
}

function remove(...args) {
    return registry.register(...args);
}

function reset(...args) {
    return registry.reset(...args);
}

export {
    get,
    register,
    registry,
    remove,
    reset
};