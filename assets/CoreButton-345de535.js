import { d as defineComponent, q as computed, o as openBlock, b as createElementBlock, $ as renderSlot, n as normalizeClass } from "./runtime-core.esm-bundler-9a0ba37c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
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
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_1 as _
};
//# sourceMappingURL=CoreButton-345de535.js.map
