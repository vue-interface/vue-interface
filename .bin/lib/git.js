import { execa } from "execa";

export async function add(options) {
    return execa('git', ['add', '.'], options);
}

export async function commit(message, options) {
    return execa('git', ['commit', '-m', `${message.replace(/"/g, '\"')}`], options);
}

export async function push(args, options) {
    return execa('git', ['push', 'origin', ...(args || [])], options);
}

export async function status(options) {
    return execa('git', ['status', '--porcelain'], options);
}

export function version(increment, options) {
    return execa('pnpm', ['version', increment], options);
}