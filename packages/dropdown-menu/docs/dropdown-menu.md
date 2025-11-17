---
title: Dropdown Menu
---

<script setup>
import '../demo.css'
import { ref, onMounted } from 'vue'

const item = ref('Nothing')

onMounted(() => {
  document.querySelectorAll('.dropdown-item').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const text = link.textContent.trim()
      if (['Item #2', 'Item #3', 'Item #4'].includes(text)) {
        item.value = text
      }
    })
  })
})
</script>

# Dropdown Menu

The `dropdown-menu` component displays a list of actionable or informational items, similar to traditional dropdown lists. It supports headers, dividers, links, and plain text items.

## Basic Usage

<span>{{ item }} was clicked!</span>

::: raw
<div>
    <!-- #region basicUsage -->
    <div class="dropdown-menu show relative">
        <h3 class="dropdown-header">Vue Router</h3>
        <h3 class="dropdown-header">Links</h3>
        <a href="#" class="dropdown-item active">Item #2</a>
        <a href="#" class="dropdown-item">Item #3</a>
        <div class="dropdown-item-text">Plain Text</div>
        <hr class="dropdown-divider" />
        <a href="#" class="dropdown-item">Item #4</a>
        <h3 class="dropdown-header">Heading Element</h3>
        <div class="dropdown-item"><i>italic text</i></div>
        <div class="dropdown-item"><b>bold text</b></div>
        <div class="dropdown-item"><em>strong text</em></div>
        <div class="dropdown-item"><sub>subscripted text</sub></div><br>
        <div class="dropdown-item"><sup>superscripted text</sup></div>
        <div class="dropdown-item"><small>small text</small></div>
        <div class="dropdown-item"><del>deleted text</del></div>
        <div class="dropdown-item"><ins>inserted text</ins></div>
        <div class="dropdown-item"><blockquote>quoted text</blockquote></div>
        <div class="dropdown-item"><q>short quoted text</q></div>
        <div class="dropdown-item"><cite>cited text</cite></div>
        <div class="dropdown-item"><address>address</address></div>
        <div class="dropdown-item"><abbr title="inserted text">inserted text</abbr></div>
        <div class="dropdown-item"><code>code snippet</code></div>
        <div class="dropdown-item"><mark>marked text</mark></div>
        <div class="dropdown-item-plain">Unstyled text</div>
    </div>
    <!-- #endregion basicUsage -->
</div>
:::

<<< @/packages/dropdown-menu/docs/dropdown-menu.md#basicUsage{html}
