<template>
    <div :class="formGroupClasses">
        <slot name="label">
            <label v-if="label" ref="label" :for="$attrs.id" :class="labelClass" v-html="label" />
        </slot>

        <div class="form-group-inner">
            <slot name="control">
                <div v-if="$slots.icon" class="mx-2 pl-1">
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
                <transition name="slide-fade">
                    <activity-indicator v-if="activity" key="activity" ref="activity" type="dots" :size="size" />
                </transition>
            </slot>
        </div>

        <slot name="feedback">
            <div 
                v-if="validFeedback"
                class="valid-feedback"
                valid>
                {{ validFeedback }}
            </div>
            <div 
                v-else-if="invalidFeedback"
                class="invalid-feedback"
                invalid>
                {{ invalidFeedback }}
            </div>
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
import Dots from '@vue-interface/activity-indicator/src/types/Dots';

register({
    dots: Dots
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
}

.input-field .activity-indicator {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-1rem, -50%);
    transition: all .25s ease-in;
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

.input-field .slide-fade-enter,
.input-field .slide-fade-leave-to {
    opacity: 1;
    transform: translate(25%, -50%);
}

.input-field.is-valid .valid-feedback,
.input-field.is-invalid .invalid-feedback {
    display: flex;
}

.input-field .form-control-icon {
    padding-left: 2em;
}
</style>
