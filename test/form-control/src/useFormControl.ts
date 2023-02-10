import { computed, toRaw, watch } from 'vue';

export default function useFormControl(value) {
    const originalValue = toRaw(value);

    watch(value, (newValue: any) => {
        const rawValue = toRaw(newValue);

        hasChanged = rawValue !== originalValue;
        isDirty = true;
        isEmpty = rawValue === ''
            || rawValue === null
            || rawValue === undefined;
    });

    const props = defineProps<{
        modelValue?: any,
        label?: string
    }>();

    let hasChanged = $ref<boolean>(false);
    let isEmpty = $ref<boolean>(true);
    let isDirty = $ref<boolean>(false);

    const controlAttributes = computed(() => ({
        value
    }));

    const formGroupClasses = computed(() => ({
        isDirty,
        isEmpty,
        hasChanged,
    }));

    return {
        controlAttributes,
        formGroupClasses,
        props,
    };
}