import { _ as _sfc_main$1 } from "./TagLink-3b631b6d.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, F as Fragment, p as renderList, k as createBlock } from "./_plugin-vue_export-helper-ea9be126.js";
import "./CoreLink-6737d303.js";
import "./useIsNuxt-03feeb69.js";
import "./Tag.vue_vue_type_script_setup_true_lang-65429ac4.js";
import "./TheLogo-3b3b0e0c.js";
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
  const _component_TagLink = _sfc_main$1;
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
//# sourceMappingURL=tags-8037765c.js.map
