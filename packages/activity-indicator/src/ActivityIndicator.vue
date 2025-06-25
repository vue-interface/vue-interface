<script setup lang="ts">
import { computed, inject, type Component } from 'vue'

export type ActivityIndicatorProps = {
  absolute?: boolean
  center?: boolean
  size?: string
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
  [`activity-indicator-${props.size}`]: !!props.size
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