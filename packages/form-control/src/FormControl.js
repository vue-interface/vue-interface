import { Shadowable } from '@vue-interface/shadowable';
import { paramCase } from 'param-case';
import config from './config';

function prefix(key, value, delimeter = '-') {
    const string = value.toString().replace(new RegExp(`^${key}${delimeter}?`), '');

    return [
        paramCase(string), key
    ].filter(value => !!value).join(delimeter);
}

function isObject(subject) {
    return !Array.isArray(subject) && typeof subject === 'object';
}

// function isNull(value) {
//     return value === null;
// }

function isUndefined(value) {
    return value === undefined;
}

// function isNullOrUndefined(value) {
//     return isNull(value) || isUndefined(value);
// }

export default {

    directives: {
        bindEvents: {
            beforeMount(el, binding, vnode) {
                binding.instance.bindEvents(el);
            }
        }
    },

    mixins: [
        Shadowable
    ],

    inheritAttrs: false,

    props: {

        /**
         * Show type activity indicator.
         *
         * @param {Boolean}
         * @default false
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * Animate floating labels inside the input.
         *
         * @param {Boolean}
         * @default false
         */
        animated: {
            type: Boolean,
            default: () => config('animated', false)
        },

        /**
         * An array of event names that correlate with callback functions
         *
         * @param {Array}
         * @default ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste']
         */
        nativeEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * The default class name assigned to the control element
         *
         * @param {String}
         * @default 'form-control'
         */
        defaultControlClass: {
            type: String,
            default: () => config('defaultControlClass', 'form-control')                
        },

        /**
         * An inline field validation error.
         *
         * @param {Array|String|Boolean}
         */
        error: [String, Array, Boolean],

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         *
         * @param {Array|Object|Boolean}
         * @default {}
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
         *
         * @param {String|Array}
         */
        feedback: [String, Array],

        /**
         * Add form-group wrapper to input
         *
         * @param {Boolean}
         * @default true
         */
        group: {
            type: Boolean,
            default: () => config('group', true)
        },

        /**
         * Some instructions to appear under the field label
         *
         * @param {Number|String}
         */
        helpText: [Number, String],

        /**
         * Hide the label for browsers, but leave it for screen readers.
         *
         * @param {Boolean}
         */
        hideLabel: Boolean,

        /**
         * The activity indicator type.
         *
         * @param {String}
         */
        indicator: {
            type: String,
            default: () => config('indicator', 'spinner')
        },

        /**
         * The activity indicator size.
         *
         * @param {String}
         */
        indicatorSize: String,

        /**
         * Display the form field inline
         *
         * @param {Boolean}
         */
        inline: Boolean,

        /**
         * The invalid property
         *
         * @param {Boolean}
         */
        invalid: Boolean,

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @param {Number|String}
         */
        label: [Number, String],

        /**
         * The default label class assigned to the label element
         *
         * @param {String|Object}
         */
        labelClass: {
            type: [Object, String],
            default: () => config('labelClass', 'form-label')
        },

        /**
         * The field's default value.
         *
         * @param {any}
         * @default null
         */
        modelValue: {
            default: undefined
        },

        /**
         * Should the control look like a pill.
         *
         * @param {Boolean}
         */
        pill: Boolean,

        /**
         * Should the control look like plaintext.
         *
         * @param {Boolean}
         */
        plaintext: Boolean,
        
        /**
         * The size of the form control
         *
         * @param {String}
         */
        size: String,

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @param {String}
         */
        spacing: String,

        /**
         * The valid property
         *
         * @param {string}
         */
        valid: Boolean

    },

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
            return Object.fromEntries(
                Object.entries(this.$attrs).concat([
                    ['id', this.id],
                    ['class', this.controlClasses]
                ])
            );
        },

        controlClass() {
            return this.defaultControlClass;
        },

        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },

        formGroupClasses() {
            return {
                [paramCase(this.componentName)]: !!this.componentName,
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
            };
        },

        controlClasses() {
            return Object.assign({
                [this.controlClass]: !!this.controlClass,
                [this.controlSizeClass]: !!this.controlSizeClass,
                'form-control-icon': !!this.$slots.icon,
                'is-valid': !!(this.valid || this.validFeedback),
                'is-invalid': !!(this.invalid || this.invalidFeedback),
                [this.pillClasses]: this.pill,
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

        pillClasses() {
            return 'rounded rounded-pill';
        },

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
        }
    },

    methods: {

        bindEvents(el, fn) {
            // If no function is defined, the use the default onInput callback.
            if(!fn) {
                fn = this.onInput;
            }

            // Get the option from the selected index.
            const selected = el.querySelectorAll('option')[el.selectedIndex];

            // Set the element value is the modelValue is not undefined.
            if(!isUndefined(this.modelValue)) {
                el.value = this.modelValue;
            }
            // If an option is selected, force the default value.
            else if(!isUndefined(selected)) {
                el.value = selected.value;
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
            el.addEventListener('input', e => {
                this.isEmpty = false;
                this.hasChanged = true;
            });

            // Trigger the onInput method.
            el.addEventListener(
                el.tagName === 'SELECT' ? 'change' : 'input', () => fn(el.value)
            );

            // Bubble the native events up to the vue component.
            this.nativeEvents.forEach(name => {
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

        onInput(value) {
            this.$emit('update:modelValue', value);
        }

    }

};