---
title: Form Control
---

<script setup>
import '../demo.css'
</script>

# Form Control

The `form control` utility class is a [form component](./forms) that provides a flexible and customizable input elements with customizable sizes, states, and colors.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/form-control
```

```bash [yarn]
yarn add @vue-interface/form-control
```

```bash [npm]
npm i @vue-interface/form-control
```
:::

### Tailwind Setup

```css
@import '@vue-interface/form-control/index.css';
```

## Basic Usage

<div class="flex flex-col gap-4">
    <!-- #region basicUsage -->
    <div>
        <label for="control" class="form-label">Some Label</label>
        <input type="text" id="control" class="form-control" />
    </div>
    <div>
        <label class="form-label">Placeholder</label>
        <input type="text" id="control" class="form-control" placeholder="Placeholder" />
    </div>
    <div>
        <label class="form-label">Disabled</label>
        <input type="text" id="control" class="form-control" value="Disabled" disabled />
    </div>
    <div>
        <label class="form-label">Disabled (Placeholder)</label>
        <input type="text" id="control" class="form-control" placeholder="Disabled" disabled />
    </div>
    <div>
        <label class="form-label">Readonly</label>
        <input type="text" id="control" class="form-control" placeholder="Readonly" readonly />
    </div>
    <!-- #endregion basicUsage -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#basicUsage{html}
:::

## Sizes

Customize the size of the input area using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `form-control-[size]`.

<div class="flex flex-col gap-4">
    <!-- #region predeterminedSizes -->
    <input type="text" class="form-control form-control-xs" placeholder="form-control-xs" />
    <input type="text" class="form-control form-control-sm" placeholder="form-control-sm" />
    <input type="text" class="form-control form-control-md" placeholder="form-control-md" />                            
    <input type="text" class="form-control form-control-lg" placeholder="form-control-lg" />                            
    <input type="text" class="form-control form-control-xl" placeholder="form-control-xl" />                            
    <input type="text" class="form-control form-control-2xl" placeholder="form-control-2xl" />                            
    <input type="text" class="form-control form-control-3xl" placeholder="form-control-3xl" />                            
    <input type="text" class="form-control form-control-4xl" placeholder="form-control-4xl" />
    <input type="text" class="form-control form-control-5xl" placeholder="form-control-5xl" />
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over indicator sizes, use Tailwind's numeric sizing scale classes: `form-control-1` - `form-control-96`. 

<div class="flex flex-col gap-4">
    <!-- #region TWSizes -->
    <input type="text" class="form-control form-control-4" placeholder="form-control-4" />
    <input type="text" class="form-control form-control-5" placeholder="form-control-5" />
    <input type="text" class="form-control form-control-6" placeholder="form-control-6" />
    <!-- #endregion TWSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#TWSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `form-control-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-4">
    <!-- #region TWSizes -->
    <input type="text" class="form-control form-control-[16px]" placeholder="form-control-[16px]" />
    <input type="text" class="form-control form-control-[1.5rem]" placeholder="form-control-[1.5rem]" />
    <!-- #endregion TWSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#TWSizes{html}
:::

## Plaintext

<div class="flex flex-col gap-4">
    <!-- #region plaintext -->
    <div>
        <label class="form-label">Plaintext</label>
        <input type="text" id="control" class="form-control-plaintext" value="Readonly" readonly />
        <input type="text" id="control" class="form-control-plaintext" placeholder="Readonly Placeholder" readonly />
        <input type="text" id="control" class="form-control-plaintext" value="Readonly & Disabled" readonly disabled />
        <input type="text" id="control" class="form-control-plaintext" value="Readonly & Disabled Placeholder" readonly disabled />
    </div>
    <!-- #endregion plaintext -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#plaintext{html}
:::

## Validation

Validation classes provides error-checking styling for the form-control element. The `is-invalid` and `is-valid` classes provide the styling for invalid and valid elements, respectively. 

<div class="flex flex-col gap-4">
    <!-- #region validation -->
    <div>
        <label class="flex-shrink-0 invalid-feedback">Invalid Field</label>
        <div>
            <input type="text" class="form-control is-invalid" value="This field is invalid" />
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
            <input type="text" class="form-control is-valid" value="This field is invalid" />
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
<<< @/packages/form-control/docs/form-control.md#validation{html}
:::

## Custom Colors

Customize the color of a form-control element with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `form-control-[color]`.

<div class="flex flex-col gap-4">
    <!-- #region customColors -->
    <input type="text" class="form-control form-control-amber-500" />
    <input type="text" class="form-control form-control-green-500" />
    <input type="text" class="form-control form-control-purple-500" />
    <input type="text" class="form-control form-control-neutral-500" />
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#customColors{html}
:::

## Animated

The `form-control-animated` class provides a custom animated component where the `label` can be nested inside the input space and move when interacted with. This decreases the size needed for a form-control component.

