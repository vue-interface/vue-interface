<script lang="ts">
import { isNil, isObject, kebabCase } from 'lodash-es';
import { DirectiveBinding, defineComponent } from 'vue';
import FormControlErrors from './FormControlErrors.vue';
import FormControlFeedback from './FormControlFeedback.vue';
import config from './config.js';

export default defineComponent({
    components: {
        FormControlErrors,
        FormControlFeedback
    },
    directives: {
        bindEvents: {
            created(el: HTMLElement, binding: DirectiveBinding) {
                // @ts-ignore
                binding.instance?.bindEvents?.(el);
            }
        }
    },
    inheritAttrs: false,
    props: {
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
            default: undefined
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
         * The primary class assigned to the form control.
         */
        formControlClass: {
            type: [Array, Object, String],
            default: () => config('controlClass', 'form-control')
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
         * The activity indicator type.
         */
        indicator: {
            type: [Object, String],
            default: undefined
        },

        /**
         * The activity indicator size.
         */
        indicatorSize: {
            type: String,
            default: 'sm'
        },

        /**
         * Force the input to be invalid.
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
         * The model default value.
         */
        modelValue: {
            type: [String, Number, Boolean, Array, Object],
            default: () => undefined
        },

        /**
         * Should the control look like plaintext.
         */
        plaintext: Boolean,

        /**
         * Force the input to be valid.
         */
        valid: Boolean
    },
    emits: [
        'focus',
        'blur',
        'change',
        'click',
        'keypress',
        'keyup',
        'keydown',
        'progress',
        'paste',
        'update:modelValue'
    ],
    data() {
        return {
            currentValue: undefined,
            hasChanged: false,
            hasFocus: false,
            isDirty: this,
        };
    },
    computed: {
        model: {
            get() {
                return this.getModelValue();
            },
            set(value: any) {
                this.setModelValue(value);
            }
        },
        id(): string|undefined {
            return this.$attrs.id
                || Math.random().toString(36).slice(2);
        },
        isEmpty() {
            return isNil(this.model);
        },
        isInvalid() {
            return !!(this.invalid || this.error || this.errors && (
                Array.isArray(this.errors)
                    ? this.errors.length
                    : this.errors[this.$attrs.id || this.$attrs.name]
            ));
        },
        isValid() {
            return !!(this.valid || this.feedback);
        },
        componentName() {
            return this.$options.name;
        },
        controlClass() {
            return this.formControlClass;
        },
        controlAttributes() {
            const attrs = Object.assign({}, this.$attrs, {
                id: this.id,
                class: this.controlClasses
            });
            
            // Delete value from attrs because we dont want it to rebind
            // the static attribute every time the computed re-renders.
            // The currentValue is set from $attrs.value in created().
            delete attrs.value;

            return attrs;
        },
        controlClasses() {
            return {
                [this.controlClass]: !!this.controlClass,
                [this.plaintextClass]: this.plaintext,
                'form-control-icon': !!this.$slots.icon,
                'is-valid': this.isValid,
                'is-invalid': this.isInvalid,
            };
        },
        formGroupClasses() {
            return Object.assign({
                'animated': this.animated,
                'has-activity': this.activity,
                'has-changed': this.hasChanged,
                'has-focus': this.hasFocus,
                'has-icon': !!this.$slots.icon,
                'is-dirty': this.isDirty,
                'is-empty': this.isEmpty,
                'is-invalid': this.isInvalid,
                'is-valid': this.isValid,
                [this.$attrs.class]: !!this.$attrs.class
            }, !!this.componentName && {
                [kebabCase(this.componentName)]: true
            });
        },
        plaintextClass() {
            return 'form-control-plaintext';
        }
    },
    created() {
        // Set the current value before checking the dirty status.
        this.currentValue = this.$attrs.value;
        this.isDirty = !isNil(this.model);
    },
    methods: {
        bindEvents(el: HTMLElement) {
            for(const event of this.$options.emits) {
                el.addEventListener(event, (e: Event) => {
                    this.$emit(event, e);
                });
            }

            el.addEventListener('focus', () => {
                this.isDirty = true;
                this.hasFocus = true;
            });

            el.addEventListener('blur', () => {
                this.hasFocus = false;
            });
        },
        blur() {
            this.$refs.field?.blur();
        },
        focus() {
            this.$refs.field?.focus();
        },
        getFieldErrors() {
            let errors = this.error || this.errors;

            if(this.errors && !Array.isArray(this.errors)) {
                errors = this.errors[this.$attrs.name || this.$attrs.id];
            }

            return !errors || Array.isArray(errors) || isObject(errors) ? errors : [errors];
        },
        getModelValue(): any {
            if(this.modelValue === undefined) {
                return this.currentValue;
            }

            return this.modelValue;
        },
        setModelValue(value: any): void {
            this.hasChanged = true;
            this.currentValue = value;
            this.$emit('update:modelValue', value);
        }
    }
});
</script>