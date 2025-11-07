---
title: Button Activity
---

<script setup>
import '../demo.css'
import { ref, onMounted } from 'vue'
import BtnActivity from '../src/BtnActivity.vue';
import { Dots, Spinner, Pulse } from '@vue-interface/activity-indicator'

const activity = ref(false)

/* #region setup */
const onClick = (event, { toggle }) => {
    toggle()
    
    setTimeout(() => {
        toggle()
    }, 2000)
}
/* #endregion setup */

/* #region activity */
onMounted(() => {
    const toggle = () => setTimeout(() => {
        activity.value = !activity.value
        toggle()
    }, 1000)
    
    toggle()
})
/* #endregion activity */
</script>

# Button Activity

The `btn-activity` component provides an interactive button with built-in activity indicators for async operations. It extends the standard [button](/packages/btn/docs/btn) and [activity-indicator](/packages/activity-indicator/docs/activity-indicator) components to create these buttons.

## Basic Usage

<div class="mb-5 flex gap-2">
    <!-- #region basicUsage -->
    <div><btn-activity :indicator="Dots" @click="onClick">Dots</btn-activity></div>
    <div><btn-activity :indicator="Spinner" @click="onClick">Spinner</btn-activity></div>
    <div><btn-activity :indicator="Pulse" @click="onClick">Pulse</btn-activity></div>
    <!-- #endregion basicUsage -->
</div>

<<< @/packages/btn-activity/docs/btn-activity.md#basicUsage{html}
<<< @/packages/btn-activity/docs/btn-activity.md#setup{js}

## Dots

<div class="mb-5 flex gap-2">
    <!-- #region dots -->
    <div><btn-activity :indicator="Dots" size="btn-sm" @click="onClick">Click Me!</btn-activity></div>
    <div><btn-activity :indicator="Dots" size="btn-md" @click="onClick">Click Me!</btn-activity></div>
    <div><btn-activity :indicator="Dots" size="btn-lg" @click="onClick">Click Me!</btn-activity></div>
    <!-- #endregion dots -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#dots{html}
:::

## Spinner

<div class="flex gap-2 mb-5">
  <!-- #region spinner -->
  <div><btn-activity :indicator="Spinner" size="btn-sm" @click="onClick">Click Me!</btn-activity></div>
  <div><btn-activity :indicator="Spinner" size="btn-md" @click="onClick">Click Me!</btn-activity></div>
  <div><btn-activity :indicator="Spinner" size="btn-lg" @click="onClick">Click Me!</btn-activity></div>
  <!-- #endregion spinner -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#spinner{html}
:::

## Pulse

<div class="flex gap-2 mb-5">
  <!-- #region pulse -->
  <div><btn-activity :indicator="Pulse" size="btn-sm" @click="onClick">Click Me!</btn-activity></div>
  <div><btn-activity :indicator="Pulse" size="btn-md" @click="onClick">Click Me!</btn-activity></div>
  <div><btn-activity :indicator="Pulse" size="btn-lg" @click="onClick">Click Me!</btn-activity></div>
  <!-- #endregion pulse -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#pulse{html}
:::

## Orientation

Control the position of the activity indicator relative to the button label using the `orientation` prop.

<div class="flex gap-2 mb-5">
  <!-- #region orientation -->
  <div><btn-activity :indicator="Spinner" orientation="top" @click="onClick">Orientate Top</btn-activity></div>
  <div><btn-activity :indicator="Spinner" orientation="bottom" @click="onClick">Orientate Bottom</btn-activity></div>
  <div><btn-activity :indicator="Spinner" orientation="left" @click="onClick">Orientate Left</btn-activity></div>
  <div><btn-activity :indicator="Spinner" orientation="right" @click="onClick">Orientate Right</btn-activity></div>
  <!-- #endregion orientation -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#orientation{html}
:::

## Block Activity Buttons

Full-width buttons with different indicator orientations using the `block` prop.

<div class="flex flex-col gap-4">
  <!-- #region block -->
  <btn-activity :indicator="Spinner" block orientation="top" @click="onClick">Spinner Top</btn-activity>
  <btn-activity :indicator="Spinner" block orientation="bottom" @click="onClick">Spinner Bottom</btn-activity>
  <btn-activity :indicator="Spinner" block orientation="left" @click="onClick">Spinner Left</btn-activity>
  <btn-activity :indicator="Spinner" block orientation="right" @click="onClick">Spinner Right</btn-activity>
  <!-- #endregion block -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#block{html}
:::

## Variants

Button activity supports all standard button color variants.

<div class="flex flex-wrap gap-2 mb-5">
  <!-- #region variants -->
  <btn-activity :indicator="Spinner" variant="btn-secondary" @click="onClick">btn-secondary</btn-activity>
  <btn-activity :indicator="Spinner" variant="btn-warning" @click="onClick">btn-warning</btn-activity>
  <btn-activity :indicator="Spinner" variant="btn-danger" @click="onClick">btn-danger</btn-activity>
  <btn-activity :indicator="Spinner" variant="btn-success" @click="onClick">btn-success</btn-activity>
  <!-- #endregion variants -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#variants{html}
:::

## Activity Attribute

Control the activity state programmatically using the `activity` prop.

<div class="flex gap-2 mb-5">
  <!-- #region activityAttribute -->
  <btn-activity :indicator="Spinner" :activity="activity">
    {{ activity ? 'On' : 'Off' }}
  </btn-activity>
  <btn-activity :indicator="Spinner" :activity="activity" :disabled="true">
    {{ activity ? 'On' : 'Off' }}
  </btn-activity>
  <!-- #endregion activityAttribute -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#activityAttribute{html}
:::

<<< @/packages/btn-activity/docs/btn-activity.md#activity{js}

## Disabled State

Buttons can be disabled to prevent user interaction.

<div class="mb-5">
  <!-- #region disabled -->
  <btn-activity :indicator="Spinner" disabled @click="onClick">Spinner</btn-activity>
  <!-- #endregion disabled -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#disabled{html}
:::

## Label Attribute

Use the `label` prop to set button text without using the default slot.

<div class="mb-5">
  <!-- #region labelAttribute -->
  <btn-activity :indicator="Spinner" label="Some Text Here" @click="onClick"></btn-activity>
  <!-- #endregion labelAttribute -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#labelAttribute{html}
:::

## Custom Element

Combine slot content with the label attribute and disabled states.

<div class="flex gap-2 mb-5">
  <!-- #region customElement -->
  <btn-activity :indicator="Spinner" @click="onClick">Label</btn-activity>
  <btn-activity :indicator="Spinner" label="Some Text Here" disabled @click="onClick"></btn-activity>
  <!-- #endregion customElement -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#customElement{html}
:::

## Click Event

The click event handler receives a toggle function to control the activity state.

<div class="flex gap-2 mb-5">
  <!-- #region clickEvent -->
  <btn-activity :indicator="Spinner" class="btn-primary" @click="onClick">Enabled</btn-activity>
  <btn-activity :indicator="Spinner" disabled @click="onClick">Disabled</btn-activity>
  <!-- #endregion clickEvent -->
</div>

::: details Show Code
<<< @/packages/btn-activity/docs/btn-activity.md#clickEvent{html}
:::