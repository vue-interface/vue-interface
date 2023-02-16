# Vue Interface

## What is this repository?
This is a monorepo for the components of [Vue Interface](https://github.com/vue-interface). Each component is its own independent repository, and become a workspaces and Git submodule to this monorepo. The purpose of this monorepo is provide a convenient and efficient way to develop UI components that dependent.

## Basic Usage

```bash
pnpm i vue-interface
```

```js
import { ActivityIndicator, Pulse, InputField } from 'vue-interface';
```

## Developing

To start developing in the mono repo run the following commands. `pnpm install` only needs to be ran once.

```bash
pnpm install
pnpm start
```

## Versioning

Each package is independently versioned using strict [semantic versioning](https://semver.org/). The monorepo should import the packages with the stable versions. If a package introduces a breaking change, a major version should be made on the monorepo. The versions of the monorepo and packages are independent.

## Publishing

Publishing docs comming soon.
