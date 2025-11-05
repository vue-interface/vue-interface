---
title: Button Group
---

<script type="module">
import '../index.css'
</script>

# Button Group

The `btn-group` utility class provides a flexible and customizable button-group component based on the [button](/packages/btn/docs/btn) component. 

::: tip 
Button groups can be combined with [dropdown menus](/packages/dropdown-menu/docs/dropdown-menu) to create [dropdown buttons](/packages/btn-dropdown/docs/btn-dropdown).
:::

## Basic Usage

<!-- #region basicUsage-->
<div class="btn-group">
    <button class="btn btn-secondary">Left</button>
    <button class="btn btn-secondary">Middle</button>
    <button class="btn btn-secondary">Right</button>
</div>
<!-- #endregion basicUsage-->

<<< @/packages/btn/docs/btn-group.md#basicUsage{html}

## Split Buttons

<!-- #region splitButtons-->
<div role="group" class="btn-dropdown-split btn-dropdown btn-group">
    <button class="btn btn-secondary">Click Me</button>
    <div role="group" class="btn-group">
        <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
    </div>
</div>
<!-- #endregion splitButtons-->

<<< @/packages/btn/docs/btn-group.md#splitButtons{html}

## Sizing

`btn-group` supports predefined sizes `btn-group-xs` - `btn-group-5xl` to match your design needs.

<div class="flex flex-col gap-2">
    <!-- #region sizing-->
    <div class="btn-group btn-group-xs">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-sm">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-md">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-lg">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-xl">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-2xl">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-3xl">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-4xl">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <div class="btn-group btn-group-5xl">
        <button class="btn btn-secondary">Left</button>
        <button class="btn btn-secondary">Middle</button>
        <button class="btn btn-secondary">Right</button>
    </div>
    <!-- #endregion sizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#sizing{html}
:::

### Tailwind Sizes

Use Tailwind's numeric sizing scale for more granular control over button group sizes. Tailwind’s default spacing scale has a range of `0 - 96`.

<div class="flex flex-col gap-2">
    <!-- #region tailwindSizes-->
    <div class="btn-group btn-group-3">
        <button class="btn btn-secondary">btn-group-3</button>
        <button class="btn btn-secondary">btn-group-3</button>
        <button class="btn btn-secondary">btn-group-3</button>
    </div>
    <div class="btn-group btn-group-4">
        <button class="btn btn-secondary">btn-group-4</button>
        <button class="btn btn-secondary">btn-group-4</button>
        <button class="btn btn-secondary">btn-group-4</button>
    </div>
    <div class="btn-group btn-group-5">
        <button class="btn btn-secondary">btn-group-5</button>
        <button class="btn btn-secondary">btn-group-5</button>
        <button class="btn btn-secondary">btn-group-5</button>
    </div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing needs, specify exact pixel values using the `btn-group-[Npx]` syntax.

<div class="flex flex-col gap-2">
    <!-- #region arbitrarySizes-->
    <div class="btn-group btn-group-[16px]">
        <button class="btn btn-secondary">btn-group-[16px]</button>
        <button class="btn btn-secondary">btn-group-[16px]</button>
        <button class="btn btn-secondary">btn-group-[16px]</button>
    </div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#arbitrarySizes{html}
:::

## Orientation

Button groups support four dropdown orientations for flexible positioning.

<div class="flex gap-2">
    <!-- #region orientation-->
    <div role="group" class="btn-dropdown btn-group dropdown">
        <button class="btn btn-secondary dropdown-toggle">Dropdown</button>
    </div>
    <div role="group" class="btn-dropdown btn-group dropup">
        <button class="btn btn-secondary dropdown-toggle">Dropup</button>
    </div>
    <div role="group" class="btn-dropdown btn-group dropleft">
        <button class="btn btn-secondary dropdown-toggle">Dropleft</button>
    </div>
    <div role="group" class="btn-dropdown btn-group dropright">
        <button class="btn btn-secondary dropdown-toggle">Dropright</button>
    </div>
    <!-- #endregion orientation-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#orientation{html}
:::

## Split Orientation

Split button dropdowns with orientation support.

<div class="flex gap-2">
    <!-- #region splitOrientation-->
    <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropdown">
        <button class="btn btn-secondary">Dropdown</button>
        <div role="group" class="btn-group">
            <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
        </div>
    </div>
    <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropup">
        <button class="btn btn-secondary">Dropup</button>
        <div role="group" class="btn-group">
            <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
        </div>
    </div>
    <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropleft">
        <div role="group" class="btn-group">
            <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
        </div>
        <button class="btn btn-secondary">Dropleft</button>
    </div>
    <div role="group" class="btn-dropdown-split btn-dropdown btn-group dropright">
        <button class="btn btn-secondary">Dropright</button>
        <div role="group" class="btn-group">
            <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
        </div>
    </div>
    <!-- #endregion splitOrientation-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#splitOrientation{html}
