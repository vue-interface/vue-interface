import chokidar from 'chokidar';
import { execa } from 'execa';
import inquirer from 'inquirer';
import { debounce } from 'lodash-es';

export async function ls() {
    const { stdout } = await execa('pnpm', [
        'm', 'ls', '--json', '--depth=-1', '--filter=@vue-interface/*'
    ]);

    return JSON.parse(stdout);
}

export async function lsDeps(pkg) {
    const { stdout } = await execa('pnpm', [
        'm', 'ls', '--json', '--depth=-1', `--filter=${pkg}^...`
    ]);

    return stdout ? JSON.parse(stdout) : [];
}

export async function start(pkg) {
    const { workspace, dependencies } = await selectWorkspace(pkg);

    bootServer(workspace);

    for(const workspace of dependencies) {
        watchWorkspace(workspace);
    }
}

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

export async function buildWorkspace(workspace) {
    const { stdout } = run('build', [
        `--filter=${workspace.name}`
    ]);
}

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
    });
}

export async function watch(files, options) {
    return new Promise(resolve => {
        const watcher = chokidar.watch(files, options);

        watcher.once('ready', () => resolve(watcher));
    });
}

export async function withDependencies(workspace) {
    const dependencies = await lsDeps(workspace.name);

    return {
        workspace, dependencies
    };
}