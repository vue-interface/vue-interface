import chalk from "chalk";
import inquirer from "inquirer";
import semver from 'semver';
import status from '../commands/status.js';
import { add, commit, push, status as gitStatus, version } from '../lib/git.js';
import { view } from "../lib/helpers.js";

/**
 * Bump the version of one or more packages.
 * 
 * 
 */
export default async function bump(pkg, opts, command) {
    const workspaces = (await status(pkg, opts, command))
        .filter(({ status }) => status.outdated);

    for (const { workspace, status } of workspaces) {
        // Parse the workspace version.
        const { prerelease: [ preid, prenum ] } = semver.parse(
            workspace.version || '0.0.0'
        );
        
        console.log(view('bump-header')({ workspace, status }));        

        // Ask the user if they want to update the package in this iteration.
        const { confirmCommit, confirmUpdate, commitMessage, increment } = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmUpdate',
                message: `Do you want to bump the version ${chalk.yellow(workspace.version)}?`,
                default: true
            },
            {
                type: 'confirm',
                name: 'confirmCommit',
                message: `${chalk.yellow('The Git directory is not clean.')} Do you want to commit these changes?`,
                default: true,
                when: ({ confirmUpdate }) => confirmUpdate && gitStatus({
                    cwd: workspace.path
                }).then(({ stdout }) => !!stdout.trim())
            },
            {
                type: 'input',
                name: 'commitMessage',
                message: 'Enter a commit message:',
                when: ({ confirmCommit }) => confirmCommit,
                filter: (value, ...args) => {
                    if (!value) {
                        throw new Error('You must enter a commit message.')
                    }

                    return value;
                }
            },
            {
                type: 'confirm',
                name: 'prerelease',
                message: 'Is this a prerelease?',
                default: !!preid,
                when: ({ confirmUpdate, confirmCommit }) => confirmUpdate && (confirmCommit || confirmCommit === undefined)
            },
            {
                type: 'input',
                name: 'preid',
                message: 'What is the prerelease identifier (beta, alpha, RC)?',
                default: preid,
                when: ({ confirmUpdate, confirmCommit, prerelease }) => confirmUpdate && (confirmCommit || confirmCommit === undefined) && prerelease
            },
            {
                type: 'list',
                name: 'increment',
                message: 'Select version number:',
                when: ({ confirmUpdate, confirmCommit }) => confirmUpdate && (confirmCommit || confirmCommit === undefined),
                choices: ({ preid }) => {
                    return !preid ? [
                        { value: 'patch', name: `Patch (${chalk.yellow(workspace.version)} -> ${chalk.green(semver.inc(workspace.version, 'patch'))})` },
                        { value: 'minor', name: `Minor (${chalk.yellow(workspace.version)} -> ${chalk.green(semver.inc(workspace.version, 'minor'))})` },
                        { value: 'major', name: `Major (${chalk.yellow(workspace.version)} -> ${chalk.green(semver.inc(workspace.version, 'major'))})` },
                    ] : [
                        { value: 'prerelease', name: `Prerelease (${chalk.yellow(workspace.version)} -> ${chalk.green(semver.inc(workspace.version, 'prerelease', preid))})` },
                        { value: 'preminor', name: `Preminor (${chalk.yellow(workspace.version)} -> ${chalk.green(semver.inc(workspace.version, 'preminor', preid))})` },
                        { value: 'premajor', name: `Premajor (${chalk.yellow(workspace.version)} -> ${chalk.green(semver.inc(workspace.version, 'premajor', preid))})` },
                    ]
                }
            }
        ]);

        // Perform the version bump.
        if (confirmUpdate && (confirmCommit || confirmCommit === undefined)) {
            console.log(view('bump-preview')({ commitMessage, workspace, increment, status }));
            
            const { confirmVersion } = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'confirmVersion',
                    message: `Is this information correct?`,
                    default: true
                }
            ]);

            if(!confirmVersion) {
                continue;
            }

            await add({ cwd: workspace.path });

            if (commitMessage) {
                await commit(commitMessage, { cwd: workspace.path });
            }
            
            await version(increment, { cwd: workspace.path });
            await push(['--follow-tags'], { cwd: workspace.path });

            console.log(`\nPublished ${chalk.bold.cyan(workspace.name)} ${chalk.green(semver.inc(workspace.version, increment)) }!`)
        }
    }
}