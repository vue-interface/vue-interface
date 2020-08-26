<template>
    <div class="activity-indicator" :class="classes" :style="style">
        <div class="activity-indicator-content">
            <component :is="component" class="mx-auto" />
            <div v-if="label" class="activity-indicator-label">
                {{ label }}
            </div>
        </div>
    </div>
</template>

<script>
import ComponentRegistry from '@vue-interface/component-registry';
import { unit, prefix, kebabCase } from '@vue-interface/utils';
import registry from './registry';

export default {

    name: 'ActivityIndicator',

    props: {

        absolute: Boolean,

        center: Boolean,

        label: String,

        size: {
            type: String,
            default: 'md',
            validator(value) {
                return [
                    'activity-indicator-xs',
                    'activity-indicator-sm',
                    'activity-indicator-md',
                    'activity-indicator-lg',
                    'activity-indicator-xl',
                ].indexOf(prefix(value, 'activity-indicator')) > -1;
            }
        },

        registry: {
            type: ComponentRegistry,
            default() {
                return registry;
            }
        },

        type: {
            type: String,
            required: true
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    computed: {

        classes() {
            return {
                'activity-indicator-center': this.center,
                'activity-indicator-absolute': this.absolute,
                [prefix(this.size, 'activity-indicator')]: true
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
        },

        component() {
            return () => {
                const component = registry.get(kebabCase(this.type));
                
                if(component instanceof Promise) {
                    return component;
                }

                if(typeof component === 'function') {
                    return component();
                }
            
                return Promise.resolve(component);
            };
        }
    }

};
</script>

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
