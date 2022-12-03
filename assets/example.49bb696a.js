import { E as Editor } from "./Editor.af4fef3b.js";
import { _ as _export_sfc, aa as Doc, r as resolveComponent, o as openBlock, d as createBlock } from "./index.65602d5f.js";
import "./account.36f48ae2.js";
const _sfc_main = {
  components: {
    Editor
  },
  props: {
    url: {
      type: String
    }
  },
  data() {
    return {
      doc: new Doc()
    };
  },
  computed: {
    appearance() {
      if (this.$store.state.settings.theme === "october") {
        return "dark";
      }
      return this.$store.state.settings.theme;
    },
    settings() {
      return this.$store.state.settings.editor;
    }
  },
  async mounted() {
    fetch(this.url).then((response) => response.text()).then((text) => {
      this.doc.update({ text });
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = resolveComponent("Editor");
  return openBlock(), createBlock(_component_Editor, {
    appearance: $options.appearance,
    settings: $options.settings,
    doc: $data.doc
  }, null, 8, ["appearance", "settings", "doc"]);
}
const example = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  example as default
};
//# sourceMappingURL=example.49bb696a.js.map
