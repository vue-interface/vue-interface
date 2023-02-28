#! /usr/bin/env node
import { program } from 'commander';
import process from 'process';
import bump from './commands/bump.js';
import dev from './commands/dev.js';
import status from './commands/status.js';
import { version } from './lib/helpers.js';

program
    .name('Vue Interface CLI')
    .description('This CLI provides the build tools to make development easy in this monorepo.')
    .version(version);

program
    .command('dev')
    .description('Start a Vite development server for a package.')
    .argument('[package]', 'The name of a workspace package.')
    .option('-w, --watch', 'Watch and build files on changes without starting a dev server.')
    .action(dev);

program
    .command('status')
    .description('Check the release status of the workspace packages.')
    .argument('[package]', 'The name of a workspace package.')
    .option('-f, --filter <filter...>', 'Filter the workspace using PNPM.')
    .option('-a, --all', 'Show all the information available.')
    .action(status)

program
    .command('bump')
    .description('Bump the version for a package.')
    .argument('[package]', 'The name of a workspace package.')
    .option('-f, --filter <filter...>', 'Filter the workspace using PNPM.')
    .action(bump);

program.parse(process.argv);