import { i as defineComponent, q as useRoute, C as useRouter, L as ref, x as watch, o as openBlock, c as createElementBlock, b as createVNode, u as unref } from "./index.634b652b.js";
import { D as DocumentList } from "./DocumentList.1ce46b58.js";
import "./moment.9709ab41.js";
import "./Tag.vue_vue_type_script_setup_true_lang.e580322f.js";
import "./TheLogo.d87227ee.js";
const _hoisted_1 = { class: "container mx-auto p-4 md:px-16 md:py-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  props: ["filter", "tag"],
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const filter = props.filter || route.query.filter;
    const query = ref(route.query.q);
    const tag = props.tag || route.query.tag;
    watch(query, (value) => {
      const resolved = router.resolve({
        ...route,
        query: {
          ...route.query,
          q: value
        }
      });
      window.history.replaceState(window.history.state, "", resolved.fullPath);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(DocumentList, {
          query: query.value,
          "onUpdate:query": _cache[0] || (_cache[0] = ($event) => query.value = $event),
          filter: unref(filter),
          tag: unref(tag)
        }, null, 8, ["query", "filter", "tag"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=docs.bd594ccf.js.map
