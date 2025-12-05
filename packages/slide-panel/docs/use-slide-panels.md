---
title: useSlidePanels
---

# useSlidePanels

The `useSlidePanels` composable allows you to control `SlidePanel` components programmatically from anywhere in your application.

## Usage

First, ensure your `SlidePanel` components are registered in a container (usually by using `SlidePanel` components within a `SlidePanelContainer` or registering them manually).

Then, import `useSlidePanels` to control them.

```typescript
import { useSlidePanels } from '@vue-interface/slide-panel';

const { open, close } = useSlidePanels('my-container-name'); // Default container name is 'slide-panel'

// Open a panel by name
open('my-panel-name');

// Close a panel by name
close('my-panel-name');
```

## Arguments

The `useSlidePanels` function accepts a single optional argument:

| Argument | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `'slide-panel'` | The name of the slide panel container registry to target. |

## Returns

The composable returns an object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| `open` | `(name: string) => void` | Function to open a slide panel by its name. Throws an error if the panel is not found. |
| `close` | `(name: string) => void` | Function to close a slide panel by its name. Throws an error if the panel is not found. |
| `registry` | `SlidePanelRegistry` | The underlying registry object containing reactive state of panels. |

## Registry

The registry object contains the state of the slide panels:

```typescript
type SlidePanelRegistry = {
    elements: Ref<HTMLElement[]>; // Array of panel elements
    index: Ref<number>;           // Current z-index counter
    panels: Ref<Record<string, SlidePanel>>; // Type-safe record of registered panels
    topSlide: Ref<HTMLElement|undefined>;   // The currently top-most slide panel element
};
```
