<script setup lang="ts" generic="ModelValue, Value">
import type { FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlEvents, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { InputHTMLAttributes, ref } from 'vue';

defineSlots<FormControlSlots<LightSwitchFieldControlSizePrefix,ModelValue> & {
    default: () => unknown
}>();

const model = defineModel<ModelValue,string,boolean,boolean>({
    get(value) {
        return value === props.onValue;
    },
    set(value) {
        return value ? props.onValue : props.offValue;
    }
});

const props = withDefaults(defineProps<LightSwitchFieldProps<ModelValue, Value>>(), {
    formControlClass: 'form-switch',
    labelClass: 'form-switch-label',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onValue: true as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offValue: false as any
});

const emit = defineEmits<FormControlEvents<ModelValue>>();

const {
    controlAttributes,
    formGroupClasses,
    onClick,
    onBlur,
    onFocus
} = useFormControl<InputHTMLAttributes, LightSwitchFieldControlSizePrefix, ModelValue, Value, boolean|undefined>({ model, props, emit });

const field = ref<HTMLTextAreaElement>();
</script>

<script lang="ts">
export type LightSwitchFieldControlSizePrefix = 'form-switch';

export type LightSwitchFieldProps<ModelValue, Value> = FormControlProps<
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
            <input
                ref="field"
                v-model="model"
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
