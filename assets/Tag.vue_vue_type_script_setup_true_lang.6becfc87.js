import { T as TheLogo } from "./TheLogo.5f311084.js";
import { i as defineComponent, a2 as useSlots, o as openBlock, c as createElementBlock, u as unref, d as createBlock, a as createBaseVNode, k as renderSlot } from "./index.7eca4c79.js";
const _hoisted_1 = { class: "inline-flex items-center gap-2" };
const _hoisted_2 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
}, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = { class: "flex-grow" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  setup(__props) {
    var _a, _b;
    const slotNodes = (_b = (_a = useSlots()).default) == null ? void 0 : _b.call(_a);
    const isOcto = slotNodes == null ? void 0 : slotNodes.some((node) => {
      return node.children === "octo";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        unref(isOcto) ? (openBlock(), createBlock(TheLogo, {
          key: 0,
          class: "h-5 w-5"
        })) : (openBlock(), createElementBlock("svg", _hoisted_2, _hoisted_4)),
        createBaseVNode("span", _hoisted_5, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _
};
//# sourceMappingURL=Tag.vue_vue_type_script_setup_true_lang.6becfc87.js.map
