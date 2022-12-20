import { O as OverlayScrollbars } from "./overlayscrollbars.esm-084eb65b.js";
import { e as defineComponent, r as ref, l as onMounted, _ as _export_sfc, o as openBlock, c as createElementBlock, s as renderSlot } from "./_plugin-vue_export-helper-ea9be126.js";
const _sfc_main = defineComponent({
  setup() {
    const scrollable = ref();
    onMounted(() => {
      OverlayScrollbars(scrollable.value, {
        scrollbars: {
          autoHide: "leave",
          autoHideDelay: 200
        }
      });
    });
    return {
      scrollable
    };
  }
});
const _hoisted_1 = {
  ref: "scrollable",
  class: "overflow-auto"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ], 512);
}
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_2 as _
};
//# sourceMappingURL=CoreScrollable-4b186a41.js.map
