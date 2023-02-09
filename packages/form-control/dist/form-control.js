const n = {};
function f(...r) {
  if (!r.length)
    return n;
  const [e, i] = r;
  return typeof e == "string" ? typeof n[e] < "u" ? n[e] : i : Array.isArray(e) ? e.reduce((u, t) => Object.assign(u, {
    [t]: n[t]
  }), {}) : Object.assign(n, ...r);
}
export {
  f as config
};
//# sourceMappingURL=form-control.js.map
