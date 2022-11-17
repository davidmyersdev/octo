import { _ as _export_sfc, o as openBlock, c as createElementBlock, k as renderSlot, r as resolveComponent, b as createVNode, w as withCtx, e as createTextVNode, t as toDisplayString, n as normalizeClass, d as createBlock, f as createCommentVNode, g as globalConfig, O as DEACTIVATE_CONTEXT, N as nanoid, M as open, S as SET_CONTEXT_TAGS, B as inject, a as createBaseVNode, P as Fragment, Q as renderList } from "./index.634b652b.js";
import { _ as _sfc_main$4 } from "./TagLink.96665364.js";
import { T as TheLogo } from "./TheLogo.d87227ee.js";
import { u as useFiles } from "./files.bc7a92fe.js";
import "./Tag.vue_vue_type_script_setup_true_lang.e580322f.js";
const _sfc_main$3 = {
  props: {
    active: {
      default: false,
      required: false,
      type: Boolean
    }
  }
};
const _hoisted_1$3 = { class: "key hidden md:flex justify-center rounded-sm uppercase leading-none text-xs p-1" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("small", _hoisted_1$3, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Key = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  components: {
    Key
  },
  computed: {
    active() {
      return this.$store.state.keybindings.listening;
    }
  }
};
const _hoisted_1$2 = { class: "hidden md:flex items-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Key = resolveComponent("Key");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_Key, {
      class: normalizeClass({ "text-gray-400 dark:text-gray-800": $options.active })
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(this.$store.state.modKey), 1)
      ]),
      _: 1
    }, 8, ["class"]),
    createVNode(_component_Key, {
      class: normalizeClass([{ "text-gray-400 dark:text-gray-800": $options.active }, "ml-1"])
    }, {
      default: withCtx(() => [
        createTextVNode("K")
      ]),
      _: 1
    }, 8, ["class"])
  ]);
}
const ModK = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  components: {
    Key
  },
  computed: {
    active() {
      return this.$store.state.keybindings.listening;
    }
  }
};
const _hoisted_1$1 = { class: "md:flex items-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Key = resolveComponent("Key");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    $options.active ? (openBlock(), createBlock(_component_Key, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true)
  ]);
}
const ModKKey = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const defineProperty = (object, property, descriptor) => {
  Object.defineProperty(object, property, descriptor);
};
const defineProperties = (object, properties) => {
  Object.keys(properties).forEach((key) => {
    defineProperty(object, key, properties[key]);
  });
};
const AsyncIterable = (iterable) => {
  const asyncIterable = [...iterable];
  defineProperties(asyncIterable, {
    [Symbol.asyncIterator]: {
      value: () => {
        let index = 0;
        return {
          next: async () => {
            const done = index === asyncIterable.length;
            const value = asyncIterable[index++];
            return Promise.resolve({ done, value });
          },
          return: async () => {
            return Promise.resolve({ done: true, value: void 0 });
          }
        };
      }
    },
    any: {
      value: async (predicate) => {
        return anyAsync(asyncIterable, predicate);
      }
    },
    first: {
      value: async (predicate) => {
        return firstAsync(asyncIterable, predicate);
      }
    }
  });
  return asyncIterable;
};
const anyAsync = async (iterable, predicate) => {
  return Promise.any(
    iterable.map(async (item, index, items) => {
      if (await predicate(item, index, items)) {
        return item;
      }
      throw new Error();
    })
  ).catch();
};
const firstAsync = async (iterable, predicate) => {
  for (const [index, item] of iterable.entries()) {
    if (await predicate(item, index, iterable)) {
      return item;
    }
  }
};
const _sfc_main = {
  components: {
    Key,
    ModK,
    ModKKey,
    TagLink: _sfc_main$4,
    TheLogo
  },
  inject: ["mq"],
  data() {
    return {
      globalConfig,
      supportsFirebase: globalConfig.supportsFirebase
    };
  },
  computed: {
    authIsEvaluated() {
      return this.$store.state.auth.isEvaluated;
    },
    context() {
      return this.$store.state.context;
    },
    contextTags() {
      return this.context.tags.sort();
    },
    contexts() {
      return this.$store.getters.sortedContexts;
    },
    discordInviteLink() {
      return "https://link.octo.app/discord";
    },
    document() {
      return this.$store.getters.currentDoc;
    },
    experimentalFeaturesEnabled() {
      return this.$store.state.settings.experimental;
    },
    mediumPlus() {
      return ["md", "lg", "xl"].includes(this.mq.current);
    },
    modKey() {
      return this.$store.state.modKey;
    },
    october() {
      return this.$store.state.settings.theme === "october";
    },
    tags() {
      return this.$store.getters.tags;
    }
  },
  methods: {
    clearContext() {
      this.$store.dispatch(DEACTIVATE_CONTEXT);
    },
    async openFile() {
      const id = nanoid();
      const [handle] = await window.showOpenFilePicker({ types: [{ description: "Markdown Files", accept: { "text/markdown": [".markdown", ".md"] } }] });
      try {
        const { id: id2 } = await AsyncIterable(useFiles().files).any((file) => {
          return file.handle.isSameEntry(handle);
        });
        if (id2) {
          return open({ path: `/file-editor/${id2}` });
        }
      } catch {
      }
      await handle.createWritable();
      useFiles().add({ id, handle });
      return open({ path: `/file-editor/${id}` });
    },
    setContext(context) {
      this.$store.dispatch(SET_CONTEXT_TAGS, { context });
    },
    trackCta() {
      window.fathom.trackGoal("LO3GIHSZ", 0);
    }
  },
  setup() {
    const user = inject("user");
    return {
      user
    };
  }
};
const _hoisted_1 = { class: "hidden md:flex items-center justify-center pb-2" };
const _hoisted_2 = { class: "side-nav-spacer flex flex-col flex-grow pb-3" };
const _hoisted_3 = { class: "other-actions" };
const _hoisted_4 = { class: "search" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
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
      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    })
  ]),
  /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 md:ml-3" }, "Docs")
], -1);
const _hoisted_6 = { class: "hidden md:flex text-gray-500" };
const _hoisted_7 = {
  key: 0,
  class: "-mx-2 md:mx-0"
};
const _hoisted_8 = { class: "-m-px mt-6 border px-2 pb-2 md:p-1 border-gray-600 rounded context-box" };
const _hoisted_9 = { class: "context-label" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", null, "Context", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M6 18L18 6M6 6l12 12"
  })
], -1);
const _hoisted_12 = [
  _hoisted_11
];
const _hoisted_13 = {
  key: 0,
  class: "flex flex-col gap-2 md:gap-1"
};
const _hoisted_14 = {
  key: 1,
  class: "p-6 md:p-2"
};
const _hoisted_15 = { class: "sidebar-label" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", null, "Actions", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  })
], -1);
const _hoisted_18 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", { class: "action" }, "New Doc", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
  })
], -1);
const _hoisted_21 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Daily Notepad", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
  })
], -1);
const _hoisted_24 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("span", { class: "action" }, "Context Switching", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 rotate-90",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
  })
], -1);
const _hoisted_27 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", null, "Force Graph", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  }),
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  })
], -1);
const _hoisted_30 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("span", null, "App Settings", -1);
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_33 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_34 = ["href"];
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "h-6 w-5 px-0.5",
  viewBox: "0 0 71 55",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("g", null, [
    /* @__PURE__ */ createBaseVNode("path", { d: "M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" })
  ])
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("div", { class: "flex-grow ml-6 md:ml-3" }, "Community Discord", -1);
const _hoisted_37 = [
  _hoisted_35,
  _hoisted_36
];
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
  })
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Save Docs")
], -1);
const _hoisted_40 = { key: 3 };
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-center justify-between ml-6 md:ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Open File"),
  /* @__PURE__ */ createBaseVNode("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-5 w-5 text-gray-300 dark:text-gray-700",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1);
