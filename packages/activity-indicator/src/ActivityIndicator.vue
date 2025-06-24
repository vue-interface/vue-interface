<script setup lang="ts">
import { computed, inject, toRaw, type Component } from 'vue'
import type { ComponentRegistry } from '@vue-interface/component-registry'
import { registry } from './registry'

export type ActivityIndicatorProps = {
  absolute?: boolean
  center?: boolean
  size?: string
  registry?: string
  type: Component | string
  height?: string | number
  maxHeight?: string | number
  minHeight?: string | number
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
}

const props = defineProps<ActivityIndicatorProps>()

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

function componentFromRegistry(key: string): Component | undefined {
  try {
    return inject<ComponentRegistry>(props.registry || 'indicators', registry)?.get(key)
  } catch (e) {
    // Ignore the error
    return undefined
  }
}

const component = computed((): Component | undefined => {
  if (typeof props.type === 'string') {
    return componentFromRegistry(props.type)
  }
  return toRaw(props.type)
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