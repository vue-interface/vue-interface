<script lang="ts" setup>

defineProps<{
    feedback?: string|string[]
}>();
</script>

<template>
    <slot
        v-for="item of (Array.isArray(feedback) ? feedback : [feedback])"
        :feedback="item" />
</template>