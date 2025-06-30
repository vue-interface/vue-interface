<script setup lang="ts">
import { computed, type Component } from 'vue';

export type ActivityIndicatorSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type ActivityIndicatorProps = {
  size?: ActivityIndicatorSize
  type: Component
}

const props = defineProps<ActivityIndicatorProps>();

const classes = computed(() => ({
    'activity-indicator-2xs': props.size === '2xs',
    'activity-indicator-xs': props.size === 'xs',
    'activity-indicator-sm': props.size === 'sm',
    'activity-indicator-md': props.size === 'md',
    'activity-indicator-lg': props.size === 'lg',
    'activity-indicator-xl': props.size === 'xl',
    'activity-indicator-2xl': props.size === '2xl',
    'activity-indicator-3xl': props.size === '3xl',
    'activity-indicator-4xl': props.size === '4xl',
    'activity-indicator-5xl': props.size === '5xl',
}));
</script>

<template>
    <div
        class="activity-indicator"
        :class="classes">
        <div class="activity-indicator-content">
            <Component
                :is="type"
                class="mx-auto" />
        </div>
    </div>
</template>