<script lang="ts" setup>
import { onMounted, VNode } from 'vue';

const props = defineProps<{
    node?: VNode
}>();

onMounted(() => {
    node.value?.el?.dispatchEvent(new Event('enter'));
});
</script>

<script lang="ts">
import { ref } from 'vue';
let node = ref<VNode>();
</script>

<template>
    <div class="slide-deck-slide">
        <Component
            :is="props.node"
            ref="node" />
    </div>
</template>