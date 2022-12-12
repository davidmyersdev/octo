import { d as defineComponent, o as openBlock, b as createElementBlock, n as normalizeClass } from "./runtime-core.esm-bundler-9a0ba37c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = defineComponent({
  props: {
    vertical: {
      default: false,
      type: Boolean
    }
  },
  setup(props) {
    const classes = `flex border-0 border-white dark:border-gray-900 ${props.vertical ? "border-l-2 h-full" : "border-t-2"}`;
    return {
      classes
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("hr", {
    class: normalizeClass(_ctx.classes)
  }, null, 2);
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_0 as _
};
//# sourceMappingURL=CoreDivider-38ff7a5c.js.map
