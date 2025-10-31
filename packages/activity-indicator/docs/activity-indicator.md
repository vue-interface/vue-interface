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

## Sizing

The size of all indicators can be customized using predetermined size classes: `2xs` - `5xl`. 

``` html
<activity-indicator :type="Dots" size="lg"></activity-indicator>
```

For more granular control over indicator sizes, use Tailwind's numeric sizing scale classes: `activity-indicator-1` - `activity-indicator-96`. 

``` html
<activity-indicator :type="Dots" class="activity-indicator-3"></activity-indicator>
```

For precise sizing, specify exact pixel values using the syntax `activity-indicator-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

``` html
<activity-indicator :type="Dots" class="activity-indicator-[16px]"></activity-indicator>
```

## Custom Colors

To customize the color of the indicator, use the class: `activity-indicator-[color]`.

<div class="flex py-5 gap-4">
    <!-- #region customColors-->
    <activity-indicator :type="Dots" class="activity-indicator-red-700"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-yellow-700"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-green-700"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-blue-700"></activity-indicator>
    <!-- #endregion customColors-->
</div>

<<< @/packages/activity-indicator/docs/activity-indicator.md#customColors{html}

## Dots

<div class="flex flex-col py-4 gap-2">
    <!-- #region dots -->
    <activity-indicator :type="Dots" size="2xs"></activity-indicator>
    <activity-indicator :type="Dots" size="xs"></activity-indicator>
    <activity-indicator :type="Dots" size="sm"></activity-indicator>
    <activity-indicator :type="Dots" size="md"></activity-indicator>
    <activity-indicator :type="Dots" size="lg"></activity-indicator>
    <activity-indicator :type="Dots" size="xl"></activity-indicator>
    <activity-indicator :type="Dots" size="2xl"></activity-indicator>
    <activity-indicator :type="Dots" size="3xl"></activity-indicator>
    <activity-indicator :type="Dots" size="4xl"></activity-indicator>
    <activity-indicator :type="Dots" size="5xl"></activity-indicator>
    <!-- #endregion dots -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#dots{html}
:::

### Tailwind Sizes

<div class="flex flex-col py-4 gap-2">
    <!-- #region dotsTW-->
    <activity-indicator :type="Dots" class="activity-indicator-1"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-2"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-3"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-4"></activity-indicator>
    <!-- #endregion dotsTW-->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#dotsTW{html}
:::

### Arbitrary Sizes

<div class="flex flex-col py-4 gap-2">
    <!-- #region dotsArb-->
    <activity-indicator :type="Dots" class="activity-indicator-[16px]"></activity-indicator>
    <activity-indicator :type="Dots" class="activity-indicator-[2rem]"></activity-indicator>
    <!-- #endregion dotsArb-->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#dotsArb{html}
:::

## Chase

<div class="flex py-5 gap-4">
    <!-- #region chase-->
    <activity-indicator :type="Chase" size="xs"></activity-indicator>
    <activity-indicator :type="Chase" size="sm"></activity-indicator>
    <activity-indicator :type="Chase" size="md"></activity-indicator>
    <activity-indicator :type="Chase" size="lg"></activity-indicator>
    <activity-indicator :type="Chase" size="xl"></activity-indicator>
    <!-- #endregion chase-->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#chase{html}
:::

## Spinner

<div class="flex py-5 gap-4">
    <!-- #region spinner-->
    <activity-indicator :type="Spinner" size="xs"></activity-indicator>
    <activity-indicator :type="Spinner" size="sm"></activity-indicator>
    <activity-indicator :type="Spinner" size="md"></activity-indicator>
    <activity-indicator :type="Spinner" size="lg"></activity-indicator>
    <activity-indicator :type="Spinner" size="xl"></activity-indicator>
    <!-- #endregion spinner-->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#spinner{html}
:::

## Square

<div class="flex py-5 gap-4">
  <!-- #region square -->
  <activity-indicator :type="Square" size="xs"></activity-indicator>
  <activity-indicator :type="Square" size="sm"></activity-indicator>
  <activity-indicator :type="Square" size="md"></activity-indicator>
  <activity-indicator :type="Square" size="lg"></activity-indicator>
  <activity-indicator :type="Square" size="xl"></activity-indicator>
  <!-- #endregion square -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#square{html}
:::

## Square Orbit

<div class="flex py-5 gap-4">
  <!-- #region square-orbit -->
  <activity-indicator :type="SquareOrbit" size="xs"></activity-indicator>
  <activity-indicator :type="SquareOrbit" size="sm"></activity-indicator>
  <activity-indicator :type="SquareOrbit" size="md"></activity-indicator>
  <activity-indicator :type="SquareOrbit" size="lg"></activity-indicator>
  <activity-indicator :type="SquareOrbit" size="xl"></activity-indicator>
  <!-- #endregion square-orbit -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#square-orbit{html}
:::

## Square Fold

<div class="flex py-5 gap-4">
  <!-- #region square-fold -->
  <activity-indicator :type="SquareFold" size="xs"></activity-indicator>
  <activity-indicator :type="SquareFold" size="sm"></activity-indicator>
  <activity-indicator :type="SquareFold" size="md"></activity-indicator>
  <activity-indicator :type="SquareFold" size="lg"></activity-indicator>
  <activity-indicator :type="SquareFold" size="xl"></activity-indicator>
  <!-- #endregion square-fold -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#square-fold{html}
:::

## Circle Fade

<div class="flex py-5 gap-4">
  <!-- #region circle-fade -->
  <activity-indicator :type="CircleFade" size="xs"></activity-indicator>
  <activity-indicator :type="CircleFade" size="sm"></activity-indicator>
  <activity-indicator :type="CircleFade" size="md"></activity-indicator>
  <activity-indicator :type="CircleFade" size="lg"></activity-indicator>
  <activity-indicator :type="CircleFade" size="xl"></activity-indicator>
  <!-- #endregion circle-fade -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#circle-fade{html}
:::

## Circle Orbit

<div class="flex py-5 gap-4">
  <!-- #region circle-orbit -->
  <activity-indicator :type="CircleOrbit" size="xs"></activity-indicator>
  <activity-indicator :type="CircleOrbit" size="sm"></activity-indicator>
  <activity-indicator :type="CircleOrbit" size="md"></activity-indicator>
  <activity-indicator :type="CircleOrbit" size="lg"></activity-indicator>
  <activity-indicator :type="CircleOrbit" size="xl"></activity-indicator>
  <!-- #endregion circle-orbit -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#circle-orbit{html}
:::

## Circle Trail

<div class="flex py-5 gap-4">
  <!-- #region circle-trail -->
  <activity-indicator :type="CircleTrail" size="xs"></activity-indicator>
  <activity-indicator :type="CircleTrail" size="sm"></activity-indicator>
  <activity-indicator :type="CircleTrail" size="md"></activity-indicator>
  <activity-indicator :type="CircleTrail" size="lg"></activity-indicator>
  <activity-indicator :type="CircleTrail" size="xl"></activity-indicator>
  <!-- #endregion circle-trail -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#circle-trail{html}
:::

## Pulse

<div class="flex py-5 gap-4">
  <!-- #region pulse -->
  <activity-indicator :type="Pulse" size="xs"></activity-indicator>
  <activity-indicator :type="Pulse" size="sm"></activity-indicator>
  <activity-indicator :type="Pulse" size="md"></activity-indicator>
  <activity-indicator :type="Pulse" size="lg"></activity-indicator>
  <activity-indicator :type="Pulse" size="xl"></activity-indicator>
  <!-- #endregion pulse -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#pulse{html}
:::

## Double Pulse

<div class="flex py-5 gap-4">
  <!-- #region double-pulse -->
  <activity-indicator :type="DoublePulse" size="xs"></activity-indicator>
  <activity-indicator :type="DoublePulse" size="sm"></activity-indicator>
  <activity-indicator :type="DoublePulse" size="md"></activity-indicator>
  <activity-indicator :type="DoublePulse" size="lg"></activity-indicator>
  <activity-indicator :type="DoublePulse" size="xl"></activity-indicator>
  <!-- #endregion double-pulse -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#double-pulse{html}
:::

## Grid

<div class="flex py-5 gap-4">
  <!-- #region grid -->
  <activity-indicator :type="Grid" size="xs"></activity-indicator>
  <activity-indicator :type="Grid" size="sm"></activity-indicator>
  <activity-indicator :type="Grid" size="md"></activity-indicator>
  <activity-indicator :type="Grid" size="lg"></activity-indicator>
  <activity-indicator :type="Grid" size="xl"></activity-indicator>
  <!-- #endregion grid -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#grid{html}
:::

## Facebook

<div class="flex py-5 gap-4">
  <!-- #region facebook -->
  <activity-indicator :type="Facebook" size="xs"></activity-indicator>
  <activity-indicator :type="Facebook" size="sm"></activity-indicator>
  <activity-indicator :type="Facebook" size="md"></activity-indicator>
  <activity-indicator :type="Facebook" size="lg"></activity-indicator>
  <activity-indicator :type="Facebook" size="xl"></activity-indicator>
  <!-- #endregion facebook -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#facebook{html}
:::

## Spotify

<div class="flex py-5 gap-4">
  <!-- #region spotify -->
  <activity-indicator :type="Spotify" size="xs"></activity-indicator>
  <activity-indicator :type="Spotify" size="sm"></activity-indicator>
  <activity-indicator :type="Spotify" size="md"></activity-indicator>
  <activity-indicator :type="Spotify" size="lg"></activity-indicator>
  <activity-indicator :type="Spotify" size="xl"></activity-indicator>
  <!-- #endregion spotify -->
</div>

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#spotify{html}
:::

## Center Indicator

<!-- #region center-indicator -->
<activity-indicator
  :type="Dots"
  class="flex items-center justify-center min-h-[500px]"
  style="background-color: rgba(0, 0, 0, 0.1);"
/>
<!-- #endregion center-indicator -->

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#center-indicator{html}
:::


## Absolute Inside Parent

<!-- #region absolute-inside -->
<div
  style="min-height: 500px; background-color: rgba(0, 0, 0, 0.1); position: relative;"
>
  <activity-indicator
    :type="Dots"
    class="absolute inset-0 flex items-center justify-center"
  />
</div>
<!-- #endregion absolute-inside -->

::: details Show Code
<<< @/packages/activity-indicator/docs/activity-indicator.md#absolute-inside{html}
:::