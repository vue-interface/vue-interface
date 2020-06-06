<template>
    <div class="activity-indicator" :class="classes" :style="style">
        <div class="activity-indicator-content">
            <component :is="type" :class="{['activity-indicator-center']: center}" />
            <div v-if="label" class="activity-indicator-label">
                {{ label }}
            </div>
        </div>
    </div>
</template>

<script>
import { kebabCase } from 'lodash-es';
import { unit, prefix } from '@vue-interface/utils';

import Chase from './types/Chase';
import CircleFade from './types/Circle';
import Dots from './types/Dots';
import Facebook from './types/Facebook';
import Grid from './types/Grid';
import Spinner from './types/Spinner';
import Square from './types/Square';

export default {

    name: 'ActivityIndicator',

    components: {
        Chase,
        CircleFade,
        Dots,
        Facebook,
        Grid,
        Spinner,
        Square
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
                    'activity-indicator-dots',
                    'activity-indicator-facebook',
                    'activity-indicator-grid',
                    'activity-indicator-spinner',
                    'activity-indicator-square',
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

<style lang="postcss">
.activity-indicator-label {
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
}
.activity-indicator-absolute {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
/*
.activity-indicator-center {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.center-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .center-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
*/
</style>
