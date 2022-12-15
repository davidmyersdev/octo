import { E as Editor } from "./Editor-2cf9d26f.js";
import { D as Doc } from "./doc-aa27f392.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createBlock } from "./runtime-core.esm-bundler-9a0ba37c.js";
import "./runtime-dom.esm-bundler-32f2d5b0.js";
import "./client-2de13258.js";
import "./preload-helper-5f15640e.js";
import "./index-73136136.js";
import "./index-a4bbc573.js";
import "./index-f4eaee3d.js";
import "./index-9e94dbc0.js";
import "./index-2b3125df.js";
import "./index-08d7a392.js";
import "./index-02f56940.js";
import "./index-b680242d.js";
import "./index-9d34c1ff.js";
import "./index-7d350bb1.js";
import "./overlayscrollbars.esm-084eb65b.js";
import "./index-90ebcfae-3aa38dd7.js";
import "./index.esm2017-1fab45ee.js";
import "./_commonjsHelpers-dd024a83.js";
import "./index.browser-0a05c6e5.js";
import "./invert-f9d6c8a5.js";
import "./darken-fdc59d89.js";
import "./luminance-d8ea28d2.js";
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
  const _component_Editor = Editor;
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
//# sourceMappingURL=example-8335bc4f.js.map
