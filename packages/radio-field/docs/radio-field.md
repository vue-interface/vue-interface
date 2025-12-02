---
title: Input Field
---

<script setup>
import '../demo.css'
import { ref, onMounted } from 'vue'
import RadioField from '../src/RadioField.vue';

const value = ref(false)
const color = ref("yellow")
</script>

# Radio Field

The `radio-field` component provides flexible and customizable input fields with customizable sizes, states, and colors.

## Basic Usage

<div class="bg-neutral-100 dark:bg-neutral-800 p-3 mb-4">
    Value: {{ value }}
</div>

<!-- #region basicUsage -->
<radio-field v-model="value" name="default" label="Unchecked" value="unchecked"></radio-field>
<radio-field v-model="value" name="default" label="Checked" value="checked" checked></radio-field>
<!-- #endregion basicUsage -->

<<< @/packages/radio-field/docs/radio-field.md#basicUsage{html}

## Custom Colors

Customize the color of a radio button using a Tailwind color using the class: `form-check-[color]`.

<div class="bg-neutral-100 dark:bg-neutral-800 p-3 my-4">
    Color: {{ color }}
</div>

<div class="mb-4">
    <!-- #region customColors -->
    <radio-field v-model="color" name="color" label="Red" value="form-check-red-500" color="form-check-red-500"></radio-field>
    <radio-field v-model="color" name="color" label="Green" value="form-check-green-500" color="form-check-green-500"></radio-field>
    <radio-field v-model="color" name="color" label="Blue" value="form-check-blue-500" color="form-check-blue-500"></radio-field>
    <radio-field v-model="color" name="color" label="Yellow" value="form-check-yellow-500" color="form-check-yellow-500"></radio-field>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< @/packages/radio-field/docs/radio-field.md#customColors{html}
:::

## States

<div class="mb-4">
    <!-- #region states -->
    <radio-field label="Unchecked" value="Unchecked"></radio-field>
    <radio-field label="Checked" value="checked" checked></radio-field>
    <radio-field label="Disabled" value="disabled" disabled></radio-field>
    <radio-field label="Disabled (checked)" value="disabled_checked" checked disabled></radio-field>
    <radio-field label="Readonly" value="readonly" readonly></radio-field>
    <radio-field label="Readonly (checked)" value="readonly_checked" checked readonly></radio-field>
    <radio-field label="Readonly & Disabled" value="readonly_disabled" readonly disabled></radio-field>
    <radio-field label="Readonly & Disabled (checked)" value="readonly_disabled_checked" readonly disabled checked></radio-field>
    <!-- #endregion states -->
</div>

::: details Show Code
<<< @/packages/radio-field/docs/radio-field.md#states{html}
:::

## Sizes

Customize the radio button's size using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-check-[size]`.

<!-- #region predeterminedSizes -->
<radio-field name="size" value="xs" class="form-check-xs">xs</radio-field>
<radio-field name="size" value="sm" class="form-check-sm">Small</radio-field>
<radio-field name="size" value="md" class="form-check-md">Medium</radio-field>
<radio-field name="size" value="lg" class="form-check-lg">Large</radio-field>
<radio-field name="size" value="xl" class="form-check-xl">xl</radio-field>
<radio-field name="size" value="2xl" class="form-check-2xl">2xl</radio-field>
<radio-field name="size" value="3xl" class="form-check-3xl">3xl</radio-field>
<radio-field name="size" value="4xl" class="form-check-4xl">4xl</radio-field>
<radio-field name="size" value="5xl" class="form-check-5xl">5xl</radio-field>
<!-- #endregion predeterminedSizes -->

::: details Show Code
<<< @/packages/radio-field/docs/radio-field.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-check-1` - `form-check-96`. 

<!-- #region tailwindSizes -->
<radio-field name="size" value="4" class="form-check-4">form-check-4</radio-field>
<radio-field name="size" value="5" class="form-check-5">form-check-5</radio-field>
<radio-field name="size" value="6" class="form-check-6">form-check-6</radio-field>
<radio-field name="size" value="7" class="form-check-7">form-check-7</radio-field>
<!-- #endregion tailwindSizes -->

::: details Show Code
<<< @/packages/radio-field/docs/radio-field.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-check-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<!-- #region arbitrarySizes -->
<radio-field name="size" value="[16px]" class="form-check-[16px]">form-check-[16px]</radio-field>
<radio-field name="size" value="[1.5rem]" class="form-check-[1.5rem]">form-check-[1.5rem]</radio-field>
<!-- #endregion arbitrarySizes -->

::: details Show Code
<<< @/packages/radio-field/docs/radio-field.md#arbitrarySizes{html}
:::

## Validation

<!-- #region validation -->
<radio-field label="Empty Array of Errors" value="true" :errors="[]" class="mb-3"></radio-field>
<radio-field label="Single Inline Error" value="true" class="mb-3 invalid-feedback" error="This is an inline error."></radio-field>
<radio-field name="multiple" value="true" class="mb-3 invalid-feedback" label="Multiple Errors From Object" :errors="{'multiple': ['This is an inline error #1.', 'This is an inline error #2.']}"></radio-field>
    
<radio-field label="Valid Field" value="true" valid class="mb-3 valid-feedback"></radio-field>
<radio-field label="Valid Field with Feedback" value="true" valid feedback="This is some success message." class="mb-3 valid-feedback"></radio-field>
<radio-field label="Valid Field with Array of Feedback" value="true" valid :feedback="['This is some success message.', 'This is some success message.']" class="mb-3 valid-feedback"></radio-field>
<!-- #endregion validation -->

::: details Show Code
<<< @/packages/radio-field/docs/radio-field.md#validation{html}
:::