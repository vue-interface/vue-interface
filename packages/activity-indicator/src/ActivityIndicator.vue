<script setup lang="ts">
import { computed, type Component } from 'vue'

// Import all your indicators directly here
import Chase from './types/Chase.vue' // adjust paths as needed
import CircleFade from './types/CircleFade.vue'
import CircleOrbit from './types/CircleOrbit.vue'
import CircleTrail from './types/CircleTrail.vue'
import Dots from './types/Dots.vue'
import DoublePulse from './types/DoublePulse.vue'
import Facebook from './types/Facebook.vue'
import Grid from './types/Grid.vue'
import Pulse from './types/Pulse.vue'
import Spinner from './types/Spinner.vue'
import Spotify from './types/Spotify.vue'
import Square from './types/Square.vue'
import SquareFold from './types/SquareFold.vue'
import SquareOrbit from './types/SquareOrbit.vue'

// Built-in indicator mapping
const INDICATORS: Record<string, Component> = {
  'chase': Chase,
  'circle-fade': CircleFade,
  'circle-orbit': CircleOrbit,
  'circle-trail': CircleTrail,
  'dots': Dots,
  'double-pulse': DoublePulse,
  'facebook': Facebook,
  'grid': Grid,
  'pulse': Pulse,
  'spinner': Spinner,
  'spotify': Spotify,
  'square': Square,
  'square-fold': SquareFold,
  'square-orbit': SquareOrbit
}

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
    const comp = INDICATORS[props.type]
    if (!comp) {
      console.warn(`ActivityIndicator: No component found for type "${props.type}". Available types:`, Object.keys(INDICATORS))
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