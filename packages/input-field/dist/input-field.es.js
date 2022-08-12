import { openBlock as a, createElementBlock as d, normalizeClass as w, normalizeStyle as B, createElementVNode as E, createBlock as O, resolveDynamicComponent as N, createCommentVNode as p, toDisplayString as L, resolveComponent as P, resolveDirective as R, renderSlot as f, withDirectives as H, mergeProps as D, createVNode as M, Transition as Z, withCtx as G } from "vue";
var V = {
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
      const e = this.dropShadow === !0 ? "" : this.dropShadow && `-${this.dropShadow}`, t = this.shadow === !0 ? "" : this.shadow && `-${this.shadow}`;
      return {
        [`${this.dropShadowableClassPrefix}${e}`]: !!this.dropShadow,
        [`${this.shadowableClassPrefix}${t}`]: !!this.shadow
      };
    }
  }
}, b = function() {
  return b = Object.assign || function(t) {
    for (var i, s = 1, r = arguments.length; s < r; s++) {
      i = arguments[s];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, b.apply(this, arguments);
};
function q(e) {
  return e.toLowerCase();
}
var W = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], U = /[^A-Z0-9]+/gi;
function X(e, t) {
  t === void 0 && (t = {});
  for (var i = t.splitRegexp, s = i === void 0 ? W : i, r = t.stripRegexp, n = r === void 0 ? U : r, u = t.transform, g = u === void 0 ? q : u, o = t.delimiter, S = o === void 0 ? " " : o, l = A(A(e, s, "$1\0$2"), n, "\0"), c = 0, h = l.length; l.charAt(c) === "\0"; )
    c++;
  for (; l.charAt(h - 1) === "\0"; )
    h--;
  return l.slice(c, h).split("\0").map(g).join(S);
}
function A(e, t, i) {
  return t instanceof RegExp ? e.replace(t, i) : t.reduce(function(s, r) {
    return s.replace(r, i);
  }, e);
}
function J(e, t) {
  return t === void 0 && (t = {}), X(e, b({
    delimiter: "."
  }, t));
}
function j(e, t) {
  return t === void 0 && (t = {}), J(e, b({
    delimiter: "-"
  }, t));
}
const _ = {};
function m(...e) {
  if (!e.length)
    return _;
  const [t, i] = e;
  return typeof t == "string" ? typeof _[t] < "u" ? _[t] : i : Array.isArray(t) ? t.reduce((s, r) => Object.assign(s, {
    [r]: _[r]
  }), {}) : Object.assign(_, ...e);
}
function $(e, t, i = "-") {
  const s = t.toString().replace(new RegExp(`^${e}${i}?`), "");
  return [j(s), e].filter((r) => !!r).join(i);
}
function F(e) {
  return !Array.isArray(e) && typeof e == "object";
}
function k(e) {
  return e === void 0;
}
const K = {
  directives: {
    bindEvents: {
      beforeMount(e, t, i) {
        t.instance.bindEvents(e);
      }
    }
  },
  mixins: [V],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => m("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => m("defaultControlClass", "form-control")
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
      default: () => m("group", !0)
    },
    helpText: [Number, String],
    hideLabel: Boolean,
    indicator: {
      type: String,
      default: () => m("indicator", "spinner")
    },
    indicatorSize: String,
    inline: Boolean,
    invalid: Boolean,
    label: [Number, String],
    labelClass: {
      type: [Object, String],
      default: () => m("labelClass", "form-label")
    },
    modelValue: {
      default: void 0
    },
    pill: Boolean,
    plaintext: Boolean,
    size: String,
    spacing: String,
    valid: Boolean
  },
  data() {
    return {
      defaultEmpty: !1,
      hasChanged: !1,
      hasFocus: !1,
      isEmpty: !0
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
      return Object.fromEntries(Object.entries(this.$attrs).concat([["id", this.id], ["class", this.controlClasses]]));
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return $(this.size, this.controlClass);
    },
    formGroupClasses() {
      return {
        [j(this.componentName)]: !!this.componentName,
        [this.size && $(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && $(this.size, "form-group")]: !!this.size,
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
      const e = this.getFieldErrors();
      return Array.isArray(e) ? e.filter((t) => t && typeof t == "string").join("<br>") : e;
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
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(e, t) {
      t || (t = this.onInput);
      const i = e.querySelectorAll("option")[e.selectedIndex];
      k(this.modelValue) ? k(i) || (e.value = i.value) : e.value = this.modelValue, e.value && t(e.value), this.hasChanged = !!e.value, this.isEmpty = !e.value, e.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), e.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), e.addEventListener("input", (s) => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), e.addEventListener(e.tagName === "SELECT" ? "change" : "input", () => t(e.value)), this.nativeEvents.forEach((s) => {
        e.addEventListener(s, (r) => {
          this.$emit(s, r);
        });
      });
    },
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
      let e = this.error || this.errors;
      return this.errors && F(this.errors) && (e = this.errors[this.$attrs.name || this.$attrs.id]), !e || Array.isArray(e) || F(e) ? e : [e];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(e) {
      this.$emit("update:modelValue", e);
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
var C = function() {
  return C = Object.assign || function(t) {
    for (var i, s = 1, r = arguments.length; s < r; s++) {
      i = arguments[s];
      for (var n in i)
        Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
    }
    return t;
  }, C.apply(this, arguments);
};
function Q(e) {
  return e.toLowerCase();
}
var Y = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], ee = /[^A-Z0-9]+/gi;
function te(e, t) {
  t === void 0 && (t = {});
  for (var i = t.splitRegexp, s = i === void 0 ? Y : i, r = t.stripRegexp, n = r === void 0 ? ee : r, u = t.transform, g = u === void 0 ? Q : u, o = t.delimiter, S = o === void 0 ? " " : o, l = z(z(e, s, "$1\0$2"), n, "\0"), c = 0, h = l.length; l.charAt(c) === "\0"; )
    c++;
  for (; l.charAt(h - 1) === "\0"; )
    h--;
  return l.slice(c, h).split("\0").map(g).join(S);
}
function z(e, t, i) {
  return t instanceof RegExp ? e.replace(t, i) : t.reduce(function(s, r) {
    return s.replace(r, i);
  }, e);
}
function ie(e, t) {
  return t === void 0 && (t = {}), te(e, C({
    delimiter: "."
  }, t));
}
function y(e, t) {
  return t === void 0 && (t = {}), ie(e, C({
    delimiter: "-"
  }, t));
}
class T {
  constructor(t = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([i, s]) => {
      this.register(i, s);
    });
  }
  get(t) {
    const i = this.components.get(t = y(t));
    if (i)
      return i;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, i) {
    return typeof t == "object" ? (Object.entries(t).forEach(([s, r]) => {
      this.register(y(s), r);
    }), this) : (this.components.set(y(t), i), this);
  }
  remove(t) {
    return this.components.delete(y(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function se(...e) {
  return new T(...e);
}
const x = se();
const I = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, r] of t)
    i[s] = r;
  return i;
};
function v(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const re = {
  name: "ActivityIndicator",
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: T,
      default() {
        return x;
      }
    },
    type: {
      type: String,
      required: !0
    },
    height: [String, Number],
    maxHeight: [String, Number],
    minHeight: [String, Number],
    width: [String, Number],
    maxWidth: [String, Number],
    minWidth: [String, Number]
  },
  data: () => ({
    is: null
  }),
  computed: {
    classes() {
      return {
        "activity-indicator-center": this.center,
        "activity-indicator-absolute": this.absolute,
        [this.size && `activity-indicator-${this.size}`]: !!this.size
      };
    },
    style() {
      return {
        width: v(this.width),
        maxWidth: v(this.maxWidth),
        minWidth: v(this.minWidth),
        height: v(this.height),
        maxHeight: v(this.maxHeight),
        minHeight: v(this.minHeight)
      };
    }
  },
  async mounted() {
    const e = await this.component();
    this.is = () => e;
  },
  methods: {
    async component() {
      let e = x.get(this.type);
      return e instanceof Promise ? e : (typeof e == "function" && (e = await e()), e.default ? e.default : e);
    }
  }
}, ne = { class: "activity-indicator-content" }, ae = {
  key: 1,
  class: "activity-indicator-label"
};
function oe(e, t, i, s, r, n) {
  return a(), d("div", {
    class: w(["activity-indicator", n.classes]),
    style: B(n.style)
  }, [
    E("div", ne, [
      e.is ? (a(), O(N(e.is()), {
        key: 0,
        class: "mx-auto"
      })) : p("", !0),
      i.label ? (a(), d("div", ae, L(i.label), 1)) : p("", !0)
    ])
  ], 6);
}
const le = /* @__PURE__ */ I(re, [["render", oe]]);
const de = {
  name: "InputField",
  components: {
    ActivityIndicator: le
  },
  mixins: [
    K
  ]
}, ue = ["for", "innerHTML"], ce = { class: "form-group-inner" }, he = ["innerHTML"], pe = ["innerHTML"];
function fe(e, t, i, s, r, n) {
  const u = P("activity-indicator"), g = R("bind-events");
  return a(), d("div", {
    class: w(e.formGroupClasses)
  }, [
    f(e.$slots, "label", {}, () => [
      e.label ? (a(), d("label", {
        key: 0,
        ref: "label",
        for: e.id,
        class: w(e.labelClass),
        onClick: t[0] || (t[0] = (...o) => e.focus && e.focus(...o)),
        innerHTML: e.label
      }, null, 10, ue)) : p("", !0)
    ]),
    E("div", ce, [
      f(e.$slots, "control", {
        bindEvents: e.bindEvents,
        controlAttributes: e.controlAttributes,
        focus: e.focus
      }, () => [
        e.$slots.icon ? (a(), d("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[1] || (t[1] = (...o) => e.focus && e.focus(...o))
        }, [
          f(e.$slots, "icon")
        ])) : p("", !0),
        H(E("input", D({ ref: "field" }, e.controlAttributes), null, 16), [
          [g]
        ])
      ]),
      f(e.$slots, "activity", {}, () => [
        M(Z, { name: "input-field-fade" }, {
          default: G(() => [
            e.activity ? (a(), O(u, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : p("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    f(e.$slots, "feedback", {}, () => [
      e.invalidFeedback ? (a(), d("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, he)) : e.validFeedback ? (a(), d("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, pe)) : p("", !0)
    ]),
    f(e.$slots, "help", {}, () => [
      e.helpText ? (a(), d("small", {
        key: 0,
        ref: "help"
      }, L(e.helpText), 513)) : p("", !0)
    ])
  ], 2);
}
const ge = /* @__PURE__ */ I(de, [["render", fe]]);
export {
  ge as InputField
};
