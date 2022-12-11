import { _ as _export_sfc, aJ as __vitePreload, ag as Doc, aE as ADD_DOCUMENT, aV as DOCUMENTS_LOADED, r as resolveComponent, o as openBlock, d as createBlock, f as createCommentVNode } from "./index.cce5ef5a.js";
import { h as hooks } from "./moment.9709ab41.js";
import Editor from "./_doc_.ad0e159a.js";
import "./Editor.5fe21e51.js";
import "./account.9b7625d0.js";
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
//# sourceMappingURL=notepad.01a6b888.js.map
