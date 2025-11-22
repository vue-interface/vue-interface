<script setup lang="ts">
import { ref, onMounted, VNode } from 'vue';

const props = defineProps<{
    node?: VNode
}>();

const nodeRef = ref<VNode>();

onMounted(() => {
    nodeRef.value?.el?.dispatchEvent(new Event('enter'));
});
</script>

<template>
    <div class="slide-deck-slide">
        <Component
            :is="props.node"
            ref="nodeRef" />
    </div>
</template>