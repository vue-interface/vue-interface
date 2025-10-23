---
title: Button
---

<script type="module">
import './index.css'
</script>

# Button

The `btn` utility class provides a flexible and customizable button component system with color variants, sizes, and states.

## Color Variants

Standard button color variants:
<div class="bg-red-200 text-black p-1">Test</div>

<div class="flex gap-2 my-4">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-success">Success</button>
  <button class="btn btn-danger">Danger</button>
  <button class="btn btn-warning">Warning</button>
  <button class="btn btn-info">Info</button>
  <button class="btn btn-light text-black">Light</button>
  <button class="btn btn-dark">Dark</button>
</div>

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light text-black">Light</button>
<button class="btn btn-dark">Dark</button>
```

## Custom Colors

You can use arbitrary color values with the `btn-[color]` syntax:

<div class="flex gap-2 my-4">
  <button class="btn btn-[red] text-white">Red</button>
  <button class="btn btn-[blue] text-white">Blue</button>
  <button class="btn btn-[green] text-white">Green</button>
  <button class="btn btn-[#000] text-white">Black</button>
</div>

```html
<button class="btn btn-[red] text-white">Red</button>
<button class="btn btn-[blue] text-white">Blue</button>
<button class="btn btn-[green] text-white">Green</button>
<button class="btn btn-[#000] text-white">Black</button>
```

## Outline Variants

Outline buttons with transparent backgrounds:

<div class="flex gap-2 my-4">
  <button class="btn btn-outline-primary">Primary</button>
  <button class="btn btn-outline-secondary">Secondary</button>
  <button class="btn btn-outline-success">Success</button>
  <button class="btn btn-outline-danger">Danger</button>
</div>

```html
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-secondary">Secondary</button>
<button class="btn btn-outline-success">Success</button>
<button class="btn btn-outline-danger">Danger</button>
```

## Display Modes

### Inline Buttons

<div class="my-4">
  <button class="btn btn-inline btn-primary">Inline Button</button>
  <button class="btn btn-inline btn-secondary">Another Inline</button>
</div>

```html
<button class="btn btn-inline btn-primary">Inline Button</button>
```

### Block Buttons

<div class="my-4">
  <button class="btn btn-block btn-primary">Block Button</button>
  <button class="btn btn-block btn-secondary">Full Width Button</button>
</div>

```html
<button class="btn btn-block btn-primary">Block Button</button>
```

## States

### Disabled State

<div class="flex gap-2 my-4">
  <button class="btn btn-primary" disabled>Disabled</button>
  <button class="btn btn-secondary disabled">Disabled Class</button>
</div>

```html
<button class="btn btn-primary" disabled>Disabled</button>
<button class="btn btn-secondary disabled">Disabled Class</button>
```

### Focus and Active States

Buttons automatically handle hover, focus, and active states with appropriate visual feedback including color darkening and focus rings.

## CSS Variables

The button system is built on CSS custom properties that can be overridden:

| Variable | Default | Description |
|----------|---------|-------------|
| `--btn-display` | `inline-flex` | Display type |
| `--btn-padding-y` | `0.375rem` | Vertical padding |
| `--btn-padding-x` | `0.375rem` | Horizontal padding |
| `--btn-font-size` | `1rem` | Font size |
| `--btn-border-radius` | `0.25rem` | Border radius |
| `--btn-transition` | `color .15s...` | Transition properties |

## Usage Notes

- The base `btn` class provides foundational button styling
- Combine with color variants (`btn-primary`, `btn-secondary`, etc.)
- Use `btn-outline-*` for outline variants
- Apply `btn-inline` or `btn-block` to control display width
- Disabled buttons automatically reduce opacity and disable pointer events
- Custom colors can be applied using arbitrary values: `btn-[#color]`