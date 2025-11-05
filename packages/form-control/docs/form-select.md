---
title: Form Select
---

<script setup>
import '../demo.css'
</script>

# Form Select

The `form-select` utility class is a [form component](./forms) that provides a flexible and customizable select dropdown with customizable sizes, states, and colors.

## Basic Usage

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <div>
        <label class="form-label">Select Field</label>
        <select class="form-select">
            <option>Option A</option>
            <option>Option B</option>
            <option>Option C</option>
        </select>
    </div>
    <div>
        <label class="form-label">Disabled</label>
        <select class="form-select" disabled>
            <option>Option A</option>
            <option selected>Option B</option>
            <option>Option C</option>
        </select>
    </div>
    <div>
        <label class="form-label">Readonly</label>
        <select class="form-select" readonly>
            <option disabled>Option A</option>
            <option disabled selected>Option B</option>
            <option disabled>Option C</option>
        </select>
    </div>
    <div>
        <label class="form-label">Readonly (Disabled)</label>
        <select class="form-select" readonly disabled>
            <option disabled>Option A</option>
            <option selected>Option B</option>
            <option disabled>Option C</option>
        </select>
    </div>
    <!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#basicUsage{html}
:::

## Plaintext

<div class="flex flex-col gap-4">
    <!-- #region plaintext -->
    <div>
        <label class="form-label">Plaintext</label>
        <select class="form-select form-select-plaintext">
            <option>Option A</option>
            <option selected>Option B</option>
            <option>Option C</option>
        </select>
    </div>
    <div>
        <label class="form-label">Plaintext (Readonly)</label>
        <select class="form-select form-select-plaintext" readonly>
            <option disabled>Option A</option>
            <option disabled selected>Option B</option>
            <option disabled>Option C</option>
        </select>
    </div>
    <div>
        <label class="form-label">Plaintext (Disabled & Readonly)</label>
        <select class="form-select form-select-plaintext" disabled readonly>
            <option disabled>Option A</option>
            <option disabled selected>Option B</option>
            <option disabled>Option C</option>
        </select>
    </div>
    <!-- #endregion plaintext -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#plaintext{html}
:::

## Sizes

Customize the size of the select dropdown using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-select-[size]`.

<div class="flex flex-col gap-4">
    <!-- #region predeterminedSizes -->
    <select class="form-select form-select-xs">
        <option selected>form-select-xs</option>
    </select>
    <select class="form-select form-select-sm">
        <option selected>form-select-sm</option>
    </select>
    <select class="form-select form-select-md">
        <option selected>form-select-md</option>
    </select>
    <select class="form-select form-select-lg">
        <option selected>form-select-lg</option>
    </select>
    <select class="form-select form-select-xl">
        <option selected>form-select-xl</option>
    </select>
    <select class="form-select form-select-2xl">
        <option selected>form-select-2xl</option>
    </select>
    <select class="form-select form-select-3xl">
        <option selected>form-select-3xl</option>
    </select>
    <select class="form-select form-select-4xl">
        <option selected>form-select-4xl</option>
    </select>
    <select class="form-select form-select-5xl">
        <option selected>form-select-5xl</option>
    </select>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over select sizes, use Tailwind's numeric sizing scale classes: `form-select-1` - `form-select-96`. 

<div class="flex flex-col gap-4">
    <!-- #region TWSizes -->
    <select class="form-select form-select-4">
        <option selected>form-select-4</option>
    </select>
    <select class="form-select form-select-5">
        <option selected>form-select-5</option>
    </select>
    <select class="form-select form-select-6">
        <option selected>form-select-6</option>
    </select>
    <!-- #endregion TWSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#TWSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-select-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-4">
    <!-- #region arbitrarySizes -->
    <select class="form-select form-select-[16px]">
        <option selected>form-select-[16px]</option>
    </select>
    <select class="form-select form-select-[1.5rem]">
        <option selected>form-select-[1.5rem]</option>
    </select>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#arbitrarySizes{html}
:::

## Validation

Validation classes provides error-checking styling for the form-select element. The `is-invalid` and `is-valid` classes provide the styling for invalid and valid elements, respectively. 

<div class="flex flex-col gap-4">
    <!-- #region validation -->
    <div>
        <label class="flex-shrink-0 invalid-feedback">Invalid Field</label>
        <div>
            <select class="form-select" invalid>
                <option>Option A</option>
                <option selected>Option B</option>
                <option>Option C</option>
            </select>
            <div class="invalid-feedback">This is an inline error.</div>
        </div>
        <div class="invalid-feedback">This is an inline error.</div>
        <div>
            <div class="invalid-feedback">This is an inline error.</div>
        </div>
    </div>
    <div>
        <label class="flex-shrink-0 valid-feedback">Valid Field</label>
        <div>
            <select class="form-select" valid>
                <option>Option A</option>
                <option selected>Option B</option>
                <option>Option C</option>
            </select>
            <div class="valid-feedback">This is an inline success message.</div>
        </div>
        <div class="valid-feedback">This is an inline success message.</div>
        <div>
            <div class="valid-feedback">This is an inline success message.</div>
        </div>
    </div>
    <!-- #endregion validation -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#validation{html}
:::

## Custom Colors

Customize the color of a form-select element with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `form-select-[color]`.

<div class="flex flex-col gap-4">
    <!-- #region customColors -->
    <select class="form-select form-select-amber-500">
        <option value=""></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
    <select class="form-select form-select-green-500">
        <option value=""></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
    <select class="form-select form-select-purple-500">
        <option value=""></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
    <select class="form-select form-select-neutral-500">
        <option value=""></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
    </select>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#customColors{html}
:::

## Animated

The `form-select` animated component combines the tailwind `form-control-animated` and `form-select-animated` classes to provide a custom animated component. Use the [size](#sizes) classes described above to customize the size.

<div class="flex flex-col gap-4">
    <!-- #region animated -->
    <div class="form-control-animated">
        <label for="form-select-animated" class="form-label">form-select</label>
        <select id="form-select-animated" class="form-select">
            <option value=""></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
    <div class="form-control-animated-lg">
        <label for="form-select-animated-lg" class="form-label">form-select-lg</label>
        <select id="form-select-animated-lg" class="form-select form-select-lg">
            <option value=""></option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
    </div>
    <!-- #endregion animated -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-select.md#animated{html}
:::