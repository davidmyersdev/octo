import { i as defineComponent, l as computed, H as getRedirectResult, z as getAuth, a3 as linkWithRedirect, I as GithubAuthProvider, J as GoogleAuthProvider, T as TwitterAuthProvider, _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, t as toDisplayString, f as createCommentVNode, D as useStore, e as createTextVNode } from "./index.36c6bdda.js";
import { G as GitHubIcon, a as GoogleIcon, T as TwitterIcon, u as useUser, A as AuthTiers } from "./AuthTiers.9e379ea5.js";
import "./Modal.e380d979.js";
const _sfc_main$1 = defineComponent({
  components: {
    GitHubIcon,
    GoogleIcon,
    TwitterIcon
  },
  setup() {
    const user = useUser();
    const github = computed(() => user.value.providers.find(({ providerId: id }) => id === "github.com"));
    const google = computed(() => user.value.providers.find(({ providerId: id }) => id === "google.com"));
    const twitter = computed(() => user.value.providers.find(({ providerId: id }) => id === "twitter.com"));
    getRedirectResult(getAuth()).catch((error) => {
      console.warn({ error });
    });
    const linkGitHub = () => {
      const authUser = getAuth().currentUser;
      if (authUser) {
        linkWithRedirect(authUser, new GithubAuthProvider());
      }
    };
    const linkGoogle = () => {
      const authUser = getAuth().currentUser;
      if (authUser) {
        linkWithRedirect(authUser, new GoogleAuthProvider());
      }
    };
    const linkTwitter = () => {
      const authUser = getAuth().currentUser;
      if (authUser) {
        linkWithRedirect(authUser, new TwitterAuthProvider());
      }
    };
    const signOut = () => {
      getAuth().signOut();
    };
    return {
      github,
      google,
      linkGitHub,
      linkGoogle,
      linkTwitter,
      signOut,
      twitter
    };
  }
});
const _hoisted_1$1 = { class: "flex flex-col gap-4" };
const _hoisted_2$1 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_3$1 = { class: "flex items-center" };
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-lg ml-3" }, "GitHub", -1);
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("span", { class: "bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2" }, "Linked", -1);
const _hoisted_6$1 = {
  key: 1,
  class: "mb-4"
};
const _hoisted_7$1 = { class: "flex items-center" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-lg ml-3" }, "Google", -1);
const _hoisted_9$1 = /* @__PURE__ */ createBaseVNode("span", { class: "bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2" }, "Linked", -1);
const _hoisted_10$1 = {
  key: 2,
  class: "mb-4"
};
const _hoisted_11$1 = { class: "flex items-center" };
const _hoisted_12$1 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold text-lg ml-3" }, "Twitter", -1);
const _hoisted_13$1 = /* @__PURE__ */ createBaseVNode("span", { class: "bg-gray-100 dark:bg-gray-800 text-base font-normal px-1 rounded ml-2" }, "Linked", -1);
const _hoisted_14$1 = { class: "flex flex-col gap-2 lg:max-w-xs" };
const _hoisted_15$1 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Link GitHub", -1);
const _hoisted_16$1 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Link Google", -1);
const _hoisted_17$1 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-3" }, "Link Twitter", -1);
const _hoisted_18$1 = /* @__PURE__ */ createBaseVNode("svg", {
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
    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  })
], -1);
const _hoisted_19$1 = /* @__PURE__ */ createBaseVNode("span", { class: "action ml-3" }, "Sign Out", -1);
const _hoisted_20 = [
  _hoisted_18$1,
  _hoisted_19$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GitHubIcon = resolveComponent("GitHubIcon");
  const _component_GoogleIcon = resolveComponent("GoogleIcon");
  const _component_TwitterIcon = resolveComponent("TwitterIcon");
  return openBlock(), createElementBlock("section", _hoisted_1$1, [
    createBaseVNode("div", null, [
      _ctx.github ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(_component_GitHubIcon, { class: "h-5 w-5" }),
          _hoisted_4$1,
          _hoisted_5$1
        ]),
        createBaseVNode("p", null, toDisplayString(_ctx.github.email), 1)
      ])) : createCommentVNode("", true),
      _ctx.google ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
        createBaseVNode("div", _hoisted_7$1, [
          createVNode(_component_GoogleIcon, { class: "h-5 w-5" }),
          _hoisted_8$1,
          _hoisted_9$1
        ]),
        createBaseVNode("p", null, toDisplayString(_ctx.google.email), 1)
      ])) : createCommentVNode("", true),
      _ctx.twitter ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
        createBaseVNode("div", _hoisted_11$1, [
          createVNode(_component_TwitterIcon, { class: "h-5 w-5" }),
          _hoisted_12$1,
          _hoisted_13$1
        ]),
        createBaseVNode("p", null, toDisplayString(_ctx.twitter.email), 1)
      ])) : createCommentVNode("", true)
    ]),
    createBaseVNode("div", _hoisted_14$1, [
      !_ctx.github ? (openBlock(), createElementBlock("button", {
        key: 0,
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.linkGitHub && _ctx.linkGitHub(...args)),
        class: "button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start"
      }, [
        createVNode(_component_GitHubIcon, { class: "h-5 w-5" }),
        _hoisted_15$1
      ])) : createCommentVNode("", true),
      !_ctx.google ? (openBlock(), createElementBlock("button", {
        key: 1,
        onClick: _cache[1] || (_cache[1] = (...args) => _ctx.linkGoogle && _ctx.linkGoogle(...args)),
        class: "button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start"
      }, [
        createVNode(_component_GoogleIcon, { class: "h-5 w-5" }),
        _hoisted_16$1
      ])) : createCommentVNode("", true),
      !_ctx.twitter ? (openBlock(), createElementBlock("button", {
        key: 2,
        onClick: _cache[2] || (_cache[2] = (...args) => _ctx.linkTwitter && _ctx.linkTwitter(...args)),
        class: "button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start"
      }, [
        createVNode(_component_TwitterIcon, { class: "h-5 w-5" }),
        _hoisted_17$1
      ])) : createCommentVNode("", true),
      createBaseVNode("button", {
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.signOut && _ctx.signOut(...args)),
        class: "button-base button-size-medium button-color-gray shadow w-full lg:w-auto whitespace-nowrap justify-start text-red-400"
      }, _hoisted_20)
    ])
  ]);
}
const Providers = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  components: {
    AuthTiers,
    Providers
  },
  setup() {
    const store = useStore();
    const online = computed(() => store.state.online);
    const user = useUser();
    return {
      online,
      user
    };
  }
});
const _hoisted_1 = { class: "container flex flex-col mx-auto p-4 md:px-16 md:py-8" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-4xl mb-1" }, "My Account", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "text-gray-500 mb-8" }, "Manage account settings and subscriptions", -1);
const _hoisted_4 = {
  key: 0,
  class: "mb-4"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("strong", null, "erase everything", -1);
const _hoisted_6 = {
  key: 1,
  class: "mb-8"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl mb-4" }, "Status", -1);
const _hoisted_8 = {
  key: 0,
  class: "flex items-center"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "Docs are currently syncing to your account.", -1);
const _hoisted_11 = [
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = {
  key: 1,
  class: "flex items-center text-red-400"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1);
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("span", { class: "ml-2" }, "You are currently offline. Docs will continue syncing when you go online.", -1);
const _hoisted_15 = [
  _hoisted_13,
  _hoisted_14
];
const _hoisted_16 = { class: "mb-8" };
const _hoisted_17 = {
  key: 0,
  class: "text-3xl mb-4"
};
const _hoisted_18 = {
  key: 2,
  class: "mb-8"
};
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", { class: "text-3xl mb-4" }, "Providers", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AuthTiers = resolveComponent("AuthTiers");
  const _component_Providers = resolveComponent("Providers");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    _hoisted_3,
    !_ctx.user.id ? (openBlock(), createElementBlock("p", _hoisted_4, [
      createTextVNode("By default, docs are only stored in your browser. This means some actions, such as clearing your history, could "),
      _hoisted_5,
      createTextVNode(". To protect your data, you should sign up for an account.")
    ])) : createCommentVNode("", true),
    _ctx.user.id ? (openBlock(), createElementBlock("section", _hoisted_6, [
      _hoisted_7,
      _ctx.online ? (openBlock(), createElementBlock("div", _hoisted_8, _hoisted_11)) : (openBlock(), createElementBlock("div", _hoisted_12, _hoisted_15))
    ])) : createCommentVNode("", true),
    createBaseVNode("section", _hoisted_16, [
      _ctx.user.id ? (openBlock(), createElementBlock("h3", _hoisted_17, "Subscriptions")) : createCommentVNode("", true),
      createVNode(_component_AuthTiers)
    ]),
    _ctx.user.id ? (openBlock(), createElementBlock("section", _hoisted_18, [
      _hoisted_19,
      createVNode(_component_Providers)
    ])) : createCommentVNode("", true)
  ]);
}
const account = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  account as default
};
//# sourceMappingURL=account.c2a26533.js.map
