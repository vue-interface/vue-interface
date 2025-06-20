<script lang="ts">
import { ComponentRegistry } from '@vue-interface/component-registry';
import { defineComponent, inject, toRaw } from 'vue';
import { registry } from './registry';

function unit(value: any, uom = 'px'): string|undefined {
    return value !== null
        && value !== undefined
        && value !== false
        && isFinite(value) ? `${value}${uom}` : value;
}

export default defineComponent({

    props: {

        absolute: Boolean,

        center: Boolean,

        label: {
            type: String,
            default: undefined
        },

        size: {
            type: String,
            default: 'md'
        },

        registry: {
            type: String,
            default: 'indicators'
        },

        type: {
            type: [Object, String],
            required: true
        },

        height: {
            type: [String, Number],
            default: undefined
        },

        maxHeight: {
            type: [String, Number],
            default: undefined
        },

        minHeight: {
            type: [String, Number],
            default: undefined
        },

        width: {
            type: [String, Number],
            default: undefined
        },

        maxWidth: {
            type: [String, Number],
            default: undefined
        },

        minWidth: {
            type: [String, Number],
            default: undefined
        }
    },

    data: () => ({
        is: null
    }),

    computed: {

        classes() {
            return {
                'activity-indicator-center': this.center,
                'activity-indicator-absolute': this.absolute,
                [this.size && `activity-indicator-${this.size}`]: !!this.size
            };
        },

        style() {
            return {
                width: unit(this.width),
                maxWidth: unit(this.maxWidth),
                minWidth: unit(this.minWidth),
                height: unit(this.height),
                maxHeight: unit(this.maxHeight),
                minHeight: unit(this.minHeight)
            };
        }

    },

    methods: {
        componentFromRegistry(key: string) {
            try {
                return inject<ComponentRegistry>(this.registry || 'indicators', registry)?.get(key);
            }
            catch (e) {
                // Ignore the error
            }
        },
        component() {
            if(typeof this.type === 'string') {
                return this.componentFromRegistry(this.type);
            }

            return toRaw(this.type);
        }
    },

});
</script>

<template>
    <div
        class="activity-indicator"
        :class="classes"
        :style="style">
        <div class="activity-indicator-content">
            <Component
                :is="component()"
                class="mx-auto" />
            <div
                v-if="label"
                class="activity-indicator-label">
                {{ label }}
            </div> 
        </div>
    </div>
</template>

<style>
.activity-indicator-label {
    margin-top: .75rem;
    text-align: center;
}
.activity-indicator-xs {
    font-size: .5rem;
}

.activity-indicator-sm {
    font-size: .75rem;
}

.activity-indicator-md {
    font-size: 1rem;
}
.activity-indicator-lg {
    font-size: 1.25rem;
}
.activity-indicator-xl {
    font-size: 1.75rem;
}
.activity-indicator-center {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
}
.activity-indicator-absolute {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
