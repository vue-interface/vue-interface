<script setup lang="ts" generic="ModelValue, Value, OnValue">
import type { CheckedFormControlProps, FormControlProps,FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlEvents, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { computed, InputHTMLAttributes, ref } from 'vue';

defineSlots<FormControlSlots<LightSwitchFieldControlSizePrefix,ModelValue>>();

const model = defineModel<ModelValue>();

// The TS implementation here is kinda weak. v-model should be the same as the
// onValue and offValue props. The issue is that we need to cast as `any` or
// else we get the following TS error:
// `Type 'T' is not assignable to type 'InferDefault<FormControlProps<T, V> & {
// checked?: boolean; } & { onValue?: T; offValue?: T; }, T>'`.
const props = withDefaults(defineProps<CheckedFormControlProps<InputHTMLAttributes, LightSwitchFieldControlSizePrefix, ModelValue, Value>>(), {
    onValue?: ModelValue,
    offValue?: ModelValue,
}>(), {
    formControlClass: 'form-switch',
    labelClass: 'form-switch-label',
    onValue: 1 as any,
    offValue: 0 as any
});

const emit = defineEmits<FormControlEvents<ModelValue>>();

function getModelValue(): ModelValue {
    if(props.modelValue === undefined) {
        return props.checked
            ? props.onValue
            : props.offValue;
    }

    return props.modelValue;
}

const checked = computed({
    get() {
        return model.value === props.onValue;
    },
    set(value) {
        model.value = value === true ? props.onValue : props.offValue;
    }
});

const {
    controlAttributes,
    formGroupClasses,
    onClick,
    onBlur,
    onFocus
} = useFormControl<InputHTMLAttributes, LightSwitchFieldControlSizePrefix, ModelValue, Value>({ model, props, emit });

const field = ref<HTMLTextAreaElement>();
</script>

<script lang="ts">
export type LightSwitchFieldControlSizePrefix = 'form-switch';

export type SelectFieldProps<ModelValue, Value> = FormControlProps<
    InputHTMLAttributes, 
    LightSwitchFieldControlSizePrefix , 
    ModelValue, 
    Value
>;
</script>

<template>
    <div
        class="light-switch-field"
        :class="formGroupClasses">
        <label
            :for="controlAttributes.id"
            :class="labelClass">            
            <input
                ref="field"
                v-model="checked"
                type="checkbox"
                v-bind="controlAttributes"
                @click="onClick"
                @blur="onBlur"
                @focus="onFocus">
            <slot>{{ label }}</slot>
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
