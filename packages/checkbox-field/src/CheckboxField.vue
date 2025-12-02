<script setup lang="ts" generic="ModelValue, Value">
import type { CheckedFormControlProps, FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { InputHTMLAttributes, onMounted, ref } from 'vue';

const props = withDefaults(defineProps<CheckedFormControlProps<InputHTMLAttributes, CheckboxFieldControlSizePrefix, ModelValue, Value>>(), {
    formControlClass: 'form-check',
    labelClass: 'form-check-label'
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<ModelValue>();

defineSlots<Exclude<FormControlSlots<CheckboxFieldControlSizePrefix,ModelValue>, 'activity'> & {
    default: () => unknown
}>();

const emit = defineEmits<FormControlEvents<ModelValue>>();

const {
    controlAttributes,
    formGroupClasses,
    listeners,
} = useFormControl<InputHTMLAttributes, CheckboxFieldControlSizePrefix, ModelValue, Value>({ model, props, emit });

const field = ref<HTMLInputElement>();

onMounted(() => {
    if(!props.checked) {
        return;
    }
    
    if(Array.isArray(props.modelValue)
        && !props.modelValue.includes(props.value)
        || !props.modelValue) {
            
        field.value?.click();
    }

    if(field.value) {
        field.value.checked = true;
    }
});
</script>

<script lang="ts">
export type CheckboxFieldControlSizePrefix = 'form-check';

export type SelectFieldProps<ModelValue, Value> = FormControlProps<
    InputHTMLAttributes, 
    CheckboxFieldControlSizePrefix , 
    ModelValue, 
    Value
>;
</script>

<template>
    <div
        class="checkbox-field"
        :class="formGroupClasses">
        <slot
            name="control"
            v-bind="{ controlAttributes, listeners }">
            <input
                ref="field"
                v-model="model"
                v-bind="{...controlAttributes, ...listeners}"
                type="checkbox"
                :value="value">
        </slot>

        <slot name="label">
            <label
                ref="label"
                :class="labelClass"
                :for="controlAttributes.id">
                <slot>
                    {{ label }}
                </slot>
            </label>
        </slot>

        <slot
            name="errors"
            v-bind="{ error, errors, id, name }">        
            <FormControlErrors
                v-if="!!(error || errors)"
                :id="id && String(id)"
                v-slot="{ error }"
                :name="name && String(name)"
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

        <slot
            name="help"
            v-bind="{ helpText }">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>