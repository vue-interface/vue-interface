import ComponentRegistry from '@vue-interface/component-registry';

const registry = new ComponentRegistry;

export function get(...args) {
    return registry.get(...args);
}

export function register(...args) {
    return registry.register(...args);
}

export function remove(...args) {
    return registry.register(...args);
}

export function reset(...args) {
    return registry.reset(...args);
}

export default registry;