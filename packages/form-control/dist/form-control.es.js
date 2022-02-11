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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function lowerCase(str) {
  return str.toLowerCase();
}
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
function noCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
  var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
  var start = 0;
  var end = result.length;
  while (result.charAt(start) === "\0")
    start++;
  while (result.charAt(end - 1) === "\0")
    end--;
  return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
function replace(input, re, value) {
  if (re instanceof RegExp)
    return input.replace(re, value);
  return re.reduce(function(input2, re2) {
    return input2.replace(re2, value);
  }, input);
}
function dotCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return noCase(input, __assign({
    delimiter: "."
  }, options));
}
function paramCase(input, options) {
  if (options === void 0) {
    options = {};
  }
  return dotCase(input, __assign({
    delimiter: "-"
  }, options));
}
function prefix(key, value, delimeter = "-") {
  const string = value.toString().replace(new RegExp(`^${key}${delimeter}?`), "");
  return [paramCase(string), key].filter((value2) => !!value2).join(delimeter);
}
function isObject(subject) {
  return !Array.isArray(subject) && typeof subject === "object";
}
var FormControl = {
  directives: {
    bindEvents: {
      bind(el, binding, vnode) {
        el.addEventListener("focus", () => {
          vnode.context.hasFocus = true;
        });
        el.addEventListener("blur", () => {
          vnode.context.hasFocus = false;
        });
        el.addEventListener(el.tagName === "SELECT" ? "change" : "input", (e) => {
          vnode.context.isEmpty = !el.value;
          vnode.context.currentValue = el.value;
        });
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
  mixins: [Shadowable],
  inheritAttrs: false,
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
    defaultControlClass: {
      type: String,
      default: "form-control"
    },
    defaultValue: {
      default: null
    },
    error: [Boolean, String, Array],
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
    label: [Number, String],
    labelClass: {
      type: [Object, String],
      default: "form-label"
    },
    pill: Boolean,
    plaintext: Boolean,
    size: String,
    spacing: String,
    valid: Boolean,
    value: {
      default: null
    }
  },
  data() {
    return {
      currentValue: this.value || this.defaultValue,
      defaultEmpty: false,
      hasChanged: false,
      hasFocus: false,
      isEmpty: !(this.value || this.defaultValue)
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name;
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
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return prefix(this.size, this.controlClass);
    },
    formGroupClasses() {
      console.log(this.$slots.icon);
      return {
        [paramCase(this.componentName)]: !!this.componentName,
        [this.size && prefix(this.size, this.componentName)]: !!this.size,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && prefix(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
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
      if (this.error === "") {
        return null;
      }
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
    hasFocus() {
      if (!this.getInputField().readOnly) {
        this.hasChanged = true;
      }
    },
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
  }
};
export { FormControl };
