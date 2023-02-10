import { Shadowable } from '@vue-interface/shadowable';
import { kebabCase } from 'lodash-es';
import { defineComponent, DirectiveBinding } from 'vue';
import config from './config';

function prefix(key: string, value: any, delimeter = '-') {
    const string = String(value).replace(new RegExp(`^${key}${delimeter}?`), '');

    return [
        kebabCase(string), key
    ].filter(value => !!value).join(delimeter);
}


function isObject(subject: any) {
    return !Array.isArray(subject) && typeof subject === 'object';
}

// function isUndefined(value: any) {
//     return value === undefined;
// }

export default defineComponent({

    directives: {
        bindEvents: {
            beforeMount(el: HTMLElement, binding: DirectiveBinding) {
                // @ts-ignore
                binding.instance?.bindEvents?.(el);
            }
        }
    },

    mixins: [
        Shadowable
    ],

    inheritAttrs: false,

    props: {

        modelValue: {
            default: undefined
        },

        /**
         * Show type activity indicator.
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * Animate floating labels inside the input.
         */
        animated: {
            type: Boolean,
            default: () => config('animated', false)
        },

        /**
         * An array of event names that correlate with callback functions.
         */
        nativeEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * The default class name assigned to the control element.
         */
        defaultControlClass: {
            type: String,
            default: () => config('defaultControlClass', 'form-control')
        },

        /**
         * An inline field validation error.
         */
        error: {
            type: [String, Array, Boolean],
            default: undefined
        },

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         */
        errors: {
            type: [Array, Object, Boolean],
            default() {
                return {};
            }
        },

        /**
         * Some feedback to add to the field once the field is successfully
         * valid.
         */
        feedback: {
            type: [String, Array],
            default: undefined
        },

        /**
         * Add form-group wrapper to input.
         */
        group: {
            type: Boolean,
            default: () => config('group', true)
        },

        /**
         * Some instructions to appear under the field label.
         */
        helpText: {
            type: [Number, String],
            default: undefined
        },

        /**
         * Hide the label for browsers, but leave it for screen readers.
         */
        hideLabel: Boolean,

        /**
         * The activity indicator type.
         */
        indicator: {
            type: [String, Boolean],
            default: () => config('indicator', 'spinner')
        },

        /**
         * The activity indicator size.
         */
        indicatorSize: {
            type: String,
            default: undefined
        },

        /**
         * Display the form field inline.
         */
        inline: Boolean,

        /**
         * The invalid property.
         */
        invalid: Boolean,

        /**
         * The value of label element. If no value, no label will appear.
         */
        label: {
            type: [Number, String],
            default: undefined
        },

        /**
         * The default label class assigned to the label element.
         */
        labelClass: {
            type: [Object, String],
            default: () => config('labelClass', 'form-label')
        },

        /**
         * Should the control look like a pill.
         */
        pill: Boolean,

        /**
         * Should the control look like plaintext.
         */
        plaintext: Boolean,

        /**
         * The size of the form control.
         */
        size: {
            type: String,
            default: undefined
        },

        /**
         * Additional margin/padding classes for fine control of spacing.
         */
        spacing: {
            type: String,
            default: undefined
        },

        /**
         * The valid property.
         */
        valid: Boolean

    },

    emits: [
        'blur',
        'change',
        'click',
        'focus',
        'keydown',
        'keypress',
        'keyup',
        'update:modelValue'
    ],

    data() {
        return {
            defaultEmpty: false,
            hasChanged: false,
            hasFocus: false,
            isEmpty: true,
        };
    },

    computed: {

        id() {
            return this.$attrs.id || this.$attrs.name || (Math.random() + 1).toString(36).substring(7);
        },

        componentName() {
            return this.$options.name;
        },

        controlAttributes() {
            const attrs = Object.fromEntries(
                Object.entries(this.$attrs).concat([
                    ['id', this.id],
                    ['class', this.controlClasses],
                    ['value', this.modelValue]
                ])
            );

            console.log(attrs);

            return attrs;
        },

        controlClass() {
            return this.defaultControlClass;
        },

        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },

        formGroupClasses() {
            return Object.assign({
                [this.size && prefix(this.size, this.componentName)]: !!this.size,
                'animated': this.animated,
                'default-empty': this.defaultEmpty,
                'form-group': this.group,
                [this.size && prefix(this.size, 'form-group')]: !!this.size,
                'has-activity': this.activity,
                'has-changed': this.hasChanged,
                'has-focus': this.hasFocus,
                'has-icon': !!this.$slots.icon,
                'is-empty': this.isEmpty,
                'is-invalid': !!(this.invalid || this.invalidFeedback),
                'is-valid': !!(this.valid || this.validFeedback),
                [this.$attrs.class]: !!this.$attrs.class,
                [this.$attrs.id]: !!this.$attrs.id
            }, !!this.componentName && {
                [kebabCase(this.componentName)]: true
            });
        },

        controlClasses() {
            return Object.assign({
                [this.controlClass]: !!this.controlClass,
                [this.controlSizeClass]: !!this.controlSizeClass,
                'form-control-icon': !!this.$slots.icon,
                'is-valid': !!(this.valid || this.validFeedback),
                'is-invalid': !!(this.invalid || this.invalidFeedback),
                // [this.pillClasses]: this.pill,
                [this.plaintextClass]: this.plaintext,
                [this.spacing]: !!this.spacing,
            }, this.shadowableClass);
        },

        hasDefaultSlot() {
            return !!this.$slots.default;
        },

        invalidFeedback() {
            if(this.error === '') {
                return null;
            }

            if(this.error) {
                return this.error;
            }

            const errors = this.getFieldErrors();

            return Array.isArray(errors) ? errors.filter(error => {
                return error && typeof error === 'string';
            }).join('<br>') : errors;
        },

        // pillClasses() {
        //     return 'rounded rounded-pill';
        // },

        plaintextClass() {
            return 'form-control-plaintext';
        },

        validFeedback() {
            return Array.isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
        }

    },

    watch: {
        hasFocus() {
            if(this.shouldChangeOnFocus()) {
                this.hasChanged = true;
            }
        },
        defaultEmpty() {
            this.hasChanged = true;
        },
        modelValue() {
            console.log('change');
        }
    },

    methods: {

        bindEvents(el: HTMLOptionElement | HTMLSelectElement, fn: Function) {
            // // If no function is defined, the use the default onInput callback.
            // if(!fn) {
            //     fn = this.onInput;
            // }

            // Get the option from the selected index.
            const selected = el instanceof HTMLSelectElement
                ? el.querySelectorAll('option')?.[el.selectedIndex]
                : null;

            console.log(this.modelValue);

            // Set the element value is the modelValue is not undefined.
            // if(isUndefined(this.modelValue)) {
            // el.value = this.modelValue;
            // }

            // If an option is selected, force the default value.
            if(selected) {
                el.value = selected?.value;
            }

            // If the el has a value, trigger the model update.
            if(el.value) {
                fn(el.value);
            }

            // Set the default has changed value
            this.hasChanged = !!el.value;

            // Set the default has changed value
            this.isEmpty = !el.value;

            // Add the has-focus class from the form control
            el.addEventListener('focus', () => {
                this.hasFocus = true;
            });

            // Remove the has-focus class from the form control
            el.addEventListener('blur', () => {
                this.hasFocus = false;
            });

            // Watch for input changes.
            el.addEventListener('input', () => {
                this.isEmpty = !el.value;
                this.hasChanged = true;
            });

            // // Trigger the onInput method.
            // el.addEventListener(
            //     el.tagName === 'SELECT' ? 'change' : 'input', () => fn(el.value)
            // );

            // Bubble the native events up to the vue component.
            this.nativeEvents.forEach((name: string) => {
                el.addEventListener(name, event => {
                    this.$emit(name, event);
                });
            });
        },

        blur() {
            if(this.getInputField()) {
                this.getInputField().blur();
            }
        },

        focus() {
            if(this.getInputField()) {
                this.getInputField().focus();
            }
        },

        getInputField() {
            return this.$el.querySelector(
                '.form-control, input, select, textarea'
            );
        },

        getFieldErrors() {
            let errors = this.error || this.errors;

            if(this.errors && isObject(this.errors)) {
                errors = this.errors[this.$attrs.name || this.$attrs.id];
            }

            return !errors || Array.isArray(errors) || isObject(errors) ? errors : [errors];
        },

        shouldChangeOnFocus() {
            return !this.getInputField().readOnly;
        },

        onInput(value: any) {
            console.log('input', value);
            this.$emit('update:modelValue', value);
        }

    }

});