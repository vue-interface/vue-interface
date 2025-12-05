---
title: Pagination
---

<script setup>
import '../demo.css'
import Pagination from '../src/Pagination.vue';


const pageNum = ref(1)

/* #region reactive */
import { ref, onMounted } from 'vue'
const page = ref(1)

onMounted(() => {
    setTimeout(() => {
        page.value = 50
    }, 1000)
})
/* #endregion reactive */
</script>

# Pagination

The `pagination` component provides flexible and customizable pagination control with customizable sizes, colors, and states.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/pagination
```

```bash [yarn]
yarn add @vue-interface/pagination
```

```bash [npm]
npm i @vue-interface/pagination
```
:::

## Props

The `pagination` component utilizes five [Vue props](https://vuejs.org/guide/components/props.html#prop-validation) for different customizations.

| Prop | Usage Syntax | Description | 
|------|--------------|-------------|
| `page` | `:page="[value]" ` | Active page |
| `total-pages` | `:total-pages="[value]" ` | Total number of pages |
| `show-pages` | `:show-pages="[value]" ` | [Number of pages visible](#custom-display-amount) |
| `size` | `size="pagination-[size]"` | [Pagination Size](#sizes) | 
| `color` | `color="pagination-[color]"` | [Pagination Color](#custom-colors) |
| `align` | `align="[value]"` | [Custom Alignment](#alignment) |
| `disabled` | `disabled` | Toggle disabled state |

## Basic Usage

<div class="bg-neutral-100 dark:bg-neutral-800 p-3 mb-4">
    Page: {{ pageNum }}
</div>

::: raw
<!-- #region basicUsage -->
<pagination v-model="pageNum" :total-pages="100" class="mb-3"></pagination>

<pagination :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination :page="50" :total-pages="100" class="mb-3"></pagination>
<pagination :page="100" :total-pages="100" class="mb-3"></pagination>
<pagination :page="50" :total-pages="100" class="mb-3" disabled></pagination>
<!-- #endregion basicUsage -->
:::

<<< @/packages/pagination/docs/pagination.md#basicUsage{html}

## Sizes

Customize the size of a `pagination` component using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `pagination-[size]`.

::: raw
<!-- #region predeterminedSizes -->
<pagination size="pagination-xs" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-sm" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-md" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-lg" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-xl" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-2xl" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-3xl" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-4xl" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-5xl" :page="1" :total-pages="100" class="mb-3"></pagination>
<!-- #endregion predeterminedSizes -->
:::

::: details Show Code
<<< @/packages/pagination/docs/pagination.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `pagination-1` - `pagination-96`.

::: raw
<!-- #region tailwindSizes -->
<pagination size="pagination-3" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-4" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-5" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-6" :page="1" :total-pages="100" class="mb-3"></pagination>
<!-- #endregion tailwindSizes -->
:::

::: details Show Code
<<< @/packages/pagination/docs/pagination.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `pagination-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

::: raw
<!-- #region arbitraySizes -->
<pagination size="pagination-[16px]" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination size="pagination-[1.5rem]" :page="1" :total-pages="100" class="mb-3"></pagination>
<!-- #endregion arbitraySizes -->
:::

::: details Show Code
<<< @/packages/pagination/docs/pagination.md#arbitraySizes{html}
:::

## Custom Colors

Customize the color of a `pagination` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by specifying the `color prop`: `color="pagination-[color]"`.

::: raw
<!-- #region customColors -->
<pagination color="pagination-amber-500" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination color="pagination-green-500" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination color="pagination-purple-500" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination color="pagination-neutral-500" :page="1" :total-pages="100" class="mb-3"></pagination>
<!-- #endregion customColors -->
:::

::: details Show Code
<<< @/packages/pagination/docs/pagination.md#customColors{html}
:::

## Alignment

Customize the alignment of the pagination component on the page using the `align` prop. Syntax: `align="[value]"`. 

| Value | Result |
|-------|--------|
| `start` | Left-Aligned | 
| `center ` | Centered | 
| `end` | Right-Aligned |

::: raw
<!-- #region alignment -->
<pagination align="start" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination align="center" :page="1" :total-pages="100" class="mb-3"></pagination>
<pagination align="end" :page="1" :total-pages="100" class="mb-3"></pagination>
<!-- #endregion alignment -->
:::

::: details Show Code
<<< @/packages/pagination/docs/pagination.md#alignment{html}
:::

## Custom Display Amount

Customize the number of pages that display in the pagination component using the `:show-pages` prop. Syntax: `:show-pages="[number of pages]"`

::: warning
The value of `show-pages` must be an **even number**
:::

::: raw
<!-- #region customPageNum -->
<pagination :page="50" :total-pages="100" :show-pages="2" class="mb-3"></pagination>
<pagination :page="50" :total-pages="100" :show-pages="8" class="mb-3"></pagination>
<pagination :page="50" :total-pages="100" :show-pages="10" class="mb-3"></pagination>
<!-- #endregion customPageNum -->
:::

::: details Show Code
<<< @/packages/pagination/docs/pagination.md#customPageNum{html}
:::

## Reactive Page Prop

The current page is: {{ page }}

::: raw
<!-- #region reactivePage -->
<pagination :page="page" :total-pages="100" class="mb-3"></pagination>
<!-- #endregion reactivePage -->
:::

<<< @/packages/pagination/docs/pagination.md#reactivePage{html}
<<< @/packages/pagination/docs/pagination.md#reactive{js}