import { defineComponent as E, inject as nt, openBlock as u, createElementBlock as o, normalizeClass as x, normalizeStyle as rt, createElementVNode as j, createBlock as T, resolveDynamicComponent as ut, createCommentVNode as a, toDisplayString as H, resolveComponent as st, resolveDirective as ot, renderSlot as d, withDirectives as at, mergeProps as lt, createVNode as dt, Transition as ct, withCtx as ht } from "vue";
function c(t, e = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${e}` : t;
}
const ft = E({
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
      registryInstance: nt(t.registry || "indicators")
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
        width: c(this.width),
        maxWidth: c(this.maxWidth),
        minWidth: c(this.minWidth),
        height: c(this.height),
        maxHeight: c(this.maxHeight),
        minHeight: c(this.minHeight)
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
}), pt = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, vt = { class: "activity-indicator-content" }, gt = {
  key: 1,
  class: "activity-indicator-label"
};
function yt(t, e, i, r, n, s) {
  return u(), o("div", {
    class: x(["activity-indicator", t.classes]),
    style: rt(t.style)
  }, [
    j("div", vt, [
      t.is ? (u(), T(ut(t.is()), {
        key: 0,
        class: "mx-auto"
      })) : a("", !0),
      t.label ? (u(), o("div", gt, H(t.label), 1)) : a("", !0)
    ])
  ], 6);
}
const bt = /* @__PURE__ */ pt(ft, [["render", yt]]);
var mt = Object.defineProperty, Ct = (t, e, i) => e in t ? mt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i, Et = (t, e, i) => (Ct(t, typeof e != "symbol" ? e + "" : e, i), i), C = function() {
  return C = Object.assign || function(t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) {
      e = arguments[i];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, C.apply(this, arguments);
};
function $t(t) {
  return t.toLowerCase();
}
var At = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], St = /[^A-Z0-9]+/gi;
function Ft(t, e) {
  e === void 0 && (e = {});
  for (var i = e.splitRegexp, r = i === void 0 ? At : i, n = e.stripRegexp, s = n === void 0 ? St : n, y = e.transform, $ = y === void 0 ? $t : y, l = e.delimiter, it = l === void 0 ? " " : l, b = w(w(t, r, "$1\0$2"), s, "\0"), A = 0, S = b.length; b.charAt(A) === "\0"; )
    A++;
  for (; b.charAt(S - 1) === "\0"; )
    S--;
  return b.slice(A, S).split("\0").map($).join(it);
}
function w(t, e, i) {
  return e instanceof RegExp ? t.replace(e, i) : e.reduce(function(r, n) {
    return r.replace(n, i);
  }, t);
}
function xt(t, e) {
  return e === void 0 && (e = {}), Ft(t, C({ delimiter: "." }, e));
}
function m(t, e) {
  return e === void 0 && (e = {}), xt(t, C({ delimiter: "-" }, e));
}
class jt {
  constructor(e = {}) {
    Et(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([i, r]) => {
      this.register(i, r);
    });
  }
  get(e) {
    const i = this.components.get(
      e = m(e)
    );
    if (i)
      return i;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, i) {
    return typeof e == "object" ? (Object.entries(e).forEach(([r, n]) => {
      this.register(m(r), n);
    }), this) : (this.components.set(m(e), i), this);
  }
  remove(e) {
    return this.components.delete(m(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function wt(t = {}) {
  return new jt(t);
}
wt();
const p = {};
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
var kt = typeof global == "object" && global && global.Object === Object && global;
const Ot = kt;
var zt = typeof self == "object" && self && self.Object === Object && self, Bt = Ot || zt || Function("return this")();
const It = Bt;
var Lt = It.Symbol;
const f = Lt;
var Z = Object.prototype, Nt = Z.hasOwnProperty, Tt = Z.toString, g = f ? f.toStringTag : void 0;
function Ht(t) {
  var e = Nt.call(t, g), i = t[g];
  try {
    t[g] = void 0;
    var r = !0;
  } catch {
  }
  var n = Tt.call(t);
  return r && (e ? t[g] = i : delete t[g]), n;
}
var Zt = Object.prototype, Mt = Zt.toString;
function Rt(t) {
  return Mt.call(t);
}
var Ut = "[object Null]", Pt = "[object Undefined]", D = f ? f.toStringTag : void 0;
function Vt(t) {
  return t == null ? t === void 0 ? Pt : Ut : D && D in Object(t) ? Ht(t) : Rt(t);
}
function Wt(t) {
  return t != null && typeof t == "object";
}
var Gt = "[object Symbol]";
function qt(t) {
  return typeof t == "symbol" || Wt(t) && Vt(t) == Gt;
}
function Yt(t, e) {
  for (var i = -1, r = t == null ? 0 : t.length, n = Array(r); ++i < r; )
    n[i] = e(t[i], i, t);
  return n;
}
var _t = Array.isArray;
const Jt = _t;
var Kt = 1 / 0, k = f ? f.prototype : void 0, O = k ? k.toString : void 0;
function M(t) {
  if (typeof t == "string")
    return t;
  if (Jt(t))
    return Yt(t, M) + "";
  if (qt(t))
    return O ? O.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Kt ? "-0" : e;
}
function R(t) {
  return t == null ? "" : M(t);
}
function Qt(t, e, i, r) {
  var n = -1, s = t == null ? 0 : t.length;
  for (r && s && (i = t[++n]); ++n < s; )
    i = e(i, t[n], n, t);
  return i;
}
function Xt(t) {
  return function(e) {
    return t == null ? void 0 : t[e];
  };
}
var te = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u00C7: "C",
  \u00E7: "c",
  \u00D0: "D",
  \u00F0: "d",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u00D1: "N",
  \u00F1: "n",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00DD: "Y",
  \u00FD: "y",
  \u00FF: "y",
  \u00C6: "Ae",
  \u00E6: "ae",
  \u00DE: "Th",
  \u00FE: "th",
  \u00DF: "ss",
  \u0100: "A",
  \u0102: "A",
  \u0104: "A",
  \u0101: "a",
  \u0103: "a",
  \u0105: "a",
  \u0106: "C",
  \u0108: "C",
  \u010A: "C",
  \u010C: "C",
  \u0107: "c",
  \u0109: "c",
  \u010B: "c",
  \u010D: "c",
  \u010E: "D",
  \u0110: "D",
  \u010F: "d",
  \u0111: "d",
  \u0112: "E",
  \u0114: "E",
  \u0116: "E",
  \u0118: "E",
  \u011A: "E",
  \u0113: "e",
  \u0115: "e",
  \u0117: "e",
  \u0119: "e",
  \u011B: "e",
  \u011C: "G",
  \u011E: "G",
  \u0120: "G",
  \u0122: "G",
  \u011D: "g",
  \u011F: "g",
  \u0121: "g",
  \u0123: "g",
  \u0124: "H",
  \u0126: "H",
  \u0125: "h",
  \u0127: "h",
  \u0128: "I",
  \u012A: "I",
  \u012C: "I",
  \u012E: "I",
  \u0130: "I",
  \u0129: "i",
  \u012B: "i",
  \u012D: "i",
  \u012F: "i",
  \u0131: "i",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u0138: "k",
  \u0139: "L",
  \u013B: "L",
  \u013D: "L",
  \u013F: "L",
  \u0141: "L",
  \u013A: "l",
  \u013C: "l",
  \u013E: "l",
  \u0140: "l",
  \u0142: "l",
  \u0143: "N",
  \u0145: "N",
  \u0147: "N",
  \u014A: "N",
  \u0144: "n",
  \u0146: "n",
  \u0148: "n",
  \u014B: "n",
  \u014C: "O",
  \u014E: "O",
  \u0150: "O",
  \u014D: "o",
  \u014F: "o",
  \u0151: "o",
  \u0154: "R",
  \u0156: "R",
  \u0158: "R",
  \u0155: "r",
  \u0157: "r",
  \u0159: "r",
  \u015A: "S",
  \u015C: "S",
  \u015E: "S",
  \u0160: "S",
  \u015B: "s",
  \u015D: "s",
  \u015F: "s",
  \u0161: "s",
  \u0162: "T",
  \u0164: "T",
  \u0166: "T",
  \u0163: "t",
  \u0165: "t",
  \u0167: "t",
  \u0168: "U",
  \u016A: "U",
  \u016C: "U",
  \u016E: "U",
  \u0170: "U",
  \u0172: "U",
  \u0169: "u",
  \u016B: "u",
  \u016D: "u",
  \u016F: "u",
  \u0171: "u",
  \u0173: "u",
  \u0174: "W",
  \u0175: "w",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  \u0179: "Z",
  \u017B: "Z",
  \u017D: "Z",
  \u017A: "z",
  \u017C: "z",
  \u017E: "z",
  \u0132: "IJ",
  \u0133: "ij",
  \u0152: "Oe",
  \u0153: "oe",
  \u0149: "'n",
  \u017F: "s"
}, ee = Xt(te);
const ie = ee;
var ne = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, re = "\\u0300-\\u036f", ue = "\\ufe20-\\ufe2f", se = "\\u20d0-\\u20ff", oe = re + ue + se, ae = "[" + oe + "]", le = RegExp(ae, "g");
function de(t) {
  return t = R(t), t && t.replace(ne, ie).replace(le, "");
}
var ce = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function he(t) {
  return t.match(ce) || [];
}
var fe = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function pe(t) {
  return fe.test(t);
}
var U = "\\ud800-\\udfff", ve = "\\u0300-\\u036f", ge = "\\ufe20-\\ufe2f", ye = "\\u20d0-\\u20ff", be = ve + ge + ye, P = "\\u2700-\\u27bf", V = "a-z\\xdf-\\xf6\\xf8-\\xff", me = "\\xac\\xb1\\xd7\\xf7", Ce = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Ee = "\\u2000-\\u206f", $e = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", W = "A-Z\\xc0-\\xd6\\xd8-\\xde", Ae = "\\ufe0e\\ufe0f", G = me + Ce + Ee + $e, q = "['\u2019]", z = "[" + G + "]", Se = "[" + be + "]", Y = "\\d+", Fe = "[" + P + "]", _ = "[" + V + "]", J = "[^" + U + G + Y + P + V + W + "]", xe = "\\ud83c[\\udffb-\\udfff]", je = "(?:" + Se + "|" + xe + ")", we = "[^" + U + "]", K = "(?:\\ud83c[\\udde6-\\uddff]){2}", Q = "[\\ud800-\\udbff][\\udc00-\\udfff]", h = "[" + W + "]", De = "\\u200d", B = "(?:" + _ + "|" + J + ")", ke = "(?:" + h + "|" + J + ")", I = "(?:" + q + "(?:d|ll|m|re|s|t|ve))?", L = "(?:" + q + "(?:D|LL|M|RE|S|T|VE))?", X = je + "?", tt = "[" + Ae + "]?", Oe = "(?:" + De + "(?:" + [we, K, Q].join("|") + ")" + tt + X + ")*", ze = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Be = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Ie = tt + X + Oe, Le = "(?:" + [Fe, K, Q].join("|") + ")" + Ie, Ne = RegExp([
  h + "?" + _ + "+" + I + "(?=" + [z, h, "$"].join("|") + ")",
  ke + "+" + L + "(?=" + [z, h + B, "$"].join("|") + ")",
  h + "?" + B + "+" + I,
  h + "+" + L,
  Be,
  ze,
  Y,
  Le
].join("|"), "g");
function Te(t) {
  return t.match(Ne) || [];
}
function He(t, e, i) {
  return t = R(t), e = i ? void 0 : e, e === void 0 ? pe(t) ? Te(t) : he(t) : t.match(e) || [];
}
var Ze = "['\u2019]", Me = RegExp(Ze, "g");
function Re(t) {
  return function(e) {
    return Qt(He(de(e).replace(Me, "")), t, "");
  };
}
var Ue = Re(function(t, e, i) {
  return t + (i ? "-" : "") + e.toLowerCase();
});
const et = Ue;
function F(t, e, i = "-") {
  const r = String(e).replace(new RegExp(`^${t}${i}?`), "");
  return [
    et(r),
    t
  ].filter((n) => !!n).join(i);
}
function N(t) {
  return !Array.isArray(t) && typeof t == "object";
}
function Pe(t) {
  return t === void 0;
}
const Ve = E({
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
    modelValue: {
      default: void 0
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
      return F(this.size, this.controlClass);
    },
    formGroupClasses() {
      return {
        [et(this.componentName)]: !!this.componentName,
        [this.size && F(this.size, this.componentName)]: !!this.size,
        animated: this.animated,
        "default-empty": this.defaultEmpty,
        "form-group": this.group,
        [this.size && F(this.size, "form-group")]: !!this.size,
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
      const r = t instanceof HTMLSelectElement ? (i = t.querySelectorAll("option")) == null ? void 0 : i[t.selectedIndex] : null;
      Pe(this.modelValue) ? r && (t.value = r == null ? void 0 : r.value) : t.value = this.modelValue, t.value && e(t.value), this.hasChanged = !!t.value, this.isEmpty = !t.value, t.addEventListener("focus", () => {
        this.hasFocus = !0;
      }), t.addEventListener("blur", () => {
        this.hasFocus = !1;
      }), t.addEventListener("input", () => {
        this.isEmpty = !1, this.hasChanged = !0;
      }), t.addEventListener(
        t.tagName === "SELECT" ? "change" : "input",
        () => e(t.value)
      ), this.nativeEvents.forEach((n) => {
        t.addEventListener(n, (s) => {
          this.$emit(n, s);
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
}), We = E({
  components: {
    ActivityIndicator: bt
  },
  mixins: [
    Ve
  ]
});
const Ge = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, qe = ["for", "innerHTML"], Ye = { class: "form-group-inner" }, _e = ["innerHTML"], Je = ["innerHTML"];
function Ke(t, e, i, r, n, s) {
  const y = st("activity-indicator"), $ = ot("bind-events");
  return u(), o("div", {
    class: x(t.formGroupClasses)
  }, [
    d(t.$slots, "label", {}, () => [
      t.label ? (u(), o("label", {
        key: 0,
        ref: "label",
        for: t.id,
        class: x(t.labelClass),
        onClick: e[0] || (e[0] = (...l) => t.focus && t.focus(...l)),
        innerHTML: t.label
      }, null, 10, qe)) : a("", !0)
    ]),
    j("div", Ye, [
      d(t.$slots, "control", {
        bindEvents: t.bindEvents,
        controlAttributes: t.controlAttributes,
        focus: t.focus
      }, () => [
        t.$slots.icon ? (u(), o("div", {
          key: 0,
          class: "form-group-inner-icon",
          onClick: e[1] || (e[1] = (...l) => t.focus && t.focus(...l))
        }, [
          d(t.$slots, "icon")
        ])) : a("", !0),
        at(j("input", lt({ ref: "field" }, t.controlAttributes), null, 16), [
          [$]
        ])
      ]),
      d(t.$slots, "activity", {}, () => [
        dt(ct, { name: "input-field-fade" }, {
          default: ht(() => [
            t.activity ? (u(), T(y, {
              key: "activity",
              ref: "activity",
              type: t.indicator,
              size: t.indicatorSize || t.size
            }, null, 8, ["type", "size"])) : a("", !0)
          ]),
          _: 1
        })
      ])
    ]),
    d(t.$slots, "feedback", {}, () => [
      t.invalidFeedback ? (u(), o("div", {
        key: 0,
        class: "invalid-feedback",
        invalid: "",
        innerHTML: t.invalidFeedback
      }, null, 8, _e)) : t.validFeedback ? (u(), o("div", {
        key: 1,
        class: "valid-feedback",
        valid: "",
        innerHTML: t.validFeedback
      }, null, 8, Je)) : a("", !0)
    ]),
    d(t.$slots, "help", {}, () => [
      t.helpText ? (u(), o("small", {
        key: 0,
        ref: "help"
      }, H(t.helpText), 513)) : a("", !0)
    ])
  ], 2);
}
const Xe = /* @__PURE__ */ Ge(We, [["render", Ke]]);
export {
  Xe as InputField
};
