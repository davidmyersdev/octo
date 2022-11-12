import { _ as _export_sfc, M as open, r as resolveComponent, o as openBlock, c as createElementBlock, b as createVNode, w as withCtx, a as createBaseVNode, d as createBlock, N as nanoid, f as createCommentVNode } from "./index.99a5f7ec.js";
import { T as TheLogo } from "./TheLogo.8359f3ab.js";
import TheLeftSidebar from "./menu.b5ceb303.js";
import TheRightSidebar from "./meta.2a5d9e5a.js";
import "./TagLink.06eadd2f.js";
import "./Tag.vue_vue_type_script_setup_true_lang.9f003ce1.js";
import "./files.bd1a5d97.js";
import "./moment.9709ab41.js";
const _sfc_main$2 = {
  components: {
    TheLogo
  },
  computed: {
    doc() {
      return this.$store.getters.currentDoc;
    },
    isDoc() {
      return this.doc && this.$route.name === "docs-doc";
    },
    isDashboard() {
      return this.$route.name === "docs-new";
    },
    october() {
      return this.$store.state.settings.theme === "october";
    }
  },
  methods: {
    close() {
      if (this.doc) {
        return open({ path: `/docs/${this.doc.id}` });
      }
      open({ path: "/docs/new" });
    }
  }
};
const _hoisted_1$1 = { class: "relative flex flex-wrap items-center content-between p-4 z-index-10 md:hidden w-full" };
const _hoisted_2 = { class: "flex items-stretch fixed top-3 right-3" };
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
    d: "M4 6h16M4 12h16M4 18h16"
  })
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Menu", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("svg", {
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
const _hoisted_8 = [
  _hoisted_7
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheLogo = resolveComponent("TheLogo");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    createVNode(_component_router_link, {
      class: "pt-1 pb-1 mr-4 text-lg whitespace-no-wrap flex justify-between items-center",
      to: { path: "/docs/new" }
    }, {
      default: withCtx(() => [
        createVNode(_component_TheLogo, { class: "h-9 text-theme" })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_router_link, {
        class: "button button-size-medium button-color-gray ml-2",
        to: { path: "/menu" },
        role: "button",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, {
        default: withCtx(() => [
          _hoisted_3,
          _hoisted_4
        ]),
        _: 1
      }),
      $options.isDashboard ? (openBlock(), createBlock(_component_router_link, {
        key: 0,
        to: { path: "/quick-action" },
        class: "button button-size-medium button-color-gray ml-2"
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })) : $options.isDoc ? (openBlock(), createBlock(_component_router_link, {
        key: 1,
        to: { path: `/docs/${$options.doc.id}/meta` },
        class: "button button-size-medium button-color-gray ml-2"
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }, 8, ["to"])) : (openBlock(), createElementBlock("button", {
        key: 2,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args)),
        class: "button button-size-medium button-color-gray ml-2"
      }, _hoisted_8))
    ])
  ]);
}
const TheNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const TheContent_vue_vue_type_style_index_0_scoped_307b3bdb_lang = "";
const _sfc_main$1 = {
  components: {
    TheNavbar
  },
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
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheNavbar = resolveComponent("TheNavbar");
  const _component_router_view = resolveComponent("router-view");
  const _component_SimpleBar = resolveComponent("SimpleBar");
  return openBlock(), createBlock(_component_SimpleBar, { class: "the-content" }, {
    default: withCtx(() => [
      createVNode(_component_TheNavbar),
      (openBlock(), createBlock(_component_router_view, {
        inheritAttrs: true,
        key: $data.routeKey,
        class: "flex"
      }))
    ]),
    _: 1
  });
}
const TheContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-307b3bdb"]]);
const _sfc_main = {
  components: {
    TheContent,
    TheLeftSidebar,
    TheRightSidebar
  },
  inject: ["mq"],
  computed: {
    currentDoc() {
      return this.$store.getters.currentDoc;
    },
    mobile() {
      return ["xs", "sm"].includes(this.mq.current);
    },
    showLeftSidebar() {
      return this.$store.state.showLeftSidebar;
    },
    showRightSidebar() {
      return this.$route.name === "docs-doc" && this.$store.state.showRightSidebar;
    }
  }
};
const _hoisted_1 = { class: "flex h-screen" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheLeftSidebar = resolveComponent("TheLeftSidebar");
  const _component_TheContent = resolveComponent("TheContent");
  const _component_TheRightSidebar = resolveComponent("TheRightSidebar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    !$options.mobile && $options.showLeftSidebar ? (openBlock(), createBlock(_component_TheLeftSidebar, {
      key: 0,
      class: "hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded shadow"
    })) : createCommentVNode("", true),
    createVNode(_component_TheContent, { class: "flex-grow flex-shrink relative h-screen" }),
    !$options.mobile && $options.showRightSidebar && $options.currentDoc ? (openBlock(), createBlock(_component_TheRightSidebar, {
      key: 1,
      class: "hidden w-72 bg-gray-100 dark:bg-darkest md:flex m-2 rounded"
    })) : createCommentVNode("", true)
  ]);
}
const editor = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  editor as default
};
//# sourceMappingURL=editor.5bc14790.js.map