:::

## Regular Sizing

The size of regular dropdown buttons can be customized using the predetermined size classes `btn-group-xs` - `btn-group-5xl`.

<div class="flex flex-col gap-2">
    <!-- #region regularSizing-->
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-xs">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-sm">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-md">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-lg">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-xl">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-2xl">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-3xl">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-4xl">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-5xl">
            <button class="btn btn-secondary dropdown-toggle">Click Me</button>
        </div>
    </div>
    <!-- #endregion regularSizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#regularSizing{html}
:::

### Tailwind Sizes

Use Tailwind's numeric sizing scale for more granular control over button group sizes. Tailwind’s default spacing scale has a range of `0 - 96`.

<div class="flex flex-col gap-2">
    <!-- #region regTWSizing-->
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-3">
            <button class="btn btn-secondary dropdown-toggle">btn-group-3</button>
        </div>
    </div>
        <div>
        <div role="group" class="btn-dropdown btn-group btn-group-4">
            <button class="btn btn-secondary dropdown-toggle">btn-group-4</button>
        </div>
    </div>
        <div>
        <div role="group" class="btn-dropdown btn-group btn-group-5">
            <button class="btn btn-secondary dropdown-toggle">btn-group-5</button>
        </div>
    </div>
    <!-- #endregion regTWSizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#regTWSizing{html}
:::

### Arbitrary Sizes

For precise sizing needs, specify exact pixel values using the `btn-group-[Npx]` syntax or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region regArbSizing-->
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-[16px]">
            <button class="btn btn-secondary dropdown-toggle">btn-group-[16px]</button>
        </div>
    </div>
        <div>
        <div role="group" class="btn-dropdown btn-group btn-group-[21px]">
            <button class="btn btn-secondary dropdown-toggle">btn-group-[21px]</button>
        </div>
    </div>
    <!-- #endregion regArbSizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#regArbSizing{html}
:::

## Split Sizing

The size of split dropdown buttons can be customized using the predetermined size classes `btn-group-xs` - `btn-group-5xl`. Split buttons can also be customized using Tailwind's numeric sizing scale or by pixel size for precise sizing needs. 

<div class="flex flex-col gap-2">
    <!-- #region splitSizing-->
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-xs">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-sm">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-md">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-lg">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-xl">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-2xl">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-3xl">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-4xl">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-5xl">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <!-- #endregion splitSizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#splitSizing{html}
:::

### Split Tailwind Sizes

Use Tailwind's numeric sizing scale for more granular control over button group sizes. Tailwind’s default spacing scale has a range of `0 - 96`.

<div class="flex flex-col gap-2">
    <!-- #region splitTWSizing-->
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-4">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-5">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <div>
        <div role="group" class="btn-dropdown-split btn-dropdown btn-group btn-group-6">
            <button class="btn btn-secondary">Click Me</button>
            <div role="group" class="btn-group">
                <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
            </div>
        </div>
    </div>
    <!-- #endregion splitTWSizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#splitTWSizing{html}
:::

### Split Arbitrary Sizes

For precise sizing needs, specify exact pixel values using the `btn-group-[Npx]` syntax or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region splitArbSizing-->
    <div>
        <div role="group" class="btn-dropdown btn-group btn-group-[16px]">
            <button class="btn btn-secondary dropdown-toggle">btn-group-[16px]</button>
        </div>
    </div>
        <div>
        <div role="group" class="btn-dropdown btn-group btn-group-[1.2rem]">
            <button class="btn btn-secondary dropdown-toggle">btn-group-[1.2rem]</button>
        </div>
    </div>
    <!-- #endregion splitArbSizing-->
</div>

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#splitArbSizing{html}
:::

## Vertical Variation

Create vertical button groups using the `btn-group-vertical` class.

<!-- #region verticalVariation-->
<div class="btn-group btn-group-vertical">
    <button class="btn btn-secondary">Top</button>
    <button class="btn btn-secondary">Middle</button>
    <button class="btn btn-secondary">Bottom</button>
    <div role="group" class="btn-dropdown-split btn-dropdown btn-group">
        <button class="btn btn-secondary">Click Me</button>
        <div role="group" class="btn-group">
            <button type="button" aria-haspopup="true" class="btn btn-secondary dropdown-toggle-split dropdown-toggle"></button>
        </div>
    </div>
</div>
<!-- #endregion verticalVariation-->

::: details Show Code
<<< @/packages/btn/docs/btn-group.md#verticalVariation{html}
:::