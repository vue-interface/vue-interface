import { bootServer, selectWorkspace, watchWorkspace } from "../lib/helpers.js";

/**
 * Bump the version of one or more packages.
 * 
 * @param {string} pkg 
 */
export default async function start(pkg) {
    const { workspace, dependencies } = await selectWorkspace(pkg);

    bootServer(workspace);

    for (const workspace of dependencies) {
        watchWorkspace(workspace);
    }

    return { workspace, dependencies };
}