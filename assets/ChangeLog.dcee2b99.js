import { s as subscription, u as user } from "./account.8a10d9d6.js";
import { C as defineComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, F as toDisplayString, H as renderSlot, f as createCommentVNode, _ as _export_sfc, K as ref, R as onMounted, r as resolveComponent, d as createBlock, w as withCtx, e as createTextVNode, J as unref, b as createVNode } from "./index.fc474e50.js";
import { M as Modal } from "./Modal.1c333d29.js";
const _hoisted_1$2 = { class: "flex flex-col gap-4" };
const _hoisted_2$1 = { class: "text-xl" };
const _hoisted_3$1 = {
  key: 0,
  class: "flex flex-col gap-1 list-disc pl-4"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChangeLogEntry",
  props: {
    header: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("h2", _hoisted_2$1, toDisplayString(props.header), 1),
        renderSlot(_ctx.$slots, "default"),
        _ctx.$slots.items ? (openBlock(), createElementBlock("ul", _hoisted_3$1, [
          renderSlot(_ctx.$slots, "items")
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "bg-gray-100 dark:bg-darkest p-0.5 rounded" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("code", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const Code = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "flex flex-col gap-12" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Introducing a new way to sign in.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createTextVNode("Send yourself a "),
  /* @__PURE__ */ createBaseVNode("strong", null, "magic link"),
  /* @__PURE__ */ createTextVNode(" to sign in with your email address.")
], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("li", null, "If you already have an account with a social provider, your email address will be linked to that account.", -1);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Today's updates focus on "),
  /* @__PURE__ */ createBaseVNode("strong", null, "portability"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Vendor lock-in has become commonplace, but you deserve the right to take your data with you "),
  /* @__PURE__ */ createBaseVNode("strong", null, "anywhere"),
  /* @__PURE__ */ createTextVNode(" you choose. Thanks to recent community contributions, transferring your data into or out of Octo has become much simpler.")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("li", null, "Import plain-text Markdown files into your knowledge base, directly from App Settings.", -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("li", null, "Export your entire knowledge base as a zipped folder of plain-text Markdown files, directly from App Settings.", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("li", null, "Tags are now properly highlighted and support a wide array of unicode letters and marks. Additionally, when typing a new tag, suggestions will appear based on your existing tags. Press enter to use the active tag suggestion.", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("li", null, "The Formatting Toolbar is here! You can toggle it per-device in App Settings.", -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("li", null, "You can now improve the readability of active docs by customizing the max-width to better fit your needs (defaults to 100 characters).", -1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("li", null, "There is a new 'Auto' appearance option that will match your system theme. It is the default for new users, and you can update it for yourself in App Settings.", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("li", null, "Additionally, this release includes dependency updates, performance improvements, and small bugfixes.", -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("li", null, "Drag-and-drop or paste files to upload and attach to the current doc (Octo Pro).", -1);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("li", null, "Changelog notifications are displayed when Octo updates.", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("li", null, "Improvements have been made to IME language support.", -1);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("li", null, "The Active Context bar has been merged into the navigation menu.", -1);
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("li", null, "The legacy Markdown editor has been removed in favor of Ink.", -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("li", null, "The Daily Notepad page now works offline.", -1);
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("li", null, "Vim Mode can be enabled on the Settings page.", -1);
const _hoisted_21 = { class: "flex items-center justify-end gap-2" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("span", null, "Upgrade", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("span", null, "Sign Up", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ChangeLog",
  setup(__props) {
    const showChangeLog = ref(false);
    const closeChangeLog = () => {
      showChangeLog.value = false;
    };
    const trackCta = () => {
      var _a;
      closeChangeLog();
      (_a = window.fathom) == null ? void 0 : _a.trackGoal("I4IWFGNK", 0);
    };
    onMounted(async () => {
      try {
        const lastEntryTimestamp = "2022-11-14T04:15:07.232Z";
        const lastClientTimestamp = localStorage.getItem("changelog:v1");
        if (!lastClientTimestamp || new Date(lastEntryTimestamp) > new Date(lastClientTimestamp)) {
          showChangeLog.value = true;
          localStorage.setItem("changelog:v1", lastEntryTimestamp);
        }
      } catch (error) {
        console.warn({ error });
      }
    });
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return showChangeLog.value ? (openBlock(), createBlock(Modal, {
        key: 0,
        onClose: closeChangeLog
      }, {
        header: withCtx(() => [
          createTextVNode(" What's New ")
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_21, [
            createBaseVNode("button", {
              class: "button-flat button-size-medium",
              onClick: closeChangeLog
            }, "Dismiss"),
            !unref(subscription).pro ? (openBlock(), createBlock(_component_router_link, {
              key: 0,
              onClick: trackCta,
              to: { path: "/account" },
              class: "text-blue-400 button-flat button-color-surface button-size-medium"
            }, {
              default: withCtx(() => [
                _hoisted_22
              ]),
              _: 1
            })) : !unref(user) ? (openBlock(), createBlock(_component_router_link, {
              key: 1,
              onClick: trackCta,
              to: { path: "/account" },
              class: "text-blue-400 button-flat button-color-surface button-size-medium"
            }, {
              default: withCtx(() => [
                _hoisted_23
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_sfc_main$2, { header: "Monday, November 14th, 2022" }, {
              items: withCtx(() => [
                _hoisted_3,
                _hoisted_4
              ]),
              default: withCtx(() => [
                _hoisted_2
              ]),
              _: 1
            }),
            createVNode(_sfc_main$2, { header: "Sunday, October 16th, 2022" }, {
              items: withCtx(() => [
                _hoisted_7,
                _hoisted_8
              ]),
              default: withCtx(() => [
                _hoisted_5,
                _hoisted_6
              ]),
              _: 1
            }),
            createVNode(_sfc_main$2, { header: "Thursday, July 21st, 2022" }, {
              items: withCtx(() => [
                _hoisted_9,
                createBaseVNode("li", null, [
                  createTextVNode("Direct doc references are finally here! Start typing the top-level title of another doc with the "),
                  createVNode(Code, null, {
                    default: withCtx(() => [
                      createTextVNode("[[my other doc]]")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" syntax for suggestions to appear.")
                ])
              ]),
              _: 1
            }),
            createVNode(_sfc_main$2, { header: "Monday, May 23rd, 2022" }, {
              items: withCtx(() => [
                _hoisted_10,
                _hoisted_11,
                _hoisted_12,
                createBaseVNode("li", null, [
                  createTextVNode("Formatting tokens ("),
                  createVNode(Code, null, {
                    default: withCtx(() => [
                      createTextVNode("#")
                    ]),
                    _: 1
                  }),
                  createTextVNode(", "),
                  createVNode(Code, null, {
                    default: withCtx(() => [
                      createTextVNode("*")
                    ]),
                    _: 1
                  }),
                  createTextVNode(", etc) now have better contrast with the surrounding text.")
                ]),
                _hoisted_13
              ]),
              _: 1
            }),
            createVNode(_sfc_main$2, { header: "Wednesday, March 30th, 2022" }, {
              items: withCtx(() => [
                _hoisted_14
              ]),
              _: 1
            }),
            createVNode(_sfc_main$2, { header: "Saturday, March 26th, 2022" }, {
              items: withCtx(() => [
                _hoisted_15,
                _hoisted_16,
                createBaseVNode("li", null, [
                  createTextVNode("Regular expressions are automatically recognized by the "),
                  createVNode(Code, null, {
                    default: withCtx(() => [
                      createTextVNode("/.*/i")
                    ]),
                    _: 1
                  }),
                  createTextVNode(" syntax in searches.")
                ]),
                _hoisted_17,
                _hoisted_18,
                _hoisted_19,
                _hoisted_20
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ChangeLog.dcee2b99.js.map
