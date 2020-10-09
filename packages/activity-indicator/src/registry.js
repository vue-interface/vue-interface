import ComponentRegistry from '@vue-interface/component-registry';

const registry = new ComponentRegistry();

const get = registry.get;
const register = registry.register;
const remove = registry.remove;
const reset = registry.reset;

export {
    get,
    register,
    registry,
    remove,
    reset
};