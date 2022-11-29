<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label
                v-if="label"
                ref="label"
                :for="id"
                :class="labelClass"
                @click="focus"
                v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control" :bind-events="bindEvents" :control-attributes="controlAttributes" :focus="focus">
                <div v-if="$slots.icon" class="form-group-inner-icon" @click="focus">
                    <slot name="icon" />
                </div>
                <input ref="field" v-bind-events v-bind="controlAttributes">
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

<script lang="ts">
import { ActivityIndicator } from '@vue-interface/activity-indicator';
import { FormControl } from '@vue-interface/form-control';
import { defineComponent } from 'vue';

export default defineComponent({

    name: 'InputField',
    
    components: {
        ActivityIndicator
    },

    mixins: [
        FormControl
    ]

});
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

.input-field.has-activity .form-control-xs {
    padding-right: 3.75em;
}

.input-field .activity-indicator-sm {
    font-size: .5em;
}

.input-field.has-activity .form-control-sm {
    padding-right: 3em;
}

.input-field .activity-indicator-md {
    font-size: .666em;
}

.input-field.has-activity .form-control-md {
    padding-right: 3em;
}

.input-field .activity-indicator-lg {
    font-size: .75em;
}

.input-field.has-activity .form-control-lg {
    padding-right: 3em;
}

.input-field .activity-indicator-xl {
    font-size: 1em;
}

.input-field.has-activity .activity-indicator-xl ~ .form-control-xl {
    padding-right: 3.75em;
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
    left: .666em;
    width: 1rem;
    font-size: 1em;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-field-sm .form-group-inner-icon {
    position: absolute;
    top: 50%;
    left: .666rem;
    width: .75em;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-field-lg .form-group-inner-icon {
    position: absolute;
    top: 50%;
    left: .666rem;
    width: 1.25em;
    font-size: 1em;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
