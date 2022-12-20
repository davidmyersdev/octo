import { u as useIsNuxt } from "./useIsNuxt-03feeb69.js";
import { e as defineComponent, _ as _export_sfc, g as resolveComponent, o as openBlock, k as createBlock } from "./_plugin-vue_export-helper-ea9be126.js";
const _sfc_main = defineComponent({
  props: {
    pageKey: {
      type: String
    }
  },
  setup() {
    const { isNuxt } = useIsNuxt();
    return {
      isNuxt
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtPage = resolveComponent("NuxtPage");
  const _component_RouterView = resolveComponent("RouterView");
  return _ctx.isNuxt ? (openBlock(), createBlock(_component_NuxtPage, {
    key: 0,
    pageKey: _ctx.pageKey
  }, null, 8, ["pageKey"])) : (openBlock(), createBlock(_component_RouterView, {
    inheritAttrs: true,
    key: _ctx.pageKey
  }));
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_0 as _
};
//# sourceMappingURL=AppPage-2649d5f1.js.map
