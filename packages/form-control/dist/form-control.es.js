const l = {};
function i(...t) {
  if (!t.length)
    return l;
  const [e, r] = t;
  return typeof e == "string" ? typeof l[e] < "u" ? l[e] : r : Array.isArray(e) ? e.reduce((s, a) => Object.assign(s, {
    [a]: l[a]
  }), {}) : Object.assign(l, ...t);
}
var b = {
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
      const t = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, e = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${t}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${e}`]: !!this.shadow
      };
    }
  }
}, u = function() {
  return u = Object.assign || function(e) {
    for (var r, s = 1, a = arguments.length; s < a; s++) {
      r = arguments[s];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, u.apply(this, arguments);
};
function S(t) {
  return t.toLowerCase();
}
var w = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], $ = /[^A-Z0-9]+/gi;
function E(t, e) {
  e === void 0 && (e = {});
  for (var r = e.splitRegexp, s = r === void 0 ? w : r, a = e.stripRegexp, n = a === void 0 ? $ : a, f = e.transform, y = f === void 0 ? S : f, p = e.delimiter, C = p === void 0 ? " " : p, o = g(g(t, s, "$1\0$2"), n, "\0"), h = 0, d = o.length; o.charAt(h) === "\0"; )
    h++;
  for (; o.charAt(d - 1) === "\0"; )
    d--;
  return o.slice(h, d).split("\0").map(y).join(C);
}
function g(t, e, r) {
  return e instanceof RegExp ? t.replace(e, r) : e.reduce(function(s, a) {
    return s.replace(a, r);
  }, t);
}
function A(t, e) {
  return e === void 0 && (e = {}), E(t, u({
    delimiter: "."
  }, e));
}
function m(t, e) {
  return e === void 0 && (e = {}), A(t, u({
    delimiter: "-"
  }, e));
}
function c(t, e, r = "-") {
  const s = e.toString().replace(new RegExp(`^${t}${r}?`), "");
  return [m(s), t].filter((a) => !!a).join(r);
}
function v(t) {
  return !Array.isArray(t) && typeof t == "object";
}
const F = {
  directives: {
    bindEvents: (t, e, r) => {
      if (t.addEventListener("focus", () => {
        e.instance.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        e.instance.hasFocus = !1;
      }), t.addEventListener("input", (s) => {
        e.instance.isEmpty = !t.value, e.instance.currentValue = t.value;
      }), e.instance.hasChanged = !!t.value, e.instance.bindEvents.forEach((s) => {
        t.addEventListener(s, (a) => {
          e.instance.$emit(s, a);
        });
      }), t.tagName === "SELECT") {
        const s = t.querySelector('[value=""]');
        s && s.value === t.value && (e.instance.defaultEmpty = !0), e.instance.isEmpty = !t.querySelector("[selected]") && !t.value;
      }
    }
  },
  mixins: [b],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => i("animated", !1)
    },
    bindEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => i("defaultControlClass", "form-control")
    },
    defaultValue: {
      default: () => i("defaultValue", null)
    },
    error: [String, Array, Boolean],
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    feedback: [String, Array],
    group: {
      type: Boolean,
      default: () => i("group", !0)
    },
    helpText: [Number, String],
    hideLabel: Boolean,
    indicator: {
      type: String,
      default: () => i("indicator", "spinner")
    },
    indicatorSize: String,
    inline: Boolean,
    invalid: Boolean,
    label: [Number, String],
    labelClass: {
      type: [Object, String],
      default: () => i("labelClass", "form-label")
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
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !(this.value || this.defaultValue)
    };
  },
  computed: {
    id() {
      return this.$attrs.id || this.$attrs.name;
    },
    componentName() {
      return this.$options.name;
    },
    controlAttributes() {
      return Object.keys(this.$attrs).concat([["id", this.id], ["class", this.controlClasses]]).reduce((t, e) => Array.isArray(e) ? Object.assign(t, {
        [e[0]]: e[1]
      }) : Object.assign(t, {
        [e]: this.$attrs[e]
      }), {});
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return c(this.size, this.controlClass);
    },
    formGroupClasses() {
      return {
        [m(this.componentName)]: !!this.componentName,
        [this.size && c(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && c(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
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
      if (this.error === "")
        return null;
      if (this.error)
        return this.error;
      const t = this.getFieldErrors();
      return Array.isArray(t) ? t.filter((e) => e && typeof e == "string").join("<br>") : t;
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
      this.shouldChangeOnFocus() && (this.hasChanged = !0);
    },
    value(t) {
      this.currentValue = t;
    },
    currentValue() {
      this.hasChanged = !0;
    },
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  mounted() {
    this.$emit("update:value", this.value);
  },
  methods: {
    blur() {
      this.getInputField() && this.getInputField().blur();
    },
    focus() {
      this.getInputField() && this.getInputField().focus();
    },
    getInputField() {
      return this.$el.querySelector(".form-control, input, select, textarea");
    },
    getFieldErrors() {
      let t = this.error || this.errors;
      return this.errors && v(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || v(t) ? t : [t];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(t) {
      this.$emit("input", t.target.value), this.$emit("update:value", t.target.value);
    }
  }
};
export {
  F as FormControl,
  i as config
};
