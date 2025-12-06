---
title: Checkbox Field
---

<script setup>
import '../demo.css';
import  CheckboxField  from '../src/CheckboxField.vue';
import { ref } from 'vue';

const value = ref(false);
const colors = ref(['red']);

function onChange(val) {
  console.log('onChange', val);
}

function onClick(e) {
  console.log('onClick', e);
}

function onFocus(e) {
  console.log('onFocus', e);
}

function onBlur(e) {
  console.log('onBlur', e);
}
</script>

# Checkbox Field

The `CheckboxField` component extends the [form-control](/packages/form-control/) component and provides a flexible checkbox input with support for custom colors, sizes, states, and validation.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/checkbox-field
```

```bash [yarn]
yarn add @vue-interface/checkbox-field
```

```bash [npm]
npm i @vue-interface/checkbox-field
```
:::

## Basic Usage

<div class="bg-neutral-100 dark:bg-neutral-800 p-3 mb-4">
    Value: {{ value }}
</div>

<div class="mb-4">
    <!-- #region basicUsage -->
    <checkbox-field
        v-model="value"
        label="Checked"
        value="1"
        @change="onChange"
        @click="onClick"
        @blur="onBlur"
        @focus="onFocus">
    </checkbox-field>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Custom Colors

Customize the color of a checkbox using a Tailwind color using the class: `form-check-[color]`.

<div class="bg-neutral-100 dark:bg-neutral-800 p-3 mb-3">
    Colors: {{ colors }}
</div>

<div class="mb-4">
    <!-- #region customColors -->
    <checkbox-field 
        v-model="colors" 
        label="Red" 
        value="red" 
        color="form-check-red-500" 
        checked>
    </checkbox-field>
    <checkbox-field 
        v-model="colors" 
        label="Green" 
        value="green" 
        color="form-check-green-500">
    </checkbox-field>
    <checkbox-field 
        v-model="colors" 
        label="Blue" 
        value="blue" 
        color="form-check-blue-500">
    </checkbox-field>
    <checkbox-field 
        v-model="colors" 
        label="Yellow" 
        value="yellow" 
        color="form-check-yellow-500">
    </checkbox-field>
    <checkbox-field 
        v-model="colors" 
        label="Purple" 
        value="purple" 
        color="form-check-purple-500">
        Purple
    </checkbox-field>
    <checkbox-field 
        v-model="colors" 
        label="Pink" 
        value="pink" 
        color="form-check-pink-500">
        Pink
    </checkbox-field>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::

## States

<div class="mb-4">
    <!-- #region states -->
    <checkbox-field label="Disabled" disabled></checkbox-field>
    <checkbox-field label="Disabled (checked)" checked disabled></checkbox-field>
    <checkbox-field label="Readonly" readonly></checkbox-field>
    <checkbox-field label="Readonly (checked)" checked readonly></checkbox-field>
    <checkbox-field label="Readonly & Disabled" readonly disabled></checkbox-field>
    <checkbox-field label="Readonly & Disabled (checked)" readonly disabled checked></checkbox-field>
    <!-- #endregion states -->
</div>

::: details Show Code
<<< ./index.md#states{html}
:::

## Sizes

Customize the checkbox's size using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-check-[size]`.

<!-- #region predeterminedSizes -->
<checkbox-field name="size[]" class="form-check-xs" placeholder="Extra Small">xs</checkbox-field>
<checkbox-field name="size[]" class="form-check-sm" placeholder="Small">Small</checkbox-field>
<checkbox-field name="size[]" class="form-check-md" placeholder="Medium">Medium</checkbox-field>
<checkbox-field name="size[]" class="form-check-lg" placeholder="Large">Large</checkbox-field>
<checkbox-field name="size[]" class="form-check-xl" placeholder="Extra Large">XL</checkbox-field>
<checkbox-field name="size[]" class="form-check-2xl" placeholder="2xl">2xl</checkbox-field>
<checkbox-field name="size[]" class="form-check-3xl" placeholder="3xl">3xl</checkbox-field>
<checkbox-field name="size[]" class="form-check-4xl" placeholder="4xl">4xl</checkbox-field>
<checkbox-field name="size[]" class="form-check-5xl" placeholder="5xl">5xl</checkbox-field>
<!-- #endregion predeterminedSizes -->

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over sizes, use Tailwind's numeric sizing scale classes: `form-check-1` - `form-check-96`. 

<!-- #region tailwindSizes -->
<checkbox-field name="size[]" class="form-check-4" placeholder="form-check-4">form-check-4</checkbox-field>
<checkbox-field name="size[]" class="form-check-5" placeholder="form-check-5">form-check-5</checkbox-field>
<checkbox-field name="size[]" class="form-check-6" placeholder="form-check-6">form-check-6</checkbox-field>
<!-- #endregion tailwindSizes -->

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-check-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<!-- #region arbitrarySizes -->
<checkbox-field name="size[]" class="form-check-[16px]" placeholder="form-check-[16px]">form-check-[16px]</checkbox-field>
<checkbox-field name="size[]" class="form-check-[1.5rem]" placeholder="form-check-[1.5rem]">form-check-[1.5rem]</checkbox-field>
<!-- #endregion arbitrarySizes -->

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Validation

<!-- #region validation -->
<checkbox-field 
    label="Empty Array of Errors" 
    :errors="[]" 
    class="mb-3">
</checkbox-field>

<checkbox-field 
    label="Single Inline Error" 
    class="mb-3 invalid-feedback" 
    error="This is an inline error.">
</checkbox-field>
<checkbox-field 
    name="multiple" 
    class="mb-3 invalid-feedback" 
    label="Multiple Errors From Object" 
    :errors="{'multiple': ['This is an inline error #1.', 'This is an inline error #2.']}">
</checkbox-field>
        
<checkbox-field 
    label="Valid Field" 
    valid 
    class="mb-3 valid-feedback">
</checkbox-field>
<checkbox-field 
    label="Valid Field with Feedback" 
    valid 
    feedback="This is some success message." 
    class="mb-3 valid-feedback">
</checkbox-field>            
<checkbox-field 
    label="Valid Field with Array of Feedback" 
    valid 
    :feedback="['This is some success message.', 'This is some success message.']" 
    class="mb-3 valid-feedback">
</checkbox-field>
<!-- #endregion validation -->

::: details Show Code
<<< ./index.md#validation{html}
:::