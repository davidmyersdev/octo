import { o as openBlock, c as createElementBlock, a as createBaseVNode, i as defineComponent, _ as _export_sfc, r as resolveComponent, d as createBlock, w as withCtx, b as createVNode, j as withDirectives, v as vModelText, t as toDisplayString, e as createTextVNode, f as createCommentVNode, k as renderSlot, n as normalizeClass, l as computed, m as vModelDynamic, u as unref, q as useRoute, s as reactive, x as watch, y as isSignInWithEmailLink, z as getAuth, A as useOnline, B as inject, C as useRouter, D as useStore, E as sendSignInLinkToEmail, F as signInWithEmailLink, G as signInWithRedirect, H as getRedirectResult, I as GithubAuthProvider, J as GoogleAuthProvider, T as TwitterAuthProvider, K as addCheckout, L as ref } from "./index.634b652b.js";
import { M as Modal } from "./Modal.cf447c04.js";
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    createBaseVNode("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    createBaseVNode("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
const _sfc_main$d = defineComponent({
  components: {
    EnvelopeIcon: render$2,
    Modal
  },
  props: {
    form: {
      default: () => ({
        email: "",
        error: "",
        confirmed: false,
        confirming: false
      }),
      type: Object
    }
  },
  emits: ["close", "confirm"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const confirm = () => {
      props.form.confirming = true;
      emit("confirm", props.form);
    };
    return {
      close,
      confirm
    };
  }
});
const _hoisted_1$b = /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createTextVNode("Complete "),
  /* @__PURE__ */ createBaseVNode("strong", null, "magic link"),
  /* @__PURE__ */ createTextVNode(" sign-in")
], -1);
const _hoisted_2$9 = /* @__PURE__ */ createBaseVNode("p", null, "For your security, please confirm your email address.", -1);
const _hoisted_3$8 = { class: "flex items-center gap-3 cursor-text rounded px-3 py-2 shadow outline-none mt-4 border" };
const _hoisted_4$6 = {
  key: 0,
  class: "mt-1 text-red-500"
};
const _hoisted_5$5 = {
  key: 1,
  class: "mt-1"
};
const _hoisted_6$3 = { key: 0 };
const _hoisted_7$2 = { class: "flex items-center justify-end gap-2" };
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EnvelopeIcon = resolveComponent("EnvelopeIcon");
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createBlock(_component_Modal, { onClose: _ctx.close }, {
    header: withCtx(() => [
      _hoisted_1$b
    ]),
    footer: withCtx(() => [
      createBaseVNode("div", _hoisted_7$2, [
        createBaseVNode("button", {
          type: "submit",
          class: "button-flat button-size-medium",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.confirm && _ctx.confirm(...args))
        }, "Confirm")
      ])
    ]),
    default: withCtx(() => [
      createBaseVNode("div", null, [
        _hoisted_2$9,
        createBaseVNode("label", _hoisted_3$8, [
          createVNode(_component_EnvelopeIcon, { class: "h-5 w-5" }),
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.form.email = $event),
            class: "bg-transparent flex-grow outline-none",
            placeholder: "Email address",
            type: "email"
          }, null, 512), [
            [vModelText, _ctx.form.email]
          ])
        ]),
        _ctx.form.error ? (openBlock(), createElementBlock("p", _hoisted_4$6, toDisplayString(_ctx.form.error), 1)) : _ctx.form.confirming || _ctx.form.confirmed ? (openBlock(), createElementBlock("p", _hoisted_5$5, [
          createBaseVNode("span", null, [
            createTextVNode("Verifying your email... "),
            _ctx.form.confirmed ? (openBlock(), createElementBlock("strong", _hoisted_6$3, "email verified")) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true)
      ])
    ]),
    _: 1
  }, 8, ["onClose"]);
}
const AuthMagicLinkModal = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$a]]);
const _sfc_main$c = defineComponent({
  components: {
    Modal
  },
  props: {
    error: {
      type: String
    }
  },
  emits: ["close"],
  setup(_props, { emit }) {
    const close = () => {
      emit("close");
    };
    return {
      close
    };
  }
});
const _hoisted_1$a = /* @__PURE__ */ createBaseVNode("span", null, "Complete subscription at Stripe", -1);
const _hoisted_2$8 = {
  key: 0,
  class: "mt-1 text-red-500"
};
const _hoisted_3$7 = {
  key: 1,
  class: "flex flex-col gap-4"
};
const _hoisted_4$5 = /* @__PURE__ */ createBaseVNode("p", null, "You will be redirected to Stripe in just a moment...", -1);
const _hoisted_5$4 = [
  _hoisted_4$5
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createBlock(_component_Modal, { onClose: _ctx.close }, {
    header: withCtx(() => [
      _hoisted_1$a
    ]),
    default: withCtx(() => [
      createBaseVNode("div", null, [
        _ctx.error ? (openBlock(), createElementBlock("p", _hoisted_2$8, toDisplayString(_ctx.error), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$7, _hoisted_5$4))
      ])
    ]),
    _: 1
  }, 8, ["onClose"]);
}
const AuthStripeModal = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9]]);
function render$1(_ctx, _cache) {
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
      d: "M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function render(_ctx, _cache) {
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
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
const _sfc_main$b = defineComponent({
  setup() {
    const accessibility = "cursor-pointer outline-none focus:ring focus-within:ring";
    const design = "bg-gray-200 hover:bg-gray-300 dark:bg-gray-900 dark:hover:bg-gray-800 px-3 py-2 rounded shadow whitespace-nowrap";
    const layout = "flex gap-3 items-center justify-center";
    const classes = [accessibility, design, layout].join(" ");
    return {
      classes
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
const CoreButton = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$8]]);
const _sfc_main$a = defineComponent({
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      default: "",
      type: String
    },
    placeholder: {
      type: String
    },
    type: {
      default: "text",
      type: String
    }
  },
  setup(props, { emit }) {
    const text = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    return {
      text
    };
  }
});
const _hoisted_1$9 = { class: "border border-current cursor-pointer flex gap-3 items-center px-3 py-2 rounded shadow focus-within:outline-none focus-within:ring" };
const _hoisted_2$7 = ["placeholder", "type"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", _hoisted_1$9, [
    renderSlot(_ctx.$slots, "icon"),
    withDirectives(createBaseVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.text = $event),
      class: "bg-transparent flex-grow outline-none text-current",
      placeholder: _ctx.placeholder,
      type: _ctx.type
    }, null, 8, _hoisted_2$7), [
      [vModelDynamic, _ctx.text]
    ])
  ]);
}
const FormText = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$7]]);
const _sfc_main$9 = defineComponent({
  components: {
    Button: CoreButton,
    EnvelopeIcon: render$2,
    FormText
  },
  props: {
    form: {
      default: () => ({
        confirmed: false,
        confirming: false,
        email: "",
        error: ""
      }),
      type: Object
    }
  },
  emits: ["send"],
  setup(props, { emit }) {
    const send = () => {
      props.form.confirming = true;
      emit("send", props.form);
    };
    return {
      send
    };
  }
});
const _hoisted_1$8 = { class: "flex flex-col gap-2" };
const _hoisted_2$6 = /* @__PURE__ */ createBaseVNode("span", null, [
  /* @__PURE__ */ createTextVNode("Send me a "),
  /* @__PURE__ */ createBaseVNode("strong", null, "magic link")
], -1);
const _hoisted_3$6 = {
  key: 0,
  class: "text-red-500"
};
const _hoisted_4$4 = { key: 1 };
const _hoisted_5$3 = { key: 0 };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_EnvelopeIcon = resolveComponent("EnvelopeIcon");
  const _component_FormText = resolveComponent("FormText");
  const _component_Button = resolveComponent("Button");
  return openBlock(), createElementBlock("section", _hoisted_1$8, [
    createVNode(_component_FormText, {
      modelValue: _ctx.form.email,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.form.email = $event),
      placeholder: "Enter your email address",
      type: "email"
    }, {
      icon: withCtx(() => [
        createVNode(_component_EnvelopeIcon, { class: "h-5 w-5" })
      ]),
      _: 1
    }, 8, ["modelValue"]),
    createVNode(_component_Button, { onClick: _ctx.send }, {
      default: withCtx(() => [
        _hoisted_2$6
      ]),
      _: 1
    }, 8, ["onClick"]),
    _ctx.form.error ? (openBlock(), createElementBlock("p", _hoisted_3$6, toDisplayString(_ctx.form.error), 1)) : _ctx.form.confirming || _ctx.form.confirmed ? (openBlock(), createElementBlock("p", _hoisted_4$4, [
      createBaseVNode("span", null, [
        createTextVNode("Sending your magic link... "),
        _ctx.form.confirmed ? (openBlock(), createElementBlock("strong", _hoisted_5$3, "email sent")) : createCommentVNode("", true)
      ])
    ])) : createCommentVNode("", true)
  ]);
}
const AuthMagicLink = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$6]]);
const _sfc_main$8 = {};
const _hoisted_1$7 = {
  fill: "currentColor",
  viewBox: "0 0 136 133",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "xml:space": "preserve",
  "xmlns:serif": "http://www.serif.com/",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", { d: "M67.867,0c-37.48,0 -67.867,30.388 -67.867,67.875c0,29.988 19.446,55.425 46.417,64.404c3.396,0.621 4.633,-1.475 4.633,-3.275c0,-1.608 -0.058,-5.879 -0.092,-11.541c-18.879,4.1 -22.862,-9.1 -22.862,-9.1c-3.088,-7.842 -7.538,-9.93 -7.538,-9.93c-6.162,-4.208 0.467,-4.125 0.467,-4.125c6.813,0.48 10.396,6.996 10.396,6.996c6.054,10.371 15.887,7.375 19.754,5.638c0.617,-4.384 2.367,-7.375 4.308,-9.071c-15.07,-1.713 -30.916,-7.538 -30.916,-33.546c-0,-7.408 2.646,-13.467 6.987,-18.212c-0.7,-1.717 -3.029,-8.617 0.663,-17.963c-0,0 5.7,-1.825 18.666,6.958c5.413,-1.508 11.221,-2.258 16.992,-2.283c5.763,0.025 11.571,0.775 16.992,2.283c12.958,-8.783 18.646,-6.958 18.646,-6.958c3.704,9.346 1.375,16.246 0.674,17.963c4.35,4.745 6.98,10.804 6.98,18.212c-0,26.075 -15.871,31.813 -30.992,33.492c2.438,2.096 4.608,6.237 4.608,12.571c0,9.07 -0.083,16.391 -0.083,18.616c0,1.817 1.221,3.929 4.667,3.267c26.95,-8.996 46.379,-34.417 46.379,-64.396c-0,-37.487 -30.392,-67.875 -67.879,-67.875" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$5
];
function _sfc_render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$5);
}
const GitHubIcon = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$5]]);
const _sfc_main$7 = {};
const _hoisted_1$6 = {
  fill: "currentColor",
  viewBox: "0 0 256 262",
  xmlns: "http://www.w3.org/2000/svg",
  preserveAspectRatio: "xMidYMid"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" }, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createBaseVNode("path", { d: "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" }, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" }, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" }, null, -1);
