import { _ as _export_sfc, aE as __vitePreload, aa as Doc, az as ADD_DOCUMENT, aQ as DOCUMENTS_LOADED, r as resolveComponent, o as openBlock, d as createBlock, f as createCommentVNode } from "./index.65602d5f.js";
import { h as hooks } from "./moment.9709ab41.js";
import Editor from "./_doc_.0e88737e.js";
import "./Editor.af4fef3b.js";
import "./account.36f48ae2.js";
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
        const quotes = (await __vitePreload(() => import("./quotes.8a50dfb7.js"), true ? [] : void 0)).default;
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
  const _component_Editor = resolveComponent("Editor");
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
//# sourceMappingURL=notepad.5b91000a.js.map
