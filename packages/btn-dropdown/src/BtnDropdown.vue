<script setup lang="ts">
import BtnDropdownSingle from './BtnDropdownSingle.vue';
import BtnDropdownSplit from './BtnDropdownSplit.vue';

withDefaults(defineProps<{
    split?: boolean
}>(), {
    split: false
});
</script>

<template>
    <Component
        :is="!split ? BtnDropdownSingle : BtnDropdownSplit"
        :split="split">
        <template #button="slot">
            <slot
                name="button"
                v-bind="slot" />
        </template>
        <template #split="slot">
            <slot
                name="split"
                v-bind="slot" />
        </template>
        <slot />
    </Component>
</template>