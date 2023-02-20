import chokidar from 'chokidar';
import { execa } from 'execa';
import inquirer from 'inquirer';
import { debounce } from 'lodash-es';
import { createRequire } from "module";

/**
 * Required for Node 16 module to require a .json file and get the version.
 * Use the following code when Node v17 is available in production envs:
 * 
 * `import { version } from '../package.json' assert { type: "json" };`
 */
const require = createRequire(import.meta.url);

export const version = require('../../package.json').version;

/**
 * List all the available packages.
 * 
 * @returns {array}
 */
export async function ls() {
    const { stdout } = await execa('pnpm', [
        'm', 'ls', '--json', '--depth=-1', '--filter=@vue-interface/*'
    ]);

    return JSON.parse(stdout);
}

/**
 * List all the dependencies for a specific package.
 * 
 * @param {string} pkg 
 * @returns {array}
 */
export async function lsDeps(pkg) {
    const { stdout } = await execa('pnpm', [
        'm', 'ls', '--json', '--depth=-1', `--filter=${pkg}^...`
    ]);

    return stdout ? JSON.parse(stdout) : [];
}

/**
 * Start the main process.
 * 
 * @param {string} pkg 
 */
export async function start(pkg) {
    const { workspace, dependencies } = await selectWorkspace(pkg);

    bootServer(workspace);

    for(const workspace of dependencies) {
        watchWorkspace(workspace);
    }
}

/**
 * Boot the dev server for a given workspace.
 * 
 * @param {Workspace} workspace 
 * @param {number} waitUntilSilent 
 * @returns {Promise<{stdout}>}
 */
export function bootServer(workspace, waitUntilSilent = 1000) {
    return new Promise(resolve => {
        const { stdout } = run('dev', [
            `--filter=${workspace.name}`
        ]);

        const listener = debounce(() => {
            stdout.removeListener('data', listener);

            resolve({ stdout });
        }, waitUntilSilent);

        stdout.on('data', listener);
    });
}

/**
 * Run the turbo command with the given args.
 * 
 * @param {string} command 
 * @param  {...any} args 
 * @returns ChildProcess
 */
export function run(command, ...args) {
    const childProcess = execa('pnpm', [
        'turbo',
        'run',
        command,
        ...args
    ], { env: { FORCE_COLOR: true } });

    childProcess.stdout.pipe(process.stdout);

    return childProcess;
}

/**
 * Run the turbo build command on the main the workspace.
 * 
 * @param {Workspace} workspace 
 */
export async function buildWorkspace(workspace) {
    const { stdout } = run('build', [
        `--filter=${workspace.name}`
    ]);
}

/**
 * Prompt the user to select a workspace if the specified package is not valid.
 * By default the UI prompt if `pkg` is undefined.
 * 
 * @param {string|undefined} pkg 
 * @returns {Workspace}
 */
export async function selectWorkspace(pkg) {
    // List the available workspaces
    const workspaces = await ls();

    // Check to see if the specified package is a valid workspace. If it is
    // valid, return it.
    const workspace = workspaces.find(({ name }) => pkg === name);

    // Return the matching workspace if it exists.
    if(workspace) {
        return withDependencies(workspace);
    }

    // If no workspace, use inquirer to prompt the user with a list.
    return await inquirer
        .prompt([
            {
                type: 'list',
                name: 'workspace',
                message: 'Select the package you want to dev:',
                choices: workspaces
            }
        ]).then(({ workspace }) => withDependencies(
            workspaces.find(({ name }) => workspace === name)
        ));
}

/**
 * Watch the workspace.
 * 
 * @param {Workspace} workspace 
 * @returns {Promise<Watcher>}
 */
export async function watchWorkspace(workspace) {
    return watch([
        `${workspace.path}/**/*.{html,vue,js,ts,tsx}`,
    ], {
        ignored: [
            `${workspace.path}/{node_modules,dist}`
        ],
        usePolling: true,
        persistent: true
    }).then((watcher) => {
        watcher.on('add', path => {
            console.log(
                chalk.gray(`Added file: ${path}`)
            );

            buildWorkspace(workspace);
        });

        watcher.on('unlink', path => {
            console.log(
                chalk.gray(`Removed file: ${path}`)
            );
            
            buildWorkspace(workspace);
        });

        watcher.on('change', () => buildWorkspace(workspace));

        return watcher;
    });
}

/**
 * Generate a watcher with a promise interface.
 * 
 * @param {*} files 
 * @param {*} options 
 * @returns {Promise<Watcher>}
 */
export async function watch(files, options) {
    return new Promise(resolve => {
        const watcher = chokidar.watch(files, options);

        watcher.once('ready', () => resolve(watcher));
    });
}

/**
 * List the dependencies with the workspace.
 * 
 * @param {*} workspace 
 * @returns {}
 */
export async function withDependencies(workspace) {
    const dependencies = await lsDeps(workspace.name);

    return {
        workspace, dependencies
    };
}