const _hoisted_6$2 = [
  _hoisted_2$4,
  _hoisted_3$4,
  _hoisted_4$3,
  _hoisted_5$2
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_6$2);
}
const GoogleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4]]);
const _sfc_main$6 = {};
const _hoisted_1$5 = {
  fill: "currentColor",
  version: "1.1",
  id: "Logo",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 248 204",
  style: { "enable-background": "new 0 0 248 204" },
  "xml:space": "preserve"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04 C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66 c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64 c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76 c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26 c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_3$3);
}
const TwitterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3]]);
const _sfc_main$5 = defineComponent({
  components: {
    Button: CoreButton,
    LocalGitHubIcon: GitHubIcon,
    LocalGoogleIcon: GoogleIcon,
    LocalTwitterIcon: TwitterIcon
  },
  emits: ["provider"],
  props: {
    form: {
      default: () => ({
        confirmed: false,
        confirming: false,
        error: ""
      }),
      type: Object
    },
    providers: {
      default: () => ["github", "google", "twitter"],
      type: Array
    }
  },
  setup(props, { emit }) {
    const allowGitHub = computed(() => props.providers.includes("github"));
    const allowGoogle = computed(() => props.providers.includes("google"));
    const allowTwitter = computed(() => props.providers.includes("twitter"));
    const clickProvider = (provider) => {
      props.form.confirmed = false;
      props.form.confirming = true;
      props.form.error = "";
      emit("provider", provider);
    };
    return {
      allowGitHub,
      allowGoogle,
      allowTwitter,
      clickProvider
    };
  }
});
const _hoisted_1$4 = { class: "flex flex-col gap-2" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("span", null, "Continue with GitHub", -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("span", null, "Continue with Google", -1);
const _hoisted_4$2 = /* @__PURE__ */ createBaseVNode("span", null, "Continue with Twitter", -1);
const _hoisted_5$1 = {
  key: 1,
  class: "text-red-500"
};
const _hoisted_6$1 = { key: 2 };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", null, "Redirecting to your provider...", -1);
const _hoisted_8$1 = [
  _hoisted_7$1
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LocalGitHubIcon = resolveComponent("LocalGitHubIcon");
  const _component_Button = resolveComponent("Button");
  const _component_LocalGoogleIcon = resolveComponent("LocalGoogleIcon");
  const _component_LocalTwitterIcon = resolveComponent("LocalTwitterIcon");
  return openBlock(), createElementBlock("section", _hoisted_1$4, [
    _ctx.allowGitHub ? (openBlock(), createBlock(_component_Button, {
      key: 0,
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.clickProvider("github"))
    }, {
      default: withCtx(() => [
        createVNode(_component_LocalGitHubIcon, { class: "h-5 w-5" }),
        _hoisted_2$2
      ]),
      _: 1
    })) : createCommentVNode("", true),
    createVNode(_component_Button, {
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.clickProvider("google"))
    }, {
      default: withCtx(() => [
        createVNode(_component_LocalGoogleIcon, { class: "h-5 w-5" }),
        _hoisted_3$2
      ]),
      _: 1
    }),
    createVNode(_component_Button, {
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.clickProvider("twitter"))
    }, {
      default: withCtx(() => [
        createVNode(_component_LocalTwitterIcon, { class: "h-5 w-5" }),
        _hoisted_4$2
      ]),
      _: 1
    }),
    _ctx.form.error ? (openBlock(), createElementBlock("p", _hoisted_5$1, toDisplayString(_ctx.form.error), 1)) : _ctx.form.confirming ? (openBlock(), createElementBlock("p", _hoisted_6$1, _hoisted_8$1)) : createCommentVNode("", true)
  ]);
}
const AuthSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2]]);
const _hoisted_1$3 = { class: "bg-gray-100 dark:bg-darkest flex flex-col gap-4 p-4 rounded shadow" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CorePanel",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("section", _hoisted_1$3, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _sfc_main$3 = defineComponent({
  components: {
    ArrowUpCircleIcon: render$1,
    AuthMagicLink,
    AuthSocialLinks,
    CoreButton,
    CorePanel: _sfc_main$4
  },
  props: {
    tier: {
      default: () => ({
        active: false,
        allowUpgrade: false,
        price: void 0,
        priceFrequency: void 0
      }),
      type: Object
    }
  },
  emits: ["magicLink", "socialLink", "upgrade"],
  setup(props, { emit }) {
    const onMagicLink = (form) => {
      emit("magicLink", {
        form,
        tier: props.tier
      });
    };
    const onSocialLink = (provider) => {
      emit("socialLink", {
        provider,
        tier: props.tier
      });
    };
    const onUpgrade = () => {
      emit("upgrade", {
        tier: props.tier
      });
    };
    return {
      onMagicLink,
      onSocialLink,
      onUpgrade
    };
  }
});
const _hoisted_1$2 = { class: "text-3xl flex flex-col gap-2 lg:flex-row justify-between" };
const _hoisted_2$1 = { class: "font-bold flex items-center" };
const _hoisted_3$1 = {
  key: 0,
  class: "bg-gray-200 dark:bg-gray-900 text-base font-normal py-0.5 px-2 rounded ml-2"
};
const _hoisted_4$1 = {
  key: 0,
  class: "font-semibold"
};
const _hoisted_5 = { class: "text-base font-normal" };
const _hoisted_6 = {
  key: 0,
  class: "flex flex-col gap-2"
};
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("span", null, "Upgrade Subscription", -1);
const _hoisted_8 = {
  key: 1,
  class: "flex flex-col gap-2"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "text-center my-2" }, "\u2014 or \u2014", -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("p", { class: "font-semibold" }, "This is what you get", -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ArrowUpCircleIcon = resolveComponent("ArrowUpCircleIcon");
  const _component_CoreButton = resolveComponent("CoreButton");
  const _component_AuthMagicLink = resolveComponent("AuthMagicLink");
  const _component_AuthSocialLinks = resolveComponent("AuthSocialLinks");
  const _component_CorePanel = resolveComponent("CorePanel");
  return openBlock(), createBlock(_component_CorePanel, { class: "flex-shrink flex-basis-1/2" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "alert"),
      createBaseVNode("h3", _hoisted_1$2, [
        createBaseVNode("span", _hoisted_2$1, [
          createBaseVNode("span", null, [
            renderSlot(_ctx.$slots, "displayName", {}, () => [
              createTextVNode(toDisplayString(_ctx.tier.displayName), 1)
            ])
          ]),
          _ctx.tier.active ? (openBlock(), createElementBlock("span", _hoisted_3$1, "Active")) : createCommentVNode("", true)
        ]),
        _ctx.tier.price && _ctx.tier.priceFrequency ? (openBlock(), createElementBlock("span", _hoisted_4$1, [
          createBaseVNode("span", null, [
            renderSlot(_ctx.$slots, "price", {}, () => [
              createTextVNode(toDisplayString(_ctx.tier.price), 1)
            ])
          ]),
          createTextVNode(),
          createBaseVNode("span", _hoisted_5, [
            renderSlot(_ctx.$slots, "priceFrequency", {}, () => [
              createTextVNode(toDisplayString(_ctx.tier.priceFrequency), 1)
            ])
          ])
        ])) : createCommentVNode("", true)
      ]),
      createBaseVNode("p", null, [
        renderSlot(_ctx.$slots, "description", {}, () => [
          createTextVNode(toDisplayString(_ctx.tier.description), 1)
        ])
      ]),
      _ctx.tier.allowUpgrade ? (openBlock(), createElementBlock("section", _hoisted_6, [
        createVNode(_component_CoreButton, {
          onClick: _ctx.onUpgrade,
          class: "text-primary"
        }, {
          default: withCtx(() => [
            createVNode(_component_ArrowUpCircleIcon, { class: "h-6" }),
            _hoisted_7
          ]),
          _: 1
        }, 8, ["onClick"])
      ])) : _ctx.tier.allowSignUp ? (openBlock(), createElementBlock("section", _hoisted_8, [
        createVNode(_component_AuthMagicLink, {
          form: _ctx.tier.forms.magicLink,
          onSend: _ctx.onMagicLink
        }, null, 8, ["form", "onSend"]),
        _hoisted_9,
        createVNode(_component_AuthSocialLinks, {
          form: _ctx.tier.forms.social,
          onProvider: _ctx.onSocialLink
        }, null, 8, ["form", "onProvider"])
      ])) : createCommentVNode("", true),
      _hoisted_10,
      renderSlot(_ctx.$slots, "perks")
    ]),
    _: 3
  });
}
const AuthTier = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CheckList",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("ul", null, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "flex items-center gap-3" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CheckListItem",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("li", _hoisted_1$1, [
        createVNode(unref(render), { class: "h-6 w-6" }),
        createBaseVNode("span", null, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
const providers = {
  github: () => new GithubAuthProvider(),
  google: () => new GoogleAuthProvider(),
  twitter: () => new TwitterAuthProvider()
};
const useAuthFlow = () => {
  const route = useRoute();
  const isMagicLinkFlow = computed(() => route.query.flow === "magic-link");
  const isSocialFlow = computed(() => route.query.flow === "social");
  return {
    isMagicLinkFlow,
    isSocialFlow
  };
};
const useAuthForm = ({ clearOnChange = true } = {}) => {
  const form = reactive({
    confirmed: false,
    confirming: false,
    email: "",
    error: ""
  });
  if (clearOnChange) {
    watch(() => form.email, () => {
      form.error = "";
      form.confirmed = false;
      form.confirming = false;
    });
  }
  return form;
};
const useMagicLink = () => {
  const isMagicLink = computed(() => isSignInWithEmailLink(getAuth(), location.href));
  const isOnline = useOnline();
  const emailAddress = inject("email");
  const isOriginalClient = computed(() => !!emailAddress);
  const router = useRouter();
  const store = useStore();
  return {
    emailAddress,
    isMagicLink,
    isOriginalClient,
    sendMagicLinkEmail: async ({ form, tier }) => {
      if (!isOnline.value) {
        form.error = "A network connection cannot be established";
        form.confirming = false;
        return false;
      }
      if (!form.email) {
        form.error = "Your email is required for this sign-in method";
        form.confirming = false;
        return false;
      }
      const accountPath = router.resolve({ path: `/account`, query: { flow: "magic-link", tier: tier.name } }).href;
      const actionCodeSettings = {
        url: `${location.protocol}//${location.host}${accountPath}`,
        handleCodeInApp: true
      };
      return sendSignInLinkToEmail(getAuth(), form.email, actionCodeSettings).then(() => {
        localStorage.setItem("email", form.email);
        form.confirming = false;
        form.confirmed = true;
        return true;
      }).catch((error) => {
        form.confirming = false;
        if (error.code === "auth/invalid-email") {
          form.error = "This email address is invalid";
          return false;
        }
        form.error = "An unknown error occurred";
        return false;
      });
    },
    signInWithMagicLink: async (form) => {
      if (!isOnline) {
        form.error = "A network connection cannot be established";
        form.confirming = false;
        return false;
      }
      if (!form.email) {
        form.error = "Your email is required to complete magic link sign-in";
        form.confirming = false;
        return false;
      }
      return signInWithEmailLink(getAuth(), form.email, location.href).then((result) => {
        if (result.additionalUserInfo && result.additionalUserInfo.isNewUser) {
          window.fathom.trackGoal("SQC05HQB", 0);
        }
        form.confirming = false;
        form.confirmed = true;
        localStorage.setItem("octo/welcome/v1", "done");
        store.commit("SET_SHOW_WELCOME", false);
        return true;
      }).catch((error) => {
        form.confirming = false;
        if (error.code === "auth/invalid-email") {
          form.error = "This email is incorrect or invalid";
          return false;
        }
        if (error.code === "auth/invalid-action-code") {
          form.error = "This magic link has expired or is invalid";
          return false;
        }
        form.error = "An unknown error occurred";
        return false;
      });
    }
  };
};
const useSocial = () => {
  const route = useRoute();
  const router = useRouter();
  return {
    redirectToSocial: async ({ provider: type, tier }) => {
      const provider = providers[type];
      router.push({
        ...route,
        query: {
          ...route.query,
          flow: "social",
          tier: tier.name
        }
      });
      return signInWithRedirect(getAuth(), provider());
    },
    signInWithSocial: async (form) => {
      return getRedirectResult(getAuth()).then((result) => {
        if (!result) {
          return false;
        }
        return result;
      }).catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          form.error = "This email address is already linked to another account";
          return false;
        }
        form.error = "An unknown error occurred";
        console.warn({ error });
        return false;
      });
    }
  };
};
const useSubscription = () => {
  const user = useUser();
  const isSubscribed = computed(() => {
    return user.value.roles.includes("ambassador") || user.value.roles.includes("subscriber");
  });
  return {
    isSubscribed,
    user
  };
};
const useUser = () => {
  return inject("user");
};
const useTiers = () => {
  const route = useRoute();
  const personal = usePersonalTier();
  const pro = useProTier();
  const active = personal.value.active || route.query.tier === "personal" ? personal : pro.value.active || route.query.tier === "pro" ? pro : void 0;
  return {
    active,
    personal,
    pro
  };
};
const usePersonalTier = () => {
  const route = useRoute();
  const { isSubscribed, user } = useSubscription();
  return computed(() => {
    return {
      active: !!user.value.id && !isSubscribed.value,
      allowSignUp: !user.value.id,
      allowUpgrade: false,
      description: "For individuals who want to maintain a personal knowledge base",
      displayName: "Personal",
      forms: {
        magicLink: useAuthForm(),
        social: useAuthForm()
      },
      isPaying: false,
      isTier: route.query.tier === "personal",
      name: "personal",
      price: "Free",
      priceFrequency: "forever"
    };
  });
};
const useProTier = () => {
  const route = useRoute();
  const { isSubscribed, user } = useSubscription();
  return computed(() => {
    return {
      active: !!user.value.id && isSubscribed.value,
      allowSignUp: !user.value.id,
      allowUpgrade: !!user.value.id && !isSubscribed.value,
      description: "For professionals who want to collaborate on documentation and more",
      displayName: "Pro",
      forms: {
        magicLink: useAuthForm(),
        social: useAuthForm()
      },
      isPaying: route.query.tier === "pro",
      isTier: route.query.tier === "pro",
      name: "pro",
      price: "4",
      priceFrequency: "monthly"
    };
  });
};
const useStripe = () => {
  const user = useUser();
  return {
    redirectToStripe: async () => {
      if (user.value.id) {
        const checkoutRef = await addCheckout({ userId: user.value.id });
        const data = checkoutRef.data();
        if (data == null ? void 0 : data.error) {
          console.warn({ error: data.error });
          return false;
        }
        window.location.assign(data == null ? void 0 : data.url);
        return true;
      }
      return false;
    }
  };
};
const _sfc_main = defineComponent({
  components: {
    AuthMagicLinkModal,
    AuthStripeModal,
    AuthTier,
    CheckList: _sfc_main$2,
    CheckListItem: _sfc_main$1
  },
  setup() {
    const isMagicLinkModalClosed = ref(false);
    const isStripeModalClosed = ref(false);
    const isRedirecting = ref(false);
    const stripeError = ref("");
    const router = useRouter();
    const { isMagicLinkFlow, isSocialFlow } = useAuthFlow();
    const modalForm = useAuthForm();
    const { emailAddress, isMagicLink, isOriginalClient, sendMagicLinkEmail, signInWithMagicLink } = useMagicLink();
    const { active: activeTier, personal: personalTier, pro: proTier } = useTiers();
    const { redirectToSocial, signInWithSocial } = useSocial();
    const { redirectToStripe } = useStripe();
    if (activeTier) {
      const flowSocialForm = isSocialFlow.value ? activeTier.value.forms.social : void 0;
      if (flowSocialForm) {
        signInWithSocial(flowSocialForm).then((result) => {
          if (!result) {
            flowSocialForm.error = "You were not signed in. Please try again.";
            return false;
          }
          flowSocialForm.confirmed = true;
          if (activeTier.value.isPaying) {
            isRedirecting.value = true;
            redirectToStripe().then((isValid) => {
              if (!isValid) {
                stripeError.value = "An unexpected error occurred while communicating with Stripe.";
              }
            });
          }
        }).catch((error) => {
          console.warn({ error });
        });
      }
    }
    if (isMagicLinkFlow.value) {
      if (isOriginalClient.value && emailAddress.value) {
        modalForm.email = emailAddress.value;
        signInWithMagicLink(modalForm).then((isSignedIn) => {
          if (isSignedIn) {
            isMagicLinkModalClosed.value = true;
            if (activeTier == null ? void 0 : activeTier.value.isPaying) {
              isRedirecting.value = true;
              redirectToStripe().then((isValid) => {
                if (!isValid) {
                  stripeError.value = "An unexpected error occurred while communicating with Stripe.";
                }
              });
            } else {
              router.push({ path: "/docs/new" });
            }
          }
        });
      }
    }
    const onMagicLinkModalClose = () => {
      isMagicLinkModalClosed.value = true;
    };
    const onStripeModalClose = () => {
      isStripeModalClosed.value = true;
    };
    const onMagicLink = ({ form, tier }) => {
      sendMagicLinkEmail({ form, tier });
    };
    const onMagicLinkConfirm = async (form) => {
      const isSignedIn = await signInWithMagicLink(form);
      if (isSignedIn) {
        isMagicLinkModalClosed.value = true;
        if (activeTier == null ? void 0 : activeTier.value.isPaying) {
          isRedirecting.value = true;
          redirectToStripe().then((isValid) => {
            if (!isValid) {
              stripeError.value = "An unexpected error occurred while communicating with Stripe.";
            }
          });
        } else {
          router.push({ path: "/docs/new" });
        }
      }
    };
    const onSocialLink = ({ provider, tier }) => {
      redirectToSocial({ provider, tier });
    };
    const onUpgrade = () => {
      isRedirecting.value = true;
      redirectToStripe().then((isValid) => {
        if (!isValid) {
          stripeError.value = "An unexpected error occurred while communicating with Stripe.";
        }
      });
    };
    return {
      isMagicLink,
      isMagicLinkFlow,
      isMagicLinkModalClosed,
      isOriginalClient,
      isRedirecting,
      isStripeModalClosed,
      modalForm,
      onMagicLink,
      onMagicLinkConfirm,
      onMagicLinkModalClose,
      onSocialLink,
      onStripeModalClose,
      onUpgrade,
      personalTier,
      proTier,
      stripeError
    };
  }
});
const _hoisted_1 = { class: "flex flex-col justify-center lg:flex-row gap-4" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("small", { class: "font-normal text-base align-text-top" }, "$", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("strong", null, "Personal", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("a", {
  href: "https://stripe.com/climate",
  target: "_blank",
  rel: "noopener noreferrer",
  class: "text-primary"
}, "funds carbon removal", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckListItem = resolveComponent("CheckListItem");
  const _component_CheckList = resolveComponent("CheckList");
  const _component_AuthTier = resolveComponent("AuthTier");
  const _component_AuthMagicLinkModal = resolveComponent("AuthMagicLinkModal");
  const _component_AuthStripeModal = resolveComponent("AuthStripeModal");
  return openBlock(), createElementBlock("section", _hoisted_1, [
    createVNode(_component_AuthTier, {
      tier: _ctx.personalTier,
      onMagicLink: _ctx.onMagicLink,
      onSocialLink: _ctx.onSocialLink,
      onUpgrade: _ctx.onUpgrade
    }, {
      perks: withCtx(() => [
        createVNode(_component_CheckList, null, {
          default: withCtx(() => [
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Unlimited private docs")
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Unlimited syncing across devices")
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Automatic backups and retention")
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Client-side encryption")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["tier", "onMagicLink", "onSocialLink", "onUpgrade"]),
    createVNode(_component_AuthTier, {
      tier: _ctx.proTier,
      onMagicLink: _ctx.onMagicLink,
      onSocialLink: _ctx.onSocialLink,
      onUpgrade: _ctx.onUpgrade
    }, {
      price: withCtx(() => [
        createBaseVNode("span", null, [
          _hoisted_2,
          createTextVNode(toDisplayString(_ctx.proTier.price), 1)
        ])
      ]),
      perks: withCtx(() => [
        createVNode(_component_CheckList, null, {
          default: withCtx(() => [
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Everything in "),
                _hoisted_3
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Unlimited public docs")
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Unlimited file attachments")
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("Realtime collaboration (coming soon)")
              ]),
              _: 1
            }),
            createVNode(_component_CheckListItem, null, {
              default: withCtx(() => [
                createTextVNode("1% of revenue "),
                _hoisted_4
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["tier", "onMagicLink", "onSocialLink", "onUpgrade"]),
    _ctx.isMagicLinkFlow && !_ctx.isMagicLinkModalClosed ? (openBlock(), createBlock(_component_AuthMagicLinkModal, {
      key: 0,
      form: _ctx.modalForm,
      onClose: _ctx.onMagicLinkModalClose,
      onConfirm: _ctx.onMagicLinkConfirm
    }, null, 8, ["form", "onClose", "onConfirm"])) : _ctx.isRedirecting && !_ctx.isStripeModalClosed ? (openBlock(), createBlock(_component_AuthStripeModal, {
      key: 1,
      error: _ctx.stripeError,
      onClose: _ctx.onStripeModalClose
    }, null, 8, ["error", "onClose"])) : createCommentVNode("", true)
  ]);
}
const AuthTiers = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  AuthTiers as A,
  GitHubIcon as G,
  TwitterIcon as T,
  GoogleIcon as a,
  useUser as u
};
//# sourceMappingURL=AuthTiers.8ba3da0e.js.map
