# Getting Started

Vue Interface is a modular collection of [Vue 3](https://vuejs.org/) components styled with [Tailwind CSS](https://tailwindcss.com/). Each component is published as a separate package, allowing you to install only what you need.

## Prerequisites

- **Vue**: ^3.3.4
- **Tailwind CSS**: ^4.0.0

## Installation

Since Vue Interface is modular, you install specific packages rather than a single library. For example, to install the Input Field and Form Control packages:

::: code-group
```bash [pnpm]
pnpm add @vue-interface/input-field @vue-interface/form-control
```

```bash [yarn]
yarn add @vue-interface/input-field @vue-interface/form-control
```

```bash [npm]
npm install @vue-interface/input-field @vue-interface/form-control
```
:::

Be sure to also install any peer dependencies if warned by your package manager.

## Usage

### Importing Components

Import the component directly from the package in your Vue files.

```vue
<script setup>
import { InputField } from '@vue-interface/input-field';
</script>

<template>
    <InputField name="example" label="Example Input" />
</template>
```

### Styling

The components rely on Tailwind CSS for styling. You must import the CSS file provided by each package. This ensures that the component's specific Tailwind classes and custom styles are applied.

```javascript
import '@vue-interface/form-control/index.css';
```

Alternatively, if you are using a bundler that supports CSS injection or if you want to include all styles globally, consult the specific package documentation for the best approach.