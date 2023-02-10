<script setup lang="ts">
defineProps<{
    label: string,
    modelValue: any
}>();


console.log('setup');
console.log(controlAttributes);

defineExpose({
    controlAttributes
});
</script>


<script lang="ts">
import { computed } from 'vue';

const controlAttributes = computed(() => ({

}));
</script>