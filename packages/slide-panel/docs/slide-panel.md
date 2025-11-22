---
title: Slide Panel
---

<script setup>
import '../demo.css'
import Page from '../demo/Page.vue'
import SlidePanelContainer from '../src/SlidePanelContainer.vue'
</script>

# Slide Panel

The `slide panel` component provides a custom sliding panel that can slide from the left or right with customizable contents. `Slide Panel` uses the [button](/packages/btn/docs/btn) component and utility classes for the buttons, allowing all the buttons to use the various css classes to customize the button such as the color, size, or variant. 

## Basic Usage

<SlidePanelContainer />
<Page />

::: details Show Code
<<< @/packages/slide-panel/demo/Page.vue#imports{ts}
<<< @/packages/slide-panel/demo/Page.vue#example{ts}
:::