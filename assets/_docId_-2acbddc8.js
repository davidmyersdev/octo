import { E as Editor } from "./Editor-c8a5fc1e.js";
import { u as useStore } from "./vuex.esm-bundler-99de9736.js";
import { s as setTitle } from "./title-23c0a2fd.js";
import { D as Doc } from "./doc-018f7423.js";
import { E as EDIT_DOCUMENT } from "./actions-7ca2be11.js";
import { _ as _export_sfc, e as defineComponent, o as openBlock, k as createBlock, i as inject, f as computed } from "./_plugin-vue_export-helper-ea9be126.js";
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
import "./index-90ebcfae-24d515d8.js";
import "./index.esm2017-e69b4276.js";
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
    Editor
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
      default: false,
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
    const store = useStore();
    const settings = computed(() => store.state.settings.editor);
    return {
      appearance: appearance.value === "october" ? "dark" : appearance.value,
      settings
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
    updateTitle() {
      setTitle(this.header || formatTags(this.doc.tags));
    }
  },
  async mounted() {
    this.updateTitle();
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = Editor;
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
const EditorPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  EditorPage as default
};
//# sourceMappingURL=_docId_-2acbddc8.js.map
