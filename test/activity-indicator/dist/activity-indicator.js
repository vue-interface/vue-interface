import { defineComponent as S, inject as k, toRaw as C, openBlock as e, createElementBlock as n, normalizeClass as w, normalizeStyle as O, createElementVNode as d, createBlock as j, resolveDynamicComponent as A, toDisplayString as F, createCommentVNode as N, createStaticVNode as v } from "vue";
var z = Object.defineProperty, E = (t, i, c) => i in t ? z(t, i, { enumerable: !0, configurable: !0, writable: !0, value: c }) : t[i] = c, P = (t, i, c) => (E(t, typeof i != "symbol" ? i + "" : i, c), c), u = function() {
  return u = Object.assign || function(t) {
    for (var i, c = 1, s = arguments.length; c < s; c++) {
      i = arguments[c];
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
    }
    return t;
  }, u.apply(this, arguments);
};
function R(t) {
  return t.toLowerCase();
}
var D = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], H = /[^A-Z0-9]+/gi;
function W(t, i) {
  i === void 0 && (i = {});
  for (var c = i.splitRegexp, s = c === void 0 ? D : c, a = i.stripRegexp, p = a === void 0 ? H : a, g = i.transform, x = g === void 0 ? R : g, m = i.delimiter, q = m === void 0 ? " " : m, _ = $($(t, s, "$1\0$2"), p, "\0"), h = 0, f = _.length; _.charAt(h) === "\0"; )
    h++;
  for (; _.charAt(f - 1) === "\0"; )
    f--;
  return _.slice(h, f).split("\0").map(x).join(q);
}
function $(t, i, c) {
  return i instanceof RegExp ? t.replace(i, c) : i.reduce(function(s, a) {
    return s.replace(a, c);
  }, t);
}
function B(t, i) {
  return i === void 0 && (i = {}), W(t, u({ delimiter: "." }, i));
}
function y(t, i) {
  return i === void 0 && (i = {}), B(t, u({ delimiter: "-" }, i));
}
class I {
  constructor(i = {}) {
    P(this, "components"), this.components = /* @__PURE__ */ new Map(), Object.entries(i).forEach(([c, s]) => {
      this.register(c, s);
    });
  }
  get(i) {
    const c = this.components.get(
      i = y(i)
    );
    if (c)
      return c;
    throw new Error(`"${i}" has not been registered yet!`);
  }
  register(i, c) {
    return typeof i == "object" ? (Object.entries(i).forEach(([s, a]) => {
      this.register(y(s), a);
    }), this) : (this.components.set(y(i), c), this);
  }
  remove(i) {
    return this.components.delete(y(i)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function b(t = {}) {
  return new I(t);
}
const l = b();
function _t(t) {
  return l.get(t);
}
function yt(t, i) {
  return l.register(t, i);
}
function ut(t) {
  return l.remove(t);
}
function ht() {
  return l.reset();
}
function o(t, i = "px") {
  return t != null && t !== !1 && isFinite(t) ? `${t}${i}` : t;
}
const Z = S({
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
        width: o(this.width),
        maxWidth: o(this.maxWidth),
        minWidth: o(this.minWidth),
        height: o(this.height),
        maxHeight: o(this.maxHeight),
        minHeight: o(this.minHeight)
      };
    }
  },
  methods: {
    componentFromRegistry(t) {
      var i;
      try {
        return (i = k(this.registry || "indicators", l)) == null ? void 0 : i.get(t);
      } catch {
      }
    },
    component() {
      return typeof this.type == "string" ? this.componentFromRegistry(this.type) : C(this.type);
    }
  }
});
const r = (t, i) => {
  const c = t.__vccOpts || t;
  for (const [s, a] of i)
    c[s] = a;
  return c;
}, V = { class: "activity-indicator-content" }, G = {
  key: 0,
  class: "activity-indicator-label"
};
function M(t, i, c, s, a, p) {
  return e(), n("div", {
    class: w(["activity-indicator", t.classes]),
    style: O(t.style)
  }, [
    d("div", V, [
      (e(), j(A(t.component()), { class: "mx-auto" })),
      t.label ? (e(), n("div", G, F(t.label), 1)) : N("", !0)
    ])
  ], 6);
}
const T = /* @__PURE__ */ r(Z, [["render", M]]), ft = (t, i) => {
  const c = b();
  if (t.component("ActivityIndicator", T), t.provide(i.key || "indicators", c), i.indicators)
    for (const [s, a] of Object.entries(i.indicators))
      c.register(s, a);
};
const L = {}, J = { class: "activity-indicator-chase" }, K = /* @__PURE__ */ v('<div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div><div class="activity-indicator-chase-dot"></div>', 6), Q = [
  K
];
function U(t, i) {
  return e(), n("div", J, Q);
}
const pt = /* @__PURE__ */ r(L, [["render", U]]);
const X = {}, Y = { class: "activity-indicator-circle-fade" }, ii = /* @__PURE__ */ v('<div class="activity-indicator-circle1 activity-indicator-circle"></div><div class="activity-indicator-circle2 activity-indicator-circle"></div><div class="activity-indicator-circle3 activity-indicator-circle"></div><div class="activity-indicator-circle4 activity-indicator-circle"></div><div class="activity-indicator-circle5 activity-indicator-circle"></div><div class="activity-indicator-circle6 activity-indicator-circle"></div><div class="activity-indicator-circle7 activity-indicator-circle"></div><div class="activity-indicator-circle8 activity-indicator-circle"></div><div class="activity-indicator-circle9 activity-indicator-circle"></div><div class="activity-indicator-circle10 activity-indicator-circle"></div><div class="activity-indicator-circle11 activity-indicator-circle"></div><div class="activity-indicator-circle12 activity-indicator-circle"></div>', 12), ti = [
  ii
];
function ci(t, i) {
  return e(), n("div", Y, ti);
}
const gt = /* @__PURE__ */ r(X, [["render", ci]]);
const ei = {}, ni = { class: "activity-indicator-circle-orbit" }, ai = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot1" }, null, -1), ri = /* @__PURE__ */ d("div", { class: "activity-indicator-circle-orbit-dot2" }, null, -1), si = [
  ai,
  ri
];
function di(t, i) {
  return e(), n("div", ni, si);
}
const mt = /* @__PURE__ */ r(ei, [["render", di]]);
const oi = {}, vi = { class: "activity-indicator-circle-trail" }, li = /* @__PURE__ */ v('<div class="activity-indicator-circle-trail1 activity-indicator-child"></div><div class="activity-indicator-circle-trail2 activity-indicator-child"></div><div class="activity-indicator-circle-trail3 activity-indicator-child"></div><div class="activity-indicator-circle-trail4 activity-indicator-child"></div><div class="activity-indicator-circle-trail5 activity-indicator-child"></div><div class="activity-indicator-circle-trail6 activity-indicator-child"></div><div class="activity-indicator-circle-trail7 activity-indicator-child"></div><div class="activity-indicator-circle-trail8 activity-indicator-child"></div><div class="activity-indicator-circle-trail9 activity-indicator-child"></div><div class="activity-indicator-circle-trail10 activity-indicator-child"></div><div class="activity-indicator-circle-trail11 activity-indicator-child"></div><div class="activity-indicator-circle-trail12 activity-indicator-child"></div>', 12), _i = [
  li
];
function yi(t, i) {
  return e(), n("div", vi, _i);
}
const $t = /* @__PURE__ */ r(oi, [["render", yi]]);
const ui = {}, hi = { class: "activity-indicator-dots" }, fi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce1" }, null, -1), pi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce2" }, null, -1), gi = /* @__PURE__ */ d("div", { class: "activity-indicator-dots-bounce3" }, null, -1), mi = [
  fi,
  pi,
  gi
];
function $i(t, i) {
  return e(), n("div", hi, mi);
}
const bt = /* @__PURE__ */ r(ui, [["render", $i]]);
const bi = {}, xi = { class: "activity-indicator-double-pulse" }, qi = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce1" }, null, -1), Si = /* @__PURE__ */ d("div", { class: "activity-indicator-double-pulse-bounce2" }, null, -1), ki = [
  qi,
  Si
];
function Ci(t, i) {
  return e(), n("div", xi, ki);
}
const xt = /* @__PURE__ */ r(bi, [["render", Ci]]);
const wi = {}, Oi = { class: "activity-indicator-facebook" }, ji = /* @__PURE__ */ v('<div class="activity-indicator-facebook-rect1"></div><div class="activity-indicator-facebook-rect2"></div><div class="activity-indicator-facebook-rect3"></div><div class="activity-indicator-facebook-rect4"></div><div class="activity-indicator-facebook-rect5"></div>', 5), Ai = [
  ji
];
function Fi(t, i) {
  return e(), n("div", Oi, Ai);
}
const qt = /* @__PURE__ */ r(wi, [["render", Fi]]);
const Ni = {}, zi = { class: "activity-indicator-grid" }, Ei = /* @__PURE__ */ v('<div class="activity-indicator-grid activity-indicator-grid1"></div><div class="activity-indicator-grid activity-indicator-grid2"></div><div class="activity-indicator-grid activity-indicator-grid3"></div><div class="activity-indicator-grid activity-indicator-grid4"></div><div class="activity-indicator-grid activity-indicator-grid5"></div><div class="activity-indicator-grid activity-indicator-grid6"></div><div class="activity-indicator-grid activity-indicator-grid7"></div><div class="activity-indicator-grid activity-indicator-grid8"></div><div class="activity-indicator-grid activity-indicator-grid9"></div>', 9), Pi = [
  Ei
];
function Ri(t, i) {
  return e(), n("div", zi, Pi);
}
const St = /* @__PURE__ */ r(Ni, [["render", Ri]]);
const Di = {}, Hi = { class: "activity-indicator-pulse" };
function Wi(t, i) {
  return e(), n("div", Hi);
}
const kt = /* @__PURE__ */ r(Di, [["render", Wi]]);
const Bi = {}, Ii = { class: "activity-indicator-spinner" }, Zi = /* @__PURE__ */ v('<div class="activity-indicator-spinner1 activity-indicator-spinner"></div><div class="activity-indicator-spinner2 activity-indicator-spinner"></div><div class="activity-indicator-spinner3 activity-indicator-spinner"></div><div class="activity-indicator-spinner4 activity-indicator-spinner"></div><div class="activity-indicator-spinner5 activity-indicator-spinner"></div><div class="activity-indicator-spinner6 activity-indicator-spinner"></div><div class="activity-indicator-spinner7 activity-indicator-spinner"></div><div class="activity-indicator-spinner8 activity-indicator-spinner"></div><div class="activity-indicator-spinner9 activity-indicator-spinner"></div><div class="activity-indicator-spinner10 activity-indicator-spinner"></div><div class="activity-indicator-spinner11 activity-indicator-spinner"></div><div class="activity-indicator-spinner12 activity-indicator-spinner"></div>', 12), Vi = [
  Zi
];
function Gi(t, i) {
  return e(), n("div", Ii, Vi);
}
const Ct = /* @__PURE__ */ r(Bi, [["render", Gi]]);
const Mi = {}, Ti = { class: "activity-indicator-spotify" };
function Li(t, i) {
  return e(), n("div", Ti);
}
const wt = /* @__PURE__ */ r(Mi, [["render", Li]]);
const Ji = {}, Ki = { class: "activity-indicator-square" };
function Qi(t, i) {
  return e(), n("div", Ki);
}
const Ot = /* @__PURE__ */ r(Ji, [["render", Qi]]);
const Ui = {}, Xi = { class: "activity-indicator-square-fold" }, Yi = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square1 activity-indicator-square-fold-square" }, null, -1), it = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square2 activity-indicator-square-fold-square" }, null, -1), tt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square4 activity-indicator-square-fold-square" }, null, -1), ct = /* @__PURE__ */ d("div", { class: "activity-indicator-square-fold-square3 activity-indicator-square-fold-square" }, null, -1), et = [
  Yi,
  it,
  tt,
  ct
];
function nt(t, i) {
  return e(), n("div", Xi, et);
}
const jt = /* @__PURE__ */ r(Ui, [["render", nt]]);
const at = {}, rt = { class: "activity-indicator-square-orbit" }, st = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube1" }, null, -1), dt = /* @__PURE__ */ d("div", { class: "activity-indicator-square-orbit-cube2" }, null, -1), ot = [
  st,
  dt
];
function vt(t, i) {
  return e(), n("div", rt, ot);
}
const At = /* @__PURE__ */ r(at, [["render", vt]]);
export {
  T as ActivityIndicator,
  ft as ActivityIndicatorPlugin,
  pt as Chase,
  gt as CircleFade,
  mt as CircleOrbit,
  $t as CircleTrail,
  bt as Dots,
  xt as DoublePulse,
  qt as Facebook,
  St as Grid,
  kt as Pulse,
  Ct as Spinner,
  wt as Spotify,
  Ot as Square,
  jt as SquareFold,
  At as SquareOrbit,
  _t as get,
  yt as register,
  l as registry,
  ut as remove,
  ht as reset
};
