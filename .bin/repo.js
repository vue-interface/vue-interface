#! /usr/bin/env node
import { program } from 'commander';
import process from 'process';
import start from './commands/start.js';
import status from './commands/status.js';
import { version } from './lib/helpers.js';

program
    .name('Vue Interface CLI')
    .description('This CLI provides the build tools to make development easy in this monorepo.')
    .version(version);

program
    .command('dev')
    .description('Start a Vite development server for a package.')
    .option('-p, --package <package>', 'The name of a workspace package.')
    .action(start);

program
    .command('status')
    .description('Check the release status of the workspace packages.')
    .option('-a, --all', 'Show all the information available.')
    .option('-p, --package <package>', 'The name of a workspace package.')
    .option('-f, --filter <filter>', 'Filter the workspace using PNPM.')
    .action(status)

program
    .command('bump')
    .description('Bump the version for a package.')
    .option('-p, --package <package>', 'The name of a workspace package.')
    .option('-f, --filter <filter>', 'Filter the workspace using PNPM.')
    .action(async function () {
        // bumpVersion();
    });

program.parse(process.argv);