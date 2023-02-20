import chalk from 'chalk';
import ejs from 'ejs';
import { execa } from 'execa';
import { ls, watch } from '../lib/helpers.js';

export function useWatch(program) {
    program
        .command('watch')
        .argument('<command>', 'The command to run inside the workspace package after the watcher fires.')
        .option('--p, --paths <paths...>', 'Relative paths to watch. Example, packages/activity-indicator')
        .action(async (command, paths) => {
            const availablePackages = await ls();
            const template = ejs.compile(command);

            const pkgs = paths
                .map(str => {
                    const pkg = availablePackages.find(({ path }) => path.match(str));

                    if(pkg) {
                        pkg.relativePath = str;
                    }

                    return pkg;
                })
                .filter(pkg => !!pkg)
                .map(pkg => {
                    const command = template({ pkg }).split(' ');

                    watch([
                        `${pkg.relativePath}/**/*.{html,vue,js,ts,tsx}`,
                    ], {
                        ignored: [
                            `${pkg.relativePath}/{node_modules,dist}`
                        ],
                        usePolling: true,
                        persistent: true
                    }).then((watcher) => {
                        let childProcess;
                        
                        function run() {
                            if(childProcess) {
                                childProcess.kill('SIGTERM');
                            }

                            childProcess = execa(command[0], command.slice(1), {
                                stdio: 'inherit'
                            });

                            ['SIGINT', 'SIGTERM', 'SIGQUIT']
                                .forEach(signal => childProcess.once(signal, () => {
                                    if(childProcess) {
                                        childProcess.signal('SIGTERM');
                                        childProcess = null;
                                    }
                                }));

                        }

                        watcher.on('add', path => {
                            console.log(chalk.gray(`Added file: ${path}`));

                            run();
                        });
                        
                        watcher.on('unlink', path => {
                            console.log(chalk.gray(`Removed file: ${path}`));

                            run();
                        });

                        watcher.on('change', run);
                    });
                });
                   
        });
}