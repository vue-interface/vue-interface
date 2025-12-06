---
title: Breadcrumb
---

<script type="module">
import '../demo.css'
</script>

# Breadcrumb

The `breadcrumb` utility class provides a flexible and customizable breadcrumb component system with customizable color variants and sizes.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/breadcrumb
```

```bash [yarn]
yarn add @vue-interface/breadcrumb
```

```bash [npm]
npm i @vue-interface/breadcrumb
```
:::

## Basic Usage

To create a breadcrumb component, use the parent `breadcrumb` class and then add the `breadcrumb-link` class to the links in the breadcrumb. To remove the home icon, insert the `no-icon` class into the first link.

<div class="flex flex-col gap-3">
    <!-- #region basicUsage -->
    <div class="breadcrumb">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb">
        <a href="#" class="breadcrumb-link">Home</a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <!-- #endregion basicUsage -->
</div>

<<< ./index.md#basicUsage{html}

## Sizes

Customize the size of a `breadcrumb` using a [predetermined size](#predetermined-sizes), [tailwind's numeric sizing classes](#tailwind-sizes), or an [arbitrary](#arbitrary-sizes) CSS length unit.

### Predetermined Sizes

The size can be customized using predetermined size classes: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`. Use the syntax: `breadcrumb-[size]`.

<div class="flex flex-col gap-3">
    <!-- #region predeterminedSizes-->
    <div class="breadcrumb breadcrumb-xs">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-sm">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-md">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-lg">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-xl">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-2xl">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-3xl">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-4xl">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-5xl">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <!-- #endregion predeterminedSizes-->
</div>

::: details Show Code
<<< ./index.md#predeterminedSizes{html}
:::

### Tailwind Sizes

For more granular control over button sizes, use Tailwind's numeric sizing scale classes: `breadcrumb-1` - `readcrumbn-96`.

<div class="flex flex-col gap-3">
    <!-- #region tailwindSizes-->
    <div class="breadcrumb breadcrumb-4">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-5">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-6">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <!-- #endregion tailwindSizes-->
</div>

::: details Show Code
<<< ./index.md#tailwindSizes{html}
:::

### Arbitrary sizes

For precise sizing, specify exact pixel values using the syntax `breadcrumb-[Npx]` or any other CSS length units (`rem`, `em`, `mm`, etc.).

<div class="flex flex-col gap-3">
    <!-- #region arbitrarySizes-->
    <div class="breadcrumb breadcrumb-[16px]">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-[1.5rem]">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <!-- #endregion arbitrarySizes-->
</div>

::: details Show Code
<<< ./index.md#arbitrarySizes{html}
:::

## Variants

The breadcrumb component supports eight standard color variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. Use the syntax: `breadcrumb-[variant]`.

<div class="flex flex-col gap-3">
    <!-- #region variants -->
    <div class="breadcrumb breadcrumb-primary">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-secondary">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-success">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-danger">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-warning">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-info">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-light">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-dark">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <!-- #endregion variants -->
</div>

::: details Show Code
<<< ./index.md#variants{html}
:::

## Custom Colors

Customize the color of the `breadcrumb` component with the [Tailwind color palette](https://tailwindcss.com/docs/colors) by using the class: `breadcrumb-[color]`.

<div class="flex flex-col gap-3">
    <!-- #region customColors -->
    <div class="breadcrumb breadcrumb-green-500">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-amber-500">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-yellow-500">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <div class="breadcrumb breadcrumb-red-500">
        <a href="#" class="breadcrumb-link breadcrumb-icon-home"></a>
        <a href="#foo" class="breadcrumb-link">Foo</a>
        <a href="#foo/bar" class="breadcrumb-link active">Bar</a>
    </div>
    <!-- #endregion customColors -->
</div>

::: details Show Code
<<< ./index.md#customColors{html}
:::