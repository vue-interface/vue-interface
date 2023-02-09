// node_modules/.pnpm/@vue-interface+component-registry@1.3.3/node_modules/@vue-interface/component-registry/dist/component-registry.js
var v = Object.defineProperty;
var _ = (t, e, r) => e in t ? v(t, e, { enumerable: true, configurable: true, writable: true, value: r }) : t[e] = r;
var l = (t, e, r) => (_(t, typeof e != "symbol" ? e + "" : e, r), r);
var c = function() {
  return c = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, c.apply(this, arguments);
};
function w(t) {
  return t.toLowerCase();
}
var E = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
var R = /[^A-Z0-9]+/gi;
function A(t, e) {
  e === void 0 && (e = {});
  for (var r = e.splitRegexp, n = r === void 0 ? E : r, i = e.stripRegexp, s = i === void 0 ? R : i, h = e.transform, p = h === void 0 ? w : h, g = e.delimiter, d = g === void 0 ? " " : g, a = m(m(t, n, "$1\0$2"), s, "\0"), u = 0, f = a.length; a.charAt(u) === "\0"; )
    u++;
  for (; a.charAt(f - 1) === "\0"; )
    f--;
  return a.slice(u, f).split("\0").map(p).join(d);
}
function m(t, e, r) {
  return e instanceof RegExp ? t.replace(e, r) : e.reduce(function(n, i) {
    return n.replace(i, r);
  }, t);
}
function b(t, e) {
  return e === void 0 && (e = {}), A(t, c({ delimiter: "." }, e));
}
function o(t, e) {
  return e === void 0 && (e = {}), b(t, c({ delimiter: "-" }, e));
}
var j = class {
  constructor(e = {}) {
    l(this, "components");
    this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([r, n]) => {
      this.register(r, n);
    });
  }
  get(e) {
    const r = this.components.get(
      e = o(e)
    );
    if (r)
      return r;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, r) {
    return typeof e == "object" ? (Object.entries(e).forEach(([n, i]) => {
      this.register(o(n), i);
    }), this) : (this.components.set(o(e), r), this);
  }
  remove(e) {
    return this.components.delete(o(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
};
function C(t = {}) {
  return new j(t);
}
export {
  j as ComponentRegistry,
  C as factory
};
//# sourceMappingURL=@vue-interface_component-registry.js.map
