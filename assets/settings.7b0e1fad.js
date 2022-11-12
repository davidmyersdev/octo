import { s as subscription } from "./account.81044ebe.js";
import { i as defineComponent, r as resolveComponent, u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, e as createTextVNode, f as createCommentVNode, aw as createStaticVNode, _ as _export_sfc, k as renderSlot, az as SET_EDITOR_IMAGES_ENABLED, aA as SET_EDITOR_LIGATURES, aB as SET_EDITOR_LISTS_ENABLED, aC as SET_EDITOR_READABILITY_ENABLED, aD as SET_EDITOR_READABILITY_MAX_WIDTH, aE as SET_EDITOR_READABILITY_WORDS_PER_MINUTE, aF as SET_EDITOR_IMAGES_SHOW_CAPTIONS, aG as SET_EDITOR_SPELLCHECK, aH as SET_EDITOR_TAB_SIZE, aI as SET_EDITOR_TOOLBAR, aJ as SET_EDITOR_KEY_MAP, j as withDirectives, at as vModelCheckbox, v as vModelText, aK as SET_CRYPTO_KEYS, aL as SET_CRYPTO_ENABLED, aM as TOUCH_DOCUMENT, aN as generateKeys, aO as exportKeys, D as useStore, l as computed, aP as isRef, aQ as SET_EXPERIMENTAL, aR as SET_THEME, aS as vModelRadio, d as createBlock } from "./index.99a5f7ec.js";
import Exporter from "./export.954b6d3b.js";
import Importer from "./import.66a81dea.js";
const _hoisted_1$8 = {
  key: 0,
  class: "bg-gray-100 dark:bg-darkest text-center xl:text-left shadow rounded p-4 md:p-2"
};
const _hoisted_2$6 = { class: "flex flex-col lg:flex-row items-center justify-between gap-4" };
const _hoisted_3$5 = /* @__PURE__ */ createStaticVNode('<strong class="inline-flex items-center lg:ml-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"></path></svg><span class="whitespace-nowrap ml-2">Octo Pro</span></strong><div class="lg:ml-2 xl:ml-4">Share your docs, attach files, and get early access to new features.</div>', 2);
const _hoisted_5$4 = { class: "flex items-center justify-end" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Banner",
  setup(__props) {
    const trackCta = () => {
      window.fathom.trackGoal("92SS7KST", 0);
    };
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return !unref(subscription).pro ? (openBlock(), createElementBlock("section", _hoisted_1$8, [
        createBaseVNode("div", _hoisted_2$6, [
          _hoisted_3$5,
          createBaseVNode("div", _hoisted_5$4, [
            createVNode(_component_router_link, {
              onClick: trackCta,
              to: { path: "/account" },
              class: "button-flat button-color-surface button-size-medium w-full whitespace-nowrap lg:ml-2 text-blue-400"
            }, {
              default: withCtx(() => [
                createTextVNode("Learn More")
              ]),
              _: 1
            })
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$7 = {};
const _hoisted_1$7 = { class: "container flex flex-col mx-auto p-4 md:px-16 md:py-8" };
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const PageContainer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3]]);
const _sfc_main$6 = {
  computed: {
    imagesEnabled: {
      get() {
        return this.$store.state.settings.editor.images.enabled;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_ENABLED, value);
      }
    },
    ligatures: {
      get() {
        return this.$store.state.settings.editor.ligatures;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_LIGATURES, value);
      }
    },
    listsEnabled: {
      get() {
        return this.$store.state.settings.editor.lists.enabled;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_LISTS_ENABLED, value);
      }
    },
    readabilityEnabled: {
      get() {
        return this.$store.state.settings.editor.readability.enabled;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_READABILITY_ENABLED, value);
      }
    },
    readabilityMaxWidth: {
      get() {
        return this.$store.state.settings.editor.readability.maxWidthInChars;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_READABILITY_MAX_WIDTH, value);
      }
    },
    readabilityWordsPerMinute: {
      get() {
        return this.$store.state.settings.editor.readability.wordsPerMinute;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_READABILITY_WORDS_PER_MINUTE, value);
      }
    },
    showCaptions: {
      get() {
        return this.$store.state.settings.editor.images.showCaptions;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_IMAGES_SHOW_CAPTIONS, value);
      }
    },
    spellcheck: {
      get() {
        return this.$store.state.settings.editor.spellcheck;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_SPELLCHECK, value);
      }
    },
    tabSize: {
      get() {
        return this.$store.state.settings.editor.tabSize;
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_TAB_SIZE, parseInt(value) || 2);
      }
    },
    toolbar: {
      get() {
        return this.$store.state.settings.editor.toolbar;
      },
      set(value) {
        this.$store.commit(SET_EDITOR_TOOLBAR, value);
      }
    },
    vim: {
      get() {
        return this.$store.state.settings.editor.keyMap === "vim";
      },
      set(value) {
        this.$store.dispatch(SET_EDITOR_KEY_MAP, value ? "vim" : "default");
      }
    }
  }
};
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl" }, "Editor", -1);
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-4" }, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-6" }, "Configure settings for Ink - the Markdown editor that powers Octo.", -1);
const _hoisted_4$5 = { class: "mb-4" };
const _hoisted_5$3 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_6$3 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Spellcheck", -1);
const _hoisted_7$3 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Note: This will not disable Grammarly if you have the extension enabled.", -1);
const _hoisted_8$2 = { class: "mb-4" };
const _hoisted_9$2 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_10$2 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Vim Mode", -1);
const _hoisted_11$2 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Use Vim keybindings to edit your docs.", -1);
const _hoisted_12$1 = { class: "mb-4" };
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("label", { for: "config-tab-size" }, "Tab length", -1);
const _hoisted_14$1 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Set the number of spaces to use for each tab (minimum: 2).", -1);
const _hoisted_15$1 = { class: "mb-4" };
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-2xl mb-2" }, "Readability Information", -1);
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-2" }, "The Readability Bar shows useful information such as word count and read time at the bottom of the editor.", -1);
const _hoisted_18 = { class: "mb-4" };
const _hoisted_19 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Toggle Readability Bar", -1);
const _hoisted_21 = { class: "mb-4" };
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("label", { for: "config-tab-size" }, "Reading Speed (words per minute)", -1);
const _hoisted_23 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Reading speed is used to estimate document read time.", -1);
const _hoisted_24 = { class: "mb-4" };
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("label", { for: "config-max-width" }, "Max Width of Editor (in number of characters)", -1);
const _hoisted_26 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, "Values between 60 and 100 are common.", -1);
const _hoisted_27 = { class: "mb-4" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-2xl mb-2" }, "Formatting Toolbar", -1);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-2" }, "Display the formatting toolbar in the editor.", -1);
const _hoisted_30 = { class: "mb-4" };
const _hoisted_31 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Enable Toolbar", -1);
const _hoisted_33 = { class: "mb-4" };
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-2xl mb-2" }, "Font Ligatures", -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-2" }, [
  /* @__PURE__ */ createTextVNode("Render "),
  /* @__PURE__ */ createBaseVNode("a", {
    href: "https://github.com/tonsky/FiraCode#whats-in-the-box",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "font ligatures"),
  /* @__PURE__ */ createTextVNode(" (e.g. "),
  /* @__PURE__ */ createBaseVNode("code", { class: "monospace ligatures-normal" }, "=>"),
  /* @__PURE__ */ createTextVNode(").")
], -1);
const _hoisted_36 = { class: "mb-4" };
const _hoisted_37 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Enable Ligatures", -1);
const _hoisted_39 = { class: "mb-4" };
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-2xl mb-2" }, "Images", -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-2" }, [
  /* @__PURE__ */ createTextVNode("This setting determines whether or not image tags (e.g. "),
  /* @__PURE__ */ createBaseVNode("code", { class: "bg-gray-100 dark:bg-darkest p-0.5 rounded" }, "![alt text](/path/to/image)"),
  /* @__PURE__ */ createTextVNode(") will render images in your docs.")
], -1);
const _hoisted_42 = { class: "mb-4" };
const _hoisted_43 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Enable Images", -1);
const _hoisted_45 = { class: "mb-4" };
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("h4", { class: "text-2xl mb-2" }, "List Overlays", -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-2" }, [
  /* @__PURE__ */ createTextVNode("This setting enables overlays for bullet and task lists. Task lists will render an interactive checkbox in place of "),
  /* @__PURE__ */ createBaseVNode("code", { class: "bg-gray-100 dark:bg-darkest p-0.5 rounded" }, "- [ ]"),
  /* @__PURE__ */ createTextVNode(" or "),
  /* @__PURE__ */ createBaseVNode("code", { class: "bg-gray-100 dark:bg-darkest p-0.5 rounded" }, "- [x]"),
  /* @__PURE__ */ createTextVNode(".")
], -1);
const _hoisted_48 = { class: "mb-4" };
const _hoisted_49 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Enable List Overlays", -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Extendable = resolveComponent("Extendable");
  return openBlock(), createElementBlock("section", null, [
    _hoisted_1$6,
    _hoisted_2$5,
    _hoisted_3$4,
    createVNode(_component_Extendable, { scope: "app.settings.editor" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_4$5, [
          createBaseVNode("div", null, [
            createBaseVNode("label", _hoisted_5$3, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.spellcheck = $event),
                type: "checkbox",
                class: "checkbox"
              }, null, 512), [
                [vModelCheckbox, $options.spellcheck]
              ]),
              _hoisted_6$3
            ])
          ]),
          _hoisted_7$3
        ]),
        createBaseVNode("div", _hoisted_8$2, [
          createBaseVNode("div", null, [
            createBaseVNode("label", _hoisted_9$2, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.vim = $event),
                type: "checkbox",
                class: "checkbox"
              }, null, 512), [
                [vModelCheckbox, $options.vim]
              ]),
              _hoisted_10$2
            ])
          ]),
          _hoisted_11$2
        ]),
        createBaseVNode("div", _hoisted_12$1, [
          _hoisted_13$1,
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.tabSize = $event),
            type: "number",
            min: "2",
            id: "config-tab-size",
            class: "form-text w-full"
          }, null, 512), [
            [vModelText, $options.tabSize]
          ]),
          _hoisted_14$1
        ]),
        createBaseVNode("div", _hoisted_15$1, [
          _hoisted_16$1,
          _hoisted_17$1,
          createBaseVNode("div", _hoisted_18, [
            createBaseVNode("div", null, [
              createBaseVNode("label", _hoisted_19, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $options.readabilityEnabled = $event),
                  type: "checkbox",
                  class: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, $options.readabilityEnabled]
                ]),
                _hoisted_20
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_21, [
            _hoisted_22,
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $options.readabilityWordsPerMinute = $event),
              type: "number",
              min: "2",
              id: "config-tab-size",
              class: "form-text w-full"
            }, null, 512), [
              [vModelText, $options.readabilityWordsPerMinute]
            ]),
            _hoisted_23
          ]),
          createBaseVNode("div", _hoisted_24, [
            _hoisted_25,
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $options.readabilityMaxWidth = $event),
              type: "number",
              min: "40",
              id: "config-max-width",
              class: "form-text w-full"
            }, null, 512), [
              [vModelText, $options.readabilityMaxWidth]
            ]),
            _hoisted_26
          ])
        ]),
        createBaseVNode("div", _hoisted_27, [
          _hoisted_28,
          _hoisted_29,
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("label", _hoisted_31, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $options.toolbar = $event),
                type: "checkbox",
                class: "checkbox"
              }, null, 512), [
                [vModelCheckbox, $options.toolbar]
              ]),
              _hoisted_32
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_33, [
          _hoisted_34,
          _hoisted_35,
          createBaseVNode("div", _hoisted_36, [
            createBaseVNode("label", _hoisted_37, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $options.ligatures = $event),
                type: "checkbox",
                class: "checkbox"
              }, null, 512), [
                [vModelCheckbox, $options.ligatures]
              ]),
              _hoisted_38
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_39, [
          _hoisted_40,
          _hoisted_41,
          createBaseVNode("div", _hoisted_42, [
            createBaseVNode("div", null, [
              createBaseVNode("label", _hoisted_43, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $options.imagesEnabled = $event),
                  type: "checkbox",
                  class: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, $options.imagesEnabled]
                ]),
                _hoisted_44
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_45, [
          _hoisted_46,
          _hoisted_47,
          createBaseVNode("div", _hoisted_48, [
            createBaseVNode("div", null, [
              createBaseVNode("label", _hoisted_49, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $options.listsEnabled = $event),
                  type: "checkbox",
                  class: "checkbox"
                }, null, 512), [
                  [vModelCheckbox, $options.listsEnabled]
                ]),
                _hoisted_50
              ])
            ])
          ])
        ])
      ]),
      _: 1
    })
  ]);
}
const Editor = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2]]);
const _sfc_main$5 = {
  data() {
    return {
      togglingCrypto: false
    };
  },
  computed: {
    allowCrypto() {
      return this.privateKey && this.publicKey;
    },
    privateKey: {
      get() {
        return this.$store.state.settings.crypto.privateKey;
      },
      set(value) {
        this.$store.dispatch(SET_CRYPTO_KEYS, {
          privateKey: value
        });
      }
    },
    publicKey: {
      get() {
        return this.$store.state.settings.crypto.publicKey;
      },
      set(value) {
        this.$store.dispatch(SET_CRYPTO_KEYS, {
          publicKey: value
        });
      }
    },
    toggleCrypto: {
      get() {
        return this.$store.state.settings.crypto.enabled;
      },
      async set(value) {
        this.togglingCrypto = true;
        await this.$store.dispatch(SET_CRYPTO_ENABLED, value);
        await Promise.all(
          this.$store.getters.decrypted.map((doc) => {
            return this.$store.dispatch(TOUCH_DOCUMENT, doc);
          })
        );
        this.togglingCrypto = false;
      }
    }
  },
  methods: {
    async generateKeys() {
      const keys = await generateKeys();
      const { privateKey, publicKey } = await exportKeys(keys);
      this.privateKey = privateKey;
      this.publicKey = publicKey;
    }
  }
};
const _hoisted_1$5 = /* @__PURE__ */ createStaticVNode('<h3 class="text-3xl">Client-side Encryption</h3><hr class="mt-2 mb-4"><div class="mb-4"><label for="tags-search">Documents are encrypted using a <a href="https://en.wikipedia.org/wiki/Hybrid_cryptosystem" target="_blank" rel="noopener noreferrer">hybrid cryptosystem</a>. You may provide your own keys or generate a new set here. If you choose to generate a new set, be sure to <strong>make a secure backup of your keys</strong>. If you lose your private key, you will not be able to recover any data that is encrypted.</label></div>', 3);
const _hoisted_4$4 = { class: "mb-4" };
const _hoisted_5$2 = { class: "button button-size-medium button-color-gray" };
const _hoisted_6$2 = ["disabled"];
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Enable Encryption", -1);
const _hoisted_8$1 = { class: "text-gray-700" };
const _hoisted_9$1 = { key: 0 };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("strong", null, "requires", -1);
const _hoisted_11$1 = { class: "mb-4" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("label", { for: "tags-search" }, "Private Key", -1);
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, [
  /* @__PURE__ */ createTextVNode("This key is used to "),
  /* @__PURE__ */ createBaseVNode("em", null, "decrypt"),
  /* @__PURE__ */ createTextVNode(" documents. It "),
  /* @__PURE__ */ createBaseVNode("strong", null, "will not"),
  /* @__PURE__ */ createTextVNode(" be synced across devices when signed in.")
], -1);
const _hoisted_14 = { class: "mb-4" };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("label", { for: "tags-search" }, "Public Key", -1);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("small", { class: "text-gray-700" }, [
  /* @__PURE__ */ createTextVNode("This key is used to "),
  /* @__PURE__ */ createBaseVNode("em", null, "encrypt"),
  /* @__PURE__ */ createTextVNode(" documents. It "),
  /* @__PURE__ */ createBaseVNode("strong", null, "will"),
  /* @__PURE__ */ createTextVNode(" be synced across devices when signed in.")
], -1);
const _hoisted_17 = { class: "mb-4" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", null, [
    _hoisted_1$5,
    createBaseVNode("div", _hoisted_4$4, [
      createBaseVNode("div", null, [
        createBaseVNode("label", _hoisted_5$2, [
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.toggleCrypto = $event),
            disabled: !$options.allowCrypto || $data.togglingCrypto,
            type: "checkbox",
            class: "checkbox"
          }, null, 8, _hoisted_6$2), [
            [vModelCheckbox, $options.toggleCrypto]
          ]),
          _hoisted_7$2
        ])
      ]),
      createBaseVNode("small", _hoisted_8$1, [
        createTextVNode("Note: Toggling encryption will encrypt/decrypt all existing documents. "),
        !$options.allowCrypto ? (openBlock(), createElementBlock("span", _hoisted_9$1, [
          createTextVNode("Enabling encryption "),
          _hoisted_10$1,
          createTextVNode(" private/public keys. Generate or supply them below to enable.")
        ])) : createCommentVNode("", true)
      ])
    ]),
    createBaseVNode("div", _hoisted_11$1, [
      _hoisted_12,
      withDirectives(createBaseVNode("textarea", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.privateKey = $event),
        class: "form-text w-full",
        rows: "5",
        placeholder: "Private key",
        autocomplete: "off"
      }, null, 512), [
        [vModelText, $options.privateKey]
      ]),
      _hoisted_13
    ]),
    createBaseVNode("div", _hoisted_14, [
      _hoisted_15,
      withDirectives(createBaseVNode("textarea", {
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.publicKey = $event),
        class: "form-text w-full",
        rows: "5",
        placeholder: "Public key",
        autocomplete: "off"
      }, null, 512), [
        [vModelText, $options.publicKey]
      ]),
      _hoisted_16
    ]),
    createBaseVNode("div", _hoisted_17, [
      createBaseVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => $options.generateKeys && $options.generateKeys(...args)),
        class: "button button-size-medium button-color-gray"
      }, "Generate Keys")
    ])
  ]);
}
const Encryption = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1]]);
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl" }, "Experimental Features", -1);
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-4" }, null, -1);
const _hoisted_3$3 = { class: "flex flex-col gap-4" };
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("p", null, "These features may be changed or removed at any time.", -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("ul", { class: "flex flex-col gap-1 list-disc pl-4" }, [
  /* @__PURE__ */ createBaseVNode("li", null, "Edit plain-text Markdown files that reside on your device (in supported browsers)"),
  /* @__PURE__ */ createBaseVNode("li", null, "Render live Mermaid (UML) diagrams above applicable code blocks")
], -1);
const _hoisted_6$1 = { class: "button button-size-medium button-color-gray items-center" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Enable Experimental Features", -1);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Experimental",
  setup(__props) {
    const { commit, state } = useStore();
    const experimental = computed({
      get() {
        return state.settings.experimental;
      },
      set(value) {
        commit(SET_EXPERIMENTAL, value);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", null, [
        _hoisted_1$4,
        _hoisted_2$4,
        createBaseVNode("div", _hoisted_3$3, [
          _hoisted_4$3,
          _hoisted_5$1,
          createBaseVNode("div", null, [
            createBaseVNode("label", _hoisted_6$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(experimental) ? experimental.value = $event : null),
                type: "checkbox",
                class: "checkbox"
              }, null, 512), [
                [vModelCheckbox, unref(experimental)]
              ]),
              _hoisted_7$1
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl" }, "Export Docs", -1);
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-4" }, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-4" }, [
  /* @__PURE__ */ createBaseVNode("label", null, "This tool lets you export your knowledge base as a zipped folder of plain-text Markdown files.")
], -1);
const _hoisted_4$2 = { class: "mb-4" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Export",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", null, [
        _hoisted_1$3,
        _hoisted_2$3,
        _hoisted_3$2,
        createBaseVNode("div", _hoisted_4$2, [
          createVNode(Exporter)
        ])
      ]);
    };
  }
});
const _sfc_main$2 = {
  computed: {
    theme: {
      get() {
        return this.$store.state.settings.theme;
      },
      set(value) {
        this.$store.dispatch(SET_THEME, value);
      }
    }
  }
};
const _hoisted_1$2 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl" }, "Appearance", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-4" }, null, -1);
const _hoisted_3$1 = { class: "mb-4" };
const _hoisted_4$1 = { class: "button button-size-medium button-color-gray" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Auto", -1);
const _hoisted_6 = { class: "button button-size-medium button-color-gray ml-2" };
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Dark", -1);
const _hoisted_8 = { class: "button button-size-medium button-color-gray ml-2" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Light", -1);
const _hoisted_10 = { class: "button button-size-medium button-color-gray ml-2" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Halloween", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Extendable = resolveComponent("Extendable");
  return openBlock(), createElementBlock("section", null, [
    _hoisted_1$2,
    _hoisted_2$2,
    createVNode(_component_Extendable, { scope: "app.settings.theme" }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", null, [
            createBaseVNode("label", _hoisted_4$1, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $options.theme = $event),
                type: "radio",
                value: "auto",
                class: "radio"
              }, null, 512), [
                [vModelRadio, $options.theme]
              ]),
              _hoisted_5
            ]),
            createBaseVNode("label", _hoisted_6, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $options.theme = $event),
                type: "radio",
                value: "dark",
                class: "radio"
              }, null, 512), [
                [vModelRadio, $options.theme]
              ]),
              _hoisted_7
            ]),
            createBaseVNode("label", _hoisted_8, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $options.theme = $event),
                type: "radio",
                value: "light",
                class: "radio"
              }, null, 512), [
                [vModelRadio, $options.theme]
              ]),
              _hoisted_9
            ]),
            createBaseVNode("label", _hoisted_10, [
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $options.theme = $event),
                type: "radio",
                value: "october",
                class: "radio"
              }, null, 512), [
                [vModelRadio, $options.theme]
              ]),
              _hoisted_11
            ])
          ])
        ])
      ]),
      _: 1
    })
  ]);
}
const Theme = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl" }, "Import Docs", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("hr", { class: "mt-2 mb-4" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", { class: "mb-4" }, [
  /* @__PURE__ */ createBaseVNode("p", null, "This tool lets you import plain-text Markdown files into your knowledge base.")
], -1);
const _hoisted_4 = { class: "mb-4" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Import",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", null, [
        _hoisted_1$1,
        _hoisted_2$1,
        _hoisted_3,
        createBaseVNode("div", _hoisted_4, [
          createVNode(Importer)
        ])
      ]);
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-4xl" }, "App Settings", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", { class: "mt-1 mb-8 text-gray-500" }, "Make yourself comfortable", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "settings",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Extendable = resolveComponent("Extendable");
      return openBlock(), createBlock(PageContainer, null, {
        default: withCtx(() => [
          createBaseVNode("div", null, [
            _hoisted_1,
            _hoisted_2,
            createVNode(_sfc_main$8, { class: "mb-8" }),
            createVNode(_component_Extendable, { scope: "app.settings" }, {
              default: withCtx(() => [
                createVNode(Theme, { class: "mb-8" }),
                createVNode(Editor, { class: "mb-8" }),
                createVNode(Encryption, { class: "mb-8" }),
                createVNode(_sfc_main$1, { class: "mb-8" }),
                createVNode(_sfc_main$3, { class: "mb-8" }),
                createVNode(_sfc_main$4, { class: "mb-8" })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=settings.7b0e1fad.js.map
