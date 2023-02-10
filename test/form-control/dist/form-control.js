import { computed as u, defineComponent as c } from "vue";
const n = {};
function p(...e) {
  if (!e.length)
    return n;
  const [o, l] = e;
  return typeof o == "string" ? typeof n[o] < "u" ? n[o] : l : Array.isArray(o) ? o.reduce((s, t) => Object.assign(s, {
    //@ts-ignore
    [t]: n[t]
  }), {}) : Object.assign(n, ...e);
}
const r = u(() => ({})), f = /* @__PURE__ */ c({
  __name: "FormControl",
  props: {
    label: null,
    modelValue: null
  },
  setup(e, { expose: o }) {
    return console.log("setup"), console.log(r), o({
      controlAttributes: r
    }), () => {
    };
  }
});
console.log(123);
export {
  f as FormControl,
  p as config
};
//# sourceMappingURL=form-control.js.map
