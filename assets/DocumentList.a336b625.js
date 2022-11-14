import { h as hooks } from "./moment.9709ab41.js";
import { _ as _export_sfc, W as DISCARD_DOCUMENT, Y as RESTORE_DOCUMENT, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, R as withModifiers, a4 as MERGE_DOCUMENTS, M as open, r as resolveComponent, e as createTextVNode, f as createCommentVNode, j as withDirectives, v as vModelText, P as Fragment, Q as renderList, a5 as withKeys, b as createVNode, a6 as mergeProps, n as normalizeClass } from "./index.7eca4c79.js";
import { _ as _sfc_main$2 } from "./Tag.vue_vue_type_script_setup_true_lang.6becfc87.js";
const _sfc_main$1 = {
  props: {
    id: String,
    text: String,
    updatedAt: Date,
    discardedAt: Date
  },
  computed: {
    updated() {
      return `Updated on ${hooks(this.updatedAt).format("ddd, MMM Do, YYYY [at] h:mm A")}`;
    }
  },
  methods: {
    discard() {
      this.$store.dispatch(DISCARD_DOCUMENT, { id: this.id });
    },
    restore() {
      this.$store.dispatch(RESTORE_DOCUMENT, { id: this.id });
    }
  }
};
const _hoisted_1$1 = { class: "shadow relative flex flex-col min-w-0 rounded text-sm overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 dark:text-gray-300" };
const _hoisted_2$1 = { class: "flex-grow flex-shrink overflow-hidden p-4" };
const _hoisted_3$1 = { class: "flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-900" };
const _hoisted_4$1 = { class: "text-gray-500" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1);
const _hoisted_6$1 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Restore", -1);
const _hoisted_7$1 = [
  _hoisted_5$1,
  _hoisted_6$1
];
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
  })
], -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Discard", -1);
const _hoisted_10$1 = [
  _hoisted_8$1,
  _hoisted_9$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("pre", null, toDisplayString($props.text), 1)
    ]),
    createBaseVNode("div", _hoisted_3$1, [
      createBaseVNode("p", _hoisted_4$1, toDisplayString($options.updated), 1),
      createBaseVNode("div", null, [
        $props.discardedAt ? (openBlock(), createElementBlock("button", {
          key: 0,
          onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $options.restore && $options.restore(...args), ["stop"])),
          class: "destroy button-flat button-size-medium text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800"
        }, _hoisted_7$1)) : (openBlock(), createElementBlock("button", {
          key: 1,
          onClick: _cache[1] || (_cache[1] = withModifiers((...args) => $options.discard && $options.discard(...args), ["stop"])),
          class: "destroy button-flat button-size-medium text-sm text-red-500 bg-gray-200 dark:bg-gray-900 hover:bg-gray-300 dark:hover:bg-gray-800"
        }, _hoisted_10$1))
      ])
    ])
  ]);
}
const Document = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const REGEX_QUERY = /^\/(?<regex>.+)\/(?<flags>[a-z]*)$/s;
const _sfc_main = {
  emits: ["update:query"],
  components: {
    Document,
    Tag: _sfc_main$2
  },
  props: {
    cols: {
      default: 2,
      type: Number
    },
    filter: String,
    query: String,
    tag: String
  },
  data() {
    return {
      isEditing: false,
      q: this.query,
      selectedDocuments: [],
      visibleCount: 25
    };
  },
  watch: {
    q(value) {
      this.$emit("update:query", value);
    }
  },
  computed: {
    action() {
      return this.tag || this.filter || "My docs";
    },
    canMerge() {
      return this.selectedDocuments.length > 1;
    },
    documents() {
      if (this.tag) {
        return this.$store.getters.withTag(this.tag);
      }
      if (this.filter === "tasks") {
        return this.$store.getters.tasks;
      }
      if (this.filter === "discarded") {
        return this.$store.getters.discarded;
      }
      if (this.filter === "untagged") {
        return this.$store.getters.untagged;
      }
      return this.$store.getters.kept;
    },
    filteredDocuments() {
      return this.documents.filter((doc) => {
        if (!this.q) {
          return true;
        }
        try {
          const { groups: { flags, regex } } = REGEX_QUERY.exec(this.q);
          return new RegExp(regex, flags).test(doc.text);
        } catch (_error) {
          return doc.text.toLowerCase().includes(this.q.toLowerCase());
        }
      });
    },
    finalDocuments() {
      return this.filteredDocuments.map((doc) => ({
        ...doc,
        selected: this.selectedDocuments.includes(doc)
      }));
    },
    showLoadMore() {
      return this.visibleCount <= this.finalDocuments.length;
    },
    visibleDocuments() {
      return this.finalDocuments.slice(0, this.visibleCount);
    }
  },
  methods: {
    loadMore() {
      this.visibleCount += 25;
    },
    mergeDocuments() {
      this.$store.dispatch(MERGE_DOCUMENTS, this.selectedDocuments);
      this.selectedDocuments = [];
    },
    toggleIsEditing() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing) {
        this.selectedDocuments = [];
      }
    },
    selectDocument(id) {
      if (this.isEditing) {
        if (this.selectedDocuments.find((doc) => doc.id === id)) {
          this.selectedDocuments = this.selectedDocuments.filter((doc) => doc.id !== id);
        } else {
          this.selectedDocuments.push(this.filteredDocuments.find((doc) => doc.id === id));
        }
      } else {
        open({ path: `/docs/${id}` });
      }
    }
  },
  mounted() {
    this.$refs.input.focus();
  }
};
const _hoisted_1 = { class: "flex flex-col w-full" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "action text-3xl capitalize mb-2" }, "My Docs", -1);
const _hoisted_3 = {
  key: 0,
  class: "flex items-center gap-1 text-gray-500"
};
const _hoisted_4 = { class: "inline-flex items-center" };
const _hoisted_5 = {
  key: 0,
  class: "inline-flex items-center gap-0.5"
};
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-4 w-4",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "3"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
  })
], -1);
const _hoisted_7 = {
  key: 1,
  class: ""
};
const _hoisted_8 = { class: "mb-4 mt-8" };
const _hoisted_9 = { class: "flex align-items-bottom" };
const _hoisted_10 = { class: "flex-grow" };
const _hoisted_11 = { class: "flex" };
const _hoisted_12 = { class: "mb-4" };
const _hoisted_13 = {
  key: 0,
  class: "text-gray-700"
};
const _hoisted_14 = ["onKeypress", "onClick"];
const _hoisted_15 = {
  key: 0,
  class: "flex items-center justify-center rounded absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-50"
};
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("svg", {
  height: "3em",
  width: "3em",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = {
  key: 0,
  class: "flex items-center justify-center rounded cursor-pointer"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  })
], -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Load More", -1);
const _hoisted_21 = [
  _hoisted_19,
  _hoisted_20
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Document = resolveComponent("Document");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    $props.tag || $props.filter ? (openBlock(), createElementBlock("p", _hoisted_3, [
      createTextVNode(" Filtering docs as "),
      createBaseVNode("strong", _hoisted_4, [
        $props.tag ? (openBlock(), createElementBlock("span", _hoisted_5, [
          _hoisted_6,
          createBaseVNode("span", null, toDisplayString($props.tag), 1)
        ])) : (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString($props.filter), 1))
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_8, [
      createBaseVNode("div", _hoisted_9, [
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.q = $event),
              ref: "input",
              type: "text",
              class: "form-text w-full shadow",
              placeholder: "Search with /regex/i or plain text...",
              autocomplete: "off"
            }, null, 512), [
              [vModelText, $data.q]
            ])
          ])
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_12, [
      createBaseVNode("button", {
        onClick: _cache[1] || (_cache[1] = (...args) => $options.toggleIsEditing && $options.toggleIsEditing(...args)),
        class: "button button-size-medium button-color-gray shadow"
      }, toDisplayString($data.isEditing ? "Cancel" : "Edit Documents"), 1),
      $options.canMerge ? (openBlock(), createElementBlock("button", {
        key: 0,
        onClick: _cache[2] || (_cache[2] = (...args) => $options.mergeDocuments && $options.mergeDocuments(...args)),
        class: "button button-size-medium button-color-gray shadow ml-2"
      }, "Merge Documents")) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", null, [
      $data.isEditing ? (openBlock(), createElementBlock("p", _hoisted_13, "Select two or more documents to merge them together.")) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", {
      class: normalizeClass(["grid gap-4 grid-cols-1", $props.cols === 2 && "lg:grid-cols-2"])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleDocuments, (document) => {
        return openBlock(), createElementBlock("div", {
          key: document.id,
          onKeypress: withKeys(($event) => $options.selectDocument(document.id), ["enter"]),
          onClick: ($event) => $options.selectDocument(document.id),
          tabindex: "0",
          class: "rounded relative cursor-pointer outline-none focus:ring"
        }, [
          createVNode(_component_Document, mergeProps(document, { class: "h-96" }), null, 16),
          document.selected ? (openBlock(), createElementBlock("div", _hoisted_15, _hoisted_17)) : createCommentVNode("", true)
        ], 40, _hoisted_14);
      }), 128)),
      $options.showLoadMore ? (openBlock(), createElementBlock("div", _hoisted_18, [
        createBaseVNode("div", {
          onClick: _cache[3] || (_cache[3] = (...args) => $options.loadMore && $options.loadMore(...args)),
          class: "button button-color-gray text-lg px-8 py-6"
        }, _hoisted_21)
      ])) : createCommentVNode("", true)
    ], 2)
  ]);
}
const DocumentList = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  DocumentList as D
};
//# sourceMappingURL=DocumentList.a336b625.js.map
