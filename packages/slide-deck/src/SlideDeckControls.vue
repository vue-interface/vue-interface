<script lang="ts">
import type { VNode } from 'vue';

export default {

    props: {

        /**
         * The active key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: Number,
            default: 0
        },

        /**
         * An array of vnodes.
         *
         * @type {Array}
         */
        slots: {
            type: Array,
            required: true
        }

    },

    computed: {
        context() {
            return this;
        }
    },

    methods: {

        isActive(vnode: VNode, i: number) {
            if(vnode.key === this.active) {
                return true;
            }
            
            if(i === this.active) {
                return true;
            }

            return false;
        },

        onClick(event: Event, slide: VNode) {
            this.$emit('click', event, slide);
        }

    }

};
</script>

<template>
    <div class="slide-deck-controls">
        <a
            href="#"
            class="slide-deck-control-icon"
            :class="{'is-active': isActive(slide, active)}"
            @click.prevent="onClick($event, slide)">
            <slot v-bind="Object.assign({ slide, active }, context)">&bull;</slot>
        </a>
    </div>
</template>

<style>
.slide-deck-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
}

.slide-deck-controls.absolute {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.slide-deck-controls .slide-deck-control-icon {
    font-size: 2em;
    padding: .25em .15em;
}

.slide-deck-controls > a:hover {
    text-decoration: none;
}

.slide-deck-controls :not(:last-child) {
    margin-right: .5rem;
}

.slide-deck-controls .slide-deck-control-icon.is-active {
    color: #007bff;
}
</style>
