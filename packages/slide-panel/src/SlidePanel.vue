<script setup lang="ts">
import { computed, ref, toRaw, useAttrs, watchEffect, Ref } from 'vue';
import SlidePanelClose from './SlidePanelClose.vue';
import { containers, defaultContainerName, type SlidePanel } from './registry';

const props = withDefaults(defineProps<{
    container?: string;
    name: string;
    defaultOpen?: boolean;
}>(), {
    container: defaultContainerName,
    defaultOpen: false
});

defineOptions({
    inheritAttrs: false
});

const emit = defineEmits<{
    (e: 'open' | 'close'): void
}>();

const el = ref<HTMLDivElement>();
const registry = containers[props.container];
const isOpen = ref(false);
const isTopSlide = computed(() => registry.topSlide.value === el.value);

if(!registry) {
    throw new Error(`There is no container registered to "${props.container}".`);
}

function open() {
    isOpen.value = true;
    
    emit('open');
}

function close() {
    isOpen.value = false;

    emit('close');
}

function onClickPanel() {
    if(isTopSlide.value || ! el.value) {
        return; 
    }

    const index = registry.elements.value.indexOf(el.value);
    
    for(const key in registry.panels.value) {
        const { el, close } = toRaw(registry.panels.value[key]);

        if(registry.elements.value.indexOf((el.value)) > index) {
            close();
        }
    }
}

registry.panels.value[props.name] = {
    open,
    close,
    el: el as Ref<HTMLDivElement>,
    isOpen,
    isTopSlide,
};

defineExpose({
    open,
    close,
    el,
    isOpen,
    isTopSlide,
});

defineSlots<{
    default(props: {
        open: SlidePanel['open'],
        close: SlidePanel['close']
    }): void
}>();

watchEffect(() => {
    isOpen.value = props.defaultOpen;
});
</script>

<template>
    <Teleport :to="`#${container}`">
        <Transition>
            <div
                v-if="isOpen"
                ref="el"
                class="slide-panel"
                :class="{
                    'top-slide': isTopSlide,
                    'slide-panel-inactive': !isTopSlide
                }"
                v-bind="useAttrs()"
                @click="!isTopSlide && onClickPanel()">
                <SlidePanelClose
                    class="absolute right-12 top-4 z-10"
                    @click="close" />
                <div class="relative  pr-12">
                    <slot v-bind="{open, close}" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>