import { E as Editor } from "./Editor.baf8c720.js";
import { _ as _export_sfc, a7 as Doc, r as resolveComponent, o as openBlock, d as createBlock } from "./index.7eca4c79.js";
import "./account.6cddefbd.js";
import "./transform.606510e9.js";
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
//# sourceMappingURL=example.8d56af21.js.map
