<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label v-if="label" ref="label" :for="id" :class="labelClass" v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <div v-if="$slots.icon" class="form-group-inner-icon" @click="$refs.field.focus()">
                    <slot name="icon" />
                </div>
                <input
                    ref="field"
                    v-bind-events
                    v-bind="controlAttributes"
                    :value="currentValue"
                    @input="onInput">
            </slot>
        </div>

        <slot name="feedback">
            <div 
                v-if="invalidFeedback"
                class="invalid-feedback"
                invalid
                v-html="invalidFeedback" />
            <div 
                v-else-if="validFeedback"
                class="valid-feedback"
                valid
                v-html="validFeedback" />
        </slot>

        <slot name="help">
            <small v-if="helpText" ref="help">
                {{ helpText }}
            </small>
        </slot>
    </div>
</template>

<script>
import FormControl from '../FormControl';

export default {

    name: 'InputField',

    mixins: [
        FormControl
    ]

};
</script>