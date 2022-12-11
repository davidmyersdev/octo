import { _ as _export_sfc, ai as REMOVE_CONTEXT, aj as ADD_CONTEXT, O as nanoid, Z as SET_CONTEXT_TAGS, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, D as withDirectives, E as vModelText, ab as withKeys, W as withModifiers, b as createVNode, w as withCtx, U as Fragment, V as renderList, ah as createStaticVNode, d as createBlock, e as createTextVNode, F as toDisplayString, f as createCommentVNode, L as normalizeClass, p as pushScopeId, h as popScopeId } from "./index.cce5ef5a.js";
import { C as CoreButton } from "./CoreButton.a42d3c6d.js";
import { _ as _sfc_main$1 } from "./Tag.vue_vue_type_script_setup_true_lang.d16f2731.js";
import { r as render, a as render$1 } from "./TrashIcon.710f36e7.js";
const workspaces_vue_vue_type_style_index_0_scoped_e52b40dd_lang = "";
const _sfc_main = {
  components: {
    CoreButton,
    Tag: _sfc_main$1,
    TrashIcon: render,
    WorkspaceIcon: render$1
  },
  data() {
    return {
      activeIndex: 0,
      contextName: "",
      input: ""
    };
  },
  computed: {
    availableTags() {
      return this.$store.getters.allTags;
    },
    contexts() {
      return this.$store.getters.sortedContexts;
    },
    filtered() {
      return this.availableTags.filter((tag) => {
        return tag.startsWith(this.input.toLowerCase());
      });
    },
    selected() {
      return this.tags.sort();
    },
    tags() {
      return this.$store.state.context.tags;
    }
  },
  methods: {
    discard(context) {
      this.$store.commit(REMOVE_CONTEXT, context);
    },
    down() {
      if (this.activeIndex < this.filtered.length - 1) {
        this.activeIndex += 1;
        this.scroll();
      }
    },
    first() {
      this.activeIndex = 0;
      this.$refs.tagsContainer.scrollElement.scroll(0, 0);
    },
    focusInput() {
      this.$refs.input.focus();
    },
    save() {
      this.$store.commit(ADD_CONTEXT, {
        id: nanoid(),
        name: this.contextName,
        tags: this.tags
      });
      this.contextName = "";
      this.$store.dispatch(SET_CONTEXT_TAGS, { context: { tags: [] } });
    },
    scroll() {
      const tagsContainer = this.$refs.tagsContainer.scrollElement;
      const tag = this.$refs.tags[this.activeIndex];
      const scrolltop = tagsContainer.scrollTop;
      const offsetheight = tagsContainer.offsetHeight;
      const offsettop = tag.offsetTop;
      const height = tag.offsetHeight;
      if (offsettop + height - scrolltop > offsetheight) {
        const scrolloffset = offsettop - offsetheight + height;
        tagsContainer.scroll(0, scrolloffset);
      } else if (offsettop < scrolltop) {
        tagsContainer.scroll(0, offsettop);
      }
    },
    selectTag(tag) {
      this.activeIndex = this.filtered.findIndex((t) => t === tag);
      this.toggleTag();
    },
    isSelected(tag) {
      return this.tags.includes(tag);
    },
    toggleTag() {
      const tag = this.filtered[this.activeIndex];
      if (tag) {
        let tags = this.tags;
        if (tags.includes(tag)) {
          tags = tags.filter((t) => t !== tag);
        } else {
          tags = tags.concat([tag]);
        }
        this.$store.dispatch(SET_CONTEXT_TAGS, {
          context: {
            tags
          }
        });
      }
    },
    up() {
      if (this.activeIndex > 0) {
        this.activeIndex -= 1;
        this.scroll();
      }
    }
  },
  mounted() {
    this.$store.state.context.editing = true;
    this.focusInput();
  },
  beforeUnmount() {
    this.$store.state.context.editing = false;
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-e52b40dd"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "container flex flex-col mx-auto p-4 md:px-16 md:py-8" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h2", { class: "text-2xl" }, "Workspaces", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "mt-1 text-gray-500" }, " A Workspace allows you to focus on what's important now by filtering your docs down to just a handful of relevant tags. ", -1));
const _hoisted_4 = { class: "mt-4" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "context-name" }, "Name it and save it (optional)", -1));
const _hoisted_6 = { class: "flex items-center mt-2" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700 mt-1 hidden md:block" }, "You must add at least one tag and give the context a name in order to save it.", -1));
const _hoisted_9 = { class: "mt-4" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("label", { for: "tags-search" }, "Choose some tags", -1));
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<small class="text-gray-700 mt-1 hidden md:block" data-v-e52b40dd>Navigate the list below with <span class="key" data-v-e52b40dd>up</span> or <span class="key" data-v-e52b40dd>down</span> and toggle tags with <span class="key" data-v-e52b40dd>space</span> or <span class="key" data-v-e52b40dd>enter</span></small>', 1);
const _hoisted_12 = {
  key: 0,
  class: "flex flex-col gap-1 p-2"
};
const _hoisted_13 = { key: 0 };
const _hoisted_14 = {
  key: 1,
  class: "flex justify-between p-3"
};
const _hoisted_15 = { class: "mt-4" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("h3", { class: "text-xl mb-4" }, "Workspaces", -1));
const _hoisted_17 = { class: "grid gap-4 grid-cols-1 lg:grid-cols-2" };
const _hoisted_18 = { class: "flex items-center justify-between mb-4" };
const _hoisted_19 = { class: "text-lg flex items-center" };
const _hoisted_20 = { class: "ml-2" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Discard", -1));
const _hoisted_23 = { class: "flex items-center flex-wrap gap-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tag = resolveComponent("Tag");
  const _component_CoreButton = resolveComponent("CoreButton");
  const _component_CoreScrollable = resolveComponent("CoreScrollable");
  const _component_WorkspaceIcon = resolveComponent("WorkspaceIcon");
  const _component_TrashIcon = resolveComponent("TrashIcon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      _hoisted_2,
      _hoisted_3,
      createBaseVNode("div", _hoisted_4, [
        _hoisted_5,
        createBaseVNode("div", _hoisted_6, [
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.contextName = $event),
            type: "text",
            class: "form-text w-full shadow",
            id: "context-name",
            placeholder: "Give this Workspace a name..."
          }, null, 512), [
            [vModelText, $data.contextName]
          ]),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = (...args) => $options.save && $options.save(...args)),
            disabled: !($options.tags.length && $data.contextName),
            class: "button button-size-medium button-color-gray disabled:text-gray-900 ml-2"
          }, "Save", 8, _hoisted_7)
        ]),
        _hoisted_8
      ]),
      createBaseVNode("div", _hoisted_9, [
        _hoisted_10,
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.input = $event),
          onInput: _cache[3] || (_cache[3] = (...args) => $options.first && $options.first(...args)),
          onKeydown: [
            _cache[4] || (_cache[4] = withKeys(withModifiers((...args) => $options.toggleTag && $options.toggleTag(...args), ["prevent"]), ["space"])),
            _cache[5] || (_cache[5] = withKeys(withModifiers((...args) => $options.toggleTag && $options.toggleTag(...args), ["exact"]), ["enter"])),
            _cache[6] || (_cache[6] = withKeys(withModifiers((...args) => $options.down && $options.down(...args), ["prevent"]), ["221"])),
            _cache[7] || (_cache[7] = withKeys(withModifiers((...args) => $options.down && $options.down(...args), ["prevent"]), ["down"])),
            _cache[8] || (_cache[8] = withKeys(withModifiers((...args) => $options.up && $options.up(...args), ["prevent"]), ["219"])),
            _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => $options.up && $options.up(...args), ["prevent"]), ["up"]))
          ],
          ref: "input",
          type: "text",
          class: "form-text w-full mt-2",
          id: "tag-search",
          placeholder: "Start typing to filter the list...",
          autocomplete: "off"
        }, null, 544), [
          [vModelText, $data.input]
        ]),
        _hoisted_11
      ]),
      createVNode(_component_CoreScrollable, {
        ref: "tagsContainer",
        class: "border rounded mt-4 max-h-[20rem] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            $options.filtered.length ? (openBlock(), createElementBlock("div", _hoisted_12, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($options.filtered, (tag, index) => {
                return openBlock(), createBlock(_component_CoreButton, {
                  onClick: ($event) => $options.selectTag(tag),
                  key: tag,
                  ref_for: true,
                  ref: "tags",
                  class: normalizeClass(["flex justify-between cursor-pointer p-6 md:p-3 focus-within:ring", { "bg-gray-200 dark:bg-gray-700": $options.isSelected(tag), "bg-blue-300 dark:bg-blue-500": index === $data.activeIndex }])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_Tag, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(tag), 1)
                      ]),
                      _: 2
                    }, 1024),
                    $options.isSelected(tag) ? (openBlock(), createElementBlock("span", _hoisted_13, "selected")) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_14, "No results..."))
          ])
        ]),
        _: 1
      }, 512),
      createBaseVNode("div", _hoisted_15, [
        _hoisted_16,
        createBaseVNode("div", _hoisted_17, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.contexts, (context) => {
            return openBlock(), createElementBlock("div", {
              key: context.id,
              class: "shadow relative flex flex-col min-w-0 rounded p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
            }, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("h4", _hoisted_19, [
                  createVNode(_component_WorkspaceIcon, { class: "w-5" }),
                  createBaseVNode("span", _hoisted_20, toDisplayString(context.name), 1)
                ]),
                createBaseVNode("button", {
                  onClick: ($event) => $options.discard(context),
                  class: "button-flat button-size-medium text-sm text-red-500 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }, [
                  createVNode(_component_TrashIcon, { class: "w-5" }),
                  _hoisted_22
                ], 8, _hoisted_21)
              ]),
              createBaseVNode("div", _hoisted_23, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(context.tags, (tag) => {
                  return openBlock(), createBlock(_component_Tag, { key: tag }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tag), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
const workspaces = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e52b40dd"]]);
export {
  workspaces as default
};
//# sourceMappingURL=workspaces.bd9abe52.js.map
