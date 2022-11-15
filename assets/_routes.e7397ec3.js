import { i as defineComponent, C as useRouter, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, P as Fragment, Q as renderList, b as createVNode, w as withCtx, e as createTextVNode } from "./index.36c6bdda.js";
const _hoisted_1 = { class: "flex flex-col" };
const _hoisted_2 = { class: "text-lg" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", { class: "font-bold py-1 px-2" }, "Route Path"),
  /* @__PURE__ */ createBaseVNode("td", { class: "font-bold py-1 px-2" }, "Route Name")
], -1);
const _hoisted_4 = { class: "py-1 px-2" };
const _hoisted_5 = { class: "py-1 px-2" };
const _hoisted_6 = { class: "py-1 px-2" };
const _hoisted_7 = { class: "py-1 px-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "_routes",
  setup(__props) {
    const routes = [...useRouter().options.routes].flatMap((parentRoute) => {
      const childRoutes = parentRoute.children || [];
      return [parentRoute, ...childRoutes];
    });
    const sortedRoutes = routes.sort((a, b) => a.path < b.path ? -1 : 1);
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h1", _hoisted_2, "There are " + toDisplayString(unref(sortedRoutes).length) + " routes.", 1),
        createBaseVNode("table", null, [
          _hoisted_3,
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sortedRoutes), (route) => {
            return openBlock(), createElementBlock("tr", null, [
              createBaseVNode("td", _hoisted_4, [
                createVNode(_component_RouterLink, {
                  to: route.path
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(route.path), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              createBaseVNode("td", _hoisted_5, [
                createVNode(_component_RouterLink, {
                  to: route.path
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(route.name), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              createBaseVNode("td", _hoisted_6, [
                createVNode(_component_RouterLink, {
                  to: route.path
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(route.redirect), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ]),
              createBaseVNode("td", _hoisted_7, [
                createVNode(_component_RouterLink, {
                  to: route.path
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(route.component), 1)
                  ]),
                  _: 2
                }, 1032, ["to"])
              ])
            ]);
          }), 256))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=_routes.e7397ec3.js.map
