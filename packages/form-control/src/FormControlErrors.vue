<script lang="ts" setup>
import { computed } from 'vue';
import { type FormControlErrorProp, type FormControlErrorPropArray, type FormControlErrorPropRecord } from './useFormControl.js';

const props = defineProps<{
    error?: FormControlErrorProp,
    errors?: FormControlErrorPropArray | FormControlErrorPropRecord,
    name?: string,
    id?: string
}>();

const key = String(props?.id || props?.name);

const map = computed(() => {
    // First check if an `error` prop was passed. This is a single error.
    if(props.error) {
        return new Map<string, (string|Error)[]>(
            [[key, [props.error]]]
        );
    }

    // Next check to see if an error of errors was passed.
    if(Array.isArray(props.errors)) {
        return new Map<string, (string | Error)[]>(
            [[key, props.errors]]
        );
    }

    // Finally check if props.errors is a plain object. 
    if(typeof props.errors === 'object') {
        return new Map<string, (string | Error)[]>(
            Object.entries(props.errors)
        );
    }

    return new Map();
});
</script>

<template>
    <slot
        v-for="item of map.get(key)"
        v-bind="{ key, error: item }" />
</template>