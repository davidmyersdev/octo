import { E as Editor$1 } from "./Editor.af4fef3b.js";
import { _ as _export_sfc, i as defineComponent, r as resolveComponent, o as openBlock, d as createBlock, aa as Doc, ay as EDIT_DOCUMENT, az as ADD_DOCUMENT, aA as fetchSharedDoc, aB as unpack, aC as setTitle, aD as SET_DOCUMENT } from "./index.65602d5f.js";
import "./account.36f48ae2.js";
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
    readonly: {
      type: Boolean
    }
  },
  data() {
    return {
      editor: null,
      placeholder: new Doc({ text: formatTags(this.$store.state.context.tags, " ") })
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
    appearance() {
      if (this.$store.state.settings.theme === "october") {
        return "dark";
      }
      return this.$store.state.settings.theme;
    },
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
      if (!this.readonly) {
        if (this.docId) {
          this.$store.commit(EDIT_DOCUMENT, { id: this.doc.id, text });
        } else {
          this.$store.commit(ADD_DOCUMENT, new Doc({ id: this.doc.id, text }));
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
    if (this.readonly) {
      this.placeholder = await this.findSharedDocument();
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = resolveComponent("Editor");
  return openBlock(), createBlock(_component_Editor, {
    ref: "editable",
    appearance: _ctx.appearance,
    doc: _ctx.doc,
    initialFocus: _ctx.initialFocus,
    initialSelections: _ctx.initialSelections,
    readonly: _ctx.readonly,
    settings: _ctx.settings,
    onInput: _ctx.input
  }, null, 8, ["appearance", "doc", "initialFocus", "initialSelections", "readonly", "settings", "onInput"]);
}
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Editor as default
};
//# sourceMappingURL=_doc_.0e88737e.js.map
