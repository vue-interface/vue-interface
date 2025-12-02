<script setup lang="ts" generic="ModelValue extends undefined|string|ReadonlyArray<string>|number|null, Value">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { vAutogrow } from '@vue-interface/autogrow';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { InputHTMLAttributes, ref, TextareaHTMLAttributes, useSlots, watch } from 'vue';

const props = withDefaults(defineProps<TextareaFieldProps<ModelValue,Value>>(), {
    autogrow: false,
    formControlClass: 'form-control',
    labelClass: 'form-label'
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<ModelValue>();

defineSlots<FormControlSlots<TextareaFieldControlSizePrefix,ModelValue>>();

const emit = defineEmits<FormControlEvents<ModelValue>>();

const {
    controlAttributes,
    formGroupClasses,
    listeners
} = useFormControl<InputHTMLAttributes, TextareaFieldControlSizePrefix, ModelValue, Value>({ model, props, emit });

const field = ref<HTMLTextAreaElement>();

watch(model, () => {
    field.value?.dispatchEvent(new Event('resize'));
});
</script>

<script lang="ts">
export type TextareaFieldControlSizePrefix = 'form-control';

export type TextareaFieldProps<ModelValue, Value> = FormControlProps<
    TextareaHTMLAttributes, 
    TextareaFieldControlSizePrefix, 
    ModelValue, 
    Value
> & {
    autogrow?: boolean
};
</script>

<template>
    <div
        class="textarea-field"
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
                v-bind="{ controlAttributes, listeners }">
                <div
                    v-if="useSlots().icon"
                    class="form-control-inner-icon"
                    @click="() => field?.focus()">
                    <slot name="icon" />
                </div>
                <textarea
                    ref="field"
                    v-model="model"
                    v-autogrow="autogrow"
                    v-bind="{...controlAttributes, ...listeners}" />
            </slot>
            
            <div class="form-control-activity-indicator">
                <slot name="activity">
                    <Transition name="textarea-field-fade">
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

        <slot name="help">
            <small
                v-if="helpText"
                ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>