---
title: useFormControl
---

# useFormControl

The `useFormControl` composable provides the logic and state management for building custom form control components that integrate with the Vue Interface form system.

## Usage

```typescript
import { useFormControl } from '@vue-interface/form-control';

const { 
    controlAttributes,
    controlClasses,
    formGroupClasses,
    hasChanged,
    hasFocus,
    hasIcon,
    isDirty,
    isEmpty,
    isInvalid,
    isValid,
    listeners,
    model 
} = useFormControl({
    props,
    emit,
    model // Optional custom model ref
});
```

## Arguments

The `useFormControl` function accepts an options object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `props` | `FormControlProps` | The props object from the component. |
| `emit` | `EmitFn` | The emit function from the component. |
| `model` | `ModelRef` | (Optional) A `ModelRef` for the v-model binding. |

## Returns

The composable returns an object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `controlAttributes` | `ComputedRef<FormControlAttributes>` | Attributes to bind to the input element (id, name, class, disabled, readonly, etc.). |
| `controlClasses` | `ComputedRef<FormControlClasses>` | CSS classes for the control element based on state (valid/invalid, focus, size, color, etc.). |
| `formGroupClasses` | `ComputedRef<FormGroupClasses>` | CSS classes for a wrapper/group element (has-activity, has-icon, is-dirty, etc.). |
| `hasChanged` | `Ref<boolean>` | `true` if the value has been modified from initial state. |
| `hasFocus` | `Ref<boolean>` | `true` if the control currently has focus. |
| `hasIcon` | `ComputedRef<boolean>` | `true` if an icon slot is present. |
| `isDirty` | `Ref<boolean>` | `true` if the value is not null/undefined (set on mount or change). |
| `isEmpty` | `Ref<boolean>` | `true` if the value is empty. |
| `isInvalid` | `ComputedRef<boolean>` | `true` if the control is in an invalid state. |
| `isValid` | `ComputedRef<boolean>` | `true` if the control is in a valid state. |
| `listeners` | `FormControlListeners` | Event listeners to bind to the input element (onFocus, onBlur, onInput, etc.). |
| `model` | `ModelRef` | The model reference. |

## Component Implementation

When building a custom form control, spread the `controlAttributes` and `listeners` onto your native input element.

```vue
<template>
    <div :class="formGroupClasses">
        <label v-if="label" :for="id" :class="labelClass">
            {{ label }}
        </label>
        <div class="relative">
            <input 
                v-bind="controlAttributes" 
                v-on="listeners" 
                :value="model"
            />
            <!-- Slots for icons, activity, etc. -->
        </div>
        <!-- Feedback and errors -->
    </div>
</template>

<script setup lang="ts">
import { useFormControl } from '@vue-interface/form-control';

// ... define props and emits ...

const { 
    controlAttributes, 
    formGroupClasses, 
    listeners, 
    model 
} = useFormControl({ props, emit });
</script>
```
