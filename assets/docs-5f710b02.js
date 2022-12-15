import { _ as __unplugin_components_0 } from "./DocList-f01e4196.js";
import { u as useRouteQuery } from "./useRouteQuery-ec2ea82c.js";
import { d as defineComponent, o as openBlock, c as createBlock, u as unref, A as isRef } from "./runtime-core.esm-bundler-9a0ba37c.js";
import "./CoreDivider-38ff7a5c.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./moment-f63e338d.js";
import "./actions-a6a34f3c.js";
import "./runtime-dom.esm-bundler-32f2d5b0.js";
import "./Tag.vue_vue_type_script_setup_true_lang-7d59ccc4.js";
import "./TheLogo-05e604ed.js";
import "./router-e4b51da9.js";
import "./preload-helper-5f15640e.js";
import "./vue-router-944476c0.js";
import "./vuex.esm-bundler-4cb42885.js";
import "./index-90ebcfae-3aa38dd7.js";
import "./contexts-e80363e8.js";
import "./doc-aa27f392.js";
import "./index.browser-0a05c6e5.js";
import "./useRecentDocs-5169304a.js";
import "./pinia.esm-browser-4714cee3.js";
import "./title-23c0a2fd.js";
import "./settings-f2786260.js";
import "./firestore-20470781.js";
import "./_commonjsHelpers-dd024a83.js";
import "./_commonjs-dynamic-modules-58f2b0ec.js";
import "./debouncer-2293cf40.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  setup(__props) {
    const { query } = useRouteQuery();
    return (_ctx, _cache) => {
      const _component_DocList = __unplugin_components_0;
      return openBlock(), createBlock(_component_DocList, {
        query: unref(query),
        "onUpdate:query": _cache[0] || (_cache[0] = ($event) => isRef(query) ? query.value = $event : null)
      }, null, 8, ["query"]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=docs-5f710b02.js.map
