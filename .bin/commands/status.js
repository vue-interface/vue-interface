import chalk from 'chalk';
import ejs from 'ejs';
import { inflect } from 'inflection';
import logSymbols from 'log-symbols';
import logUpdate from 'log-update';
import ora from "ora";
import path from 'path';
import { ls, status as workspaceStatus } from '../lib/helpers.js';

/**
 * Get the release status of one or more packages.
 * 
 * @returns 
 */
export default async function status() {
    const spinner = new ora();

    const parse = ejs.compile('<?-include("status")?>', {
        delimiter: '?',
        root: path.resolve('.'),
        views: [
            path.resolve('.bin/views')
        ]
    });
    
    const items = (await ls(this.opts().filter)).map(workspace => {
        const payload = {
            loaded: false,
            workspace,
            status: undefined,
            ready: workspaceStatus(workspace).then(status => payload.status = status)
        };

        return payload
    });

    const render = () => items.map(item => {
        return parse({
            opts: this.opts(),
            chalk,
            spinner,
            inflect,
            logSymbols,
            ...item
        })
    }).join('\n').trim()

    const interval = setInterval(() => logUpdate(render()), 100);

    return Promise.all(items.map(({ ready }) => ready)).finally(() => {
        clearInterval(interval);

        logUpdate.clear();

        console.log(render());
    });
}