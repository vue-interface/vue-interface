import { bootServer, selectWorkspace, watchWorkspace } from "../lib/helpers.js";

/**
 * Start the dev process.
 * 
 * @param {string} pkg 
 */
export default async function start(pkg, opts, command) {
    const { workspace, dependencies } = await selectWorkspace(pkg);

    // If there is no --watch flag, then boot this as a dev server.
    if (!opts.watch) {
        bootServer(workspace, opts.watch);
    }
    // Otherwise watch the workspace as it just another dependency.
    else {
        watchWorkspace(workspace);
    }

    for (const workspace of dependencies) {
        watchWorkspace(workspace);
    }

    return { workspace, dependencies };
}