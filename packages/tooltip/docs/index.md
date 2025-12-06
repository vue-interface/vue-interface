---
title: Tooltip
---

<script setup>
import '../index.css'
import { ref, defineComponent, h, getCurrentInstance } from 'vue'
import { Tooltip, TooltipPlugin } from '../index.ts'

const dynamicEl = ref(false)
const directiveEl = ref(false)

const WithTooltip = defineComponent({
  name: 'WithTooltip',
  setup(_, { slots }) {
    const el = ref()
    return () =>
      h(
        'a',
        { ref: el, href: '#', class: 'text-blue-500 hover:underline' },
        slots.default?.({ el })
      )
  }
})

const app = getCurrentInstance()?.appContext.app
if (app) {
  app.use(TooltipPlugin)
  app.component('Tooltip', Tooltip)
  app.component('with-tooltip', WithTooltip)
}
</script>

# Tooltip

The `tooltip` component provides flexible tooltips with customizable placement options.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/tooltip
```

```bash [yarn]
yarn add @vue-interface/tooltip
```

```bash [npm]
npm i @vue-interface/tooltip
```
:::

## Basic Usage

Tooltips can be positioned at the top, bottom, left, or right of the target element.

<div class="flex gap-4">
    <!-- #region basicUsage -->
    <with-tooltip v-slot="{el}">
        Top
        <Tooltip :target="el">
            Some Tooltip
        </Tooltip>
    </with-tooltip>
    <with-tooltip v-slot="{el}">
        Bottom
        <Tooltip :target="el" placement="bottom">
            Some Tooltip
        </Tooltip>
    </with-tooltip>
    <with-tooltip v-slot="{el}">
        Left
        <Tooltip :target="el" placement="left">
            Some Tooltip
        </Tooltip>
    </with-tooltip>
    <with-tooltip v-slot="{el}">
        Right
        <Tooltip :target="el" placement="right">
            Some Tooltip
        </Tooltip>
    </with-tooltip>
    <!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< ./index.md#basicUsage{html}
:::

## Via Plugin

Use the Tooltip plugin to automatically create tooltips from `title` attributes.

<div class="flex gap-4 [&>a]:text-blue-500 [&>a]:hover:underline">
    <!-- #region viaPlugin -->
    <a href="#" title="Some Tooltip" data-tooltip-placement="top">
        Top
    </a>
    <a href="#" title="Some Tooltip" data-tooltip-placement="bottom">
        Bottom
    </a>
    <a href="#" title="Some Tooltip" data-tooltip-placement="left">
        Left
    </a>
    <a href="#" title="Some Tooltip" data-tooltip-placement="right">
        Right
    </a>
    <!-- #endregion viaPlugin -->
</div>

::: details Show Code
<<< ./index.md#viaPlugin{html}
:::

## Dynamic Elements

Tooltips work with dynamically mounted and unmounted elements.

<div class="flex gap-4 [&>button]:p-2 [&>button]:rounded [&>button]:bg-blue-500">
    <!-- #region dynamicElements -->
    <button @click="dynamicEl = true">Mount Element</button>
    <button v-if="dynamicEl" title="Some Tooltip" @click="dynamicEl = false">
        Click to Unmount
    </button>
    <!-- #endregion dynamicElements -->
</div>

::: details Show Code
<<< ./index.md#dynamicElements{html}
:::

## Via Directive

Use the `v-tooltip` directive for a more concise syntax.

<div class="flex gap-4 [&>button]:p-2 [&>button]:rounded [&>button]:bg-blue-500">
    <!-- #region viaDirective -->
    <button @click="directiveEl = true">Mount Element</button>
    <button v-if="directiveEl" v-tooltip="'Some Tooltip'" @click="directiveEl = false">
        Click to Unmount
    </button>
    <button v-if="directiveEl" v-tooltip="{
        title: 'Some Tooltip',
        placement: 'top'
    }" @click="directiveEl = false">
        Top
    </button>
    <button v-if="directiveEl" v-tooltip="{
        title: 'Some Tooltip',
        placement: 'bottom'
    }" @click="directiveEl = false">
        Bottom
    </button>
    <button v-if="directiveEl" v-tooltip="{
        title: 'Some Tooltip',
        placement: 'left'
    }" @click="directiveEl = false">
        Left
    </button>
    <button v-if="directiveEl" v-tooltip="{
        title: 'Some Tooltip',
        placement: 'right'
    }" @click="directiveEl = false">
        Right
    </button>
    <!-- #endregion viaDirective -->
</div>

::: details Show Code
<<< ./index.md#viaDirective{html}
:::