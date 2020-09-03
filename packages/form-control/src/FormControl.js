import { prefix, isObject, kebabCase } from '@vue-interface/utils';
import MergeClasses from '@vue-interface/merge-classes';

const EMPTY_CLASS = 'is-empty';
const FOCUS_CLASS = 'has-focus';
const CHANGED_CLASS = 'has-changed';
const CUSTOM_PREFIX = 'custom';

function addClass(el, vnode, css) {
    vnode.context.$el.classList.add(css);
}

function removeClass(el, vnode, css) {
    vnode.context.$el.classList.remove(css);
}

function addEmptyClass(el, vnode) {
    if(!el.value || (el.tagName === 'SELECT' && el.selectedIndex === -1)) {
        addClass(el, vnode, EMPTY_CLASS);
    }
}

export default {

    inheritAttrs: false,

    mixins: [
        MergeClasses
    ],
    
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
         * The icon that should be used in the field.
         *
         * @param {Array|String}
         */
        icon: [Array, String],

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
                function changedValue(el, value) {
                    addClass(el, vnode, CHANGED_CLASS);

                    if(!!el.value || (el.selectedIndex && el.selectedIndex > -1)) {
                        removeClass(el, vnode, EMPTY_CLASS);
                    }
                    else if(!el.classList.contains(CHANGED_CLASS)) {
                        addClass(el, vnode, EMPTY_CLASS);
                    }

                    if(el.tagName === 'SELECT' && el.querySelector('[value=""]')) {
                        el.querySelector('[value=""]').selected = !value;
                    }
                }

                vnode.context.$watch('value', (value) => {
                    changedValue(vnode.context.$el, value);
                });

                el.addEventListener('blur', event => {
                    if(el.classList.contains(EMPTY_CLASS)) {
                        removeClass(el, vnode, CHANGED_CLASS);
                    }

                    removeClass(el, vnode, FOCUS_CLASS);
                });
             
                el.addEventListener('input', event => {
                    changedValue(event.target, event.target.value);
                });
                
                el.addEventListener('change', event => {
                    changedValue(event.target, event.target.value);
                });

                // Add/remove the has-focus class from the form control
                el.addEventListener('focus', event => {
                    addClass(el, vnode, FOCUS_CLASS);
                });

                // Bubble the native events up to the vue component.
                vnode.context.bindEvents.forEach(name => {
                    el.addEventListener(name, event => {
                        vnode.context.$emit(name, event);
                    });
                });

                if(el.selectedIndex >= 0) {
                    el.setAttribute('data-selected-index', el.selectedIndex);
                }
            },
            inserted(el, binding, vnode) {
                addEmptyClass(el, vnode);

                if(typeof el.selectedIndex === 'number' && el.selectedIndex > -1) {
                    addClass(el, vnode, CHANGED_CLASS);
                }
            },
            update(el, binding, vnode) {
                addEmptyClass(el, vnode);
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

        fileControlClass() {
            return 'form-control-file';
        },

        formGroupClasses() {
            const name = prefix(kebabCase(this.$options.name), this.custom ? CUSTOM_PREFIX : '');

            return this.mergeClasses(name, prefix(this.size, name), {
                'form-group': this.group,
                'has-activity': this.activity,
                'is-valid': !!(this.valid || this.validFeedback),
                'is-invalid': !!(this.invalid || this.invalidFeedback)
            }, this.shadowClassName);
        },

        controlClasses() {
            return {
                'form-control-icon': !!this.icon,
                [this.controlClass]: this.$attrs.type !== 'file',
                [this.controlSizeClass]: this.$attrs.type !== 'file',
                [this.fileControlClass]: this.$attrs.type === 'file',
                [this.pillClasses]: this.pill,
                [this.plaintextClass]: this.plaintext,
                [this.spacing]: !!this.spacing,
                ['is-valid']: !!(this.valid || this.validFeedback),
                ['is-invalid']: !!(this.invalid || this.invalidFeedback),
                [this.shadowClassName]: !!this.shadowClassName
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

        shadowClassName() {
            if(!this.shadow) {
                return;
            }

            return this.shadow === true ? 'shadow' : `shadow-${this.shadow}`;
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
            currentValue: this.value || this.defaultValue
        };
    }

};
