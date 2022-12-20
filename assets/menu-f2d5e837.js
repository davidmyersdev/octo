import { _ as __unplugin_components_2 } from "./CoreScrollable-4b186a41.js";
import { _ as _sfc_main$4 } from "./TagLink-3b631b6d.js";
import { _ as __unplugin_components_0 } from "./CoreDivider-0e2c45f2.js";
import { _ as _export_sfc, o as openBlock, c as createElementBlock, s as renderSlot, d as createBaseVNode, k as createBlock, w as withCtx, n as createCommentVNode, h as createVNode, j as createTextVNode, t as toDisplayString, q as normalizeClass, i as inject, g as resolveComponent, F as Fragment, p as renderList } from "./_plugin-vue_export-helper-ea9be126.js";
import { _ as __unplugin_components_0$1 } from "./CoreLink-6737d303.js";
import { n as nanoid } from "./index.browser-0a05c6e5.js";
import { _ as __unplugin_components_1$1 } from "./CoreButton-765ee119.js";
import { _ as __unplugin_components_0$2 } from "./TheLogo-3b3b0e0c.js";
import { o as open } from "./router-109e19e2.js";
import { u as useFiles } from "./useFiles-7bacb5ca.js";
import { g as globalConfig } from "./global-6817a2cb.js";
import { n as DEACTIVATE_CONTEXT, o as SET_CONTEXT_TAGS } from "./actions-a6a34f3c.js";
import { r as render$b } from "./Tag.vue_vue_type_script_setup_true_lang-65429ac4.js";
import { r as render$c, a as render$d } from "./TrashIcon-8a1e2fdd.js";
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
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
    })
  ]);
}
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
}
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    })
  ]);
}
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
    })
  ]);
}
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
    }),
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
    })
  ]);
}
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
const _sfc_main$2 = {
  components: {
    Key: __unplugin_components_3
  },
  computed: {
    active() {
      return this.$store.state.keybindings.listening;
    }
  }
};
const _hoisted_1$2 = { class: "md:flex items-center" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Key = __unplugin_components_3;
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    $options.active ? (openBlock(), createBlock(_component_Key, { key: 0 }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true)
  ]);
}
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  components: {
    Key: __unplugin_components_3
  },
  computed: {
    active() {
      return this.$store.state.keybindings.listening;
    }
  }
};
const _hoisted_1$1 = { class: "hidden md:flex items-center" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Key = __unplugin_components_3;
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
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
const ModK = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
    AccountIcon: render,
    BeakerIcon: render$a,
    CheckIcon: render$9,
    ChevronUpDownIcon: render$8,
    CoreButton: __unplugin_components_1$1,
    CoreDivider: __unplugin_components_0,
    CoreLink: __unplugin_components_0$1,
    DocumentIcon: render$4,
    DocumentTextIcon: render$5,
    TagIcon: render$b,
    InboxIcon: render$3,
    Key: __unplugin_components_3,
    ModK,
    ModKKey: __unplugin_components_1,
    SaveIcon: render$7,
    SearchIcon: render$2,
    SettingsIcon: render$6,
    TagLink: _sfc_main$4,
    TheLogo: __unplugin_components_0$2,
    TrashIcon: render$c,
    UserCircleIcon: render,
    WorkspaceIcon: render$d,
    WorkspacesIcon: render$1
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
    experimentalFeaturesEnabled() {
      return this.$store.state.settings.experimental;
    },
    mediumPlus() {
      return ["md", "lg", "xl"].includes(this.mq.current);
    },
    modKey() {
      return this.$store.state.modKey;
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
const _hoisted_1 = { class: "flex flex-col flex-grow pb-3" };
const _hoisted_2 = { class: "flex gap-3 items-center" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "Search", -1);
const _hoisted_4 = { class: "action flex flex-grow items-stretch justify-between ml-3" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", null, "Inbox", -1);
const _hoisted_6 = { class: "action flex flex-grow items-stretch justify-between ml-3" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "action" }, "Workspaces", -1);
const _hoisted_8 = { class: "flex gap-3 items-center" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", null, "Account", -1);
const _hoisted_10 = { class: "flex gap-3 items-center" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "Settings", -1);
const _hoisted_12 = { key: 3 };
const _hoisted_13 = { class: "action flex flex-grow items-center justify-between ml-3" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", null, "Open File", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-stretch justify-between ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Save Docs")
], -1);
const _hoisted_16 = { class: "px-1 pt-2 sidebar-label cursor-pointer" };
const _hoisted_17 = { class: "flex items-center gap-2" };
const _hoisted_18 = { class: "action flex flex-grow items-stretch justify-between ml-3" };
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("span", null, "Tasks", -1);
const _hoisted_20 = { class: "action flex flex-grow items-stretch justify-between ml-3" };
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", null, "Discarded", -1);
const _hoisted_22 = { key: 5 };
const _hoisted_23 = { class: "px-1 pt-2 sidebar-label cursor-pointer" };
const _hoisted_24 = { class: "flex items-center gap-2" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_26 = [
  _hoisted_25
];
const _hoisted_27 = {
  key: 0,
  class: "flex flex-col gap-2 md:gap-1"
};
const _hoisted_28 = {
  key: 1,
  class: "p-6 md:p-2"
};
const _hoisted_29 = {
  key: 7,
  class: "px-1 pt-2 sidebar-label cursor-pointer"
};
const _hoisted_30 = { class: "flex items-center gap-2" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = { class: "action flex flex-grow items-stretch justify-between ml-3" };
const _hoisted_33 = { class: "px-1 pt-2 sidebar-label cursor-pointer" };
const _hoisted_34 = { class: "flex items-center gap-2" };
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3 flex-grow" }, "Tags", -1);
const _hoisted_36 = { key: 8 };
const _hoisted_37 = { class: "px-1 pt-2 sidebar-label cursor-pointer" };
const _hoisted_38 = { class: "flex items-center gap-2" };
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-stretch justify-between ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Privacy Policy")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("span", { class: "action flex flex-grow items-stretch justify-between ml-3" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "Terms & Conditions")
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchIcon = resolveComponent("SearchIcon");
  const _component_CoreLink = __unplugin_components_0$1;
  const _component_InboxIcon = resolveComponent("InboxIcon");
  const _component_ModKKey = __unplugin_components_1;
  const _component_WorkspacesIcon = resolveComponent("WorkspacesIcon");
  const _component_AccountIcon = resolveComponent("AccountIcon");
  const _component_SettingsIcon = resolveComponent("SettingsIcon");
  const _component_DocumentIcon = resolveComponent("DocumentIcon");
  const _component_BeakerIcon = resolveComponent("BeakerIcon");
  const _component_SaveIcon = resolveComponent("SaveIcon");
  const _component_CoreDivider = __unplugin_components_0;
  const _component_ChevronUpDownIcon = resolveComponent("ChevronUpDownIcon");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  const _component_TagLink = _sfc_main$4;
  const _component_WorkspaceIcon = resolveComponent("WorkspaceIcon");
  const _component_TagIcon = resolveComponent("TagIcon");
  const _component_DocumentTextIcon = resolveComponent("DocumentTextIcon");
  const _component_CoreScrollable = __unplugin_components_2;
  return openBlock(), createBlock(_component_CoreScrollable, { class: "p-4 md:p-2" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("div", null, [
          !$options.mediumPlus ? (openBlock(), createBlock(_component_CoreLink, {
            key: 0,
            to: { path: "/docs" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_SearchIcon, { class: "w-5" }),
                _hoisted_3
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_CoreLink, {
            to: { path: "/docs/f/untagged" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createVNode(_component_InboxIcon, { class: "w-5" }),
              createBaseVNode("span", _hoisted_4, [
                _hoisted_5,
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
          createVNode(_component_CoreLink, {
            to: { path: "/contexts" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createVNode(_component_WorkspacesIcon, { class: "w-5" }),
              createBaseVNode("span", _hoisted_6, [
                _hoisted_7,
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
          !$options.mediumPlus ? (openBlock(), createBlock(_component_CoreLink, {
            key: 1,
            to: { path: "/account" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_8, [
                createVNode(_component_AccountIcon, { class: "w-5" }),
                _hoisted_9
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          !$options.mediumPlus ? (openBlock(), createBlock(_component_CoreLink, {
            key: 2,
            to: { path: "/settings" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_10, [
                createVNode(_component_SettingsIcon, { class: "w-5" }),
                _hoisted_11
              ])
            ]),
            _: 1
          })) : createCommentVNode("", true),
          $options.experimentalFeaturesEnabled ? (openBlock(), createElementBlock("div", _hoisted_12, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = (...args) => $options.openFile && $options.openFile(...args)),
              class: "sidebar-link w-full",
              title: "Experimental"
            }, [
              createVNode(_component_DocumentIcon, { class: "w-5" }),
              createBaseVNode("span", _hoisted_13, [
                _hoisted_14,
                createVNode(_component_BeakerIcon, { class: "text-gray-300 dark:text-gray-700 w-5" })
              ])
            ])
          ])) : createCommentVNode("", true),
          $data.supportsFirebase && !$setup.user.id ? (openBlock(), createBlock(_component_CoreLink, {
            key: 4,
            onClick: $options.trackCta,
            to: { path: "/account" },
            class: "sidebar-link text-theme"
          }, {
            default: withCtx(() => [
              createVNode(_component_SaveIcon, { class: "w-5" }),
              _hoisted_15
            ]),
            _: 1
          }, 8, ["onClick"])) : createCommentVNode("", true),
          createVNode(_component_CoreDivider),
          createBaseVNode("h6", _hoisted_16, [
            createBaseVNode("span", _hoisted_17, [
              createVNode(_component_ChevronUpDownIcon, { class: "h-4" }),
              createTextVNode(" Filters")
            ])
          ]),
          createVNode(_component_CoreLink, {
            to: { path: "/docs/f/tasks" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createVNode(_component_CheckIcon, { class: "w-5" }),
              createBaseVNode("span", _hoisted_18, [
                _hoisted_19,
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
          createVNode(_component_CoreLink, {
            to: { path: "/docs/f/discarded" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createVNode(_component_TrashIcon, { class: "w-5" }),
              createBaseVNode("span", _hoisted_20, [
                _hoisted_21,
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
          $options.context.active || $options.context.editing ? (openBlock(), createElementBlock("div", _hoisted_22, [
            createVNode(_component_CoreDivider),
            createBaseVNode("h6", _hoisted_23, [
              createBaseVNode("span", _hoisted_24, [
                createVNode(_component_ChevronUpDownIcon, { class: "h-4" }),
                createTextVNode(" Workspace")
              ]),
              createBaseVNode("button", {
                onClick: _cache[1] || (_cache[1] = (...args) => $options.clearContext && $options.clearContext(...args)),
                class: "button button-color-surface"
              }, _hoisted_26)
            ]),
            $options.contextTags.length ? (openBlock(), createElementBlock("div", _hoisted_27, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.contextTags, (tag) => {
                return openBlock(), createBlock(_component_TagLink, {
                  key: tag,
                  tag,
                  class: "context-tag"
                }, null, 8, ["tag"]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_28, "No Tags Selected"))
          ])) : createCommentVNode("", true),
          $options.contexts.length ? (openBlock(), createBlock(_component_CoreDivider, { key: 6 })) : createCommentVNode("", true),
          $options.contexts.length ? (openBlock(), createElementBlock("h6", _hoisted_29, [
            createBaseVNode("span", _hoisted_30, [
              createVNode(_component_ChevronUpDownIcon, { class: "h-4" }),
              createTextVNode(" Workspaces")
            ])
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.contexts, (context) => {
            return openBlock(), createElementBlock("button", {
              key: context.id,
              onClick: ($event) => $options.setContext(context),
              class: "sidebar-link w-full"
            }, [
              createVNode(_component_WorkspaceIcon, { class: "w-5" }),
              createBaseVNode("span", _hoisted_32, [
                createBaseVNode("span", null, toDisplayString(context.name), 1)
              ])
            ], 8, _hoisted_31);
          }), 128)),
          createVNode(_component_CoreDivider),
          createBaseVNode("h6", _hoisted_33, [
            createBaseVNode("span", _hoisted_34, [
              createVNode(_component_ChevronUpDownIcon, { class: "h-4" }),
              createTextVNode(" Tags")
            ])
          ]),
          createVNode(_component_CoreLink, {
            class: "sidebar-link md:hidden",
            to: { path: "/tags" }
          }, {
            default: withCtx(() => [
              createVNode(_component_TagIcon, { class: "w-5" }),
              _hoisted_35
            ]),
            _: 1
          }),
          $options.mediumPlus ? (openBlock(), createElementBlock("div", _hoisted_36, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.tags, (tag) => {
              return openBlock(), createBlock(_component_TagLink, {
                key: tag,
                tag,
                class: "sidebar-link"
              }, null, 8, ["tag"]);
            }), 128))
          ])) : createCommentVNode("", true),
          createVNode(_component_CoreDivider),
          createBaseVNode("h6", _hoisted_37, [
            createBaseVNode("span", _hoisted_38, [
              createVNode(_component_ChevronUpDownIcon, { class: "h-4" }),
              createTextVNode(" Policies")
            ])
          ]),
          createVNode(_component_CoreLink, {
            to: { path: "/privacy-policy" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createVNode(_component_DocumentTextIcon, { class: "w-5" }),
              _hoisted_39
            ]),
            _: 1
          }),
          createVNode(_component_CoreLink, {
            to: { path: "terms-and-conditions" },
            class: "sidebar-link"
          }, {
            default: withCtx(() => [
              createVNode(_component_DocumentTextIcon, { class: "w-5" }),
              _hoisted_40
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
const menu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TheLeftSidebar
}, Symbol.toStringTag, { value: "Module" }));
export {
  TheLeftSidebar as T,
  __unplugin_components_3 as _,
  menu as m
};
//# sourceMappingURL=menu-f2d5e837.js.map
