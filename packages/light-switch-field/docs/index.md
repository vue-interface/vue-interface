---
title: Light Switch Field
---

<script setup>
import '../index.css'
import { ref } from 'vue'
import LightSwitchField from '../src/LightSwitchField.vue'

const value = ref(true)
const value2 = ref('true')
const value3 = ref('1')
</script>

# Light Switch Field

The `light-switch-field` component provides flexible and customizable input fields with customizable sizes, states, and colors.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/light-switch-field
```

```bash [yarn]
yarn add @vue-interface/light-switch-field
```

```bash [npm]
npm i @vue-interface/light-switch-field
```
:::

## Variations and States

<!-- #region variations -->
<light-switch-field v-model="value" :on-value="true" :off-value="false" label="Default" id="default" name="default"></light-switch-field>
<light-switch-field label="Off"></light-switch-field>
<light-switch-field checked label="On"></light-switch-field>
<light-switch-field disabled label="Disabled"></light-switch-field>
<light-switch-field disabled checked label="Disabled (Checked)"></light-switch-field>
<light-switch-field disabled readonly label="Disabled (Readonly)"></light-switch-field>
<light-switch-field disabled checked readonly label="Disabled (Checked & Readonly)"></light-switch-field>
<light-switch-field readonly label="Readonly"></light-switch-field>
<light-switch-field readonly checked label="Readonly (Checked)"></light-switch-field>
<!-- #endregion variations -->

::: details Show Code
<<< ./index.md#variations{html}
:::

## Alternative On/Off Values

<!-- #region altValues -->
<light-switch-field
    v-model="value2"
    label="Using True/False String"
    on-value="true"
    off-value="false"
    :help-text="`Current Value: ${value2}`">
</light-switch-field>

<light-switch-field
    v-model="value3"
    label="Using Numerical String"
    on-value="1"
    off-value="0"
    class="mb-3"
    :help-text="`Current Value: ${value3}`">
</light-switch-field>
<!-- #endregion altValues -->

::: details Show Code
<<< ./index.md#altValues{html}
:::

## Sizes

Customize the size of a `light-switch-field` component using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermind Sizes

The size can be customized using predetermined `size prop` values: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-switch-[size]`.

<div class="flex flex-col gap-2">
    <!-- #region predeterminedSizes -->
    <light-switch-field label="xs" size="form-switch-xs"></light-switch-field>
    <light-switch-field label="sm" size="form-switch-sm"></light-switch-field>
    <light-switch-field label="md" size="form-switch-md"></light-switch-field>
    <light-switch-field label="lg" size="form-switch-lg"></light-switch-field>
    <light-switch-field label="xl" size="form-switch-xl"></light-switch-field>
    <light-switch-field label="2xl" size="form-switch-2xl"></light-switch-field>
    <light-switch-field label="3xl" size="form-switch-3xl"></light-switch-field>
    <light-switch-field label="4xl" size="form-switch-4xl"></light-switch-field>
    <light-switch-field label="5xl" size="form-switch-5xl"></light-switch-field>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-switch-1` - `form-switch-96`.

<div class="flex flex-col gap-2">
    <!-- #region tailwindSizes -->
    <light-switch-field label="form-switch-4" size="form-switch-4"></light-switch-field>
    <light-switch-field label="form-switch-5" size="form-switch-5"></light-switch-field>
    <light-switch-field label="form-switch-6" size="form-switch-6"></light-switch-field>
    <light-switch-field label="form-switch-7" size="form-switch-7"></light-switch-field>
    <!-- #endregion tailwindSizes -->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-switch-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-2">
    <!-- #region arbitrarySizes -->
    <light-switch-field label="form-switch-[16px]" size="form-switch-[16px]"></light-switch-field>
    <light-switch-field label="form-switch-[1.5rem]" size="form-switch-[1.5rem]"></light-switch-field>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Custom Colors

Customize the color of a `light-switch-field` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `form-switch-[color]`.

<!-- #region customColors -->
<light-switch-field label="form-switch-amber-500" color="form-switch-amber-500"></light-switch-field>
<light-switch-field label="form-switch-purple-500" color="form-switch-purple-500"></light-switch-field>
<light-switch-field label="form-switch-green-500" color="form-switch-green-500"></light-switch-field>
<light-switch-field label="form-switch-neutral-500" color="form-switch-neutral-500"></light-switch-field>
<!-- #endregion customColors -->

::: details Show Code
<<< ./index.md#customColors{html}
:::

## Validation

Validation classes provides error-checking styling for the `light-switch-field` component. The `invalid-feedback` and `valid-feedback` classes provide the styling for invalid and valid elements, respectively. 

<!-- #region validation -->
<light-switch-field label="Empty Array of Errors" :errors="[]" class="mb-3"></light-switch-field>
<light-switch-field label="Single Inline Error" error="This is an inline error." class="mb-3 invalid-feedback"></light-switch-field>
<light-switch-field label="Array of Errors" :errors="['First Error', 'Second Error']" class="mb-3 invalid-feedback"></light-switch-field>
<light-switch-field name="test" label="Multiple Errors From Object" :errors="{'test': ['This is an inline error #1.', 'This is an inline error #2.']}" class="mb-3 invalid-feedback"></light-switch-field>

<light-switch-field label="Valid Field" valid class="mb-3 valid-feedback"></light-switch-field>
<light-switch-field label="Valid Field with Feedback" valid feedback="This is some success message." class="mb-3 valid-feedback"></light-switch-field>
<light-switch-field label="Valid Field with Array of Feedback" valid :feedback="['This is some success message.', 'This is some success message.']" class="mb-3 valid-feedback"></light-switch-field>
<!-- #endregion validatin -->

::: details Show Code
<<< ./index.md#validation{html}
:::