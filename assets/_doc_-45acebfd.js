import { E as Editor$1 } from "./Editor-2cf9d26f.js";
import { s as setTitle } from "./title-23c0a2fd.js";
import { c as fetchSharedDoc } from "./firestore-20470781.js";
import { D as Doc, u as unpack } from "./doc-aa27f392.js";
import { E as EDIT_DOCUMENT, g as SET_DOCUMENT } from "./actions-a6a34f3c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { d as defineComponent, o as openBlock, c as createBlock, y as inject } from "./runtime-core.esm-bundler-9a0ba37c.js";
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
const formatTags = (tags, delimiter = ", ") => {
  return tags.map((tag) => `#${tag}`).join(delimiter);
};
const _sfc_main = defineComponent({
  components: {
    Editor: Editor$1
  },
  props: {
    docId: String,
    initialFocus: {
      type: String,
      default: () => "any",
      validator: (position) => ["any", "start", "end"].includes(position)
    },
    initialSelections: {
      type: Array
    },
    ro: {
      type: Boolean
    }
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc({ text: formatTags(this.$store.state.context.tags, " ") })
    };
  },
  setup() {
    const appearance = inject("appearance");
    return {
      appearance: appearance.value === "october" ? "dark" : appearance.value
    };
  },
  watch: {
    tags: {
      deep: true,
      handler() {
        this.updateTitle();
      }
    },
    header() {
      this.updateTitle();
    }
  },
  computed: {
    doc() {
      return this.$store.getters.decrypted.find((doc) => doc.id === this.docId) || this.placeholder;
    },
    settings() {
      return this.$store.state.settings.editor;
    },
    tags() {
      return this.doc.tags;
    },
    header() {
      return this.doc.headers[0];
    }
  },
  methods: {
    input(text) {
      if (!this.ro) {
        this.$store.commit(EDIT_DOCUMENT, new Doc({ ...this.doc, text }));
        if (!this.docId) {
          this.$router.replace({
            path: `/docs/${this.doc.id}`,
            query: {
              p: true
            }
          });
        }
      }
    },
    async findSharedDocument() {
      const docRef = await fetchSharedDoc({ docId: this.$route.params.docId });
      const serverDoc = docRef.data();
      const packed = {
        ...serverDoc,
        id: serverDoc.id || serverDoc.clientId,
        firebaseId: docRef.id,
        textKey: serverDoc.textKey || serverDoc.dataKey,
        createdAt: serverDoc.createdAt ? serverDoc.createdAt.toDate() : null,
        discardedAt: serverDoc.discardedAt ? serverDoc.discardedAt.toDate() : null,
        updatedAt: serverDoc.updatedAt ? serverDoc.updatedAt.toDate() : null,
        touchedAt: serverDoc.touchedAt ? serverDoc.touchedAt.toDate() : null,
        syncedAt: serverDoc.syncedAt.toDate()
      };
      return unpack(packed, { privateKey: this.$store.state.settings.crypto.privateKey });
    },
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags));
    }
  },
  beforeRouteUpdate(to, _from, next) {
    if (to.name === "docs-doc") {
      this.$store.dispatch(SET_DOCUMENT, { id: to.params.docId });
    }
    next();
  },
  async mounted() {
    this.updateTitle();
    if (this.ro) {
      this.placeholder = await this.findSharedDocument();
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = Editor$1;
  return openBlock(), createBlock(_component_Editor, {
    ref: "editable",
    appearance: _ctx.appearance,
    doc: _ctx.doc,
    key: _ctx.doc.id,
    initialFocus: _ctx.initialFocus,
    initialSelections: _ctx.initialSelections,
    ro: _ctx.ro,
    settings: _ctx.settings,
    onInput: _ctx.input
  }, null, 8, ["appearance", "doc", "initialFocus", "initialSelections", "ro", "settings", "onInput"]);
}
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Editor as default
};
//# sourceMappingURL=_doc_-45acebfd.js.map
