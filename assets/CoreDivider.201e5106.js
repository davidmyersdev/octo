import { C as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, L as normalizeClass } from "./index.fc474e50.js";
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
const CoreDivider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  CoreDivider as C
};
//# sourceMappingURL=CoreDivider.201e5106.js.map
