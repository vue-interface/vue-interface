---
title: Button
---

<script type="module">
import '../index.css'
</script>

# Button

The `btn` utility class provides a flexible and customizable button component system with color variants, sizes, and states.

<button class="btn btn-primary">Button</button>

```html 
<button class="btn btn-primary">Button</button>
```

This is the default button where the `btn` class provides the default sizing and the `btn-primary` class applies the primary variant color. 

## Color Variants

The button component supports eight standard color variants. Each variant applies a solid background color with appropriate text contrast.

<div class="flex flex-wrap gap-2 my-4">
    <!-- #region colorVariants -->
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-danger">Danger</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-light">Light</button>
    <button class="btn btn-dark">Dark</button>
    <!-- #endregion colorVariants -->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#colorVariants{html}
:::

## Custom Colors

You can use any Tailwind color with its shade value using the `btn-[color]-[shade]` syntax. This allows you to create buttons with specific colors from Tailwind's color palette.

<div class="flex flex-wrap gap-2 my-4">
    <!-- #region customColors -->
    <button class="btn btn-red-700">Red-700</button>
    <button class="btn btn-blue-700">Blue-700</button>
    <button class="btn btn-green-700 ">Green-700</button>
    <button class="btn btn-black">Black</button>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<<  @/packages/btn/docs/btn.md#customColors{html}
:::

## Color Shades

Demonstrates the full range of Tailwind color shades (50-900) available for buttons. Lighter shades (50-400) have darker text, while darker shades (500-900) have lighter text for optimal contrast. Syntax: `btn-[color]-[shade]`.

<div class="flex flex-col gap-1">
    <!-- #region colorShades -->
    <button class="btn btn-red-50">Red 50</button>
    <button class="btn btn-red-100">Red 100</button>
    <button class="btn btn-red-200">Red 200</button>
    <button class="btn btn-red-300">Red 300</button>
    <button class="btn btn-red-400">Red 400</button>
    <button class="btn btn-red-500">Red 500</button>
    <button class="btn btn-red-600">Red 600</button>
    <button class="btn btn-red-700">Red 700</button>
    <button class="btn btn-red-800">Red 800</button>
    <button class="btn btn-red-900">Red 900</button>
    <!-- #endregion colorShades -->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#colorShades{html}
:::

## Outline Buttons

Outline buttons feature transparent backgrounds with colored borders and text. They provide a lighter visual weight compared to solid buttons and are useful for secondary actions. Syntax: `btn-outline-[variant]` or `btn-outline-[custom color]`.

<div class="flex flex-wrap gap-2">
    <!-- #region outlineButtons -->
    <button class="btn btn-outline-primary">Primary</button>
    <button class="btn btn-outline-secondary">Secondary</button>
    <button class="btn btn-outline-success">Success</button>
    <button class="btn btn-outline-danger">Danger</button>
    <button class="btn btn-outline-warning">Warning</button>
    <button class="btn btn-outline-info">Info</button>
    <button class="btn btn-outline-light">Light</button>
    <button class="btn btn-outline-dark">Dark</button>
    <!-- #endregion outlineButtons -->     
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#outlineButtons{html}
:::

## Outline Color Shades

Outline buttons support the same color shade range as solid buttons using the format `btn-outline-[color]-[shade]`. This provides precise control over outline button appearance.

<div class="flex flex-col gap-2">
    <!-- #region outlineColorShades-->
    <button class="btn btn-outline-red-50 btn-block">Red 50</button>
    <button class="btn btn-outline-red-100 btn-block">Red 100</button>
    <button class="btn btn-outline-red-200 btn-block">Red 200</button>
    <button class="btn btn-outline-red-300 btn-block">Red 300</button>
    <button class="btn btn-outline-red-400 btn-block">Red 400</button>
    <button class="btn btn-outline-red-500 btn-block">Red 500</button>
    <button class="btn btn-outline-red-600 btn-block">Red 600</button>
    <button class="btn btn-outline-red-700 btn-block">Red 700</button>
    <button class="btn btn-outline-red-800 btn-block">Red 800</button>
    <button class="btn btn-outline-red-900 btn-block">Red 900</button>
    <!-- #endregion outlineColorShades -->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#outlineColorShades{html}
:::

## Block Buttons

Block buttons span the full width of their container using the `btn-block` class. These are ideal for mobile layouts or when you need prominent, full-width call-to-action buttons.

<div class="flex flex-col gap-2">
    <!-- #region blockButtons-->
    <button class="btn btn-primary btn-block">Primary</button>
    <button class="btn btn-secondary btn-block">Secondary</button>
    <button class="btn btn-success btn-block">Success</button>
    <button class="btn btn-danger btn-block">Danger</button>
    <button class="btn btn-warning btn-block">Warning</button>
    <button class="btn btn-info btn-block">Info</button>
    <button class="btn btn-light btn-block">Light</button>
    <button class="btn btn-dark btn-block">Dark</button>
    <!-- #endregion blockButtons-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#blockButtons{html}
:::

## Sizes

### Predetermined Sizes

Nine predefined size options (xs through 5xl) provide consistent button sizing across your application.

