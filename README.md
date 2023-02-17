# Vue Interface

This is a monorepo for the components of [Vue Interface](https://github.com/vue-interface). Each component is its own independent repository, and becomes a workspaces and Git submodule inside this monorepo. The purpose of this monorepo is provide a convenient and efficient way to develop UI components that are dependent on each other without relying on symlinks and other hacks that provide less than optimal development experiences.

## Installation

We prefer `pnpm`, but you can use `npm` or `yarn` to install too. 

```bash
pnpm i vue-interface
```

## Basic Usage

The monorepo will import all the Vue Interface packages. Vue Interface has full ESM and Typescript support, with tree shaking. Only the components you actually use will end up in your bundle.

```js
import { createApp } from 'vue';
import { InputField } from 'vue-interface';

const app = createApp({
    components: {
        InputField
    }
});

app.mount('#app');
```

## Developing

To start developing in the mono repo run the following commands. `pnpm install` should be ran the first time, after anything package.json updates or when adding another submodule.

```bash
pnpm install
pnpm dev
```

## Building

How to build the monorepo is coming soon.

## Versioning

Each package is independently versioned using strict [semantic versioning](https://semver.org/). The monorepo should import the packages with the stable versions. If a package introduces a breaking change, a major version should be made on the monorepo. The versions of the monorepo and packages are independent.

## Publishing

How to publish the monorepo is coming soon.
