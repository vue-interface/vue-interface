import { factory } from '@vue-interface/component-registry';

export const registry = factory();

export function get(key: string): any {
    return registry.get(key);
}

export function register(key: string | object, value: any) {
    return registry.register(key, value);
}

export function remove(key: string) {
    return registry.remove(key);
}

export function reset() {
    return registry.reset();
}