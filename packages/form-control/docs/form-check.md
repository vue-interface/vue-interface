---
title: Form Check
---

<script setup>
import '../demo.css'
</script>

# Form Check

The `form-check` utility class is a [form component](./forms) that provides flexible and customizable checkbox and radio button inputs with customizable sizes, states, and colors.

## Basic Usage

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <div>
        <label class="flex gap-2"><input type="checkbox" class="form-check"> Unchecked</label>
        <label class="flex gap-2"><input type="checkbox" class="form-check" checked> Checked</label>
        <label class="flex gap-2"><input type="checkbox" class="form-check" disabled> Unchecked (Disabled)</label>
        <label class="flex gap-2"><input type="checkbox" class="form-check" checked disabled> Checked (Disabled)</label>
    </div>
    <div>
        <label class="flex gap-2"><input type="radio" name="radio" class="form-check"> Unchecked</label>
        <label class="flex gap-2"><input type="radio" name="radio" class="form-check" checked> Checked</label>
        <label class="flex gap-2"><input type="radio" name="radio2" class="form-check" disabled> Unchecked (Disabled)</label>
        <label class="flex gap-2"><input type="radio" name="radio2" class="form-check" checked disabled> Checked (Disabled)</label>
    </div>
    <!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-check.md#basicUsage{html}
:::

## Sizes

