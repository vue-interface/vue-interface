---
title: Modal
---

<script setup>
import '../demo.css'
import { Modal, Confirm, Alert } from '../index.ts';

function onConfirm(button, context) {
    console.log('Confirmed!', button, context)
    context.close()
}
</script>

# Modal

The `modal` component provides flexible and customizable modals with customizable sizes and colors. The modal component uses a [button](/packages/btn/docs/btn) with an unique `id` to call the modal with a matching `id`. 

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/modal
```

```bash [yarn]
yarn add @vue-interface/modal
```

```bash [npm]
npm i @vue-interface/modal
```
:::

## Basic Usage

<div>
    <!-- #region basicUsage -->
    <button id="basic-modal" class="btn btn-primary">Basic Modal</button>
    <Modal
        trigger="#basic-modal"
        close-button
        button-orientation="vertical"
        title="Basic Modal"
        content="Some Content" 
    >
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion basicUsage -->
</div>

<<< @/packages/modal/docs/modal.md#basicUsage{html}
<<< @/packages/modal/index.html#close{js}

::: tip 
Remove the `close-button` boolean prop to remove the "x" close button in the top right corner.
:::

## Types

There are three modal types: `modal`, `confirm`, and `alert`.

<div class="flex gap-2 mb-3">
    <!-- #region types -->
    <button id="default-modal" class="btn btn-primary">Modal</button>
    <button id="confirm" class="btn btn-primary">Confirm</button>
    <button id="alert" class="btn btn-primary">Alert</button>
    <Modal
        trigger="#default-modal"
        close-button
        button-orientation="vertical"
        title="Some Title"
        content="Some Content" 
    >
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Confirm
        trigger="#confirm"
        close-button
        button-orientation="vertical"
        title="Some Title"
        @confirm="onConfirm">
        Confirm
    </Confirm>
    <Alert
        trigger="#alert"
        close-button
        button-orientation="vertical"
        title="Some Title">
        Alert
    </Alert>
    <!-- #endregion types -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#types{html}
:::

## Variants

There are four variants of modals: `Info`, `Warning`, `Critical`, and `Success`. Each type has a unique color, [heroicon](https://heroicons.com/), and button layout. Set the `type prop` value to the desired variant using the syntax: `type="[variant]"`.

<div class="flex gap-2 mb-3">
    <!-- #region variants -->
    <button id="info" class="btn btn-primary">Info</button>
    <button id="warning" class="btn btn-warning">Warning</button>
    <button id="critical" class="btn btn-danger">Critical</button>
    <button id="success" class="btn btn-success">Success</button>
    <Modal
        trigger="#info"
        close-button
        type="info"
        button-orientation="vertical"
        title="Info">
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Confirm
        trigger="#warning"
        close-button
        type="warning"
        button-orientation="vertical"
        title="Warning"
        @confirm="onConfirm">
        Some Content
    </Confirm>
    <Alert
        trigger="#critical"
        close-button
        type="critical"
        button-orientation="vertical"
        title="Critical">
        Some Content
    </Alert>
    <Modal
        trigger="#success"
        close-button
        type="success"
        button-orientation="vertical"
        title="Success">
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#variants{html}
:::

## Centered

Centered modals come in two variations: centerd single action or centered double action. The `action` keyword specifies the number and layout of the modal buttons. Add `class="modal-center"` to the list of attributes to create the custom centered modal.

<div class="flex gap-2 mb-3">
    <!-- #region centered -->
    <button id="centeredSingle" class="btn btn-primary">Centered Single Action</button>
    <button id="centeredDouble" class="btn btn-primary">Centered Double Action</button>
    <Modal
        trigger="#centeredSingle"
        close-button
        class="modal-center"
        button-orientation="vertical"
        title="Centered Single Action">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Confirm
        trigger="#centeredDouble"
        close-button
        class="modal-center"
        button-orientation="vertical"
        title="Some Title"
        @confirm="onConfirm">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Confirm>
    <!-- #endregion centered -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#centered{html}
:::

## Sizes

Customize the size of modal dialogs using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `screen`. Specify the size using the `size` prop syntax: `size="[size]"`.

<div class="flex flex-wrap gap-2 mb-3">
    <!-- #region predeterminedSizes -->
    <button id="modal-2xs" class="btn btn-primary">modal-2xs</button>
    <button id="modal-xs" class="btn btn-primary">modal-xs</button>
    <button id="modal-sm" class="btn btn-primary">modal-sm</button>
    <button id="modal-md" class="btn btn-primary">modal-md</button>
    <button id="modal-lg" class="btn btn-primary">modal-lg</button>
    <button id="modal-xl" class="btn btn-primary">modal-xl</button>
    <button id="modal-2xl" class="btn btn-primary">modal-2xl</button>
    <button id="modal-3xl" class="btn btn-primary">modal-3xl</button>
    <button id="modal-4xl" class="btn btn-primary">modal-4xl</button>
    <button id="modal-5xl" class="btn btn-primary">modal-5xl</button>
    <button id="modal-screen" class="btn btn-primary">Fullscreen</button>
    <Modal
        trigger="#modal-2xs"
        close-button
        size="2xs"
        button-orientation="vertical"
        title="modal-2xs"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-xs"
        close-button
        size="xs"
        button-orientation="vertical"
        title="modal-xs"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-sm"
        close-button
        size="sm"
        button-orientation="vertical"
        title="modal-sm"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-md"
        close-button
        size="md"
        button-orientation="vertical"
        title="modal-md"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-lg"
        close-button
        size="lg"
        button-orientation="vertical"
        title="modal-lg"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-xl"
        close-button
        size="xl"
        button-orientation="vertical"
        title="modal-xl"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-2xl"
        close-button
        size="2xl"
        button-orientation="vertical"
        title="modal-2xl"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-3xl"
        close-button
        size="3xl"
        button-orientation="vertical"
        title="modal-3xl"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-4xl"
        close-button
        size="4xl"
        button-orientation="vertical"
        title="modal-4xl"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-5xl"
        close-button
        size="5xl"
        button-orientation="vertical"
        title="modal-5xl"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-screen"
        close-button
        size="screen"
        button-orientation="vertical"
        title="Fullscreen Modal"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion predeterminedSizes -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over modal sizes, use Tailwind's numeric sizing scale classes: `modal-50` - `modal-375`.

<div class="flex flex-wrap gap-2 mb-3">
    <!-- #region TWSizes -->
    <button id="modal-125" class="btn btn-primary">modal-125</button>
    <button id="modal-150" class="btn btn-primary">modal-150</button>
    <button id="modal-175" class="btn btn-primary">modal-175</button>
    <button id="modal-200" class="btn btn-primary">modal-200</button>
    <Modal
      trigger="#modal-125"
      close-button
      class="modal-125"
      button-orientation="vertical"
      title="modal-125"
    >
      500px
      <template #buttons="{ close }">
        <button class="btn" @click="close">Close</button>
      </template>
    </Modal>
    <Modal
      trigger="#modal-150"
      close-button
      class="modal-150"
      button-orientation="vertical"
      title="modal-150"
    >
      600px
      <template #buttons="{ close }">
        <button class="btn" @click="close">Close</button>
      </template>
    </Modal>
    <Modal
      trigger="#modal-175"
      close-button
      class="modal-175"
      button-orientation="vertical"
      title="modal-175"
    >
      700px
      <template #buttons="{ close }">
        <button class="btn" @click="close">Close</button>
      </template>
    </Modal>
    <Modal
      trigger="#modal-200"
      close-button
      class="modal-200"
      button-orientation="vertical"
      title="modal-200"
    >
      800px
      <template #buttons="{ close }">
        <button class="btn" @click="close">Close</button>
      </template>
    </Modal>
    <!-- #endregion TWSizes -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#TWSizes{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `modal-[Npx]` or any other CSS length units (`rem`, `em`, `%`, `vw`, `vh`, etc.). You can also use `modal-w-[value]` and `modal-h-[value]` for width and height respectively.

<div class="flex flex-wrap gap-2 mb-3">
    <!-- #region arbitrarySizes -->
    <button id="modal-400px" class="btn btn-primary">modal-[400px]</button>
    <button id="modal-700px" class="btn btn-primary">modal-[700px]</button>
    <button id="modal-100" class="btn btn-primary">modal-[100%]</button>
    <button id="modal-w-h" class="btn btn-primary">modal-w-[30vw] modal-h-[100vh]</button>
    <Modal
        trigger="#modal-400px"
        close-button
        class="modal-[400px]"
        button-orientation="vertical"
        title="modal-[400px]"
    >   
        Some Content
        <template #buttons="{ close }">
            <button class="btn" @click="close">Close</button>
      </template>
    </Modal>
    <Modal
        trigger="#modal-700px"
        close-button
        class="modal-[700px]"
        button-orientation="vertical"
        title="modal-[700px]"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-100"
        close-button
        class="modal-[100%]"
        button-orientation="vertical"
        title="modal-[100%]"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-w-h"
        close-button
        class="modal-w-[30vw] modal-h-[100vh]"
        button-orientation="vertical"
        title="modal-w-[30vw] modal-h-[100vh]"
    >   
        Some Content
        <template #buttons="{ close }">
          <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion arbitrarySizes -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#arbitrarySizes{html}
:::

## Colors

Customize the color of modal dialogs using [predetermined colors](#predetermined-colors), [icon-only colors](#icon-only-colors), or [custom colors](#custom-colors) from the Tailwind color palette.

### Predetermined Colors

Apply predetermined color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `modal-[color]`.

::: info 
These color variants come from the [button](/packages/btn/docs/btn.html#color-variants) component.
:::

<div class="flex flex-wrap gap-2 mb-3">
    <!-- #region predeterminedColors -->
    <button id="modal-primary" class="btn btn-primary">Primary</button>
    <button id="modal-secondary" class="btn btn-secondary">Secondary</button>
    <button id="modal-success" class="btn btn-success">Success</button>
    <button id="modal-danger" class="btn btn-danger">Danger</button>
    <button id="modal-warning" class="btn btn-warning">Warning</button>
    <button id="modal-info" class="btn btn-info">Info</button>
    <button id="modal-light" class="btn btn-light">Light</button>
    <button id="modal-dark" class="btn btn-dark">Dark</button>
    <Modal
        trigger="#modal-primary"
        close-button
        class="modal-primary"
        button-orientation="vertical"
        title="modal-primary"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-secondary"
        close-button
        class="modal-secondary"
        button-orientation="vertical"
        title="modal-secondary"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-success"
        close-button
        class="modal-success"
        button-orientation="vertical"
        title="modal-success"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-danger"
        close-button
        class="modal-danger"
        button-orientation="vertical"
        title="modal-danger"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-warning"
        close-button
        class="modal-warning"
        button-orientation="vertical"
        title="modal-warning"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-info"
        close-button
        class="modal-info"
        button-orientation="vertical"
        title="modal-info"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-light"
        close-button
        class="modal-light"
        button-orientation="vertical"
        title="modal-light"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-dark"
        close-button
        class="modal-dark"
        button-orientation="vertical"
        title="modal-dark"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion predeterminedColors -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#predeterminedColors{html}
:::

### Icon-only Colors

Apply icon-only color styling with the syntax: `modal-icon-[color]`. Available colors: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.

<div class="flex flex-wrap gap-2 mb-3">
    <!-- #region iconOnlyColors -->
    <button id="modal-icon-primary" class="btn btn-primary">Primary</button>
    <button id="modal-icon-secondary" class="btn btn-secondary">Secondary</button>
    <button id="modal-icon-success" class="btn btn-success">Success</button>
    <button id="modal-icon-danger" class="btn btn-danger">Danger</button>
    <button id="modal-icon-warning" class="btn btn-warning">Warning</button>
    <button id="modal-icon-info" class="btn btn-info">Info</button>
    <button id="modal-icon-light" class="btn btn-light">Light</button>
    <button id="modal-icon-dark" class="btn btn-dark">Dark</button>
    <Modal
        trigger="#modal-icon-primary"
        close-button
        class="modal-icon-dark"
        button-orientation="vertical"
        title="modal-icon-primary"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-secondary"
        close-button
        class="modal-icon-secondary"
        button-orientation="vertical"
        title="modal-icon-secondary"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-success"
        close-button
        class="modal-icon-success"
        button-orientation="vertical"
        title="modal-icon-success"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-danger"
        close-button
        class="modal-icon-danger"
        button-orientation="vertical"
        title="modal-icon-danger"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-warning"
        close-button
        class="modal-icon-warning"
        button-orientation="vertical"
        title="modal-icon-warning"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-info"
        close-button
        class="modal-icon-info"
        button-orientation="vertical"
        title="modal-icon-info"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-light"
        close-button
        class="modal-icon-light"
        button-orientation="vertical"
        title="modal-icon-light"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-icon-dark"
        close-button
        class="modal-icon-dark"
        button-orientation="vertical"
        title="modal-icon-dark"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion iconOnlyColors -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#iconOnlyColors{html}
:::

### Custom Colors

Customize the color of a modal element with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `modal-[color]`.

<div class="flex flex-wrap gap-2 mb-3">
    <!-- #region customColors -->
    <button id="modal-green-500" class="btn btn-green-500">modal-green-500</button>
    <button id="modal-amber-500" class="btn btn-amber-500">modal-amber-500</button>
    <button id="modal-yellow-500" class="btn btn-yellow-500">modal-yellow-500</button>
    <button id="modal-red-500" class="btn btn-red-500">modal-red-500</button>
    <Modal
        trigger="#modal-green-500"
        close-button
        class="modal-green-500"
        button-orientation="vertical"
        title="modal-green-500"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-amber-500"
        close-button
        class="modal-amber-500"
        button-orientation="vertical"
        title="modal-amber-500"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-yellow-500"
        close-button
        class="modal-yellow-500"
        button-orientation="vertical"
        title="modal-yellow-500"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <Modal
        trigger="#modal-red-500"
        close-button
        class="modal-red-500"
        button-orientation="vertical"
        title="modal-red-500"
    >
        Some Content
        <template #buttons="{close}">
            <button class="btn" @click="close">Close</button>
        </template>
    </Modal>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< @/packages/modal/docs/modal.md#customColors{html}
:::