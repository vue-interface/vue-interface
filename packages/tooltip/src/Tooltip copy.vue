<script lang="ts" setup>
import { createPopper, type Instance, type Offsets, type OptionsGeneric } from '@popperjs/core';
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps<{
    offset?: Offsets,
    popper?: OptionsGeneric<unknown>,
    placement?: string,
    target: Element,
    title?: string,
    show?: boolean,
    top?: boolean,
    bottom?: boolean,
    left?: boolean,
    right?: boolean
}>();

const el = ref<HTMLElement>();
const arrow = ref<HTMLElement>();
const currentShow = ref(false);
const popperInstance = ref<Instance>();

const placement = computed(() => {
    if(props.placement) {
        return props.placement;
    }

    if(props.bottom) {
        return 'bottom';
    }

    if(props.left) {
        return 'left';
    }

    if(props.right) {
        return 'right';
    }

    return 'top';
});

const tooltipClasses = computed(() => {
    return {
        show: currentShow,
        [`bs-tooltip-${placement.value}`]: true
    };
});

function open() {
    currentShow.value = true;
}

function close() {
    currentShow.value = false;
}

defineExpose({
    open, close
});

onMounted(() => {
    if(!el.value) {
        return;
    }

    popperInstance.value = createPopper(props.target, el.value, Object.assign({
        placement: placement.value,
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [props.offset?.x ?? 0, props.offset?.y ?? 6]
                },
            },
            {
                name: 'arrow',
                options: {
                    element: arrow.value,
                },
            },
        ],
    }, props.popper));

    nextTick(() => {
        currentShow.value = props.show;
    });
});

onBeforeUnmount(()=> {
    popperInstance.value && popperInstance.value.destroy();
});
</script>

<template>
    <div
        ref="el"
        class="tooltip"
        :class="tooltipClasses"
        role="tooltip">
        <div
            ref="arrow"
            class="tooltip-arrow" />
        <div
            ref="inner"
            class="tooltip-inner">
            <slot>{{ title }}</slot>
        </div>
    </div>
</template>

<style>
.tooltip:not(.show) {
    z-index: -1;
}
</style>