<script setup lang="ts" generic="ModelValue, Value">
import type { CheckedFormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlEvents, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { computed, InputHTMLAttributes, ref } from 'vue';

const props = withDefaults(defineProps<LightSwitchFieldProps<ModelValue, Value>>(), {
    formControlClass: 'form-switch',
    labelClass: 'form-switch-label',
    onValue: undefined,
    offValue: undefined
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<ModelValue, string, boolean>({
    get(value) {
        return (value === onValue.value) || props.checked;
    },
    set(value) {
        return value ? onValue.value : offValue.value;
    }
});

const onValue = computed(() => props.onValue ?? (true as ModelValue));
const offValue = computed(() => props.offValue ?? (false as ModelValue));

defineSlots<FormControlSlots<LightSwitchFieldControlSizePrefix, ModelValue> & {
    default: () => unknown
}>();

const emit = defineEmits<FormControlEvents<ModelValue>>();

const {
    controlAttributes,
    formGroupClasses,
    listeners,
} = useFormControl<InputHTMLAttributes, LightSwitchFieldControlSizePrefix, ModelValue, Value, boolean | undefined>({ model, props, emit });

const field = ref<HTMLTextAreaElement>();
</script>

<script lang="ts">
export type LightSwitchFieldControlSizePrefix = 'form-switch';

export type LightSwitchFieldProps<ModelValue, Value> = CheckedFormControlProps<
    InputHTMLAttributes,
    LightSwitchFieldControlSizePrefix,
    ModelValue,
    Value
> & {
    onValue?: ModelValue,
    offValue?: ModelValue,
};
</script>

<template>
    <div
        class="light-switch-field"
        :class="formGroupClasses">
        <label
            :for="controlAttributes.id"
            :class="labelClass">
            <slot
                name="control"
                v-bind="{ controlAttributes, listeners }">
                <input
                    ref="field"
                    v-model="model"
                    type="checkbox"
                    v-bind="{...controlAttributes, ...listeners}">
                <slot name="label">{{ label }}</slot>
            </slot>
        </label>

        <slot
            name="errors"
            v-bind="{ error, errors, id, name }">
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="id"
                v-slot="{ error }"
                :name="name"
                :error="error"
                :errors="errors">
                <div
                    invalid
                    class="invalid-feedback">
                    {{ error }}<br>
                </div>
            </FormControlErrors>
        </slot>

        <slot
            name="feedback"
            v-bind="{ feedback }">
            <FormControlFeedback
                v-slot="{ feedback }"
                :feedback="feedback">
                <div
                    valid
                    class="valid-feedback">
                    {{ feedback }}
                </div>
            </FormControlFeedback>
        </slot>

        <slot name="help">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>
