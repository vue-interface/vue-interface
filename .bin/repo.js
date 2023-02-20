#! /usr/bin/env node
import { program } from 'commander';
import process from 'process';
import { start, version } from './lib/helpers.js';

program
    .name('Vue Interface CLI')
    .description('This CLI provides the build tools to make development easy in this monorepo.')
    .version(version);

program
    .command('dev')
    .description('Start a Vite development server for a package.')
    .option('-p, --package <package>', 'The name of a workspace package.')
    .action(async function () {
        start(this.opts().package);
    });

program
    .command('version')
    .description('Bump the version for a package.')
    .option('-p, --package <package>', 'The name of a workspace package.')
    .action(async function () {
        console.log(this.opts());
    });

program.parse(process.argv);