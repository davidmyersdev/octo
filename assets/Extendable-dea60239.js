import { _ as _export_sfc, o as openBlock, c as createElementBlock, F as Fragment, p as renderList, k as createBlock, a5 as resolveDynamicComponent, s as renderSlot } from "./_plugin-vue_export-helper-ea9be126.js";
const _sfc_main = {
  props: {
    scope: String
  },
  computed: {
    appendable() {
      return this.$packageManager.getComponents(this.scope, "append");
    },
    prependable() {
      return this.$packageManager.getComponents(this.scope, "prepend");
    }
  },
  created() {
    [...this.appendable, ...this.prependable].forEach((component) => {
      this.$options.components[component.name] = component;
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.prependable, (component) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.name), {
        key: component.name
      });
    }), 128)),
    renderSlot(_ctx.$slots, "default"),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.appendable, (component) => {
      return openBlock(), createBlock(resolveDynamicComponent(component.name), {
        key: component.name
      });
    }), 128))
  ]);
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __unplugin_components_0 as _
};
//# sourceMappingURL=Extendable-dea60239.js.map
