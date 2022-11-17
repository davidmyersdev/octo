import { _ as _sfc_main$1 } from "./TagLink.96665364.js";
import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, P as Fragment, Q as renderList, d as createBlock } from "./index.634b652b.js";
import "./Tag.vue_vue_type_script_setup_true_lang.e580322f.js";
import "./TheLogo.d87227ee.js";
const tags_vue_vue_type_style_index_0_scoped_32c5cbb6_lang = "";
const _sfc_main = {
  components: {
    TagLink: _sfc_main$1
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    }
  }
};
const _hoisted_1 = { class: "flex flex-col p-4 md:p-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TagLink = resolveComponent("TagLink");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.tags, (tag) => {
      return openBlock(), createBlock(_component_TagLink, {
        class: "sidebar-link mb-2",
        key: tag,
        tag
      }, null, 8, ["tag"]);
    }), 128))
  ]);
}
const tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-32c5cbb6"]]);
export {
  tags as default
};
//# sourceMappingURL=tags.80280470.js.map
