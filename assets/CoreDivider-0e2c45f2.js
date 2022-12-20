import { e as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, q as normalizeClass } from "./_plugin-vue_export-helper-ea9be126.js";
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
//# sourceMappingURL=CoreDivider-0e2c45f2.js.map
