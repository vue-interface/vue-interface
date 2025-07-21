<script setup lang="ts" generic="T, V">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import type { FormControlEvents, FormControlProps, FormControlSlots } from '@vue-interface/form-control';
import { FormControlErrors, FormControlFeedback, useFormControl } from '@vue-interface/form-control';
import { onMounted, ref, useSlots } from 'vue';

defineOptions({
    inheritAttrs: false
});

defineSlots<FormControlSlots<T>>();

const emit = defineEmits<FormControlEvents<T>>();

const props = withDefaults(defineProps<FormControlProps<T, V>>(), {
    formControlClass: 'form-select',
    labelClass: 'form-label'
});

const {
    controlAttributes,
    formGroupClasses,
    model,
    onClick,
    onBlur,
    onFocus
} = useFormControl<T,V>({ props, emit });

const field = ref<HTMLSelectElement>();

function onMousedown(e) {
    onClick(e);

    field.value.focus();
}

// Check the option slots for selected options. If the field has hardcoded
// selected options, this will ensure the value of the field is always set to
// the property. This will ensure the model is updated to the selected value.
onMounted(() => {
    if(!useSlots().default) {
        return;
    }

    for(const child of useSlots().default()) {
        if(!child.props) {
            return;
        }
        
        if('selected' in child.props && (child.props.value ?? child.children)) {
            model.value = child.props.value ?? child.children;
        }
    }
});
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
                :class="labelClass">
                {{ label }}
            </label>
        </slot>

        <div class="form-group-inner">
            <slot
                name="control"
                v-bind="{ onClick, onBlur, onFocus, controlAttributes }">
                <div
                    v-if="useSlots().icon"
                    class="form-group-inner-icon"
                    @click="field.focus">
                    <slot name="icon" />
                </div>
                <select
                    ref="field"
                    v-model="model"
                    v-bind="controlAttributes"
                    @mousedown="onMousedown"
                    @blur="onBlur"
                    @focus="onFocus">
                    <slot />
                </select>
            </slot>

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