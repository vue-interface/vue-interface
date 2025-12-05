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

onMounted(() => {
    if(!container.value) {
        return;
    }

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
            class="slide-panel-container"
            :class="{
                'slide-panel-container-right': align === 'right',
                'slide-panel-container-left': align === 'left'
            }" 
            v-bind="$attrs" />
    </Teleport>
</template>