<div class="flex flex-col gap-4">
    <!-- #region animated -->
    <div class="form-control-animated">
        <label for="form-control-animated" class="form-label">form-control</label>
        <input type="text" id="form-control-animated" class="form-control is-dirty" placeholder="form-control"/>
    </div>
    <!-- #endregion animated -->
</div>

<<< @/packages/form-control/docs/form-control.md#animated{html}

Use the [size](#sizes) classes described above to customize the size of the animated field.

<div class="flex flex-col gap-4">
    <!-- #region animatedSizes -->
    <div class="form-control-animated-xs">
        <label for="form-control-animated-xs" class="form-label">form-control-xs</label>
        <input type="text" id="form-control-animated-xs" class="form-control form-control-xs" placeholder="form-control-xs"/>
    </div>
    <div class="form-control-animated-sm">
        <label for="form-control-animated-sm" class="form-label">form-control-sm</label>
        <input type="text" id="form-control-animated-sm" class="form-control form-control-sm" placeholder="form-control-sm"/>
    </div>
    <div class="form-control-animated-md">
        <label for="form-control-animated-md" class="form-label">form-control-md</label>
        <input type="text" id="form-control-animated-md" class="form-control form-control-md" placeholder="form-control-md"/>
    </div>
    <div class="form-control-animated-lg">
        <label for="form-control-animated-lg" class="form-label">form-control-lg</label>
        <input type="text" id="form-control-animated-lg" class="form-control form-control-lg" placeholder="form-control-lg"/>
    </div>
    <div class="form-control-animated-xl">
        <label for="form-control-animated-xl" class="form-label">form-control-xl</label>
        <input type="text" id="form-control-animated-xl" class="form-control form-control-xl" placeholder="form-control-xl"/>
    </div>
    <div class="form-control-animated-2xl">
        <label for="form-control-animated-2xl" class="form-label">form-control-2xl</label>
        <input type="text" id="form-control-animated-2xl" class="form-control form-control-2xl" placeholder="form-control-2xl"/>
    </div>
    <div class="form-control-animated-3xl">
        <label for="form-control-animated-3xl" class="form-label">form-control-3xl</label>
        <input type="text" id="form-control-animated-3xl" class="form-control form-control-3xl" placeholder="form-control-3xl"/>
    </div>
    <div class="form-control-animated-4xl">
        <label for="form-control-animated-4xl" class="form-label">form-control-4xl</label>
        <input type="text" id="form-control-animated-4xl" class="form-control form-control-4xl" placeholder="form-control-4xl"/>
    </div>
    <div class="form-control-animated-5xl">
        <label for="form-control-animated-5xl" class="form-label">form-control-5xl</label>
        <input type="text" id="form-control-animated-5xl" class="form-control form-control-5xl" placeholder="form-control-5xl"/>
    </div>
    <div class="form-control-animated-3">
        <label for="form-control-animated-3" class="form-label">form-control-3</label>
        <input type="text" id="form-control-animated-3" class="form-control form-control-3" placeholder="form-control-3"/>
    </div>
    <div class="form-control-animated-4">
        <label for="form-control-animated-4" class="form-label">form-control-4</label>
        <input type="text" id="form-control-animated-4" class="form-control form-control-4" placeholder="form-control-4"/>
    </div>
    <div class="form-control-animated-[1.5rem]">
        <label for="form-control-animated-[1.5rem]" class="form-label">form-control-[1.5rem]</label>
        <input type="text" id="form-control-animated-[1.5rem]" class="form-control form-control-[1.5rem]" placeholder="form-control-[1.5rem]"/>
    </div>
    <!-- #endregion animatedSizes -->
</div>

::: details Show Code
<<< @/packages/form-control/docs/form-control.md#animatedSizes{html}
:::

## Custom Components

There are two custom components: a [color picker](#color-picker) and a custom [light/dark mode switch](#light/dark-mode-switch)

### Color Picker 

Add a color picker to your UI using the `form-control-color` class. This allows for pixel-level anaylsis of the colors within the UI.

<div>
<!-- #region colorPicker -->
    <label class="form-label">Color Picker</label>
    <input type="color" id="control" class="form-control form-control-color" />
<!-- #endregion colorPicker -->
</div>

<<< @/packages/form-control/docs/form-control.md#colorPicker{html}

### Light/Dark Mode Switch

Add this switch to the UI using the the `form-switch-light-dark` class. It is a custom component of the [form-switch](./form-switch) element

<!-- #region customSwitch -->
<div class="flex items-center gap-2">
    <label class="form-label">Light</label>
    <input v-model="dark" type="checkbox" class="form-switch form-switch-md form-switch-light-dark" />
    <label class="form-label">Dark</label>
</div>
<!-- #endregion customSwitch -->

<<< @/packages/form-control/docs/form-control.md#customSwitch{html}