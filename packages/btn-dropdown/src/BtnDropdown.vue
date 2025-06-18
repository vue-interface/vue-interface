<script setup lang="ts">
import BtnDropdownSingle from './BtnDropdownSingle.vue';
import BtnDropdownSplit from './BtnDropdownSplit.vue';
import { BtnDropdownEvents, BtnDropdownProps } from './useDropdownHandler';

const props = withDefaults(defineProps<{
    split?: boolean
} & BtnDropdownProps>(), {
    split: false,
    caret: true
});

const emit = defineEmits<BtnDropdownEvents>();
</script>

<template>
    <Component
        :is="!split ? BtnDropdownSingle : BtnDropdownSplit"
        v-bind="props"
        @click="(...args) => emit('click', ...args)"
        @click-toggle="(...args) => emit('clickToggle', ...args)"
        @show="(...args) => emit('show', ...args)"
        @hide="(...args) => emit('hide', ...args)">
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