import { _ as __unplugin_components_2 } from "./CoreScrollable-4b186a41.js";
import { e as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, d as createBaseVNode, s as renderSlot, h as createVNode, w as withCtx, n as createCommentVNode } from "./_plugin-vue_export-helper-ea9be126.js";
const _sfc_main = defineComponent({
  emits: ["close"],
  computed: {
    hasFooter() {
      return !!this.$slots.footer;
    }
  },
  methods: {
    onClose() {
      this.$emit("close");
    }
  }
});
const _hoisted_1 = { class: "flex items-center justify-center fixed inset-0 z-50 bg-gray-100 dark:bg-darkest bg-opacity-50 dark:bg-opacity-50" };
const _hoisted_2 = { class: "w-full max-w-2xl p-4" };
const _hoisted_3 = { class: "bg-gray-100 dark:bg-gray-800 rounded shadow overflow-hidden" };
const _hoisted_4 = { class: "flex items-center justify-between p-4" };
const _hoisted_5 = { class: "text-2xl flex items-center justify-between" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("svg", {
  class: "h-6 w-6",
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
const _hoisted_7 = [
  _hoisted_6
];
const _hoisted_8 = {
  key: 0,
  class: "px-4 py-2"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CoreScrollable = __unplugin_components_2;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("article", _hoisted_3, [
        createBaseVNode("header", _hoisted_4, [
          createBaseVNode("h1", _hoisted_5, [
            renderSlot(_ctx.$slots, "header")
          ]),
          createBaseVNode("button", {
            class: "p-2 -mr-2",
            onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClose && _ctx.onClose(...args))
          }, _hoisted_7)
        ]),
        createVNode(_component_CoreScrollable, { class: "max-h-96 p-4" }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }),
        _ctx.hasFooter ? (openBlock(), createElementBlock("footer", _hoisted_8, [
          renderSlot(_ctx.$slots, "footer")
        ])) : createCommentVNode("", true)
      ])
    ])
  ]);
}
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Modal as M
};
//# sourceMappingURL=Modal-7704844a.js.map
