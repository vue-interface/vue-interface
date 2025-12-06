---
title: Slide Panel
---

<script setup>
import '../demo.css'
import Page from '../demo/Page.vue'
import SlidePanelContainer from '../src/SlidePanelContainer.vue'
</script>

# Slide Panel

The `slide panel` component provides a custom sliding panel that can slide from the left or right with customizable contents. `Slide Panel` uses the [button](/packages/btn/) component and utility classes for the buttons, allowing all the buttons to use the various css classes to customize the button such as the color, size, or variant. 

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/slide-panel
```

```bash [yarn]
yarn add @vue-interface/slide-panel
```

```bash [npm]
npm i @vue-interface/slide-panel
```
:::

## Basic Usage

<SlidePanelContainer class="top-16 h-[91vh]"/>
<Page />

<<< ../demo/Page.vue#imports{ts}
<<< ../demo/Page.vue#example{html}

::: info
The `slide panel` component is aligned to the right side of the screen, but can be switched to the left side by adding the `align="left"` prop. 
:::