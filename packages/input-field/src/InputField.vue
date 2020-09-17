<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label v-if="label" ref="label" :for="$attrs.id" :class="labelClass" v-html="label" />
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

            <slot name="activity">
                <transition name="input-field-fade">
                    <activity-indicator
                        v-if="activity"
                        key="activity"
                        ref="activity"
                        :type="indicator"
                        :size="indicatorSize || size" />
                </transition>
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
import FormControl from '@vue-interface/form-control';
import { ActivityIndicator, register } from '@vue-interface/activity-indicator';
import Spinner from '@vue-interface/activity-indicator/src/types/Spinner';

register({
    spinner: Spinner
});

export default {

    name: 'InputField',

    components: {
        ActivityIndicator
    },

    mixins: [
        FormControl
    ]

};
</script>

<style>
.input-field,
.input-field .form-group-inner {
    position: relative;
    transition: all .25s ease-in-out;
}

.input-field .activity-indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-1rem, -50%);
    transition: all .15s ease-in;
}

.input-field .activity-indicator-xs {
    font-size: .5em;
}

.input-field .activity-indicator-sm {
    font-size: .5em;
}

.input-field .activity-indicator-md {
    font-size: .666em;
}

.input-field .activity-indicator-lg {
    font-size: .75em;
}

.input-field .activity-indicator-xl {
    font-size: 1em;
}

.input-field .activity-indicator {
    opacity: 1;
}

.input-field .input-field-fade-enter,
.input-field .input-field-fade-leave-to {
    opacity: 0;
}

.input-field.is-valid .valid-feedback,
.input-field.is-invalid .invalid-feedback {
    display: flex;
}

.input-field .form-control-icon {
    padding-left: 2em;
}

.input-field .form-group-inner-icon {
    position: absolute;
    top: 50%;
    left: .666rem;
    width: 1rem;
    font-size: 1rem;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
