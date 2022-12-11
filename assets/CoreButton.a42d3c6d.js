import { C as defineComponent, i as computed, _ as _export_sfc, o as openBlock, c as createElementBlock, H as renderSlot, L as normalizeClass } from "./index.cce5ef5a.js";
const layers = {
  0: "core-button-layer-0",
  1: "core-button-layer-1",
  2: "core-button-layer-2",
  3: "core-button-layer-3",
  4: "core-button-layer-4"
};
const _sfc_main = defineComponent({
  props: {
    layer: {
      default: 2,
      type: Number
    }
  },
  setup(props) {
    const classes = computed(() => layers[props.layer]);
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["core-button", _ctx.classes])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const CoreButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  CoreButton as C
};
//# sourceMappingURL=CoreButton.a42d3c6d.js.map
