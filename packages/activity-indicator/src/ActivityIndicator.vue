<script setup lang="ts">
import { computed, inject, type Component } from 'vue';

export type ActivityIndicatorSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type ActivityIndicatorProps = {
  absolute?: boolean
  center?: boolean
  size?: ActivityIndicatorSize
  type: Component | string
  height?: string | number
  maxHeight?: string | number
  minHeight?: string | number
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
}

const props = defineProps<ActivityIndicatorProps>()

// Inject the indicators registry from the parent/app
const indicators = inject<Record<string, Component>>('activityIndicators', {})

function unit(value: string | number | null | undefined | boolean, uom = 'px'): string | undefined {
  return value !== null
    && value !== undefined
    && value !== false
    && isFinite(Number(value)) ? `${value}${uom}` : undefined
}

const classes = computed(() => ({
  'activity-indicator-center': props.center,
  'activity-indicator-absolute': props.absolute,
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
}))

const style = computed(() => ({
  width: unit(props.width),
  maxWidth: unit(props.maxWidth),
  minWidth: unit(props.minWidth),
  height: unit(props.height),
  maxHeight: unit(props.maxHeight),
  minHeight: unit(props.minHeight)
}))

const component = computed((): Component | undefined => {
  if (typeof props.type === 'string') {
    const comp = indicators[props.type]
    if (!comp) {
      console.warn(`ActivityIndicator: No component found for type "${props.type}". Available types:`, Object.keys(indicators))
    }
    return comp
  }
  return props.type
})
</script>

<template>
  <div
    class="activity-indicator"
    :class="classes"
    :style="style"
  >
    <div class="activity-indicator-content">
      <Component
        :is="component"
        class="mx-auto"
      />
    </div>
  </div>
</template>