Customize the size of checkbox and radio inputs using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-check-[size]`.

<div class="flex flex-col gap-4">
    <!-- #region predeterminedSizes -->
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-xs">
        <input type="checkbox" class="form-check form-check-xs" checked>
        <input type="checkbox" class="form-check form-check-xs" invalid>
        <input type="checkbox" class="form-check form-check-xs" invalid checked>
        <input type="checkbox" class="form-check form-check-xs" valid>
        <input type="checkbox" class="form-check form-check-xs" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-sm">
        <input type="checkbox" class="form-check form-check-sm" checked>
        <input type="checkbox" class="form-check form-check-sm" invalid>
        <input type="checkbox" class="form-check form-check-sm" invalid checked>
        <input type="checkbox" class="form-check form-check-sm" valid>
        <input type="checkbox" class="form-check form-check-sm" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-md">
        <input type="checkbox" class="form-check form-check-md" checked>
        <input type="checkbox" class="form-check form-check-md" invalid>
        <input type="checkbox" class="form-check form-check-md" invalid checked>
        <input type="checkbox" class="form-check form-check-md" valid>
        <input type="checkbox" class="form-check form-check-md" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-lg">
        <input type="checkbox" class="form-check form-check-lg" checked>
        <input type="checkbox" class="form-check form-check-lg" invalid>
        <input type="checkbox" class="form-check form-check-lg" invalid checked>
        <input type="checkbox" class="form-check form-check-lg" valid>
        <input type="checkbox" class="form-check form-check-lg" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-xl">
        <input type="checkbox" class="form-check form-check-xl" checked>
        <input type="checkbox" class="form-check form-check-xl" invalid>
        <input type="checkbox" class="form-check form-check-xl" invalid checked>
        <input type="checkbox" class="form-check form-check-xl" valid>
        <input type="checkbox" class="form-check form-check-xl" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-2xl">
        <input type="checkbox" class="form-check form-check-2xl" checked>
        <input type="checkbox" class="form-check form-check-2xl" invalid>
        <input type="checkbox" class="form-check form-check-2xl" invalid checked>
        <input type="checkbox" class="form-check form-check-2xl" valid>
        <input type="checkbox" class="form-check form-check-2xl" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-3xl">
        <input type="checkbox" class="form-check form-check-3xl" checked>
        <input type="checkbox" class="form-check form-check-3xl" invalid>
        <input type="checkbox" class="form-check form-check-3xl" invalid checked>
        <input type="checkbox" class="form-check form-check-3xl" valid>
        <input type="checkbox" class="form-check form-check-3xl" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-4xl">
        <input type="checkbox" class="form-check form-check-4xl" checked>
        <input type="checkbox" class="form-check form-check-4xl" invalid>
        <input type="checkbox" class="form-check form-check-4xl" invalid checked>
        <input type="checkbox" class="form-check form-check-4xl" valid>
        <input type="checkbox" class="form-check form-check-4xl" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-5xl">
        <input type="checkbox" class="form-check form-check-5xl" checked>
        <input type="checkbox" class="form-check form-check-5xl" invalid>
        <input type="checkbox" class="form-check form-check-5xl" invalid checked>
        <input type="checkbox" class="form-check form-check-5xl" valid>
        <input type="checkbox" class="form-check form-check-5xl" valid checked>
    </div>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-check.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over checkbox and radio sizes, use Tailwind's numeric sizing scale classes: `form-check-1` - `form-check-96`. 

<div class="flex flex-col gap-4">
    <!-- #region TWSizes -->
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-4">
        <input type="checkbox" class="form-check form-check-4" checked>
        <input type="checkbox" class="form-check form-check-4" invalid>
        <input type="checkbox" class="form-check form-check-4" invalid checked>
        <input type="checkbox" class="form-check form-check-4" valid>
        <input type="checkbox" class="form-check form-check-4" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-5">
        <input type="checkbox" class="form-check form-check-5" checked>
        <input type="checkbox" class="form-check form-check-5" invalid>
        <input type="checkbox" class="form-check form-check-5" invalid checked>
        <input type="checkbox" class="form-check form-check-5" valid>
        <input type="checkbox" class="form-check form-check-5" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-6">
        <input type="checkbox" class="form-check form-check-6" checked>
        <input type="checkbox" class="form-check form-check-6" invalid>
        <input type="checkbox" class="form-check form-check-6" invalid checked>
        <input type="checkbox" class="form-check form-check-6" valid>
        <input type="checkbox" class="form-check form-check-6" valid checked>
    </div>
    <!-- #endregion TWSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-check.md#TWSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-check-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-4">
    <!-- #region arbitrarySizes -->
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-[16px]">
        <input type="checkbox" class="form-check form-check-[16px]" checked>
        <input type="checkbox" class="form-check form-check-[16px]" invalid>
        <input type="checkbox" class="form-check form-check-[16px]" invalid checked>
        <input type="checkbox" class="form-check form-check-[16px]" valid>
        <input type="checkbox" class="form-check form-check-[16px]" valid checked>
    </div>
    <div class="flex gap-1">
        <input type="checkbox" class="form-check form-check-[1.5rem]">
        <input type="checkbox" class="form-check form-check-[1.5rem]" checked>
        <input type="checkbox" class="form-check form-check-[1.5rem]" invalid>
        <input type="checkbox" class="form-check form-check-[1.5rem]" invalid checked>
        <input type="checkbox" class="form-check form-check-[1.5rem]" valid>
        <input type="checkbox" class="form-check form-check-[1.5rem]" valid checked>
    </div>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-check.md#arbitrarySizes{html}
:::

## Validation

Validation classes provides error-checking styling for the form-check element. The `invalid` and `valid` attributes provide the styling for invalid and valid elements, respectively. 

<div class="flex flex-col gap-4">
    <!-- #region validation -->
    <div>
        <div>
            <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-check" invalid> Invalid</label>
            <label class="flex gap-2 invalid-feedback"><input type="checkbox" class="form-check" checked invalid> Invalid</label>
            <label class="flex gap-2 invalid-feedback"><input type="radio" name="radio7" class="form-check" invalid> Invalid</label>
            <label class="flex gap-2 invalid-feedback"><input type="radio" name="radio7" class="form-check" checked invalid> Invalid</label>
            <div class="invalid-feedback">This is an inline error.</div>
        </div>
        <div class="invalid-feedback">This is an inline error.</div>
        <div>
            <div class="invalid-feedback">This is an inline error.</div>
        </div>
    </div>
    <div>
        <div>
            <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-check" valid> Valid</label>
            <label class="flex gap-2 valid-feedback"><input type="checkbox" class="form-check" checked valid> Valid</label>
            <label class="flex gap-2 valid-feedback"><input type="radio" name="radio8" class="form-check" valid> Valid</label>
            <label class="flex gap-2 valid-feedback"><input type="radio" name="radio8" class="form-check" checked valid> Valid</label>
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
<<< @/packages/form-control/docs/form-check.md#validation{html}
:::

## Custom Colors

Customize the color of a form-check element with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `form-check-[color]`.

<div class="flex gap-1">
    <!-- #region customColors -->
    <input type="checkbox" class="form-check form-check-amber-500">
    <input type="checkbox" class="form-check form-check-amber-500" checked>
    <input type="checkbox" class="form-check form-check-green-500">
    <input type="checkbox" class="form-check form-check-green-500" checked>
    <input type="checkbox" class="form-check form-check-purple-500">
    <input type="checkbox" class="form-check form-check-purple-500" checked>
    <input type="checkbox" class="form-check form-check-neutral-500">
    <input type="checkbox" class="form-check form-check-neutral-500" checked>
    <!-- #endregion customColors -->
</div>


::: details Show Code
<<< @/packages/form-control/docs/form-check.md#customColors{html}
:::