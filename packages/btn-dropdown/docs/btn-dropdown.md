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

The `btn-activity` component provides an interactive button with built-in activity indicators for async operations. It extends the standard [button](/packages/btn/docs/btn), [button-group](/packages/btn/docs/btn-group), and [dropdown-menu](/packages/dropdown-menu/docs/dropdown-menu) components to create these buttons.

## Basic Usage

<btn-dropdown label="Dropdown" @click-toggle="onToggle">
    <a href="#/test" @click="onClickItem">Action</a>
    <a href="#">Another Action</a>
    <hr>
    <a href="#">Something else here</a>
</btn-dropdown>