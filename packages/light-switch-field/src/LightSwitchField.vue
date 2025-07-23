<script setup lang="ts" generic="ModelValue, Value">
import type { FormControlProps, FormControlSlots } from '@vue-interface/form-control';
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

const model = defineModel<ModelValue,string,boolean>({
    required: true,
    get(value) {
        return value === onValue.value;
    },
    set(value) {
        return value ? onValue.value : offValue.value;
    }
});

const onValue = computed(() => props.onValue ?? (true as ModelValue));
const offValue = computed(() => props.offValue ?? (false as ModelValue));

defineSlots<FormControlSlots<LightSwitchFieldControlSizePrefix,ModelValue> & {
    default: () => unknown
}>();

const emit = defineEmits<FormControlEvents<ModelValue,boolean>>();

const {
    controlAttributes,
    formGroupClasses,
    onBlur,
    onFocus,
    onFocusin,
    onFocusout,
    onClick,
    onMousedown,
    onMouseup,
    onMouseover,
    onMouseout,
    onMouseenter,
    onMouseleave,
    onChange,
    onInput,
    onBeforeinput,
    onKeydown,
    onKeyup,
    onKeypress,
    onSelect,
    onSelectionchange,
    onInvalid,
    onSubmit,
    onReset,
    onCopy,
    onCut,
    onPaste,
    onTouchstart,
    onTouchend,
    onTouchmove,
    onTouchcancel
} = useFormControl<InputHTMLAttributes, LightSwitchFieldControlSizePrefix, ModelValue, Value, boolean>({ model, props, emit });

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
                @blur="onBlur"
                @focus="onFocus"
                @focusin="onFocusin"
                @focusout="onFocusout"
                @click="onClick"
                @mousedown="onMousedown"
                @mouseup="onMouseup"
                @mouseover="onMouseover"
                @mouseout="onMouseout"
                @mouseenter="onMouseenter"
                @mouseleave="onMouseleave"
                @change="onChange"
                @input="onInput"
                @beforeinput="onBeforeinput"
                @keydown="onKeydown"
                @keyup="onKeyup"
                @keypress="onKeypress"
                @select="onSelect"
                @selectionchange="onSelectionchange"
                @invalid="onInvalid"
                @submit="onSubmit"
                @reset="onReset"
                @copy="onCopy"
                @cut="onCut"
                @paste="onPaste"
                @touchstart="onTouchstart"
                @touchend="onTouchend"
                @touchmove="onTouchmove"
                @touchcancel="onTouchcancel">
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
