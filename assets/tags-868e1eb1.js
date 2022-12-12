import { _ as _sfc_main$1 } from "./TagLink-223948b7.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, b as createElementBlock, Q as Fragment, a0 as renderList, c as createBlock } from "./runtime-core.esm-bundler-9a0ba37c.js";
import "./Tag.vue_vue_type_script_setup_true_lang-7d59ccc4.js";
import "./TheLogo-05e604ed.js";
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
//# sourceMappingURL=tags-868e1eb1.js.map
