import chalk from 'chalk';
import ejs from 'ejs';
import { inflect } from 'inflection';
import { identity } from 'lodash-es';
import logSymbols from 'log-symbols';
import logUpdate from 'log-update';
import Ora from "ora";
import path from 'path';
import { ls, status as workspaceStatus } from '../lib/helpers.js';

/**
 * Get the release status of one or more packages.
 * 
 * @returns 
 */
export default async function status(pkg, opts, command) {
    const spinner = new Ora();

    const parse = ejs.compile('<?-include("status")?>', {
        delimiter: '?',
        root: path.resolve('.'),
        views: [
            path.resolve('.bin/views')
        ]
    });

    const args = [
        opts.filter && opts.filter.map(str => `--filter=${str}`),
        pkg && `--filter=${pkg}`
    ].filter(identity);
    
    const items = (await ls(...args)).map(workspace => {
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
            opts,
            chalk,
            spinner,
            inflect,
            logSymbols,
            ...item
        })
    }).join('\n').trim()

    const interval = setInterval(() => logUpdate(render()), 100);

    return Promise.all(
        items.map(async({ ready }) => ready)
    ).then(() => {
        return items;
    }).finally(() => {
        clearInterval(interval);

        logUpdate.clear();

        console.log(render());
    });
}