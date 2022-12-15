import { _ as __unplugin_components_2 } from "./CoreScrollable-aeda2e1b.js";
import { d as defineComponent, r as resolveComponent, o as openBlock, c as createBlock, a3 as withCtx, a2 as createBaseVNode, a7 as toDisplayString, u as unref, b as createElementBlock, e as createCommentVNode, Q as Fragment, a0 as renderList } from "./runtime-core.esm-bundler-9a0ba37c.js";
import { _ as _sfc_main$3 } from "./TagLink-223948b7.js";
import { w as withModifiers } from "./runtime-dom.esm-bundler-32f2d5b0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { h as hooks } from "./moment-f63e338d.js";
import { a as parseCodeblocks, b as parseReferences } from "./doc-aa27f392.js";
import { o as open$1 } from "./router-e4b51da9.js";
import { D as DISCARD_DOCUMENT, i as DUPLICATE_DOCUMENT, R as RESTORE_DOCUMENT, f as RESTRICT_DOCUMENT, h as SHARE_DOCUMENT, q as SET_RIGHT_SIDEBAR_VISIBILITY } from "./actions-a6a34f3c.js";
import "./overlayscrollbars.esm-084eb65b.js";
import "./Tag.vue_vue_type_script_setup_true_lang-7d59ccc4.js";
import "./TheLogo-05e604ed.js";
import "./index.browser-0a05c6e5.js";
import "./preload-helper-5f15640e.js";
import "./vue-router-944476c0.js";
import "./vuex.esm-bundler-4cb42885.js";
import "./index-90ebcfae-3aa38dd7.js";
import "./contexts-e80363e8.js";
import "./useRecentDocs-5169304a.js";
import "./pinia.esm-browser-4714cee3.js";
import "./title-23c0a2fd.js";
import "./settings-f2786260.js";
import "./firestore-20470781.js";
import "./_commonjsHelpers-dd024a83.js";
import "./_commonjs-dynamic-modules-58f2b0ec.js";
import "./debouncer-2293cf40.js";
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1);
const _hoisted_2$2 = { class: "flex-grow overflow-hidden truncate ml-3" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocLink",
  props: {
    doc: null
  },
  setup(__props) {
    const { doc } = __props;
    const title = doc.headers[0];
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock(_component_router_link, {
        to: { path: `/docs/${__props.doc.id}` },
        class: "flex items-center"
      }, {
        default: withCtx(() => [
          _hoisted_1$2,
          createBaseVNode("span", _hoisted_2$2, toDisplayString(unref(title)), 1)
        ]),
        _: 1
      }, 8, ["to"]);
    };
  }
});
const _sfc_main$1 = {
  props: {
    discardedAt: Date,
    onDiscard: Function,
    onRestore: Function
  },
  computed: {
    actionText() {
      return this.discardedAt ? "Restore" : "Discard";
    }
  },
  methods: {
    toggle() {
      this.discardedAt ? this.onRestore() : this.onDiscard();
    }
  }
};
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1);
const _hoisted_2$1 = { class: "ml-6 md:ml-3 text-left flex-grow" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "flex items-center cursor-pointer",
    onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.toggle && $options.toggle(...args), ["stop"]))
  }, [
    _hoisted_1$1,
    createBaseVNode("div", _hoisted_2$1, toDisplayString($options.actionText), 1)
  ]);
}
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const create = (files) => {
  const options = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ files })
  };
  return fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", options).then((res) => res.json()).then((data) => data.sandbox_id);
};
const open = (sandbox_id) => {
  if (sandbox_id) {
    window.open(`https://codesandbox.io/s/${sandbox_id}`, "_blank");
  }
};
const CodeSandbox = {
  create,
  open
};
const _sfc_main = {
  components: {
    DiscardableAction: __unplugin_components_0,
    DocLink: _sfc_main$2,
    TagLink: _sfc_main$3
  },
  data() {
    return {
      now: hooks(),
      ticker: null
    };
  },
  computed: {
    codeblocks() {
      return parseCodeblocks(this.doc.text);
    },
    createdAt() {
      if (this.$route.params.docId) {
        return hooks(this.doc.createdAt).format("ddd, MMM Do, YYYY [at] h:mm A");
      }
      return "Not yet created";
    },
    discardedAt() {
      return hooks(this.doc.discardedAt).format("ddd, MMM Do, YYYY [at] h:mm A");
    },
    doc() {
      return this.$store.getters.currentDoc;
    },
    hasCodeblocks() {
      return this.codeblocks.length > 0;
    },
    publicUrl() {
      const path = this.$router.resolve({ path: `/public/${this.doc.id}` }).href;
      return `${location.protocol}//${location.host}${path}`;
    },
    references() {
      const references = parseReferences(this.doc.text);
      return this.$store.getters.kept.filter((doc) => {
        return references.includes(doc.id);
      });
    },
    savedAt() {
      if (this.$route.params.docId) {
        if (this.now.diff(this.doc.updatedAt, "seconds") < 5) {
          return "just now";
        } else {
          return `${hooks(this.doc.updatedAt).from(this.now, true)} ago`;
        }
      }
      return "Not yet saved";
    },
    updatedAt() {
      if (this.$route.params.docId) {
        return hooks(this.doc.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A");
      }
      return "Not yet updated";
    }
  },
  methods: {
    async copyPublicUrl() {
      this.$refs.link.select();
      document.execCommand("copy");
    },
    async discardDocument() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.doc.id });
      open$1({ path: "/docs/new" });
    },
    async duplicateDocument() {
      const newDocId = await this.$store.dispatch(DUPLICATE_DOCUMENT, { id: this.doc.id });
      open$1({ path: `/docs/${newDocId}` });
    },
    async openSandbox() {
      const files = this.codeblocks.reduce((agg, codeblock, index) => {
        const filename = codeblock.filename || [index, codeblock.language || "txt"].join(".");
        return {
          ...agg,
          [filename]: {
            content: codeblock.code
          }
        };
      }, {});
      CodeSandbox.create(files).then((sandbox_id) => CodeSandbox.open(sandbox_id));
    },
    async restoreDocument() {
      this.$store.dispatch(RESTORE_DOCUMENT, { id: this.doc.id });
    },
    async restrictDocument() {
      this.$store.dispatch(RESTRICT_DOCUMENT, { id: this.doc.id });
    },
    async shareDocument() {
      this.$store.dispatch(SHARE_DOCUMENT, { id: this.doc.id });
    },
    async toggleMeta() {
      this.$store.dispatch(SET_RIGHT_SIDEBAR_VISIBILITY, !this.$store.state.showRightSidebar);
    }
  },
  async beforeUnmount() {
    clearInterval(this.ticker);
  },
  async mounted() {
    this.mounted = true;
    this.ticker = setInterval(() => {
      this.now = hooks();
    }, 5e3);
  }
};
const _hoisted_1 = { class: "flex flex-col flex-grow" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col flex-grow"
};
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 md:ml-3 flex-grow text-left" }, "Duplicate", -1);
const _hoisted_5 = [
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
  })
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 md:ml-3 flex-grow text-left" }, "Create Sandbox", -1);
const _hoisted_8 = [
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = { key: 0 };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
  })
], -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 md:ml-3 flex-grow text-left" }, "Make Private", -1);
const _hoisted_12 = [
  _hoisted_10,
  _hoisted_11
];
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
  })
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 md:ml-3 flex-grow text-left" }, "Copy Link", -1);
const _hoisted_15 = [
  _hoisted_13,
  _hoisted_14
];
const _hoisted_16 = ["value"];
const _hoisted_17 = {
  key: 1,
  class: "mb-2"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
  })
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 md:ml-3 flex-grow text-left" }, "Make Public", -1);
const _hoisted_20 = [
  _hoisted_18,
  _hoisted_19
];
const _hoisted_21 = { class: "mt-4" };
const _hoisted_22 = { class: "mt-4" };
const _hoisted_23 = { class: "mt-4" };
const _hoisted_24 = { class: "flex items-center px-3 py-2 my-1 md:px-2 md:py-1" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "1.25em",
  width: "1.25em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 13l4 4L19 7"
  })
], -1);
const _hoisted_26 = { class: "flex-grow overflow-hidden truncate ml-3" };
const _hoisted_27 = { class: "flex flex-col justify-end flex-grow px-3 md:p-2 mt-4 mb-3 md:mb-1" };
const _hoisted_28 = { key: 0 };
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Last Saved", -1);
const _hoisted_30 = { class: "capitalize pt-2 md:pt-1" };
const _hoisted_31 = {
  key: 1,
  class: "mt-3 md:mt-2"
};
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Created", -1);
const _hoisted_33 = { class: "pt-2 md:pt-1" };
const _hoisted_34 = {
  key: 2,
  class: "mt-3 md:mt-2"
};
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Updated", -1);
const _hoisted_36 = { class: "pt-2 md:pt-1" };
const _hoisted_37 = {
  key: 3,
  class: "mt-3 md:mt-2"
};
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Discarded", -1);
const _hoisted_39 = { class: "pt-2 md:pt-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DiscardableAction = __unplugin_components_0;
  const _component_TagLink = _sfc_main$3;
  const _component_DocLink = _sfc_main$2;
  const _component_CoreScrollable = __unplugin_components_2;
  return openBlock(), createBlock(_component_CoreScrollable, { class: "meta p-4 md:p-2" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        $options.doc ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.duplicateDocument && $options.duplicateDocument(...args), ["stop"])),
              class: "sidebar-link w-full"
            }, _hoisted_5),
            $options.doc.id ? (openBlock(), createBlock(_component_DiscardableAction, {
              key: 0,
              discardedAt: $options.doc.discardedAt,
              onDiscard: $options.discardDocument,
              onRestore: $options.restoreDocument,
              class: "sidebar-link w-full"
            }, null, 8, ["discardedAt", "onDiscard", "onRestore"])) : createCommentVNode("", true),
            $options.hasCodeblocks ? (openBlock(), createElementBlock("button", {
              key: 1,
              onClick: _cache[1] || (_cache[1] = (...args) => $options.openSandbox && $options.openSandbox(...args)),
              class: "sidebar-link w-full"
            }, _hoisted_8)) : createCommentVNode("", true),
            createBaseVNode("div", null, [
              $options.doc.public ? (openBlock(), createElementBlock("div", _hoisted_9, [
                createBaseVNode("button", {
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.restrictDocument && $options.restrictDocument(...args)),
                  class: "sidebar-link w-full"
                }, _hoisted_12),
                createBaseVNode("button", {
                  onClick: _cache[3] || (_cache[3] = (...args) => $options.copyPublicUrl && $options.copyPublicUrl(...args)),
                  class: "sidebar-link w-full"
                }, _hoisted_15),
                createBaseVNode("input", {
                  ref: "link",
                  value: $options.publicUrl,
                  type: "text",
                  class: "form-text w-full mb-2",
                  readonly: ""
                }, null, 8, _hoisted_16)
              ])) : (openBlock(), createElementBlock("div", _hoisted_17, [
                createBaseVNode("button", {
                  onClick: _cache[4] || (_cache[4] = (...args) => $options.shareDocument && $options.shareDocument(...args)),
                  class: "sidebar-link w-full"
                }, _hoisted_20)
              ]))
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.doc.tags, (tag) => {
              return openBlock(), createBlock(_component_TagLink, {
                key: tag,
                tag,
                class: "sidebar-link"
              }, null, 8, ["tag"]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_22, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.references, (reference) => {
              return openBlock(), createBlock(_component_DocLink, {
                key: reference.id,
                doc: reference,
                class: "sidebar-link"
              }, null, 8, ["doc"]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_23, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.doc.tasks, (task) => {
              return openBlock(), createElementBlock("div", _hoisted_24, [
                _hoisted_25,
                createBaseVNode("span", _hoisted_26, toDisplayString(task), 1)
              ]);
            }), 256))
          ]),
          createBaseVNode("div", _hoisted_27, [
            $options.doc.updatedAt ? (openBlock(), createElementBlock("div", _hoisted_28, [
              _hoisted_29,
              createBaseVNode("div", _hoisted_30, toDisplayString($options.savedAt), 1)
            ])) : createCommentVNode("", true),
            $options.doc.createdAt ? (openBlock(), createElementBlock("div", _hoisted_31, [
              _hoisted_32,
              createBaseVNode("div", _hoisted_33, toDisplayString($options.createdAt), 1)
            ])) : createCommentVNode("", true),
            $options.doc.updatedAt ? (openBlock(), createElementBlock("div", _hoisted_34, [
              _hoisted_35,
              createBaseVNode("div", _hoisted_36, toDisplayString($options.updatedAt), 1)
            ])) : createCommentVNode("", true),
            $options.doc.discardedAt ? (openBlock(), createElementBlock("div", _hoisted_37, [
              _hoisted_38,
              createBaseVNode("div", _hoisted_39, toDisplayString($options.discardedAt), 1)
            ])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])
    ]),
    _: 1
  });
}
const TheRightSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  TheRightSidebar as default
};
//# sourceMappingURL=meta-bd61e2ed.js.map
