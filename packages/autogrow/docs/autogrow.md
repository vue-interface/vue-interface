---
title: Autogrow
---

<script setup>
import '../demo.css'
import { vAutogrow } from '../index.ts'
import { ref, onMounted } from 'vue'

const value = ref('Initial value.')

onMounted(() => {
  setTimeout(() => {
    console.log('timeout')
    value.value += '\n\n\nAdding some text for resize...'
  }, 1000)
})
</script>

# Autogrow

The Autogrow directive automatically resizes a [textarea](/packages/textarea-field/docs/textarea-field) to fit its content. It eliminates the need for manual resizing and provides smooth UX for variable-length text inputs.

### Installation

::: code-group
```bash [pnpm]
pnpm i @vue-interface/autogrow
```

```bash [yarn]
yarn add @vue-interface/autogrow
```

```bash [npm]
npm i @vue-interface/autogrow
```
:::

## Basic Usage

<div class="mb-6">
  <!-- #region basic -->
  <textarea v-autogrow rows="6" class="form-control"></textarea>
  <!-- #endregion basic -->
</div>

::: details Show Code
<<< @/packages/autogrow/docs/autogrow.md#basic{html}
:::

## Resize on Update

<div class="mb-6">
  <!-- #region resize-update -->
  <textarea v-model="value" v-autogrow rows="2" class="form-control"></textarea>
  <!-- #endregion resize-update -->
</div>

::: details Show Code
<<< @/packages/autogrow/docs/autogrow.md#resize-update{html}
:::

## With Long Existing Content
    
<!-- #region long-content-->
<textarea v-autogrow rows="6" class="form-control">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi mollis, consectetur urna vel,bibendurisus. Mauris mattis porttitor ligula. Aliquam accumsan ut sapien et consequat. Curabitur in ipsummagna. Nullfacilisi. Nulla egestas pharetra congue. Maecenas condimentum, metus eget commodo lacinia, nullaleo tristiqudolor, sed tempus ligula quam a elit. Aliquam tempus mauris ac dignissim tincidunt. Quisque eufelis magna. Nulldignissim porttitor ipsum, a tristique nunc placerat ut. Mauris dictum ut mi sed pharetra.Nulla elementum cursuaugue, ut porttitor ex commodo eget. Quisque porttitor dictum hendrerit.
    Aenean pharetra arcu vel pellentesque dictum. Nulla ornare malesuada lectus id rhoncus. Vestibulum eget eratvenunc facilisis tristique sit amet at est. Ut convallis eleifend pulvinar. Ut in bibendum ex, at posuereeros. Uporttitor a nisi pellentesque semper. Sed tempus varius consequat. Aenean felis mi, placerat vitaeeuismod eufaucibus vitae metus. Nulla vulputate enim eget tortor maximus, vel blandit ante pulvinar.Maecenas vel liberelementum, vulputate leo eu, elementum turpis. Pellentesque ut mauris vel dolor gravidavehicula vel sit ameorci. Integer id arcu ullamcorper, tincidunt sapien nec, consectetur felis.
</textarea>
<!-- #region long-content-->

::: details Show Code
<<< @/packages/autogrow/docs/autogrow.md#long-content{html}
:::

## Max Height

<!-- #region max-height -->
<textarea v-autogrow="300" rows="6" class="form-control">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi mollis, consectetur urna vel, bibendum risus. Mauris mattis porttitor ligula. Aliquam accumsan ut sapien et consequat. Curabitur in ipsum magna. Nulla facilisi. Nulla egestas pharetra congue. Maecenas condimentum, metus eget commodo lacinia, nulla leo tristique dolor, sed tempus ligula quam a elit. Aliquam tempus mauris ac dignissim tincidunt. Quisque eu felis magna. Nulla dignissim porttitor ipsum, a tristique nunc placerat ut. Mauris dictum ut mi sed pharetra. Nulla elementum cursus augue, ut porttitor ex commodo eget. Quisque porttitor dictum hendrerit.
    Aenean pharetra arcu vel pellentesque dictum. Nulla ornare malesuada lectus id rhoncus. Vestibulum eget erat vel nunc facilisis tristique sit amet at est. Ut convallis eleifend pulvinar. Ut in bibendum ex, at posuere eros. Ut porttitor a nisi pellentesque semper. Sed tempus varius consequat. Aenean felis mi, placerat vitae euismod eu, faucibus vitae metus. Nulla vulputate enim eget tortor maximus, vel blandit ante pulvinar. Maecenas vel libero elementum, vulputate leo eu, elementum turpis. Pellentesque ut mauris vel dolor gravida vehicula vel sit amet orci. Integer id arcu ullamcorper, tincidunt sapien nec, consectetur felis.
</textarea>
<!-- #endregion max-height -->

::: details Show Code
<<< @/packages/autogrow/docs/autogrow.md#max-height{html}
:::