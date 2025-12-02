<script setup lang="ts">
import { computed, ref, watch, nextTick, watchEffect, VNode, useSlots } from 'vue';
import Slide from './Slide.vue';

export type SlideDeckProps = {
    attrs?: Record<string, unknown>;
    active?: number;
    autoResize?: boolean;
    controls?: boolean;
    props?: Record<string, unknown>;
    modelValue?: number;
};

const props = withDefaults(defineProps<SlideDeckProps>(), {
    attrs: () => ({}),
    active: 0,
    autoResize: true,
    controls: false,
    props: () => ({}),
    modelValue: 0
});

const emit = defineEmits<{
    'before-enter': [current: VNode | undefined, previous: VNode | undefined];
    'enter': [current: VNode | undefined, previous: VNode | undefined];
    'after-enter': [current: VNode | undefined, previous: VNode | undefined];
    'before-leave': [current: VNode | undefined, previous: VNode | undefined];
    'leave': [current: VNode | undefined, previous: VNode | undefined];
    'after-leave': [current: VNode | undefined, previous: VNode | undefined];
    'update:modelValue': [value: number];
}>();

const slots = useSlots();

const currentActive = ref<number>(0);
const direction = ref<'forward' | 'backward'>('forward');
const maxHeight = ref<string | undefined>(undefined);
const mounted = ref<boolean>(false);
const lastSlide = ref<number | null>(null);
const sliding = ref<boolean>(false);

watchEffect(() => {
    currentActive.value = props.active ?? props.modelValue;
});


watch(currentActive, (value: number, oldValue: number) => {
    lastSlide.value = oldValue;
    direction.value = (
        findIndex(oldValue) > findIndex(value)
    ) ? 'backward' : 'forward';
    emit('update:modelValue', value);
});

// Computed
const classes = computed(() => ({
    sliding: sliding.value
}));

const contentClasses = computed(() => ({
    [direction.value]: true
}));

const { isFirstSlide, isLastSlide, totalSlides } = computed(() => {
    const currentIndex = findIndex(currentActive.value);
    const total = vnodes().length;
    
    return {
        isFirstSlide: currentIndex === 0,
        isLastSlide: currentIndex === total - 1,
        totalSlides: total
    };
}).value;

// Methods
function vnodes(): VNode[] {
    const defaultSlot = slots.default?.({ next, prev, first, last, goto }) || [];
    
    return defaultSlot.map((slot: VNode, key: number) => {
        slot.props = Object.assign(
            {}, slot.props, props.props, props.attrs
        );
        
        return Object.assign(slot, {
            key: slot.key ?? key
        });
    });
}

function findIndex(key: string | number): number {
    return vnodes().findIndex((vnode: VNode, i: number) => {
        if(vnode.key === key) {
            return true;
        }
        
        if(i === key) {
            return true;
        }

        return false;
    });
}

function find(key: string | number): VNode | undefined {
    const index = findIndex(key);
    return index >= 0 ? vnodes()[index] : undefined;
}

function slot(): VNode | undefined {
    return find(currentActive.value);
}

function first(): void {
    goto(0);
}

function last(): void {
    goto(vnodes().length - 1);
}

function goto(key: number): void {
    if(!sliding.value) {
        currentActive.value = Math.max(0, Math.min(key, vnodes().length - 1));
    }
}

function next(): void {
    if(!sliding.value) {
        const nextIndex = findIndex(currentActive.value) + 1;
        if(nextIndex < vnodes().length) {
            currentActive.value = nextIndex;
        }
    }
}

function prev(): void {
    if(!sliding.value) {
        const prevIndex = findIndex(currentActive.value) - 1;
        if(prevIndex >= 0) {
            currentActive.value = prevIndex;
        }
    }
}

function resize(el: Element): void {
    if(!(el instanceof HTMLElement)) return;
    
    const height = getComputedStyle(el).height;

    maxHeight.value = height === '0px'
        ? maxHeight.value
        : height;
}

function onClickControl(_e: Event, vnode: VNode): void {
    if(!sliding.value && typeof vnode.key === 'number') {
        goto(vnode.key);
    }
}

function onBeforeLeave(el: Element): void {
    if(props.autoResize) {
        resize(el);
    }
    const previous = lastSlide.value !== null ? find(lastSlide.value) : undefined;
    emit('before-leave', slot(), previous);
}

function onBeforeEnter(): void {
    sliding.value = true;
    const previous = lastSlide.value !== null ? find(lastSlide.value) : undefined;
    emit('before-enter', slot(), previous);
}

function onEnter(el: Element): void {
    nextTick(() => {
        if(props.autoResize) {
            resize(el);
        }
        const previous = lastSlide.value !== null ? find(lastSlide.value) : undefined;
        emit('enter', slot(), previous);
    });
}

function onAfterEnter(): void {
    const previous = lastSlide.value !== null ? find(lastSlide.value) : undefined;
    emit('after-enter', slot(), previous);
}

function onLeave(): void {
    nextTick(() => {
        const previous = lastSlide.value !== null ? find(lastSlide.value) : undefined;
        emit('leave', slot(), previous);
    });
}

function onAfterLeave(): void {
    sliding.value = false;

    nextTick(() => {
        maxHeight.value = undefined;
        const previous = lastSlide.value !== null ? find(lastSlide.value) : undefined;
        emit('after-leave', slot(), previous);
    });
}

nextTick(() => {
    mounted.value = true;
    emit('enter', slot(), undefined);
});

defineExpose({
    currentActive,
    direction,
    maxHeight,
    mounted,
    lastSlide,
    sliding,
    isFirstSlide,
    isLastSlide,
    totalSlides,
    findIndex,
    find,
    first,
    last,
    goto,
    next,
    prev,
    resize,
    slot,
    vnodes,
    onClickControl
});
</script>

<template>
    <div
        class="slide-deck"
        :class="classes">
        <slot
            name="top"
            :active="currentActive" />
        <div
            ref="content"
            class="slide-deck-content"
            :class="contentClasses"
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
        <slot
            name="bottom"
            :active="currentActive" />
    </div>
</template>