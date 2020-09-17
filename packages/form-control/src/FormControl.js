import { prefix, isObject, kebabCase } from '@vue-interface/utils';

const CUSTOM_PREFIX = 'custom';

export default {

    inheritAttrs: false,

    props: {

        /**
         * Show type activity indicator.
         *
         * @param {Boolean}
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * An array of event names that correlate with callback functions
         *
         * @param {Array}
         * @default ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste']
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'change', 'click', 'keypress', 'keyup', 'keydown', 'progress', 'paste'];
            }
        },

        /**
         * Is the form control a custom styled component.
         *
         * @param {Boolean}
         * @default false
         */
        custom: {
            type: Boolean,
            default: false
        },

        /**
         * The default class name assigned to the control element
         *
         * @param {String}
         * @default 'form-control'
         */
        defaultControlClass: {
            type: String,
            default: 'form-control'
        },

        /**
         * The field's default value.
         *
         * @param
         * @default null
         */
        defaultValue: {
            default: null
        },

        /**
         * An inline field validation error.
         *
         * @param {Boolean|String}
         */
        error: [Boolean, String],

        /**
         * An inline field validation errors passed as object with key/value
         * pairs. If errors passed as an object, the form name will be used for
         * the key.
         *
         * @param {Object|Boolean}
         * @default {}
         */
        errors: {
            type: Object,
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
            default: true
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
            default: 'spinner'
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
         * Use the legacy (Bootstrap 4) classes (if applicable).
         *
         * @param Boolean
         */
        legacy: Boolean,

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
        labelClass: [Object, String],

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
         * Adds a shadow class to the control.
         *
         * @param {String|Boolean}
         */
        shadow: {
            type: [String, Boolean],
            default: false,
            validate(value) {
                return value === true || [
                    'shadow-sm', 'shadow', 'shadow-lg'
                ].indexOf(`shadow-${value}`) > -1;
            }
        },

        /**
         * The size of the form control
         *
         * @param {String}
         */
        size: {
            type: String,
            default: 'md',
            validate: value => ['sm', 'md', 'lg'].indexOf(value) !== -1
        },

        /**
         * Additional margin/padding classes for fine control of spacing
         *
         * @param {String}
         */
        spacing: String,

        /**
         * The valid property
         *
         * @param {String}
         */
        valid: Boolean,

        /**
         * The field value.
         *
         * @property Mixed
         */
        value: {
            default: null
        }

    },

    directives: {
        bindEvents: {
            bind(el, binding, vnode) {
                function onInput() {
                    vnode.context.hasChanged = true;
                    vnode.context.isEmpty = !el.value;

                    if(el.tagName === 'SELECT' && el.querySelector('[value=""]')) {
                        el.querySelector('[value=""]').selected = !el.value;
                    }
                }

                el.addEventListener('input', onInput);
                el.addEventListener('change', onInput);

                el.addEventListener('focus', () => {
                    vnode.context.hasFocus = true;
                });

                // Add/remove the has-focus class from the form control
                el.addEventListener('blur', () => {
                    vnode.context.hasFocus = false;
                });

                // Set the data-selected-index attribute if necessary.
                if(el.selectedIndex >= 0) {
                    el.setAttribute('data-selected-index', el.selectedIndex);
                }

                vnode.context.$watch('value', onInput);
                vnode.context.isEmpty = !el.value;

                // Bubble the native events up to the vue component.
                vnode.context.bindEvents.forEach(name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });
            }
        }
    },

    methods: {

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

            if(isObject(this.errors)) {
                errors = this.errors[this.$attrs.name || this.$attrs.id];
            }

            return !errors || Array.isArray(errors) || isObject(errors) ? errors : [errors];
        },

        onInput(e) {
            this.$emit('input', this.currentValue = e.target.value);
        }

    },

    computed: {

        controlAttributes() {
            return Object.keys(this.$attrs)
                .concat([['class', this.controlClasses]])
                .reduce((carry, key) => {
                    if(Array.isArray(key)) {
                        carry[key[0]] = key[1];
                    }
                    else {
                        carry[key] = this[key] || this.$attrs[key];
                    }

                    return carry;
                }, {});
        },

        controlClass() {
            return this.custom ? this.customControlClass : this.defaultControlClass;
        },

        controlSizeClass() {
            return prefix(this.size, this.controlClass);
        },

        customControlClass() {
            return 'custom-control';
        },

        formGroupClasses() {
            const name = prefix(kebabCase(this.$options.name), this.custom ? CUSTOM_PREFIX : '');

            return {
                [name]: true,
                [prefix(this.size, name)]: !!this.size,
                'form-group': this.group,
                'has-activity': this.activity,
                'has-changed': this.hasChanged,
                'has-focus': this.hasFocus,
                'is-empty': this.isEmpty,
                'is-invalid': !!(this.invalid || this.invalidFeedback),
                'is-valid': !!(this.valid || this.validFeedback),
            };
        },

        controlClasses() {
            return {
                [this.controlClass]: !!this.controlClass,
                [this.controlSizeClass]: !!this.controlSizeClass,
                'form-control-icon': !!this.$slots.icon,
                'is-valid': !!(this.valid || this.validFeedback),
                'is-invalid': !!(this.invalid || this.invalidFeedback),
                [this.pillClasses]: this.pill,
                [this.plaintextClass]: this.plaintext,
                [this.spacing]: !!this.spacing,
                [this.shadowableClassName]: !!this.shadow
            };
        },

        hasDefaultSlot() {
            return !!this.$slots.default;
        },

        invalidFeedback() {
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

    mounted() {
        if(this.value === null && this.defaultValue !== null) {
            this.$emit('input', this.defaultValue);
        }
    },

    data() {
        return {
            currentValue: this.value || this.defaultValue,
            hasChanged: false,
            hasFocus: false,
            isEmpty: false,
        };
    }

};
