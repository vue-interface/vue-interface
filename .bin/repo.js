#! /usr/bin/env node
import { program } from 'commander';
import process from 'process';
import { start } from './lib/helpers.js';

program
    .name('Vue Interface CLI')
    .description('This CLI provides the build tools to make development easy in this monorepo.');

program
    .command('dev')
    .description('Start a development server for a package and all its dependencies.')
    .option('-p, --package <package>', 'Specify a package to start developing. Passing a package will by pass the picklist.')
    .action(async function () {
        start(this.opts().package);
    });
    
program.parse(process.argv);