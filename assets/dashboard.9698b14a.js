import { M as useStorage, t as useStore, N as useRecentDocs, i as computed, o as openBlock, c as createElementBlock, a as createBaseVNode, C as defineComponent, _ as _export_sfc, r as resolveComponent, b as createVNode, w as withCtx, e as createTextVNode, F as toDisplayString, O as nanoid, d as createBlock, P as useMq, s as useRouter, Q as bindGlobal, R as onMounted, S as onBeforeUnmount, f as createCommentVNode, U as Fragment, V as renderList, W as withModifiers, L as normalizeClass } from "./index.fc474e50.js";
import { C as CoreButton } from "./CoreButton.ad5d413b.js";
import { C as CoreDivider } from "./CoreDivider.201e5106.js";
import { K as Key, C as CoreLink, T as TheLeftSidebar } from "./menu.35b8e3c7.js";
import { T as TheLogo } from "./Tag.vue_vue_type_script_setup_true_lang.a82a8ad2.js";
import TheRightSidebar from "./meta.08d1ea12.js";
import "./TagLink.16ccd376.js";
import "./useFiles.3674e24e.js";
import "./TrashIcon.d058248a.js";
import "./moment.9709ab41.js";
const useLayout = () => {
  const showMenu = useStorage("showMenu", true);
  const showMeta = useStorage("showMeta", true);
  const toggleMenu = () => showMenu.value = !showMenu.value;
  const toggleMeta = () => showMeta.value = !showMeta.value;
  return {
    showMenu,
    showMeta,
    toggleMenu,
    toggleMeta
  };
};
const usePinnedDocs = () => {
  const store = useStore();
  const recentDocs = useRecentDocs();
  const pinnedDocs = computed(() => {
    return recentDocs.ids.reduce((docs, id) => {
      const doc = store.getters.decrypted.find((doc2) => doc2.id === id);
      if (doc) {
        docs.push(doc);
      }
      return docs;
    }, []);
  });
  const pinDoc = (id) => {
    recentDocs.add(id);
  };
  const unpinDoc = (id) => {
    recentDocs.remove(id);
  };
  return {
    pinDoc,
    pinnedDocs,
    unpinDoc
  };
};
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z",
      "clip-rule": "evenodd"
    }),
    createBaseVNode("path", { d: "M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" })
  ]);
}
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", { d: "M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" })
  ]);
}
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
      "clip-rule": "evenodd"
    })
  ]);
}
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
      "clip-rule": "evenodd"
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
      d: "M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
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
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const _hoisted_1$3 = {
  viewBox: "0 0 71 55",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378c.372-.279.744-.569 1.1-.862a.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$3);
}
const DiscordIcon = { render: render$1 };
const _hoisted_1$2 = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9.423 4.736a2.914 2.914 0 1 0-5.81.457 2.914 2.914 0 0 0 5.81-.457ZM18.694 6.361a2.003 2.003 0 1 0-3.994.314 2.003 2.003 0 0 0 3.994-.314ZM5.88 14.006a1.604 1.604 0 1 0-3.198.251 1.604 1.604 0 0 0 3.197-.251ZM10.624 19.67a2.477 2.477 0 1 0 4.938-.388 2.477 2.477 0 0 0-4.938.388ZM19.597 12.357a1.603 1.603 0 1 0 .251 3.196 1.603 1.603 0 0 0-.251-3.196Z",
  fill: "currentColor"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M9.423 4.736a2.914 2.914 0 1 0-5.81.457 2.914 2.914 0 0 0 5.81-.457ZM18.694 6.361a2.003 2.003 0 1 0-3.994.314 2.003 2.003 0 0 0 3.994-.314ZM5.88 14.006a1.604 1.604 0 1 0-3.198.251 1.604 1.604 0 0 0 3.197-.251ZM10.624 19.67a2.477 2.477 0 1 0 4.938-.388 2.477 2.477 0 0 0-4.938.388ZM19.597 12.357a1.603 1.603 0 1 0 .251 3.196 1.603 1.603 0 0 0-.251-3.196ZM6.524 5l6.515 14.706",
  stroke: "currentColor",
  "stroke-width": "1.5"
}, null, -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "m4.244 14.214 2.233-9.261M13.064 19.57l6.617-5.581-2.979-7.429",
  stroke: "currentColor"
}, null, -1);
const _hoisted_5$2 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4$2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5$2);
}
const GraphIcon = { render };
const _sfc_main$2 = defineComponent({
  components: {
    CoreButton,
    CoreDivider,
    Key,
    TheLogo,
    XMarkIcon: render$2
  },
  setup() {
    const store = useStore();
    const modKey = computed(() => store.state.modKey);
    return {
      modKey
    };
  }
});
const _hoisted_1$1 = { class: "flex items-center max-w-[100vw] py-2 bg-gray-100 dark:bg-darkest border-b border-white dark:border-gray-900" };
const _hoisted_2$1 = { class: "flex flex-shrink-0 items-center justify-center w-14" };
const _hoisted_3$1 = { class: "flex-shrink-0 px-2 w-72" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("div", { class: "flex gap-3 items-center" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "w-5",
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
  /* @__PURE__ */ createBaseVNode("span", null, "Search")
], -1);
const _hoisted_5$1 = { class: "hidden md:flex text-gray-500" };
const _hoisted_6$1 = { class: "flex flex-grow flex-shrink gap-2 bg-gray-100 dark:bg-darkest px-2 min-w-0 overflow-hidden" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Wednesday, November 16th, 2022", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_11$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-ellipsis overflow-hidden" }, "Mermaid example diagrams", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheLogo = resolveComponent("TheLogo");
  const _component_router_link = resolveComponent("router-link");
  const _component_CoreDivider = resolveComponent("CoreDivider");
  const _component_Key = resolveComponent("Key");
  const _component_CoreButton = resolveComponent("CoreButton");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    createBaseVNode("section", _hoisted_2$1, [
      createVNode(_component_router_link, {
        class: "flex p-2",
        to: { path: "/docs/new" }
      }, {
        default: withCtx(() => [
          createVNode(_component_TheLogo, { class: "h-8 text-theme" })
        ]),
        _: 1
      })
    ]),
    createVNode(_component_CoreDivider, { vertical: true }),
    createBaseVNode("section", _hoisted_3$1, [
      createBaseVNode("div", null, [
        createVNode(_component_router_link, {
          to: { path: "/docs" },
          class: "block"
        }, {
          default: withCtx(() => [
            createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent border justify-between w-full" }, {
              default: withCtx(() => [
                _hoisted_4$1,
                createBaseVNode("span", _hoisted_5$1, [
                  createVNode(_component_Key, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.modKey), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Key, null, {
                    default: withCtx(() => [
                      createTextVNode("\u21E7")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_Key, null, {
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
          _: 1
        })
      ])
    ]),
    createVNode(_component_CoreDivider, { vertical: true }),
    createBaseVNode("section", _hoisted_6$1, [
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_7$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_8$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_9$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_10$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_11$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      }),
      createVNode(_component_CoreButton, { class: "bg-transparent dark:bg-transparent flex-shrink overflow-hidden" }, {
        default: withCtx(() => [
          _hoisted_12$1,
          createVNode(_component_XMarkIcon, { class: "w-4" })
        ]),
        _: 1
      })
    ])
  ]);
}
const LayoutNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const TheContent_vue_vue_type_style_index_0_scoped_35722e9d_lang = "";
const _sfc_main$1 = defineComponent({
  data() {
    return {
      routeKey: null
    };
  },
  watch: {
    $route: {
      deep: true,
      handler(route) {
        if (route.query.p) {
          return;
        }
        this.routeKey = nanoid();
      }
    }
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_CoreScrollable = resolveComponent("CoreScrollable");
  return openBlock(), createBlock(_component_CoreScrollable, { class: "the-content" }, {
    default: withCtx(() => [
      (openBlock(), createBlock(_component_router_view, {
        inheritAttrs: true,
        key: _ctx.routeKey,
        class: "flex"
      }))
    ]),
    _: 1
  });
}
const TheContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-35722e9d"]]);
const _sfc_main = defineComponent({
  components: {
    CalendarIcon: render$a,
    Cog8ToothIcon: render$9,
    CoreButton,
    CoreDivider,
    CoreLink,
    DiscordIcon,
    DocumentPlusIcon: render$8,
    GraphIcon,
    HeartIcon: render$7,
    InboxIcon: render$6,
    Key,
    LayoutNavbar,
    TheContent,
    TheLeftSidebar,
    TheLogo,
    TheRightSidebar,
    UserCircleIcon: render$5,
    ViewColumnsIcon: render$3,
    XMarkIcon: render$4
  },
  inject: ["mq"],
  data() {
    return {
      routeKey: ""
    };
  },
  watch: {
    $route: {
      deep: true,
      handler(route) {
        if (route.query.p) {
          return;
        }
        this.routeKey = nanoid();
      }
    }
  },
  setup() {
    const mq = useMq();
    const store = useStore();
    const router = useRouter();
    const currentDoc = computed(() => store.getters.currentDoc);
    const { showMenu, showMeta, toggleMenu, toggleMeta } = useLayout();
    const { pinnedDocs, unpinDoc } = usePinnedDocs();
    const linkToDiscord = "https://link.octo.app/discord";
    const modKey = computed(() => store.state.modKey);
    const mobile = computed(() => ["xs", "sm"].includes(mq.current));
    const isDoc = computed(() => router.currentRoute.value.name === "docs-doc");
    const isNew = computed(() => router.currentRoute.value.path === "/docs/new");
    const handleQuickActionClose = () => {
      if (currentDoc.value) {
        return router.push({ path: `/docs/${currentDoc.value.id}` });
      }
      router.push({ path: "/docs/new" });
    };
    const handleLayoutChange = () => {
      toggleMenu();
      toggleMeta();
    };
    bindGlobal("mod+\\", () => {
      toggleMenu();
      toggleMeta();
    });
    const handleTabClose = (id) => {
      var _a;
      if (((_a = currentDoc.value) == null ? void 0 : _a.id) === id) {
        router.push({ path: "/docs/new" });
      }
      unpinDoc(id);
    };
    const scrollListener = (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      window.scrollTo(0, 0);
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollListener);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", scrollListener);
    });
    return {
      currentDoc,
      handleLayoutChange,
      handleQuickActionClose,
      handleTabClose,
      isDoc,
      isNew,
      linkToDiscord,
      mobile,
      modKey,
      pinnedDocs,
      showMenu,
      showMeta
    };
  }
});
const dashboard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "flex h-full w-screen min-h-0 min-w-0 overflow-hidden border-t-2 border-white dark:border-gray-900" };
const _hoisted_2 = {
  key: 0,
  class: "flex flex-col items-center justify-between gap-4 h-full w-14 bg-gray-100 dark:bg-darkest md:flex"
};
const _hoisted_3 = { class: "flex flex-col" };
const _hoisted_4 = { class: "flex flex-col flex-shrink-0 items-center justify-center w-14" };
const _hoisted_5 = { class: "flex flex-col gap-4 pt-4 items-center" };
const _hoisted_6 = { class: "flex flex-col gap-4 pb-4 items-center" };
const _hoisted_7 = { class: "flex flex-col gap-4 pb-4 items-center opacity-25" };
const _hoisted_8 = { class: "flex flex-col flex-grow flex-shrink min-h-0 min-w-0" };
const _hoisted_9 = { class: "flex items-center justify-between py-2 bg-gray-100 dark:bg-darkest h-14" };
const _hoisted_10 = {
  key: 1,
  class: "flex items-center"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M4 6h16M4 12h16M4 18h16"
  })
], -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Menu", -1);
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
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M6 18L18 6M6 6l12 12"
  })
], -1);
const _hoisted_16 = [
  _hoisted_15
];
const _hoisted_17 = {
  key: 2,
  class: "flex-shrink-0 px-2 w-64"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "flex gap-3 items-center" }, [
  /* @__PURE__ */ createBaseVNode("svg", {
    class: "w-5",
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
  /* @__PURE__ */ createBaseVNode("span", null, "Search")
], -1);
const _hoisted_19 = { class: "hidden md:flex text-gray-500" };
const _hoisted_20 = {
  key: 4,
  class: "flex flex-grow flex-shrink gap-2 bg-gray-100 dark:bg-darkest px-2 min-w-0"
};
const _hoisted_21 = { class: "text-ellipsis overflow-hidden" };
const _hoisted_22 = {
  key: 6,
  class: "flex-shrink-0 px-2 w-64"
};
const _hoisted_23 = { class: "flex gap-3 items-center" };
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", null, "Toggle Sidebars", -1);
const _hoisted_25 = { class: "hidden md:flex text-gray-500" };
const _hoisted_26 = { class: "flex flex-grow flex-shrink overflow-hidden min-w-0" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_TheLogo = resolveComponent("TheLogo");
  const _component_CoreDivider = resolveComponent("CoreDivider");
  const _component_DocumentPlusIcon = resolveComponent("DocumentPlusIcon");
  const _component_CoreLink = resolveComponent("CoreLink");
  const _component_CalendarIcon = resolveComponent("CalendarIcon");
  const _component_GraphIcon = resolveComponent("GraphIcon");
  const _component_DiscordIcon = resolveComponent("DiscordIcon");
  resolveComponent("HeartIcon");
  const _component_Cog8ToothIcon = resolveComponent("Cog8ToothIcon");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_router_link = resolveComponent("router-link");
  const _component_Key = resolveComponent("Key");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_ViewColumnsIcon = resolveComponent("ViewColumnsIcon");
  const _component_CoreButton = resolveComponent("CoreButton");
  const _component_TheLeftSidebar = resolveComponent("TheLeftSidebar");
  const _component_RouterView = resolveComponent("RouterView");
  const _component_TheRightSidebar = resolveComponent("TheRightSidebar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleLayoutChange && _ctx.handleLayoutChange(...args)),
            class: "flex items-center justify-center p-2 h-14"
          }, [
            createVNode(_component_TheLogo, { class: "h-8 text-theme" })
          ])
        ]),
        createVNode(_component_CoreDivider, { class: "mx-2" }),
        createBaseVNode("div", _hoisted_5, [
          createVNode(_component_CoreLink, { to: { path: "/docs/new" } }, {
            default: withCtx(() => [
              createVNode(_component_DocumentPlusIcon, { class: "w-6" })
            ]),
            _: 1
          }),
          createVNode(_component_CoreLink, { to: { path: "/notepad" } }, {
            default: withCtx(() => [
              createVNode(_component_CalendarIcon, { class: "w-6" })
            ]),
            _: 1
          }),
          createVNode(_component_CoreLink, { to: { path: "/force-graph" } }, {
            default: withCtx(() => [
              createVNode(_component_GraphIcon, { class: "w-6" })
            ]),
            _: 1
          })
        ])
      ]),
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("div", _hoisted_7, [
          createVNode(_component_CoreLink, { to: _ctx.linkToDiscord }, {
            default: withCtx(() => [
              createVNode(_component_DiscordIcon, { class: "w-6 px-px" })
            ]),
            _: 1
          }, 8, ["to"]),
          createCommentVNode("", true)
        ]),
        createVNode(_component_CoreLink, { to: { path: "/settings" } }, {
          default: withCtx(() => [
            createVNode(_component_Cog8ToothIcon, { class: "w-6" })
          ]),
          _: 1
        }),
        createVNode(_component_CoreLink, { to: { path: "/account" } }, {
          default: withCtx(() => [
            createVNode(_component_UserCircleIcon, { class: "w-6" })
          ]),
          _: 1
        })
      ])
    ])) : createCommentVNode("", true),
    createVNode(_component_CoreDivider, { vertical: true }),
    createBaseVNode("section", _hoisted_8, [
      createBaseVNode("nav", _hoisted_9, [
        _ctx.mobile ? (openBlock(), createBlock(_component_CoreLink, {
          key: 0,
          to: { path: "/docs/new" },
          class: "flex items-center justify-center p-2 h-14"
        }, {
          default: withCtx(() => [
            createVNode(_component_TheLogo, { class: "h-8 text-theme" })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        _ctx.mobile ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createVNode(_component_router_link, {
            class: "button-flat button-size-medium",
            to: { path: "/menu" },
            role: "button",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }, {
            default: withCtx(() => [
              _hoisted_11,
              _hoisted_12
            ]),
            _: 1
          }),
          _ctx.isNew ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { path: "/quick-action" },
            class: "button-flat button-size-medium"
          }, {
            default: withCtx(() => [
              _hoisted_13
            ]),
            _: 1
          })) : _ctx.isDoc ? (openBlock(), createBlock(_component_router_link, {
            key: 1,
            to: { path: `/docs/${(_a = _ctx.currentDoc) == null ? void 0 : _a.id}/meta` },
            class: "button-flat button-size-medium"
          }, {
            default: withCtx(() => [
              _hoisted_14
            ]),
            _: 1
          }, 8, ["to"])) : (openBlock(), createElementBlock("button", {
            key: 2,
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleQuickActionClose && _ctx.handleQuickActionClose(...args)),
            class: "button-flat button-size-medium"
          }, _hoisted_16))
        ])) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_17, [
          createVNode(_component_CoreLink, {
            to: { path: "/docs" },
            class: "core-button core-button-layer-1 border border-white dark:border-gray-900 justify-between w-full"
          }, {
            default: withCtx(() => [
              _hoisted_18,
              createBaseVNode("span", _hoisted_19, [
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.modKey), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode("\u21E7")
                  ]),
                  _: 1
                }),
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode("f")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 3,
          vertical: true
        })) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_20, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.pinnedDocs, (doc) => {
            var _a2;
            return openBlock(), createBlock(_component_CoreLink, {
              key: doc.id,
              to: { path: `/docs/${doc.id}` },
              class: normalizeClass(["core-button core-button-layer-1 flex flex-shrink justify-between min-w-[4rem] max-w-[20rem]", { "bg-layer-2": _ctx.isDoc && doc.id === ((_a2 = _ctx.currentDoc) == null ? void 0 : _a2.id) }])
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_21, toDisplayString(doc.headers[0] || doc.text.substring(0, 25)), 1),
                createVNode(_component_XMarkIcon, {
                  onClick: withModifiers(() => _ctx.handleTabClose(doc.id), ["prevent", "stop"]),
                  class: "w-4 transition hover:scale-125"
                }, null, 8, ["onClick"])
              ]),
              _: 2
            }, 1032, ["to", "class"]);
          }), 128))
        ])) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 5,
          vertical: true
        })) : createCommentVNode("", true),
        !_ctx.mobile ? (openBlock(), createElementBlock("section", _hoisted_22, [
          createVNode(_component_CoreButton, {
            layer: 1,
            onClick: _ctx.handleLayoutChange,
            class: "border border-white dark:border-gray-900 justify-between w-full"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_23, [
                createVNode(_component_ViewColumnsIcon, { class: "w-5" }),
                _hoisted_24
              ]),
              createBaseVNode("span", _hoisted_25, [
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.modKey), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_Key, null, {
                  default: withCtx(() => [
                    createTextVNode("\\")
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }, 8, ["onClick"])
        ])) : createCommentVNode("", true)
      ]),
      createVNode(_component_CoreDivider),
      createBaseVNode("section", _hoisted_26, [
        !_ctx.mobile && _ctx.showMenu ? (openBlock(), createBlock(_component_TheLeftSidebar, {
          key: 0,
          class: "hidden w-64 bg-gray-100 dark:bg-darkest md:flex flex-shrink-0"
        })) : createCommentVNode("", true),
        !_ctx.mobile && _ctx.showMenu ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 1,
          vertical: true
        })) : createCommentVNode("", true),
        (openBlock(), createBlock(_component_RouterView, {
          inheritAttrs: true,
          key: _ctx.routeKey,
          class: "dashboard-content flex-grow flex-shrink h-full overflow-x-hidden relative"
        })),
        !_ctx.mobile && _ctx.showMeta && _ctx.currentDoc ? (openBlock(), createBlock(_component_CoreDivider, {
          key: 2,
          vertical: true
        })) : createCommentVNode("", true),
        !_ctx.mobile && _ctx.showMeta && _ctx.currentDoc && _ctx.isDoc ? (openBlock(), createBlock(_component_TheRightSidebar, {
          key: 3,
          class: "hidden w-64 bg-gray-100 dark:bg-darkest md:flex flex-shrink-0"
        })) : createCommentVNode("", true)
      ])
    ])
  ]);
}
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard.9698b14a.js.map
