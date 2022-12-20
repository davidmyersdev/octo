import { u as useRouter } from "./vue-router-bb5abae0.js";
import { _ as __unplugin_components_0 } from "./CoreLink-6737d303.js";
import { e as defineComponent, f as computed, o as openBlock, c as createElementBlock, d as createBaseVNode, h as createVNode, w as withCtx, j as createTextVNode, t as toDisplayString, v as unref, F as Fragment, p as renderList, k as createBlock, n as createCommentVNode } from "./_plugin-vue_export-helper-ea9be126.js";
import "./useIsNuxt-03feeb69.js";
const _hoisted_1$2 = { class: "py-1 px-2" };
const _hoisted_2$1 = { class: "py-1 px-2" };
const _hoisted_3 = { class: "py-1 px-2" };
const _hoisted_4 = { class: "py-1 px-2" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DevRoute",
  props: {
    parent: null,
    route: null
  },
  setup(__props) {
    const props = __props;
    const path = computed(() => `${props.parent} -> ${props.route.path}`);
    const children = computed(() => {
      var _a;
      return (_a = props.route.children) == null ? void 0 : _a.sort((a, b) => a.path < b.path ? -1 : 1);
    });
    return (_ctx, _cache) => {
      const _component_CoreLink = __unplugin_components_0;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("tr", null, [
          createBaseVNode("td", _hoisted_1$2, [
            createVNode(_component_CoreLink, {
              to: __props.route.path
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(path)), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createBaseVNode("td", _hoisted_2$1, [
            createVNode(_component_CoreLink, {
              to: __props.route.path
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.route.name), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createBaseVNode("td", _hoisted_3, [
            createVNode(_component_CoreLink, {
              to: __props.route.path
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.route.redirect), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ]),
          createBaseVNode("td", _hoisted_4, [
            createVNode(_component_CoreLink, {
              to: __props.route.path
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.route.component), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ]),
        unref(children) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(children), (child) => {
          return openBlock(), createBlock(_sfc_main$2, {
            parent: unref(path),
            route: child
          }, null, 8, ["parent", "route"]);
        }), 256)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", { class: "font-bold py-1 px-2" }, "Path"),
  /* @__PURE__ */ createBaseVNode("td", { class: "font-bold py-1 px-2" }, "Name"),
  /* @__PURE__ */ createBaseVNode("td", { class: "font-bold py-1 px-2" }, "Redirect"),
  /* @__PURE__ */ createBaseVNode("td", { class: "font-bold py-1 px-2" }, "Component")
], -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DevRoutes",
  props: {
    routes: null
  },
  setup(__props) {
    const props = __props;
    const routes = computed(() => props.routes.sort((a, b) => a.path < b.path ? -1 : 1));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("table", null, [
        _hoisted_1$1,
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(routes), (route) => {
          return openBlock(), createBlock(_sfc_main$2, {
            parent: "/",
            route
          }, null, 8, ["route"]);
        }), 256))
      ]);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = { class: "text-lg" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_routes",
  setup(__props) {
    const routes = computed(() => [...useRouter().options.routes]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h1", _hoisted_2, "There are " + toDisplayString(unref(routes).length) + " top-level routes.", 1),
        createVNode(_sfc_main$1, {
          routes: unref(routes),
          class: "whitespace-nowrap"
        }, null, 8, ["routes"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=_routes-1af8cb66.js.map
