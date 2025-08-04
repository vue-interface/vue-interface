<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="flex gap-2 items-center justify-center py-4 text-2xl">
        <RouterLink
            class="hover:text-blue-500 hover:underline"
            to="/">
            Home
        </RouterLink>
        <RouterLink
            class="hover:text-blue-500 hover:underline"
            to="/test">
            Test
        </RouterLink>
    </div>
    <div class="container mx-auto">
        <RouterView />
    </div>
</template>