import chalk from "chalk";
import { inflect } from "inflection";
import inquirer from "inquirer";
import semver from 'semver';
import status from '../commands/status.js';
import { add, commit, status as gitStatus, version } from '../lib/git.js';
import { view } from "../lib/helpers.js";

/**
 * Bump the version of one or more packages.
 * 
 * 
 */
export default async function bump(opts, command) {
    const [ outdated, updated ] = (await status(opts, command))
        .reduce(([ outdated, updated ], workspace) => {
            if (workspace.outdated) {
                outdated.push(workspace);
            }
            else {
                updated.push(workspace)
            }

            return [ outdated, updated ];
        }, [[], []]);
        

    console.log(chalk.red(`\n${outdated.length} ${inflect('workspaces', outdated.length)} outdated.`))
    console.log(chalk.green(`${updated.length} ${inflect('workspaces', updated.length)} are already up to date.`, '\n'))

    for (const workspace of outdated) {
        // Parse the workspace version.
        const { prerelease: [ preid, prenum ] } = semver.parse(
            workspace.version || '0.0.0'
        );

        console.log(view('bump-header')({ workspace }));        

        // Ask the user if they want to update the package in this iteration.
        const { confirmCommit, commitMessage, increment } = await inquirer.prompt([
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
                when: ({ confirmUpdate }) => confirmUpdate && gitStatus(workspace).then(({ stdout }) => !!stdout)
            },
            {
                type: 'input',
                name: 'commitMessage',
                message: 'Enter a commit message:',
                when: ({ confirmCommit }) => confirmCommit
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
        if(confirmCommit) {
            console.log(view('bump-preview')({ commitMessage, workspace, increment }));
            
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
            await commit(commitMessage, { cwd: workspace.path });
            await version({ cwd: workspace.path });
            // await push({ cwd: workspace.path });
        }
    }
}