---
title: Form Switch
---

<script setup>
import '../demo.css'
</script>

# Form Switch

The `form-switch` utility class is a flexible and customizable Tailwind CSS utility to style light switch fields.

## Basic Usage

<div class="flex flex-col gap-2">
<!-- #region basicUsage -->
    <label class="flex gap-2 items-center">
        <input type="checkbox" class="form-switch">
        Default
    </label>
    <label class="flex gap-2 items-center">
        <input type="checkbox" class="form-switch" disabled>
        Disabled
    </label>
    <label class="flex gap-2 items-center">
        <input type="checkbox" class="form-switch" disabled checked>
        Disabled (Checked)
    </label>
    <label class="flex gap-2 items-center">
        <input type="checkbox" class="form-switch" readonly onclick="return false;">
        Readonly
    </label>
    <label class="flex gap-2 items-center">
        <input type="checkbox" class="form-switch" checked readonly onclick="return false;">
        Readonly (Checked)
    </label>
<!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< ./form-switch.md#basicUsage{html}
:::

## Sizes

Customize the size of the switch input using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-switch-[size]`.

<div class="flex flex-col gap-2">
<!-- #region predeterminedSizes -->
    <input type="checkbox" class="form-switch form-switch-xs">
    <input type="checkbox" class="form-switch form-switch-sm">
    <input type="checkbox" class="form-switch form-switch-md">
    <input type="checkbox" class="form-switch form-switch-lg">
    <input type="checkbox" class="form-switch form-switch-xl">
    <input type="checkbox" class="form-switch form-switch-2xl">
    <input type="checkbox" class="form-switch form-switch-3xl">
    <input type="checkbox" class="form-switch form-switch-4xl">
    <input type="checkbox" class="form-switch form-switch-5xl">
<!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./form-switch.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over switch sizes, use Tailwind's numeric sizing scale classes: `form-switch-1` - `form-switch-96`. 

<div class="flex flex-col gap-2">
<!-- #region TWSizes -->
    <input type="checkbox" class="form-switch form-switch-4">
    <input type="checkbox" class="form-switch form-switch-5">
    <input type="checkbox" class="form-switch form-switch-6">
<!-- #endregion TWSizes -->
</div>

::: details Show Code
<<< ./form-switch.md#TWSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-switch-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
<!-- #region arbitrarySizes -->
    <input type="checkbox" class="form-switch form-switch-[16px]">
    <input type="checkbox" class="form-switch form-switch-[1.5rem]">
<!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./form-switch.md#arbitrarySizes{html}
:::

## Validation

Validation classes provides error-checking styling for the form-switch element. The `invalid` and `valid` attributes provide the styling for invalid and valid elements, respectively. 

<div class="flex flex-col gap-4">
    <!-- #region validation -->
    <div>
        <div>
            <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-switch" invalid> Invalid</label>
            <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-switch" checked invalid> Invalid</label>
            <div class="invalid-feedback">This is an inline error.</div>
        </div>
        <div class="invalid-feedback">This is an inline error.</div>
        <div>
            <div class="invalid-feedback">This is an inline error.</div>
        </div>
    </div>
    <div>
        <div>
            <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-switch" valid> Valid</label>
            <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-switch" checked valid> Valid</label>
            <div class="valid-feedback">This is an inline sucess message.</div>
        </div>
        <div class="valid-feedback">This is an inline sucess message.</div>
        <div>
            <div class="valid-feedback">This is an inline success message.</div>
        </div>
    </div>
    <!-- #endregion validation -->
</div>

::: details Show Code
<<< ./form-switch.md#validation{html}
:::

## Custom Colors

Customize the color of a form-switch element with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `form-switch-[color]`.

<div class="flex flex-col gap-2">
    <!-- #region customColors -->
    <input type="checkbox" class="form-switch form-switch-amber-500">
    <input type="checkbox" class="form-switch form-switch-purple-500">
    <input type="checkbox" class="form-switch form-switch-green-500">
    <input type="checkbox" class="form-switch form-switch-neutral-500">
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./form-switch.md#customColors{html}
:::