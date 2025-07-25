<script setup lang="ts" generic="ModelValue, Value">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { InputHTMLAttributes, onMounted, ref, SelectHTMLAttributes, useSlots } from 'vue';

const props = withDefaults(defineProps<SelectFieldProps<ModelValue,Value>>(), {
    formControlClass: 'form-select',
    labelClass: 'form-label'
});

defineOptions({
    inheritAttrs: false
});

const model = defineModel<ModelValue>();

defineSlots<FormControlSlots<SelectFieldControlSizePrefix,ModelValue> & {
    default: () => unknown
}>();

const emit = defineEmits<FormControlEvents<ModelValue>>();

const {
    controlAttributes,
    formGroupClasses,
    listeners,
} = useFormControl<InputHTMLAttributes, SelectFieldControlSizePrefix, ModelValue, Value>({ model, props, emit });

const field = ref<HTMLSelectElement>();

function onMousedownLabel(e: MouseEvent) {
    listeners.onClick(e);

    field.value?.focus();
}

// Check the option slots for selected options. If the field has hardcoded
// selected options, this will ensure the value of the field is always set to
// the property. This will ensure the model is updated to the selected value.
onMounted(() => {
    const slot = useSlots().default;

    if(!slot) {
        return;
    }

    for(const child of slot()) {
        if(!child.props) {
            return;
        }
        
        if('selected' in child.props && (child.props.value ?? child.children)) {
            model.value = child.props.value ?? child.children;
        }
    }
});
</script>

<script lang="ts">
export type SelectFieldControlSizePrefix = 'form-select';

export type SelectFieldProps<ModelValue, Value> = FormControlProps<
    SelectHTMLAttributes, 
    SelectFieldControlSizePrefix, 
    ModelValue, 
    Value
>;
</script>

<template>
    <div
        class="select-field"
        :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :for="controlAttributes.id"
                :class="labelClass"
                @mousedown="onMousedownLabel">
                {{ label }}
            </label>
        </slot>

        <div class="form-control-inner">
            <slot
                name="control"
                v-bind="{ controlAttributes, listeners }">
                <div
                    v-if="$slots.icon"
                    class="form-control-inner-icon"
                    @click="field?.focus()">
                    <slot name="icon" />
                </div>
                <select
                    ref="field"
                    v-model="model"
                    v-bind="{...controlAttributes, ...listeners}">
                    <slot />
                </select>
            </slot>
            
            <div class="form-control-activity-indicator">
                <slot name="activity">
                    <Transition name="select-field-fade">
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