<script lang="ts">
import { defineComponent, VNode } from 'vue';
import Slide from './Slide.vue';
// import SlideDeckControls from './SlideDeckControls.vue';

export default defineComponent({

    components: {
        Slide,
        // SlideDeckControls
    },

    props: {

        /**
         * Additional attributes to be passed to the slots.
         */
        attrs: {
            type: Object,
            default: () => ({})
        },

        /**
         * The slide key or index that should show.
         */
        active: {
            type: Number,
            default: 0
        },

        /**
         * Automatically resize the height of the slide so it animates from one
         * slide to the next.
         */
        autoResize: {
            type: Boolean,
            default: true
        },

        /**
         * Show the slide-deck controls to change the slide.
         */
        controls: Boolean,

        /**
         * Additional props to be passed to the slots.
         */
        props: {
            type: Object,
            default: () => ({})
        },

        /**
         * Pass the slots as a prop instead of using <slot />.
         */
        slots: {
            type: Array,
            default: undefined
        }
    },

    emits: [
        'before-enter',
        'enter',
        'after-enter',
        'before-leave',
        'leave',
        'after-leave'
    ],

    data() {
        return {
            currentActive: this.active,
            direction: 'forward',
            maxHeight: undefined,
            mounted: false,
            lastSlide: null,
            sliding: false,
        };
    },
    
    watch: {

        currentActive(value: number, oldValue: number): void {
            this.lastSlide = oldValue;
            this.direction = (
                this.findIndex(oldValue) > this.findIndex(value)
            ) ? 'backward' : 'forward';
        }
    },
    
    mounted(): void {
        this.$nextTick(() => {
            this.mounted = true;
            this.$emit('enter', this.slot());
        });
    },

    methods: {

        findIndex(key: string|number): number {
            return this.vnodes().findIndex((vnode: VNode, i: number) => {
                if(vnode.key === key) {
                    return true;
                }
                
                if(i === key) {
                    return true;
                }

                return false;
            });
        },

        find(key: string|number): VNode|undefined {
            return this.vnodes()[this.findIndex(key)];
        },

        first(): void {
            this.goto(0);
        },

        last(): void {
            this.goto(this.vnodes().length - 1);
        },

        goto(key: number): void {
            if(!this.sliding) {
                this.currentActive = Math.max(0, key);
            }
        },

        next(): void {
            if(!this.sliding) {
                this.currentActive = Math.min(
                    this.findIndex(this.currentActive) + 1, this.vnodes().length - 1
                );
            }
        },

        prev(): void {
            if(!this.sliding) {
                this.currentActive = Math.max(
                    this.findIndex(this.currentActive) - 1, 0
                );
            }
        },

        resize(el: HTMLElement): void {
            const height = getComputedStyle(el).height;

            this.maxHeight = height === '0x'
                ? this.maxHeight
                : height;
        },
        
        slot(): VNode {
            return this.find(this.currentActive);
        },

        vnodes(): VNode[] {
            return (this.slots || this.$slots.default(this))
                .map((slot: VNode, key: number) => {
                    slot.props = Object.assign(
                        {}, slot.props, this.props, this.attrs
                    );                                        
                                        
                    return Object.assign(slot, {
                        key
                    });
                });
        },

        onClickControl(e: Event, vnode: VNode): void {
            if(!this.sliding) {
                this.goto(vnode);
            }
        },

        onBeforeLeave(el: HTMLElement): void {
            this.autoResize && this.resize(el);
            this.$emit(
                'before-leave',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onBeforeEnter(): void {
            this.sliding = true;
            this.$emit(
                'before-enter',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onEnter(el: HTMLElement): void {
            this.$nextTick(() => {
                this.autoResize && this.resize(el);
                this.$emit(
                    'enter',
                    this.slot(),
                    this.find(this.lastSlide)
                );
            });
        },

        onAfterEnter(): void {
            this.$emit(
                'after-enter',
                this.slot(),
                this.find(this.lastSlide)
            );
        },

        onLeave(): void {
            this.$nextTick(() => {
                this.$emit(
                    'leave',
                    this.slot(),
                    this.find(this.lastSlide)
                );
            });
        },

        onAfterLeave(): void {
            this.sliding = false;

            this.$nextTick(() => {
                this.maxHeight = null;
                this.$emit(
                    'after-leave',
                    this.slot(),
                    this.find(this.lastSlide)
                );
            });
        }

    }

});
</script>

<template>
    <div
        class="slide-deck"
        :class="{ sliding }">
        <slot
            name="top"
            :active="currentActive" />
        <div
            ref="content"
            class="slide-deck-content"
            :class="{ [direction]: true }"
            :style="{ maxHeight }">
            <Transition
                :name="`slide-${direction}`"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                @after-enter="onAfterEnter"
                @before-leave="onBeforeLeave"
                @leave="onLeave"
                @after-leave="onAfterLeave">
                <KeepAlive>
                    <Slide
                        ref="slide"
                        :key="currentActive"
                        :node="find(currentActive)" />
                </KeepAlive>
            </Transition>
        </div>
        <slot
            name="middle"
            :active="currentActive" />
        <!-- <slot
            name="controls"
            :active="currentActive">
            <slide-deck-controls
                v-if="controls && mounted"
                ref="controls"
                :slots="slots()"
                :active="currentActive"
                @click="onClickControl">
                <template #default="context">
                    <slot
                        name="bullet"
                        v-bind="context" />
                </template>
            </slide-deck-controls>
        </slot> -->
        <slot
            name="bottom"
            :active="currentActive" />
    </div>
</template>

<style>
.slide-deck {
    height: auto;
    position: relative;
}

.slide-deck.sliding {
    overflow: hidden;
}

.slide-deck .slide-deck-content {
    display: flex;
    flex-wrap: nowrap;
    transition-property: max-height;
    transition-duration: 250ms;
    transition-timing-function: ease-in-out;
}

.slide-deck .slide-deck-content.forward {
    flex-direction: row;
}

.slide-deck .slide-deck-content.backward {
    flex-direction: row-reverse;
}

.slide-deck .slide-deck-slide {
    width: 100%;
    flex-shrink: 0;
    align-self: flex-start;
}

.slide-forward-leave-active,
.slide-forward-enter-active,
.slide-backward-leave-active,
.slide-backward-enter-active {
    transition: all 250ms ease-in-out;
}

.slide-deck .slide-forward-enter-to,
.slide-deck .slide-forward-leave-to { 
    transform: translateX(-100%);
}

.slide-deck .slide-backward-enter-to,
.slide-deck .slide-backward-leave-to { 
    transform: translateX(100%);
}
</style>
