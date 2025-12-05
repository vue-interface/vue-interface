---
title: Button Dropdown
---

<script setup>
import '../demo.css';
import BtnDropdown from '../src/BtnDropdown.vue';

function onClickItem(e) {
  console.log('clicked', e)
  e.preventDefault()
}

function onClick() {
  console.log('action button clicked!')
}

function onToggle() {
  console.log('toggled')
}
</script>

# Button Dropdown

The `btn-dropdown` component provides an interactive button paired with a dropdown menu. It extends the standard [button](/packages/btn/docs/btn), [button-group](/packages/btn/docs/btn-group), and [dropdown-menu](/packages/dropdown-menu/docs/dropdown-menu) components.

## Basic Usage

<ClientOnly>

::: raw
<!-- #region basicUsage-->
<btn-dropdown label="Dropdown" @click-toggle="onToggle">
    <a href="#/test" @click="onClickItem">Action</a>
    <a href="#">Another Action</a>
    <hr>
    <a href="#">Something else here</a>
</btn-dropdown>
<!-- #endregion basicUsage-->
:::

<<< @/packages/btn-dropdown/docs/btn-dropdown.md#basicUsage{html}

### Split Button

Create a split `btn-dropdown` component by adding the `split` prop. 

::: raw
<!-- #region split-->
<btn-dropdown label="Dropdown" @click-toggle="onToggle" split>
    <a href="#/test" @click="onClickItem">Action</a>
    <a href="#">Another Action</a>
    <hr>
    <a href="#">Something else here</a>
</btn-dropdown>
<!-- #endregion split-->
:::

<<< @/packages/btn-dropdown/docs/btn-dropdown.md#split{html}

::: tip
The split dropdown button is a combination of a [button-group](/packages/btn/docs/btn-group) button and a [dropdown-menu](/packages/dropdown-menu/docs/dropdown-menu).
:::

## Custom Buttons 

::: raw
<div class="flex items-center gap-2">
    <!-- #region custom1 -->
    <btn-dropdown :caret="false" label="+" button-class="btn-primary rounded-full p-0 size-8" @click-toggle="onToggle">
        <a href="#/test" @click="onClickItem">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion custom1 -->
    <!-- #region custom2 -->
    <btn-dropdown>
        <template #button="{ target, onBlur, onClickToggle, expanded }">
            <button :ref="target" class="bg-gray-100 p-2 rounded-full outline-none active:ring-4 focus:ring-4 ring-blue-500/50" :class="{'rotate-z-90': expanded}" @blur="onBlur" @click="onClickToggle">
                <svg version="1.0" class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
                        <path d="M570 3243 c-71 -12 -189 -60 -255 -104 -194 -130 -315 -353 -315
                        -580 0 -288 202 -567 473 -655 110 -36 263 -44 372 -19 341 76 582 414 536
                        754 -48 358 -338 615 -690 610 -53 -1 -107 -4 -121 -6z"/>
                        <path d="M2395 3234 c-243 -59 -452 -270 -509 -514 -20 -83 -20 -237 0 -320
                        45 -195 188 -372 369 -460 104 -51 187 -70 305 -70 118 0 201 19 305 70 137
                        66 249 178 315 315 51 104 70 187 70 305 0 118 -19 201 -70 305 -87 180 -253
                        316 -446 365 -93 24 -249 26 -339 4z"/>
                        <path d="M4254 3231 c-198 -54 -360 -186 -448 -366 -51 -104 -69 -183 -69
                        -305 0 -122 18 -201 69 -306 68 -139 186 -253 334 -323 204 -97 472 -77 664
                        49 190 124 316 355 316 580 0 290 -200 567 -474 656 -111 37 -287 43 -392 15z"/>
                    </g>
                </svg>
            </button>
        </template>
        <a href="#/test" @click="onClickItem">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>  
    <!-- #endregion custom2 -->
</div>
:::

::: details Show Code - (+)
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#custom1{html}
:::

::: details Show Code - Elipses
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#custom2{html}
:::

## Variants

::: raw
<div class="flex flex-wrap gap-2">
    <!-- #region variants -->
    <btn-dropdown label="Primary" variant="btn-primary">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Secondary" variant="btn-secondary">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Success" variant="btn-success">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Info" variant="btn-info">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Warning" variant="btn-warning">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Danger" variant="btn-danger">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dark" variant="btn-dark">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Light" variant="btn-light">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Muted" variant="btn-muted">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion variants -->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#variants{html}
:::

## Outline Variants

::: raw
<div class="flex flex-wrap gap-2">
    <!-- #region outlineVariants -->
    <btn-dropdown label="Primary" variant="btn-outline-primary" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Secondary" variant="btn-outline-secondary" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Success" variant="btn-outline-success" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Info" variant="btn-outline-info" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Warning" variant="btn-outline-warning" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Danger" variant="btn-outline-danger" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dark" variant="btn-outline-dark" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Light" variant="btn-outline-light" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Muted" variant="btn-outline-muted" outline>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion outlineVariants -->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#outlineVariants{html}
:::

## Split Button Variants

::: raw
<div class="flex flex-wrap gap-2">
    <!-- #region splitVariants -->
    <btn-dropdown label="Primary" variant="btn-primary" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Secondary" variant="btn-secondary" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Success" variant="btn-success" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Info" variant="btn-info" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Warning" variant="btn-warning" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Danger" variant="btn-danger" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dark" variant="btn-dark" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Light" variant="btn-light" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Muted" variant="btn-muted" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion splitVariants -->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#splitVariants{html}
:::

## Split Outline Variants

