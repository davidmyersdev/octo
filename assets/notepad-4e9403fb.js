import { _ as __vitePreload } from "./preload-helper-5f15640e.js";
import { h as hooks } from "./moment-f63e338d.js";
import EditorPage from "./_docId_-2718c9a6.js";
import { D as Doc } from "./doc-018f7423.js";
import { E as EDIT_DOCUMENT, e as DOCUMENTS_LOADED } from "./actions-a6a34f3c.js";
import { _ as _export_sfc, g as resolveComponent, o as openBlock, k as createBlock, n as createCommentVNode } from "./_plugin-vue_export-helper-ea9be126.js";
import "./Editor-c4265d13.js";
import "./runtime-dom.esm-bundler-eaea4b0e.js";
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
import "./vuex.esm-bundler-99de9736.js";
import "./title-23c0a2fd.js";
const _sfc_main = {
  components: {
    EditorPage
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
        this.$store.commit(EDIT_DOCUMENT, doc);
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
  const _component_EditorPage = resolveComponent("EditorPage");
  return $options.daily ? (openBlock(), createBlock(_component_EditorPage, {
    key: 0,
    docId: $options.daily.id
  }, null, 8, ["docId"])) : createCommentVNode("", true);
}
const notepad = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  notepad as default
};
//# sourceMappingURL=notepad-4e9403fb.js.map
