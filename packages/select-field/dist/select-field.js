import { defineComponent as E, inject as nt, toRaw as rt, openBlock as s, createElementBlock as u, normalizeClass as j, normalizeStyle as st, createElementVNode as I, createBlock as T, resolveDynamicComponent as ut, toDisplayString as H, createCommentVNode as c, resolveComponent as ot, resolveDirective as at, renderSlot as a, withDirectives as lt, mergeProps as dt, createVNode as ct, Transition as ht, withCtx as ft } from "vue";
var pt = Object.defineProperty, vt = (t, e, i) => e in t ? pt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, yt = (t, e, i) => (vt(t, typeof e != "symbol" ? e + "" : e, i), i), C = function() {
  return C = Object.assign || function(t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      e = arguments[i];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, C.apply(this, arguments);
};
function gt(t) {
  return t.toLowerCase();
}
var mt = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], bt = /[^A-Z0-9]+/gi;
function Ct(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, r = i === void 0 ? mt : i, n = e.stripRegexp, o = n === void 0 ? bt : n, g = e.transform, $ = g === void 0 ? gt : g, l = e.delimiter, it = l === void 0 ? " " : l, m = x(x(t, r, "$1\0$2"), o, "\0"), S = 0, F = m.length; m.charAt(S) === "\0"; )
    S++;
  for (; m.charAt(F - 1) === "\0"; )
    F--;
  return m.slice(S, F).split("\0").map($).join(it);
}
function x(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(r, n) {
    return r.replace(n, i);
  }, t);
}
function Et(t, e) {
  return e === void 0 && (e = {}), Ct(t, C({ delimiter: "." }, e));
}
function b(t, e) {
  return e === void 0 && (e = {}), Et(t, C({ delimiter: "-" }, e));
}
let $t = class {
  constructor(e = {}) {
    yt(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, r]) => {
      this.register(i, r);
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
    return typeof e == "object" ? (Object.entries(e).forEach(([r, n]) => {
      this.register(b(r), n);
    }), this) : (this.components.set(b(e), i), this);
  }
  remove(e) {
    return this.components.delete(b(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function St(t = {}) {
  return new $t(t);
}
const Ft = St();
function d(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const At = E({
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
        width: d(this.width),
        maxWidth: d(this.maxWidth),
        minWidth: d(this.minWidth),
        height: d(this.height),
        maxHeight: d(this.maxHeight),
        minHeight: d(this.minHeight)
      };
    }
  },
  // async mounted() {
  //     const component = await this.component();
  //     this.is = () => component;
  // },
  methods: {
    componentFromRegistry(t) {
      var e;
      try {
        return (e = nt(this.registry || "indicators", Ft)) == null ? void 0 : e.get(t);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : rt(this.type);
    }
  }
}), jt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, xt = { class: "activity-indicator-content" }, kt = {
  key: 0,
  class: "activity-indicator-label"
};
function Ot(t, e, i, r, n, o) {
  return s(), u("div", {
    class: j(["activity-indicator", t.classes]),
    style: st(t.style)
  }, [
    I("div", xt, [
      (s(), T(ut(t.component()), { class: "mx-auto" })),
      t.label ? (s(), u("div", kt, H(t.label), 1)) : c("", !0)
    ])
  ], 6);
}
const wt = /* @__PURE__ */ jt(At, [["render", Ot]]), p = {};
function v(...t) {
  if (!t.length)
    return p;
  const [e, i] = t;
  return typeof e == "string" ? typeof p[e] < "u" ? p[e] : i : Array.isArray(e) ? e.reduce((r, n) => Object.assign(r, {
    [n]: p[n]
  }), {}) : Object.assign(p, ...t);
}
const Dt = E({
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
var zt = typeof global == "object" && global && global.Object === Object && global;
const Bt = zt;
var Lt = typeof self == "object" && self && self.Object === Object && self, Nt = Bt || Lt || Function("return this")();
const It = Nt;
var Tt = It.Symbol;
const f = Tt;
var R = Object.prototype, Ht = R.hasOwnProperty, Rt = R.toString, y = f ? f.toStringTag : void 0;
function Zt(t) {
  var e = Ht.call(t, y), i = t[y];
  try {
    t[y] = void 0;
    var r = !0;
  } catch {
  }
  var n = Rt.call(t);
  return r && (e ? t[y] = i : delete t[y]), n;
}
var Mt = Object.prototype, Ut = Mt.toString;
function Pt(t) {
  return Ut.call(t);
}
var Vt = "[object Null]", Wt = "[object Undefined]", k = f ? f.toStringTag : void 0;
function Gt(t) {
  return t == null ? t === void 0 ? Wt : Vt : k && k in Object(t) ? Zt(t) : Pt(t);
}
function qt(t) {
  return t != null && typeof t == "object";
}
var Yt = "[object Symbol]";
function Jt(t) {
  return typeof t == "symbol" || qt(t) && Gt(t) == Yt;
}
function Kt(t, e) {
  for (var i = -1, r = t == null ? 0 : t.length, n = Array(r); ++i < r; )
    n[i] = e(t[i], i, t);
  return n;
}
var Xt = Array.isArray;
const Qt = Xt;
var _t = 1 / 0, O = f ? f.prototype : void 0, w = O ? O.toString : void 0;
function Z(t) {
  if (typeof t == "string")
    return t;
  if (Qt(t))
    return Kt(t, Z) + "";
  if (Jt(t))
    return w ? w.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -_t ? "-0" : e;
}
function M(t) {
  return t == null ? "" : Z(t);
}
function te(t, e, i, r) {
  var n = -1, o = t == null ? 0 : t.length;
  for (r && o && (i = t[++n]); ++n < o; )
    i = e(i, t[n], n, t);
  return i;
}
function ee(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var ie = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, ne = ee(ie);
const re = ne;
var se = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ue = "\\u0300-\\u036f", oe = "\\ufe20-\\ufe2f", ae = "\\u20d0-\\u20ff", le = ue + oe + ae, de = "[" + le + "]", ce = RegExp(de, "g");
function he(t) {
  return t = M(t), t && t.replace(se, re).replace(ce, "");
}
var fe = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function pe(t) {
  return t.match(fe) || [];
}
var ve = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function ye(t) {
  return ve.test(t);
}
var U = "\\ud800-\\udfff", ge = "\\u0300-\\u036f", me = "\\ufe20-\\ufe2f", be = "\\u20d0-\\u20ff", Ce = ge + me + be, P = "\\u2700-\\u27bf", V = "a-z\\xdf-\\xf6\\xf8-\\xff", Ee = "\\xac\\xb1\\xd7\\xf7", $e = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Se = "\\u2000-\\u206f", Fe = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", W = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ae = "\\ufe0e\\ufe0f", G = Ee + $e + Se + Fe, q = "['’]", D = "[" + G + "]", je = "[" + Ce + "]", Y = "\\d+", xe = "[" + P + "]", J = "[" + V + "]", K = "[^" + U + G + Y + P + V + W + "]", ke = "\\ud83c[\\udffb-\\udfff]", Oe = "(?:" + je + "|" + ke + ")", we = "[^" + U + "]", X = "(?:\\ud83c[\\udde6-\\uddff]){2}", Q = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "[" + W + "]", De = "\\u200d", z = "(?:" + J + "|" + K + ")", ze = "(?:" + h + "|" + K + ")", B = "(?:" + q + "(?:d|ll|m|re|s|t|ve))?", L = "(?:" + q + "(?:D|LL|M|RE|S|T|VE))?", _ = Oe + "?", tt = "[" + Ae + "]?", Be = "(?:" + De + "(?:" + [we, X, Q].join("|") + ")" + tt + _ + ")*", Le = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ne = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ie = tt + _ + Be, Te = "(?:" + [xe, X, Q].join("|") + ")" + Ie, He = RegExp([
  h + "?" + J + "+" + B + "(?=" + [D, h, "$"].join("|") + ")",
  ze + "+" + L + "(?=" + [D, h + z, "$"].join("|") + ")",
  h + "?" + z + "+" + B,
  h + "+" + L,
  Ne,
  Le,
  Y,
  Te
].join("|"), "g");
function Re(t) {
  return t.match(He) || [];
}
function Ze(t, e, i) {
  return t = M(t), e = i ? void 0 : e, e === void 0 ? ye(t) ? Re(t) : pe(t) : t.match(e) || [];
}
var Me = "['’]", Ue = RegExp(Me, "g");
function Pe(t) {
  return function(e) {
    return te(Ze(he(e).replace(Ue, "")), t, "");
  };
}
var Ve = Pe(function(t, e, i) {
  return t + (i ? "-" : "") + e.toLowerCase();
});
const et = Ve;
function A(t, e, i = "-") {
  const r = String(e).replace(new RegExp(`^${t}${i}?`), "");
  return [
    et(r),
    t
  ].filter((n) => !!n).join(i);
}
function N(t) {
  return !Array.isArray(t) && typeof t == "object";
}
const We = E({
  directives: {
    bindEvents: {
      beforeMount(t, e) {
        var i, r;
        (r = (i = e.instance) == null ? void 0 : i.bindEvents) == null || r.call(i, t);
      }
    }
  },
  mixins: [
    Dt
  ],
  inheritAttrs: !1,
  props: {
    modelValue: {
      default: void 0
    },
    activity: {
      type: Boolean,
      default: !1
    },
    animated: {
      type: Boolean,
      default: () => v("animated", !1)
    },
    nativeEvents: {
      type: Array,
      default() {
        return ["focus", "blur", "change", "click", "keypress", "keyup", "keydown", "progress", "paste"];
      }
    },
    defaultControlClass: {
      type: String,
      default: () => v("defaultControlClass", "form-control")
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
      default: () => v("group", !0)
    },
    helpText: {
      type: [Number, String],
      default: void 0
    },
    hideLabel: Boolean,
    indicator: {
      type: [String, Boolean],
      default: () => v("indicator", "spinner")
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
      default: () => v("labelClass", "form-label")
    },
    pill: Boolean,
    plaintext: Boolean,
    size: {
      type: String,
      default: void 0
    },
    spacing: {
      type: String,
      default: void 0
    },
    valid: Boolean
  },
  emits: [
    "blur",
    "change",
    "click",
    "focus",
    "keydown",
    "keypress",
    "keyup",
    "update:modelValue"
  ],
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
          ["class", this.controlClasses],
          ["value", this.modelValue]
        ])
      );
    },
    controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass() {
      return A(this.size, this.controlClass);
    },
    formGroupClasses() {
      return Object.assign({
        [this.size && A(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && A(this.size, "form-group")]: !!this.size,
        "has-activity": this.activity,
        "has-changed": this.hasChanged,
        "has-focus": this.hasFocus,
        "has-icon": !!this.$slots.icon,
        "is-empty": this.isEmpty,
        "is-invalid": !!(this.invalid || this.invalidFeedback),
        "is-valid": !!(this.valid || this.validFeedback),
        [this.$attrs.class]: !!this.$attrs.class,
        [this.$attrs.id]: !!this.$attrs.id
      }, !!this.componentName && {
        [et(this.componentName)]: !0
      });
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
      const r = t instanceof HTMLSelectElement ? (i = t.querySelectorAll("option")) == null ? void 0 : i[t.selectedIndex] : null;
      r && (t.value = r == null ? void 0 : r.value), t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((n) => {
        t.addEventListener(n, (o) => {
          this.$emit(n, o);
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
      return this.errors && N(this.errors) && (t = this.errors[this.$attrs.name || this.$attrs.id]), !t || Array.isArray(t) || N(t) ? t : [t];
    },
    shouldChangeOnFocus() {
      return !this.getInputField().readOnly;
    },
    onInput(t) {
      this.$emit("update:modelValue", t);
    }
  }
}), Ge = E({
  name: "SelectField",
  components: {
    ActivityIndicator: wt
  },
  mixins: [
    We
  ],
  props: {
    /**
     * The default class name assigned to the control element
     *
     * @param {String}
     * @default 'form-select'
     */
    defaultControlClass: {
      type: String,
      default: "form-select"
    }
  },
  computed: {
    controlClass() {
      return this.plaintext ? `${this.defaultControlClass}-plaintext` : this.defaultControlClass;
    }
  },
  methods: {
    shouldChangeOnFocus() {
      return !1;
    }
  }
});
const qe = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, Ye = ["for", "innerHTML"], Je = { class: "form-group-inner" }, Ke = ["innerHTML"], Xe = ["innerHTML"];
function Qe(t, e, i, r, n, o) {
  const g = ot("activity-indicator"), $ = at("bind-events");
  return s(), u("div", {
    class: j(t.formGroupClasses)
  }, [
    a(t.$slots, "label", {}, () => [
      t.label ? (s(), u("label", {
        key: 0,
        ref: "label",
        for: t.id,
        class: j(t.labelClass),
        onClick: e[0] || (e[0] = (...l) => t.focus && t.focus(...l)),
        innerHTML: t.label
      }, null, 10, Ye)) : c("", !0)
    ]),
    I("div", Je, [
      a(t.$slots, "control", {
        bindEvents: t.bindEvents,
        controlAttributes: t.controlAttributes,
        focus: t.focus
      }, () => [
        t.$slots.icon ? (s(), u("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: e[1] || (e[1] = (...l) => t.focus && t.focus(...l))
        }, [
          a(t.$slots, "icon")
        ])) : c("", !0),
        lt((s(), u("select", dt({ ref: "field" }, Object.assign({
          disabled: t.$attrs.readonly
        }, t.controlAttributes)), [
          a(t.$slots, "default")
        ], 16)), [
          [$]
        ])
      ]),
      a(t.$slots, "activity", {}, () => [
        ct(ht, { name: "select-field-fade" }, {
          default: ft(() => [
            t.activity ? (s(), T(g, {
              key: "activity",
              ref: "activity",
              type: t.indicator,
              size: t.indicatorSize || t.size
            }, null, 8, ["type", "size"])) : c("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    a(t.$slots, "feedback", {}, () => [
      t.invalidFeedback ? (s(), u("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: t.invalidFeedback
      }, null, 8, Ke)) : t.validFeedback ? (s(), u("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: t.validFeedback
      }, null, 8, Xe)) : c("", !0)
    ]),
    a(t.$slots, "help", {}, () => [
      t.helpText ? (s(), u("small", {
        key: 0,
        ref: "help"
      }, H(t.helpText), 513)) : c("", !0)
    ])
  ], 2);
}
const ei = /* @__PURE__ */ qe(Ge, [["render", Qe]]);
export {
  ei as SelectField
};
//# sourceMappingURL=select-field.js.map
