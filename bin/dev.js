#! /usr/bin/env node
import { program } from 'commander';
import { execa } from 'execa';
import inquirer from 'inquirer';
import { Listr } from 'listr2';
import process from 'process';

async function ls() {
    const { stdout } = await execa('pnpm', [
        'm', 'ls', '--json', '--depth=-1', '--filter=@vue-interface/*'
    ]);

    return JSON.parse(stdout);
}

async function selectWorkspace() {
    return await inquirer
        .prompt([
            {
                type: 'list',
                name: 'workspace',
                message: 'Select the package you want to dev:',
                choices: await ls()
            }
        ]).then(({ workspace }) => workspace);
}

program
    .name('dev-tool');

program
    .command('start')
    .action(async() => {
        const workspace = await selectWorkspace();

        let stdout;

        const tasks = new Listr([
            {
                title: 'Preparing Bundle',
                task(ctx, task) {
                    return new Promise(resolve => {
                        let output = '';

                        stdout = execa('pnpm', [
                            'turbo',
                            'run',
                            'dev',
                            `--filter=${workspace}`
                        ]).stdout;

                        stdout.on('data', data => {
                            task.output = data.toString();

                            ctx.matches = task.output.match(/(https?:\/\/[^\s]+)/);

                            if(ctx.matches) {
                                resolve();
                            }
                        });
                    });  
                }
            },
            {
                title: 'Dev Server',
                task(ctx, task) {
                    return task.newListr([
                        {
                            title: 'Starting Dev Server',
                            task(ctx, task) {
                                task.title = `Server Running: ${ctx.matches[0]}`;

                                stdout.on('data', data => {
                                    task.output = data.toString();
                                });

                                return new Promise(() => {
                                    // Do nothing because the dev server is already running...
                                    // This is just for a visual indicator that runs concurrently
                                    // to the following task.
                                });
                            }
                        },
                        {
                            title: 'Watching Dependencies',
                            task(ctx, task) {
                                return new Promise(() => {
                                    let output = [];

                                    const { stdout } = execa('pnpm', [
                                        'turbo',
                                        'run',
                                        'watch',
                                        `--filter=${workspace}^...`
                                    ]);

                                    stdout.on('data', data => {
                                        task.output = data.toString();
                                    });
                                    // pnpm turbo run watch--filter =@vue-interface / input - field ^...
                                });
                            }
                        }
                    ], { concurrent: true });
                }
            }
        ], { concurrent: false });

        await tasks.run();

        process.exit();
    });

program.parse(process.argv);