<div class="flex flex-wrap gap-2">
    <!-- #region btnPredeterminedSizes-->
    <button class="btn btn-primary btn-xs self-center">xs</button>
    <button class="btn btn-primary btn-sm self-center">sm</button>
    <button class="btn btn-primary btn-md self-center">md</button>
    <button class="btn btn-primary btn-lg self-center">lg</button>
    <button class="btn btn-primary btn-xl self-center">xl</button>
    <button class="btn btn-primary btn-2xl self-center">2xl</button>
    <button class="btn btn-primary btn-3xl self-center">3xl</button>
    <button class="btn btn-primary btn-4xl self-center">4xl</button>
    <button class="btn btn-primary btn-5xl self-center">5xl</button>
    <!-- #endregion btnPredeterminedSizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnPredeterminedSizes{html}
:::

### Tailwind Sizes

Use Tailwind's numeric sizing scale (`btn-3` through `btn-7`, etc.) for more granular control over button dimensions. This follows Tailwind's standard spacing scale.

<div class="flex flex-wrap gap-2">
    <!-- #region btnTailwindSizes-->
    <button class="btn btn-primary btn-3 self-center">btn-3</button>
    <button class="btn btn-primary btn-4 self-center">btn-4</button>
    <button class="btn btn-primary btn-5 self-center">btn-5</button>
    <button class="btn btn-primary btn-6 self-center">btn-6</button>
    <button class="btn btn-primary btn-7 self-center">btn-7</button>
    <!-- #endregion btnTailwindSizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnTailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing needs, specify exact pixel values using the `btn-[Npx]` syntax. This is useful when you need buttons that match specific design requirements.

<div class="flex flex-wrap gap-2">
    <!-- #region btnArbitrarySizes-->
    <button class="btn btn-primary btn-[16px] self-center">16px</button>
    <button class="btn btn-primary btn-[21px] self-center">21px</button>
    <!-- #endregion btnArbitrarySizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnArbitrarySizes{html}
:::

## Responsive Sizes

Combine display and size classes with responsive prefixes to create buttons that adapt to different screen sizes. This example shows a full-width small button on mobile that becomes inline and medium-sized on larger screens.

<!-- #region responsiveSizes-->
<button class="btn btn-primary btn-xs btn-block md:btn-inline md:btn-md">btn-xs md:btn-base</button>
<!-- #endregion responsiveSizes-->

::: details Show Code
<<< @/packages/btn/docs/btn.md#responsiveSizes{html}
:::

## Block Sizes

### Predetermined Sizes

All predefined sizes work with the `btn-block` class to create full-width buttons at any size.

<div class="flex flex-col gap-2">
    <!-- #region btnBlockPredeterminedSizes-->
    <button class="btn btn-primary btn-xs btn-block">xs</button>
    <button class="btn btn-primary btn-sm btn-block">sm</button>
    <button class="btn btn-primary btn-md btn-block">md</button>
    <button class="btn btn-primary btn-lg btn-block">lg</button>
    <button class="btn btn-primary btn-xl btn-block">xl</button>
    <button class="btn btn-primary btn-2xl btn-block">2xl</button>
    <button class="btn btn-primary btn-3xl btn-block">3xl</button>
    <button class="btn btn-primary btn-4xl btn-block">4xl</button>
    <!-- #endregion btnBlockPredeterminedSizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnBlockPredeterminedSizes{html}
:::

### Tailwind Sizes

Tailwind numeric sizes can also be combined with `btn-block` for full-width buttons with specific dimensions.

<div class="flex flex-col gap-2">
    <!-- #region btnBlockTailwindSizes-->
    <button class="btn btn-primary btn-3 btn-block">btn-block-3</button>
    <button class="btn btn-primary btn-4 btn-block">btn-block-4</button>
    <button class="btn btn-primary btn-5 btn-block">btn-block-5</button>
    <button class="btn btn-primary btn-6 btn-block">btn-block-6</button>
    <button class="btn btn-primary btn-7  btn-block">btn-block-7</button>
    <!-- #endregion btnBlockTailwindSizes-->
</div>

::: details Show Code
<<<  @/packages/btn/docs/btn.md#btnBlockTailwindSizes{html}
:::

### Arbitrary sizes

Arbitrary pixel sizes work with `btn-block` as well, giving you complete control over full-width button dimensions.

<div class="flex flex-col gap-2">
    <!-- #region btnBlockArbitrarySizes-->
    <button class="btn btn-primary btn-[16px] btn-block">16px</button>
    <button class="btn btn-primary btn-[21px] btn-block">21px</button>
    <!-- #endregion btnBlockArbitrarySizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnBlockArbitrarySizes{html}
:::

## Button States

Buttons support two states: `active` for pressed/selected states and `disabled` for non-interactive buttons. The active state typically shows a darker background, while disabled buttons appear faded and don't respond to user inputs.

<div class="flex gap-2">
    <!-- #region btnStates-->
    <button class="btn btn-primary" active>Active</button>
    <button class="btn btn-primary" disabled>Disabled</button>
    <!-- #endregion btnStates-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnStates{html}
:::

## Button Types

Standard HTML button types (submit and button) work with the button component. Use `type="submit"` for form submissions and `type="button"` for general interactions.

<div class="flex gap-2">
    <!-- #region btnTypes-->
    <button type="submit" class="btn btn-primary">Submit</button>
    <button type="button" class="btn btn-primary">Button</button>
    <!-- #endregion btnTypes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn.md#btnTypes{html}
:::