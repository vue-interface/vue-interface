import { start } from '../lib/helpers.js';

export function useDev(program) {
    program
        .command('dev')
        .description('Start a development server for a specific package. All files in the specified package and its dependencies will be watched.')
        .option('-p, --package <package>', 'Specify a package to start developing. Passing a package will by pass the picklist.')
        .action(async function() {
            start(this.opts().package);
        });
}