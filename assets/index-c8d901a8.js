import { _ as __unplugin_components_0 } from "./DocList-52960600.js";
import { u as useRouteQuery } from "./useRouteQuery-1f894c77.js";
import { e as defineComponent, o as openBlock, k as createBlock, v as unref, D as isRef } from "./_plugin-vue_export-helper-ea9be126.js";
import "./CoreDivider-0e2c45f2.js";
import "./moment-f63e338d.js";
import "./actions-a6a34f3c.js";
import "./runtime-dom.esm-bundler-eaea4b0e.js";
import "./Tag.vue_vue_type_script_setup_true_lang-65429ac4.js";
import "./TheLogo-3b3b0e0c.js";
import "./router-85b0f62c.js";
import "./preload-helper-5f15640e.js";
import "./vue-router-bb5abae0.js";
import "./vuex.esm-bundler-99de9736.js";
import "./index-90ebcfae-3aa38dd7.js";
import "./contexts-e80363e8.js";
import "./doc-018f7423.js";
import "./index.browser-0a05c6e5.js";
import "./useRecentDocs-b417f68b.js";
import "./pinia-1b7dc050.js";
import "./title-23c0a2fd.js";
import "./settings-f2786260.js";
import "./firestore-a0851d35.js";
import "./_commonjsHelpers-dd024a83.js";
import "./_commonjs-dynamic-modules-58f2b0ec.js";
import "./debouncer-2293cf40.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
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
//# sourceMappingURL=index-c8d901a8.js.map