::: raw
<div class="flex flex-wrap gap-2">
    <!-- #region splitOutlineVariants -->
    <btn-dropdown label="Primary" variant="btn-outline-primary" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Secondary" variant="btn-outline-secondary" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Success" variant="btn-outline-success" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Info" variant="btn-outline-info" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Warning" variant="btn-outline-warning" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Danger" variant="btn-outline-danger" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dark" variant="btn-outline-dark" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Light" variant="btn-outline-light" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Muted" variant="btn-outline-muted" outline split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion splitOutlineVariants -->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#splitOutlineVariants{html}
:::

## Sizes

Customize the size of a `btn-dropdown` component using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `btn-group-[size]`.

::: raw
<div class="flex flex-wrap gap-2">
    <!-- #region predetermined-->
    <div>
        <btn-dropdown label="xs" size="btn-group-xs" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="sm" size="btn-group-sm" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="md" size="btn-group-md" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="lg" size="btn-group-lg" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="xl" size="btn-group-xl" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="2xl" size="btn-group-2xl" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="3xl" size="btn-group-3xl" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="4xl" size="btn-group-4xl" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="5xl" size="btn-group-5xl" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <!-- #endregion predetermined -->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#predetermined{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `btn-group-1` - `btn-group-96`.

::: raw
<div class="flex gap-2">
    <!-- #region tailwind-->
    <div>
        <btn-dropdown label="btn-group-3" size="btn-group-3" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="btn-group-4" size="btn-group-4" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="btn-group-5" size="btn-group-5" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <!-- #endregion tailwind-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#tailwind{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `btn-group-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

::: raw
<div class="flex gap-2">
    <!-- #region arbitrary-->
    <div>
        <btn-dropdown label="btn-group-[16px]" size="btn-group-[16px]" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="btn-group-[1rem]" size="btn-group-[1rem]" variant="btn-secondary">
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <!-- #endregion arbitrary-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#arbitrary{html}
:::

## Split Sizes

Customize the size of a split `btn-dropdown` component using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `btn-group-[size]`.

::: raw
<div class="flex flex-wrap gap-2">
    <!-- #region splitPredetermined-->
    <div>
        <btn-dropdown label="xs" size="btn-group-xs" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="sm" size="btn-group-sm" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="md" size="btn-group-md" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="lg" size="btn-group-lg" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="xl" size="btn-group-xl" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="2xl" size="btn-group-2xl" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="3xl" size="btn-group-3xl" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="4xl" size="btn-group-4xl" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="5xl" size="btn-group-5xl" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <!-- #endregion splitPredetermined -->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#splitPredetermined{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `btn-group-1` - `btn-group-96`.

::: raw
<div class="flex gap-2">
    <!-- #region splitTailwind-->
    <div>
        <btn-dropdown label="btn-group-3" size="btn-group-3" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="btn-group-4" size="btn-group-4" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="btn-group-5" size="btn-group-5" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <!-- #endregion splitTailwind-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#splitTailwind{html}
:::

### Arbitrary Sizes

For precise sizing, specify exact pixel values using the syntax `btn-group-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).


::: raw
<div class="flex gap-2">
    <!-- #region splitArbitrary-->
    <div>
        <btn-dropdown label="btn-group-[16px]" size="btn-group-[16px]" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <div>
        <btn-dropdown label="btn-group-[1rem]" size="btn-group-[1rem]" variant="btn-secondary" split>
            <a href="#">Action</a>
            <a href="#">Another Action</a>
            <a href="#">Something else here</a>
        </btn-dropdown>
    </div>
    <!-- #endregion splitArbitrary-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#splitArbitrary{html}
:::

## Menu Alignment

Customize the alignment of the dropdown menu  relative to the button using the `align` prop. Use `start` value to align the left side of the menu to the button, and the `end` value to align right edge of the menu to the button. 

::: raw
<div class="flex gap-2">
    <!-- #region menuAlignment-->
    <btn-dropdown align="start" label="Align Left" variant="btn-secondary">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown align="start" label="Align Left (Split)" variant="btn-secondary" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown align="end" label="Align Right" variant="btn-secondary">
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown align="end" label="Align Right (Split)" variant="btn-secondary" split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion menuAlignment-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#menuAlignment{html}
:::

## Menu Direction Variations

Specify the direction of the dropdown menu using the [dropup](#dropup), [dropright](#dropright), or [dropleft](#dropleft) props.

### Dropup

::: raw
<div class="flex gap-2">
    <!-- #region dropup-->
    <btn-dropdown label="Dropup" variant="btn-secondary" dropup>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dropup (Split)" variant="btn-secondary" dropup split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion dropup-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#dropup{html}
:::

### Dropright

::: raw
<div class="flex gap-2">
    <!-- #region dropright-->
    <btn-dropdown label="Dropright" variant="btn-secondary" dropright>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dropright (Split)" variant="btn-secondary" dropright split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion dropright-->
</div>
:::

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#dropright{html}
:::

### Dropleft

::: raw
<div class="flex gap-2">
    <!-- #region dropleft-->
    <btn-dropdown label="Dropleft" variant="btn-secondary" dropleft>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <btn-dropdown label="Dropleft (Split)" variant="btn-secondary" dropleft split>
        <a href="#">Action</a>
        <a href="#">Another Action</a>
        <a href="#">Something else here</a>
    </btn-dropdown>
    <!-- #endregion dropleft-->
</div>
:::

</ClientOnly>

::: details Show Code
<<< @/packages/btn-dropdown/docs/btn-dropdown.md#dropleft{html}
:::