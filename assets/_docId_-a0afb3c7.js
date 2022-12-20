import { E as Editor } from "./Editor-ed41721e.js";
import { s as setTitle } from "./title-23c0a2fd.js";
import { c as fetchSharedDoc } from "./firestore-a0851d35.js";
import { D as Doc, u as unpack } from "./doc-018f7423.js";
import { _ as _export_sfc, e as defineComponent, o as openBlock, k as createBlock, i as inject } from "./_plugin-vue_export-helper-ea9be126.js";
import "./runtime-dom.esm-bundler-eaea4b0e.js";
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
const formatTags = (tags, delimiter = ", ") => {
  return tags.map((tag) => `#${tag}`).join(delimiter);
};
const _sfc_main = defineComponent({
  props: {
    docId: String
  },
  data() {
    return {
      doc: new Doc()
    };
  },
  setup() {
    const appearance = inject("appearance");
    return {
      appearance: appearance.value === "october" ? "dark" : appearance.value
    };
  },
  computed: {
    settings() {
      return this.$store.state.settings.editor;
    },
    header() {
      return this.doc.headers[0];
    }
  },
  methods: {
    async findSharedDocument() {
      const packed = await fetchSharedDoc({ docId: this.docId });
      return unpack(packed, { privateKey: this.$store.state.settings.crypto.privateKey });
    },
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags));
    }
  },
  async mounted() {
    this.doc = await this.findSharedDocument();
    this.updateTitle();
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = Editor;
  return openBlock(), createBlock(_component_Editor, {
    appearance: _ctx.appearance,
    doc: _ctx.doc,
    key: _ctx.doc.id,
    ro: true,
    settings: _ctx.settings
  }, null, 8, ["appearance", "doc", "settings"]);
}
const _docId_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  _docId_ as default
};
//# sourceMappingURL=_docId_-a0afb3c7.js.map
