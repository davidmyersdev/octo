import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
import { E as Editor$1 } from "./Editor-26a7a932.js";
import { h as hooks } from "./moment-f63e338d.js";
import Editor from "./_doc_-f01e0519.js";
import { D as Doc } from "./doc-aa27f392.js";
import { A as ADD_DOCUMENT, e as DOCUMENTS_LOADED } from "./actions-a6a34f3c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { o as openBlock, c as createBlock, e as createCommentVNode } from "./runtime-core.esm-bundler-9a0ba37c.js";
import "./runtime-dom.esm-bundler-32f2d5b0.js";
import "./client-2de13258.js";
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
import "./title-37a9cdab.js";
import "./firestore-20470781.js";
const _sfc_main = {
  components: {
    Editor
  },
  computed: {
    daily() {
      return this.$store.getters.daily;
    }
  },
  methods: {
    async buildTemplate() {
      try {
        const quotes = (await __vitePreload(() => import("./quotes-514a97f3.js"), true ? [] : void 0)).default;
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        return `#daily

# ${hooks().format("dddd, MMMM Do, YYYY")}

> ${quote.text}
> ${quote.author || "Unknown"}

`;
      } catch (error) {
        console.warn({ error });
        return `#daily

# ${hooks().format("dddd, MMMM Do, YYYY")}

`;
      }
    },
    async checkDaily() {
      let cutoff = hooks().startOf("day").add(3, "hours");
      if (hooks() < cutoff) {
        cutoff = cutoff.subtract(1, "day");
      }
      if (!this.daily || this.daily.createdAt < cutoff) {
        const template = await this.buildTemplate();
        const doc = new Doc({ text: template, daily: true });
        this.$store.commit(ADD_DOCUMENT, doc);
      }
    }
  },
  beforeMount() {
    if (this.$store.state.documents.loaded) {
      this.checkDaily();
    } else {
      this.$store.subscribe(({ type }, _state) => {
        if (type === DOCUMENTS_LOADED) {
          this.checkDaily();
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Editor = Editor$1;
  return $options.daily ? (openBlock(), createBlock(_component_Editor, {
    key: 0,
    docId: $options.daily.id,
    initialFocus: "end"
  }, null, 8, ["docId"])) : createCommentVNode("", true);
}
const notepad = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  notepad as default
};
//# sourceMappingURL=notepad-c0cbb2eb.js.map
