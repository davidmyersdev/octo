import { u as useIsNuxt } from "./useIsNuxt-03feeb69.js";
import { e as defineComponent, f as computed, _ as _export_sfc, g as resolveComponent, o as openBlock, c as createElementBlock, s as renderSlot, k as createBlock, w as withCtx } from "./_plugin-vue_export-helper-ea9be126.js";
const _sfc_main = defineComponent({
  props: {
    to: {
      required: true,
      type: [String, Object]
    }
  },
  setup(props) {
    const { isNuxt } = useIsNuxt();
    const isExternal = computed(() => typeof props.to === "string");
    const toExternal = computed(() => props.to);
    const toInternal = computed(() => props.to);
    return {
      isExternal,
      isNuxt,
      toExternal,
      toInternal
    };
  }
});
const _hoisted_1 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_NuxtLink = resolveComponent("NuxtLink");
  return _ctx.isExternal ? (openBlock(), createElementBlock("a", {
    key: 0,
    href: _ctx.toExternal,
    rel: "noopener noreferrer",
    target: "_blank"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1)) : !_ctx.isNuxt ? (openBlock(), createBlock(_component_RouterLink, {
    key: 1,
    to: _ctx.toInternal
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["to"])) : (openBlock(), createBlock(_component_NuxtLink, {
    key: 2,
    to: _ctx.toInternal
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["to"]));
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_0 as _
};
//# sourceMappingURL=CoreLink-6737d303.js.map
