<script lang="ts" setup>
import { arrow, autoUpdate, flip as flipFn, FlipOptions, MaybeElement, offset as offsetFn, OffsetOptions, ReferenceElement, useFloating, UseFloatingOptions } from '@floating-ui/vue';
import { computed, isRef, onUnmounted, Ref, ref, shallowReadonly, ShallowRef, Teleport, useTemplateRef, watchEffect } from 'vue';

export type TooltipProps = {
    title?: string;
    show?: boolean;
    target?: Ref<MaybeElement<ReferenceElement>> | ReferenceElement;
    placement?: UseFloatingOptions['placement'];
    strategy?: UseFloatingOptions['strategy'];
    middleware?: (arrow: Readonly<ShallowRef<HTMLDivElement | null>>) => UseFloatingOptions['middleware'];
    flip?: FlipOptions;
    offset?: OffsetOptions;
};

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'top',
    middleware: undefined,
    strategy: undefined,
    flip: undefined,
    offset: undefined,
});

defineSlots<{
    default: () => void
}>();

const tooltipEl = useTemplateRef('tooltipEl');
const arrowEl = useTemplateRef('arrowEl');
const isShowing = ref(false);
const hash = Math.random().toString(36).slice(2, 12);

const targetEl = isRef(props.target)
    ? props.target
    : shallowReadonly(ref(props.target));

const id = computed(() => {
    if(!(targetEl.value instanceof Element)) {
        return;
    }

    return targetEl.value.getAttribute('data-tooltip-id');
})


watchEffect(() => {
    if(!targetEl.value || id.value) {
        return;
    }

    if(targetEl.value instanceof Element) {
        targetEl.value.setAttribute('data-tooltip-id', hash);
        targetEl.value.addEventListener('mouseover', show);
        targetEl.value.addEventListener('mouseout', hide);
    }
});

watchEffect(() => {
    isShowing.value = props.show;
});

const dynamicOffset = computed<OffsetOptions>(() => {
    if (props.offset) {
        return props.offset;
    }

    return () => {
        const { height } = getComputedStyle(arrowEl.value);

        return {
            mainAxis: parseInt(height.replace('px', '')),
        }
    }
});

const { floatingStyles, middlewareData, placement } = useFloating(targetEl, tooltipEl, {
    placement: props.placement,
    middleware: props.middleware?.(arrowEl) ?? [
        flipFn(props.flip),
        offsetFn(dynamicOffset.value),
        arrow({
            element: arrowEl
        }),
    ],
    whileElementsMounted: autoUpdate
});

const tooltipClasses = computed(() => {
    return {
        show: isShowing.value
    };
});

type Side = 'bottom' | 'left' | 'top' | 'right';

const side = computed(() => placement.value.split('-')[0] as Side);

const arrowPosition = computed(() => {
    return {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right'
    }[side.value] as Side;
});

const arrowRotation = computed<Record<Side,string>>(() => ({
    top: 'rotate(225deg)',
    right: 'rotate(-45deg)',
    bottom: 'rotate(45deg)',
    left: 'rotate(135deg)',
}));

function show() {
    isShowing.value = true;
}

function hide() {
    isShowing.value = false;
}

onUnmounted(() => {
    if(targetEl.value instanceof Element) {
        targetEl.value.removeAttribute('data-tooltip-id');
    }
})

defineExpose({
    show,
    hide,
    tooltipEl,
    arrowEl,
    isShowing,
    hash,
})
</script>

<template>
    <Teleport to="body">
        <div
            ref="tooltipEl"
            class="tooltip"
            role="tooltip"
            :data-tooltip-id="hash"
            :class="tooltipClasses"
            :style="floatingStyles">
            <div
                ref="arrowEl"
                class="tooltip-arrow"
                :style="{
                    transform: arrowRotation[arrowPosition],
                    ...Object.assign({
                        left:
                            middlewareData.arrow?.x != null
                                ? `${middlewareData.arrow.x}px`
                                : '',
                        top:
                            middlewareData.arrow?.y != null
                                ? `${middlewareData.arrow.y}px`
                                : ''
                    }, {
                        [arrowPosition]: `calc(${-(arrowEl?.offsetWidth ?? 0) / 2}px)`
                    })
                }" />
            <div
                ref="inner"
                class="tooltip-inner">
                <slot>{{ title }}</slot>
            </div>
        </div>
    </Teleport>
</template>