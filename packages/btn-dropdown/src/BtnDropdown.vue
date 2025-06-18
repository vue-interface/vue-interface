<script setup lang="ts">
import BtnDropdownSingle from './BtnDropdownSingle.vue';
import BtnDropdownSplit from './BtnDropdownSplit.vue';
import { BtnDropdownProps } from './useDropdownHandler';

const props = withDefaults(defineProps<{
    split?: boolean
} & BtnDropdownProps>(), {
    split: false,
    caret: true
});
</script>

<template>
    <Component
        :is="!split ? BtnDropdownSingle : BtnDropdownSplit"
        v-bind="props">
        <template #button="slot">
            <slot
                name="button"
                v-bind="slot" />
        </template>
        <template #toggle="slot">
            <slot
                name="toggle"
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