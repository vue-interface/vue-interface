---
title: Pagination
---

<script setup>
import '../index.css'
import Pagination from '../src/Pagination.vue';
import { ref, onMounted } from 'vue'

const page = ref(1)
const pageNum = 1

onMounted(() => {
    setTimeout(() => {
        page.value = 50
    }, 1000)
})    
</script>

# Pagination

The `pagination` component provides flexible and customizable pagination control with customizable sizes, colors, and states.

## Basic Usage

::: raw
<pagination :page="1" :total-pages="100" class="mb-3"></pagination>
:::

<!-- Issues:
.vp-doc ul {
    list-style: disc;
} 

all of .vp-doc a {}

wrapping it in raw gets rid of the color
-->