import { _ as __unplugin_components_0 } from "./TheLogo-05e604ed.js";
import { o as openBlock, b as createElementBlock, a2 as createBaseVNode, d as defineComponent, aa as useSlots, u as unref, c as createBlock, $ as renderSlot } from "./runtime-core.esm-bundler-9a0ba37c.js";
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
    })
  ]);
}
const _hoisted_1 = { class: "inline-flex min-w-0 items-center gap-2" };
const _hoisted_2 = { class: "flex-grow flex-shrink text-ellipsis whitespace-nowrap overflow-hidden" };
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
        unref(isOcto) ? (openBlock(), createBlock(__unplugin_components_0, {
          key: 0,
          class: "h-5 w-5"
        })) : (openBlock(), createBlock(unref(render), {
          key: 1,
          class: "w-5"
        })),
        createBaseVNode("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  _sfc_main as _,
  render as r
};
//# sourceMappingURL=Tag.vue_vue_type_script_setup_true_lang-7d59ccc4.js.map
