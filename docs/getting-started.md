# Getting Started

## Installation

### Package Manager

Package manager like [pnpm](https://pnpm.io), [yarn](https://classic.yarnpkg.com/en/), or [npm](https://www.npmjs.com).
  
::: code-group
```bash [pnpm]
pnpm i vue-interface
```

```bash [yarn]
yarn add vue-interface
```

```bash [npm]
npm i vue-interface
```
:::

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