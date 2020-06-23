<template>
    <div class="activity-indicator" :class="classes" :style="style">
        <div class="activity-indicator-content">
            <component :is="type" class="mx-auto" />
            <div v-if="label" class="activity-indicator-label">
                {{ label }}
            </div>
        </div>
    </div>
</template>

<script>
import { unit, prefix, kebabCase } from '@vue-interface/utils';

export default {

    name: 'ActivityIndicator',

    components: {
        Chase: () => import(/* webpackChunkName: 'activity-indicator-chase' */ './types/Chase'),
        CircleFade: () => import(/* webpackChunkName: 'activity-indicator-circle-fade' */ './types/CircleFade'),
        CircleOrbit: () => import(/* webpackChunkName: 'activity-indicator-circle-orbit' */ './types/CircleOrbit'),
        CircleTrail: () => import(/* webpackChunkName: 'activity-indicator-circle-trail' */ './types/CircleTrail'),
        Dots: () => import(/* webpackChunkName: 'activity-indicator-dots' */ './types/Dots'),
        DoublePulse: () => import(/* webpackChunkName: 'activity-indicator-double-pulse' */ './types/DoublePulse'),
        Facebook: () => import(/* webpackChunkName: 'activity-indicator-facebook' */ './types/Facebook'),
        Grid: () => import(/* webpackChunkName: 'activity-indicator-grid' */ './types/Grid'),
        Pulse: () => import(/* webpackChunkName: 'activity-indicator-pulse' */ './types/Pulse'),
        Spinner: () => import(/* webpackChunkName: 'activity-indicator-spinner' */ './types/Spinner'),
        Square: () => import(/* webpackChunkName: 'activity-indicator-square' */ './types/Square'),
        SquareFold: () => import(/* webpackChunkName: 'activity-indicator-square-fold' */ './types/SquareFold'),
        SquareOrbit: () => import(/* webpackChunkName: 'activity-indicator-square-orbit' */ './types/SquareOrbit')
    },

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

        type: {
            type: String,
            default: 'dots',
            validator(value) {
                return [
                    'activity-indicator-chase',
                    'activity-indicator-circle-fade',
                    'activity-indicator-circle-orbit',
                    'activity-indicator-circle-trail',
                    'activity-indicator-dots',
                    'activity-indicator-double-pulse',
                    'activity-indicator-facebook',
                    'activity-indicator-grid',
                    'activity-indicator-pulse',
                    'activity-indicator-spinner',
                    'activity-indicator-square',
                    'activity-indicator-square-fold',
                    'activity-indicator-square-orbit',
                ].indexOf(prefix(value, 'activity-indicator')) > -1;
            }
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
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
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
