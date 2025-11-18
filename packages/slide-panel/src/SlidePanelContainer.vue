<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { containers, createRegistry, defaultContainerName } from './registry';

const props = withDefaults(defineProps<{
    align?: 'left'|'right',
    name?: string
}>(), {
    align: 'right',
    name: defaultContainerName
});

const container = ref<HTMLDivElement>();

const registry = createRegistry();

let onEscCallback: undefined|((e: KeyboardEvent) => void);

watch(registry.topSlide, () => {
    if(!onEscCallback && registry.topSlide.value) {
        window.addEventListener('keyup', onEscCallback = (e) => {
            if(e.key === 'Escape' && registry.topSlide) {
                for(const [, panel] of Object.entries(registry.panels.value)) {
                    if(panel.isTopSlide) {
                        panel.close();
                    }
                }
            }
        });
    }
    else if(onEscCallback && !registry.topSlide.value) {
        window.removeEventListener('keyup', onEscCallback);
        
        onEscCallback = undefined;
    }
});

containers[props.name] = registry;

const observer = new MutationObserver((records) => {
    for(const record of records) {
        if(!(record.target instanceof HTMLDivElement)
            || record.target.parentElement !== container.value
        ) {
            continue;
        }
        
        if(record.target.classList.contains('v-enter-active')
            && !record.target.getAttribute('data-index')
        ) {
            registry.elements.value.push(record.target);

            registry.index.value++;
            
            record.target.setAttribute('data-index', registry.index.value.toString());
            record.target.style.zIndex = registry.index.value.toString();
        }
        else if(record.target.classList.contains('v-leave-from')
            && registry.elements.value.includes(record.target)
        ) {
            registry.elements.value.splice(
                registry.elements.value.indexOf(record.target), 1
            );
        }
    }
});

onMounted(() => {
    observer.observe(container.value, {
        attributeFilter: ['class'],
        attributes: true,
        subtree: true
    });
});
</script>

<template>
    <Teleport to="body">
        <div
            :id="name"
            ref="container"
            :data-align="align"
            class="
                fixed top-0 right-0 h-full inline-flex
                [&>div]:absolute [&>div]:h-full [&>div]:top-0
            "
            :class="{
                '[&>div]:rounded-tl-xl [&>div]:rounded-bl-xl [&>div]:right-0 [&>div]:border-r-none [&>.v-enter-from]:translate-x-full [&>.v-leave-to]:translate-x-full [&>.v-enter-from]:ease-out [&>.v-leave-to]:ease-in': align === 'right',
                '[&>div]:rounded-tr-xl [&>div]:rounded-br-xl [&>div]:left-0': align === 'left'
            }" />
    </Teleport>
</template>