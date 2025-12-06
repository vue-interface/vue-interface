---
title: Activity Indicator
---

<script setup>
import '../index.css'

import {
    ActivityIndicator,
    Chase,
    CircleFade,
    CircleOrbit,
    CircleTrail,
    Dots,
    DoublePulse,
    Facebook,
    Grid,
    Pulse,
    Spinner,
    Spotify,
    Square,
    SquareFold,
    SquareOrbit
} from '../index.ts';
</script>

# Activity Indicator

Activity Indicator provides a collection of animated indicators that you can use to match different styles or loading contexts. Each variant has customizable sizing and styling, making it easy to integrate your UI. 

To use an indicator, specify a `:type=[indicator]` prop, and `size=[size]` prop. Add a `class=[custom size or color]` class to customize the size or color of the indicator.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/activity-indicator
```

```bash [yarn]
yarn add @vue-interface/activity-indicator
```

```bash [npm]
npm i @vue-interface/activity-indicator
```
:::

## Sizing

The size of all indicators can be customized using predetermined size classes: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`,  `4xl`,`5xl`. 

``` vue
<ActivityIndicator :type="Dots" size="lg"></ActivityIndicator>
```

For more granular control over indicator sizes, use Tailwind's numeric sizing scale classes: `activity-indicator-1` - `activity-indicator-96`. 

``` vue
<ActivityIndicator :type="Dots" class="activity-indicator-3"></ActivityIndicator>
```

