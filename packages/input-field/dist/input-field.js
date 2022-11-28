import { defineComponent as S, inject as N, openBlock as r, createElementBlock as l, normalizeClass as k, normalizeStyle as I, createElementVNode as A, createBlock as O, resolveDynamicComponent as H, createCommentVNode as p, toDisplayString as B, resolveComponent as M, resolveDirective as T, renderSlot as f, withDirectives as P, mergeProps as Z, createVNode as x, Transition as R, withCtx as V } from "vue";
function v(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const W = S({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: String,
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
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
  setup(t) {
    return {
      registryInstance: N(t.registry || "indicators")
    };
  },
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
    const t = await this.component();
    this.is = () => t;
  },
  methods: {
    async component() {
      let t = this.registryInstance.get(this.type);
      return t instanceof Promise ? t : (typeof t == "function" && (t = await t()), t.default ? t.default : t);
    }
  }
}), D = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, s] of e)
    i[n] = s;
  return i;
}, q = { class: "activity-indicator-content" }, G = {
  key: 1,
  class: "activity-indicator-label"
};
function _(t, e, i, n, s, d) {
  return r(), l("div", {
    class: k(["activity-indicator", t.classes]),
    style: I(t.style)
  }, [
    A("div", q, [
      t.is ? (r(), O(H(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : p("", !0),
      t.label ? (r(), l("div", G, B(t.label), 1)) : p("", !0)
    ])
  ], 6);
}
const J = /* @__PURE__ */ D(W, [["render", _]]);
var K = Object.defineProperty, Q = (t, e, i) => e in t ? K(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, U = (t, e, i) => (Q(t, typeof e != "symbol" ? e + "" : e, i), i), $ = function() {
  return $ = Object.assign || function(t) {
    for (var e, i = 1, n = arguments.length; i < n; i++) {
      e = arguments[i];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, $.apply(this, arguments);
};
function X(t) {
  return t.toLowerCase();
}
var Y = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], tt = /[^A-Z0-9]+/gi;
function et(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, n = i === void 0 ? Y : i, s = e.stripRegexp, d = s === void 0 ? tt : s, u = e.transform, m = u === void 0 ? X : u, o = e.delimiter, w = o === void 0 ? " " : o, a = F(F(t, n, "$1\0$2"), d, "\0"), c = 0, h = a.length; a.charAt(c) === "\0"; )
    c++;
  for (; a.charAt(h - 1) === "\0"; )
    h--;
  return a.slice(c, h).split("\0").map(m).join(w);
}
function F(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(n, s) {
    return n.replace(s, i);
  }, t);
}
function it(t, e) {
  return e === void 0 && (e = {}), et(t, $({ delimiter: "." }, e));
}
function b(t, e) {
  return e === void 0 && (e = {}), it(t, $({ delimiter: "-" }, e));
}
class st {
  constructor(e = {}) {
    U(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, n]) => {
      this.register(i, n);
    });
  }
  get(e) {
    const i = this.components.get(
      e = b(e)
    );
    if (i)
      return i;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, i) {
    return typeof e == "object" ? (Object.entries(e).forEach(([n, s]) => {
      this.register(b(n), s);
    }), this) : (this.components.set(b(e), i), this);
  }
  remove(e) {
    return this.components.delete(b(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function nt(t = {}) {
  return new st(t);
}
nt();
const g = {};
function y(...t) {
  if (!t.length)
    return g;
  const [e, i] = t;
  return typeof e == "string" ? typeof g[e] < "u" ? g[e] : i : Array.isArray(e) ? e.reduce((n, s) => Object.assign(n, {
    [s]: g[s]
  }), {}) : Object.assign(g, ...t);
}
const rt = S({
  props: {
    dropShadow: {
      type: [Boolean, String],
      default: void 0
    },
    dropShadowableClassPrefix: {
      type: String,
      default: "drop-shadow"
    },
    shadow: {
      type: [Boolean, String],
      default: void 0
    },
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
});
var C = function() {
  return C = Object.assign || function(t) {
    for (var e, i = 1, n = arguments.length; i < n; i++) {
      e = arguments[i];
      for (var s in e)
        Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, C.apply(this, arguments);
};
function ot(t) {
  return t.toLowerCase();
}
var at = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], lt = /[^A-Z0-9]+/gi;
function dt(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, n = i === void 0 ? at : i, s = e.stripRegexp, d = s === void 0 ? lt : s, u = e.transform, m = u === void 0 ? ot : u, o = e.delimiter, w = o === void 0 ? " " : o, a = z(z(t, n, "$1\0$2"), d, "\0"), c = 0, h = a.length; a.charAt(c) === "\0"; )
    c++;
  for (; a.charAt(h - 1) === "\0"; )
    h--;
  return a.slice(c, h).split("\0").map(m).join(w);
}
function z(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(n, s) {
    return n.replace(s, i);
  }, t);
}
function ut(t, e) {
  return e === void 0 && (e = {}), dt(t, C({ delimiter: "." }, e));
}
function L(t, e) {
  return e === void 0 && (e = {}), ut(t, C({ delimiter: "-" }, e));
}
function E(t, e, i = "-") {
  const n = e.toString().replace(new RegExp(`^${t}${i}?`), "");
  return [
    L(n),
    t
  ].filter((s) => !!s).join(i);
}
function j(t) {
  return !Array.isArray(t) && typeof t == "object";
}
function ct(t) {
  return t === void 0;
}
const ht = S({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var i, n;
        (n = (i = e.instance) == null ? void 0 : i.bindEvents) == null || n.call(i, t);
      }
    }
  },
  mixins: [
    rt
  ],
  inheritAttrs: !1,
  props: {
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => y("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => y("defaultControlClass", "form-control")
    },
    error: {
      type: [String, Array, Boolean],
      default: void 0
    },
    errors: {
      type: [Array, Object, Boolean],
      default() {
        return {};
      }
    },
    feedback: {
      type: [String, Array],
      default: void 0
    },
    group: {
      type: Boolean,
      default: () => y("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: String,
      default: () => y("indicator", "spinner")
    },
    indicatorSize: {
      type: String,
      default: void 0
    },
    inline: Boolean,
    invalid: Boolean,
    label: {
      type: [Number, String],
      default: void 0
    },
    labelClass: {
      type: [Object, String],
      default: () => y("labelClass", "form-label")
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
      return Object.fromEntries(
        Object.entries(this.$attrs).concat([
          ["id", this.id],
          ["class", this.controlClasses]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return E(this.size, this.controlClass);
    },
    formGroupClasses() {
      return {
        [L(this.componentName)]: !!this.componentName,
        [this.size && E(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && E(this.size, "form-group")]: !!this.size,
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
    defaultEmpty() {
      this.hasChanged = !0;
    }
  },
  methods: {
    bindEvents(t, e) {
      var i;
      e || (e = this.onInput);
      const n = t instanceof HTMLSelectElement ? (i = t.querySelectorAll("option")) == null ? void 0 : i[t.selectedIndex] : null;
      ct(this.modelValue) ? n && (t.value = n == null ? void 0 : n.value) : t.value = this.modelValue, t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", (s) => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((s) => {
        t.addEventListener(s, (d) => {
          this.$emit(s, d);
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
      return this.$el.querySelector(
        ".form-control, input, select, textarea"
      );
    },
    getFieldErrors() {
      let t = this.error || this.errors;
      return this.errors && j(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || j(t) ? t : [t];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(t) {
      this.$emit("update:modelValue", t);
    }
  }
}), pt = S({
  components: {
    ActivityIndicator: J
  },
  mixins: [
    ht
  ]
});
const ft = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, s] of e)
    i[n] = s;
  return i;
}, vt = ["for", "innerHTML"], mt = { class: "form-group-inner" }, gt = ["innerHTML"], yt = ["innerHTML"];
function bt(t, e, i, n, s, d) {
  const u = M("activity-indicator"), m = T("bind-events");
  return r(), l("div", {
    class: k(t.formGroupClasses)
  }, [
    f(t.$slots, "label", {}, () => [
      t.label ? (r(), l("label", {
        key: 0,
        ref: "label",
        for: t.id,
        class: k(t.labelClass),
        onClick: e[0] || (e[0] = (...o) => t.focus && t.focus(...o)),
        innerHTML: t.label
      }, null, 10, vt)) : p("", !0)
    ]),
    A("div", mt, [
      f(t.$slots, "control", {
        bindEvents: t.bindEvents,
        controlAttributes: t.controlAttributes,
        focus: t.focus
      }, () => [
        t.$slots.icon ? (r(), l("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: e[1] || (e[1] = (...o) => t.focus && t.focus(...o))
        }, [
          f(t.$slots, "icon")
        ])) : p("", !0),
        P(A("input", Z({ ref: "field" }, t.controlAttributes), null, 16), [
          [m]
        ])
      ]),
      f(t.$slots, "activity", {}, () => [
        x(R, { name: "input-field-fade" }, {
          default: V(() => [
            t.activity ? (r(), O(u, {
              key: "activity",
              ref: "activity",
              type: t.indicator,
              size: t.indicatorSize || t.size
            }, null, 8, ["type", "size"])) : p("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    f(t.$slots, "feedback", {}, () => [
      t.invalidFeedback ? (r(), l("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: t.invalidFeedback
      }, null, 8, gt)) : t.validFeedback ? (r(), l("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: t.validFeedback
      }, null, 8, yt)) : p("", !0)
    ]),
    f(t.$slots, "help", {}, () => [
      t.helpText ? (r(), l("small", {
        key: 0,
        ref: "help"
      }, B(t.helpText), 513)) : p("", !0)
    ])
  ], 2);
}
const Ct = /* @__PURE__ */ ft(pt, [["render", bt]]);
export {
  Ct as InputField
};
