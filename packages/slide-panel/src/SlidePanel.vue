<script setup lang="ts">
import { computed, ref, toRaw, useAttrs, watchEffect } from 'vue';
import SlidePanelClose from './SlidePanelClose.vue';
import { containers, defaultContainerName, type SlidePanel } from './registry';

const props = withDefaults(defineProps<{
    container?: string;
    name: string;
    open?: boolean;
}>(), {
    container: defaultContainerName,
    open: false
});

defineOptions({
    inheritAttrs: false
});

const emit = defineEmits<{
    (e: 'open'),
    (e: 'close'),
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
    el,
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
    }): any
}>();

watchEffect(() => {
    isOpen.value = props.open;
});
</script>

<template>
    <Teleport :to="`#${container}`">
        <Transition>
            <div
                v-if="isOpen"
                ref="el"
                class="shadow-xl min-w-[6rem] border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 duration-500 overflow-auto p-5"
                :class="{
                    'top-slide': isTopSlide,
                    'bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 hover:border-neutral-300 hover:cursor-pointer': !isTopSlide
                }"
                v-bind="useAttrs()"
                @click="!isTopSlide && onClickPanel()">
                <SlidePanelClose
                    class="fixed right-2 top-4 z-10"
                    @click="close" />
                <div class="relative  pr-12">
                    <slot v-bind="{open, close}" />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>