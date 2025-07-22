<script setup lang="ts" generic="ModelValue, Value">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { InputHTMLAttributes, ref } from 'vue';

defineOptions({
    inheritAttrs: false
});

defineSlots<FormControlSlots<InputFieldControlSizePrefix,ModelValue>>();

const model = defineModel<ModelValue>();

const props = withDefaults(defineProps<InputFieldProps<ModelValue,Value>>(), {
    formControlClass: 'form-control',
    labelClass: 'form-label'
});

const emit = defineEmits<FormControlEvents<ModelValue>>();

const {
    controlAttributes,
    formGroupClasses,
    onClick,
    onBlur,
    onFocus
} = useFormControl<InputHTMLAttributes, InputFieldControlSizePrefix, ModelValue, Value>({ model, props, emit });

const field = ref<HTMLInputElement>();
</script>

<script lang="ts">
export type InputFieldControlSizePrefix = 'form-control';

export type InputFieldProps<ModelValue, Value> = FormControlProps<
    InputHTMLAttributes, 
    InputFieldControlSizePrefix, 
    ModelValue, 
    Value
>;
</script>

<template>
    <div
        class="input-field"
        :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :class="labelClass"
                :for="controlAttributes.id">
                {{ label }}
            </label>
        </slot>
        
        <div class="form-control-inner">
            <slot
                name="control"
                v-bind="{ onClick, onBlur, onFocus, controlAttributes }">
                <div
                    v-if="$slots.icon"
                    class="form-control-inner-icon"
                    @click="field?.focus()">
                    <slot name="icon" />
                </div>
                <input
                    ref="field"
                    v-model="model"
                    v-bind="controlAttributes"
                    @click="onClick"
                    @blur="onBlur"
                    @focus="onFocus"
                    @change="emit('change', model)">
            </slot>
            
            <div class="form-control-activity-indicator">
                <slot name="activity">
                    <Transition name="input-field-fade">
                        <ActivityIndicator
                            v-if="activity && indicator"
                            key="activity"
                            ref="activity"
                            :type="indicator"
                            :size="indicatorSize" />
                    </Transition>
                </slot>
            </div>
        </div>

        <slot
            name="errors"
            v-bind="{ error, errors, id: $attrs.id, name: $attrs.name }">  
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

        <slot
            name="help"
            v-bind="{ helpText }">
            <small
                v-if="helpText"
                ref="help"
                class="form-help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>