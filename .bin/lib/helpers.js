import chalk from 'chalk';
import chokidar from 'chokidar';
import ejs from 'ejs';
import { execa } from 'execa';
import { inflect } from 'inflection';
import inquirer from 'inquirer';
import InquirerSearchList from 'inquirer-search-list';
import { debounce, identity } from 'lodash-es';
import logUpdate from 'log-update';
import { createRequire } from "module";
import ora from 'ora';
import path from 'path';
import semver from 'semver';
import { status as gitStatus } from './git.js';

inquirer.registerPrompt('search-list', InquirerSearchList);

/**
 * Required for Node 16 module to require a .json file and get the version.
 * Use the following code when Node v17 is available in production envs:
 * 
 * `import { version } from '../package.json' assert { type: "json" };`
 */
const require = createRequire(import.meta.url);

export const version = require('../../package.json').version;


/**
 * 
 */
const nativePromisePrototype = (async () => { })().constructor.prototype;

/**
 * 
 */
const descriptors = ['then', 'catch', 'finally'].map(property => [
    property,
    Reflect.getOwnPropertyDescriptor(nativePromisePrototype, property),
]);

/**
 * Merge a spawned process with a promise.
 * 
 * @param {*} spawned 
 * @param {*} promise 
 * @returns 
 */
export function mergePromise(spawned, promise) {
    for (const [property, descriptor] of descriptors) {
        // Starting the main `promise` is deferred to avoid consuming streams
        const value = typeof promise === 'function'
            ? (...args) => Reflect.apply(descriptor.value, promise(), args)
            : descriptor.value.bind(promise);

        Reflect.defineProperty(spawned, property, { ...descriptor, value });
    }

    return spawned;
};

/**
 * Get the npm info for a workspace.
 * 
 * @param {Workspace} workspace 
 * @returns {PackageInfo}
 */
export async function info(workspace) {
    return new Promise(async(resolve) => {
        const { stdout } = await execa(
            'pnpm', ['info', workspace.name, '--json']
        );

        resolve(JSON.parse(stdout));
    });
}

/**
 * List all the available packages.
 * 
 * @returns {array}
 */
export async function ls(...args) {
    const { stdout } = await execa('pnpm', [
        'm', 'ls', '--json', '--depth=-1', ...args
    ].filter(identity));

    return stdout ? JSON.parse(stdout) : [];
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
 * Find the workspace object from a given package name.
 * 
 * @param {string} pkg 
 * @return {Workspace|null}
 */
export async function findWorkspace(pkg) {
    return (await ls()).find(({ name }) => pkg === name);
}

/**
 * Get the status of a repo from a given workspace.
 * 
 * @param {Workspace} workspace 
 */
export async function status(workspace) {
    const npm = await info(workspace);

    const version = npm['dist-tags']?.latest || [...npm.versions].pop();

    const { stdout: log } = await execa('git', ['log', '--format="%s|:|%H|:|%h"'], {
        cwd: workspace.path
    });
    
    const commits = log.split('\n').reduce((carry, item) => {
        const [notes, hash, short] = item.slice(1, item.length - 1).split('|:|');

        carry.set(hash, `${notes} ${chalk.bgRed(`${short}`)}`);

        return carry;
    }, new Map);

    const newCommits = [...commits.values()].slice(
        0, [...commits.keys()].indexOf(npm.gitHead)
    );

    return {
        ...npm,
        version,
        log,
        commits,
        newCommits,
        outdated: newCommits.length > 0 || await gitStatus({cwd: workspace.path }).then(({ stdout }) => !!stdout)
    }
}

/**
 * Boot the dev server for a given workspace.
 * 
 * @param {Workspace} workspace 
 * @param {number} waitUntilSilent 
 * @returns {Promise<{stdout}>}
 */
export function bootServer(workspace, serverOpts = '', waitUntilSilent = 1000) {
    return new Promise(resolve => {
        const args = [
            `--filter=${workspace.name}`,
        ];

        if (serverOpts) {
            args.push(...serverOpts.split(/\s+/));
        }

        console.log(args);

        const { stdout } = run('dev', ...args);

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
    ], { 
        env: { FORCE_COLOR: true }
    });

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
                message: 'Select the desired package:',
                choices: workspaces
            }
        ]).then(({ workspace }) => withDependencies(
            workspaces.find(({ name }) => workspace === name)
        ));
}

/**
 * Start a spinner while the promise is running.
 * 
 * @param string message 
 * @param {Promise<ChildProcess>} promise 
 * @returns {Promise<ChildProcess>}
 */
export async function spinner(message, promise) {
    const render = view('spinner');

    let interval = setInterval(() => {
        logUpdate(render({ message }))
    }, 100);

    return promise.finally(() => {
        logUpdate.clear();

        clearInterval(interval);
    });
}

export function view(name) {
    const spinner = new ora();
    
    const render = ejs.compile(`<?-include("${name}")?>`, {
        delimiter: '?',
        root: path.resolve('.'),
        views: [
            path.resolve('.bin/views')
        ]
    });

    return (ctx = {}) => render({ 
        chalk, inflect, semver, spinner, ...ctx
    })
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