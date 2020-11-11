import { factory } from '@vue-interface/component-registry';

const registry = factory();

function get() {
    return registry.get.apply(registry, arguments);
}

function register() {
    return registry.register.apply(registry, arguments);
}

function remove() {
    return registry.remove.apply(registry, arguments);
}

function reset() {
    return registry.reset.apply(registry, arguments);
}

export {
    get,
    register,
    registry,
    remove,
    reset
};