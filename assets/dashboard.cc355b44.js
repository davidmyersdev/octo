import { i as defineComponent, M as nanoid, _ as _export_sfc, r as resolveComponent, o as openBlock, d as createBlock, w as withCtx, N as open, c as createElementBlock, b as createVNode, a as createBaseVNode, f as createCommentVNode } from "./index.65602d5f.js";
import TheLeftSidebar from "./menu.1d037b82.js";
import { T as TheLogo } from "./TheLogo.24850c76.js";
import TheRightSidebar from "./meta.54a616c4.js";
import "./TagLink.1b00b466.js";
import "./Tag.vue_vue_type_script_setup_true_lang.40a858bc.js";
import "./files.ccfb2005.js";
import "./moment.9709ab41.js";
const TheContent_vue_vue_type_style_index_0_scoped_35722e9d_lang = "";
const _sfc_main$2 = defineComponent({
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
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
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
const TheContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-35722e9d"]]);
const _sfc_main$1 = {
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
      return this.$route.path === "/docs/new";
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
const _hoisted_1$1 = { class: "relative flex gap-2 justify-between items-center content-between p-1 z-index-10 md:hidden w-full bg-gray-100 dark:bg-darkest" };
const _hoisted_2$1 = { class: "flex gap-1 items-stretch" };
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
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheLogo = resolveComponent("TheLogo");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("nav", _hoisted_1$1, [
    createVNode(_component_router_link, {
      class: "p-1.5 text-lg whitespace-no-wrap flex justify-between items-center",
      to: { path: "/docs/new" }
    }, {
      default: withCtx(() => [
        createVNode(_component_TheLogo, { class: "h-8 text-theme" })
      ]),
      _: 1
    }),
    createBaseVNode("div", _hoisted_2$1, [
      createVNode(_component_router_link, {
        class: "button-flat button-size-medium",
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
        class: "button-flat button-size-medium"
      }, {
        default: withCtx(() => [
          _hoisted_5
        ]),
        _: 1
      })) : $options.isDoc ? (openBlock(), createBlock(_component_router_link, {
        key: 1,
        to: { path: `/docs/${$options.doc.id}/meta` },
        class: "button-flat button-size-medium"
      }, {
        default: withCtx(() => [
          _hoisted_6
        ]),
        _: 1
      }, 8, ["to"])) : (openBlock(), createElementBlock("button", {
        key: 2,
        onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args)),
        class: "button-flat button-size-medium"
      }, _hoisted_8))
    ])
  ]);
}
const TheNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const dashboard_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  components: {
    TheContent,
    TheLeftSidebar,
    TheNavbar,
    TheRightSidebar
  },
  inject: ["mq"],
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
  },
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
  },
  methods: {
    scrollListener(event) {
      event.preventDefault();
      event.stopImmediatePropagation();
      event.stopPropagation();
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  }
});
const _hoisted_1 = { class: "flex flex-col h-full min-h-0" };
const _hoisted_2 = { class: "flex flex-grow flex-shrink overflow-hidden w-screen min-w-0" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_TheNavbar = resolveComponent("TheNavbar");
  const _component_TheLeftSidebar = resolveComponent("TheLeftSidebar");
  const _component_RouterView = resolveComponent("RouterView");
  const _component_TheRightSidebar = resolveComponent("TheRightSidebar");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_TheNavbar, { ref: "navbar" }, null, 512),
    createBaseVNode("div", _hoisted_2, [
      !_ctx.mobile && _ctx.showLeftSidebar ? (openBlock(), createBlock(_component_TheLeftSidebar, {
        key: 0,
        class: "hidden w-72 bg-gray-100 dark:bg-darkest md:flex border-r-2 border-white dark:border-gray-900 flex-shrink-0"
      })) : createCommentVNode("", true),
      (openBlock(), createBlock(_component_RouterView, {
        ref: "content",
        inheritAttrs: true,
        key: _ctx.routeKey,
        class: "dashboard-content flex-grow flex-shrink h-full overflow-x-hidden relative"
      })),
      !_ctx.mobile && _ctx.showRightSidebar && _ctx.currentDoc ? (openBlock(), createBlock(_component_TheRightSidebar, {
        key: 1,
        class: "hidden w-72 bg-gray-100 dark:bg-darkest md:flex border-l-2 border-white dark:border-gray-900 flex-shrink-0"
      })) : createCommentVNode("", true)
    ])
  ]);
}
const dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  dashboard as default
};
//# sourceMappingURL=dashboard.cc355b44.js.map
