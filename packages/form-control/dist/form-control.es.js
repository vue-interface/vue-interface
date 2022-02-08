var Shadowable = {
  props: {
    dropShadow: [Boolean, String],
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: [Boolean, String],
    shadowableClassPrefix: {
      type: String,
      default: "shadow"
    }
  },
  computed: {
    shadowableClass() {
      const dropShadowClassName = this.dropShadow === true ? "" : this.dropShadow && `-${this.dropShadow}`;
      const shadowClassName = this.shadow === true ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${dropShadowClassName}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${shadowClassName}`]: !!this.shadow
      };
    }
  }
};
function prefix(value, key, delimeter = "-") {
  const string = (key || value).toString().replace(new RegExp(`^${prefix}${delimeter}?`), "");
  return [prefix, string].filter((value2) => !!value2).join(delimeter);
}
function isObject(subject) {
  return !Array.isArray(subject) && typeof subject === "object";
}
var FormControl = {
  inheritAttrs: false,
  mixins: [Shadowable],
  props: {
    activity: {
      type: Boolean,
      default: false
    },
    bindEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    componentName: {
      type: String,
      default() {
        return this.$options.name;
      }
    },
    custom: {
      type: Boolean,
      default: false
    },
    defaultControlClass: {
      type: String,
      default: "form-control"
    },
    defaultValue: {
      default: null
    },
    error: [Boolean, String],
    errors: {
      type: Object,
      default() {
        return {};
      }
    },
    feedback: [String, Array],
    group: {
      type: Boolean,
      default: true
    },
    helpText: [Number, String],
    hideLabel: Boolean,
    indicator: {
      type: String,
      default: "spinner"
    },
    indicatorSize: String,
    inline: Boolean,
    invalid: Boolean,
    legacy: Boolean,
    label: [Number, String],
    labelClass: [Object, String],
    pill: Boolean,
    plaintext: Boolean,
    size: {
      type: String,
      default: "md",
      validate: (value) => ["sm", "md", "lg"].indexOf(value) !== -1
    },
    spacing: String,
    valid: Boolean,
    value: {
      default: null
    }
  },
  directives: {
    bindEvents: {
      bind(el, binding, vnode) {
        function onInput() {
          vnode.context.isEmpty = !el.value;
          if (el.value) {
            vnode.context.currentValue = el.value;
          }
          setSelectedIndex();
          return onInput;
        }
        function setSelectedIndex() {
          if (el.selectedIndex >= -1) {
            el.setAttribute("data-selected-index", el.selectedIndex);
          } else {
            el.removeAttribute("data-selected-index");
          }
        }
        el.addEventListener("focus", () => {
          vnode.context.hasFocus = true;
        });
        el.addEventListener("blur", () => {
          vnode.context.hasFocus = false;
        });
        el.addEventListener(el.tagName === "SELECT" ? "change" : "input", onInput());
        vnode.context.hasChanged = !!el.value;
        vnode.context.bindEvents.forEach((name) => {
          el.addEventListener(name, (event) => {
            vnode.context.$emit(name, event);
          });
        });
        if (el.tagName === "SELECT") {
          const opt = el.querySelector('[value=""]');
          if (opt && opt.value === el.value) {
            vnode.context.defaultEmpty = true;
          }
        }
      }
    }
  },
  methods: {
    blur() {
      if (this.getInputField()) {
        this.getInputField().blur();
      }
    },
    focus() {
      if (this.getInputField()) {
        this.getInputField().focus();
      }
    },
    getInputField() {
      return this.$el.querySelector(".form-control, input, select, textarea");
    },
    getFieldErrors() {
      let errors = this.error || this.errors;
      if (isObject(this.errors)) {
        errors = this.errors[this.$attrs.name || this.$attrs.id];
      }
      return !errors || Array.isArray(errors) || isObject(errors) ? errors : [errors];
    },
    onInput(e) {
      this.$emit("input", e.target.value);
      this.$emit("update:value", e.target.value);
    }
  },
  computed: {
    id() {
      return this.$attrs.id || Math.random().toString(36).substring(2, 15);
    },
    controlAttributes() {
      return Object.keys(this.$attrs).concat([["id", this.id], ["class", this.controlClasses]]).reduce((carry, key) => {
        if (Array.isArray(key)) {
          carry[key[0]] = key[1];
        } else {
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
      return "custom-control";
    },
    formGroupClasses() {
      return {
        [this.componentName]: !!this.componentName,
        [prefix(this.size, this.componentName)]: !!this.size,
        [prefix(this.componentName, "custom")]: this.custom,
        [prefix(this.size, prefix(this.componentName, "custom"))]: this.custom && this.size,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback)
      };
    },
    controlClasses() {
      return Object.assign({
        [this.controlClass]: !!this.controlClass,
        [this.controlSizeClass]: !!this.controlSizeClass,
        "form-control-icon": !!this.$slots.icon,
        "is-valid": !!(this.valid || this.validFeedback),
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        [this.pillClasses]: this.pill,
        [this.plaintextClass]: this.plaintext,
        [this.spacing]: !!this.spacing
      }, this.shadowableClass);
    },
    hasDefaultSlot() {
      return !!this.$slots.default;
    },
    invalidFeedback() {
      if (this.error) {
        return this.error;
      }
      const errors = this.getFieldErrors();
      return Array.isArray(errors) ? errors.filter((error) => {
        return error && typeof error === "string";
      }).join("<br>") : errors;
    },
    pillClasses() {
      return "rounded rounded-pill";
    },
    plaintextClass() {
      return "form-control-plaintext";
    },
    validFeedback() {
      return Array.isArray(this.feedback) ? this.feedback.join("<br>") : this.feedback;
    }
  },
  watch: {
    value(value) {
      this.currentValue = value;
    },
    currentValue() {
      this.hasChanged = true;
    }
  },
  mounted() {
    if (this.value === null && this.defaultValue !== null) {
      this.$emit("input", this.defaultValue);
    }
  },
  data() {
    return {
      currentValue: this.value || this.defaultValue,
      defaultEmpty: false,
      hasChanged: false,
      hasFocus: false,
      isEmpty: false
    };
  }
};
export { FormControl };