const _hoisted_43 = [
  _hoisted_41,
  _hoisted_42
];
const _hoisted_44 = { class: "sidebar-label" };
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("span", null, "Quick Filters", -1);
const _hoisted_46 = { class: "flex" };
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_48 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("span", null, "Tasks", -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_51 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("span", null, "Untagged", -1);
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_54 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_55 = /* @__PURE__ */ createBaseVNode("span", null, "Discarded", -1);
const _hoisted_56 = {
  key: 4,
  class: "sidebar-label"
};
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("span", null, "Saved Contexts", -1);
const _hoisted_58 = [
  _hoisted_57
];
const _hoisted_59 = ["onClick"];
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })
], -1);
const _hoisted_61 = { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" };
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("h6", { class: "sidebar-label" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Tags")
], -1);
const _hoisted_63 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
  })
], -1);
const _hoisted_64 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-6 flex-grow" }, "Tags", -1);
const _hoisted_65 = { key: 0 };
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("h6", { class: "sidebar-label" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Agreements")
], -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  })
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Privacy Policy")
], -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  })
], -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-stretch justify-between ml-6 md:ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Terms & Conditions")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheLogo = resolveComponent("TheLogo");
  const _component_router_link = resolveComponent("router-link");
  const _component_Key = resolveComponent("Key");
  const _component_TagLink = resolveComponent("TagLink");
  const _component_ModK = resolveComponent("ModK");
  const _component_ModKKey = resolveComponent("ModKKey");
  const _component_SimpleBar = resolveComponent("SimpleBar");
  return openBlock(), createBlock(_component_SimpleBar, { class: "p-4 md:p-2" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_router_link, {
          class: "flex p-2",
          to: { path: "/docs/new" }
        }, {
          default: withCtx(() => [
            createVNode(_component_TheLogo, { class: "h-10 text-theme" })
          ]),
          _: 1
        })
      ]),
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_router_link, {
              to: { path: "/docs" },
              class: "sidebar-button"
            }, {
              default: withCtx(() => [
                _hoisted_5,
                createBaseVNode("span", _hoisted_6, [
                  createVNode(_component_Key, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString($options.modKey), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Key, { class: "ml-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u21E7 shift")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Key, { class: "ml-1" }, {
                    default: withCtx(() => [
                      createTextVNode("f")
                    ]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            })
          ]),
          $options.context.active || $options.context.editing ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("h6", _hoisted_9, [
                _hoisted_10,
                createBaseVNode("button", {
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.clearContext && $options.clearContext(...args)),
                  class: "button button-color-surface"
                }, _hoisted_12)
              ]),
              $options.contextTags.length ? (openBlock(), createElementBlock("div", _hoisted_13, [
                (openBlock(true), createElementBlock(Fragment, null, renderList($options.contextTags, (tag) => {
                  return openBlock(), createBlock(_component_TagLink, {
                    key: tag,
                    tag,
                    class: "context-tag"
                  }, null, 8, ["tag"]);
                }), 128))
              ])) : (openBlock(), createElementBlock("div", _hoisted_14, "No Tags Selected"))
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("h6", _hoisted_15, [
            _hoisted_16,
            createVNode(_component_ModK)
          ]),
          createVNode(_component_router_link, {
            to: { path: "/docs/new" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_17,
              createBaseVNode("span", _hoisted_18, [
                _hoisted_19,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("N")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "/notepad" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_20,
              createBaseVNode("span", _hoisted_21, [
                _hoisted_22,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("P")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "/contexts" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_23,
              createBaseVNode("span", _hoisted_24, [
                _hoisted_25,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("C")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "/force-graph" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_26,
              createBaseVNode("span", _hoisted_27, [
                _hoisted_28,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("E")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "/settings" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_29,
              createBaseVNode("span", _hoisted_30, [
                _hoisted_31,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("S")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          $data.supportsFirebase ? (openBlock(), createBlock(_component_router_link, {
            key: 1,
            to: { path: "/account" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_32,
              createBaseVNode("span", _hoisted_33, [
                createBaseVNode("span", null, toDisplayString($setup.user.id ? "My Account" : "Sign In to Account"), 1),
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("A")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createBaseVNode("a", {
            class: "sidebar-link",
            href: $options.discordInviteLink,
            target: "_blank",
            rel: "noopener noreferrer"
          }, _hoisted_37, 8, _hoisted_34),
          $data.supportsFirebase && !$setup.user.id ? (openBlock(), createBlock(_component_router_link, {
            key: 2,
            onClick: $options.trackCta,
            to: { path: "/account" },
            class: "sidebar-link text-theme"
          }, {
            default: withCtx(() => [
              _hoisted_38,
              _hoisted_39
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          $options.experimentalFeaturesEnabled ? (openBlock(), createElementBlock("div", _hoisted_40, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = (...args) => $options.openFile && $options.openFile(...args)),
              class: "sidebar-link w-full",
              title: "Experimental"
            }, _hoisted_43)
          ])) : createCommentVNode("", true),
          createBaseVNode("h6", _hoisted_44, [
            _hoisted_45,
            createBaseVNode("span", _hoisted_46, [
              createVNode(_component_ModK)
            ])
          ]),
          createVNode(_component_router_link, {
            to: { path: "/docs/f/tasks" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_47,
              createBaseVNode("span", _hoisted_48, [
                _hoisted_49,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("T")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "/docs/f/untagged" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_50,
              createBaseVNode("span", _hoisted_51, [
                _hoisted_52,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("U")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "/docs/f/discarded" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_53,
              createBaseVNode("span", _hoisted_54, [
                _hoisted_55,
                createVNode(_component_ModKKey, { class: "text-gray-500" }, {
                  default: withCtx(() => [
                    createTextVNode("D")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          $options.contexts.length ? (openBlock(), createElementBlock("h6", _hoisted_56, _hoisted_58)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.contexts, (context) => {
            return openBlock(), createElementBlock("button", {
              key: context.id,
              onClick: ($event) => $options.setContext(context),
              class: "sidebar-link w-full"
            }, [
              _hoisted_60,
              createBaseVNode("span", _hoisted_61, [
                createBaseVNode("span", null, toDisplayString(context.name), 1)
              ])
            ], 8, _hoisted_59);
          }), 128))
        ]),
        createBaseVNode("div", null, [
          _hoisted_62,
          createVNode(_component_router_link, {
            class: "sidebar-link md:hidden",
            to: { path: "/tags" }
          }, {
            default: withCtx(() => [
              _hoisted_63,
              _hoisted_64
            ]),
            _: 1
          }),
          $options.mediumPlus ? (openBlock(), createElementBlock("div", _hoisted_65, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.tags, (tag) => {
              return openBlock(), createBlock(_component_TagLink, {
                key: tag,
                tag,
                class: "sidebar-link"
              }, null, 8, ["tag"]);
            }), 128))
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", null, [
          _hoisted_66,
          createVNode(_component_router_link, {
            to: { path: "/privacy-policy" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_67,
              _hoisted_68
            ]),
            _: 1
          }),
          createVNode(_component_router_link, {
            to: { path: "terms-and-conditions" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              _hoisted_69,
              _hoisted_70
            ]),
            _: 1
          })
        ])
      ])
    ]),
    _: 1
  });
}
const TheLeftSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  TheLeftSidebar as default
};
//# sourceMappingURL=menu.45b8b2d1.js.map