For precise sizing, specify exact pixel values using the syntax `activity-indicator-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

``` vue
<ActivityIndicator :type="Dots" class="activity-indicator-[16px]"></ActivityIndicator>
```

## Custom Colors

To customize the color of the indicator, use the class: `activity-indicator-[color]`.

<div class="flex py-5 gap-4">
    <!-- #region customColors-->
    <ActivityIndicator :type="Dots" class="activity-indicator-red-700"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-yellow-700"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-green-700"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-blue-700"></ActivityIndicator>
    <!-- #endregion customColors-->
</div>

<<< ./index.md#customColors{vue}

## Dots

<div class="flex flex-col py-4 gap-2">
    <!-- #region dots -->
    <ActivityIndicator :type="Dots" size="2xs"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="xs"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="sm"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="md"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="lg"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="xl"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="2xl"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="3xl"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="4xl"></ActivityIndicator>
    <ActivityIndicator :type="Dots" size="5xl"></ActivityIndicator>
    <!-- #endregion dots -->
</div>

::: details Show Code
<<< ./index.md#dots{vue}
:::

### Tailwind Sizes

<div class="flex flex-col py-4 gap-2">
    <!-- #region dotsTW-->
    <ActivityIndicator :type="Dots" class="activity-indicator-1"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-2"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-3"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-4"></ActivityIndicator>
    <!-- #endregion dotsTW-->
</div>

::: details Show Code
<<< ./index.md#dotsTW{vue}
:::

### Arbitrary Sizes

<div class="flex flex-col py-4 gap-2">
    <!-- #region dotsArb-->
    <ActivityIndicator :type="Dots" class="activity-indicator-[16px]"></ActivityIndicator>
    <ActivityIndicator :type="Dots" class="activity-indicator-[2rem]"></ActivityIndicator>
    <!-- #endregion dotsArb-->
</div>

::: details Show Code
<<< ./index.md#dotsArb{vue}
:::

## Chase

<div class="flex py-5 gap-4">
    <!-- #region chase-->
    <ActivityIndicator :type="Chase" size="xs"></ActivityIndicator>
    <ActivityIndicator :type="Chase" size="sm"></ActivityIndicator>
    <ActivityIndicator :type="Chase" size="md"></ActivityIndicator>
    <ActivityIndicator :type="Chase" size="lg"></ActivityIndicator>
    <ActivityIndicator :type="Chase" size="xl"></ActivityIndicator>
    <!-- #endregion chase-->
</div>

::: details Show Code
<<< ./index.md#chase{vue}
:::

## Spinner

<div class="flex py-5 gap-4">
    <!-- #region spinner-->
    <ActivityIndicator :type="Spinner" size="xs"></ActivityIndicator>
    <ActivityIndicator :type="Spinner" size="sm"></ActivityIndicator>
    <ActivityIndicator :type="Spinner" size="md"></ActivityIndicator>
    <ActivityIndicator :type="Spinner" size="lg"></ActivityIndicator>
    <ActivityIndicator :type="Spinner" size="xl"></ActivityIndicator>
    <!-- #endregion spinner-->
</div>

::: details Show Code
<<< ./index.md#spinner{vue}
:::

## Square

<div class="flex py-5 gap-4">
  <!-- #region square -->
  <ActivityIndicator :type="Square" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="Square" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="Square" size="md"></ActivityIndicator>
  <ActivityIndicator :type="Square" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="Square" size="xl"></ActivityIndicator>
  <!-- #endregion square -->
</div>

::: details Show Code
<<< ./index.md#square{vue}
:::

## Square Orbit

<div class="flex py-5 gap-4">
  <!-- #region square-orbit -->
  <ActivityIndicator :type="SquareOrbit" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="SquareOrbit" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="SquareOrbit" size="md"></ActivityIndicator>
  <ActivityIndicator :type="SquareOrbit" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="SquareOrbit" size="xl"></ActivityIndicator>
  <!-- #endregion square-orbit -->
</div>

::: details Show Code
<<< ./index.md#square-orbit{vue}
:::

## Square Fold

<div class="flex py-5 gap-4">
  <!-- #region square-fold -->
  <ActivityIndicator :type="SquareFold" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="SquareFold" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="SquareFold" size="md"></ActivityIndicator>
  <ActivityIndicator :type="SquareFold" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="SquareFold" size="xl"></ActivityIndicator>
  <!-- #endregion square-fold -->
</div>

::: details Show Code
<<< ./index.md#square-fold{vue}
:::

## Circle Fade

<div class="flex py-5 gap-4">
  <!-- #region circle-fade -->
  <ActivityIndicator :type="CircleFade" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="CircleFade" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="CircleFade" size="md"></ActivityIndicator>
  <ActivityIndicator :type="CircleFade" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="CircleFade" size="xl"></ActivityIndicator>
  <!-- #endregion circle-fade -->
</div>

::: details Show Code
<<< ./index.md#circle-fade{vue}
:::

## Circle Orbit

<div class="flex py-5 gap-4">
  <!-- #region circle-orbit -->
  <ActivityIndicator :type="CircleOrbit" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="CircleOrbit" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="CircleOrbit" size="md"></ActivityIndicator>
  <ActivityIndicator :type="CircleOrbit" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="CircleOrbit" size="xl"></ActivityIndicator>
  <!-- #endregion circle-orbit -->
</div>

::: details Show Code
<<< ./index.md#circle-orbit{vue}
:::

## Circle Trail

<div class="flex py-5 gap-4">
  <!-- #region circle-trail -->
  <ActivityIndicator :type="CircleTrail" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="CircleTrail" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="CircleTrail" size="md"></ActivityIndicator>
  <ActivityIndicator :type="CircleTrail" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="CircleTrail" size="xl"></ActivityIndicator>
  <!-- #endregion circle-trail -->
</div>

::: details Show Code
<<< ./index.md#circle-trail{vue}
:::

## Pulse

<div class="flex py-5 gap-4">
  <!-- #region pulse -->
  <ActivityIndicator :type="Pulse" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="Pulse" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="Pulse" size="md"></ActivityIndicator>
  <ActivityIndicator :type="Pulse" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="Pulse" size="xl"></ActivityIndicator>
  <!-- #endregion pulse -->
</div>

::: details Show Code
<<< ./index.md#pulse{vue}
:::

## Double Pulse

<div class="flex py-5 gap-4">
  <!-- #region double-pulse -->
  <ActivityIndicator :type="DoublePulse" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="DoublePulse" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="DoublePulse" size="md"></ActivityIndicator>
  <ActivityIndicator :type="DoublePulse" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="DoublePulse" size="xl"></ActivityIndicator>
  <!-- #endregion double-pulse -->
</div>

::: details Show Code
<<< ./index.md#double-pulse{vue}
:::

## Grid

<div class="flex py-5 gap-4">
  <!-- #region grid -->
  <ActivityIndicator :type="Grid" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="Grid" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="Grid" size="md"></ActivityIndicator>
  <ActivityIndicator :type="Grid" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="Grid" size="xl"></ActivityIndicator>
  <!-- #endregion grid -->
</div>

::: details Show Code
<<< ./index.md#grid{vue}
:::

## Facebook

<div class="flex py-5 gap-4">
  <!-- #region facebook -->
  <ActivityIndicator :type="Facebook" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="Facebook" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="Facebook" size="md"></ActivityIndicator>
  <ActivityIndicator :type="Facebook" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="Facebook" size="xl"></ActivityIndicator>
  <!-- #endregion facebook -->
</div>

::: details Show Code
<<< ./index.md#facebook{vue}
:::

## Spotify

<div class="flex py-5 gap-4">
  <!-- #region spotify -->
  <ActivityIndicator :type="Spotify" size="xs"></ActivityIndicator>
  <ActivityIndicator :type="Spotify" size="sm"></ActivityIndicator>
  <ActivityIndicator :type="Spotify" size="md"></ActivityIndicator>
  <ActivityIndicator :type="Spotify" size="lg"></ActivityIndicator>
  <ActivityIndicator :type="Spotify" size="xl"></ActivityIndicator>
  <!-- #endregion spotify -->
</div>

::: details Show Code
<<< ./index.md#spotify{vue}
:::

## Absolute Inside Parent

<!-- #region absolute-inside -->
<div class="relative h-[500px] bg-black/10">
  <ActivityIndicator
    :type="Dots"
    class="absolute inset-0 flex items-center justify-center"
  />
</div>
<!-- #endregion absolute-inside -->

::: details Show Code
<<< ./index.md#absolute-inside{html}
:::