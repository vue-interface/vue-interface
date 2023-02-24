import { execa } from "execa";
import { mergePromise, spinner } from "./helpers.js";

export async function add(options) {
    return execa('git', ['add', '.'], options);
}

export async function commit(message, options) {
    return execa('git', ['commit', '-m', message], options);
}

export async function push(options) {
    return execa('git', ['push', 'origin'], options);
}

export async function status(options) {
    const spawned = execa('git', ['status', '--porcelain'], options);

    return mergePromise(spawned, spinner('Fetching Git status', spawned));
}

export function version(increment, options) {
    return execa('pnpm', ['version', increment], options);
}