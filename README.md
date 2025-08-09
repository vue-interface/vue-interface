# Vue Interface

This is a monorepo for the components of [Vue Interface](https://github.com/vue-interface). Components are organized  in packages. The purpose of this monorepo is to provide a convenient and efficient way to develop and maintain UI components that are dependent on each other without relying on symlinks and other hacks that provide less than optimal development experiences. The goal is provide a collection of CLI tools so you can develop, version and publish for individual packages all from the root of the repo. The monorepo also utilizes [Storybook.js](https://storybook.js.org/) for clean documentation. 

## Installation

We prefer `pnpm`, but you can use `npm` or `yarn` to install too. 

```bash
pnpm i vue-interface
```

## Developing

To start developing in the monorepo run the following commands. `pnpm install` should be ran the first time, after any package.json updates or when adding another package.

```bash
pnpm install
pnpm dev
```

## Storybook.js Usage

To open [Storybook](https://storybook.js.org/) from the monorepo, ensure you are in the root directory, then
run the following command `pnpm storybook`. This will build the stories and open Storybook on `localhost:6006`.