import { defineComponent as $, inject as A, toRaw as F, openBlock as o, createElementBlock as s, normalizeClass as b, normalizeStyle as T, createElementVNode as k, createBlock as z, resolveDynamicComponent as j, toDisplayString as H, createCommentVNode as d, computed as E, resolveComponent as M, resolveDirective as N, renderSlot as a, withDirectives as O, mergeProps as L, createVNode as R, Transition as W, withCtx as B } from "vue";
var D = Object.defineProperty, I = (e, t, i) => t in e ? D(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i, V = (e, t, i) => (I(e, typeof t != "symbol" ? t + "" : t, i), i), v = function() {
  return v = Object.assign || function(e) {
    for (var t, i = 1, r = arguments.length; i < r; i++) {
      t = arguments[i];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, v.apply(this, arguments);
};
function Z(e) {
  return e.toLowerCase();
}
var P = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], G = /[^A-Z0-9]+/gi;
function q(e, t) {
  t === void 0 && (t = {});
  for (var i = t.splitRegexp, r = i === void 0 ? P : i, n = t.stripRegexp, h = n === void 0 ? G : n, u = t.transform, f = u === void 0 ? Z : u, l = t.delimiter, C = l === void 0 ? " " : l, p = w(w(e, r, "$1\0$2"), h, "\0"), y = 0, g = p.length; p.charAt(y) === "\0"; )
    y++;
  for (; p.charAt(g - 1) === "\0"; )
    g--;
  return p.slice(y, g).split("\0").map(f).join(C);
}
function w(e, t, i) {
  return t instanceof RegExp ? e.replace(t, i) : t.reduce(function(r, n) {
    return r.replace(n, i);
  }, e);
}
function J(e, t) {
  return t === void 0 && (t = {}), q(e, v({ delimiter: "." }, t));
}
function m(e, t) {
  return t === void 0 && (t = {}), J(e, v({ delimiter: "-" }, t));
}
class K {
  constructor(t = {}) {
    V(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(t).forEach(([i, r]) => {
      this.register(i, r);
    });
  }
  get(t) {
    const i = this.components.get(
      t = m(t)
    );
    if (i)
      return i;
    throw new Error(`"${t}" has not been registered yet!`);
  }
  register(t, i) {
    return typeof t == "object" ? (Object.entries(t).forEach(([r, n]) => {
      this.register(m(r), n);
    }), this) : (this.components.set(m(t), i), this);
  }
  remove(t) {
    return this.components.delete(m(t)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function Q(e = {}) {
  return new K(e);
}
const U = Q();
function c(e, t = "px") {
  return e != null && e !== !1 && isFinite(e) ? `${e}${t}` : e;
}
const X = $({
  props: {
    absolute: Boolean,
    center: Boolean,
    label: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: "md"
    },
    registry: {
      type: String,
      default: "indicators"
    },
    type: {
      type: [Object, String],
      required: !0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    maxHeight: {
      type: [String, Number],
      default: void 0
    },
    minHeight: {
      type: [String, Number],
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    maxWidth: {
      type: [String, Number],
      default: void 0
    },
    minWidth: {
      type: [String, Number],
      default: void 0
    }
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
        width: c(this.width),
        maxWidth: c(this.maxWidth),
        minWidth: c(this.minWidth),
        height: c(this.height),
        maxHeight: c(this.maxHeight),
        minHeight: c(this.minHeight)
      };
    }
  },
  methods: {
    componentFromRegistry(e) {
      var t;
      try {
        return (t = A(this.registry || "indicators", U)) == null ? void 0 : t.get(e);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : F(this.type);
    }
  }
}), Y = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, n] of t)
    i[r] = n;
  return i;
}, _ = { class: "activity-indicator-content" }, x = {
  key: 0,
  class: "activity-indicator-label"
};
function ee(e, t, i, r, n, h) {
  return o(), s("div", {
    class: b(["activity-indicator", e.classes]),
    style: T(e.style)
  }, [
    k("div", _, [
      (o(), z(j(e.component()), { class: "mx-auto" })),
      e.label ? (o(), s("div", x, H(e.label), 1)) : d("", !0)
    ])
  ], 6);
}
const te = /* @__PURE__ */ Y(X, [["render", ee]]), S = E(() => ({})), ie = /* @__PURE__ */ $({
  __name: "FormControl",
  props: {
    label: null,
    modelValue: null
  },
  setup(e, { expose: t }) {
    return console.log("setup"), console.log(S), t({
      controlAttributes: S
    }), () => {
    };
  }
}), ne = $({
  name: "InputField",
  components: {
    ActivityIndicator: te
  },
  mixins: [
    ie
  ]
});
const re = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, n] of t)
    i[r] = n;
  return i;
}, oe = ["for", "innerHTML"], se = { class: "form-group-inner" }, le = ["innerHTML"], ae = ["innerHTML"];
function ce(e, t, i, r, n, h) {
  const u = M("activity-indicator"), f = N("bind-events");
  return o(), s("div", {
    class: b(e.formGroupClasses)
  }, [
    a(e.$slots, "label", {}, () => [
      e.label ? (o(), s("label", {
        key: 0,
        ref: "label",
        for: e.id,
        class: b(e.labelClass),
        onClick: t[0] || (t[0] = (...l) => e.focus && e.focus(...l)),
        innerHTML: e.label
      }, null, 10, oe)) : d("", !0)
    ]),
    k("div", se, [
      a(e.$slots, "control", {
        bindEvents: e.bindEvents,
        controlAttributes: e.controlAttributes,
        focus: e.focus
      }, () => [
        e.$slots.icon ? (o(), s("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: t[1] || (t[1] = (...l) => e.focus && e.focus(...l))
        }, [
          a(e.$slots, "icon")
        ])) : d("", !0),
        O(k("input", L({ ref: "field" }, e.controlAttributes), null, 16), [
          [f]
        ])
      ]),
      a(e.$slots, "activity", {}, () => [
        R(W, { name: "input-field-fade" }, {
          default: B(() => [
            e.activity ? (o(), z(u, {
              key: "activity",
              ref: "activity",
              type: e.indicator,
              size: e.indicatorSize || e.size
            }, null, 8, ["type", "size"])) : d("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    a(e.$slots, "feedback", {}, () => [
      e.invalidFeedback ? (o(), s("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: e.invalidFeedback
      }, null, 8, le)) : e.validFeedback ? (o(), s("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: e.validFeedback
      }, null, 8, ae)) : d("", !0)
    ]),
    a(e.$slots, "help", {}, () => [
      e.helpText ? (o(), s("small", {
        key: 0,
        ref: "help"
      }, H(e.helpText), 513)) : d("", !0)
    ])
  ], 2);
}
const ue = /* @__PURE__ */ re(ne, [["render", ce]]);
export {
  ue as InputField
};
//# sourceMappingURL=input-field.js.map
